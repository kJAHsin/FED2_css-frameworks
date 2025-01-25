import './style.css';
import './components/SkinnyHeader.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <skinny-header></skinny-header>
    <Main />
    <Footer />
  </div>
`;
