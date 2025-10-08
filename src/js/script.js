// Aguarda o carregamento completo da página
window.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("laguna-header");
    let lastScroll = 0; // guarda a última posição do scroll

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Se o usuário rolar para baixo e não estiver no topo
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = "translateY(-100%)"; // sobe o header pra fora da tela
            header.style.transition = "transform 0.4s ease"; // suaviza o movimento
        } 
        // Se o usuário rolar pra cima
        else {
            header.style.transform = "translateY(0)";
            header.style.transition = "transform 0.4s ease";
        }

        lastScroll = currentScroll; // atualiza o valor
    });
});

/*Função para ativar e desativar card quando o cursor passar*/

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("ativo");
      });
  
      card.addEventListener("mouseleave", () => {
        card.classList.remove("ativo");
      });
    });
  });