// ============================================================
// BANCO DE QUESTÕES - IFPE SIMULADOS
// Questões no estilo real das provas IFPE/ETEPE 2023-2026
// Com textos base, gabarito e explicações detalhadas
// ============================================================

// Banco de Textos Base
const textBank = {
    // ===== TEXTOS DE PORTUGUÊS =====

    pt_texto1: {
        id: "pt_texto1",
        titulo: "Texto 1 — Leia o trecho a seguir para responder às questões de 1 a 5.",
        fonte: "Adaptado de: ASSIS, Machado de. Memórias Póstumas de Brás Cubas. Rio de Janeiro: Garnier, 1881.",
        conteudo: `
            <p>Que me conste, ninguém ainda pôs em memórias o que achou de si na hora da morte. Faço-o eu, e a diferença é que não estou morto, nem moribundo; estou em plena saúde. Vivo, pois; e nessa singularidade repousa a mais importante razão do meu método. Vivendo, vejo que os homens se riem de si mesmos, e essa visão é filosófica. Se eu tivesse morrido de verdade, havia de ser outro o tom das reflexões.</p>
            <p>Não sou propriamente um autor defunto, mas um defunto autor, para quem a morte foi o maior benefício — e o único, talvez, porque nasceu com o espírito já envelhecido. Ora, nesse ponto, como em tudo, a vida e a morte são modos de ver o mesmo fenômeno; a diferença está somente na posição do observador.</p>
            <p>Mas, afinal, o que me levou a escrever estas memórias? Nada mais que um desejo de contar alguma coisa a homens que queiram me ouvir, ainda que seja apenas para confirmar que fui, em suma, um homem como todos os outros — um conjunto de acertos e erros, de luz e sombra.</p>
        `
    },

    pt_texto2: {
        id: "pt_texto2",
        titulo: "Texto 2 — Leia o poema a seguir para responder às questões de 6 a 10.",
        fonte: "DRUMMOND, Carlos. A flor e a náusea. In: A rosa do povo. Rio de Janeiro: Record, 1945.",
        conteudo: `
            <p style="font-style:italic; line-height: 2;">
            Preso à minha classe e a algumas roupas,<br>
            vou de branco pela rua cinzenta.<br>
            Melancolias, mercadorias espreitam-me.<br>
            Devo seguir até o enjôo?<br>
            Posso, sem armas, revoltar-me?<br><br>
            
            Olhos sujos nos Clean Grill's.<br>
            Bocas sem escrúpulos afirma o que nega.<br>
            Vagabundo, vou pela rua cinzenta.<br>
            Preso à minha classe e a algumas roupas,<br>
            vou de branco pela rua cinzenta.<br><br>

            Uma flor nasceu na rua!<br>
            Passem de longe, bondes, ônibus, rio de aço do tráfego.<br>
            Uma flor ainda desbotada<br>
            ilude a polícia, rompe o asfalto.<br>
            Façam completo silêncio, paralisem os negócios,<br>
            garanto que uma flor nasceu.<br><br>

            Sua cor não se percebe.<br>
            Suas pétalas não se abrem.<br>
            Seu nome não está nos livros.<br>
            É feia. Mas é realmente uma flor.
            </p>
        `
    },

    pt_texto3: {
        id: "pt_texto3",
        titulo: "Texto 3 — Leia o texto a seguir para responder às questões de 11 a 15.",
        fonte: "Adaptado de: PRIORE, Mary del. O castelo de papel: uma história de Isabel de Valois, Filipe II e uma época. Rio de Janeiro: Rocco, 2019.",
        conteudo: `
            <p>Não é difícil perceber que a imagem da mulher na sociedade sempre esteve sujeita a padrões impostos por valores culturais, religiosos e sociais. Durante séculos, a mulher foi definida pelo seu papel doméstico e familiar. No entanto, ao longo do século XX, transformações profundas alteraram esse quadro — ainda que de maneira desigual e, muitas vezes, conflituosa.</p>
            <p>A entrada da mulher no mercado de trabalho, a conquista do direito ao voto e a luta pelos direitos reprodutivos marcaram ondas do feminismo que, por sua vez, geraram resistências e avanços ao mesmo tempo. Hoje, embora haja mais mulheres em espaços de poder do que em qualquer outro momento da história, as desigualdades persistem: diferença salarial, dupla jornada de trabalho e violência de gênero continuam sendo realidades de milhões de mulheres no mundo.</p>
            <p>Diante desse cenário, o debate sobre o papel da mulher na sociedade contemporânea é, ao mesmo tempo, urgente e inacabado. Não se trata de negar as conquistas obtidas, mas de reconhecer que elas ainda convivem com estruturas de poder historicamente construídas — e que precisam ser continuamente questionadas.</p>
        `
    },

    pt_texto4: {
        id: "pt_texto4",
        titulo: "Texto 4 — Leia a crônica a seguir para responder às questões de 16 a 20.",
        fonte: "SABINO, Fernando. O menino no espelho. Rio de Janeiro: Record, 1982. (Adaptado)",
        conteudo: `
            <p>Era uma tarde de domingo, preguiçosa e morna, quando o menino Eduardo ficou sozinho em casa pela primeira vez. Os pais tinham saído para um vizinho, e ele ficara brincando com seus brinquedos espalhados pelo chão da sala.</p>
            <p>De repente, sem saber bem por quê, levantou-se, foi até o espelho do corredor, e se olhou. Olhou-se por um bom tempo, com atenção. Nunca tinha feito isso antes. Via sempre um rosto no espelho, mas nunca tinha pensado que aquele rosto fosse o seu — que aquele menino que ele estava vendo era ele mesmo.</p>
            <p>— Sou eu — disse em voz alta, com uma mistura de surpresa e espanto.</p>
            <p>E essa descoberta, tão simples quanto profunda, mudou alguma coisa nele naquela tarde de domingo. Ele voltou a brincar, como sempre, mas olhava de tempos em tempos para o espelho, para confirmar que continuava sendo ele.</p>
        `
    },

    // ===== TEXTOS DE CONHECIMENTOS GERAIS =====

    cg_texto1: {
        id: "cg_texto1",
        titulo: "Texto 5 — Leia o texto a seguir para responder às questões de 21 a 23.",
        fonte: "Adaptado de: Agência Brasil. Queimadas na Amazônia batem recorde. Brasília, 2024.",
        conteudo: `
            <p>O Brasil registrou, em 2024, o maior número de queimadas desde o início do monitoramento pelo Instituto Nacional de Pesquisas Espaciais (INPE), em 1988. Somente no mês de setembro foram detectados mais de 100 mil focos de incêndio em todo o território nacional. A Amazônia foi a região mais afetada, com mais de 530 mil quilômetros quadrados de floresta atingidos.</p>
            <p>Os incêndios têm causas diversas: desmatamento para abertura de pastagens, a seca histórica que atinge a região e a ação criminosa de grileiros e madeireiros. As partículas poluentes PM2,5, liberadas pela fumaça das queimadas, atingiram concentrações 60 vezes acima do limite considerado seguro pela Organização Mundial de Saúde (OMS) em algumas cidades amazônicas.</p>
            <p>Cientistas alertam que a Amazônia pode estar próxima de um ponto de não retorno: se mais de 20% da floresta for destruída, o ciclo hidrológico será rompido de forma irreversível, transformando parte da floresta em savana — um processo chamado de savanização da Amazônia. Hoje, o desmatamento acumulado já corresponde a 17% da área original.</p>
        `
    },

    cg_texto2: {
        id: "cg_texto2",
        titulo: "Texto 6 — Leia o texto a seguir para responder às questões de 24 a 26.",
        fonte: "Adaptado de: FUNAI. Terras Indígenas e preservação ambiental. Brasília, 2023.",
        conteudo: `
            <p>Estudos realizados pelo Instituto de Pesquisa Ambiental da Amazônia (IPAM) e pela Fundação Nacional dos Povos Indígenas (FUNAI) demonstram que as terras indígenas são as áreas com menor índice de desmatamento em toda a Amazônia. Enquanto nas áreas não protegidas o desmatamento pode chegar a 40%, nas terras indígenas esse índice raramente ultrapassa 2%.</p>
            <p>Além de preservar a biodiversidade, as terras indígenas funcionam como sumidouros de carbono — ou seja, absorvem mais CO₂ do que emitem — contribuindo diretamente para a regulação do clima global. Estima-se que as florestas tropicais da América do Sul sejam responsáveis por reter cerca de 25% das emissões globais de carbono.</p>
            <p>No entanto, pesquisas publicadas na revista científica <em>The Lancet</em> revelam que comunidades indígenas próximas a áreas de desmatamento apresentam índices de doenças respiratórias, parasitárias e dermatológicas muito superiores aos de comunidades em territórios preservados. Isso reforça a tese de que a garantia dos direitos territoriais indígenas é também uma questão de saúde pública.</p>
        `
    },

    mat_texto1: {
        id: "mat_texto1",
        titulo: "Texto — Leia a situação a seguir para responder às questões de 27 e 28.",
        fonte: "",
        conteudo: `
            <p>A escola Estadual Marechal Deodoro realizou uma pesquisa com os 200 alunos do 9º ano sobre o meio de transporte utilizado para ir à escola. Os resultados foram:</p>
            <ul style="margin-left: 20px; line-height: 2;">
                <li>40% vão de ônibus</li>
                <li>25% vão a pé</li>
                <li>20% vão de bicicleta</li>
                <li>10% vão de moto</li>
                <li>5% vão de carro</li>
            </ul>
            <p>A diretora da escola quer criar uma política de incentivo ao transporte sustentável para os próximos dois anos.</p>
        `
    },
};

// ============================================================
// BANCO DE QUESTÕES
// ============================================================

const questionBank = {

    // ============================================================
    // PORTUGUÊS
    // ============================================================
    portugues: [

        // ---- TEXTO 1 (Machado de Assis) — 5 questões ----
        {
            id: "pt_01",
            year: 2025,
            subject: "Português",
            topic: "Interpretação de Texto",
            textId: "pt_texto1",
            question: "De acordo com o narrador do Texto 1, o que torna seu método de escrever memórias singular em relação aos outros?",
            alternatives: {
                A: "O fato de escrever memórias estando vivo, ao contrário da tradição.",
                B: "O uso de linguagem filosófica inacessível ao leitor comum.",
                C: "A decisão de relatar apenas acontecimentos trágicos de sua vida.",
                D: "A escolha de não revelar sua identidade ao longo do texto.",
                E: "O fato de ser o primeiro a escrever sobre a morte com ironia."
            },
            correct: "A",
            explanation: "O narrador afirma: 'ninguém ainda pôs em memórias o que achou de si na hora da morte' e destaca que está 'em plena saúde', ou seja, escreve memórias estando vivo — o que é incomum."
        },
        {
            id: "pt_02",
            year: 2025,
            subject: "Português",
            topic: "Interpretação e Ironia",
            textId: "pt_texto1",
            question: "No segundo parágrafo, a expressão 'defunto autor' é apresentada como diferente de 'autor defunto'. Essa distinção revela que:",
            alternatives: {
                A: "o narrador morreu antes de se tornar escritor.",
                B: "a morte veio depois de toda a sua produção literária.",
                C: "o narrador considera que já nasceu com o espírito envelhecido, sendo assim um 'morto em vida'.",
                D: "o narrador é um personagem fictício criado por um autor já falecido.",
                E: "a diferença entre as expressões não possui nenhum significado relevante no contexto."
            },
            correct: "C",
            explanation: "O narrador explica que para ele 'a morte foi o maior benefício' e que 'nasceu com o espírito já envelhecido', sugerindo uma ironia: ele é um morto em vida — 'defunto autor' —, diferente de um autor que morreu após escrever ('autor defunto')."
        },
        {
            id: "pt_03",
            year: 2025,
            subject: "Português",
            topic: "Tempos Verbais",
            textId: "pt_texto1",
            question: "No trecho: 'Se eu tivesse morrido de verdade, havia de ser outro o tom das reflexões', os verbos estão conjugados, respectivamente, no:",
            alternatives: {
                A: "pretérito perfeito do subjuntivo e futuro do pretérito do indicativo.",
                B: "pretérito imperfeito do subjuntivo e condicional (futuro do pretérito).",
                C: "pretérito perfeito do indicativo e pretérito imperfeito do indicativo.",
                D: "futuro do subjuntivo e pretérito mais-que-perfeito do indicativo.",
                E: "presente do subjuntivo e futuro do presente do indicativo."
            },
            correct: "B",
            explanation: "'Tivesse morrido' está no pretérito imperfeito do subjuntivo (hipótese irreal). 'Havia de ser' é uma perífrase verbal que funciona como condicional (futuro do pretérito), indicando consequência de uma condição não realizada."
        },
        {
            id: "pt_04",
            year: 2025,
            subject: "Português",
            topic: "Conectivos e Relações Lógicas",
            textId: "pt_texto1",
            question: "No trecho do terceiro parágrafo: '...ainda que seja apenas para confirmar...', a expressão 'ainda que' estabelece uma relação de:",
            alternatives: {
                A: "condição.",
                B: "causa.",
                C: "consequência.",
                D: "concessão.",
                E: "finalidade."
            },
            correct: "D",
            explanation: "'Ainda que' é uma conjunção concessiva — introduz uma ideia que poderia ser obstáculo, mas não impede a ação principal. Equivale a 'mesmo que' ou 'embora'."
        },
        {
            id: "pt_05",
            year: 2025,
            subject: "Português",
            topic: "Figuras de Linguagem",
            textId: "pt_texto1",
            question: "No trecho: 'a vida e a morte são modos de ver o mesmo fenômeno; a diferença está somente na posição do observador', o narrador utiliza:",
            alternatives: {
                A: "hipérbole, ao exagerar a diferença entre vida e morte.",
                B: "metáfora, ao apresentar vida e morte como perspectivas de observação.",
                C: "eufemismo, ao suavizar a ideia de morte.",
                D: "personificação, ao atribuir características humanas à morte.",
                E: "onomatopeia, ao imitar sons da natureza."
            },
            correct: "B",
            explanation: "O narrador usa uma metáfora ao comparar vida e morte a 'modos de ver' — como se fossem posições de um observador diante de um mesmo fenômeno, e não estados opostos. Não há exagero (hipérbole), nem suavização (eufemismo)."
        },

        // ---- TEXTO 2 (Drummond) — 5 questões ----
        {
            id: "pt_06",
            year: 2025,
            subject: "Português",
            topic: "Interpretação de Poema",
            textId: "pt_texto2",
            question: "No poema de Drummond, o eu lírico encontra-se em conflito entre:",
            alternatives: {
                A: "a beleza da cidade e a tristeza do campo.",
                B: "sua condição social privilegiada e o desejo de transformação.",
                C: "a vida boêmia e as obrigações profissionais.",
                D: "o amor romântico e as exigências da família.",
                E: "a fé religiosa e os valores do capitalismo."
            },
            correct: "B",
            explanation: "O eu lírico está 'preso à sua classe' (condição social), vestido de branco (símbolo de distinção burguesa), mas questiona: 'Posso, sem armas, revoltar-me?' — revelando o desejo de transformação diante de uma realidade de injustiças."
        },
        {
            id: "pt_07",
            year: 2025,
            subject: "Português",
            topic: "Simbolismo no Texto Poético",
            textId: "pt_texto2",
            question: "No poema, 'Uma flor nasceu na rua' é uma imagem que simboliza:",
            alternatives: {
                A: "a beleza estética da natureza em meio à cidade.",
                B: "um ato de rebeldia e resistência diante da realidade opressora.",
                C: "a indiferença das pessoas diante da natureza.",
                D: "a superioridade da natureza sobre a tecnologia.",
                E: "um elemento decorativo sem significado profundo no poema."
            },
            correct: "B",
            explanation: "A flor 'rompe o asfalto' e 'ilude a polícia' — imagens de resistência. É feia, desconhecida, mas existe. Simboliza a possibilidade de vida, arte e transformação mesmo em condições hostis — uma metáfora da poesia (e da revolução) nascendo no mundo duro."
        },
        {
            id: "pt_08",
            year: 2025,
            subject: "Português",
            topic: "Morfossintaxe",
            textId: "pt_texto2",
            question: "No verso 'Passem de longe, bondes, ônibus, rio de aço do tráfego', o sujeito do verbo 'Passem' é:",
            alternatives: {
                A: "longe.",
                B: "bondes, ônibus, rio de aço do tráfego.",
                C: "rio de aço.",
                D: "tráfego.",
                E: "o eu lírico, implícito no poema."
            },
            correct: "B",
            explanation: "'Bondes, ônibus, rio de aço do tráfego' formam o sujeito composto do verbo 'Passem', que está no modo imperativo. O verso é uma ordem do eu lírico para que o trânsito afaste-se da flor."
        },
        {
            id: "pt_09",
            year: 2025,
            subject: "Português",
            topic: "Acentuação Gráfica",
            textId: "pt_texto2",
            question: "Assinale a alternativa em que TODAS as palavras são acentuadas pelo mesmo critério.",
            alternatives: {
                A: "pétalas, ônibus, tráfego.",
                B: "náusea, cinzenta, livre.",
                C: "também, café, avó.",
                D: "polícia, saúde, mérito.",
                E: "flor, gril, cor."
            },
            correct: "A",
            explanation: "'Pétalas', 'ônibus' e 'tráfego' são palavras proparoxítonas (sílaba tônica na antepenúltima sílaba). Todas as proparoxítonas são sempre acentuadas em português."
        },
        {
            id: "pt_10",
            year: 2025,
            subject: "Português",
            topic: "Coerência e Progressão Temática",
            textId: "pt_texto2",
            question: "A repetição dos versos 'Preso à minha classe e a algumas roupas, / vou de branco pela rua cinzenta' contribui para o sentido do poema porque:",
            alternatives: {
                A: "demonstra que o eu lírico mudou completamente de opinião ao longo do poema.",
                B: "indica que o eu lírico é incapaz de produzir novos versos.",
                C: "reforça a sensação de aprisionamento e de circularidade da condição do eu lírico.",
                D: "representa um recurso estético sem relação com o conteúdo do poema.",
                E: "sugere que o poema foi escrito por dois autores diferentes."
            },
            correct: "C",
            explanation: "A repetição (anáfora/refrão) dos mesmos versos cria uma sensação de circularidade — o eu lírico retorna ao mesmo ponto, reforçando que sua condição de aprisionamento social não se alterou, apesar de tudo que viu durante o percurso."
        },

        // ---- TEXTO 3 (Feminismo) — 5 questões ----
        {
            id: "pt_11",
            year: 2026,
            subject: "Português",
            topic: "Interpretação — Ideia Principal",
            textId: "pt_texto3",
            question: "O tema central do Texto 3 é:",
            alternatives: {
                A: "a história da conquista do direito ao voto feminino no século XIX.",
                B: "a evolução do papel da mulher na sociedade e as desigualdades que persistem.",
                C: "a superioridade do feminismo europeu em relação ao feminismo brasileiro.",
                D: "a descrição de políticas públicas bem-sucedidas para a equidade de gênero.",
                E: "a defesa de que as desigualdades de gênero já foram superadas."
            },
            correct: "B",
            explanation: "O texto apresenta a evolução histórica do papel da mulher (conquistas do séc. XX) e, ao mesmo tempo, aponta que as desigualdades persistem (diferença salarial, dupla jornada, violência). O tema é esse equilíbrio tenso entre avanços e permanências."
        },
        {
            id: "pt_12",
            year: 2026,
            subject: "Português",
            topic: "Inferência",
            textId: "pt_texto3",
            question: "A leitura do Texto 3 permite inferir que a autora:",
            alternatives: {
                A: "considera que o movimento feminista foi um fracasso histórico.",
                B: "acredita que as conquistas feministas devem ser reconhecidas e que a luta deve continuar.",
                C: "defende que as mulheres devem retornar ao papel doméstico tradicional.",
                D: "argumenta que a desigualdade salarial já foi completamente eliminada no Brasil.",
                E: "sugere que o debate sobre gênero é desnecessário na sociedade contemporânea."
            },
            correct: "B",
            explanation: "No último parágrafo, a autora afirma 'Não se trata de negar as conquistas obtidas, mas de reconhecer que elas ainda convivem com estruturas de poder... e que precisam ser continuamente questionadas.' Isso demonstra uma posição de reconhecimento das conquistas aliada à defesa da continuidade da luta."
        },
        {
            id: "pt_13",
            year: 2026,
            subject: "Português",
            topic: "Vocabulário e Semântica",
            textId: "pt_texto3",
            question: "No texto, a palavra 'ondas', em 'ondas do feminismo', foi usada no sentido de:",
            alternatives: {
                A: "movimentos do mar que chegam à praia.",
                B: "períodos ou fases históricas distintas do movimento feminista.",
                C: "manifestações artísticas relacionadas ao feminismo.",
                D: "grupos políticos radicais de dentro do movimento.",
                E: "contradições internas que fragmentaram o movimento feminista."
            },
            correct: "B",
            explanation: "No contexto dos movimentos sociais, 'ondas' é um termo técnico que designa as diferentes fases históricas do feminismo (1ª onda: sufrágio; 2ª onda: direitos trabalhistas e reprodutivos; 3ª onda: interseccionalidade etc.). É uma metáfora consagrada nos estudos de gênero."
        },
        {
            id: "pt_14",
            year: 2026,
            subject: "Português",
            topic: "Pronomes Relativos",
            textId: "pt_texto3",
            question: "No trecho: 'estruturas de poder historicamente construídas — e que precisam ser continuamente questionadas', o pronome relativo 'que' retoma:",
            alternatives: {
                A: "o poder.",
                B: "as desigualdades.",
                C: "as conquistas.",
                D: "estruturas de poder historicamente construídas.",
                E: "a sociedade contemporânea."
            },
            correct: "D",
            explanation: "O pronome relativo 'que' sempre retoma o termo antecedente mais próximo. No trecho, 'estruturas de poder historicamente construídas' é o antecedente imediato, e 'que precisam ser continuamente questionadas' é a oração adjetiva que o modifica."
        },
        {
            id: "pt_15",
            year: 2026,
            subject: "Português",
            topic: "Tipos de Discurso",
            textId: "pt_texto3",
            question: "O Texto 3 é predominantemente:",
            alternatives: {
                A: "narrativo, pois conta a história do movimento feminista em ordem cronológica.",
                B: "descritivo, pois descreve detalhadamente as características das mulheres.",
                C: "dissertativo-argumentativo, pois apresenta uma tese e argumentos para defendê-la.",
                D: "injuntivo, pois dá instruções sobre como combater o machismo.",
                E: "lírico, pois expressa os sentimentos do autor em primeira pessoa."
            },
            correct: "C",
            explanation: "O texto apresenta uma tese (o debate sobre o papel da mulher é urgente e inacabado), desenvolve argumentos (conquistas históricas, persistência de desigualdades) e conclui reforçando a posição inicial. Isso caracteriza o texto dissertativo-argumentativo."
        },

        // ---- TEXTO 4 (Fernando Sabino) — 5 questões ----
        {
            id: "pt_16",
            year: 2026,
            subject: "Português",
            topic: "Narração — Ponto de Vista",
            textId: "pt_texto4",
            question: "O Texto 4 está narrado em:",
            alternatives: {
                A: "primeira pessoa, pelo próprio Eduardo.",
                B: "segunda pessoa, com o narrador se dirigindo ao leitor.",
                C: "terceira pessoa, por um narrador que observa os acontecimentos de fora.",
                D: "primeira pessoa do plural, representando a voz coletiva da família.",
                E: "terceira pessoa, em que o narrador é o personagem disfarçado."
            },
            correct: "C",
            explanation: "O narrador usa pronomes e verbos na terceira pessoa ('o menino Eduardo', 'levantou-se', 'foi até o espelho', 'olhou-se') sem participar da história. É um narrador observador, de fora dos acontecimentos."
        },
        {
            id: "pt_17",
            year: 2026,
            subject: "Português",
            topic: "Sequência Narrativa",
            textId: "pt_texto4",
            question: "No Texto 4, qual é o clímax (o momento de maior tensão ou descoberta) da narrativa?",
            alternatives: {
                A: "A tarde de domingo preguiçosa e morna.",
                B: "Os pais saírem para visitar um vizinho.",
                C: "Eduardo olhar-se no espelho e descobrir que era ele mesmo.",
                D: "Eduardo brincar com brinquedos espalhados pelo chão.",
                E: "Eduardo voltar a brincar como sempre."
            },
            correct: "C",
            explanation: "O clímax é o momento de maior tensão dramática ou descoberta. Na crônica, o momento central é a descoberta de Eduardo ao se olhar no espelho: 'Sou eu' — uma tomada de consciência da própria identidade, pequena em aparência, mas profunda em significado."
        },
        {
            id: "pt_18",
            year: 2026,
            subject: "Português",
            topic: "Uso do Travessão",
            textId: "pt_texto4",
            question: "No trecho: '— Sou eu — disse em voz alta, com uma mistura de surpresa e espanto.', o travessão é utilizado para:",
            alternatives: {
                A: "separar o sujeito do predicado na oração.",
                B: "indicar a fala do personagem no discurso direto.",
                C: "marcar uma enumeração de elementos na frase.",
                D: "substituir uma vírgula em oração explicativa.",
                E: "destacar uma data ou número no texto."
            },
            correct: "B",
            explanation: "O travessão é o sinal de pontuação utilizado para marcar o início da fala dos personagens no discurso direto (também chamado de diálogo direto). É o recurso padrão em textos narrativos literários em português."
        },
        {
            id: "pt_19",
            year: 2026,
            subject: "Português",
            topic: "Advérbios",
            textId: "pt_texto4",
            question: "No trecho: 'Olhou-se por um bom tempo, com atenção', as expressões sublinhadas exercem a função de:",
            alternatives: {
                A: "objeto direto e objeto indireto, respectivamente.",
                B: "adjunto adverbial de tempo e adjunto adverbial de modo, respectivamente.",
                C: "sujeito e predicativo do sujeito, respectivamente.",
                D: "adjunto adverbial de modo e adjunto adverbial de tempo, respectivamente.",
                E: "complemento nominal e aposto, respectivamente."
            },
            correct: "B",
            explanation: "'Por um bom tempo' responde à pergunta 'por quanto tempo?' → adjunto adverbial de tempo. 'Com atenção' responde à pergunta 'como?' → adjunto adverbial de modo. A ordem é: tempo, modo."
        },
        {
            id: "pt_20",
            year: 2026,
            subject: "Português",
            topic: "Ortografia",
            textId: "pt_texto4",
            question: "Assinale a alternativa em que TODAS as palavras estão grafadas corretamente de acordo com o Acordo Ortográfico vigente.",
            alternatives: {
                A: "surprêsa, espelho, espirito.",
                B: "brinquedos, descoberta, identidade.",
                C: "sózinho, vizinho, tardinha.",
                D: "caraterística, padrão, refléxão.",
                E: "profúndo, brincar, simbôlo."
            },
            correct: "B",
            explanation: "'Brinquedos', 'descoberta' e 'identidade' estão corretas. 'Surprêsa' (errado: surpresa), 'sózinho' (errado: sozinho), 'caraterística' (errado: característica, com 'c'), 'profúndo' (errado: profundo, sem acento)."
        },
    ],

    // ============================================================
    // MATEMÁTICA
    // ============================================================
    matematica: [
        {
            id: "mat_01",
            year: 2025,
            subject: "Matemática",
            topic: "Proporção Direta",
            question: "Uma empresa de turismo em Recife organiza pacotes de viagem. O valor do pacote é diretamente proporcional ao número de pessoas. Se o custo total para 5 pessoas é R$ 3.500,00, quanto custará o mesmo pacote para 8 pessoas?",
            alternatives: {
                A: "R$ 4.600,00",
                B: "R$ 5.200,00",
                C: "R$ 5.600,00",
                D: "R$ 6.400,00",
                E: "R$ 7.000,00"
            },
            correct: "C",
            explanation: "Valor por pessoa = 3.500 ÷ 5 = R$ 700,00. Para 8 pessoas: 700 × 8 = R$ 5.600,00."
        },
        {
            id: "mat_02",
            year: 2025,
            subject: "Matemática",
            topic: "Porcentagem",
            question: "A tarifa de ônibus em Recife é de R$ 4,60. O governo anunciou um reajuste de 15%. Qual será o novo valor da tarifa após o reajuste?",
            alternatives: {
                A: "R$ 5,09",
                B: "R$ 5,19",
                C: "R$ 5,25",
                D: "R$ 5,29",
                E: "R$ 5,39"
            },
            correct: "D",
            explanation: "Reajuste = 4,60 × 0,15 = R$ 0,69. Novo valor = 4,60 + 0,69 = R$ 5,29."
        },
        {
            id: "mat_03",
            year: 2025,
            subject: "Matemática",
            topic: "Média Aritmética",
            question: "Em uma escola de Pernambuco, um aluno obteve as seguintes notas bimestrais: 6,5; 7,0; 8,5 e 9,0. Para passar de ano, ele precisa de média igual ou superior a 7,0. Qual foi sua média e qual foi a situação do aluno?",
            alternatives: {
                A: "Média 7,5 — Aprovado",
                B: "Média 7,0 — Aprovado",
                C: "Média 7,75 — Aprovado",
                D: "Média 7,25 — Aprovado",
                E: "Média 6,5 — Reprovado"
            },
            correct: "C",
            explanation: "Média = (6,5 + 7,0 + 8,5 + 9,0) ÷ 4 = 31,0 ÷ 4 = 7,75. Como 7,75 ≥ 7,0, o aluno foi aprovado."
        },
        {
            id: "mat_04",
            year: 2025,
            subject: "Matemática",
            topic: "Frações e Operações",
            question: "Um agricultor colheu uma certa quantidade de tomates. Ele vendeu 3/4 de sua produção. Do restante, ele doou 2/5. Que fração da produção total foi doada?",
            alternatives: {
                A: "1/5",
                B: "1/10",
                C: "2/5",
                D: "1/4",
                E: "3/8"
            },
            correct: "B",
            explanation: "Restante após venda: 1 − 3/4 = 1/4. Doação = 2/5 × 1/4 = 2/20 = 1/10 da produção total."
        },
        {
            id: "mat_05",
            year: 2025,
            subject: "Matemática",
            topic: "Equação do 1º Grau",
            question: "Joana e Pedro têm juntos R$ 180,00. Joana tem o dobro do que Pedro tem. Quanto cada um possui?",
            alternatives: {
                A: "Joana: R$ 90,00 e Pedro: R$ 90,00",
                B: "Joana: R$ 120,00 e Pedro: R$ 60,00",
                C: "Joana: R$ 100,00 e Pedro: R$ 80,00",
                D: "Joana: R$ 130,00 e Pedro: R$ 50,00",
                E: "Joana: R$ 140,00 e Pedro: R$ 40,00"
            },
            correct: "B",
            explanation: "Seja Pedro = x. Joana = 2x. Total: x + 2x = 180 → 3x = 180 → x = 60. Pedro: R$ 60,00. Joana: R$ 120,00."
        },
        {
            id: "mat_06",
            year: 2025,
            subject: "Matemática",
            topic: "Geometria Plana — Área",
            question: "Uma sala retangular tem 8 metros de comprimento e 5 metros de largura. O dono quer colocar piso cerâmico em toda a sala. Se cada caixa de cerâmica cobre 2 m² e custa R$ 45,00, quanto ele gastará no total?",
            alternatives: {
                A: "R$ 800,00",
                B: "R$ 900,00",
                C: "R$ 1.000,00",
                D: "R$ 1.080,00",
                E: "R$ 1.200,00"
            },
            correct: "B",
            explanation: "Área = 8 × 5 = 40 m². Caixas necessárias = 40 ÷ 2 = 20 caixas. Custo total = 20 × 45 = R$ 900,00."
        },
        {
            id: "mat_07",
            year: 2025,
            subject: "Matemática",
            topic: "Equação do 2º Grau",
            question: "O produto de dois números consecutivos é 72. Quais são esses números?",
            alternatives: {
                A: "7 e 8",
                B: "8 e 9",
                C: "9 e 10",
                D: "6 e 7",
                E: "10 e 11"
            },
            correct: "B",
            explanation: "Números consecutivos: n e (n+1). Equação: n(n+1) = 72 → n² + n − 72 = 0. Fatorando: (n+9)(n−8) = 0. Como n > 0, n = 8. Os números são 8 e 9 (8 × 9 = 72 ✓)."
        },
        {
            id: "mat_08",
            year: 2025,
            subject: "Matemática",
            topic: "Razão e Proporção",
            question: "Uma receita de bolo para 6 pessoas usa 3 xícaras de farinha. Se o cozinheiro quiser fazer o bolo para 10 pessoas, quantas xícaras de farinha ele precisará?",
            alternatives: {
                A: "4 xícaras",
                B: "4,5 xícaras",
                C: "5 xícaras",
                D: "5,5 xícaras",
                E: "6 xícaras"
            },
            correct: "C",
            explanation: "Proporção direta: 6 pessoas → 3 xícaras. 10 pessoas → x xícaras. 6/3 = 10/x → x = (10 × 3)/6 = 30/6 = 5 xícaras."
        },
        {
            id: "mat_09",
            year: 2026,
            subject: "Matemática",
            topic: "Juros Simples",
            question: "Carlos investiu R$ 2.000,00 em uma poupança com juros simples de 3% ao mês. Após 4 meses, qual será o montante total (capital + juros)?",
            alternatives: {
                A: "R$ 2.200,00",
                B: "R$ 2.240,00",
                C: "R$ 2.320,00",
                D: "R$ 2.400,00",
                E: "R$ 2.480,00"
            },
            correct: "B",
            explanation: "Juros = C × i × t = 2.000 × 0,03 × 4 = R$ 240,00. Montante = 2.000 + 240 = R$ 2.240,00."
        },
        {
            id: "mat_10",
            year: 2026,
            subject: "Matemática",
            topic: "Estatística — Moda e Mediana",
            question: "As temperaturas (em °C) registradas em Recife durante uma semana foram: 28, 31, 29, 31, 30, 28, 31. Qual é a moda e a mediana dessa distribuição?",
            alternatives: {
                A: "Moda = 31 e Mediana = 29",
                B: "Moda = 28 e Mediana = 31",
                C: "Moda = 31 e Mediana = 30",
                D: "Moda = 30 e Mediana = 30",
                E: "Moda = 31 e Mediana = 28"
            },
            correct: "C",
            explanation: "Moda = valor mais frequente = 31 (aparece 3 vezes). Para mediana, ordene: 28, 28, 29, 30, 31, 31, 31. O valor central (4º elemento) = 30. Moda = 31 e Mediana = 30."
        },
        {
            id: "mat_11",
            year: 2026,
            subject: "Matemática",
            topic: "Geometria — Pitágoras",
            question: "Um terreno tem formato de triângulo retângulo com catetos medindo 6 m e 8 m. Qual é o comprimento da hipotenusa?",
            alternatives: {
                A: "9 m",
                B: "10 m",
                C: "11 m",
                D: "12 m",
                E: "14 m"
            },
            correct: "B",
            explanation: "Teorema de Pitágoras: h² = a² + b² → h² = 6² + 8² = 36 + 64 = 100 → h = √100 = 10 m."
        },
        {
            id: "mat_12",
            year: 2026,
            subject: "Matemática",
            topic: "Função do 1º Grau",
            question: "Uma empresa de camisas tem custo fixo de R$ 750,00 e custo de R$ 30,00 por camisa produzida. Cada camisa é vendida por R$ 45,00. A partir de quantas camisas vendidas a empresa começa a ter lucro?",
            alternatives: {
                A: "40 camisas",
                B: "45 camisas",
                C: "50 camisas",
                D: "55 camisas",
                E: "60 camisas"
            },
            correct: "C",
            explanation: "Custo: C(x) = 30x + 750. Receita: R(x) = 45x. Ponto de equilíbrio: 45x = 30x + 750 → 15x = 750 → x = 50. A empresa precisa vender mais de 50 camisas para ter lucro."
        },
        {
            id: "mat_13",
            year: 2026,
            subject: "Matemática",
            topic: "Probabilidade",
            question: "Uma urna contém 5 bolas vermelhas, 3 bolas azuis e 2 bolas verdes. Retirando-se uma bola ao acaso, qual é a probabilidade de ela ser azul?",
            alternatives: {
                A: "1/5",
                B: "3/10",
                C: "2/5",
                D: "1/2",
                E: "3/5"
            },
            correct: "B",
            explanation: "Total de bolas = 5 + 3 + 2 = 10. Bolas azuis = 3. P(azul) = 3/10."
        },
        {
            id: "mat_14",
            year: 2026,
            subject: "Matemática",
            topic: "Conversão de Unidades e Área",
            textId: "mat_texto1",
            question: "Com base nas informações do texto, quantos alunos do 9º ano vão à escola de bicicleta?",
            alternatives: {
                A: "20 alunos",
                B: "25 alunos",
                C: "40 alunos",
                D: "50 alunos",
                E: "80 alunos"
            },
            correct: "C",
            explanation: "20% dos 200 alunos usam bicicleta: 200 × 0,20 = 40 alunos."
        },
        {
            id: "mat_15",
            year: 2026,
            subject: "Matemática",
            topic: "Porcentagem e Gráfico",
            textId: "mat_texto1",
            question: "Segundo os dados do texto, quantos alunos utilizam transporte NÃO motorizado (a pé + bicicleta) para ir à escola?",
            alternatives: {
                A: "40 alunos",
                B: "50 alunos",
                C: "80 alunos",
                D: "90 alunos",
                E: "100 alunos"
            },
            correct: "D",
            explanation: "A pé = 25% = 50 alunos. Bicicleta = 20% = 40 alunos. Total = 50 + 40 = 90 alunos."
        },
        {
            id: "mat_16",
            year: 2025,
            subject: "Matemática",
            topic: "Sistema Linear",
            question: "Em uma loja, 2 camisetas e 1 calça custam R$ 130,00. Já 1 camiseta e 2 calças custam R$ 170,00. Qual é o preço de cada peça?",
            alternatives: {
                A: "Camiseta: R$ 20,00 e Calça: R$ 90,00",
                B: "Camiseta: R$ 30,00 e Calça: R$ 70,00",
                C: "Camiseta: R$ 40,00 e Calça: R$ 50,00",
                D: "Camiseta: R$ 50,00 e Calça: R$ 40,00",
                E: "Camiseta: R$ 60,00 e Calça: R$ 30,00"
            },
            correct: "B",
            explanation: "Sistema: 2c + p = 130 e c + 2p = 170. Da primeira: p = 130 − 2c. Substituindo: c + 2(130 − 2c) = 170 → c + 260 − 4c = 170 → −3c = −90 → c = 30. Portanto p = 130 − 60 = R$ 70,00."
        },
        {
            id: "mat_17",
            year: 2025,
            subject: "Matemática",
            topic: "Raciocínio Lógico Numérico",
            question: "Observe a sequência: 2, 5, 10, 17, 26, ... Qual é o próximo número?",
            alternatives: {
                A: "35",
                B: "37",
                C: "38",
                D: "40",
                E: "42"
            },
            correct: "B",
            explanation: "A sequência segue a lei: nº = n² + 1. 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26, 6²+1=37. Outra forma: diferenças são 3, 5, 7, 9 (ímpares consecutivos) → próxima diferença é 11 → 26 + 11 = 37."
        },
        {
            id: "mat_18",
            year: 2025,
            subject: "Matemática",
            topic: "Geometria Espacial — Volume",
            question: "Uma caixa de leite tem formato de paralelepípedo com base de 6 cm × 4 cm e altura de 10 cm. Quantos litros de leite ela comporta? (1 litro = 1.000 cm³)",
            alternatives: {
                A: "0,10 litro",
                B: "0,18 litro",
                C: "0,20 litro",
                D: "0,24 litro",
                E: "0,30 litro"
            },
            correct: "D",
            explanation: "Volume = comprimento × largura × altura = 6 × 4 × 10 = 240 cm³. Em litros: 240 ÷ 1.000 = 0,24 litros."
        },
        {
            id: "mat_19",
            year: 2026,
            subject: "Matemática",
            topic: "Porcentagem — Desconto",
            question: "Um tênis custava R$ 280,00. A loja deu um desconto de 15% e o cliente ainda recebeu um cupom de R$ 10,00 de desconto adicional. Quanto o cliente pagou pelo tênis?",
            alternatives: {
                A: "R$ 218,00",
                B: "R$ 224,00",
                C: "R$ 228,00",
                D: "R$ 234,00",
                E: "R$ 238,00"
            },
            correct: "C",
            explanation: "Desconto de 15%: 280 × 0,85 = R$ 238,00. Com o cupom de R$ 10,00: 238 − 10 = R$ 228,00."
        },
        {
            id: "mat_20",
            year: 2026,
            subject: "Matemática",
            topic: "Conversão de Medidas",
            question: "Os incêndios na Amazônia destruíram uma área de 530.000 km². Um campo de futebol oficial tem dimensões de 105 m × 68 m. Quantos campos de futebol equivalem aproximadamente a essa área? (Use 1 km² = 1.000.000 m²)",
            alternatives: {
                A: "7,4 milhões de campos",
                B: "74 milhões de campos",
                C: "740 milhões de campos",
                D: "54 milhões de campos",
                E: "540 milhões de campos"
            },
            correct: "B",
            explanation: "Área = 530.000 km² = 530.000 × 1.000.000 = 5,3 × 10¹¹ m². Área do campo = 105 × 68 = 7.140 m². Campos = 5,3 × 10¹¹ ÷ 7.140 ≈ 74.230.000 ≈ 74 milhões."
        },
    ],

    // ============================================================
    // CIÊNCIAS
    // ============================================================
    ciencias: [
        {
            id: "cn_01",
            year: 2025,
            subject: "Ciências",
            topic: "Ecologia — Fatores Bióticos e Abióticos",
            question: "Um ecossistema é formado por fatores bióticos (seres vivos) e fatores abióticos (sem vida). Assinale a alternativa que apresenta SOMENTE fatores abióticos.",
            alternatives: {
                A: "Fungos, água, temperatura e vento.",
                B: "Temperatura, luminosidade, água e umidade.",
                C: "Bactérias, solo, temperatura e ar.",
                D: "Solo, animais, nutrientes e luz.",
                E: "Plantas, calor, umidade e vento."
            },
            correct: "B",
            explanation: "Fatores ABIÓTICOS = componentes sem vida: temperatura, luz/luminosidade, água, umidade, solo (componentes minerais), pressão atmosférica. Fungos, bactérias, animais e plantas são fatores BIÓTICOS (seres vivos)."
        },
        {
            id: "cn_02",
            year: 2025,
            subject: "Ciências",
            topic: "Fisiologia — Homeostase",
            question: "O corpo humano mantém sua temperatura interna constante em torno de 36,5°C mesmo quando o ambiente está muito frio ou muito quente. Esse mecanismo de equilíbrio interno do organismo é chamado de:",
            alternatives: {
                A: "Fotossíntese.",
                B: "Fermentação.",
                C: "Homeostase.",
                D: "Osmose.",
                E: "Catálise."
            },
            correct: "C",
            explanation: "Homeostase é a capacidade do organismo de manter o equilíbrio de suas condições internas (temperatura, pH, concentração de glicose etc.) mesmo diante de variações no ambiente externo."
        },
        {
            id: "cn_03",
            year: 2025,
            subject: "Ciências",
            topic: "Botânica — Classificação das Plantas",
            question: "As plantas são classificadas em grupos de acordo com suas características. As plantas que possuem raízes, caule, folhas, flores E frutos que envolvem as sementes são denominadas:",
            alternatives: {
                A: "Gimnospermas.",
                B: "Pteridófitas.",
                C: "Briófitas.",
                D: "Angiospermas.",
                E: "Algas."
            },
            correct: "D",
            explanation: "ANGIOSPERMAS = plantas com flor E fruto (sementes envolvidas pelo fruto). GIMNOSPERMAS têm sementes expostas, sem fruto. Pteridófitas e briófitas não têm sementes. Algas não são plantas terrestres."
        },
        {
            id: "cn_04",
            year: 2025,
            subject: "Ciências",
            topic: "Anatomia — Sistema Urinário",
            question: "O sistema urinário é responsável por filtrar o sangue e eliminar substâncias indesejáveis. Além dos rins, os órgãos que compõem esse sistema são:",
            alternatives: {
                A: "Estômago, uretra e bexiga.",
                B: "Intestino grosso, ureter e bexiga.",
                C: "Ureter, bexiga urinária e uretra.",
                D: "Fígado, vesícula biliar e bexiga.",
                E: "Pâncreas, intestino delgado e uretra."
            },
            correct: "C",
            explanation: "O sistema urinário é composto por: Rins (filtram o sangue) → Ureteres (conduzem a urina aos rins até a bexiga) → Bexiga urinária (armazena a urina) → Uretra (elimina a urina para o exterior)."
        },
        {
            id: "cn_05",
            year: 2025,
            subject: "Ciências",
            topic: "Química — Misturas",
            question: "Uma mistura é homogênea quando suas partes não podem ser distinguidas a olho nu. Assinale a alternativa que apresenta somente misturas HOMOGÊNEAS.",
            alternatives: {
                A: "Areia e água; leite e água.",
                B: "Água com sal; álcool com água.",
                C: "Granito; óleo e água.",
                D: "Água com areia; açúcar com sal.",
                E: "Sangue; ar atmosférico."
            },
            correct: "B",
            explanation: "Misturas HOMOGÊNEAS (solução, 1 fase visível): água com sal, álcool com água. Misturas HETEROGÊNEAS (mais de 1 fase): areia e água, granito, óleo e água. Sangue e ar são misturas heterogêneas (apresentam componentes distintos)."
        },
        {
            id: "cn_06",
            year: 2025,
            subject: "Ciências",
            topic: "Genética — DNA e Hereditariedade",
            question: "O DNA (ácido desoxirribonucleico) é a molécula responsável por armazenar as informações genéticas dos seres vivos. Sobre o DNA, é INCORRETO afirmar que:",
            alternatives: {
                A: "É formado por duas fitas em formato de dupla hélice.",
                B: "Está localizado no núcleo das células eucarióticas.",
                C: "É composto por nucleotídeos com as bases A, T, C e G.",
                D: "É produzido apenas na adolescência, quando o organismo se desenvolve.",
                E: "Carrega as instruções para a síntese de proteínas."
            },
            correct: "D",
            explanation: "O DNA está presente em TODAS as células do organismo desde a fecundação (quando o zigoto é formado), não sendo produzido apenas na adolescência. As demais afirmativas são verdadeiras sobre o DNA."
        },
        {
            id: "cn_07",
            year: 2025,
            subject: "Ciências",
            topic: "Física — Energia",
            question: "Uma lâmpada LED transforma energia elétrica em energia luminosa. Esse processo é um exemplo de:",
            alternatives: {
                A: "Conservação de massa.",
                B: "Transformação de energia.",
                C: "Geração espontânea de energia.",
                D: "Destruição de energia elétrica.",
                E: "Conservação do movimento."
            },
            correct: "B",
            explanation: "A lei da conservação de energia afirma que a energia não é criada nem destruída, apenas transformada de uma forma em outra. A lâmpada LED transforma energia elétrica em energia luminosa (e um pouco de calor)."
        },
        {
            id: "cn_08",
            year: 2026,
            subject: "Ciências",
            topic: "Ecologia — Poluição",
            textId: "cg_texto1",
            question: "Com base no Texto 5, as partículas PM2,5 presentes na fumaça das queimadas são prejudiciais à saúde porque:",
            alternatives: {
                A: "Causam desmatamento direto nas florestas.",
                B: "São vírus e bactérias que atacam o sistema respiratório.",
                C: "São partículas finas que penetram nos pulmões e causam doenças respiratórias.",
                D: "Elevam a temperatura do planeta por serem gases de efeito estufa.",
                E: "Aumentam a quantidade de chuvas na região amazônica."
            },
            correct: "C",
            explanation: "PM2,5 são partículas finas (diâmetro menor que 2,5 micrômetros) liberadas pela queima de biomassa. Por serem muito pequenas, penetram profundamente nos pulmões e podem chegar à corrente sanguínea, causando doenças respiratórias e cardiovasculares."
        },
        {
            id: "cn_09",
            year: 2026,
            subject: "Ciências",
            topic: "Ecologia — Impactos Ambientais",
            textId: "cg_texto1",
            question: "O Texto 5 menciona o risco de 'savanização da Amazônia'. Esse fenômeno ocorreria porque:",
            alternatives: {
                A: "O aumento das chuvas causaria o alagamento permanente da floresta.",
                B: "O desmatamento e a seca romperiam o ciclo hidrológico, transformando a floresta em savana.",
                C: "Novas espécies de gramíneas invasoras substituiriam as árvores da floresta.",
                D: "A poluição do solo impediria o crescimento de novas árvores.",
                E: "O aumento da temperatura global eliminaria apenas as espécies animais da Amazônia."
            },
            correct: "B",
            explanation: "O texto explica que, se mais de 20% da floresta for destruída, 'o ciclo hidrológico será rompido de forma irreversível, transformando parte da floresta em savana'. O ciclo hidrológico amazônico depende da floresta para gerar chuvas — sem a floresta, a umidade diminui e o clima fica mais seco."
        },
        {
            id: "cn_10",
            year: 2026,
            subject: "Ciências",
            topic: "Saúde e Meio Ambiente",
            textId: "cg_texto2",
            question: "De acordo com o Texto 6, pesquisas publicadas em revista científica demonstram que comunidades indígenas próximas a áreas desmatadas apresentam:",
            alternatives: {
                A: "Menor incidência de doenças por causa do ar mais fresco.",
                B: "Maior desenvolvimento econômico em relação às demais comunidades.",
                C: "Índices superiores de doenças respiratórias, parasitárias e dermatológicas.",
                D: "Resistência natural às doenças causadas pela poluição.",
                E: "Maior acesso a serviços de saúde nas regiões desmatadas."
            },
            correct: "C",
            explanation: "O texto afirma literalmente que 'comunidades indígenas próximas a áreas de desmatamento apresentam índices de doenças respiratórias, parasitárias e dermatológicas muito superiores aos de comunidades em territórios preservados'."
        }
    ],

    // ============================================================
    // HISTÓRIA
    // ============================================================
    historia: [
        {
            id: "hist_01",
            year: 2025,
            subject: "História",
            topic: "Brasil República — Tenentismo",
            question: "O movimento de 5 de julho de 1922, conhecido como 'Dezoito do Forte de Copacabana', caracterizou-se como um movimento de:",
            alternatives: {
                A: "Marinheiros que reivindicavam o fim dos castigos físicos na Marinha.",
                B: "Generais que tentavam impedir a posse do presidente eleito.",
                C: "Médios oficiais do Exército contrários às práticas eleitorais fraudulentas da República Oligárquica.",
                D: "Trabalhadores industriais em greve por melhores salários.",
                E: "Fazendeiros que defendiam o retorno da monarquia no Brasil."
            },
            correct: "C",
            explanation: "O Tenentismo foi um movimento de oficiais de patente intermediária (tenentes e capitães) que se opunham às práticas oligárquicas da Primeira República, como o coronelismo, o voto de cabresto e a política do 'café com leite' (alternância de poder entre SP e MG)."
        },
        {
            id: "hist_02",
            year: 2025,
            subject: "História",
            topic: "Brasil República — Coronelismo",
            question: "O coronelismo na Primeira República (1889-1930) representou:",
            alternatives: {
                A: "Uma prática política baseada na manipulação do eleitorado por meio de relações clientelistas e de dependência.",
                B: "Uma prática eleitoral democrática com voto universal e secreto garantido a todos.",
                C: "Um fenômeno que promovia a participação política igualitária das camadas populares.",
                D: "Uma forma de as classes populares controlarem as elites rurais.",
                E: "Um sistema político exclusivo do Sul do Brasil, sem influência no Nordeste."
            },
            correct: "A",
            explanation: "Coronelismo = poder dos grandes fazendeiros (coronéis) que controlavam o eleitorado local por meio do 'voto de cabresto' (votar como o coronel mandava), relações de dependência econômica e troca de favores (clientelismo). Era a base do poder político na Primeira República."
        },
        {
            id: "hist_03",
            year: 2025,
            subject: "História",
            topic: "Ditadura Militar — Anistia",
            question: "A Lei da Anistia, promulgada em 1979 durante a ditadura militar brasileira, foi controversa porque:",
            alternatives: {
                A: "Puniu com rigor todos os militares responsáveis por torturas durante o regime.",
                B: "Permitiu o retorno dos exilados políticos, mas também impediu a punição dos torturadores.",
                C: "Foi rejeitada pelos movimentos sociais por não beneficiar nenhum preso político.",
                D: "Restaurou imediatamente a democracia no Brasil.",
                E: "Foi uma exigência dos Estados Unidos para manter relações diplomáticas com o Brasil."
            },
            correct: "B",
            explanation: "A Lei da Anistia (1979) foi considerada 'ampla, geral e irrestrita' por parte dos movimentos sociais. Ela permitiu o retorno de exilados políticos e a libertação de presos por crimes políticos, MAS também anistiou os agentes do Estado responsáveis por torturas e mortes — gerando impunidade e polêmica que perdura até hoje."
        },
        {
            id: "hist_04",
            year: 2026,
            subject: "História",
            topic: "Brasil Colônia — Escravidão",
            question: "A escravidão africana no Brasil colonial teve como principal justificativa econômica:",
            alternatives: {
                A: "A necessidade de mão de obra barata para as grandes lavouras de exportação, como a cana-de-açúcar.",
                B: "A ausência de povos indígenas no território brasileiro.",
                C: "A exigência da Igreja Católica de evangelizar os africanos.",
                D: "A escassez de recursos naturais que impedia o trabalho remunerado.",
                E: "O interesse dos africanos em imigrar voluntariamente para o Brasil."
            },
            correct: "A",
            explanation: "A escravidão africana foi adotada principalmente para suprir a demanda de mão de obra nas grandes propriedades açucareiras (e depois no café, mineração e outras atividades). Era um trabalho compulsório e brutal que gerava enormes lucros para a elite colonial e metropolitana."
        },
        {
            id: "hist_05",
            year: 2026,
            subject: "História",
            topic: "Movimentos Sociais — Canudos",
            question: "A Guerra de Canudos (1896-1897), ocorrida no sertão da Bahia, foi um conflito que envolveu:",
            alternatives: {
                A: "Fazendeiros nordestinos contra imigrantes europeus que ocupavam suas terras.",
                B: "Uma comunidade liderada por Antônio Conselheiro, que resistiu militarmente às forças do governo republicano.",
                C: "Trabalhadores rurais em greve contra a escravidão ainda vigente no Nordeste.",
                D: "Militares republicanos que tentavam reinstaurar a monarquia no Nordeste.",
                E: "Índios Tupinambás que lutavam pela demarcação de suas terras."
            },
            correct: "B",
            explanation: "Canudos foi uma comunidade formada por sertanejos pobres, liderados por Antônio Conselheiro, que rejeitava a República e suas cobranças de impostos. O governo republicano considerou o movimento monarquista e enviou quatro expedições militares. No fim, Canudos foi destruída e seus habitantes massacrados."
        },
        {
            id: "hist_06",
            year: 2026,
            subject: "História",
            topic: "Direitos Humanos — ONU",
            question: "A Declaração Universal dos Direitos Humanos foi proclamada pela ONU em 1948, após o fim da Segunda Guerra Mundial. Ela surgiu como resposta a:",
            alternatives: {
                A: "As disputas territoriais entre países da Europa Ocidental.",
                B: "As atrocidades cometidas durante a Segunda Guerra Mundial, incluindo o Holocausto.",
                C: "O avanço do socialismo soviético nos países europeus após 1945.",
                D: "A necessidade de regulamentar o comércio internacional do pós-guerra.",
                E: "Os conflitos coloniais entre Europa e África durante o século XX."
            },
            correct: "B",
            explanation: "A DUDH (1948) foi elaborada como resposta direta ao horror da Segunda Guerra Mundial e do Holocausto nazista. O objetivo era estabelecer um conjunto de direitos inalienáveis para todos os seres humanos, independentemente de raça, religião ou nacionalidade, para evitar que tais atrocidades se repetissem."
        }
    ],

    // ============================================================
    // GEOGRAFIA
    // ============================================================
    geografia: [
        {
            id: "geo_01",
            year: 2025,
            subject: "Geografia",
            topic: "Capitalismo — Fases",
            question: "A fase do capitalismo industrial, iniciada com a Revolução Industrial no século XVIII, é marcada, principalmente, pela:",
            alternatives: {
                A: "Predominância da agricultura de subsistência como base econômica.",
                B: "Produção artesanal descentralizada e pelo comércio local.",
                C: "Mecanização da produção, surgimento das fábricas e crescimento das cidades.",
                D: "Redução das desigualdades sociais e distribuição igualitária da riqueza.",
                E: "Descentralização das atividades econômicas para o campo."
            },
            correct: "C",
            explanation: "O capitalismo industrial (Revolução Industrial, séc. XVIII-XX) é caracterizado pela: mecanização (máquinas a vapor → substituição do trabalho manual), surgimento das fábricas, êxodo rural (migração campo→cidade) e crescimento urbano acelerado. Gerou riqueza para a burguesia e exploração do proletariado."
        },
        {
            id: "geo_02",
            year: 2025,
            subject: "Geografia",
            topic: "Geomorfologia — Formação do Relevo",
            question: "A principal força responsável pela formação das grandes cadeias montanhosas do planeta, como os Andes e o Himalaia, é:",
            alternatives: {
                A: "A erosão causada por rios e glaciares ao longo de milhares de anos.",
                B: "A intervenção humana por meio da mineração em larga escala.",
                C: "A movimentação e o choque das placas tectônicas.",
                D: "A variação climática que modifica a composição das rochas.",
                E: "A vegetação densa que protege o solo contra o desgaste."
            },
            correct: "C",
            explanation: "As grandes cadeias montanhosas são formadas pelo encontro de placas tectônicas: quando duas placas continentais colidem, as rochas se dobram e se elevam, formando montanhas (ex: Himalaia = choque da placa Indo-Australiana com a Eurasiática; Andes = subducção da placa de Nazca sob a Sul-Americana)."
        },
        {
            id: "geo_03",
            year: 2025,
            subject: "Geografia",
            topic: "Clima do Nordeste Brasileiro",
            question: "O Nordeste brasileiro apresenta uma das maiores diversidades climáticas do país. Sobre o clima da região, é CORRETO afirmar que:",
            alternatives: {
                A: "O Nordeste tem clima homogêneo, com chuvas distribuídas igualmente em toda a região.",
                B: "O sertão nordestino tem clima semiárido, com chuvas escassas e irregulares e longos períodos de seca.",
                C: "O litoral nordestino apresenta clima desértico por estar próximo ao mar.",
                D: "O Nordeste é a região mais fria do Brasil por causa dos ventos alísios.",
                E: "A Caatinga ocorre no litoral nordestino, onde as chuvas são abundantes o ano todo."
            },
            correct: "B",
            explanation: "O Nordeste tem grande diversidade climática: Zona da Mata (litoral) → clima tropical úmido com chuvas abundantes; Agreste (transição) → clima subtropical; Sertão (interior) → clima semiárido com precipitação anual abaixo de 800mm, longos períodos de estiagem e bioma Caatinga."
        },
        {
            id: "geo_04",
            year: 2026,
            subject: "Geografia",
            topic: "Globalização e Desigualdade",
            question: "A globalização é um processo de integração econômica, cultural e tecnológica entre os países. Uma das principais críticas a esse processo é que ele:",
            alternatives: {
                A: "Reduziu as desigualdades entre países ricos e pobres ao distribuir renda globalmente.",
                B: "Eliminou as diferenças culturais, criando uma cultura universal homogênea.",
                C: "Aprofundou as desigualdades socioeconômicas entre países e dentro de cada nação.",
                D: "Beneficiou igualmente todos os países, independentemente do grau de desenvolvimento.",
                E: "Acabou com a influência das grandes corporações transnacionais na economia mundial."
            },
            correct: "C",
            explanation: "A globalização, embora tenha aumentado o fluxo de capitais, bens e informações, concentrou os benefícios nos países desenvolvidos e nas elites dos países em desenvolvimento. As desigualdades entre países ricos e pobres — e dentro de cada país — se aprofundaram. Países periféricos ficaram vulneráveis às crises financeiras dos países centrais."
        },
        {
            id: "geo_05",
            year: 2026,
            subject: "Geografia",
            topic: "Biomas Brasileiros",
            question: "O Brasil possui grande biodiversidade distribuída em diferentes biomas. Sobre os biomas brasileiros, assinale a alternativa CORRETA.",
            alternatives: {
                A: "A Amazônia ocupa apenas 10% do território brasileiro e está localizada no Sul do país.",
                B: "A Caatinga é um bioma exclusivamente brasileiro, encontrado no interior do Nordeste.",
                C: "O Cerrado é o bioma mais preservado do Brasil, sem impactos do agronegócio.",
                D: "A Mata Atlântica ainda cobre mais de 85% de sua área original.",
                E: "O Pantanal é o maior bioma do Brasil, maior que a Amazônia."
            },
            correct: "B",
            explanation: "A Caatinga é o único bioma exclusivamente brasileiro (endêmico), localizado principalmente no semiárido nordestino. A Amazônia ocupa cerca de 49% do território. A Caatinga, o Cerrado e a Mata Atlântica estão fortemente ameaçados. A Mata Atlântica perdeu mais de 85% de sua cobertura original (restam menos de 12%)."
        },
        {
            id: "geo_06",
            year: 2026,
            subject: "Geografia",
            topic: "Cartografia — Escalas",
            question: "Em um mapa com escala 1:500.000, uma distância medida no mapa de 4 cm corresponde a qual distância real no terreno?",
            alternatives: {
                A: "2 km",
                B: "5 km",
                C: "10 km",
                D: "20 km",
                E: "50 km"
            },
            correct: "D",
            explanation: "Escala 1:500.000 significa que 1 cm no mapa = 500.000 cm no terreno = 5 km. Portanto, 4 cm no mapa = 4 × 5 km = 20 km no terreno real."
        },
        {
            id: "geo_07",
            year: 2026,
            subject: "Geografia",
            topic: "Terras Indígenas e Meio Ambiente",
            textId: "cg_texto2",
            question: "De acordo com o Texto 6, as terras indígenas são importantes para o meio ambiente porque:",
            alternatives: {
                A: "Permitem a expansão do agronegócio sustentável na Amazônia.",
                B: "Possuem os maiores índices de desmatamento do Brasil.",
                C: "Funcionam como sumidouros de carbono, absorvendo mais CO₂ do que emitem.",
                D: "São as únicas áreas onde a biodiversidade amazônica ainda pode ser encontrada.",
                E: "Reduzem a temperatura global ao cobrirem mais de 50% do território nacional."
            },
            correct: "C",
            explanation: "O texto afirma que 'as terras indígenas funcionam como sumidouros de carbono — absorvem mais CO₂ do que emitem — contribuindo diretamente para a regulação do clima global'. Além disso, têm o menor índice de desmatamento (abaixo de 2%, contra até 40% em áreas não protegidas)."
        }
    ]
};

// ============================================================
// FUNÇÕES DE GERAÇÃO DOS SIMULADOS
// ============================================================

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function generateCompleteTest() {
    const portugues = shuffleArray(questionBank.portugues).slice(0, 10);
    const matematica = shuffleArray(questionBank.matematica).slice(0, 10);
    const ciencias = shuffleArray(questionBank.ciencias).slice(0, 4);
    const historia = shuffleArray(questionBank.historia).slice(0, 3);
    const geografia = shuffleArray(questionBank.geografia).slice(0, 3);
    return [...portugues, ...matematica, ...ciencias, ...historia, ...geografia];
}

function generateSubjectTest(subject) {
    switch (subject) {
        case 'portugues':
            return shuffleArray(questionBank.portugues).slice(0, 10);
        case 'matematica':
            return shuffleArray(questionBank.matematica).slice(0, 10);
        case 'conhecimentos':
            return [
                ...shuffleArray(questionBank.ciencias).slice(0, 4),
                ...shuffleArray(questionBank.historia).slice(0, 3),
                ...shuffleArray(questionBank.geografia).slice(0, 3)
            ];
        default:
            return [];
    }
}

window.questionBank = questionBank;
window.textBank = textBank;
window.generateCompleteTest = generateCompleteTest;
window.generateSubjectTest = generateSubjectTest;
