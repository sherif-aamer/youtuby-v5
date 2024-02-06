$(document).ready(function(){
    $("#myBtn").on("click",function(){
        read();
    });
});

$(".replay").click(function(){
    $(this).parents("div.row").next("div.card").toggle();
});



function read(){
    var dots = document.getElementById("dots");
    var moretext = document.getElementById("more");
    var btntext = document.getElementById("myBtn");

    if (dots.style.display ==="none"){
        dots.style.display = "inline";
        btntext.innerHTML = "read more";
        moretext.style.display = "none";
    }else{
        dots.style.display = "none";
        btntext.innerHTML = "less";
        moretext.style.display = "inline";
    }
}