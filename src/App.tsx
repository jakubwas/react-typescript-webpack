import "./styles/styles.css";

const App = () => {
  return (
    <h1>
      React + TypeScript + Webpack - running in {process.env.NODE_ENV},{" "}
      {process.env.name}
    </h1>
  );
};

export default App;
