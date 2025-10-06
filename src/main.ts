import './style.css'
import './Ejercicios/01-variables'
import './Ejercicios/02-template-string'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello Vite!</h1>  
  </div>
`;