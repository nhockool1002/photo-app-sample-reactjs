import React from "react";
import Banner from "../../../../components/Banner";
import { Link, useHistory } from "react-router-dom";
import { Button, Container } from "reactstrap";
import { useSelector } from "react-redux";
import PhotoList from "feature/Photo/components/PhotoList";
import { removePhoto } from "feature/Photo/photoSlice";
import { useDispatch } from "react-redux";

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePhotoEditClick = (photo) => {
    history.push(`/photos/${photo.id}`);
  };
  const handlePhotoRemoveClick = (photo) => {
    const action = removePhoto(photo.id);
    dispatch(action);
  };
  return (
    <div className="photo-main">
      <Banner
        title="Your awesome photos"
        backgroundUrl="https://picsum.photos/1900/800"
      />

      <Container className="text-center">
        <Button color="link">
          <Link to="/photos/add">Add New Photo</Link>
        </Button>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
