class SkinnyHeader extends HTMLElement {
   constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot!.innerHTML = `
         <style>
            :host {
               display: block;
               background-color: #f8f9fa;
               padding: 10px;
               font-size: 1.2em;
               text-align: center;
            }
         </style>
         <div>
            Skinny Header
         </div>
      `;
   }
}

customElements.define('skinny-header', SkinnyHeader);