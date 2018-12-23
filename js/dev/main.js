var funciones = {

	stateSlider_1 : false,
	stateSlider_2 : false,

	chagueRadioAction : function ()
	{
		$('input[name="technologyValue"]').change(function()
		{
			var current = $(this).val();
			if ($('div[data-parent="'+current+'"]'))
			{
				if ( $('div[data-complement="true"].active') )
				{
					$('div[data-complement="true"]').removeClass('active').addClass('d-none')
				};
				$('div[data-parent="'+current+'"]').removeClass('d-none').addClass('active')
			};
		});
	},

	initSliderDiagramsPhotos : function ()
	{
		$('#accordion').on('shown.bs.collapse', function (e)
		{
			if ( (e.target.id == 'collapsePhotosFiles' && funciones.stateSlider_1 == false) )
			{				
				$('#carouselPhotosFile').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					centerMode: true,
					responsive: true
				});

				funciones.stateSlider_1 = true
			};

			if ( (e.target.id == 'collapseAtachments' && funciones.stateSlider_2 == false) )
			{				
				$('#carouselAtachments').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					centerMode: true,
					responsive: true
				});

				funciones.stateSlider_2 = true
			};

		})
	}

}