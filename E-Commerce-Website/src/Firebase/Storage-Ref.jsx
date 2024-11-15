import { getStorage, ref } from "firebase/storage";

const storage = getStorage();

// Create a child reference
const imagesRef = ref(storage, 'Products');
// imagesRef now points to 'images'

// Child references can also take paths delimited by '/'
const spaceRef = ref(storage, 'Products/Cameras/1.jpg');
// spaceRef now points to "images/space.jpg"
// imagesRef still points to "images