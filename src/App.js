import { useState } from "react";
//reglas de los hooks:
//1. No se llaman en loops, condiciones ni while ni nada
//siempre en el nivel mas alto de la funcion
//2. Solo se llaman en 2 partes:
//-Componentes de react
//-Custom hooks (cuando creamos un custom hook use<Nombre>)
const App = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      Contador: {contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};
export default App;
