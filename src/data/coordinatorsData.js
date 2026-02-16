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
    role: "Coordinator",
    image: "/Coordinators/c1.png",
    socials: { 
        linkedin: "https://www.linkedin.com/in/dr-om-prakash-verma-800477139/?originalSubdomain=in", 
        mail: "vermaop@nitj.ac.in" 
    },
  },
  {
    id: 2,
    name: "Dr Sukwinder Singh",
    role: "Coordinator",
    image: "/Coordinators/c2.jpeg",
    socials: { 
        linkedin: "https://www.linkedin.com/in/sukwinder-singh/?originalSubdomain=in", 
        mail: "sukwinders@nitj.ac.in" 
    },
  },
  {
    id: 3,
    name: "Dr. Manjeet Singh",
    role: "Coordinator",
    image: "/Coordinators/c3.jpeg",
    socials: { 
        linkedin: "https://www.linkedin.com/in/manjeet-singh-121233a0/?originalSubdomain=in", 
        mail: "singhm@nitj.ac.in" },
  }
];