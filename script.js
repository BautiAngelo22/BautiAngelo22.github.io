onload = () => {
    document.body.classList.remove("container");
  };
  
function createStar() {
  const starsContainer = document.querySelector('.stars');
  const star = document.createElement('div');
  star.classList.add('star');

  // posición y estilo aleatorio
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = (2 + Math.random() * 3) + "s";
  star.style.opacity = Math.random();
  star.style.setProperty('--x', (Math.random() * 100 - 50) + 'px');

  starsContainer.appendChild(star);

  // eliminar estrella al terminar animación
  star.addEventListener('animationend', () => {
    star.remove();
  });
}

// crear una estrella cada 300ms en lugar de muchas a la vez
setInterval(createStar, 50);
