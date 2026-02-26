// how to edit this file:
// 1. add member data in the form of {id, name, role, image, socials} in the membersData array
// 2. make sure the image is added in the public/members folder and the path is correct in the data array

/** sample structure of member data:
 * {
 *   id: <integer/number>,
 *   name: "<name>",
 *   role: "<role>",
 *   image: "<path_to_image>",
 *   socials: { 
 *       linkedin: "<link>",  --> optional
 *       mail: "<email>",     --> optional
 *       twitter: "<link>"    --> optional
 *   },
 * }
 */


export default [
  {
    id: 1,
    name: "Dr. OP Verma",
    role: "Faculty Coordinator",
    image: "/Coordinators/c1.png",
    socials: { 
        linkedin: "https://departments.nitj.ac.in/dept/ice/Faculty/6430446638bff038a7807a2f", 
        mail: "vermaop@nitj.ac.in" 
    },
  },
  {
    id: 2,
    name: "Dr Sukwinder Singh",
    role: "Faculty Coordinator",
    image: "/Coordinators/c2.jpeg",
    socials: { 
        linkedin: "https://departments.nitj.ac.in/dept/ece/Faculty/6430446538bff038a78077c1", 
        mail: "sukwinders@nitj.ac.in" 
    },
  },
  {
    id: 3,
    name: "Dr. Manjeet Singh",
    role: "Faculty Coordinator",
    image: "/Coordinators/c3.jpeg",
    socials: { 
        linkedin: "https://departments.nitj.ac.in/dept/ece/Faculty/6430446d38bff038a78089fb", 
        mail: "singhm@nitj.ac.in" },
  }
];