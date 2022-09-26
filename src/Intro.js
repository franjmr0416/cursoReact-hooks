const MiComponente = ({ miProp }) => {
  return <div>Nombre: {miProp}</div>;
};

const Intro = () => {
  return <MiComponente miProp={"lalala"} />;
};

export default Intro;
