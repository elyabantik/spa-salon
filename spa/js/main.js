$().ready(()=>{
    $('#masters-carusel').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,

        responsive:[
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    variableWidth: true,
                }
                },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },

        ],
        customPaging : function(slider, i) {
            var thumb = jQuery(slider.$slides[i]).data();
            return '<a>'+(i+1)+'</a>';
        },



    });

    $('#gallery-photos').slick({
        dots: true,
        arrows: true,
        dotsClass: "my-dots",
        infinite: true,
        speed: 300,
        variableHeight: true,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        responsive:[
            {
            breakpoint: 1199,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    variableWidth: true,

                }
            },
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
        ]
    });

    $( function() {
        $( "#accordion" ).accordion();
    } );

    $('.test-popup-link').magnificPopup({
        type: 'image'
        // other options
    });
    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('#datetimepicker1').datetimepicker();

    $('.open-modal').click(() => {
        $('#reservation-container').css('display', 'flex');
    });

    $('#reservation-close, #reservation-container, #reservation-close-img').click((e) => {
        if(e.target.id === 'reservation-container' || e.target.id === 'reservation-close' || e.target.id === 'reservation-close-img'){
            $('#reservation-container').hide();
        }
    });
    $('#call-btn'). click(()=> {
        $('.reserve-input .reserve-error').hide();
        let errorCall = false;
        let call = $('#call');
        call.css('border-color', 'rgb(114, 17, 99)');
        if (call.val()) {
            {
            $.ajax({
                type: 'get',
                url: 'callme@whitelotus.com',
                data: 'call=' + call.val(),
                success: () => {
                    $('#call-container').show();
                },
                error: () => {
                    // $('#reservation-container').hide();
                    alert('???????????? ????????????????????. ??????????????????, ????????????????????, ???? ???????????? ????????????????.')
                },
            })
            }
            return;
        }
        else{

        }
        if (!call.val()) {
            call.siblings('.reserve-error').show();
            call.css('border-color', 'red');
            errorCall = true;
        }
    })


    $('#reservation-btn').click(()=> {

        $('#reservation .reserve-error').hide();
        let hasError = false;
        let name = $('#name');
        let phone = $('#phone');
        let ritual = $('#ritual');
        let date = $('#date');
        let input = $('.input');
        // let input1 = $('.reserve-input > select');

        input.css('border-color', 'rgb(114, 17, 99)');
        $('.reserve-input select').css('rgb(114, 17, 99)');
         // input1.css('border-color', 'rgb(114, 17, 99)');

        if (name.val() && phone.val() && ritual.val() && date.val()) {
            {
                $.ajax({
                    type: 'get',
                    url: 'mail.php',
                    data: 'name=' + name.val() + '&phone=' + phone.val() + '&ritual=' + ritual.val() + '&date=' + date.val(),
                    success: () => {
                        $('#thanks-container').show();
                        $('#reservation-content').hide();
                    },
                    error: () => {
                        $('#reservation-container').hide();
                        alert('???????????? ????????????????????. ??????????????????, ????????????????????, ???? ???????????? ????????????????.')
                    },
                })
            }
            return;
        } else{

        }

        if (!name.val()) {
            name.siblings('.reserve-error').show();
            name.css('border-color', 'red');
            hasError = true;
        }
        if (!phone.val()) {
            phone.siblings('.reserve-error').show();
            phone.css('border-color', 'red');
            hasError = true;
        }
        if (!ritual.val()) {
            ritual.siblings('.reserve-error').show();
            ritual.css('border-color', 'red');
            hasError = true;
        }
        if (!date.val()) {
            date.siblings('.reserve-error').show();
            date.css('border-color', 'red');
            hasError = true;
        }
        // else {
        //
        //     $.ajax({
        //         type: 'get',
        //         url: 'mail.php',
        //         data: 'name=' + name.val() + '&phone=' + phone.val() + '&ritual=' + ritual.val() + '&date=' + date.val(),
        //         success: () => {
        //             $('#thanks-container').show();
        //             $('#reservation-content').hide();
        //         },
        //         error: () => {
        //             $('#reservation-content').hide();
        //             alert('???????????? ????????????????????. ??????????????????, ????????????????????, ???? ???????????? ????????????????.')
        //         },
        //     })
        //     }

    });
    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
        $('#burger').css('color', 'white');
        $('#header-menu').css('display', 'block');
        $('.header-logo-img').css('color', 'white');
        $('.header-logo-text').css('color', 'white');

    });
    $('.header-menu-item').click(() => {
        $('#header-menu').css('display', 'none');
        $('#header').removeClass('menu-open');
        $('.header-logo-img').css('color', '#430639');
        $('.header-logo-text').css('color', '#430639');
        $('#burger').css('color', 'black');
    })
});