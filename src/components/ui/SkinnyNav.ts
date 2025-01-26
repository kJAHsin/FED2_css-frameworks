import tailwindConfig from '../../../tailwind.config.js';

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
	menuOpen: boolean = false;

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
		nav.className =
			'group flex desk:flex-row flex-col items-start desk:space-x-chub desk:space-y-0 space-y-med fixed top-skinny right-skinny desk:static';
		nav.style.display = this.isMenuOpen() ? 'flex' : 'none';
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
				'pad:text-2xl border-2 border-tea_green-100 text-tea_green-800 group-hover:text-tea_green-500 transition-all duration-300 hover:underline underline-offset-8 p-0';
			link.className = 'py-skinny px-skinny';

			listItem.appendChild(link);
			parent.appendChild(listItem);
		}
	}

	getBreakpointValue(): number {
		// const tailwindConfig = await loadTailwindConfig();
		const breakpoint = tailwindConfig.theme.screens.pad;
		console.log(parseInt(breakpoint, 10));
		return parseInt(breakpoint, 10);
	}

	isMenuOpen(): boolean {
		const breakpoint = this.getBreakpointValue();
		if (window.innerWidth > breakpoint) {
			return true;
		} else {
			return false;
		}
	}
}

customElements.define('skinny-nav', SkinnyNav);
