import './style.css';
import { liba } from '@trans-dep/liba';
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>${liba()}</h1>
`;
