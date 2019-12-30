    $(document).ready(function()
    {

    $('#slides').superslides({
        animation: "fade",
            play :5000,
        pagination: false
        });

        var typed = new Typed(".typed",{
            strings:["Optimistic Coder.","Passionate about AI and ML technologies...!","Student."],
            typeSpeed: 70,
            loop:true,
            startDelay: 100,
            showCursor: false
        });
        $('.owl-carousel').owlCarousel({
                loop:true,
                items:4,
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    768:{
                        items:5
                    },
                    938:{
                        items:4
                    }
                }
            });
            
        var skillsTopOffset = $(".skillsSection").offset().top;
            $(window).scroll(function(){
            
                if(window.pageYOffset > skillsTopOffset - $(window).height() + 300){
                    
                    $('.chart').easyPieChart({
                        easing : 'easeInOut',
                        barColor: '#fff',
                        trackColor:false,
                        scaleColor:false,
                        lineWidth:4,
                        size:152,
                        onStep: function(from,to,percent){
                        $(this.el).find('.percent').text(Math.round(percent));
                        }
                    });
            
        }    }); 

           $(".counter").countUp(70);

    }); 



    var typed = new Typed(".typed",{
        strings:["<h1>if (sad() === true) <br>",
                "{  <br>",
                "sad().stop(); <br>",
                "beAwesome();",
                "<br> }</h1>"],
        typeSpeed: 70,
        loop:true,
        startDelay: 100,
        showCursor: false

        