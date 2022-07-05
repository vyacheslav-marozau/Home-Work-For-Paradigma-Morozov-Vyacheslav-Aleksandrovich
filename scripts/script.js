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
             $(this).mask("+7 (999) 999-99-99", {autoсlear: false});
         });

         /*$body.on('keyup','.user-phone',function(){
             var phone = $(this),
                 phoneVal = phone.val(),
                 form = $(this).parents('form');

             if ( (phoneVal.indexOf("_") != -1) || phoneVal == '' )  {
                 form.find('.btn_submit').attr('disabled',true);
             }
             else {
                 form.find('.btn_submit').removeAttr('disabled');
             }
         });*/
         jQuery('.btn_submit').on('click', function(){
             var checkboxIsChecked = jQuery(jQuery(this).parent().find('.agreement')[0]).is(":checked");
             var phone = $(".user-phone");
             var phoneVal = phone.val();
             var form = phone.parent('form');
             console.log(checkboxIsChecked);
             if ((checkboxIsChecked === true) && (!(phoneVal.indexOf("_") != -1) || phoneVal == '')) {
                 form.find('.btn_submit').removeAttr('disabled');
                 $("#phone_form").submit();
             } else {
                 alert("ВВедите Коректный Номер Телефона и прочитайте соглашение");
                 form.find('.btn_submit').attr('disabled',true);
             }
         });

 /*       $('.btn_submit').on('click', function(){
             var checkboxIsChecked = $('.agreement').is(":checked");
             console.log(checkboxIsChecked);
             var phone = $(".user-phone");
                 var phoneVal = phone.val();
                 var form = phone.parent('form');
             if ((checkboxIsChecked === false) && ((phoneVal.indexOf("_") != -1) || phoneVal == '')) {
                 alert("ВВедите Коректный Номер Телефона и прочитайте соглашение");
                 form.find('.btn_submit').attr('disabled',true);
             } else {
                 form.find('.btn_submit').removeAttr('disabled');
                 $("#phone_form").submit();
             }
         });*/

         /*jQuery('#checkbox-read-instruction').change(function() {
             console.log(this.checked);

             if(this.checked) {
                 //MAKE SEND BUTTON AVAILABLE
             } else {
                 //MAKE SEND BUTTON DISABLED
             }
         });*/

     });

 })( jQuery );