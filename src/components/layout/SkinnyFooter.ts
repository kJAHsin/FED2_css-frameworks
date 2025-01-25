import includeTailwindStyles from '../../utilities/includeTailwindCSS.ts';

class SkinnyFooter extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		// console.log('SkinnyFooter connected');

		const shadow = this.shadowRoot;
		if (!shadow) return;

		includeTailwindStyles(shadow);

		const footer = document.createElement('footer');
		footer.className =
			'bg-powder_blue-200 font-skinny w-full absolute bottom-0 top-auto inset-y-0';

		footer.innerHTML = `
            <div class="py-chub max-w-wrapper flex justify-center">footer</div>
        `;

		if (shadow !== null) this.addElementToParent(footer, shadow);
	}

	addElementToParent(element: HTMLElement, parent: HTMLElement | ShadowRoot) {
		if (parent) {
			parent?.appendChild(element);
		} else {
			console.error('NO SHADOW DOM! WHAAAT?!');
		}
	}
}

customElements.define('skinny-footer', SkinnyFooter);
