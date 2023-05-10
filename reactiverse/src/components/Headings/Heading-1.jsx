import "./Heading-1.scss";

function Heading1({ heading1_text, extra_heading1_classes }) {
  return (
    <>
      <h1 className={extra_heading1_classes}>{heading1_text}</h1>
    </>
  );
}

export default Heading1;
