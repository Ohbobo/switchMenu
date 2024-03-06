import { games } from "./data.js";
import { getFormattedTime } from "./displayHours.js";

document.addEventListener('DOMContentLoaded', function () {
    
    const time = document.querySelector('#horloge')
    setInterval(() => {
        time.textContent = getFormattedTime();
    }, 1000);

    const gameContainer = document.querySelector('.swiper-wrapper');

    games.forEach(game => {
        let slideHTML;
        if (game.empty === true) {
            slideHTML = `<div class="swiper-slide"></div>`;
        } else {
            slideHTML = `
            <div class="swiper-slide">
            <p class="game-name">${game.title}</p>
            <img class="game-img" src=${game.img} />
            </div>`;
        }
        gameContainer.innerHTML += slideHTML;
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false,
        on: {
            init: function () {
                updateElementsClass('.game-name', 'active', el => el.closest('.swiper-slide-active'));
            },
            slideChangeTransitionEnd: function () {
                    updateElementsClass('.game-name', 'active', el => el.closest('.swiper-slide-active'));
            }
        },
    });

    function updateElementsClass(selector, className, conditionCallback) {
        const elements = document.querySelectorAll(selector);
        
        elements.forEach(el => {
            if (conditionCallback(el)) {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        });
    }



    const toggle = document.querySelector('.fa-gear');

    toggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if(currentTheme == 'dark') {
            document.documentElement.removeAttribute('data-theme');

        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        localStorage.setItem('theme', currentTheme === 'dark' ? '' : 'dark');
    })

    const savedTheme = localStorage.getItem('theme') || '';
    document.documentElement.setAttribute('data-theme', savedTheme);

});
