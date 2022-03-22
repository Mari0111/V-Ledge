import db from "../firebase";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";

export const mainServices = {
  courses: async () => {
    const courses = await getDocs(collection(db, "courses"));
    const data = [];
    courses.forEach((doc) => {
    
      var temp = doc.data();
      temp = { ...temp, id: doc.id };
   
      data.push(temp);
    });
  
    return data;
  },
  courseDetails: async (cid) => {
    const docRef = doc(db, "courses", cid);
    const docSnap = await getDoc(docRef);
  

    if (docSnap.exists()) {
    
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case

      return null;
    }
  },
  getLessonsById: async (id) => {
    const docRef = doc(db, "courses", id);
    const courses = await getDocs(collection(docRef,"lessons"));

    const data = [];
    courses.forEach((doc) => {
    
      var temp = doc.data();
      temp = { ...temp, id: doc.id };
   
      data.push(temp);
    });
  
    return data;
  },
};
