import "../../index.css";

const card = (props: any) => {
  return (
    <div className="card">
      <div className="heading">
        <h3>{props.name}</h3>
        <div className="complete">
          <h3>{props.complete}% </h3>
          <p> complete</p>
        </div>
      </div>
      <div className="bodyCard">
        <div
          className="colomnCard"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="rowSales">
            <h4>Total Sales - {props.totalsales}</h4>
            <h4 style={{ marginTop: "-1rem" }}>
              Target Sales - {props.targetsales}
            </h4>
          </div>
          <button
            style={{
              height: "2rem",
              width: "4rem",
              marginTop: "1rem",
              border: "0px",
              borderRadius: "4px",
              backgroundColor: "rgba(179, 124, 21, 0.123)",
              color: "#eb9413",
            }}
          >
            {props.btntext}
          </button>
        </div>
      </div>
      <div className="light-grey">
        <div
          className="w3-green"
          style={{ height: "24px", width: "50%" }}
        ></div>
      </div>
    </div>
  );
};

export default card;
