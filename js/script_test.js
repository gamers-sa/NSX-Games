const gameTitles = document.getElementsByClassName('gametitle');
let speed = 0.5; // Pixels per step

function setupHoverScroll() {
  for (let i = 0; i < gameTitles.length; i++) {
    let gameTitle = gameTitles[i];
    // Buscamos el contenedor de texto específico de este juego
    let container = gameTitle.querySelector('.gametext');

    if (!container) continue; // Si por alguna razón no hay texto, lo omitimos

    let scrollInterval; // Variable para guardar el intervalo
    let pauseTimeout;   // Variable para guardar la pausa de 2s

    // Función para iniciar o reanudar el scroll
    function startScrolling() {
      scrollInterval = setInterval(() => {
        if (Math.ceil(container.scrollTop) + container.clientHeight >= container.scrollHeight) {
          // Llegamos al final, detenemos el movimiento
          clearInterval(scrollInterval);

          // Esperamos 2 segundos antes de volver al inicio y reiniciar
          pauseTimeout = setTimeout(() => {
            container.scrollTop = 0;
            startScrolling(); // Volvemos a llamar a la función para continuar el ciclo
          }, 2000); // 2000 ms = 2 segundos
        } else {
          container.scrollTop += speed;
        }
      }, 60);
    }

    // Evento cuando el puntero ENTRA a la tarjeta completa (.gametitle)
    gameTitle.addEventListener('mouseenter', () => {
      // Solo hacemos scroll si el texto es más alto que su contenedor
      if (container.scrollHeight > container.clientHeight) {
        startScrolling();
      }
    });

    // Evento cuando el puntero SALE de la tarjeta completa (.gametitle)
    gameTitle.addEventListener('mouseleave', () => {
      // Detenemos tanto el movimiento como cualquier pausa que estuviera pendiente
      clearInterval(scrollInterval);
      clearTimeout(pauseTimeout);

      // Opcional: Regresar el texto al principio al quitar el mouse. 
      // Descomenta la siguiente línea si lo deseas:
      container.scrollTop = 0;
    });
  }
}

window.onload = setupHoverScroll;