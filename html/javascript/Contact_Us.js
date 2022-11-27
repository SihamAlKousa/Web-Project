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

    const headings = document.querySelectorAll("h1"); //Main Headings color
            for(heading of headings) {
                if(icon.classList.contains('fa-sun'))
                    heading.style.color = "#e2e2e2";
                else
                    heading.style.color = '#161622';
            }


    const txts = document.querySelectorAll(".conbody p"); //text in p
            for(txt of txts) {
                if(icon.classList.contains('fa-sun'))
                    txt.style.color = "#e2e2e2";
                else 
                    txt.style.color = '#161622';
            }


    const supports = document.querySelectorAll(".conbody ul li a");
            for(support of supports) {
                if(icon.classList.contains('fa-sun'))
                    support.style.color = "#e2e2e2";
                else 
                    support.style.color = '#26243C';
            }


    var btn = document.getElementsByClassName("button");
    btn[0].classList.toggle("button-sun");

}