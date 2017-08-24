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
		var popupLink = document.querySelectorAll('[data-role="show-popup"]');
		for(var i = 0; i < popupLink.length; i++)
		{
			popupLink[i].addEventListener('click', function()
				{
					var attrFor = this.getAttribute('for');
					var popup = document.getElementById(attrFor);
					// console.log(attrFor);
					popup ? popup.classList.toggle('popup-show') : (return);
				}, false)
		}		
	}

	showPopup();
	toggleMenu();
}