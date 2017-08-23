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



	toggleMenu();
}