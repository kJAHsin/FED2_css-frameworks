import './style.css';
import './components/layout/SkinnyHeader.ts';
import './components/layout/SkinnyFooter.ts';

console.clear();
renderMainContent();

async function router(page: string = window.location.pathname) {
	console.log('routing!');
	if (page) {
		console.log('routing to page: ', page);
		switch (page) {
			case '/':
				await import('./pages/SkinnyHome.ts');
				return '<skinny-home></skinny-home>';
			case '/login/':
				await import('./pages/SkinnyLogin.ts');
				return '<skinny-login></skinny-login>';
			case '/register/':
				await import('./pages/SkinnyRegister.ts');
				return '<skinny-register></skinny-register>';
			case '/feed/':
				await import('./pages/SkinnyFeed.ts');
				return '<skinny-feed></skinny-feed>';
			case '/profile/':
				await import('./pages/SkinnyProfile.ts');
				return '<skinny-profile></skinny-profile>';
			default:
				console.error('404: page not found, my guy!');
				render404();
				break;
		}
	}
	return render404();
}

async function renderMainContent() {
	document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
      <skinny-header></skinny-header>
      <main class="min-h-screen">
        ${await router()}
      </main>
      <skinny-footer></skinny-footer>
    </div>
  `;
}

function render404() {
	return `
		<div class="grid justify-center mt-chub text-center text-baby_powder-500">    
			<h1 class="text-6xl text-baby_powder-100">404:</h1>
			<span>page not found</span>
			<span>it's ok.</span>
		</div>
	`;
}
