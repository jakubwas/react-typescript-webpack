import "./styles/styles.css";
import IMAGE from "./assets/webpack-logo.png";
import LOGO from "./assets/webpack-logo.svg";

const App = () => {
  return (
    <>
      <h1>
        React + TypeScript + Webpack - running in {process.env.NODE_ENV},{" "}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="Webpack Image PNG" width="200px" />
      <img src={LOGO} alt="Webpack Image SVG" width="200px" />
    </>
  );
};

export default App;
