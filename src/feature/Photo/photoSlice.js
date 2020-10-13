import {
  createSlice
} from "@reduxjs/toolkit";

const listInitPhoto =
  localStorage.getItem("data") === null ? [] : JSON.parse(localStorage.getItem("data"));

const photo = createSlice({
  name: "photos",
  initialState: listInitPhoto,
  reducers: {
    addPhoto: (state, action) => {
      const newPhoto = action.payload;
      state.push(newPhoto);
      localStorage.setItem('data', JSON.stringify(state));
    },
    removePhoto: (state, action) => {
      const removePhotoId = action.payload;
      console.log(state);
      state = state.filter((photo) => photo.id !== removePhotoId);
      localStorage.setItem('data', JSON.stringify(state));
      return state;
    },
    updatePhoto: (state, action) => {
      const updatePhotoId = action.payload;
      console.log(state);
      const photoIndex = state.findIndex(
        (photo) => photo.id === updatePhotoId.id
      );
      if (photoIndex >= 1) {
        state[photoIndex] = updatePhotoId;
        localStorage.setItem('data', JSON.stringify(state));
      }
    },
  },
});

const {
  reducer,
  actions
} = photo;
export const {
  addPhoto,
  removePhoto,
  updatePhoto
} = actions;
export default reducer;