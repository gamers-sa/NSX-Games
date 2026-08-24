const css = `@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap'); * { box-sizing: border-box } body { background-color: rgba(238, 47, 42, 1); margin: 0; background-repeat: no-repeat; background-size: cover; background-attachment: fixed; color: rgba(240, 248, 255, 1); font-family: "Quicksand", sans-serif; font-optical-sizing: auto; font-weight: 300; font-style: normal; font-size: 100%; user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; } body::before { left: 0; top: 0; content: ""; position: fixed; width: 100%; height: 100%; background-size: cover; background-attachment: fixed; backdrop-filter: blur(20px); z-index: -1; } a { color: inherit; text-decoration: none; } .header { display: flex; justify-content: center; width: 98vw; margin: 1% 1% 0% 1%; height: 10vh; } .divlogo-phone { display: flex; justify-content: center; width: 33.33%; height: auto; } .navsel-container { display: flex; justify-content: center; align-items: end; width: 33.33%; height: auto; } .navsel { margin: 0; -moz-appearance: none; -webkit-appearance: none; appearance: none; min-width: min(100%, 200px); height: 6vh; padding: 12px 24px 12px 12px; line-height: 24px; border: solid 1px #999; border-radius: 6px; background-color: #333; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='180 -360 600 1200'%3E%3Cpath d='M1015 10q-10-10-23-10t-23 10L512 492 55 10Q45 0 32 0T9 10Q0 20 0 34t9 24l480 506q10 10 23 10t23-10l480-506q9-10 9-24t-9-24z'%20fill%3D%27slategray%27/%3E%3C/svg%3E"); background-size: 18px; background-repeat: no-repeat; background-position: calc(100% - 12px) center; cursor: pointer; font-family: sans-serif; font-size: 16px; font-weight: normal; color: slategray; outline: none; scrollbar-width: none; } /* para chrome, edge, brave y safari */ .navsel::-webkit-scrollbar { display: none; } .navsel option { color: inherit; background-color: #333; text-indent: 0; } .divlogo-pc { display: flex; justify-content: center; width: 33.33%; height: auto; } .logo { object-fit: contain; width: auto; height: auto; } .rightmenu { display: flex; justify-content: center; align-items: end; width: 33.33%; height: auto; } .search { margin: 0; -moz-appearance: none; -webkit-appearance: none; appearance: none; min-width: min(100%, 200px); height: 6vh; padding: 12px 24px 12px 12px; line-height: 24px; border: solid 1px #999; border-radius: 6px; background-color: #333; font-family: sans-serif; font-size: 16px; font-weight: normal; color: slategray; outline: none; scrollbar-width: none; } .main { display: flex; margin-top: 1%; justify-content: center; align-content: center; width: 100vw; height: auto; } .coverflowcontainer { display: flex; margin-top: 4vh; background-color: rgba(30, 30, 30, 0.5); width: 98vw; height: 76vh; border-radius: 10px; } .coverflow { display: flex; flex-wrap: wrap; justify-content: space-around; margin: auto; height: 75vh; width: 96vw; overflow-y: scroll; scrollbar-width: none; } .gametitle { margin: auto; margin: 1%; display: block; width: 14vw; height: 16.866vw; align-content: center; align-items: center; justify-content: center; background-color: rgba(50, 50, 50, 1); border-radius: 10px; } .gameimagecontainer { display: flex; justify-content: center; aspect-ratio: 1 / 1; width: 100%; } .gameimage { width: 100%; border-radius: 10px 10px 0px 0px; } .gamename { display: flex; align-items: center; justify-content: center; width: 100%; height: 6vh; padding-left: 5%; padding-right: 5%; } .gametext { overflow: hidden; white-space: nowrap; width: 100%; display: block; text-align: center; /* scrollbar-width: none; */ /* height: 2.2vh; */ } /* El truco: Se comporta como un bloque en línea centrado si no se mueve, */ /* pero alinea a sus hijos a la izquierda internamente para la animación. */ .scroll-wrapper { display: inline-flex; align-items: center; justify-content: flex-start; will-change: transform; transform: translateX(0px); } .scroll-content { display: inline-block; box-sizing: border-box; /* Asegura que el padding se sume bien en todos los navegadores */ } /* Activa la animación infinita de la GPU */ .scroll-wrapper.is-scrolling { animation: marqueeLinear var(--scroll-duration) linear infinite; } @keyframes marqueeLinear { 0% { transform: translateX(0px); } 100% { /* Salta exactamente al equivalente de un bloque + su separación */ transform: translateX(var(--loop-width)); } } .gametitle:hover .gameimage { filter: saturate(200%); } .gametitle:hover { background-color: rgba(85, 85, 85, 1); } @media screen and (orientation: landscape) { .divlogo-phone { display: none; } } @media screen and (orientation: portrait) { body { font-size: 85%; } .header { display: flex; /* flex-direction: column; */ flex-wrap: wrap; margin: 0; justify-content: space-around; margin-top: 2vh; height: auto; margin-bottom: 4vh; align-items: center; } .divlogo-pc { display: none; } .rightmenu { align-items: center; width: 40%; } .search { width: 100%; } .navsel-container { margin: 0; align-items: center; width: 40%; } .navsel { width: 100%; } .gametitle { width: 40vw; height: 50vw; } .gamename { height: 5vh; } .divlogo-phone { width: 70%; margin-bottom: 5vw; } .logo { width: 100%; } .coverflowcontainer { margin-top: 0; height: 68vh; background-color: rgba(30, 30, 30, 0.2); } .coverflow { height: 64vh; } }`;

if (window.location.href === 'https://gamers-sa.github.io/NSX-Games/') {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);


    document.addEventListener("DOMContentLoaded", function () {
        const pscrl = document.getElementsByClassName('coverflow')[0];
        const searchInput = document.getElementById('search-input');
        const letterSelect = document.getElementById('letter-select');
        const cards = document.getElementsByClassName('gametitle');
        const gameCounter = document.getElementById('game-counter');

        function filtrarPorBusqueda() {
            const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
            let juegosVisibles = 0;

            for (let i = 0; i < cards.length; i++) {
                const gameNameElement = cards[i].querySelector('.gametext span');

                if (gameNameElement) {
                    const gameName = gameNameElement.textContent.toLowerCase().trim();

                    if (gameName.includes(searchTerm)) {
                        cards[i].style.display = "";
                        juegosVisibles++;
                    } else {
                        cards[i].style.display = "none";
                    }
                }
            }
        }

        function saltarASeccion() {
            if (!letterSelect) return;
            const targetId = letterSelect.value;

            if (targetId === "todos") {
                if (pscrl) pscrl.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            if (searchInput && searchInput.value !== "") {
                searchInput.value = "";
                filtrarPorBusqueda();
            }

            const targetCard = document.getElementById(targetId);

            if (targetCard) {
                targetCard.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                setTimeout(() => {
                    if (pscrl) localStorage.setItem('scrollPixelPos', pscrl.scrollTop);
                }, 500);
            }

            setTimeout(() => {
                letterSelect.selectedIndex = 0;
            }, 150);
        }

        if (searchInput) searchInput.addEventListener('input', filtrarPorBusqueda);
        if (letterSelect) letterSelect.addEventListener('change', saltarASeccion);


        filtrarPorBusqueda();

        const savedPixel = localStorage.getItem('scrollPixelPos');

        if (savedPixel !== null && pscrl) {
            setTimeout(() => {
                pscrl.scrollTop = parseInt(savedPixel, 10);
            }, 300);
        }


        window.onbeforeunload = function () {
            if (!pscrl) return;

            const maxScrollPosible = pscrl.scrollHeight - pscrl.clientHeight;
            const currentScroll = Math.max(0, Math.min(pscrl.scrollTop, maxScrollPosible));

            localStorage.setItem('scrollPixelPos', currentScroll);
        };

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: "400px 0px 400px 0px",
            threshold: 0.01
        });

        const images = document.querySelectorAll('.gameimage');
        images.forEach(img => imageObserver.observe(img));
    });

    const gameTitles = document.getElementsByClassName('gametitle');
    const separationPx = 50;
    const speed = 30;

    function setupHorizontalScroll() {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        for (let i = 0; i < gameTitles.length; i++) {
            let gameTitle = gameTitles[i];
            let container = gameTitle.querySelector('.gametext');
            if (!container) continue;

            const originalText = container.innerHTML;
            let pauseTimeout;

            function triggerScroll() {
                if (container.scrollWidth > container.clientWidth) {
                    if (!container.dataset.cloned) {
                        container.innerHTML = `
            <div class="scroll-wrapper">
              <span class="scroll-content">${originalText}</span>
              <span class="scroll-content">${originalText}</span>
            </div>
          `;
                        container.dataset.cloned = "true";
                    }

                    const wrapper = container.querySelector('.scroll-wrapper');
                    const contents = container.querySelectorAll('.scroll-content');

                    contents.forEach(span => {
                        span.style.paddingRight = `${separationPx}px`;
                    });

                    const singleBlockWidth = contents[0].getBoundingClientRect().width;
                    const duration = singleBlockWidth / speed;

                    wrapper.style.setProperty('--loop-width', `-${singleBlockWidth}px`);
                    wrapper.style.setProperty('--scroll-duration', `${duration}s`);

                    pauseTimeout = setTimeout(() => {
                        wrapper.classList.add('is-scrolling');
                    }, 2000);
                }
            }

            function stopScroll() {
                clearTimeout(pauseTimeout);
                const wrapper = container.querySelector('.scroll-wrapper');
                if (wrapper) {
                    wrapper.classList.remove('is-scrolling');
                }
            }

            if (isTouchDevice) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            triggerScroll();
                        } else {
                            stopScroll();
                        }
                    });
                }, {
                    threshold: 0.6
                });

                observer.observe(gameTitle);

            } else {
                gameTitle.addEventListener('mouseenter', triggerScroll);
                gameTitle.addEventListener('mouseleave', stopScroll);
            }
        }
    }

    window.onload = setupHorizontalScroll;
}