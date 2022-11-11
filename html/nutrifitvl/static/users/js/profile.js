(function($) {
   
   $(document).on('submit', '#form_account, #form_password', function(event){
      
      var $form = $(this),
          $button = $form.find('input[type="submit"]'),
          $result = $form.find('.result');
      
      $.ajax({
         url: $form.prop('action'),
         type: $form.prop('method'),
         data: $form.serializeArray(),
         dataType: 'json',
         beforeSend: function () {
           $button.prop('disabled', true);
           $result.removeClass('msg-err msg-ok').empty();
         },
         success: function(response){
            if (!response.errors){
               $result.addClass('msg-ok').text('Данные успешно сохранены.').show();
               return
            }
            
            $result.addClass('msg-err').show();
            response.errors.forEach(function(message, index, arr) {
               $result.append(message);
               if (index !== arr.length - 1){
                  $result.append($('<br>'));
               }
            });
         },
         complete: function(){
           $button.prop('disabled', false);
         }
      });
      
      event.preventDefault();
   });   
      
})(jQuery);