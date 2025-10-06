import './style.css'
import './Ejercicios/01-variables'
import './Ejercicios/02-template-string'
import './Ejercicios/03-object-literal'
import './Ejercicios/04-arrays'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello Vite!</h1>  
  </div>
`;

