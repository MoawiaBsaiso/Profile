window.onload=function(){window.jQuery?$(document).ready(function(){
    $(".sidebarNavigation .navbar-collapse ").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show(),
    $("body").append("<div class='overla'></div>"),$(".navbar-toggle").on("click",function(){
        $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass")),
        $(".sideMenu, .overla").toggleClass("open"),$(".fa-close, .overla").on("click",function(){
            $(".overla").removeClass("open"),$(".sideMenu").removeClass("open")})}),
            
            
            
            
            
$(window).resize(function(){
        $(".navbar-toggle").is(":hidden")?$(".sideMenu, .overla").hide():$(".sideMenu, .overla").show()})}):console.log("sidebarNavigation Requires jQuery")};

// $(".close").click(function() {
//     $("#myNavbar").removeClass("open")
//     $(".overlay").removeClass("open")
// })