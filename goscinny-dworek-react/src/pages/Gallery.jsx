import { useState } from "react";
import ImageView from "../components/ImageView";

const Gallery = (props) => {
  const { id, lang, images } = props;
  const [isVisible, setVisible] = useState(false);
  const [activeSection,setActiveSection] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  if (id === "rooms") {
    return (
      <div id={id}>
        <h3 className="centered">{lang.h3}</h3>
        {lang.h4.map((text, index) => {
          return (
            <Room
              text={text}
              images={images.min[index]}
              alt={lang.alt}
              key={index}
              ind={index}
              setImageIndex={setImageIndex}
              setVisible={setVisible}
              setActiveSection={setActiveSection}
            ></Room>
          );
        })}
        <ImageView
          isVisible={isVisible}
          setVisible={setVisible}
          index={imageIndex}
          setIndex={setImageIndex}
          images={images.max[activeSection]}
        ></ImageView>
      </div>
    );
  } else {
    return (
      <div className="gallery" id={id}>
        <h3>{lang.h3}</h3>
        {images.min.map((img, index) => {
          let name = "gallery-img";

          if (img.includes("top-oriented")) {
            name += " top-oriented";
          } else if (img.includes("wide")) {
            name += " wide";
          }

          return (
            <img
              src={img}
              className={name}
              alt={lang.alt}
              key={index}
              onClick={() => {
                setVisible(true);
                setImageIndex(index);
              }}
            ></img>
          );
        })}
        <ImageView
          isVisible={isVisible}
          setVisible={setVisible}
          index={imageIndex}
          setIndex={setImageIndex}
          images={images.max}
        ></ImageView>
      </div>
    );
  }
};

const Room = (props) => {
  const { text, images, alt, setVisible, setImageIndex, setActiveSection, ind } = props;

  return (
    <div className="gallery">
      <h4>{text}</h4>
      {images.map((img, index) => {
        let name = "gallery-img";

        if (img.includes("top-oriented")) {
          name += " top-oriented";
        } else if (img.includes("wide")) {
          name += " wide";
        }

        return (
          <img
            src={img}
            className={name}
            alt={alt}
            key={index}
            onClick={() => {
              setVisible(true);
              setImageIndex(index);
              setActiveSection(ind);
            }}
          ></img>
        );
      })}
    </div>
  );
};

export default Gallery;
