// Project stage 4
// name
// id

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

    const txts = document.querySelectorAll("h1, small, .des p"); //text in p
            for(txt of txts) {
                if(icon.classList.contains('fa-sun'))
                    txt.style.color = "#e2e2e2";
                else 
                    txt.style.color = '#161622';
            }



    const heads = document.querySelectorAll("h2, span"); //text in p
            for(head of heads) {
                if(icon.classList.contains('fa-sun'))
                    head.style.color = "#a08bba";
                else 
                    head.style.color = '#161622';
            }

    
    
    const boxs = document.querySelectorAll("ul li p"); //text in p
            for(box of boxs) {
                if(icon.classList.contains('fa-sun')) {
                    box.style.color = '#3a2a5b';
                    box.style.backgroundColor = "#e1d3f3de";
                }
                    
                else {
                    box.style.color = "#e1d3f3de";
                    box.style.backgroundColor = "#3a2a5b";
                }
                    
            }

}