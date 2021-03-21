const ImageView = (props) => {
  const { images, index, setIndex, isVisible, setVisible } = props;

  return (
    <div
      id="floatingImg"
      style={isVisible ? { display: "flex" } : { display: "none" }}
    >
      <button
        id="arrowleft"
        onClick={() => setIndex(index - 1)}
        style={index === 0 ? { display: "none" } : { display: "block" }}
      >
        &#5130;
      </button>
      <button
        id="arrowright"
        onClick={() => setIndex(index + 1)}
        style={
          index === images.length - 1
            ? { display: "none" }
            : { display: "block" }
        }
      >
        &#5125;
      </button>
      <img src={images[index]} id="floatsy" alt="" />
      <button id="closeFloat" onClick={() => setVisible(false)}>
        &times;
      </button>
    </div>
  );
};

export default ImageView;
