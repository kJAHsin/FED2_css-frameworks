class SkinnyWelcome extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		console.log('SkinnyWelcome connected yo!');
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
		return (parent.innerHTML = `
            <h1 class="desk:text-6xl text-nyanza-200">Welcome!</h1>
            <div class="flex justify-center align-middle mob:gap-med gap-skinny mt-med">
                <button class="bg-powder_blue-100 py-skinny px-med rounded-md text-baby_powder-900 hover:bg-powder_blue-400 hover:text-baby_powder-100 transition-colors duration-400">Login</button>
                <button class="bg-powder_blue-100 py-skinny px-med rounded-md text-baby_powder-900 hover:bg-powder_blue-400 hover:text-baby_powder-100 transition-colors duration-400">Register</button>
            </div>
        `);
	}
}

customElements.define('skinny-welcome', SkinnyWelcome);
