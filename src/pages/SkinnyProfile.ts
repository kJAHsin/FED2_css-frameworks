class SkinnyProfile extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		console.log('Your very own page connected yo!');

		this.addElementToDOM(this);
	}

	addElementToDOM(parent: HTMLElement) {
		const wrapper = document.createElement('div');
		wrapper.className =
			'max-w-wrapper bg-slate-100 mx-auto desk:p-chub pad:p-med mob:p-skinny';
		wrapper.innerHTML = `
				<h1 class="text-4xl text-slate-900">Profile</h1>
				<p class="text-tea_green-400">This is all your page.</p>
			`;
		parent.appendChild(wrapper);
		console.log('wrapper appended to: ', parent);
	}
}

customElements.define('skinny-profile', SkinnyProfile);
