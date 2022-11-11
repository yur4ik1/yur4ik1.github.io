var oneClickOrderQuery;

$(document).ready(function () {
    $('#id_phone').mask('+7 (999) 999-99-99');

    $('#city-select').select2({
        language: 'ru',
        placeholder: 'Введите название вашего населенного пункта',
        minimumInputLength: 3,
        ajax: {
            url: "/geo/load-cities/",
            dataType: 'json',
            delay: 250,
            cache: true,
            processResults: function (data) {
                return {
                    results: data.items
                };
            },
            data: function (params) {
                return {search: params.term}
            }
        }
    });


    $(document).on('click', '#city-select-button', function () {
        var cityAlias = $('#city-select').val();
        if (cityAlias) {
            $.ajax({
                url: '/',
                method: 'GET',
                data: {
                    change_user_city: cityAlias
                },
                success: function (data) {
                    if (data) {
                        window.location.href = data;
                    } else {
                        window.location.reload();
                    }
                }
            });
        }
    });

    /* Search */
    $('#header-nav_search button').on('click', function () {
        url = '/search/';
        var value = $('#header-nav_search input[name="search"]').val();
        if (value) {
            url += '?search=' + encodeURIComponent(value);
        }
        location = url;
        return false;
    });
    $('#header-nav_search input[name="search"]').on('keydown', function (e) {
        if (e.keyCode == 13) {
            $('#header-nav_search button').trigger('click');
        }
    });
    $(document).delegate('.increment', 'click', function () {
        var $button = $(this);
        var $input = $($button.data('input'));
        var oldValue = $input.val();
        if ($button.data('type') == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $input.val(newVal);

        var callback = $button.data('callback');
        eval(callback);
        if ($.isFunction(callback)) {
            callback.call();
        }
    });
});

// TODO: рефакторинг + бэкенд
var cart = {
    'add': function (product_id, $optionsSelect, $input) {
        $input.closest('.product_panel_cart, #product-main_right').find('.err').removeClass('err');
        $input.closest('.product_panel_cart, #product-main_right').find('.msg-err').remove();

        var option_id = $optionsSelect.data('product_option_id') || '';

        if (cart._addQuery) {
            cart._addQuery.abort();
        }

        cart._addQuery = $.ajax({
            url: '/cart/add/',
            data: 'product_id=' + product_id + '&option_id=' + option_id + '&quantity=' + $input.val(),
            dataType: 'json',
            beforeSend: function () {
                $('.alert, .text-danger').remove();
            },
            complete: function () {
                //$('#cart > button').button('reset');
            },
            error: function () {
                alert('Не удалось добавить товар в корзину. Обновите страницу и попробуйте снова.')
            },
            success: function (json) {

                if (json.error) {
                    $input.addClass('err').after('<p class="msg-err">' + json.error + '</p>');
                    return;
                }

                var fancyBoxDefaults = {
                    tpl: {
                        closeBtn: '<a title="Закрыть" class="fancybox-item icon icon-cancel" href="javascript:;"></a>',
                        next: '<a title="Сл��дующий" class="fancybox-nav fancybox-next" href="javascript:;"><span class="icon icon-arrDarkRight"></span></a>',
                        prev: '<a title="Предыдущий" class="fancybox-nav fancybox-prev" href="javascript:;"><span class="icon icon-arrDarkLeft"></span></a>'
                    }
                };

                if (json.option_select_window) {
                    $.fancybox([
                        $.extend(fancyBoxDefaults, {
                            content: json.option_select_window
                        })
                    ]);
                    return;
                }

                $('#header-cart_num').find('span').text(json.total);

                if (json.total > 0) {
                    if (document.body.clientWidth < 550) {
                        var popup = '<div id="fancybox-addToCartMobile" class="fancybox-b-small" style="display: block">';
                        popup += '<h1>Вы добавили товар в корзину</h1>';
                        popup += '<div>Перейдите к <a href="/cart/">оформлению заказа</a> или <a href="javascript:;" onclick="$.fancybox.close();">продолжите выбор</a></div>';
                        popup += '</div>';

                        $.fancybox([
                            $.extend(fancyBoxDefaults, {
                                content: popup
                            })
                        ]);
                    } else {
                        $.fancybox([
                            $.extend(fancyBoxDefaults, {
                                href: '/cart-popup/?option_id=' + option_id + '&insufficiently=' + +!json.item_quantity_enough
                                    + '&in_stock=' + json.item_quantity_in_stock + '&product_id=' + json.product_id,
                                type: 'ajax',
                                afterShow: function () {
                                    $('#id_phone').mask('+7 (999) 999-99-99');
                                }
                            })
                        ]);
                    }
                }
            }
        });
        return false;
    },
    'update': function (option_id, $input) {
        var $itemWrapper = $input.closest('tr'),
            quantityVal = parseInt($input.val());

        if (quantityVal < 0) {
            return
        }

        if (cart._updateQuery) {
            cart._updateQuery.abort();
        }

        cart._updateQuery = $.ajax({
            url: '/cart/update/',
            type: 'get',
            data: 'option_id=' + option_id + '&quantity=' + quantityVal,
            dataType: 'json',
            beforeSend: function () {
                $itemWrapper.removeClass('err').find('.msg-err').empty();
            },
            complete: function () {

            },
            error: function () {
                alert('Не удалось изменить количество товара в корзине. Обновите страницу и попробуйте снова.')
            },
            success: function (json) {
                if (json.error) {
                    $itemWrapper.addClass('err').find('.msg-err').text(json.error);
                    return;
                }

                $('#header-cart_num').find('span').text(json.total);
                priceUpdate(json.total_price);
                discountUpdate(json.discount);

                if (quantityVal <= 0) {
                    $('#cart-left_table').find('.cart-item-' + option_id).remove();
                    return;
                }

                if (!json.item_quantity_enough) {
                    $itemWrapper.addClass('err').find('.msg-err').text('В наличии только ' + json.item_quantity_in_stock + ' шт.');
                    $('.m-hide.cart-item.cart-item-' + json.option_id + ' .njs-quantity').val(json.item_quantity_in_stock);
                }
            }
        });
        return false;
    },
    'remove': function (option_id) {
        var $itemsWrapper = $('#cart-left_table');
        $.ajax({
            url: '/cart/remove/',
            type: 'get',
            data: 'option_id=' + option_id,
            dataType: 'json',
            success: function (json) {
                $itemsWrapper.find('.cart-item-' + option_id).remove();
                $('#header-cart_num').find('span').text(json.total);
                priceUpdate(json.total_price);
                discountUpdate(json.discount);
                if (!$itemsWrapper.find('.cart-item').length) {
                    location.reload()
                }
            }
        });
    }
};
var cart2 = {

    'add': function (product_id, $optionsSelect, $input, $tlt_option_select) {

        // $input.closest('.product_panel_cart, #product-main_right').find('.err').removeClass('err');
        // $input.closest('.product_panel_cart, #product-main_right').find('.msg-err').remove();

        var option_id = $optionsSelect;

        if (cart._addQuery) {
            cart._addQuery.abort();
        }

        cart._addQuery = $.ajax({
            url: '/cart/add2/',
            data: 'product_id=' + product_id + '&option_id=' + option_id + '&quantity=' + $input + '&tlt_option_select=' + $tlt_option_select,
            dataType: 'json',
            beforeSend: function () {
                $('.alert, .text-danger').remove();
            },
            complete: function () {
                //$('#cart > button').button('reset');
            },
            error: function () {
                alert('Не удалось добавить товар в корзину. Обновите страницу и попробуйте снова.')
            },
            success: function (json) {

                if (json.error) {
                    $input.addClass('err').after('<p class="msg-err">' + json.error + '</p>');
                    return;
                }

                var fancyBoxDefaults = {
                    tpl: {
                        closeBtn: '<a title="Закрыть" class="fancybox-item icon icon-cancel" href="javascript:;"></a>',
                        next: '<a title="Следующий" class="fancybox-nav fancybox-next" href="javascript:;"><span class="icon icon-arrDarkRight"></span></a>',
                        prev: '<a title="Предыдущий" class="fancybox-nav fancybox-prev" href="javascript:;"><span class="icon icon-arrDarkLeft"></span></a>'
                    }
                };

                if (json.option_select_window) {
                    $.fancybox([
                        $.extend(fancyBoxDefaults, {
                            content: json.option_select_window
                        })
                    ]);
                    return;
                }

                $('#header-cart_num').find('span').text(json.total);

                if (json.total > 0) {
                    if (document.body.clientWidth < 550) {
                        var popup = '<div id="fancybox-addToCartMobile" class="fancybox-b-small" style="display: block">';
                        popup += '<h1>Вы добавили товар в корзину</h1>';
                        popup += '<div>Перейдите к <a href="/cart/">оформлению заказа</a> или <a href="javascript:;" onclick="$.fancybox.close();">продолжите выбор</a></div>';
                        popup += '</div>';

                        $.fancybox([
                            $.extend(fancyBoxDefaults, {
                                content: popup
                            })
                        ]);
                    } else {
                        $.fancybox([
                            $.extend(fancyBoxDefaults, {
                                href: '/cart-popup/?option_id=' + option_id + '&insufficiently=' + +!json.item_quantity_enough
                                    + '&in_stock=' + json.item_quantity_in_stock + '&product_id=' + json.product_id,
                                type: 'ajax',
                                afterShow: function () {
                                    $('#id_phone').mask('+7 (999) 999-99-99');
                                }
                            })
                        ]);
                    }
                }
            }
        });
        $('<script type="text/javascript">(window.Image ? (new Image()) : document.createElement(\'img\')).src = location.protocol + \'//vk.com/rtrg?r=HMr25hFfqLYQS26OCQJF3hpo0PkuOEwuvQZJJvzcQ7xjHmnByS7nO5Svj6cMrpzBKkpuHMg0ZI0OJYXq8tzPvt5kwdRmXjp5FnUEzsI2GcQvQVpKKhK4HvvXptqaz7EpxREuLtdVBvRndhWokpL/wrLDpNnfWHmK5dIpiPtOWZo-&pixel_id=1000060401\';</' + 'script>').appendTo(document.body);
        fbq('track', 'Basket', {
            type: 'add'
        });
        return false;
    }
};
var priceUpdate = function (price) {
    $('#cart-orderprice').find('.product_pr').text(parseInt(price) + ' руб.');
    $('.njs-order-price').data('price', parseInt(price));
};

var discountUpdate = function (discount) {
    if (!discount) {
        $('.msg-ok').remove()
    }
    $('.njs-discount').text(parseInt(discount));
};

var compare = {
    'add': function (product_id) {
        $.ajax({
            url: '/index.php?route=product/compare/add',
            type: 'post',
            data: 'product_id=' + product_id,
            dataType: 'json',
            success: function (json) {
                $('.alert').remove();

                if (json['success']) {
                    var fancyBoxDefaults = {
                        tpl: {
                            closeBtn: '<a title="Закрыть" class="fancybox-item icon icon-cancel" href="javascript:;"></a>',
                            next: '<a title="Следующий" class="fancybox-nav fancybox-next" href="javascript:;"><span class="icon icon-arrDarkRight"></span></a>',
                            prev: '<a title="Предыдущий" class="fancybox-nav fancybox-prev" href="javascript:;"><span class="icon icon-arrDarkLeft"></span></a>'
                        }
                    };
                    $.fancybox([
                        $.extend(fancyBoxDefaults, {
                            href: '#fancybox-compareAdded'
                        })
                    ]);
                    $('.compare-total').html(json['total']);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    },
    'remove': function () {
        // чойта?
    }
}

// function setMyCity(city) {
// 	var form = $('#changeMyCityForm');
// 	form.find('input[name=city]').val(city);
// }
// function changeMyCity() {
// 	var form = $('#changeMyCityForm');
// 	form.find('input[type=submit]').attr('disabled', true);
// 	$.ajax({
// 		url: '/index.php?route=tool/city/change',
// 		type: 'post',
// 		data: form.serialize(),
// 		dataType: 'json',
// 		success: function(json) {
// 			form.find('.result').hide().removeClass('msg-err msg-ok');
// 			form.find('input').removeClass('err');
// 			if (json['error']) {
// 				form.find('.result').addClass('msg-err').html(json['error']).show();
// 			}
// 			if (json['errors']) {
// 				for (var key in json['errors']) {
// 					form.find('input[name='+ key +']').addClass('err');
// 				}
// 			}
// 			if (json['city']) {
// 				$('.my-city').text(json['city']);
// 				$('#citylist-list a').removeClass('active');
// 				$('a[data-key="'+ json['city_key'] +'"]').addClass('active');
// 				$.fancybox.close();
// 			}
// 			if (json['success']) {
// 				form.find('.result').addClass('msg-ok').html(json['success']).show();
// 			}
// 			form.find('input[type=submit]').attr('disabled', false);
// 		}
// 	});
// }

$(document).on('click', '#citylist-list a', function (e) {
    var $a = $(e.currentTarget);
    $.ajax({
        url: '/',
        method: 'GET',
        data: {
            change_user_city: $a.data('city-alias')
        },
        success: function (data) {
            if (data) {
                window.location.href = data;
            } else {
                window.location.reload();
            }
        }
    });
    return false;
});
$(document).on('click', '.one-click-order', function () {
    var $button = $(this),
        fancyBoxDefaults = {
            tpl: {
                closeBtn: '<a title="Закрыть" class="fancybox-item icon icon-cancel" href="javascript:;"></a>',
                next: '<a title="Следующий" class="fancybox-nav fancybox-next" href="javascript:;"><span class="icon icon-arrDarkRight"></span></a>',
                prev: '<a title="Предыдущий" class="fancybox-nav fancybox-prev" href="javascript:;"><span class="icon icon-arrDarkLeft"></span></a>'
            }
        };

    $.fancybox([
        $.extend(fancyBoxDefaults, {
            href: '/one-click-order/' + $button.data('product-id') + '/',
            type: 'ajax',
            afterShow: function () {
                $('#id_phone').mask('+7 (999) 999-99-99');
            }
        })
    ]);

    return false;
});

$(document).on('click', '.one-click-order-free-consultation', function () {
    var $button = $(this),
        fancyBoxDefaults = {
            tpl: {
                closeBtn: '<a title="Закрыть" class="fancybox-item icon icon-cancel" href="javascript:;"></a>',
                next: '<a title="Следующий" class="fancybox-nav fancybox-next" href="javascript:;"><span class="icon icon-arrDarkRight"></span></a>',
                prev: '<a title="Предыдущий" class="fancybox-nav fancybox-prev" href="javascript:;"><span class="icon icon-arrDarkLeft"></span></a>'
            }
        };

    $.fancybox([
        $.extend(fancyBoxDefaults, {
            href: '/one-click-order-free-consultation/' + $button.data('product-id') + '/',
            type: 'ajax',
            afterShow: function () {
                $('#id_phone').mask('+7 (999) 999-99-99');
            }
        })
    ]);

    return false;
});

$(document).on('click', '.want_cheaper', function () {
    var $button = $(this),
        fancyBoxDefaults = {
            tpl: {
                closeBtn: '<a title="Закрыть" class="fancybox-item icon icon-cancel" href="javascript:;"></a>',
                next: '<a title="Следующий" class="fancybox-nav fancybox-next" href="javascript:;"><span class="icon icon-arrDarkRight"></span></a>',
                prev: '<a title="Предыдущий" class="fancybox-nav fancybox-prev" href="javascript:;"><span class="icon icon-arrDarkLeft"></span></a>'
            }
        };

    $.fancybox([
        $.extend(fancyBoxDefaults, {
            href: '/want_cheaper/' + $button.data('product-id') + '/',
            type: 'ajax',
            afterShow: function () {
                $('#id_phone').mask('+7 (999) 999-99-99');
            }
        })
    ]);

    return false;
});

$(document).on('click', '#one-click-order-submit-free', function () {
    var $button = $(this);
    if ($('#id_phone').val() == '') {
        alert('Не заполнен телефон!');
    } else {
        let phone = $('#id_phone').val();
        $.ajax({
            url: '/send_fast_order-submit-free/' + $button.data('product-id') + '/',
            type: 'POST',
            data: {
                'phone': phone,
            },
            dataType: 'json',
            success: function (json) {
                alert('Мы перезвоним вам в ближайшее время!');
                $('.fancybox-wrap .icon-cancel').trigger("click");
                console.log('+')
            }
        });
    }

})

$(document).on('click', '#one-click-order-submit-want-cheaper', function () {
    var $button = $(this);
    if ($('#id_phone').val() == '') {
        alert('Не заполнен телефон!');
    } else {
        let phone = $('#id_phone').val();
        $.ajax({
            url: '/send_fast_order-submit-want-cheaper/' + $button.data('product-id') + '/',
            type: 'POST',
            data: {
                'phone': phone,
            },
            dataType: 'json',
            success: function (json) {
                alert('Мы отправим вам промокод в ближайшее время!');
                $('.fancybox-wrap .icon-cancel').trigger("click");
                console.log('+')
            }
        });
    }

})

$(document).on('click', '#one-click-order-modal #one-click-order-submit', function () {
    if ($('#id_phone').val() == '') {
        alert('Не заполнен телефон!');
    } else {
        if (!$('.product-opts-i .select .optionsoneclick').val()) {
            alert('Выберите опцию!');
        } else {

            var quantity = $('#input-quantity').val();
            var product = $('input[name="product_id"]').val();
            var product_option = $('.product-opts-i .select .optionsoneclick').val();
            var phone = $('#id_phone').val();
            alert('Заказ успешно сформирован! Скоро с вами свяжется наш менеджер.');
            $('.fancybox-wrap .icon-cancel').trigger("click");
            $.ajax({
                url: '/send_fast_order/',
                type: 'POST',
                data: {
                    'quantity': quantity,
                    'phone': phone,
                    'product': product,
                    'product_option': product_option
                },
                dataType: 'json',
                success: function (json) {
                    console.log('+')
                }
            });
            $('<script type="text/javascript">(window.Image ? (new Image()) : document.createElement(\'img\')).src = location.protocol + \'//vk.com/rtrg?r=lR7fl5d*MfRejcHPPjPuyxmtiEiyaF*efVv4GeydRg3Dsgpr9vbWMU/xb210EZHaKWPfvIifWPDvltKaw6kD6vXdEE5snpw8wXjk9EKsry2clri5nvTv2PRK4LV83D0cmSrIl8ihqdtlM83oSdGfzgQXAZyJVUAwcJFss*Z8pd0-&pixel_id=1000060422\';</' + 'script>').appendTo(document.body);

            fbq('track', 'Order', {
                type: 'fast'
            });

        }
    }
});
$(document).on('change', '#one-click-order-modal .optionsoneclick', function () {
    var price = $(this).data('price');
    $('#one-click-order-modal r').html(price);
});
$(document).on('click', '#button-coupon', function () {
    if (!$("#input-coupon").val()) {
        return false;
    }
    $.ajax({
        url: '/coupon-check/',
        type: 'POST',
        data: {
            'coupon': encodeURIComponent($('input[name=\'coupon\']').val()),
            'price': encodeURIComponent($('.njs-order-price').data().price)
        },
        dataType: 'json',
        beforeSend: function () {
        },
        complete: function () {
        },
        success: function (json) {
            $("#input-coupon").val("");
            $('#cart-left_entercode .msg-err').remove();
            $('#cart-left_entercode .msg-ok').remove();

            if (json['error']) {
                $('#button-coupon').after('<div class="msg-err">' + json['error'] + '</div>');
            }

            if (json['success']) {
                $('#button-coupon').after('<div class="msg-ok">' + json['msg'] + '</div>');
                $('#cart-orderprice .product_pr').text(json['final_price'] + ' руб.');
                $('.njs-discount').text(json['discount']);
                if (json['type'] === 0) {
                    $('.njs-discount-type').text('%');
                } else {
                    $('.njs-discount-type').text(' руб.');
                }
            }
        }
    });
});
