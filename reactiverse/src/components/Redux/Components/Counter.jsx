import React from "react";
import { useDispatch, connect, useSelector } from "react-redux";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector(state =>  state.counter);
//   return (
//     <div>
//       <p className="counter_title">Counter: {counter}</p>
//       <button className="button" onClick={() => dispatch({ type: "INCREMENT" })}>
//         Increment
//       </button>
//       <button className="button" onClick={() => dispatch({ type: "DECREMENT" })}>
//         Decrement
//       </button>
//     </div>
//   );
// };


const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <p className="counter_title">Counter: {counter}</p>
      <button className="button" onClick={increment}>
        Increment
      </button>
      <button className="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter 
  //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

const mapDispatchToProps = (dispatch) => (
{
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" })
});

// export default Counter;
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

