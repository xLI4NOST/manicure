const burgerButton = document.querySelector('.header__menu')
const menuBurger = document.querySelector('.burger_menu')
const closeIcon = document.querySelector('.closeIcon')

const openPopup = ()=>{

    if(menuBurger.classList.contains('burger_menu_active')){
        menuBurger.classList.remove('open_animation')
        // menuBurger.classList.add('close_animation')
        setTimeout(()=>{
            menuBurger.classList.remove('burger_menu_active')
        }, 1000)

    }else {
        // menuBurger.classList.remove('close_animation')
        // menuBurger.classList.add ('open_animation')
        menuBurger.classList.add('burger_menu_active')

    }
}

burgerButton.addEventListener('click', openPopup)
closeIcon.addEventListener('click', openPopup)