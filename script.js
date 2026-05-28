/* 
    Seleciona o body.

    CLASSE REUTILIZADA DA AV1: .sc_felipe_pagina
    Ela continua sendo a base geral da página.
*/
const pagina = document.querySelector(".sc_felipe_pagina");

/* 
    Seleciona o botão de folhear.

    CLASSE REUTILIZADA DA AV1: .sc_felipe_btn_transformar
    Antes era transformação; agora é navegação entre cadernos.
*/
const btnTransformar = document.getElementById("btnTransformar");

/* 
    Seleciona o card principal.

    CLASSE REUTILIZADA DA AV1: .sc_felipe_card_perfil
    Ele recebe a animação de folheamento.
*/
const cardPerfil = document.querySelector(".sc_felipe_card_perfil");

/* 
    Seleciona o grid de cards.

    CLASSE REUTILIZADA DA AV1: .sc_felipe_grid_cards
    Ele também participa da animação.
*/
const gridCards = document.querySelector(".sc_felipe_grid_cards");

/* 
    Seleciona a imagem principal.

    CLASSE REUTILIZADA DA AV1: .sc_felipe_foto
    Antes era foto do perfil; agora é imagem do almanaque.
*/
const fotoSecao = document.getElementById("fotoSecao");

/* Seleciona a legenda da imagem. */
const legendaFoto = document.getElementById("legendaFoto");

/* Seleciona o link da fonte. */
const fonteImagem = document.getElementById("fonteImagem");

/* Seleciona o rótulo do caderno. */
const chapeuSecao = document.getElementById("chapeuSecao");

/* Seleciona o título principal da seção. */
const nomeSecao = document.getElementById("nomeSecao");

/* Seleciona o subtítulo da seção. */
const subtituloSecao = document.getElementById("subtituloSecao");

/* Seleciona a introdução da seção. */
const introSecao = document.getElementById("introSecao");

/* Seleciona o primeiro card. */
const cardIdadeTitulo = document.getElementById("cardIdadeTitulo");

/* Seleciona o segundo card. */
const cardTimeTexto = document.getElementById("cardTimeTexto");

/* Seleciona o terceiro card. */
const cardComidaTexto = document.getElementById("cardComidaTexto");

/* 
    Seleciona o card principal de texto.

    CLASSE REUTILIZADA DA AV1: .sc_felipe_card_descricao
    É o card maior, usado para o texto mais importante.
*/
const cardDescricaoTexto = document.getElementById("cardDescricaoTexto");

/* Seleciona o primeiro card extra. */
const cardExtraUm = document.getElementById("cardExtraUm");

/* Seleciona o segundo card extra. */
const cardExtraDois = document.getElementById("cardExtraDois");

/* 
    Controla qual caderno está ativo.

    false = Caderno de Esportes.
    true = Caderno de Saúde.
*/
let cadernoSaudeAtivo = false;

/* Link usado como fonte geral do acervo. */
const urlAcervoMufa = "https://museudouniversodafarmacia.com.br/acervo/colecoes/almanaques-de-farmacia/";

/* 
    CADERNO 1: ESPORTES

    Conteúdo baseado no trecho “Pra Frente Brasil!”.
    A imagem brasil_1970.png deve estar na mesma pasta do index.html.
*/
const cadernoEsportes = {
    chapeu: "Caderno 1 • Variedades e Esportes",

    nome: "Pra Frente Brasil!",

    subtitulo: "Seleção brasileira tricampeã — México, 1970",

    intro: "Em clima de Copa do Mundo, o Almanaque relembra a trajetória do Brasil nas Copas e destaca a esperança de conquistar mais um título mundial.",

    imagem: "brasil_1970.png",

    alt: "Página Pra Frente Brasil do Almanaque Biotônico Fontoura com a Seleção Brasileira tricampeã no México em 1970",

    legenda: "Página “Pra Frente Brasil!” — Seleção brasileira tricampeã, México, 1970.",

    fonte: urlAcervoMufa,

    cardIdade: "Ano de Copa do Mundo",

    cardTime: "Para nós brasileiros, isto basta. Nestes próximos seis meses, este será um assunto obrigatório no trabalho, em casa, na roda de amigos e em todos os lugares.",

    cardComida: "Todos comentam a escalação, o melhor esquema de jogo e a emoção do grito de gol preso na garganta até a explosão: GOOOOL!",

    cardDescricao: "O Almanaque relembra que o Brasil já havia sofrido em 1950, se alegrado em 1958, exultado em 1962 e vibrado com o tricampeonato em 1970, no México. O grande desejo registrado no texto era ver o Brasil conquistar novamente o título mundial.",

    extraUm: "O texto afirma que esporte, higiene, saúde e bem-estar social também são partes importantes para uma nação manter-se forte e feliz.",

    extraDois: "O trecho termina em tom otimista, desejando que o Brasil tenha um ano melhor, com conquistas e esperança para o povo brasileiro.",

    botao: "Folhear: Ir para a Seção de Saúde"
};

/* 
    CADERNO 2: SAÚDE

    Representa a parte de saúde, higiene e anúncios antigos.
*/
const cadernoSaude = {
    chapeu: "Caderno 2 • Saúde, Higiene e Anúncios",

    nome: "Páginas de Saúde: O Intestino e a Beleza",

    subtitulo: "Conselhos úteis para o bem-estar da família",

    intro: "Ao folhear o mesmo Almanaque, o leitor encontra conselhos de saúde, anúncios históricos e orientações de bem-estar familiar típicas da época.",

    imagem: "https://museudouniversodafarmacia.com.br/wp-content/uploads/2021/12/001-2-150x150.jpg",

    alt: "Capa antiga do Almanaque do Biotônico Fontoura no acervo MUFA",

    legenda: "Imagem histórica do Almanaque do Biotônico Fontoura no acervo do Museu do Universo da Farmácia.",

    fonte: urlAcervoMufa,

    cardIdade: "Produto: Lacto-Purga, o regulador saudável",

    cardTime: "Garantir o bom funcionamento do organismo para refletir na disposição diária do trabalhador.",

    cardComida: "A importância da digestão equilibrada para a correta absorção dos nutrientes vitais.",

    cardDescricao: "A beleza e a cor saudável da sua pele só podem ser adquiridas com o bom funcionamento do intestino. Lacto-Purga é para isso: o laxante mais seguro que existe para cuidar da saúde de toda a família brasileira.",

    extraUm: "Estética Natural: A verdadeira beleza externa começa com o cuidado e o equilíbrio da saúde do seu interior.",

    extraDois: "Tradição: Presente no cotidiano dos lares, levando vigor aos homens e mulheres que constroem este país.",

    botao: "Folhear: Voltar para a Seção de Esportes"
};

/* 
    Função que aplica o conteúdo do caderno no HTML.

    Ela troca textos, imagem, legenda, fonte e botão.
    Isso mostra manipulação do DOM.
*/
function aplicarCaderno(caderno) {
    chapeuSecao.textContent = caderno.chapeu;
    nomeSecao.textContent = caderno.nome;
    subtituloSecao.textContent = caderno.subtitulo;
    introSecao.textContent = caderno.intro;

    fotoSecao.src = caderno.imagem;
    fotoSecao.alt = caderno.alt;
    legendaFoto.textContent = caderno.legenda;
    fonteImagem.href = caderno.fonte;

    cardIdadeTitulo.textContent = caderno.cardIdade;
    cardTimeTexto.textContent = caderno.cardTime;
    cardComidaTexto.textContent = caderno.cardComida;
    cardDescricaoTexto.textContent = caderno.cardDescricao;
    cardExtraUm.textContent = caderno.extraUm;
    cardExtraDois.textContent = caderno.extraDois;

    btnTransformar.textContent = caderno.botao;
}

/* 
    Evento do botão com animação de folhear.

    A lógica é:
    1. conteúdo sai;
    2. conteúdo troca;
    3. novo conteúdo entra.
*/
btnTransformar.addEventListener("click", function () {
    /* 
        Desativa o botão para evitar vários cliques durante a animação.
    */
    btnTransformar.disabled = true;

    /* 
        Adiciona a animação de saída no card principal.
    */
    cardPerfil.classList.add("sc_felipe_folheando_saida");

    /* 
        Adiciona a animação de saída no grid.
    */
    gridCards.classList.add("sc_felipe_folheando_saida");

    /* 
        450 milissegundos:

        É o mesmo tempo da transição do CSS: 0.45s.
        Isso dá tempo para o conteúdo sair antes da troca acontecer.
    */
    setTimeout(function () {
        /* Alterna entre os dois cadernos. */
        cadernoSaudeAtivo = !cadernoSaudeAtivo;

        /* Se for saúde, muda a paleta e aplica o conteúdo de saúde. */
        if (cadernoSaudeAtivo) {
            pagina.classList.add("sc_felipe_heroico");
            aplicarCaderno(cadernoSaude);
        }

        /* Se não for saúde, volta para o conteúdo esportivo. */
        else {
            pagina.classList.remove("sc_felipe_heroico");
            aplicarCaderno(cadernoEsportes);
        }

        /* Remove a classe de saída, pois o conteúdo antigo já saiu. */
        cardPerfil.classList.remove("sc_felipe_folheando_saida");
        gridCards.classList.remove("sc_felipe_folheando_saida");

        /* Prepara o novo conteúdo para entrar pela direita. */
        cardPerfil.classList.add("sc_felipe_folheando_entrada");
        gridCards.classList.add("sc_felipe_folheando_entrada");

        /* 
            offsetHeight força o navegador a reconhecer a posição inicial.
            Sem isso, alguns navegadores podem pular a animação de entrada.
        */
        cardPerfil.offsetHeight;
        gridCards.offsetHeight;

        /* 
            50 milissegundos:

            É uma pequena pausa técnica.
            Ela dá tempo para o navegador registrar a posição inicial da entrada.
        */
        setTimeout(function () {
            /* 
                Ao remover a classe de entrada, o CSS anima o retorno ao estado normal.
                Isso cria a entrada suave da nova página.
            */
            cardPerfil.classList.remove("sc_felipe_folheando_entrada");
            gridCards.classList.remove("sc_felipe_folheando_entrada");

            /* 
                450 milissegundos finais:

                Espera a animação de entrada terminar.
                Depois disso, o botão pode ser usado novamente.
            */
            setTimeout(function () {
                btnTransformar.disabled = false;
            }, 450);

        }, 50);

    }, 450);
});