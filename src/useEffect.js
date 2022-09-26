import { useState, useEffect } from "react";

const useContador = (inicial) => {
  //hook useState
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  };
  return [contador, incrementar];
};

const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000); //suscripción
    return () => clearInterval(i); //logica de desuscripción
  }, [contador]);
  return <p>Intervalo</p>;
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
      <Interval contador={contador} />
    </div>
  );
};
export default App;
