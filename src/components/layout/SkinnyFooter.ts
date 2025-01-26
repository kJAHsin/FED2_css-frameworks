import includeTailwindStyles from '../../utilities/includeTailwindCSS.ts';

class SkinnyFooter extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		const shadow = this.shadowRoot;
		if (!shadow) return;

		includeTailwindStyles(shadow);

		const footer = document.createElement('footer');
		footer.className =
			'w-full inset-y-0 top-auto bg-powder_blue-200 font-skinny';

		footer.innerHTML = `
            <div class="flex justify-center max-w-wrapper py-chub">footer</div>
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
