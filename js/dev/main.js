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
	},

	initSliderDiagramsPhotosOut : function ()
	{
		$('#carouselAtachments').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			centerMode: true,
			responsive: true
		});
	},



	tooltip : function()
	{
		$(".tooltip-orthotic").focusin(function() {
			$(this).parent().find(".tooltip-orthoticText").css( "display", "block" ); //EJECUTAR PARA ABRIR TOOLTIP
		});

		$( ".tooltip-orthotic" ).focusout(function() {
			$(this).parent().find(".tooltip-orthoticText").css( "display", "none" ); //EJECUTAR PARA CERRAR TOOLTIP
		});
	},

	checkboxRadios : function()
	{
		$('.btn-checkbox').on('click', function() { 
			if ($(this).hasClass("active"))
			{
				$(this).find('span').removeClass('fa-check-square-o').addClass('fa-square-o')
			}
			else
			{
				$(this).find('span').removeClass('fa-square-o').addClass('fa-check-square-o')
			}
		});

		$('.btn-radios').on('click', function() { 
			if (!$(this).hasClass("active"))
			{
				$(this).parent().parent().find('div.form-group').find('label').find('span').removeClass('fa-dot-circle-o').addClass('fa-circle-o')
				$(this).find('span').removeClass('fa-circle-o').addClass('fa-dot-circle-o')
			}
		});
	}

}