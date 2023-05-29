import useLocalStorage from "./Usecustom.jsx";

function StoreValue() {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <>
      <h1>Application of Custom hooks </h1>
      <input
        type="text"
        value={name}
        placeholder="Enter the name"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default StoreValue;
