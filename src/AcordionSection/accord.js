import "./accord.css";
import { useState } from "react";
function Accord() {
  const [arrow, setarrow] = useState(false);
  const [arrow1, setarrow1] = useState(false);
  const [arrow2, setarrow2] = useState(false);
  function up() {
    setarrow(!arrow);
  }
  function up1() {
    setarrow1(!arrow1);
  }
  function up2() {
    setarrow2(!arrow2);
  }
  return (
    <div className="acBox">
      <h2>წესები და პირობები</h2>
      <button onClick={up}>
        როდის იწყება და რა ფორმატით გაიმართება აქცია
        {arrow && <i className="arrow down"></i>}
        {!arrow && <i className="arrow up"></i>}
      </button>
      {arrow && <p>აქცია იწყება...</p>}

      <button onClick={up1}>
        როგორ მივიღო აქციაში მონაწილეობა?
        {arrow1 && <i className="arrow down"></i>}
        {!arrow1 && <i className="arrow up"></i>}
      </button>
      {arrow1 && <p>მონაწილეობის მიღება შესაძლებელია...</p>}

      <button onClick={up2}>
          სხვადასვა
          {arrow2 && <i className="arrow down"></i>}
          {!arrow2 && <i className="arrow up"></i>}
      </button>
      {arrow2 && <p>სხვადასვა...</p>}

    </div>
  );
}
export default Accord;
