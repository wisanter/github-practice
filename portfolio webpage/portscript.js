//header navlinks
const hamburger =
 document.querySelector("#mmenu-btn");
const navLinks =
 document.querySelector(".navhead");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

//hero button referal
   const projectbtn =
   document.querySelector(".hero-btn");
    projectbtn.addEventListener("click", function () {
        document.querySelector("#project").scrollIntoView({
            behavior: "smooth"

            
        });
    });


    //project section button
    const projectsbtn1 = 
     document.querySelector("#prologin");

     projectsbtn1.addEventListener("click", function (){
        window.location.href = "login page/login page.html";
     });


     const projectsbtn2 =
     document.querySelector("#proprice");

     projectsbtn2.addEventListener("click", function (){
        window.location.href = "pricing section/pricing.html";
     });

     const projectsbtn3 = 
     document.querySelector("#prorest");

     projectsbtn3.addEventListener("click", function (){
        window.location.href = "resturant webpage/Restaurant.html";

     });
     

     //contact section
     //whatsapp
     const whatsappbtn =
     document.querySelector(".whatsapp");

     whatsappbtn.addEventListener("click", function (){
        window.open("https://wa.me/2349160750866", "_blank");
     });
