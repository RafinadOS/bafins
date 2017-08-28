window.onload = function()
{
	function toggleMenu()
	{
		var togllerBlock = document.querySelector('[data-role="menu-show"]');
		togllerBlock.addEventListener('click', function()
			{
				this.classList.toggle('is-active');
				document.body.classList.toggle('show-menu');
				
			}, false)
	};

	function showPopup()
	{
		var showPopupLink = document.querySelectorAll('[data-role="show-popup"]');
		var popupClose = document.querySelectorAll('[data-role="popup-close"]');
		var overlay = document.querySelector('[data-role="overlay"]');

		overlay.addEventListener('click', function()
			{
				var popups = document.querySelectorAll('.popup');
				this.classList.remove('overlay-show');
				for(var i = 0; i < popups.length; i++)
				{
					popups[i].classList.remove('popup-show');
				}
			}, false)

		for(var i = 0; i < showPopupLink.length; i++)
		{
			showPopupLink[i].addEventListener('click', function()
				{
					var attr = this.getAttribute('for');
					var popup = document.getElementById(attr);
					popup ?	popup.classList.toggle('popup-show') : null;
					popup ? overlay.classList.toggle('overlay-show') : null;
				}, false)
		}

		for(var i = 0; i < popupClose.length; i++)
		{
			popupClose[i].addEventListener('click', function()
				{
					var attr = this.getAttribute('for');
					var popup = document.getElementById(attr);
					popup ?	popup.classList.toggle('popup-show') : null;
					popup ? overlay.classList.toggle('overlay-show') : null;
				}, false)
		}
	}

	showPopup();
	toggleMenu();
}