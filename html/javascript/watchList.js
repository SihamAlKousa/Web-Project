// Project stage 4
// Name: Hind Abdulrahman AlJassmi
// ID: U20105472

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

    const headings = document.querySelectorAll("h1, h2, h3, .col p"); //Main Headings color

            for(heading of headings) {
                if(icon.classList.contains('fa-sun'))
                    heading.style.color = "#e2e2e2";
                else
                    heading.style.color = '#161622';
            }
}