import { useState } from "react";

function Form({ onEnviarDatos, setShowCard, setShowError, showError }) {
  const [nombre, setNombre] = useState("");
  const [palabra, setPalabra] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length >= 3 && !nombre.startsWith(" ") && palabra.length >= 6) {
      onEnviarDatos({ nombre, palabra });
      setNombre("");
      setPalabra("");
    } else {
      setShowError(true);
      setShowCard(false);
      setNombre("");
      setPalabra("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Palabra favorita"
          value={palabra}
          onChange={(e) => setPalabra(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Enviar datos</button>
      </form>

      {showError && (
        <p style={{ color: "red" }}>
          Por favor chequeá que la información sea correcta.
        </p>
      )}
    </div>
  );
}
export default Form;
