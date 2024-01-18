import { useState } from "react";
import PropTypes from "prop-types";
const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleButtonAdd = () => {
    setCounter(counter + 1);
  };
  const handleButtonSubstract = () => {
    setCounter(counter - 1);
  };
  const handleButtonReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleButtonAdd}>+1</button>
      <button onClick={handleButtonSubstract}>-1</button>
      <button aria-label="btn-reset" onClick={handleButtonReset}>
        RESET
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

// CounterApp.defaultProps = {
//   title: " No hay título",
//   subTitle: "No hay subtítulo",
// };

export default CounterApp;
