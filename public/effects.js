
//typewriter for title slide
var i=0;

function typeWriter() {
    let name = 'Zachary Holbrook';
    let info = 'Computer Science at Ohio State'
    if (i < info.length) {
        document.getElementById("titleName").innerHTML += name.charAt(i);
        document.getElementById("titleInfo").innerHTML += info.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

$(document).ready(function () {
    $('.navbar-nav .nav-link').click(function(){
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });
});

<<<<<<< HEAD:effects.js
=======

function playVideo() {
    var vid = document.getElementById("videoHeader");
    vid.play();
}

function pauseVideo() {
    var vid = document.getElementById("videoHeader");
    vid.pause();
}
>>>>>>> 32c8a5fb812b9437bf172c524b4bf99f653c0977:public/effects.js
