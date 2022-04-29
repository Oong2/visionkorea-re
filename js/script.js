$(document).ready(function() {
    $(".top-wrap > .top-menu-wrap > .top-right > .btn-menu").click(function(){
       
        let index = $(this)
        
        $(".menubar-wrap").toggleClass("active");

        $(".top-wrap > .top-menu-wrap > .top-right > .btn-menu > .btn2").addClass("active")
        $(".top-wrap > .top-menu-wrap > .top-right > .btn-menu > .btn").addClass("active")
        $(".menubar-wrap").addClass("active")

        if(
            $(".top-wrap > .top-menu-wrap > .top-right > .btn-menu > .btn2").hasClass("active") ){ 
                $(".top-wrap > .top-menu-wrap > .top-right > .btn-menu").click(function(){
                $(".top-wrap > .top-menu-wrap > .top-right > .btn-menu > .btn").removeClass("active")
            })
        }
        if(
            $(".top-wrap > .top-menu-wrap > .top-right > .btn-menu > .btn").hasClass("active") ){ 
                $(".top-wrap > .top-menu-wrap > .top-right > .btn-menu").click(function(){
                $(".top-wrap > .top-menu-wrap > .top-right > .btn-menu > .btn2").removeClass("active")
            })
        }
        

    })
})