import {
  createSlice
} from '@reduxjs/toolkit';

const listInitPhoto = [{
  id: "7f97dd72-7d99-49fd-9426-1468fa080395",
  categoryId: 3,
  photo: "https://picsum.photos/id/1/300/300",
  title: "The Hunger Games: Mockingjay - Part 1"
}, {
  id: "60a11384-a354-40b2-acee-1084a88193cb",
  categoryId: 2,
  photo: "https://picsum.photos/id/2/300/300",
  title: "Sällskapsresan II - Snowroller"
}, {
  id: "58c24d9f-9a88-4cc7-9f58-cce09f028f59",
  categoryId: 3,
  photo: "https://picsum.photos/id/9/300/300",
  title: "Doomsday Prophecy"
}, {
  id: "5da41c3f-4f84-4f20-b683-ca5d85e5c3ac",
  categoryId: 2,
  photo: "https://picsum.photos/id/25/300/300",
  title: "Anna: 6-18 (Anna: Ot shesti do vosemnadtsati)"
}, {
  id: "e475aa92-289f-4187-9171-de5b50079915",
  categoryId: 5,
  photo: "https://picsum.photos/id/28/300/300",
  title: "Longtime Companion"
}];

const photo = createSlice({
  name: 'photos',
  initialState: listInitPhoto,
  reducers: {
    addPhoto: (state, action) => {
      const newPhoto = action.payload;
      state.push(newPhoto);
    },
    removePhoto: (state, action) => {
      const removePhotoId = action.payload;
      return state.filter(photo => photo.id !== removePhotoId);
    },
    updatePhoto: (state, action) => {
      const updatePhotoId = action.payload;
      const photoIndex = state.findIndex(photo => photo.id === updatePhotoId.id)

      if (photoIndex >= 1) {
        state[photoIndex] = updatePhotoId
      }
    }
  }
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