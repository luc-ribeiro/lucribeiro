const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const menu = document.querySelector('#menu')

menuBtn.addEventListener('click', () => {
  menu.style.display = 'block'
  menuBtn.style.display = 'none'
  closeBtn.style.display = 'inline-block'
})

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none'
  menuBtn.style.display = 'inline-block'
  closeBtn.style.display = 'none'
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
    link.classList.add('ativo')
  })
})
