// ============================================================
// APP.JS — IFPE Simulados
// ============================================================

let currentTest = [];
let currentQuestionIndex = 0;
let userAnswers = {};
let markedQuestions = new Set();
let timerInterval = null;
let timeRemaining = 0;
let testMode = '';

const STORAGE_KEY = 'ifpe_simulados_v2';

function loadUserData() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { history: [], totalTests: 0, totalQuestions: 0, totalCorrect: 0 };
}

function saveUserData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    loadHistory();
    setupThemeToggle();
    updateTotalQuestions();
});

function updateTotalQuestions() {
    const total = Object.values(questionBank).reduce((sum, arr) => sum + arr.length, 0);
    const el = document.getElementById('totalQuestions');
    if (el) el.textContent = total + '+';
}

// Estatísticas
function loadStats() {
    const data = loadUserData();
    document.getElementById('completedTests').textContent = data.totalTests || 0;
    if (data.totalQuestions > 0) {
        const accuracy = Math.round((data.totalCorrect / data.totalQuestions) * 100);
        document.getElementById('userAccuracy').textContent = accuracy + '%';
    } else {
        document.getElementById('userAccuracy').textContent = '—';
    }
}

// Histórico
function loadHistory() {
    const data = loadUserData();
    const historyList = document.getElementById('historyList');
    if (!data.history || data.history.length === 0) {
        historyList.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <p>Você ainda não fez nenhum simulado</p>
                <button class="btn-primary" onclick="startTest('complete')">Fazer primeiro simulado</button>
            </div>`;
        return;
    }
    const recent = data.history.slice(-5).reverse();
    historyList.innerHTML = recent.map(test => {
        const date = new Date(test.date);
        const dateStr = date.toLocaleDateString('pt-BR');
        const timeStr = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        let statusClass = test.percentage >= 70 ? 'high' : test.percentage >= 50 ? 'medium' : 'low';
        const modeLabel = test.mode === 'complete' ? 'Simulado Completo' :
            test.mode === 'portugues' ? 'Português' :
            test.mode === 'matematica' ? 'Matemática' : 'Conhecimentos Gerais';
        return `
            <div class="history-item">
                <div class="history-info">
                    <div class="history-title">${modeLabel}</div>
                    <div class="history-date">${dateStr} às ${timeStr}</div>
                </div>
                <div class="history-score ${statusClass}">${test.correct}/${test.total} (${test.percentage}%)</div>
            </div>`;
    }).join('');
}

// Theme Toggle
function setupThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
}

// Iniciar Teste
function startTest(mode) {
    testMode = mode;
    if (mode === 'complete') {
        currentTest = generateCompleteTest();
        timeRemaining = 180 * 60;
        document.getElementById('testTitle').textContent = 'Simulado Completo';
    } else {
        currentTest = generateSubjectTest(mode);
        timeRemaining = mode === 'matematica' ? 60 * 60 : 50 * 60;
        const titles = { portugues: 'Português', matematica: 'Matemática', conhecimentos: 'Conhecimentos Gerais' };
        document.getElementById('testTitle').textContent = titles[mode];
    }
    currentQuestionIndex = 0;
    userAnswers = {};
    markedQuestions = new Set();
    showScreen('testScreen');
    startTimer();
    renderQuestion();
    renderQuickNav();
}

// Timer
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) { clearInterval(timerInterval); finishTest(); }
    }, 1000);
}

function updateTimerDisplay() {
    const h = Math.floor(timeRemaining / 3600);
    const m = Math.floor((timeRemaining % 3600) / 60);
    const s = timeRemaining % 60;
    const el = document.querySelector('.test-timer span');
    if (el) el.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
    const timerEl = document.getElementById('timer');
    if (timerEl) {
        timerEl.classList.toggle('warning', timeRemaining <= 300 && timeRemaining > 0);
    }
    if (timeRemaining === 300) {
        showToast('⏰ Atenção! Faltam 5 minutos!', 'warning');
    }
}

function pad(n) { return String(n).padStart(2, '0'); }

// ============================================================
// RENDERIZAR QUESTÃO (com suporte a textos)
// ============================================================
function renderQuestion() {
    const question = currentTest[currentQuestionIndex];
    const container = document.getElementById('questionContainer');

    // Verificar se a questão tem um texto base associado
    let textHTML = '';
    if (question.textId && textBank && textBank[question.textId]) {
        const texto = textBank[question.textId];

        // Verificar se é a primeira questão deste texto neste bloco
        // (mostrar o texto apenas uma vez por bloco de questões do mesmo texto)
        const isFirstOfText = currentQuestionIndex === 0 ||
            currentTest[currentQuestionIndex - 1].textId !== question.textId;

        if (isFirstOfText || true) { // sempre mostrar o texto (usuário pode precisar reler)
            textHTML = `
                <div class="question-text-base">
                    <div class="text-base-header">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                        </svg>
                        <span>${texto.titulo}</span>
                    </div>
                    <div class="text-base-content">${texto.conteudo}</div>
                    ${texto.fonte ? `<div class="text-base-fonte">${texto.fonte}</div>` : ''}
                </div>
            `;
        }
    }

    const alternatives = Object.entries(question.alternatives).map(([letter, text]) => {
        const isSelected = userAnswers[currentQuestionIndex] === letter;
        return `
            <div class="alternative ${isSelected ? 'selected' : ''}" onclick="selectAlternative('${letter}')">
                <div class="alternative-letter">${letter}</div>
                <div class="alternative-text">${text}</div>
            </div>`;
    }).join('');

    container.innerHTML = `
        ${textHTML}
        <div class="question-card">
            <div class="question-meta">
                <span class="question-subject-badge">${question.subject}</span>
                <span class="question-topic-badge">${question.topic}</span>
                ${question.year ? `<span class="question-year-badge">IFPE ${question.year}</span>` : ''}
            </div>
            <div class="question-text">${question.question}</div>
            <div class="question-alternatives">${alternatives}</div>
        </div>
    `;

    document.getElementById('testProgress').textContent =
        `Questão ${currentQuestionIndex + 1} de ${currentTest.length}`;

    const markBtn = document.getElementById('markBtn');
    if (markedQuestions.has(currentQuestionIndex)) {
        markBtn.classList.add('marked');
        markBtn.innerHTML = '<span>🚩</span> Marcada para revisar';
    } else {
        markBtn.classList.remove('marked');
        markBtn.innerHTML = '<span>🚩</span> Marcar para revisar';
    }

    renderQuickNav();
    updateProgressBar();
}

function updateProgressBar() {
    const answered = Object.keys(userAnswers).length;
    const pct = (answered / currentTest.length) * 100;
    const bar = document.getElementById('progressBar');
    if (bar) bar.style.width = pct + '%';
    const pctEl = document.getElementById('progressPct');
    if (pctEl) pctEl.textContent = Math.round(pct) + '%';
}

// Selecionar Alternativa
function selectAlternative(letter) {
    userAnswers[currentQuestionIndex] = letter;
    renderQuestion();
    showToast('Resposta registrada!', 'success');
}

// Marcar Questão
function toggleMark() {
    if (markedQuestions.has(currentQuestionIndex)) {
        markedQuestions.delete(currentQuestionIndex);
        showToast('Marcação removida', 'info');
    } else {
        markedQuestions.add(currentQuestionIndex);
        showToast('Questão marcada para revisão 🚩', 'info');
    }
    renderQuestion();
}

// Navegação
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        smoothScrollTop();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentTest.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        smoothScrollTop();
    }
}

function smoothScrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Quick Nav
function renderQuickNav() {
    const grid = document.getElementById('quickNavGrid');
    grid.innerHTML = currentTest.map((_, index) => {
        let classes = ['quick-nav-btn'];
        if (index === currentQuestionIndex) classes.push('current');
        if (userAnswers[index]) classes.push('answered');
        if (markedQuestions.has(index)) classes.push('marked');
        return `<button class="${classes.join(' ')}" onclick="goToQuestion(${index})">${index + 1}</button>`;
    }).join('');
}

function goToQuestion(index) {
    currentQuestionIndex = index;
    renderQuestion();
    smoothScrollTop();
}

// Finalizar
function finishTest() {
    const unanswered = currentTest.length - Object.keys(userAnswers).length;
    if (unanswered > 0) {
        if (!confirm(`Você tem ${unanswered} questão(ões) sem resposta. Deseja finalizar mesmo assim?`)) return;
    }
    clearInterval(timerInterval);
    calculateResults();
}

function confirmExit() {
    if (confirm('Tem certeza que deseja sair? O progresso será perdido.')) {
        clearInterval(timerInterval);
        backToHome();
    }
}

// Calcular Resultados
function calculateResults() {
    let correct = 0, wrong = 0, skipped = 0;
    const subjectResults = {};

    currentTest.forEach((question, index) => {
        const subject = question.subject;
        if (!subjectResults[subject]) subjectResults[subject] = { total: 0, correct: 0 };
        subjectResults[subject].total++;
        if (!userAnswers[index]) {
            skipped++;
        } else if (userAnswers[index] === question.correct) {
            correct++;
            subjectResults[subject].correct++;
        } else {
            wrong++;
        }
    });

    const percentage = Math.round((correct / currentTest.length) * 100);
    const data = loadUserData();
    data.history.push({
        date: new Date().toISOString(),
        mode: testMode,
        total: currentTest.length,
        correct, wrong, skipped, percentage,
        subjects: subjectResults
    });
    data.totalTests++;
    data.totalQuestions += currentTest.length;
    data.totalCorrect += correct;
    saveUserData(data);
    showResults(correct, wrong, skipped, percentage, subjectResults);
}

// Mostrar Resultados
function showResults(correct, wrong, skipped, percentage, subjectResults) {
    showScreen('resultScreen');

    let icon = '😔', msg = 'Continue praticando!';
    if (percentage >= 80) { icon = '🏆'; msg = 'Excelente! Continue assim!'; }
    else if (percentage >= 70) { icon = '🎉'; msg = 'Muito bem! Você está no caminho certo!'; }
    else if (percentage >= 50) { icon = '💪'; msg = 'Bom esforço! Revise os erros e tente de novo.'; }

    document.getElementById('resultIcon').textContent = icon;
    document.getElementById('resultMessage').textContent = msg;
    document.getElementById('resultScore').innerHTML = `
        <span class="score-value">${correct}/${currentTest.length}</span>
        <span class="score-percentage">${percentage}%</span>
    `;

    // Barra de progresso do resultado
    const scoreBar = document.getElementById('scoreBar');
    if (scoreBar) {
        setTimeout(() => {
            scoreBar.style.width = percentage + '%';
            scoreBar.style.background = percentage >= 70 ? 'var(--success)' : percentage >= 50 ? 'var(--warning)' : 'var(--danger)';
        }, 300);
    }

    document.getElementById('correctCount').textContent = correct;
    document.getElementById('wrongCount').textContent = wrong;
    document.getElementById('skippedCount').textContent = skipped;

    const subjectsContainer = document.getElementById('resultSubjects');
    subjectsContainer.innerHTML = `
        <h4>Desempenho por Disciplina</h4>
        ${Object.entries(subjectResults).map(([subject, data]) => {
            const pct = Math.round((data.correct / data.total) * 100);
            const cls = pct >= 70 ? 'high' : pct >= 50 ? 'medium' : 'low';
            return `
                <div class="subject-result-item">
                    <div class="subject-result-info">
                        <span class="subject-name">${subject}</span>
                        <span class="subject-score ${cls}">${data.correct}/${data.total} (${pct}%)</span>
                    </div>
                    <div class="subject-bar-bg">
                        <div class="subject-bar-fill ${cls}" style="width: ${pct}%"></div>
                    </div>
                </div>
            `;
        }).join('')}
    `;
}

// Correção
function showReview() {
    showScreen('reviewScreen');
    const container = document.getElementById('reviewContainer');

    const wrongQuestions = currentTest
        .map((q, i) => ({ q, i, ua: userAnswers[i] }))
        .filter(item => item.ua !== item.q.correct);

    if (wrongQuestions.length === 0) {
        container.innerHTML = `
            <div class="review-item correct" style="text-align:center; padding:60px 20px;">
                <div style="font-size:72px; margin-bottom:16px;">🎉</div>
                <h3 style="color: var(--success); margin-bottom: 8px;">Gabarito perfeito!</h3>
                <p style="color: var(--text-secondary);">Você acertou todas as questões!</p>
            </div>`;
        return;
    }

    container.innerHTML = wrongQuestions.map(({ q, i, ua }) => {
        let textHTML = '';
        if (q.textId && textBank && textBank[q.textId]) {
            const texto = textBank[q.textId];
            textHTML = `
                <div class="question-text-base review-text-base">
                    <div class="text-base-header">
                        <span>${texto.titulo}</span>
                    </div>
                    <div class="text-base-content">${texto.conteudo}</div>
                    ${texto.fonte ? `<div class="text-base-fonte">${texto.fonte}</div>` : ''}
                </div>`;
        }

        return `
            <div class="review-item">
                ${textHTML}
                <div class="review-question-header">
                    <strong>Questão ${i + 1}</strong>
                    <span class="question-subject-badge">${q.subject}</span>
                    <span class="question-topic-badge">${q.topic}</span>
                </div>
                <div class="review-question-text">${q.question}</div>
                <div class="review-alternatives">
                    ${Object.entries(q.alternatives).map(([letter, text]) => {
                        let cls = 'review-alt';
                        if (letter === q.correct) cls += ' correct-answer';
                        if (letter === ua && letter !== q.correct) cls += ' user-wrong';
                        return `
                            <div class="${cls}">
                                <span class="alt-letter">${letter}</span>
                                <span class="alt-text">${text}</span>
                                ${letter === q.correct ? '<span class="alt-badge correct-badge">✓ Correta</span>' : ''}
                                ${letter === ua && letter !== q.correct ? '<span class="alt-badge wrong-badge">✗ Sua resposta</span>' : ''}
                            </div>`;
                    }).join('')}
                </div>
                <div class="review-explanation">
                    <div class="explanation-header">📖 Explicação</div>
                    <p>${q.explanation}</p>
                </div>
            </div>`;
    }).join('');
}

// Toast notifications
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast toast-${type} show`;
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// Navegação entre telas
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    smoothScrollTop();
}

function backToHome() {
    showScreen('homeScreen');
    loadStats();
    loadHistory();
}

function backToResult() {
    showScreen('resultScreen');
}

function showMaterial(type) {
    showToast('Em breve! Materiais de estudo chegando na próxima atualização. 📚', 'info');
}

function showHistory() {
    showToast('Histórico completo em breve! 📊', 'info');
}
