$(document).ready(function(){
    // Floating Window
    $(".theme-wrapper").hide();
    
    $("#theme-input").on("click", function(){
        if(this.checked){
            $("#theme-image").removeClass("fa-moon");
            $("#theme-image").addClass("fa-sun")
        } else {
            $("#theme-image").removeClass("fa-sun");
            $("#theme-image").addClass("fa-moon")
        }
    })
    
    $("#check-menu").on("click", function(){
        if(this.checked){
            $(".garis1").css({
                "transition": "transform .5s ease-in-out",
                "transform": "rotate(-45deg) translateX(-.32rem) translateY(.32rem)", 
            });
            $(".garis3").css({
                "transition": "transform .5s ease-in-out",
                "transform": "rotate(45deg) translateX(-.32rem) translateY(-.32rem)", 
            });
            $(".garis2").css({
                "transition": "opacity .5s ease-in-out",
                "opacity": "0", 
            });
            $(".menu").slideDown(500);
        } else {
            $(".garis1").css({
                "transition": "transform .5s ease-in-out",
                "transform": "rotate(0deg) translateY(0%)", 
            });
            $(".garis3").css({
                "transition": "transform .5s ease-in-out",
                "transform": "rotate(0deg) translateY(0%)", 
            });
            $(".garis2").css({
                "transition": "opacity .5s ease-in-out",
                "opacity": "1", 
            });
            $(".menu").slideUp(500);
        };
    });
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var head = $(".head-wrapper").innerHeight();
    });
    
    $("#theme").on("click", function(){
        $(".theme-wrapper").fadeIn(500);
    })
    
    $(".theme-wrapper").on("click", function(){
        $(".theme-wrapper").fadeOut(500);
    })
    
    $(".whatsapp").on("click", function(){
        location.href = "https://wa.me/6285155114492";
    })
    $(".instagram").on("click", function(){
        location.href = "https://www.instagram.com/_.muqi";
    })
    $(".github").on("click", function(){
        location.href = "https://www.github.com/mutaqinmi";
    })
    $(".email").on("click", function(){
        location.href = "mailto:contact@mutaqinmi.my.id";
    })
});