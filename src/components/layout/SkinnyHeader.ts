import includeTailwindStyles from '../../utilities/includeTailwindCSS.ts';
import '../ui/SkinnyNav.ts';

class SkinnyHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		const shadow = this.shadowRoot;
		if (!shadow) return;

		includeTailwindStyles(shadow);

		const header = document.createElement('header');
		header.className = 'bg-powder_blue-300 font-skinny';

		header.innerHTML = `
            <div class="max-w-wrapper mx-auto flex justify-between items-center isolate desk:py-chub desk:px-med py-med px-skinny">
                <a class="group" href="/home/">
                    <h1 class="relative text-4xl text-tea_green-600 after:content-[''] after:absolute after:h-med after:aspect-square after:rounded-full after:bg-none group-hover:after:bg-nyanza-200 after:-left-5 after:-top-0 after:-z-10 after:transition-all after:duration-700">
                        FAKE
                        <span class="relative text-baby_powder-300 group-hover:text-baby_powder-200 transition duration-300">
                            book
                            <span class="absolute top-auto -bottom-1 -right-1 -left-8 h-2 bg-gradient-to-r bg-hover-reveal from-powder_blue-300 from-40% to-slate_gray-100 to-60% rounded-full bg-left group-hover:bg-right transition-all duration-500"></span>
                        </span>
                    </h1>
                </a>
                <skinny-nav></skinny-nav>
            </div>
        `;

		if (shadow !== null) this.addElementToParent(header, shadow);
	}

	addElementToParent(element: HTMLElement, parent: HTMLElement | ShadowRoot) {
		if (parent) {
			parent?.appendChild(element);
		} else {
			console.error('NO SHADOW DOM! WHAAAT?!');
		}
	}
}

customElements.define('skinny-header', SkinnyHeader);
