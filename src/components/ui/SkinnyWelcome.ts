class SkinnyWelcome extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.addElementToDOM(this);
		this.className = 'grid place-content-center';
	}

	addElementToDOM(parent: HTMLElement) {
		const welcomeBox = document.createElement('div');
		welcomeBox.className =
			'bg-baby_powder-900 text-center p-chub my-med rounded-md';
		this.renderWelcomeBox(welcomeBox);
		parent.appendChild(welcomeBox);
	}

	renderWelcomeBox(parent: HTMLElement) {
		parent.innerHTML = `
			<h1 class="desk:text-6xl text-nyanza-200">Welcome!</h1>
			<form id="welcome-form" class="flex justify-center align-middle mob:gap-med gap-skinny mt-med">
				<button type="submit" id='login-btn' class="bg-powder_blue-100 py-skinny px-med rounded-md text-baby_powder-900 hover:bg-powder_blue-400 hover:text-baby_powder-100 transition-colors duration-400">Login</button>
				<button type="submit" id='register-btn' class="bg-powder_blue-100 py-skinny px-med rounded-md text-baby_powder-900 hover:bg-powder_blue-400 hover:text-baby_powder-100 transition-colors duration-400">Register</button>
			</form>
		`;

		this.addWelcomeListeners(parent);
	}

	addWelcomeListeners(parent: HTMLElement) {
		const form = parent.querySelector('#welcome-form') as HTMLFormElement;
		const loginBtn = parent.querySelector<HTMLButtonElement>('#login-btn');
		const registerBtn =
			parent.querySelector<HTMLButtonElement>('#register-btn');

		if (loginBtn)
			loginBtn.addEventListener('click', (event) => {
				event.preventDefault();
				form.action = '/login/';
				form.submit();
			});

		if (registerBtn)
			registerBtn.addEventListener('click', (event) => {
				event.preventDefault();
				form.action = '/register/';
				form.submit();
			});
	}
}

customElements.define('skinny-welcome', SkinnyWelcome);
