// Newsletter modal logic
document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('newsletter-open');
    const modal = document.getElementById('newsletter-modal');
    const closeBtn = document.getElementById('newsletter-close');
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('newsletter-email');
    const successMsg = document.getElementById('newsletter-success');
    if (openBtn && modal && closeBtn && form && emailInput && successMsg) {
        openBtn.addEventListener('click', function() {
            modal.setAttribute('aria-modal', 'true');
            modal.style.display = 'flex';
            emailInput.focus();
        });
        closeBtn.addEventListener('click', function() {
            modal.removeAttribute('aria-modal');
            modal.style.display = 'none';
            form.reset();
            successMsg.style.display = 'none';
        });
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            successMsg.style.display = 'block';
            setTimeout(function() {
                modal.removeAttribute('aria-modal');
                modal.style.display = 'none';
                form.reset();
                successMsg.style.display = 'none';
            }, 2000);
        });
        // Keyboard accessibility
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modal.removeAttribute('aria-modal');
                modal.style.display = 'none';
                form.reset();
                successMsg.style.display = 'none';
            }
        });
    }
});

// Lightbox functionality for gallery images (keyboard and click)
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (gallery && lightbox && lightboxImg) {
        gallery.addEventListener('click', function(e) {
            if (e.target.tagName === 'IMG') {
                lightboxImg.src = e.target.src;
                lightbox.setAttribute('aria-modal', 'true');
                lightbox.style.display = 'flex';
                lightboxImg.focus();
            }
        });
        gallery.addEventListener('keydown', function(e) {
            if (e.target.tagName === 'IMG' && (e.key === 'Enter' || e.key === ' ')) {
                lightboxImg.src = e.target.src;
                lightbox.setAttribute('aria-modal', 'true');
                lightbox.style.display = 'flex';
                lightboxImg.focus();
            }
        });
        lightbox.addEventListener('click', function() {
            lightbox.removeAttribute('aria-modal');
            lightbox.style.display = 'none';
        });
        lightbox.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                lightbox.removeAttribute('aria-modal');
                lightbox.style.display = 'none';
            }
        });
    }
});
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
// Newsletter modal logic
document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('newsletter-open');
    const modal = document.getElementById('newsletter-modal');
    const closeBtn = document.getElementById('newsletter-close');
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('newsletter-email');
    const successMsg = document.getElementById('newsletter-success');
    if (openBtn && modal && closeBtn && form && emailInput && successMsg) {
        openBtn.addEventListener('click', function() {
            modal.style.display = 'flex';
            emailInput.focus();
        });
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            form.reset();
            successMsg.style.display = 'none';
        });
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            successMsg.style.display = 'block';
            setTimeout(function() {
                modal.style.display = 'none';
                form.reset();
                successMsg.style.display = 'none';
            }, 2000);
        });
        // Keyboard accessibility
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
                form.reset();
                successMsg.style.display = 'none';
            }
        });
    }
});
