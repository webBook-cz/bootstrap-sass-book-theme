var application = function($) {
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip({padding: 25})
	})
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})

	$('.dropdown').on('show.bs.dropdown', function(e){
	      $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
	});
	  
	$('.dropdown').on('hide.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
	});
    
	$('.alert[data-auto-dismiss]').each(function (index, element) {
	    var $element = $(element),
	        timeout  = $element.data('auto-dismiss') || 5000;

	    setTimeout(function () {
	        $element.alert('close');
	    }, timeout);
	});
};

jQuery(document).ready(application);
