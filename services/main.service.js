import db from "../firebase";
import api from "./api";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";

const baseURI = process.env.NEXT_PUBLIC_LEARNING_SITE_URL;
const URI = {
  COURSES: `/courses`,
  COURSE_DETAILS: `/courses/Bk4j9xWN5bsZs3ESWBD3`,
};
export const mainServices = {
  courses: async () => {
    const courses = await getDocs(collection(db, "courses"));
    const data = [];
    courses.forEach((doc) => {
      console.log("doc", doc.id);
      var temp = doc.data();
      temp = {...temp,  id: doc.id}
      console.log("temp",temp)
      data.push(temp);
    });
    console.log("test", data);
    return data;
  },
  courseDetails: async (cid) => {
    const docRef = doc(db, "courses", cid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return null
      

      
    }
    
  },
};
