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
		$('label[data-toggle="buttons"]').click(function () {
			
			var obj = $(this).find('input');
			var span = $(this).find('span');
			var type = $(obj).attr('type');

			switch (type) {
				case 'checkbox':
					if ($(obj).is(':checked'))
					{
						$(obj).prop( "checked", false )
						$(span).removeClass('icon-check_box').addClass('icon-check_box_outline_blank')
					}
					else{
						$(obj).prop( "checked", true )
						$(span).removeClass('icon-check_box_outline_blank').addClass('icon-check_box')
					}
					break;
				case 'radio':

					if ($(obj).is(':checked'))
					{
						$(obj).prop( "checked", false )
						//$(span).removeClass('icon-radio_button_checked').addClass('icon-radio_button_unchecked')
					}
					else{
						$(obj).prop( "checked", true )
						//$(span).removeClass('icon-radio_button_unchecked').addClass('icon-radio_button_checked')
					}
					break;
			}

		})

		$('label[data-toggle="buttons"] input[type="radio"]').change(function()
		{
			var name = $(this).attr('name');
			var span = $(this).parent().find('span');
			
			if ($(this).is(':checked'))
			{
				$('input[type="radio"][name="'+name+'"]').parent().find('span').removeClass('icon-radio_button_checked').addClass('icon-radio_button_unchecked')
				$('input[type="radio"][name="'+name+'"]').parent().removeClass('active');
				$(span).removeClass('icon-radio_button_unchecked').addClass('icon-radio_button_checked')
			}
			else{
				$(span).removeClass('icon-radio_button_checked').addClass('icon-radio_button_unchecked')
			}

		});
	}

}