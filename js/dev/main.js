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
	},

	menuPrincipal: function(){
		$('button[data-target="#navBarPrimary"]').click(function(){
			$(this).find('i').toggleClass('icon-menu')
			$(this).find('i').toggleClass('icon-close')
		})
	},

	customSelects: function(){
		var x, i, j, selElmnt, a, b, c;
		/* Look for any elements with the class "custom-select": */
		x = document.getElementsByClassName("custom-select");
		for (i = 0; i < x.length; i++) {
		  selElmnt = x[i].getElementsByTagName("select")[0];
		  /* For each element, create a new DIV that will act as the selected item: */
		  a = document.createElement("DIV");
		  a.setAttribute("class", "select-selected");
		  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		  x[i].appendChild(a);
		  /* For each element, create a new DIV that will contain the option list: */
		  b = document.createElement("DIV");
		  b.setAttribute("class", "select-items select-hide");
		  for (j = 1; j < selElmnt.length; j++) {
		    /* For each option in the original select element,
		    create a new DIV that will act as an option item: */
		    c = document.createElement("DIV");
		    c.innerHTML = selElmnt.options[j].innerHTML;
		    c.addEventListener("click", function(e) {
		        /* When an item is clicked, update the original select box,
		        and the selected item: */
		        var y, i, k, s, h;
		        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
		        h = this.parentNode.previousSibling;
		        for (i = 0; i < s.length; i++) {
		          if (s.options[i].innerHTML == this.innerHTML) {
		            s.selectedIndex = i;
		            h.innerHTML = this.innerHTML;
		            y = this.parentNode.getElementsByClassName("same-as-selected");
		            for (k = 0; k < y.length; k++) {
		              y[k].removeAttribute("class");
		            }
		            this.setAttribute("class", "same-as-selected");
		            break;
		          }
		        }
		        h.click();
		    });
		    b.appendChild(c);
		  }
		  x[i].appendChild(b);
		  a.addEventListener("click", function(e) {
		    /* When the select box is clicked, close any other select boxes,
		    and open/close the current select box: */
		    e.stopPropagation();
		    closeAllSelect(this);
		    this.nextSibling.classList.toggle("select-hide");
		    this.classList.toggle("select-arrow-active");
		  });
		}

		function closeAllSelect(elmnt) {
		  /* A function that will close all select boxes in the document,
		  except the current select box: */
		  var x, y, i, arrNo = [];
		  x = document.getElementsByClassName("select-items");
		  y = document.getElementsByClassName("select-selected");
		  for (i = 0; i < y.length; i++) {
		    if (elmnt == y[i]) {
		      arrNo.push(i)
		    } else {
		      y[i].classList.remove("select-arrow-active");
		    }
		  }
		  for (i = 0; i < x.length; i++) {
		    if (arrNo.indexOf(i)) {
		      x[i].classList.add("select-hide");
		    }
		  }
		}

		/* If the user clicks anywhere outside the select box,
		then close all select boxes: */
		document.addEventListener("click", closeAllSelect);
	}

}