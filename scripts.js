let posicao = null;

const posiciona = ({ x, y }) => {
  //Prevê as possições possíveis para o cavalo se mover
  for (let coluna = 0; coluna < 8; coluna++) {
    for (let linha = 0; linha < 8; linha++) {
      if (
        /*Baixo Direita 1*/ (coluna - 2 == Math.abs(x) &&
          linha - 1 == Math.abs(y)) ||
        /*Baixo Direita 2*/ (coluna - 1 == Math.abs(x) &&
          linha - 2 == Math.abs(y)) ||
        /*Cima Direita 1*/ (coluna + 1 == Math.abs(x) &&
          linha - 2 == Math.abs(y)) ||
        /*Cima Direita 2*/ (coluna + 2 == Math.abs(x) &&
          linha - 1 == Math.abs(y)) ||
        /*Cima Esquerda 1*/ (coluna + 2 == Math.abs(x) &&
          linha + 1 == Math.abs(y)) ||
        /*Cima Esquerda 2*/ (coluna + 1 == Math.abs(x) &&
          linha + 2 == Math.abs(y)) ||
        /*Baixo Esquerda 2*/ (coluna - 1 == Math.abs(x) &&
          linha + 2 == Math.abs(y)) ||
        /*Baixo Esquerda 2*/ (coluna - 2 == Math.abs(x) &&
          linha + 1 == Math.abs(y))
      ) {
        document
          .getElementById(`casa${coluna * 8 + linha}`)
          .classList.add("verde");
        //Deixa a casa como disabled = false
        document.getElementById(`casa${coluna * 8 + linha}`).classList.add("abled")
      }
    }
  }
};

//Carrega o tabuleiro
const tabuleiro = document.getElementById("tabuleiro");

for (let i = 0; i < 8; i++) {
  //Linhas
  for (let j = 0; j < 8; j++) {
    //Colunas
    //Cria um botão e adiona atributos a ele
    const botao = document.createElement("button");
    botao.setAttribute("type", "button");
    botao.setAttribute("data-x", i);
    botao.setAttribute("data-y", j);
    botao.setAttribute("id", `casa${i * 8 + j}`);
    const color = (i + j) % 2 === 0 ? "black" : "white";
    botao.setAttribute("class", `casa ${color}`);
    //Conta as jogadas
    var jogadas = 0;

    botao.addEventListener("click", () => {
      posiciona(botao.dataset);
      if (posicao !== null) {
        posicao.innerHTML = "";
      }
      //Adiciona a imgame do cavalo
      botao.innerHTML = '<img src="cavalo.png">';
      posicao = botao;

      //Verifica algumas características das casas
      //(usado para desabilita-las, remover fundo verde, entre outros)
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          let botoes = document.getElementById(`casa${i * 8 + j}`);
          if (botoes.classList.contains("verde"))
            botoes.classList.add(`jogada${jogadas}`);

          //Remove atributos se na próxima jogada
          //a casa não for uma das possíveis para o
          //cavalo se movimentar
          if (
            botoes.classList.contains("verde") &&
            botoes.classList.contains(`jogada${jogadas - 1}`)
          ) {
            botoes.classList.remove("jogada" + jogadas - 1);
            botoes.classList.remove("verde");
            botoes.classList.remove("abled");
            botoes.classList.remove("jogada" + jogadas);
          }
          //Desativa/ativa os botões
          if(!botoes.classList.contains("abled")) botoes.classList.add("disabled");
          
          if(botoes.classList.contains("disabled")) botoes.setAttribute("disabled", "true")
          
          if(botoes.classList.contains("verde")) botoes.removeAttribute("disabled")
        }
      }
      jogadas++;
    });
    //Adiciona o botão como filho do tabueiro
    tabuleiro.appendChild(botao);
  }
}
