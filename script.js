const burgerButton = document.querySelector('.header__menu')
const menuBurger = document.querySelector('.burger_menu')
const closeIcon = document.querySelector('.closeIcon')
const works = document.querySelector('.works')
const footer = document.querySelector('.footer')
const wrapper = document.querySelector('body')
const worksButton = document.querySelector('.works_btn')
const imagePopup = document.querySelector('.image_popup')
const images = document.querySelectorAll('.work_image')
const openedImage = document.querySelector('.opened_image')
const contactsButton = document.querySelector('.contacts-btn')
const openPopup = ()=>{

    if(menuBurger.classList.contains('burger_menu_active')){
        menuBurger.classList.remove('open_animation')
        menuBurger.classList.add('close_animation')
        setTimeout(()=>{
            menuBurger.classList.remove('burger_menu_active')
        }, 1000)

    }else {
        menuBurger.classList.remove('close_animation')
        menuBurger.classList.add ('open_animation')
        menuBurger.classList.add('burger_menu_active')

    }
}

const openImagePopup =(e)=>{
    if(imagePopup.classList.contains('image_popup_active')){
        imagePopup.classList.add('image_popup_close')
        setTimeout(()=>{
            imagePopup.classList.remove('image_popup_active')
        }, 600)

    }else{
        imagePopup.classList.remove('image_popup_close')
        imagePopup.classList.add('image_popup_active')
        openedImage.src=e.target.src
    }
}

const handleScrollWorks =()=>{
    works.scrollIntoView({block:"start", behavior: "smooth"})
}

const handleScrollContacts =()=>{
    footer.scrollIntoView({block:"start", behavior: "smooth"})
}


burgerButton.addEventListener('click', openPopup)
closeIcon.addEventListener('click', openPopup)
worksButton.addEventListener('click', handleScrollWorks)
images.forEach((image)=>{
    image.addEventListener('click', openImagePopup)
})
imagePopup.addEventListener('click', openImagePopup )
contactsButton.addEventListener('click', handleScrollContacts)