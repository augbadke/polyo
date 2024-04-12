document.addEventListener("DOMContentLoaded", function() {
  function setLanguage() {
      let language = "en";

      // if (navigator.language.startsWith("es")) {
      //     language = "es"; 
      if (navigator.language.startsWith("pt")) {
          language = "pt";
      };

      changeLanguage(language);
  };

  function changeLanguage(language) {
    document.documentElement.lang = language;

    if (language === "pt") {
      var metaDescription = document.querySelector('meta[name="description"]');
      const h2 = document.querySelector(".h2");
      const h3 = document.querySelectorAll("h3");
      const button = document.querySelectorAll("button");
      const hintTitle = document.querySelector(".hint-title");
      const text = document.querySelectorAll(".text");
      const descripition = document.querySelector(".descripition");
      const statsGap = document.querySelector(".stats1");
      const statsTitle = document.querySelectorAll(".statsTitle");
      const h4 = document.querySelector("h4");
      const totalHints =  document.querySelector(".stats2-list:last-child .bar-title");

      document.title = "Polyo: A sua dose diária de diversão com novos jogos todos os dias!";
      metaDescription.setAttribute("content", "Polyo é um jogo gratuito de navegador. Treine seu cérebro com puzzles diários e divertidos!");

      h2.innerText = "Jogo diário";
      h3[0].innerText = "Como jogar";
      h3[1].innerText = "Estatísticas";
      h3[2].innerText = "Contato";

      button[0].title = "Mostrar como jogar";
      button[1].title = "Mostrar estatísticas";
      button[2].title = "Mostrar contato";
      button[3].title = "Destaca a posição de uma peça no tabuleiro. Cada clique adiciona 1min ao temporizador";
      for (let i = 4; i <= 6; i++) {
        button[i].title = "Fechar"
      }
      hintTitle.innerText = "Mostrar dica"

      text[0].innerText = "Arraste as peças para o tabuleiro e organize-as para preencher completamente o espaço demarcado. Um temporizador invisível é iniciado ao clicar em uma peça.";
      text[1].innerText = "Dê dois cliques sobre a peça para rotacioná-la.";
      text[2].innerText = "Ao clicar no botão de dica, a posição de uma peça é destacada no tabuleiro. Cada clique no botão de dica adiciona um minuto ao temporizador.";
      text[3].innerText = "Ao atualizar a página, as dicas permanecem e as consequências por usá-las também permanecem. Os jogos podem ter mais de uma solução, as dicas revelam apenas uma possível solução.";
      text[4].innerText = "Novo jogo todos os dias à meia-noite!";
      text[5].innerText = "O jogo será alterado à meia noite.";
      text[6].innerHTML = "Se você tiver alguma pergunta, feedback ou sugestão, sinta-se à vontade para entrar em contato pelo email <a href='mailto:polyodaily@gmail.com'>polyodaily@gmail.com</a>.";
      text[7].innerText = "Este site foi desenvolvido por Augusto Badke.";
      
      descripition.innerText = "O jogo foi concluído em:";
      statsTitle[0].innerText = "# Dicas";
      statsTitle[1].innerText = "Jogos concluídos";
      statsTitle[2].innerText = "Sequência atual";
      statsTitle[3].innerText = "Maior sequência";
      statsGap.style.gap = `10px`;
      for (let i = 1; i <= 3; i++) {
        statsTitle[i].style.fontSize = "17px";
      }
      h4.innerText = "Distribuição dos tempos de conclusão:";
      totalHints.innerText = "Total de dicas usadas:";
    };
  };

  setLanguage();
});