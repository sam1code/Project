import { useState } from "react";
import Orange from "./Components/card/Orange";
import Green from "./Components/card/Green";
import Red from "./Components/card/Red";

function App() {
  const [mainVisible, setmainVisible] = useState(false);
  const [FactoryA, setFactoryA] = useState(false);
  const [FactoryB, setFactoryB] = useState(false);
  const [FactoryC, setFactoryC] = useState(false);
  return (
    <div className="App">
      <div
        onClick={() => {
          mainVisible ? setmainVisible(false) : setmainVisible(true);
        }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Orange
          name="TATA STEEL"
          complete="50"
          totalsales="200correr"
          targetsales="400Correr"
          btntext="off track"
        />
      </div>
      {mainVisible && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "1rem",
          }}
        >
          <div
            style={{
              padding: "1rem",
            }}
            onClick={() => {
              FactoryA ? setFactoryA(false) : setFactoryA(true);
            }}
          >
            <Red
              name="Factory A"
              complete="20"
              totalsales="20correr"
              targetsales="100Correr"
              btntext="off track"
            />
          </div>

          <div
            style={{
              padding: "1rem",
            }}
            onClick={() => {
              FactoryB ? setFactoryB(false) : setFactoryB(true);
            }}
          >
            <Green
              name="Factory B"
              complete="75"
              totalsales="150correr"
              targetsales="200Correr"
              btntext="off track"
            />
          </div>

          <div
            style={{
              padding: "1rem",
            }}
            onClick={() => {
              FactoryC ? setFactoryC(false) : setFactoryC(true);
            }}
          >
            <Orange
              name="Factory C"
              complete="30"
              totalsales="30correr"
              targetsales="100Correr"
              btntext="off track"
            />
          </div>
        </div>
      )}
      {FactoryA && (
        <div style={{ display: "flex" }}>
          {" "}
          <div
            style={{
              padding: "1rem",
            }}
          >
            <Red
              name="Godown A"
              complete="50"
              totalsales="200correr"
              targetsales="400Correr"
              btntext="off track"
            />
          </div>
          <div
            style={{
              padding: "1rem",
            }}
          >
            <Red
              name="Godown B"
              complete="50"
              totalsales="200correr"
              targetsales="400Correr"
              btntext="off track"
            />
          </div>
        </div>
      )}

      {FactoryB && (
        <div style={{ display: "flex", marginLeft: "15vw" }}>
          {" "}
          <div
            style={{
              padding: "1rem",
            }}
          >
            <Red
              name="Godown A"
              complete="50"
              totalsales="200correr"
              targetsales="400Correr"
              btntext="off track"
            />
          </div>
          <div
            style={{
              padding: "1rem",
            }}
          >
            <Red
              name="Godown B"
              complete="50"
              totalsales="200correr"
              targetsales="400Correr"
              btntext="off track"
            />
          </div>
        </div>
      )}
      {FactoryC && (
        <div style={{ display: "flex", marginLeft: "35vw" }}>
          {" "}
          <div
            style={{
              padding: "1rem",
            }}
          >
            <Red
              name="Godown A"
              complete="50"
              totalsales="200correr"
              targetsales="400Correr"
              btntext="off track"
            />
          </div>
          <div
            style={{
              padding: "1rem",
            }}
          >
            <Red
              name="Godown B"
              complete="50"
              totalsales="200correr"
              targetsales="400Correr"
              btntext="off track"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
