var application = function($) {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({padding: 25})
  })
  $(function () {
    $('[data-toggle="popover"]').popover()
  })

	$('.alert[data-auto-dismiss]').each(function (index, element) {
	    var $element = $(element),
	        timeout  = $element.data('auto-dismiss') || 5000;

	    setTimeout(function () {
	        $element.alert('close');
	    }, timeout);
	});


};

jQuery(document).ready(application);
