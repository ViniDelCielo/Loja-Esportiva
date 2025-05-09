
  function toggleMenu() {
  document.getElementById("filterMenu").classList.toggle("show");
}


function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}


function filterProducts(filtro) {
  const produtos = document.querySelectorAll('.produto');

  produtos.forEach(produto => {
    // Mostrar todas as camisetas (com a classe 'Camisetas')
    if (filtro === 'Mostrar todas as camisetas') {
      if (produto.classList.contains('Camisetas')) {
        produto.style.display = 'block';
      } else {
        produto.style.display = 'none';
      }
    } else if (filtro === 'Todos') {
      produto.style.display = 'block';  // Mostrar todos os produtos
    } else {
      produto.style.display = produto.classList.contains(filtro) ? 'block' : 'none';
    }
  });

  toggleMenu(); // Fecha o menu lateral
}












  

let index = 0;
const images = document.querySelectorAll('.carousel-img');
const total = images.length;

function showImage(i) {
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${i * 100}%)`;
}

function nextImage() {
  index = (index + 1) % total;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + total) % total;
  showImage(index);
}

document.querySelector('.next').addEventListener('click', nextImage);
document.querySelector('.prev').addEventListener('click', prevImage);

setInterval(nextImage, 5000);
