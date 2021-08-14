const storage = firebase.storage();
const storageRef = firebase.storage().ref();
const filename = (props) => {
  return props.imgNombre;
};
const spaceRef = imagesRef.child(fileName);
const rootRef = spaceRef.root();
