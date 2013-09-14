jQuery(document).ready(function($){
	$('body').on('change', '.rsgw_from_options', function(e){
		var t = $(this);
		var s = t.parent().next();

		s.find('span').hide();

		if ( 'post' === t.val() )
			s.find('.post_id_option').show();
		else if ( 'ids' === t.val() )
			s.find('.att_ids_option').show();
	});

	$('body').on('change', '.rsgw_orderby_options', function(e){
		var t = $(this);
		var s = t.parent().next();

		if ( 'rand' === t.val() )
			s.find('.rsgw_order_option').hide();
		else
			s.find('.rsgw_order_option').show();
	});

	$('body').on('click', '.toggle', function(e){
		e.preventDefault();
		$(this).parent().next().toggle();
	});
});
