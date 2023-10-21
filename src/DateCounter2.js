import { useReducer, useState } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step }; //here we adapt the "dec" also to the line "setStep" to connect their value
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      // return { count: 0, step: 1 };
      return { initialState }; //here we summoned the default values for the reset function.
    default:
      throw new Error("Unknown action"); //this is how we implement the functionality of "useReducer", automatically logic
  } // also NOTE that here we create all the functions for every step, the "+" button, the "-" one, etc. Here we create the "fnctions" and sent them in our code
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState); //here we replaced the "count" with "state" and the value "0" with "initialState" because we can add an entire object with multiple values as a value not just a single value like (0)
  const { count, step } = state;

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
