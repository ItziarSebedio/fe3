import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Card from "./Card";

function App() {
  const [datos, setDatos] = useState({});
  const [showCard, setShowCard] = useState(false);
  const [showError, setShowError] = useState(false);

  const enviarDatos = (datos) => {
    setDatos(datos);
    setShowCard(true);
    setShowError(false);
    console.log(datos);
  };

  function borrarForm() {
    setDatos({});
    setShowCard(false);
    setShowError(false);
  }

  return (
    <div className="App">
      <h1>Ingresá tus datos:</h1>

      <Form
        onEnviarDatos={enviarDatos}
        setShowCard={setShowCard}
        setShowError={setShowError}
        showError={showError}
      />

      {showCard && <Card datos={datos} />}

      <button onClick={borrarForm}>Borrar datos</button>
    </div>
  );
}

export default App;
