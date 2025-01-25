import './style.css';
import './components/layout/SkinnyHeader.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <skinny-header></skinny-header>
    <main></main>
    <skinny-footer></skinny-footer>
  </div>
`;
