import '../components/ui/SkinnyWelcome.ts';

class SkinnyHome extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.addElementToDOM(this);
	}

	addElementToDOM(parent: HTMLElement) {
		const wrapper = document.createElement('div');
		wrapper.className =
			'max-w-wrapper bg-slate-100 mx-auto desk:p-chub desk:pt-med pad:p-med pad:pt-squish mob:p-skinny';
		wrapper.innerHTML = `			
				<h1 class="text-4xl text-slate-900">Home</h1>
				<p class="text-tea_green-400">This is the home page.</p>
				<skinny-welcome></skinny-welcome>			
			`;
		parent.appendChild(wrapper);
	}
}

customElements.define('skinny-home', SkinnyHome);
