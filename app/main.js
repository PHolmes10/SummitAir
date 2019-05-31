// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

$(document).on('scroll', function(){
    if($(this).scrollTop() > 1){
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});