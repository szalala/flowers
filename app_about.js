document.addEventListener("DOMContentLoaded", function() { 

	const buttonMoreLess = document.querySelector('.read-more-less');
	const longDescription = document.querySelector('.long-description');
	
	buttonMoreLess.addEventListener('click', function() {
		if (longDescription.style.display === 'none' || longDescription.style.display === '') {
			longDescription.style.display = 'block';
			buttonMoreLess.innerHTML = lesstext;

		} else {
			longDescription.style.display = 'none';
			buttonMoreLess.innerHTML = markup;	
		}
	});

	const markup = buttonMoreLess.innerHTML;
	buttonMoreLess.innerHTML = 'Read more '+ '<i class="fas fa-caret-down"></i>';

	const lesstext = 'Read less '+ '<i class="fas fa-caret-up"></i>';






});
