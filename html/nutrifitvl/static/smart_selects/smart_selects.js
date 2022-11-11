(function($) {

    // Обновление ссылки добавления сущности. Добавляется дефолт из родительского поля
    var update_addlink = function(chained) {
        var add_btn = chained.nextAll('.add-related');
        if (add_btn.length) {
            var url = add_btn.attr('href').split('?');
            if (url.length) {
                url = url[0];
                var parent_modelnames = chained.data('parent-model-fields').split(','),
                    parent_ids = chained.data('parentfield_ids').split(','),
                    getquery = [];

                parent_ids.forEach(function(name, index) {
                    getquery.push(parent_modelnames[index] + "=" + $('#'+name).val());
                });

                url += '?' + getquery.join('&');
                add_btn.attr('href', url);
            }
        }
    };

    // Получение родительских полей
    var get_parents = function(elem){
        var parent_selectors = elem.data('parentfield_ids').split(',').map(function(parent_id){return '#'+parent_id});
            return $(parent_selectors.join(', '));
    };


    // Для возможности использовать при ajax
    window.bindSmartSelect = function() {
        // Проходим по зависимым полям и ставим их родителям отметку
        // о том, что от них зависят поля
        $('select.chained:not(.processed)').each(function() {

            var self = $(this).addClass('processed'),
                parents = get_parents(self);
            fill_field(parents, self);

            parents.each(function(){
                $(this).addClass('has_chained');
                if (self.attr('name').split('-').length > 1) {
                    // Formset
                    var class_name = 'ss_' + self.attr('name');
                    self.addClass(class_name);

                    var chained_classes = $(this).data('chained_classes') || [];
                    chained_classes.push(class_name);
                    $(this).data('chained_classes', chained_classes);
                } else {
                    var chained_ids = $(this).data('chained_ids') || [];
                    chained_ids.push(self.attr('id'));
                    $(this).data('chained_ids', chained_ids);
                }
            });
        });
    };

    var fill_field = function(parents, chained) {

        var chained_val = chained.val(),
            chained_data = chained.data(),
            empty_label = chained_data.empty_label,
            data = {};

        parents.each(function(index){
            var parent_val = $(this).val(),
                lookup = chained.data('lookupfor-'+$(this).attr('id'));

            // Callback
            chained.trigger('before_load.smart-select', [parent_val]);

            if (!parent_val) {
                if (empty_label) {
                    chained.html('<option value="" selected="selected">' + empty_label + '</option>');
                } else {
                    chained.html('');
                }
                chained.trigger('after_load.smart-select');
                chained.trigger('change');
            }else{
                data[lookup]=parent_val;
            }
        });

        // Обновление ссылки добавления
        update_addlink(chained);

        if ($.isEmptyObject(data)) return;

        data['filter_field'] = chained_data.filter_field || '';
        data['filter_value'] = chained_val;
        data['application'] = chained_data.application;
        data['model_name'] = chained_data.model_name;
        data['prefix'] = chained_data.prefix;
        data['name'] = chained.attr('name');


        chained.prop('disabled', true);
        $.ajax({
            type: 'POST',
            url: chained_data.url,
            data: data,
            cache: true,
            dataType: 'json',
            success: function(response) {
                var options = '',
                    response_len = response.length;

                if (empty_label) {
                    options = '<option value="">' + empty_label + '</option>'
                }

                // Формируем список опций
                for (var i=0; i<response_len; i++) {
                    options += '<option value="' + response[i].value + '">' + response[i].display + '</option>';
                }

                chained.html(options);
                if (chained_val) {
                    chained.find('option[value="'+ chained_val +'"]').attr('selected', 'selected');
                } else {
                    chained.find('option:first').attr('selected', 'selected');
                }


                if (chained_data.auto_choose && response.length == 1) {
                    chained.val(response[0].value);
                }

                chained.prop('disabled', false);
                chained.trigger('after_load.smart-select');
                chained.trigger('change');
                if(jQuery().suit_linked_select) {
                    jQuery(chained).suit_linked_select();
                }
            },
            error: function() {
                chained.prop('disabled', false);
                chained.trigger('after_load.smart-select');
            }
        })
    };

    // Событие изменения родительского селекта
    $(document).on('change', '.has_chained', function() {
        var index,
            parents,
            self = $(this),
            chained_ids = self.data('chained_ids'),
            chained_classes = self.data('chained_classes');

        for (index in chained_ids) {
            var chained = $('#'+chained_ids[index]);
                parents = get_parents(chained);

            fill_field(parents, chained);
        }

        for (index in chained_classes) {
            var chained_fields = $('select.'+chained_classes[index]);

            chained_fields.each(function() {
                fill_field(get_parents($(this)), $(this));
            })
        }
    });


    $(document).ready(function(){
        $('.smart-select-exclude .chained').removeClass('chained').addClass('select-exclude');
        bindSmartSelect();
    });

    if (typeof(dismissAddAnotherPopup) !== 'undefined') {
        var oldDismissAddAnotherPopup = dismissAddAnotherPopup;
        window.dismissAddAnotherPopup = function(win, newId, newRepr) {
            oldDismissAddAnotherPopup(win, newId, newRepr);

            var name = windowname_to_id(win.name);
            document.getElementById(name).change();
        }
    }

    if (typeof(dismissRelatedLookupPopup) !== 'undefined') {
        var oldDismissRelatedLookupPopup = dismissRelatedLookupPopup;
        window.dismissRelatedLookupPopup = function(win, chosenId) {
            oldDismissRelatedLookupPopup(win, chosenId);

            var name = windowname_to_id(win.name);
            document.getElementById(name).change();
        }
    }

})((window.django && django.jQuery) || jQuery);