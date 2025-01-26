import './style.css';
import './components/layout/SkinnyHeader.ts';
import './components/layout/SkinnyFooter.ts';
import setPageTitle from './utilities/setPageTitle.ts';

renderMainContent();

async function router(page: string = window.location.pathname) {
	console.log('routing!');
	if (page) {
		console.log('routing to page: ', page);
		switch (page) {
			case '/':
				await import('./pages/SkinnyHome.ts');
				setPageTitle(page, null);
				return '<skinny-home></skinny-home>';
			case '/login/':
				await import('./pages/SkinnyLogin.ts');
				setPageTitle(page, null);
				return '<skinny-login></skinny-login>';
			case '/register/':
				await import('./pages/SkinnyRegister.ts');
				setPageTitle(page, null);
				return '<skinny-register></skinny-register>';
			case '/feed/':
				await import('./pages/SkinnyFeed.ts');
				setPageTitle(page, null);
				return '<skinny-feed></skinny-feed>';
			case '/profile/':
				await import('./pages/SkinnyProfile.ts');
				setPageTitle(page, null);
				return '<skinny-profile></skinny-profile>';
			default:
				console.error('404: page not found, my guy!');
				render404();
				break;
		}
	}
}

async function renderMainContent() {
	document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
      <skinny-header></skinny-header>
      <main>
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
