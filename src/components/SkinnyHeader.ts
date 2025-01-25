class SkinnyHeader extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log('SkinnyHeader connected');
    }
}

customElements.define('skinny-header', SkinnyHeader);
