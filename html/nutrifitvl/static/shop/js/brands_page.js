(function($) {

    function filter(filter, query) {
        query = $.trim(query);
        $(filter).each(function () {
            ($(this).find('a').text().search(new RegExp(query, "i")) < 0) ? $(this).hide() : $(this).show();
        });
        $('.list').each(function () {
            var list_hide = false;
            $(this).find(filter).each(function () {
                if ($(this).is(':visible')) {
                    list_hide = true;
                }
            });
            if (!list_hide) {
                $(this).hide();
            }
        });
    }

    $(document).ready(function () {
        $('#searchBrand').keyup(function (event) {
            if (event.keyCode == 27 || $(this).val() == '') {
                $(this).val('');
                $('.list_item').show();
                $('.list').show();
            } else {
                $('.list_item').show();
                $('.list').show();
                filter('.list_item', $(this).val());
            }
        });
    });


})(jQuery);
