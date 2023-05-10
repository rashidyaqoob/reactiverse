function Image({ src, altText, width, height, extraClasses }) {
  return (
    <>
      <img
        src={src}
        alt={altText}
        width={width}
        height={height}
        className={extraClasses}
      ></img>
    </>
  );
}
export default Image;
