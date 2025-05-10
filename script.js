
 function toggleMenu() {
  document.getElementById("filterMenu").classList.toggle("show");
}

function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  if (submenu) {
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  }
}


function filterProducts(filtro) {
  const produtos = document.querySelectorAll('.produto');

  produtos.forEach(produto => {
    if (filtro === 'Mostrar todas as camisetas') {
      produto.style.display = produto.classList.contains('Camisetas') ? 'block' : 'none';

    } else if (filtro === 'Mostrar todas as chuteiras') {
      produto.style.display = produto.classList.contains('Chuteiras') ? 'block' : 'none';

      

    } else if (filtro === 'Todos') {
      produto.style.display = 'block';
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
