class SkinnyHome extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		console.log('Home connected yo!');

		this.addElementToDOM(this);
	}

	addElementToDOM(parent: HTMLElement) {
		const wrapper = document.createElement('div');
		wrapper.className =
			'max-w-wrapper bg-slate-100 mx-auto desk:p-chub pad:p-med mob:p-skinny';
		wrapper.innerHTML = `
			<div>
				<h1 class="text-4xl text-slate-900">Home</h1>
				<p class="text-tea_green-400">This is the home page.</p>
			</div>
			`;
		parent.appendChild(wrapper);
		console.log('wrapper appended to: ', parent);
	}
}

customElements.define('skinny-home', SkinnyHome);
