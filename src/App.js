import { useState, useEffect } from "react";

const useContador = (inicial) => {
  //hook useState
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  };
  return [contador, incrementar];
};

const App = () => {
  //custom hook
  const [contador, incrementar] = useContador(0);
  //hook useEffect
  useEffect(() => {
    document.title = contador;
  }, [contador]);
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};
export default App;
