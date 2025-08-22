// Lightbox functionality for gallery images
document.addEventListener('DOMContentLoaded', function() {
	const gallery = document.getElementById('gallery');
	const lightbox = document.getElementById('lightbox');
	const lightboxImg = document.getElementById('lightbox-img');
	if (gallery && lightbox && lightboxImg) {
		gallery.addEventListener('click', function(e) {
			if (e.target.tagName === 'IMG') {
				lightboxImg.src = e.target.src;
				lightbox.style.display = 'flex';
			}
		});
		lightbox.addEventListener('click', function() {
			lightbox.style.display = 'none';
		});
	}
});
