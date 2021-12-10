import "./index.css";
import { useState } from "react";

function App() {
  const [clients, setClients] = useState([]);

  const fetchToutClients = async () => {
    const res = await fetch("http://localhost:8080/getToutClients")
    const resp = await res.json()
    setClients(resp)
  }

  const fetchHomme = async () => {
    const res = await fetch("http://localhost:8080/Homme")
    const resp = await res.json()
    setClients(resp)
  }

  const fetchClientsOntariens = async () => {
    const res = await fetch("http://localhost:8080/getATout/clients/ontariens")
    const resp = await res.json()
    setClients(resp)
  }
  return (
    <div className="App">
      <table>
        <tr>
          <th id="bouton" onClick={fetchToutClients} >Afficher tout nos clients</th>
          <th></th>
          <th></th>
          <th id="bouton" onClick={fetchHomme}>Afficher tout les hommes</th>
          <th></th>
          <th></th>
          <th id="bouton" onClick={fetchClientsOntariens}>Afficher tout les maudits ontariens</th>
        </tr>
        <tr>
          <th>ID</th>
          <th>PRÉNOM</th>
          <th>NOM</th>
          <th>GENRE</th>
          <th>DATE DE NAISSANCE</th>
          <th>VILLE</th>
          <th>PROVINCE</th>
        </tr>
        {clients.length !== 0 ? (
          clients.map((client) => (
            <tr>
              <td>{client.id}</td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.gender}</td>
              <td>{client.birthDate}</td>
              <td>{client.city}</td>
              <td>{client.province}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7">Pas de clients</td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default App;
