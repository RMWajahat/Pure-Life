document.querySelector(".menu-btn").addEventListener("click", function () {

      

    document.getElementById("menu-container").classList.toggle("showdrop");

})





document.querySelector(".contactservice").addEventListener("mouseover", ()=> {


    document.querySelector(".dropdown").classList.add("dropit");

}   );

document.querySelector("header").addEventListener("mouseleave", ()=> {

    document.querySelector(".dropdown").classList.remove("dropit");

}   );