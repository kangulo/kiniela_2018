import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dashboard';
  timeout = { setTimeout:setTimeout };
  ngOnInit(){
        $("body").on("focus", ".fg-line .form-control", function() {
            $(this).closest(".fg-line").addClass("fg-toggled");
        });

        $("body").on("blur", ".form-control", function() {
            var p = $(this).closest(".form-group, .input-group"),
                i = p.find(".form-control").val();
            p.hasClass("fg-float") ? 0 == i.length && $(this).closest(".fg-line").removeClass("fg-toggled") : $(this).closest(".fg-line").removeClass("fg-toggled")
        });
        
        $('body').on('click', '[data-ma-action]', function (e) {
            e.preventDefault();

            var $this = $(this);
            var action = $(this).data('ma-action');

            switch (action) {

                /*-------------------------------------------
                    Sidebar & Chat Open/Close
                ---------------------------------------------*/
                case 'sidebar-open':
                    var target = $this.data('ma-target');
                    var backdrop = '<div data-ma-action="sidebar-close" class="ma-backdrop" />';

                    $('body').addClass('sidebar-toggled');
                    $('#header, #header-alt, #main').append(backdrop);
                    $this.addClass('toggled');
                    $(target).addClass('toggled');

                    break;

                case 'sidebar-close':
                    $('body').removeClass('sidebar-toggled');
                    $('.ma-backdrop').remove();
                    $('.sidebar, .ma-trigger').removeClass('toggled')

                    break;

                case 'todo-form-open':
                    $this.closest('.t-add').addClass('toggled');

                    break;

                /*-------------------------------------------
                    Profile Menu Toggle
                ---------------------------------------------*/
                case 'profile-menu-toggle':
                    $this.parent().toggleClass('toggled');
                    $this.next().slideToggle(200);

                    break;


                /*-------------------------------------------
                    Mainmenu Submenu Toggle
                ---------------------------------------------*/
                case 'submenu-toggle':
                    $this.next().slideToggle(200);
                    $this.parent().toggleClass('toggled');

                    break;


                /*-------------------------------------------
                    Top Search Open/Close
                ---------------------------------------------*/
                //Open
                case 'search-open':
                    $('#header').addClass('search-toggled');
                    $('#top-search-wrap input').focus();

                    break;

                //Close
                case 'search-close':
                    $('#header').removeClass('search-toggled');

                    break;


                /*-------------------------------------------
                    Header Notification Clear
                ---------------------------------------------*/
                case 'clear-notification':
                    var x = $this.closest('.list-group');
                    var y = x.find('.list-group-item');
                    var z = y.size();

                    $this.parent().fadeOut();

                    x.find('.list-group').prepend('<i class="grid-loading hide-it"></i>');
                    x.find('.grid-loading').fadeIn(1500);


                    var w = 0;
                    y.each(function(){
                        var z = $(this);
                        setTimeout(function(){
                            z.addClass('animated fadeOutRightBig').delay(1000).queue(function(){
                                z.remove();
                            });
                        }, w+=150);
                    })

                    //Popup empty message
                    setTimeout(function(){
                        $('.him-notification').addClass('empty');
                    }, (z*150)+200);

                    break;

                
            }
        });

        /*----------------------------------------------------------
            Dropdown Menu
        -----------------------------------------------------------*/
        if($('.dropdown')[0]) {
            //Propagate
            $('body').on('click', '.dropdown.open .dropdown-menu', function(e){
                e.stopPropagation();
            });

            $('.dropdown').on('shown.bs.dropdown', function (e) {
                if($(this).attr('data-animation')) {
                    var $animArray:any = [];
                    var $animation = $(this).data('animation');
                    var $animArray = $animation.split(',');
                    var $animationIn = 'animated '+$animArray[0];
                    var $animationOut = 'animated '+ $animArray[1];
                    var $animationDuration = 0
                    if(!$animArray[2]) {
                        var $animationDuration = 500; //if duration is not defined, default is set to 500ms
                    }
                    else {
                        $animationDuration = $animArray[2];
                    }

                    $(this).find('.dropdown-menu').removeClass($animationOut)
                    $(this).find('.dropdown-menu').addClass($animationIn);
                }
            });

            $('.dropdown').on('hide.bs.dropdown', function (e) {
                if($(this).attr('data-animation')) {
                    e.preventDefault();
                    var $this = $(this);
                    var $dropdownMenu = $this.find('.dropdown-menu');

                    var $animArray:any = [];
                    var $animation = $(this).data('animation');
                    var $animArray = $animation.split(',');
                    var $animationIn = 'animated '+$animArray[0];
                    var $animationOut = 'animated '+ $animArray[1];
                    var $animationDuration = 0

                    $dropdownMenu.addClass($animationOut);
                    setTimeout(function(){
                        $this.removeClass('open')

                    }, $animationDuration);
                }
            });
        }/* DROPDOWN MENU */

        // /*-----------------------------------------------------------
        //   Waves
        // -----------------------------------------------------------*/
        // (function(){
        //   var Waves:any;
        //     Waves.attach('.btn:not(.btn-icon):not(.btn-float)');
        //     Waves.attach('.btn-icon, .btn-float', ['waves-circle', 'waves-float']);
        //   Waves.init();
        // })();

        /**
        *  Add Record Trigger
        */
        var AddRecord = () =>
        {
            $('#actionLabel').text('Add Projects');
            $('#save-button').text('Save Projects');
            $('#id').val('');
            $('#form-projects')[0].reset();
            $('#addForm').slideToggle();
        };

        /**
        *  Cancel Buton Function
        */
        var Cancel = () =>
        {
            $('#actionLabel').text('Add Projects');
            $('#save-button').text('Save Projects');
            $('#id').val('');
            $('#form-projects')[0].reset();
            $('.formData').slideUp();
        }
    
        function notify(message:string,type:string) {
            $.growl({
                message: message
            },{
                type: type,
                allow_dismiss: false,
                label: 'Cancel',
                className: 'btn-xs btn-inverse',
                placement: {
                    from: 'bottom',
                    align: 'left'
                },
                delay: 2500,
                animate: {
                    enter: 'animated fadeInUp',
                    exit: 'animated fadeOutDown'
                },
                offset: {
                    x: 30,
                    y: 30
                }
            });
        }

        // setTimeout(function () {
        //     if (!$('.login-content')[0]) {
        //         notify('Welcome back Mallinda Hollaway', 'inverse');
        //         console.log('entro');
        //     }
        // }, 1000);


  }/* end ngInit() */


    
}
