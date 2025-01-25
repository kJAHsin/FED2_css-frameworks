import includeTailwindStyles from '../../utilities/include-tailwind-styles.ts';
import '../ui/SkinnyNav.ts';

class SkinnyHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log('SkinnyHeader connected');

        const shadow = this.shadowRoot;
        if (!shadow) return;

        includeTailwindStyles(shadow);

        const header = document.createElement('header');
        header.className = 'bg-powder_blue-300 font-skinny';

        header.innerHTML = `
            <div class="desk:py-chub desk:px-med pad:py-med pad:px-skinny mob:py-skinny mob:px-skinny max-w-wrapper mx-auto">
                <h1 class="text-tea_green-600 text-4xl">FAKE<span class="text-baby_powder-300">book</span></h1>
                <skinny-nav></skinny-nav>
            </div>
        `;

        if (shadow !== null) this.addElementToDOM(header, shadow);
    }

    addElementToDOM(
        element: HTMLElement,
        parent: HTMLElement | ShadowRoot,
    ) {
        if (parent) {
            parent?.appendChild(element);
        } else {
            console.error('NO SHADOW DOM! WHAAAT?!');
        }
    }
}

customElements.define('skinny-header', SkinnyHeader);
