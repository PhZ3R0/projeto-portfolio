

const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';

  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Função de abrir pasta de projetos
let folder = document.getElementById('projetos-folder')
folder.addEventListener('click', function () {
let item = document.getElementsByClassName('projetos-item')
  if (folder.innerHTML == '<p> HTML5 e CSS3</p> <span class="material-symbols-outlined">folder_open</span>') {
    folder.innerHTML = '<p> HTML5 e CSS3</p> <span class="material-symbols-outlined">folder</span>'
    for (i = 0;i < item.length;i++) {
      item[i].style.opacity = '0'
      item[i].style.maxHeight = '0px'
      item[i].style.overflow = 'hidden'
      
    }
    
  } else {
    folder.innerHTML = '<p> HTML5 e CSS3</p> <span class="material-symbols-outlined">folder_open</span>'
    for (i = 0;i < item.length;i++) {
      item[i].style.opacity = '1'
      item[i].style.maxHeight = '2300px'
      item[i].style.overflow = 'auto'
      
    }

  }
})


