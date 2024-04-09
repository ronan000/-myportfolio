/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Disable right-click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    // Show the warning pane
    $('#rightClickWarning').fadeIn(200);
    // Hide the warning pane after 3 seconds
    setTimeout(function(){
        $('#rightClickWarning').fadeOut(200);
    }, 3000);
});

// smooth scroll
$(document).ready(function(){
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});
