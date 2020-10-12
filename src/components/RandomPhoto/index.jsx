import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: "",
  imgUrl: "",
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

function RandomPhoto(props) {
  const { name, imgUrl, onImageUrlChange, onRandomButtonBlur } = props;

  const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
  };

  const handleRandomphotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomphotoClick}
        >
          Random Photo
        </Button>
      </div>

      <div className="random-photo__photo">
        {imgUrl && (
          <img
            src={imgUrl}
            alt="Oops ... Image not found please re-click"
            onError={handleRandomphotoClick}
          />
        )}
      </div>
    </div>
  );
}

export default RandomPhoto;
