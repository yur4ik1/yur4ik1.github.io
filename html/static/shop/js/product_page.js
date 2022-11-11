(function($) {
    $(document).on('click', '#product-availability-info', function () {
        $.fancybox({
            href: '/product-availability-info/' + $(this).data('product-id') + '/',
            type: 'ajax',
            tpl: {
                closeBtn: '<a title="Закрыть" class="fancybox-item icon icon-cancel" href="javascript:void(0)"></a>'
            }
        });
    })
})(jQuery);
var carousel;
$(document).ready(function () {
	var tol_subdomain = true ? window.location.host.split('.')[0]=='tol' : false;
	var price = parseInt($('#price').html());
	$('.product_here .right .whiteblock .options .elem .right-elem.count .counter .number').html('1');
	
	$('.product-preorder-delivery__info').click(function() {
	   closeProductModal();
	});
    
    $('.product-preorder-modal__wrapper').click(function(e) {
    	if (!document.querySelector('.product-preorder-modal__box').contains(e.target)) {
    		closeProductModal();	
    	}
	});
	
	$('.product-preorder-modal__close').click(function() {
	   closeProductModal();
	});	
	
	function closeProductModal() {
		document.body.classList.toggle('fancybox-lock');
		document.body.classList.toggle('fancybox-margin');
		document.querySelector('.product-preorder-modal').classList.toggle('product-preorder-modal_active');
	}
	
	function format(num){
	    var n = num.toString(), p = n.indexOf('.');
	    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function($0, i){
	        return p<0 || i<p ? ($0+' ') : $0;
	    });
	}
	function fullprice(counter, price){
	   // console.log(counter,price);
		$('.big b').html(format(counter*price));
	}
	function change_price(){
	    $('#price').text($('.tastes div.selected').data('price'));
	    $('.product_here .right .whiteblock .prices .elem .right-elem.saleprice .big').text($('.tastes div.selected').data('price') + ' руб.');
	    // $('.product_here .right .whiteblock .prices .elem .right-elem.price span').text($('.tastes div.selected').data('old-price'));
	    $('#product-content_right .right_product_mini p.price_prod_mini').empty();
	    $('#product-content_right .right_product_mini p.price_prod_mini').append($('.tastes div.selected').data('price') + '<span>руб.</span>');
		
	    if ($('.tastes div.selected').data('has-city') == '(в наличии на основном складе)'){
	        if ($('.samovivos') || $('.kur_delivery')){
	            $('.samovivos').hide();
	            $('.kur_delivery').hide();
	        }
	    }else{
	        if ($('.samovivos') || $('.kur_delivery')){
	            $('.samovivos').show();
	            $('.kur_delivery').show();
	        }
	    }
	    
	}
	if ($('.tastes div.selected').data('has-city')){
		$('.elem .nalichie').append($('.tastes div.selected').data('has-city'));
		change_price();
		fullprice(1, price);
	}else{
	    fullprice(1, price);
	}
	
	$("#carousel-image-and-text ul").owlCarousel(
		{
			stopOnHover:true,
			autoPlay : 2000,
			pagination:false,
			responsive:true,
		}
	);
	$("#carousel-image-and-text2 ul").owlCarousel(
		{
			stopOnHover:true,
			autoPlay : 2000,
			pagination:false,
			responsive:true,
		}
	);
	
    $('.product_here .right .bottomblock .navbar .nav-item').click(function(){
    	$('.product_here .right .bottomblock .navbar .nav-item').removeClass('active');
    	$(this).addClass('active');
    	$('.bottomblock .white').hide();
    	$('body').find('#'+$(this).data('id')).show();
    });
    $('.sliderbox .slider-bottom .slider-small').click(function(){
    	$('.sliderbox .slider-main').attr("src", $(this).attr("src"));
    });
    $('.taste').click(function(){
    	$('.taste').removeClass('selected');
    	$(this).addClass('selected');
    	$('.elem .nalichie').empty()
    	$('.elem .nalichie').append($(this).data('has-city'));
    	
    	change_price();
    	price = parseInt($('#price').html());
    	counter_x = parseInt($('.product_here .right .whiteblock .options .elem .right-elem.count .counter .number').html());
    	fullprice(counter_x, price);
    	
    	if (tol_subdomain){ //заказчик попросил пока что только для тлт сделать предзаказ
    		if (($('.tastes div.selected').data('quantity') == 0 && $('.tastes div.selected').data('pre-order') == 'True') || 
    			($('.tastes div.selected').data('quantity') == 0 && $('.tastes div.selected').data('product-available-preorder') == 'True' && $('.tastes div.selected').data('dummy') == 'True')) {
    			$('.sale').html('10% скидка за ожидание');
    			$('.product-preorder-delivery').show();
    			$('.elem .nalichie').append(`(${Math.floor(Math.random() * 3 + 3)}шт. в наличии на основном складе в г.Москва)`);
    		} else {
    			$('.sale').html('15% скидка')
    			$('.product-preorder-delivery').hide();
    		}
    	}
    	
    });
    $('.taste:first-child').click();
    $('.sliderbox .slider-bottom .slider-small:first-child').click();
    
    
    
    // fullprice(1, price);
    $('.product_here .right .whiteblock .options .elem .right-elem.count .counter .plus').click(function(){
    	var counter = parseInt($('.product_here .right .whiteblock .options .elem .right-elem.count .counter .number').html());
    	if(counter<99){
    		counter = counter + 1;
    		$('.product_here .right .whiteblock .options .elem .right-elem.count .counter .number').html((counter).toString());
    	}
    	else{
    		counter = 99;
    		$('.product_here .right .whiteblock .options .elem .right-elem.count .counter .number').html('99');
    	}
    	fullprice(counter, price);
    });
    $('.product_here .right .whiteblock .options .elem .right-elem.count .counter .minus').click(function(){
    	var counter = parseInt($('.product_here .right .whiteblock .options .elem .right-elem.count .counter .number').html());
    	if(counter>1){
    		$('.product_here .right .whiteblock .options .elem .right-elem.count .counter .number').html((counter-1).toString());
    		counter = counter - 1;
    	}
    	else{
    		$('.product_here .right .whiteblock .options .elem .right-elem.count .counter .number').html('1');
    		counter = 1;
    	}	
    	fullprice(counter, price);
    });
    $('#product-content_right').stick_in_parent({offset_top:40});
    
    $('.go_to_questions').click(function() {
      $('body').scrollTo('.questions_product', 500, {offset:-100});
      return false;
    });
    $('.go_recomendation').click(function() {
      $('body').scrollTo('.recomendation_product', 500, {offset:-100});
      return false;
    });
    $('.go_components').click(function() {
      $('body').scrollTo('.components_product', 500, {offset:-100}); 
      return false;
    });
    $('.go_description').click(function() {
      $('body').scrollTo('.description_product', 500, {offset:-100}); 
      return false;
    });
});
