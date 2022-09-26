import { useRef } from "react";

const App = () => {
  //hooks
  const ref = useRef();
  const inputRef = useRef();

  const click = () => {
    //func cambia contenido html
    ref.current.innerHTML = "hola";
  };
  const focus = () => {
    //func hace focus sobre input
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
      <div onClick={click} ref={ref}>
        lala
      </div>
    </div>
  );
};
export default App;
