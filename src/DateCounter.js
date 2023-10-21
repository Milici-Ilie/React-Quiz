import { useReducer, useState } from "react";

function reducer(state, action) {
  //❗❗❗ the function is taking in the current state "state" and the actual action "action"//// ❗❗❗ NOTE that the REDUCER function gets acces to the initial "state" that takes acces to the const "useReducer" from bellow 👇 witch right now is set to "0" and also gets acces to the "action" that is connected to the "dispatch" 🔽 witch right now is set to "1" +++ so based on those 2 it will return a single result (the current "state" + the "action")=== meaning =[reducer, 0] in our case.
  console.log(state, action);

  if (action.type === "inc") return state + 1; // now, like i writted above, we calculated the "state" + "action" resulting = 1, meaning that every time when we press the button from + from our app will increase the number by 1 (one)
  if (action.type === "dec") return state - 1;
  if (action.type === "setCount") return action.payload;
}

function DateCounter() {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0); //❗❗❗this is the reducer, taking inside of his HOOK the reducer function "reducer"(or any name), and the initial state "0"👆// ❗ like the "useState" the "dispatch" ⬆ has the roll to update the state "count"⬆

  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" }); // this will decrease the value when we press the button "-"// this is the standard model for writing the logic using "useReducer"
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc" }); //❗ here we are calling our function and update the state "count" by sending value's to "dispatch that will update "count"
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
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
