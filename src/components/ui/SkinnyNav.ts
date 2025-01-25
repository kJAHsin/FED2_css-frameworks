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

        this.addElementToDOM(this);
    }

    addElementToDOM(parent: HTMLElement) {
        const nav = document.createElement('ul');
        nav.role = 'navigation';
        parent.appendChild(nav);
        this.addLinksToNav(nav);
    }

    addLinksToNav(parent: HTMLElement) {
        for (const key in this.navLinks) {
            const link = document.createElement('li');
            const a = document.createElement('a');
            a.href = this.navLinks[key].link;
            a.textContent = this.navLinks[key].textContent;
            link.appendChild(a);
            parent.appendChild(link);
        }
    }
}

customElements.define('skinny-nav', SkinnyNav);
