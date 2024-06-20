'use strict'
window.addEventListener('load', ()=> {
    let methodsItems = document.querySelectorAll('.methods__item')

    methodsItems.forEach(item => {
        let openBtn = item.querySelector('.methods__btn'),
            closeBtn = item.querySelector('.methods__close'),
            info = item.querySelector('.methods__info')

        openBtn.addEventListener('click', ()=> {
            info.classList.add('_open')
        })
        closeBtn.addEventListener('click', ()=> {
            info.classList.remove('_open')
        })
    })

//     // === SLICK SLIDER === \\\
//     // $('.reviews__list').slick({
//     //     arrows : true,
//     //     dots: false,
//     //     slidesToShow: 1,
//     //     prevArrow: $('.reviews .slider__toggle_btn._prev'),
//     //     nextArrow: $('.reviews .slider__toggle_btn._next'),
//     //     infinite: false,
//     // })

//     // === INPUT MASK === \\\
//     // $('._birthday').mask("99.99.9999")
    
//     // === DROPDOWN === \\
//     // let dropdowns = document.querySelectorAll('.dropdown') 
//     // dropdowns.forEach(item => dropdown(item))
//     // function dropdown(dropdown) {
//     //     let title = dropdown.querySelector('.dropdown__title'),
//     //         titleText = dropdown.querySelector('.dropdown__title_text'),
//     //         items = dropdown.querySelectorAll('.dropdown__item')

//     //     title.addEventListener('click', ()=>{ dropdown.classList.toggle('_open') })

//     //     if (items) {
//     //         items.forEach(item => {
//     //             item.addEventListener('click', ()=>{
//     //                 // titleText.textContent = item.textContent
//     //                 items.forEach(i => {  i.classList.remove('_active')  })
//     //                 item.classList.add('_active')
//     //                 dropdown.classList.remove('_open')
//     //             })
//     //         })
//     //     }

//     //     document.addEventListener('click', (e) => {
//     //         let withinBoundaries = e.composedPath().includes(dropdown);
                
//     //         if (!withinBoundaries) {
//     //             dropdown.classList.remove('_open')
//     //         }
//     //     })
//     // }
})