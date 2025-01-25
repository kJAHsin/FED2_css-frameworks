class SkinnyFeed extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		console.log('Feed page connected yo!');

		this.addElementToDOM(this);
	}

	addElementToDOM(parent: HTMLElement) {
		const wrapper = document.createElement('div');
		wrapper.className =
			'max-w-wrapper bg-slate-100 mx-auto desk:p-chub pad:p-med mob:p-skinny';
		wrapper.innerHTML = `
			<div>
				<h1 class="text-4xl text-slate-900">Feed</h1>
				<p class="text-tea_green-400">This is the page where you get to spy on people.</p>
			</div>
			`;
		parent.appendChild(wrapper);
		console.log('wrapper appended to: ', parent);
	}
}

customElements.define('skinny-feed', SkinnyFeed);
