interface NavLinks {
    textContent: string;
    link: string;
}

interface NavLinksLabels {
    [key: string]: NavLinks;
}

const navLinks: NavLinksLabels = {
    home: {
        textContent: 'Home',
        link: '/home/',
    },
    login: {
        textContent: 'Login',
        link: '/login/',
    },
    register: {
        textContent: 'Register',
        link: '/register/',
    },
};

class SkinnyNav extends HTMLElement {
    navLinks: NavLinksLabels = {};

    constructor() {
        super();
        this.navLinks = navLinks;
    }

    connectedCallback() {
        console.log('SkinnyNav connected yo!');
        console.log(this.navLinks || 'what the heck?');
    }

    // addElementToDOM() {
    //     const nav = document.createElement('ul');
    //     nav.role = 'navigation';
    // }
}

customElements.define('skinny-nav', SkinnyNav);
