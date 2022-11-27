// Project stage 4
// Abdullah Awadh & Awis Andani
// U21107482 & U20105829

function shiftMode() {

    const icon = document.getElementById("mode");  // ICON Button 
    var subNav = document.getElementById("sub-ul");   //Nested list
    


    if(icon.classList.contains('fa-sun')){
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        subNav.style.backgroundColor = "#5A5771";  //light sub-nav list
    } 
    else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        subNav.style.backgroundColor = "#26243C";  //dark sub-nav list
    }

    var bodyel = document.body;   // BODY styling
    bodyel.classList.toggle("body-light");

    
    const txts = document.querySelectorAll("center, h3, span"); //text in p
            for(txt of txts) {
                if(icon.classList.contains('fa-sun'))
                    txt.style.color = "white";
                else 
                    txt.style.color = '#181726';
            }


}