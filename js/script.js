window.onload = function () {
	document.querySelector('.tabs-header').addEventListener('click', fTabs);
	let count = 0;

	function fTabs(Event) {
		if (Event = true && count % 2 == 0) {
			document.querySelector('.tabs-body').style.display = 'block';
			count++;
		} else {
			document.querySelector('.tabs-body').style.display = 'none';
			count++;
		}
	}
}
