import React from "react";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../../../components/PhotoForm";
import { addPhoto, updatePhoto } from "feature/Photo/photoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import guid from "guid";

function AddEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;
  const editPhoto = useSelector((state) =>
    state.photos.find((x) => x.id === photoId)
  );

  const initialValues = isAddMode
    ? {
        id: guid.raw(),
        title: "",
        categoryId: null,
        photo: "",
      }
    : editPhoto;

  const handleSubmit = (values) => {
    if (isAddMode) {
      const action = addPhoto(values);
      dispatch(action);
    } else {
      const action = updatePhoto(values);
      dispatch(action);
    }
    history.push("/photos");
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick new Photos now!" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEdit;
