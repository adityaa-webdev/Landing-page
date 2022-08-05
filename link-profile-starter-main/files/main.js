let coll=document.querySelectorAll('.faq button')
let answers=document.querySelectorAll('.answer')
let isVisible=true






for (let i=0;i<coll.length;i++){
    coll[i].addEventListener('click',()=>{
        answers[i].classList.toggle('answer-show')
        this.style.border=none
       

    })
}

let nav=document.querySelector('#hamburger')

nav.addEventListener('click',()=>{
    document.querySelector('header').classList.toggle('.responsive-header')

})