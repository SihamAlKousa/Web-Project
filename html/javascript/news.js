// Project stage 4
// Fatima Binefaid AlQaydi
// U20201162

function shiftMode() {

    const icon = document.getElementById("mode");  // ICON Button 
    var subNav = document.getElementById("sub-ul");   //Nested list
    var date = document.getElementById("current_date");


    if(icon.classList.contains('fa-sun')){
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        subNav.style.backgroundColor = "#5A5771";  //light sub-nav list
        date.style.color = "#161622";
    } 
    else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        subNav.style.backgroundColor = "#26243C";  //dark sub-nav list
        date.style.color = "#C5C6C7";
    }

    var bodyel = document.body;   // BODY styling
    bodyel.classList.toggle("body-light");

    var wrap = document.getElementsByClassName("wrapper");
    wrap[0].classList.toggle("wrapper-sun");


    const News = document.querySelectorAll(".pageMargin p, .pageMargin h3");
            for(New of News) {
                if(icon.classList.contains('fa-sun'))
                    New.style.color = "#C5C6C7";
                else 
                    New.style.color = '#161622';
        }   


    const subs = document.querySelectorAll(".subnews");
            for(sub of subs) {
                if(icon.classList.contains('fa-sun'))
                    sub.style.color = "#C5C6C7";
                else 
                    sub.style.color = '#161622';
    }
    

}