import includeTailwindStyles from '../../utilities/include-tailwind-styles.ts';

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

        header.innerHTML = `
            <div>
                <h1 class="text-tea_green-600 text-4xl">FAKE<span>book</span></h1>
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
