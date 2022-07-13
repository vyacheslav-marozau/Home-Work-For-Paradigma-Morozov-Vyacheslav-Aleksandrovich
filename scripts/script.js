 $(document).ready(function(){
    //Скрыть PopUp при загрузке страницы
    PopUpHide();
});
    //Функция отображения PopUp
    function PopUpShow(){
    $("#popup1").show();
}
    //Функция скрытия PopUp
    function PopUpHide(){
    $("#popup1").hide();
}

 (function( $ ){

     let $body;

     $(document).ready(function(){
         $body = $('body');

         $body
             .find('.user-phone').each(function(){
             $(this).mask("+7 (999) 999-99-99", {autoclear: false});
         });

         jQuery('.btn_submit').on('click', function(e) {
             var checkboxIsChecked = jQuery(jQuery(this).parent().parent().find('.agreementFlex > .agreement')[0]).is(":checked");
             var phone = $(".user-phone");
             var phoneVal = phone.val();
             var form = phone.parent('form');
             console.log(checkboxIsChecked);
             console.log('2:' + (phoneVal.indexOf("_") == 0));
             console.log('3:' + phoneVal == '');
             console.log('2:' + (phoneVal.indexOf("_")));
            /* (checkboxIsChecked === true) && phoneVal.indexOf("_") == 0) || */
             if ((checkboxIsChecked === false) && (phoneVal == '')) {
                 alert("ВВедите Номер Телефона и прочитайте соглашение");
                 form.find('.btn_submit').attr('disabled',true);
                 e.preventDefault();
                 e.stopPropagation();
                 return false;
             } else if (phoneVal == '') {
                 alert("ВВедите Номер Телефона!");
                 form.find('.btn_submit').attr('disabled',true);
                 e.preventDefault();
                 e.stopPropagation();
                 return false;
             } else if ((checkboxIsChecked === false) && (phoneVal.indexOf("_") == -1) && phoneVal !== '') {
                 alert("Прочитайте соглашение");
                 form.find('.btn_submit').attr('disabled',true);
                 e.preventDefault();
                 e.stopPropagation();
                 return false;
             } else /*if ((checkboxIsChecked === true) && (phoneVal.indexOf("_") == -1) && phoneVal !== '') */{
                 form.find('.btn_submit').removeAttr('disabled');
                 $("#phone_form").submit();
                 alert("Ваша заявка принята! Скоро Мы свяжемся с вами");
             }
         });
     });
    $('.header__burger').click(function(event) {
        $('.header__burger,.Header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.main__content__body__mobile').toggleClass('active');
        });
     $('.RoundCross').click(function(event) {
         $('.RoundCross, .leftSidebarMobile, .leftSidebarMobilePopup, .header__burger').toggleClass('activate');
         $('body').toggleClass('lock');
         /*$('.leftSidebarMobilePopup').toggleClass('activate');*/
     });
 })( jQuery );