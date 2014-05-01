
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


    //INPUT FILE 
    document.getElementById("uploadBtn").onchange = function () {

        document.getElementById("uploadFile").value = this.value;
     

    };

$("#uploadform").validate({

        messages:
        {
            nombre:{
                required:'Nombre requerido'
            },
            ide:{
                required:'Identificación requerida'
            },
            residencia:{
                required:'Lugar de residencia requerido'
            },
            telefono:{
                required:'Teléfono requerido'
            },
            
            email:{
                required:'Email requerido',
                invalid:'Email valido'
            },
            uploadBtn:{
                required:'*'
            }
           
            
            
        },
        rules: {
            
            

          },

          submitHandler: function(form) {
            
            var url = "/helpers/upload.php",
                progress = $('.progress'),
                bar = $('.bar'),
                percent = $('.percent'),
                status = $('#status'),
                mensaje = $('.mensaje');
           
            $('#uploadform').ajaxSubmit({

                beforeSend: function() {
                    progress.show();
                    status.empty();
                    var percentVal = '0%';
                    bar.width(percentVal)
                    percent.html(percentVal);
                },
                uploadProgress: function(event, position, total, percentComplete) {
                    var percentVal = percentComplete + '%';
                    bar.width(percentVal)
                    percent.html(percentVal);
                },
                 success: function(data) {
                    var percentVal = '100%';
                    bar.width(percentVal)
                    percent.html(percentVal);

                    // mensaje.html('<span class="ok">'+ data.message +'</span>');  
                    $('<span></span>',{
                        text: data.message,
                        class: 'ok'
                    }).appendTo(mensaje);   
                    

                    setTimeout(function(){  
                                    mensaje.fadeOut(200,function() {
                                        progress.hide();
                                        mensaje.find('span').remove();
                                        mensaje.show();
                                        
                                      });}, 3000);       
                },
                error: function(data) {
                    var percentVal = '0%';
                    bar.width(percentVal)
                    percent.html(percentVal);

                    $('<span></span>',{
                        text: 'Error al subir el archivo. Verifique que no sobrepase el limite de 64mb',
                        class: 'error'
                    }).appendTo(mensaje);   

                  
                    //mensaje.html('<span class="error">Error al subir el archivo. Verifique que no sobrepase el limite de 64mb</span>');   

                    setTimeout(function(){  
                            mensaje.fadeOut(200,function() {

                                mensaje.find('span').remove();
                                mensaje.show();
                                
                              });}, 3000);       
                },
                
                url:       url,        // override for form's 'action' attribute 
                type:      'post',        // 'get' or 'post', override for form's 'method' attribute 
                dataType:  'json',       // 'xml', 'script', or 'json' (expected server response type) 
                clearForm: true        // clear all form fields after successful submit 
                //resetForm: true        // reset the form after successful submit 

            }); 
        

         }
    


    });






});

