import "./App.css";

function App() {
  const message = process.env.REACT_APP_MESSAGE || "Default Message";
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello World!</h1>
      <p>Environment Variable Message: {message}</p>
    </div>
  );
}

export default App;
