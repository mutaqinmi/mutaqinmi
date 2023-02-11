$(document).ready(function(){
    $("#content1detail").hide();
    $("#content2detail").hide();
    $("#content3detail").hide();
    
    $("#content1").on("click", function(){
        $("#content1detail").slideToggle(500);
    })
    
    $("#content2").on("click", function(){
        $("#content2detail").slideToggle(500);
    })
    
    $("#content3").on("click", function(){
        $("#content3detail").slideToggle(500);
    });

    $("#instagram").on("click", function(){
        location.href = "https://www.instagram.com/_.muqi";
    });
    $("#github").on("click", function(){
        location.href = "https://www.github.com/mutaqinmi"
    });
    $("#email").on("click", function(){
        location.href = "mailto:mutaqinmi2586@mutaqinmi.my.id"
    });
    $("#whatsapp").on("click", function(){
        location.href = "https://wa.me/6285155114492"
    });
    $("#youtube").on("click", function(){
        location.href = "https://www.youtube.com/@muhammadilhammutaqin355"
    });
    
    $("#basicbtn").on("click", function(){
        var confirmation = confirm("Anda akan diarahkan menuju whatsapp, pastikan anda memiliki aplikasi whatsapp.");
        if(confirmation == true){
            location.href = "https://wa.me/6285155114492?text=Halo%20saya%20ingin%20membuat%20website%20paket%20Basic"
        }
    })
    $("#standardbtn").on("click", function(){
        var confirmation = confirm("Anda akan diarahkan menuju whatsapp, pastikan anda memiliki aplikasi whatsapp.");
        if(confirmation == true){
            location.href = "https://wa.me/6285155114492?text=Halo%20saya%20ingin%20membuat%20website%20paket%20Standard"
        }
    });
    $("#premiumbtn").on("click", function(){
        var confirmation = confirm("Anda akan diarahkan menuju whatsapp, pastikan anda memiliki aplikasi whatsapp.");
        if(confirmation == true){
            location.href = "https://wa.me/6285155114492?text=Halo%20saya%20ingin%20membuat%20website%20paket%20Premium"
        }
    });

    $("#skill").on("mouseenter", function(){
        $("#fotobar").animate({
            "width":"60%"
        }, 1000);
        $("#desainbar").animate({
            "width":"40%"
        }, 1000);
        $("#htmlcssbar").animate({
            "width":"80%"
        }, 1000);
        $("#javascriptbar").animate({
            "width":"60%"
        }, 1000);
        $("#pythonbar").animate({
            "width":"60%"
        }, 1000);
        $("#phpbar").animate({
            "width":"40%"
        }, 1000);
    });
});

const year = document.getElementById("year");
const yearsnow = new Date().getFullYear();
console.log(yearsnow)
year.innerHTML = yearsnow;