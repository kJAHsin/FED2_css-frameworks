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
		link: '/',
	},
	login: {
		textContent: 'Login',
		link: '/login/',
	},
	register: {
		textContent: 'Register',
		link: '/register/',
	},
	feed: {
		textContent: 'Feed',
		link: '/feed/',
	},
	profile: {
		textContent: 'Profile',
		link: '/profile/',
	},
};

class SkinnyNav extends HTMLElement {
	navLinks: NavLinksLabels = {};

	constructor() {
		super();
		this.navLinks = navLinks;
	}

	connectedCallback() {
		// console.log('SkinnyNav connected yo!');

		this.addElementToDOM(this);
	}

	addElementToDOM(parent: HTMLElement) {
		const nav = document.createElement('ul');
		nav.role = 'navigation';
		nav.className = 'group flex pad:space-x-chub space-x-skinny';
		parent.appendChild(nav);
		this.addLinksToNav(nav);
	}

	addLinksToNav(parent: HTMLElement) {
		for (const key in this.navLinks) {
			const listItem = document.createElement('li');
			const link = document.createElement('a');
			link.href = this.navLinks[key].link;
			link.textContent = this.navLinks[key].textContent;

			listItem.className =
				'pad:text-2xl text-tea_green-800 group-hover:text-tea_green-500 transition-all duration-300 hover:underline underline-offset-8 p-0';
			link.className = 'py-skinny px-skinny';

			listItem.appendChild(link);
			parent.appendChild(listItem);
		}
	}
}

customElements.define('skinny-nav', SkinnyNav);
