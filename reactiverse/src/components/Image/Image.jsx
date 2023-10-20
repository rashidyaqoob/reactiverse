function Image({ dataTestId, src, altText, width, height, extraClasses }) {
  return (
    <>
      <img
        data-testid={dataTestId}
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
