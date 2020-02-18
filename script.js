$(function () { //первая, глобальная ф-ция
   
    //========фиксированная шапка сайта=====
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop(); // определить на сколько проскроллили 
    let nav = $('#nav');
    let navToggle = $('#navToggle');




    checkScroll(scrollPos, introH);


    //ф-ция выполнения действий при скролле страницы
    //задано 3 события
    $(window).on('scroll resize', function() {

        let introH = intro.innerHeight(); // //определить высоту intro вместе с padding, intro.innerHeight() - высота без padding
        
        scrollPos = $(this).scrollTop(); //обновление информации о позиции скролла  
        //resize обновление информации в зависимости от ширины дисплея
        checkScroll(scrollPos, introH);
    });



//==================== Скролл к разделам сайта =======================

    function checkScroll (scrollPos, introH){ //проверка позиции скролла и положения елемента, по которому клик
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        //далее в css задать стили для .header.fixed
    };


//через data-atribute(см html/css) - медленный доступ к данным

        $('[data-scroll]').on('click', function(event){  //обращение к селектору
            event.preventDefault(); //отмена стандартных действий по ссылке

            let elementID = $(this).data('scroll'); //внести/получить в переменную id елемента
          //  console.log(elementID); elementID - выведет id елементов
            let elementOffset = $(elementID).offset().top; //позиция елемента от верха страницы
            nav.removeClass('show');
            $("html, body").animate({ //обязательно обратится к обоим html, body
                scrollTop: elementOffset - 70 //поднять его над елементами на 70px
            }, 700); //замедлить анимацию прокрутки
            
            
        });   

//================== navToggle(бургер) ====================

        navToggle.on('click', function(){ //показ/скрытие бургера по нажатию
            event.preventDefault();

            nav.toggleClass('show');

});


//=================== REVIEWS ============================
//<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    
    
    let slider = $('#reviewsSlider');

     slider.slick({
        infinite: true, //бесконечный цикл
        slidesToShow: 1, //сколько будет слайдов одновременно
        slidesToScroll: 1, //количество слайдов прокрутится при щелчке
        fade: true, //способ прокрутки
        arrows: false, //убрать стрелочки переключения
        dots: true
      });


    });//конец всего кода




   



//22.05




