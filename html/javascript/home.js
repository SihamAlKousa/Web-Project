// Project stage 4
// Siham Al Kousa
// U20104520 

var index=1;
        showImg(index);
        function move_side(e){showImg(index += e);}
        function showImg(e) {
            
            const img = document.querySelectorAll('.img-slider img');
            if(e > img.length){
                index = 1;
            }

            if(e < 1){
                index = img.length;
            }

            for(var i=0; i<img.length; i++){
                img[i].style.display = "none";
            }
            
            img[index-1].style.display = "block";
        }

    // ----------------------------------------- THEME BUTTON -----------------------------------------------

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
            bodyel.classList.toggle("light-body");
                
            
            const aboutel = document.getElementsByClassName("about-us-container"); //About Us Container 
            aboutel[0].classList.toggle("about-us-container-sun");
            
            const headings = document.querySelectorAll("h1, h2"); //Main Headings color
            for(heading of headings) {
                if(icon.classList.contains('fa-sun'))
                    heading.style.color = "white";
                else
                    heading.style.color = '#26243C';
            }

            
            var recel = document.getElementsByClassName("top-movies");  //Recommendations section background 
            recel[0].classList.toggle("top-movies-sun");



            const infoBoxes = document.querySelectorAll(".movie-info");   //Movies blocks
            for(infoBox of infoBoxes) {
                if(icon.classList.contains('fa-sun'))
                    infoBox.style.backgroundColor = "#e6e2fd";
                else
                    infoBox.style.backgroundColor = '#26243C';
            }

            const infoHeadings = document.querySelectorAll(".movie-info h4");   //Movies blocks headings
            for(infoHeading of infoHeadings) {
                if(icon.classList.contains('fa-sun'))
                    infoHeading.style.color = "#161622";
                else
                    infoHeading.style.color = "white";
            }

            const infoBtns = document.querySelectorAll(".add-watchlist");   //Add watchlist buttons
            for(infoBtn of infoBtns) {
                infoBtn.classList.toggle("add-watchlist-sun");
            }


            const reviews = document.querySelectorAll(".review-block");   //Reviews blocks
            for(review of reviews) {
                review.classList.toggle("review-block-sun");
            }

        }