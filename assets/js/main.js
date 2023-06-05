let navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(navLink => {
  console.log(navLink.href);
});

/*=============== SHOW MENU ===============*/
let navMenu = document.getElementById('nav-menu'),
    navToggle= document.getElementById('nav-toggle'),
    navClose= document.getElementById('nav-close')

// Menu-Show/
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}
// Menu-Hide
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu") 
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

let navLink = document.querySelectorAll(".nav__link")
let linkAction=()=>{
let navMenu = document.getElementById("nav-menu")
navMenu.classList.remove("show-menu")
}
navLink.forEach(n=> n.addEventListener("click",linkAction))


/*=============== ADD BLUR TO HEADER ===============*/
let blurHeader = () =>{
    let header = document.getElementById("header")
    this.scrollY >=50 ? header.classList.add("blur-header")
                      : header.classList.remove("blur-header")
}
window.addEventListener('scroll',blurHeader)
/*=============== EMAIL JS ===============*/
let contactForm= document.getElementById("contact-form"),
    contactMessage= document.getElementById("contact-message")

let sendEmail= (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_86zf7fm', 'template_fb2yi4h','#contact-form', '47Zf1Qpmwo-EgDTap')
    .then(() => {
        contactMessage.textContent='Message sent successfully '

        setTimeout(()=>{
            contactMessage.textContent=''
        }, 5000)

        contactForm.reset()
    }, () =>{
        contactMessage.textContent= 'Message not sent (service error) '
    })
}

contactForm.addEventListener("submit",sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
let scrollUp = () =>{
    let scrollUp= document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
}
window.addEventListener("scroll", scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
let sections= document.querySelectorAll('section[id]')

let scrollActive = () =>{
    let scrollY = window.pageYOffset

    sections.forEach(current=>{
        let sectionHeight= current.offsetHeight,
            sectionTop= current.offsetTop - 58,
            sectionId= current.getAttribute('id'),
            sectionClass= document.querySelector('.nav__menu a[href*='+sectionId + ']')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
