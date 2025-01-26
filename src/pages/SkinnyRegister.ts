class SkinnyRegister extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		console.log('Registrrrrration page connected yo!');

		this.addElementToDOM(this);
	}

	addElementToDOM(parent: HTMLElement) {
		const wrapper = document.createElement('div');
		wrapper.className =
			'max-w-wrapper bg-slate-100 mx-auto desk:p-chub desk:pt-med pad:p-med pad:pt-squish mob:p-skinny';
		wrapper.innerHTML = `
				<h1 class="text-4xl text-slate-900">Register Yoself!</h1>
				<p class="text-tea_green-400">This is the registration page.</p>
			`;
		parent.appendChild(wrapper);
		console.log('wrapper appended to: ', parent);
	}
}

customElements.define('skinny-register', SkinnyRegister);
