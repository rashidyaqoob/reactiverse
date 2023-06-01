import useLocalStorage from "./Usecustom.jsx";
import './Usecustom.scss'

function StoreValue() {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <div class="use-custom-hook">
      <h1>Application of Custom hooks </h1>
      <input
        type="text"
        value={name}
        placeholder="Enter the name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>This custom hook uses the local storage that helps to store the data in the input field. e.g when we refresh the page the data still remains stored in the input field</p>
    </div>
  );
}

export default StoreValue;
