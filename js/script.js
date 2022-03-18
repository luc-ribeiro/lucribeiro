const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event) {
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)

  resposta.classList.toggle('ativa')
  const ativa = resposta.classList.contains('ativa')
  pergunta.setAttribute('aria-expanded', ativa)
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)

// Animação

if (window.SimpleAnime) {
  new SimpleAnime()
}

// Depoimentos

if (window.Swiper) {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  })
}
