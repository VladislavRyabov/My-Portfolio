
try {
    document.querySelector('#btn1').onclick = () => {
        document.querySelector('.home-offer__modal-container').classList.add('is-visible')
    }
    
    document.querySelector('.home-offer__modal-close').onclick = () => {
        document.querySelector('.home-offer__modal-container').classList.remove('is-visible')
    }
} 

catch {console.log("dont find")}


let h1 = document.querySelectorAll('.animation');
let active = 'animation__active';

let isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

addEventListener('scroll', (event) => {
    for (let i = 0; i < h1.length; i++) {
        if (isInViewport(h1[i])) {
            h1[i].classList.add(active);
        }
    }
});


// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}