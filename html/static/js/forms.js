function sendFormCallBack() {
    $('#form_call_back').find('input[type=submit]').attr('disabled', true);
    $.ajax({
        url: '/main/send_form_call_back/',
        type: 'post',
        data: $('#form_call_back').serialize(),
        dataType: 'json',
        success: function(json) {
            $('#form_call_back').find('.result').hide().removeClass('msg-err msg-ok');
            $('#form_call_back').find('input').removeClass('err');
            if (json['error']) {
                $('#form_call_back').find('.result').addClass('msg-err').html(json['error']).show();
                $('#form_call_back').find('input[type=submit]').attr('disabled', false);
            }
            if (json['errors']) {
                for (var key in json['errors']) {
                    $('#form_call_back').find('input[name='+ key +']').addClass('err');
                }
            }
            if (json['success']) {
                $('#form_call_back').find('.result').addClass('msg-ok').html(json['success']).show();
            }
        }
    });
}

function sendFormAskQuestion() {
    $('#form_ask_question').find('input[type=submit]').attr('disabled', true);
    $.ajax({
        url: '/main/send_form_ask_question/',
        type: 'post',
        data: $('#form_ask_question').serialize(),
        dataType: 'json',
        success: function(json) {
            $('#form_ask_question').find('.result').hide().removeClass('msg-err msg-ok');
            $('#form_ask_question').find('input, textarea').removeClass('err');
            if (json['error']) {
                $('#form_ask_question').find('.result').addClass('msg-err').html(json['error']).show();
                $('#form_ask_question').find('input[type=submit]').attr('disabled', false);
            }
            if (json['errors']) {
                for (var key in json['errors']) {
                    $('#form_ask_question').find('*[name=' + key + '], *[name=' + key + ']').addClass('err');
                }
            }
            if (json['success']) {
                $('#form_ask_question').find('.result').addClass('msg-ok').html(json['success']).show();
            }
        }
    });
}

function sendFormSubscribeEmail() {
    $('#form_subscribe_email').find('input[type=submit]').attr('disabled', true);
    $.ajax({
        url: '/main/send_form_subscribe_email/',
        type: 'post',
        data: $('#form_subscribe_email').serialize(),
        dataType: 'json',
        success: function(json) {
            $('#form_subscribe_email').find('.result').hide().removeClass('msg-err msg-ok');
            $('#form_subscribe_email').find('input').removeClass('err');
            if (json['error']) {
                $('#form_subscribe_email').find('.result').addClass('msg-err').html(json['error']).show();
                $('#form_subscribe_email').find('input[type=submit]').attr('disabled', false);
            }
            if (json['errors']) {
                for (var key in json['errors']) {
                    $('#form_subscribe_email').find('input[name=' + key + ']').addClass('err');
                }
            }
            if (json['success']) {
                $('#form_subscribe_email').find('.result').addClass('msg-ok').html(json['success']).show();
            }
        }
    });
}

function sendFormRequestPrice($button) {
    var $form = $button.closest('form');

    $.ajax({
        url: '/main/send_form_request_price/',
        type: 'post',
        data: $form.serialize(),
        dataType: 'json',
        beforeSend: function () {
            $button.attr('disabled', true);
        },
        success: function(json) {
            $form.find('.result').hide().removeClass('msg-err msg-ok');
            $form.find('input').removeClass('err');
            if (json['error']) {
                $form.find('.result').addClass('msg-err').html(json['error']).show();
                $button.attr('disabled', false);
            }
            if (json['errors']) {
                for (var key in json['errors']) {
                    $form.find('input[name=' + key + ']').addClass('err');
                }
            }
            if (json['success']) {
                $form.find('.result').addClass('msg-ok').html(json['success']).show();
            }
        }
    });
}