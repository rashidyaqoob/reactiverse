import { useState } from "react";
import { ChartPie } from "./ChartPie";

function PollForm() {
  const [check, setCheck] = useState();
  const [fruits, setFruits] = useState([]);
  const onOptionChange = (e) => {
    setCheck(e.target.value);
  };
  const handleFormResults = (e) => {
    e.preventDefault();
    setFruits([...fruits, check]);
  };
  const apples = fruits.filter((item) => {
    return item === "apples";
  });
  const oranges = fruits.filter((item) => {
    return item === "oranges";
  });
  const mangoes = fruits.filter((item) => {
    return item === "mangoes";
  });
  console.log(mangoes.length);
  console.log(fruits);

  return (
    <>
      <h6>Which of the category do you like ?</h6>
      <form onSubmit={handleFormResults}>
        <input
          onChange={onOptionChange}
          id="apples"
          type="radio"
          name="fruits"
          //   checked={check === "checked"}
          value="apples"
        ></input>
        <label htmlFor="apples">Apples</label>
        <br></br>
        <input
          onChange={onOptionChange}
          id="oranges"
          type="radio"
          name="fruits"
          value="oranges"
        ></input>
        <label htmlFor="oranges">Oranges</label>
        <br></br>
        <input
          onChange={onOptionChange}
          id="Mangoes"
          type="radio"
          name="fruits"
          value="mangoes"
        ></input>
        <label htmlFor="Mangoes">Mangoes</label>
        <br></br>
        <input type="submit" value="Submit your vote"></input>
      </form>
      {check ? (
        <ChartPie
          applesLength={apples.length}
          orangesLength={oranges.length}
          mangoesLength={mangoes.length}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default PollForm;
