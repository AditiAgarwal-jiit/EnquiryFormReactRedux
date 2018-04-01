import React from "react";
import { render } from "react-dom";
import { Main } from "./containers/Main";

/*const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);*/
const App = () => (
  <div>
    <Main />
  </div>
);

render(<App />, document.getElementById("root"));
