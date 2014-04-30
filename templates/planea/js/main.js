
jQuery(function($) {

    $menu = $('#menu');
    
    $menu.find('.menu > .item-107 a').prepend('<span class="icon icon-home"></span>');
    $menu.find('.menu > .item-108 a').prepend('<span class="icon icon-user"></span>');
    $menu.find('.menu > .item-109 a').prepend('<span class="icon icon-newspaper"></span>');
    $menu.find('.menu > .item-110 a').prepend('<span class="icon icon-briefcase"></span>');
    $menu.find('.menu > .item-111 a').prepend('<span class="icon icon-users"></span>');
    $menu.find('.menu > .item-112 a').prepend('<span class="icon icon-address-book"></span>');
    $menu.find('.menu > .item-113 a').prepend('<span class="icon icon-earth"></span>');

    // NAV MOBILE
    $('#btn_nav').click(function(){
        $('#site-header #menu').toggle();
    });

    

  

    function resizes(){
            height_dispo = getWindowHeight() - ($('#main_header').height()) - ($('.item-page').height()) - ($('#main_footer').height());
            width_dispo = getWindowWidth() - getScrollerWidth();            
           
            d_x_img1 = $("#proyectos").find(".images li.img1").position().left
            d_x_img2 = $("#proyectos").find(".images li.img2").position().left
            d_x_img3 = $("#proyectos").find(".images li.img3").position().left

            d_y_img1 = $("#proyectos").find(".images li.img1").position().top
            d_y_img2 = $("#proyectos").find(".images li.img2").position().top
            d_y_img3 = $("#proyectos").find(".images li.img3").position().top

        
        if(getWindowWidth() > 1366){
           $("#proyectos").find(".images li.img1").translate3d({ x: width_dispo - d_x_img1, y: 183, z: -142},500,"ease")
            $("#proyectos").find(".images li.img2").translate3d({ x: width_dispo - d_x_img2, y: 183, z: -142},500,"ease")
           $("#proyectos").find(".images li.img3").translate3d({ x: width_dispo - d_x_img3, y: 0, z: -285},500,"ease")
        }
        else {
            // mobile            
             $("#proyectos").find(".images li.img2").translate3d({ x: width_dispo -  d_x_img2, y: 183, z: -142},500,"ease")
            $("#proyectos").find(".images li.img3").translate3d({ x: width_dispo - d_x_img3, y: 0, z: -285},500,"ease")
             $("#proyectos").find(".images li.img1").translate3d({ x:width_dispo - d_x_img1, y: 183, z: -142},500,"ease")
           
        }


    };
        
    $menuTop = $('#menu-top'),
    $dialog  = $('.window');

    $menuTop.find('.menu-top-item').on('click',function(e){
                    
                    
       
        if($("#contactbox #dialog").css("display")=="none") 
        {
            $('.window').fadeOut(200);//hide();
            $('#contactbox #dialog').fadeIn(200)//show();
        }

        
    });

    $dialog.find('.close').on('click',function(e){
                    
         e.preventDefault();
            

        $dialog.fadeOut(200)//hide();
        limpiaForm($('#contactForm'));
        //limpiaChosen();
    });


    //FORM SUBMIT CONTACT
    
     $("#contactForm").validate({

        rules: {
            
            comments:{
                required: true
            }

          },

          submitHandler: function(form) {

            var formInput =  $('#contactForm').serializeArray(),
                url = "/helpers/contact.php",
                mensaje = $('.mensaje');
        
            $.post(url, formInput, function(data){
                        console.log(data);
                        limpiaForm($("#contactForm"));

                        if(data === "ok")
                            {
                                $('<span></span>',{
                                    class: 'ok',
                                    text: 'Información enviada correctamente'
                                }).appendTo(mensaje);
                            }   
                            else
                            {
                                $('<span></span>',{
                                    class: 'error',
                                    text: 'A ocurrido un error. intentalo nuevamente'
                                }).appendTo(mensaje);
                            }



                        setTimeout(function(){  
                           mensaje.fadeOut(200,function() {

                                mensaje.find('span').remove();
                                mensaje.show();
                                
                              });}, 2000);  
                    });
           // form.submit();

          }

         });


// SCROLL PANEL A DESCRIPTION
    panel_scroll = $(".description").mCustomScrollbar({
        theme:"dark",
        scrollButtons:{
          enable:true
        }

    });





});

