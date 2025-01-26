class SkinnyLogin extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		console.log('Login page connected yo!');

		this.addElementToDOM(this);
	}

	addElementToDOM(parent: HTMLElement) {
		const wrapper = document.createElement('div');
		wrapper.className =
			'grid max-w-wrapper bg-slate-100 mx-auto desk:p-chub pad:p-med mob:p-skinny';
		wrapper.innerHTML = `
				<h1 class="text-4xl text-slate-900">Login</h1>
				<p class="text-tea_green-400">This is the login page.</p>
			`;
		this.addLoginForm(wrapper);
		parent.appendChild(wrapper);
		console.log('wrapper appended to: ', parent);
	}

	addLoginForm(parent: HTMLElement) {
		const form = document.createElement('form');
		form.action = '/profile/';
		form.method = 'POST';
		form.className =
			'max-w-wrapper bg-nyanza-400 mx-auto desk:p-chub desk:pt-med pad:p-med pad:pt-squish mob:p-skinny';
		form.innerHTML = `
			<div>
				<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
				<input type="email" id="email" name="email" required class="mt-1 inline-block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-tea_green-500 focus:border-tea_green-500 sm:text-sm">
			</div>
			<div>
				<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
				<input type="password" id="password" name="password" minLength="8" required class="mt-1 inline-block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-tea_green-500 focus:border-tea_green-500 invalid:outline-baby_powder-100 sm:text-sm">
			</div>
			<div>
				<button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-tea_green-600 hover:bg-tea_green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tea_green-500">Login</button>
			</div>
		`;
		parent.appendChild(form);
		this.formValidation(form);
	}

	formValidation(form: HTMLFormElement): boolean {
		let isValid = false;
		form.onsubmit = (e) => {
			e.preventDefault();
			const emailRegex = /@(?:stud\.)?noroff\.no$/;
			const email = form.querySelector('#email') as HTMLInputElement;
			const userName: string = email.value.split('@')[0]; // const password = form.querySelector('#password') as HTMLInputElement; // not used yet
			isValid = email.value.match(emailRegex) ? true : false; // if email is valid, set isValid to true
			this.navigateToProfile(isValid, form, userName);
		};
		return isValid;
	}

	navigateToProfile(valid: boolean, form: HTMLFormElement, userName: string) {
		if (valid) {
			form.innerHTML = `
				<h2 class="text-2xl text-slate-900 text-center">Well, look at you!</h2>
				<p class="text-tea_green-100 text-center text-balance mx-auto max-w-[28ch]">You managed to log in. Wasn't that hard, was it? Congrats anyway, champ!</p>
			`;
			console.log('login successful!');
			console.log('redirecting to profile page...');
			setTimeout(() => {
				window.location.pathname = '/profile/';
				window.localStorage.setItem('userName', userName);
			}, 2750);
		} else {
			console.error('whooops! fix that email, my friend!');
		}
	}
}

customElements.define('skinny-login', SkinnyLogin);
