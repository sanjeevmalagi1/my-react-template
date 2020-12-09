import './index.css';

import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState("CLICKss ME");

    return <button className='p-5 bg-red-500' onClick={() => setState("CLICKED")}>{state}</button>;
}

render(<App />, document.getElementById("root"));