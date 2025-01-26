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
	isMenuToggled: boolean = false;
	nav: HTMLElement | null = null;

	constructor() {
		super();
		this.navLinks = navLinks;
	}

	connectedCallback() {
		console.log('SkinnyNav connected yo!');
		this.addElementToDOM(this);
		this.updateMenuVisibility();
		window.addEventListener('resize', () => this.updateMenuVisibility());
	}

	addElementToDOM(parent: HTMLElement) {
		const button = document.createElement('button');
		button.className = 'fixed top-med right-med desk:hidden';
		button.innerHTML = `
            <span class="block w-chub h-skinny bg-tea_green-800 mb-1 rounded-full"></span>
            <span class="block w-chub h-skinny bg-tea_green-800 mb-1 rounded-full"></span>
            <span class="block w-chub h-skinny bg-tea_green-800 rounded-full"></span>
        `;
		button.addEventListener('click', () => this.toggleMenu());

		const nav = document.createElement('ul');
		nav.role = 'navigation';
		nav.className =
			'bg-powder_blue-300 rounded-bl-md desk:bg-none mt-chub group flex-col items-start space-y-med fixed top-chub right-0 p-med desk:static desk:p-0 desk:flex-row desk:space-x-chub desk:space-y-0 desk:mt-0';
		nav.style.display = this.isMenuOpen() ? 'flex' : 'none';

		parent.appendChild(nav);
		parent.appendChild(button);

		this.addLinksToNav(nav);
		this.nav = nav;
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

	toggleMenu() {
		this.menuOpen = !this.menuOpen;
		this.updateMenuVisibility();
	}

	isMenuOpen() {
		return this.menuOpen;
	}

	updateMenuVisibility() {
		const breakpoint = this.getBreakpointValue();
		if (window.innerWidth > breakpoint) {
			this.nav!.style.display = 'flex';
		} else {
			this.nav!.style.display = this.isMenuOpen() ? 'flex' : 'none';
		}
	}

	getBreakpointValue(): number {
		const breakpoint = tailwindConfig.theme.screens.desk;
		return parseInt(breakpoint, 10);
	}
}

customElements.define('skinny-nav', SkinnyNav);
