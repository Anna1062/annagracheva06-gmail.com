let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
{/* <i class='bx bx-x'></i> */}
searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x")
  } else {
    searchBox.classList.replace("bx-x", "bx-search")
  }
});

// sidebar open close js Code
let menuOpenBtn = document.querySelector(".navbar .bx-menu"); 
let closeOpenBtn = document.querySelector(".nav-links .bx-x"); 
let navLinks = document.querySelector(".nav-links"); 

menuOpenBtn.addEventListener("click", ()=>{
  navLinks.style.left = "0";
});
closeOpenBtn.addEventListener("click", ()=>{
  navLinks.style.left = "-100%";
});



let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.addEventListener("click", ()=>{
  navLinks.classList.toggle("show1")
});

let moreArrow = document.querySelector(".more-arrow");
moreArrow.addEventListener("click", ()=>{
  navLinks.classList.toggle("show2")
});
let jsArrow = document.querySelector(".js-arrow");
jsArrow.addEventListener("click", ()=>{
  navLinks.classList.toggle("show3")
});





let list = document.querySelectorAll(".list-left li, .list li");
let carta = document.querySelectorAll(".card");

list.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        list.forEach((el1)=>{
            el1.style.color = "#000";
        })
        e.target.style.color = "#5e58b1"
        carta.forEach((el2)=>{
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
            el3.style.display = "block";
        })
    })
})


// отзывы

const slides = document.querySelectorAll('.slide')

for (const slide of slides){
  slide.addEventListener('click',() => {
clearActiveClasses()

slide.classList.add('active')
  })
} 

function clearActiveClasses(){
  slides. forEach((slide)=>{
slide.classList.remove('active')
  })
}
// для модального окна
const section = document.querySelector(".section-1"),
    overlay = document.querySelector(".overlay"),
    showBtn = document.querySelector(".button1"),
    closeBtn = document.querySelector(".icon-close"),
    textfields = document.querySelector('.textfields'),
    textFields = document.querySelector('.textfields1'),
    loginBtn = document.querySelector('.buttons-btn1'),
    registerBtn = document.querySelector('.buttons-btn2');


showBtn.addEventListener("click", () => section.classList.add("active"));

registerBtn.addEventListener('click', ()=> {
    textFields.classList.add('active');
    textfields.classList.add('none-active');
    registerBtn.classList.remove('buttons-btn2');
    registerBtn.classList.add('buttons-btn1');
    loginBtn.classList.remove('buttons-btn1');
    loginBtn.classList.add('buttons-btn2');
});

loginBtn.addEventListener('click', ()=> {
    textfields.classList.remove('none-active');
    textFields.classList.remove('active');
    registerBtn.classList.remove('buttons-btn1');
    registerBtn.classList.add('buttons-btn2');
    loginBtn.classList.remove('buttons-btn2');
    loginBtn.classList.add('buttons-btn1');
});

overlay.addEventListener("click", () =>
    section.classList.remove("active")
);

closeBtn.addEventListener("click", () =>
    section.classList.remove("active")
);



// тема
const btn_noch =document.querySelector(".btn-noch");
btn_noch.addEventListener("click",()=>{
  document.body.classList.add("dark-theme");
});
const btn_svet =document.querySelector(".btn-svet");
btn_svet.addEventListener("click",()=>{
  document.body.classList.remove("dark-theme");
});