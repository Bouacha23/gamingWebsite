let navbar = document.querySelector(".navbar");
console.log(navbar);
window.addEventListener("scroll",(e)=>{
        if(window.scrollY > 200){
            navbar.classList.add("backg")
        }else{
            navbar.classList.remove("backg"
            )
        }
})

let shop_list = document.querySelectorAll(".categor_container .title");
let articel   = document.querySelectorAll(".trs article")
console.log(shop_list,articel);


shop_list.forEach(e => {
    e.addEventListener("click" , () =>{
        shop_list.forEach(e =>{
            e.classList.remove("activation")
        })
        e.classList.add("activation");
        let type =  e.getAttribute("type");
        console.log(type)
        articel.forEach(e =>{
            let gameType = e.getAttribute("type");
            if(type === "all"){
                articel.forEach(e=>{
                    e.classList.remove("hide")
                })
            }
            if(gameType !== type){
                e.classList.add("hide")
            }else{
                e.classList.remove("hide")
            }
        })
    })
    
});


let burger = document.querySelector(".burger");
let menuBar = document.querySelector(".nav_container .right")
console.log(burger ,menuBar) ;
burger.addEventListener("click" , (e)=>{
    console.log(menuBar)
    menuBar.classList.toggle("menu");
    console.log(menuBar)
})