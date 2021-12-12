// DOM Elements
const btn = document.querySelector('.btn')
const hideIcon = document.querySelector('.message-icons-hide')
const msgIcons = document.querySelector('.message-icons')

// Event listener
btn.addEventListener('click', showIcons)

function showIcons() {
  hideIcon.classList.toggle('hide')

  if (!hideIcon.classList.contains('hide')) {
    msgIcons.style.width = '45%'
  } else {
    msgIcons.style.width = 'auto'
  }
}