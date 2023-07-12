const faqExpandButtons = Array.from(document.querySelectorAll('.expand'))
const answerBlocks = Array.from(document.querySelectorAll('.answer'))
// function hideText(item, el) {
//     item.classList.remove('show')
//     el.children[0].src = 'img/plus.png'
// }

faqExpandButtons.map((btns) => {
    btns.addEventListener('click', (e) => {
        //Если пользователь нажал на картинку, то как бы переводим PoinerEvent на родителя, то есть на блок div
        el = e.target.nodeName === 'SPAN'? e.target.parentNode : e.target
        answerBlocks.forEach((item) => {
            if (item !== el.nextElementSibling) {
                item.classList.remove('show')
                item.previousElementSibling.children[0].classList.remove('minus')
            }
        })

        el.children[0].classList.toggle('minus')
        el.nextElementSibling.classList.toggle('show')
    })
})