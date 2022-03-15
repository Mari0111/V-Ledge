import api from './api';
const baseURI =process.env.NEXT_PUBLIC_LEARNING_SITE_URL
const URI ={
  COURSES : `${baseURI}/vledge/courses`,
  COURSE_DETAILS : `${baseURI}/vledge/details`
}
export const mainServices = {
  courses: () => {
    return api.get(URI.COURSES);
  },
  courseDetails: (cid) => {
    return api.get(URI.COURSE_DETAILS);
  }
};