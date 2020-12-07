import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState("CLICKss ME");

    return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

render(<App />, document.getElementById("root"));