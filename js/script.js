const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const menu = document.querySelector('#menu')

function openMenu() {
  menu.style.display = 'block'
  menuBtn.style.display = 'none'
  closeBtn.style.display = 'inline-block'
}

function closeMenu() {
  menu.style.display = 'none'
  menuBtn.style.display = 'inline-block'
  closeBtn.style.display = 'none'
}

menuBtn.addEventListener('click', () => {
  openMenu()
})

closeBtn.addEventListener('click', () => {
  closeMenu()
})

const navItems = menu.querySelectorAll('li')

const changeActiveItems = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a')

    link.classList.remove('ativo')
  })
}

navItems.forEach(item => {
  const link = item.querySelector('a')
  link.addEventListener('click', () => {
    changeActiveItems()

    if (window.matchMedia('(max-width: 800px)').matches) {
      closeMenu()
    }

    link.classList.add('ativo')
  })
})

const sections = document.querySelectorAll('section, main')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('#menu a[href*=' + sectionId + ']')
        .classList.add('ativo')
    } else {
      document
        .querySelector('#menu a[href*=' + sectionId + ']')
        .classList.remove('ativo')
    }
  }
}

window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
})

const habilidadesBtn = document.querySelector('#habilidadesBtn')
const formacaoBtn = document.querySelector('#formacaoBtn')
const cursosBtn = document.querySelector('#cursosBtn')

const botoesSobre = document.querySelector('.sobre .botoes')

const habilidadesDiv = document.querySelector('#habilidadesDiv')
const formacaoDiv = document.querySelector('#formacaoDiv')
const cursosDiv = document.querySelector('#cursosDiv')

habilidadesBtn.addEventListener('click', () => {
  formacaoDiv.style.display = 'none'
  cursosDiv.style.display = 'none'
  habilidadesDiv.style.display = 'flex'
})

formacaoBtn.addEventListener('click', () => {
  habilidadesDiv.style.display = 'none'
  cursosDiv.style.display = 'none'
  formacaoDiv.style.display = 'flex'
})

cursosBtn.addEventListener('click', () => {
  habilidadesDiv.style.display = 'none'
  formacaoDiv.style.display = 'none'
  cursosDiv.style.display = 'grid'
})

const botoes = botoesSobre.querySelectorAll('button')

const changeActiveButtons = () => {
  botoes.forEach(botao => {
    botao.classList.remove('ativo')
  })
}

botoesItems = botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    changeActiveButtons()
    botao.classList.add('ativo')
  })
})
