window.hideMainScroll = function (toggler) {
    if (toggler && (toggler === true) && !document.body.classList.contains('hideMainScroll') && document.documentElement.scrollHeight !== document.documentElement.clientHeight) {
        document.body.classList.add('hideMainScroll')
    } else {
        document.body.classList.remove('hideMainScroll')
    }
}

window.smartModal = {
	init() {
		this.handlers();
	},
	handlers() {
		const overlays = document.querySelectorAll('.smart-modal__overlay, .smart-modal__close');

		overlays.forEach(overlay => {
			overlay.addEventListener('click', (e) => {
				let modal = e.currentTarget.closest('.smart-modal');

				smartModal.close(modal.getAttribute('id'));
			});
		});
	},
	open(id) {
		const modal = document.getElementById(id);

		if (modal) {
			modal.classList.add('is-show');
			setTimeout(() => {
				modal.classList.add('is-animate');
			}, 100);
			window.hideMainScroll(true);
		}
	},
	close(id) {
		if (id) {
			const modal = document.getElementById(id);

			if (modal) {
				modal.classList.remove('is-animate');
				setTimeout(() => {
					modal.classList.remove('is-show');
				}, 500);
			}
		} else {
			const modals = document.querySelectorAll('.smart-modal');

			modals.forEach(modal => {
				modal.classList.remove('is-animate');
				setTimeout(() => {
					modal.classList.remove('is-show');
				}, 500);
			});
		}
        setTimeout(() => {
            window.hideMainScroll();
        }, 100);
	},
};

window.smartModal.init();


let byModalTrigger = document.querySelectorAll('.js-modal');
byModalTrigger.forEach( trigger => {
	trigger.addEventListener('click', (e) => {
        // console.log(trigger.getAttribute('href'));
        e.preventDefault();
		smartModal.open(trigger.getAttribute('href'))
	})
})

