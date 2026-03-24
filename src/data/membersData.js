const members = [
  { id: 1, name: "Akshat Agrawal", team: "marketing", image: "/members/Akshat Agrawal.png", socials: { linkedin: "https://www.linkedin.com/in/akshat-agrawal-2134b538a/", instagram: "https://www.instagram.com/axdshat" }, year: 2025 },
  { id: 2, name: "Amrit Pal", team: "social", image: "/members/Amrit Pal.png", socials: { linkedin: "https://www.linkedin.com/in/amritpalnitj/", instagram: "" }, year: 2024 },
  { id: 3, name: "Ankit Kumar", team: "public relation", image: "/members/Ankit Kumar.png", socials: { linkedin: "https://www.linkedin.com/in/ankit-kumar-9568242a2/", instagram: "https://www.instagram.com/anki_tpatel2.0" }, year: 2025 },
  { id: 4, name: "Ayan khan", team: "marketing", image: "/members/Ayan khan.png", socials: { linkedin: "https://www.linkedin.com/in/ayan-khan-6b231b32b/", instagram: "" }, year: 2024 },
  { id: 5, name: "Gursaranjot Singh", team: "marketing", image: "/members/Gursaranjot Singh.png", socials: { linkedin: "https://www.linkedin.com/in/gursaranjot-singh-28bb3320b/", instagram: "" }, year: 2022 },
  { id: 6, name: "Harish Kumar", team: "public relation", image: "/members/Harish Kumar.png", socials: { linkedin: "https://www.linkedin.com/in/harish-kumar-31bab2311/", instagram: "https://www.instagram.com/_harish_429" }, year: 2024 },
  { id: 7, name: "Harshit Mishra", team: "public relation", image: "/members/Harshit Mishra.png", socials: { linkedin: "https://www.linkedin.com/in/harshit-mishra-246a57257/", instagram: "" }, year: 2022 },
  { id: 8, name: "Mohit Insan", team: "technical", image: "/members/Mohit Insan.png", socials: { linkedin: "https://www.linkedin.com/in/mohit-insan-829254314/", instagram: "https://www.instagram.com/mohit_049/" }, year: 2024 },
  { id: 9, name: "Nimay Saxena", team: "marketing", image: "/members/Nimay Saxena.png", socials: { linkedin: "", instagram: "https://www.instagram.com/_snimay._/" }, year: 2025 },
  { id: 10, name: "Nitin Kumar", team: "public relation", image: "/members/Nitin Kumar.png", socials: { linkedin: "https://www.linkedin.com/in/nitinkumarsvg/", instagram: "" }, year: 2023 },
  { id: 11, name: "Prabhsimran Singh", team: "technical", image: "/members/Prabhsimran Singh.png", socials: { linkedin: "", instagram: "" }, year: 2022 },
  { id: 12, name: "Prateek Kumar", team: "technical", image: "/members/Prateek kumar.png", socials: { linkedin: "", instagram: "" }, year: 2025 },
  { id: 13, name: "Prem Kumar Kardale", team: "social", image: "/members/Prem Kumar Kardale.png", socials: { linkedin: "", instagram: "" }, year: 2022 },
  { id: 14, name: "Purli Saikishore", team: "marketing", image: "/members/Purli Saikishore.png", socials: { linkedin: "https://www.linkedin.com/in/purlisaikishore/", instagram: "" }, year: 2023 },
  { id: 15, name: "Ramavath Babu", team: "technical", image: "/members/Ramavath Babu.png", socials: { linkedin: "https://www.linkedin.com/in/baburamavath/", instagram: "" }, year: 2023 },
  { id: 16, name: "Ravi", team: "social", image: "/members/Ravi.png", socials: { linkedin: "https://www.linkedin.com/in/ravi-khatawaliya-39a536318/", instagram: "" }, year: 2023 },
  { id: 17, name: "Rhythm Jain", team: "technical", image: "/members/Rhythm Jain.png", socials: { linkedin: "https://www.linkedin.com/in/rhythm-jain-duggarhh/", instagram: "" }, year: 2022 },
  { id: 18, name: "Sanjeevan Khanduri", team: "technical", image: "/members/Sanjeevan Khanduri.png", socials: { linkedin: "", instagram: "" }, year: 2025 },
  { id: 19, name: "Sujal Gupta", team: "social", image: "/members/Sujal Gupta.png", socials: { linkedin: "https://www.linkedin.com/in/sujal-gupta-4198b9368/" }, year: 2025 },
  { id: 20, name: "Tarun Chaudhary", team: "marketing", image: "/members/Tarun Chaudhary.png", socials: { linkedin: "https://www.linkedin.com/in/tarun-chaudhary-486208382/", instagram: "https://www.instagram.com/itz._not_tarun/" }, year: 2025 },
  { id: 21, name: "Yaswanth Kumar", team: "technical", image: "/members/Yaswanth Kumar.png", socials: { linkedin: "https://www.linkedin.com/in/vuppala-yaswanth-kumar-b987642a1/", instagram: "https://www.instagram.com/_yash_vu_/" }, year: 2023 },
  { id: 22, name: "Unnati PSK", team: "social", image: "/members/Unnati PSK.png", socials: { linkedin: "https://www.linkedin.com/in/unnati-khadatkar-563a3628b/", instagram: "" }, year: 2023 },
  { id: 23, name: "Arshpreet Singh", team: "public relation", image: "/members/Arshpreet singh.png", socials: { linkedin: "https://www.linkedin.com/in/arshpreet-singh-428b80265/" }, year: 2025 },
  { id: 24, name: "Tarush Gupta", team: "technical", image: "/members/Tarush Gupta.png", socials: { linkedin: "https://www.linkedin.com/in/tarush23-gupta/", instagram: "https://www.instagram.com/tarush._.gupta/" }, year: 2022 },

  { id: 31, name: "Pradeep Kumar Awasthi", team: "technical", image: "/members/Pradeep Kumar Awasthi.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pradeep-kumar-awasthi-9313a2280/", instagram: "https://www.instagram.com/p.awasthi_18/" }, year: 2024 },

  { id: 32, name: "Naveen Yadav", team: "social", image: "/members/Naveen Yadav.jpeg", socials: { linkedin: "https://www.linkedin.com/in/naveenkumar5595/", instagram: "" }, year: 2024 },

  { id: 33, name: "Aman Kumar", team: "technical", image: "/members/Aman Kumar.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aman-kumar-9914a3399/", instagram: "https://www.instagram.com/__amman.007_/" }, year: 2025 },

  { id: 34, name: "Charanjot", team: "technical", image: "/members/Charanjot.png", socials: { linkedin: "https://www.linkedin.com/in/charanjot-singh-402412310/", instagram: "https://www.instagram.com/charanjott27/" }, year: 2024 },

  { id: 35, name: "Ayushmaan Porwal", team: "technical", image: "/members/Ayushmaan Porwal.png", socials: { linkedin: "https://www.linkedin.com/in/ayushmaan-porwal-790930218/", instagram: "https://www.instagram.com/ayu_shmxxn/" }, year: 2025 },

  { id: 36, name: "Arnav Mehra", team: "technical", image: "/members/Arnav Mehra.png", socials: { linkedin: "https://www.linkedin.com/in/arnav-mehra-7013a0384/", instagram: "https://www.instagram.com/arnav64087/" }, year: 2025 },

  { id: 37, name: "Ishan Keshari", team: "technical", image: "/members/Ishan Keshari.png", socials: { linkedin: "https://www.linkedin.com/in/ishan-keshari-410266398/", instagram: "https://www.instagram.com/_jee_nahi_hua_yaar_/" }, year: 2025 },

  { id: 38, name: "Vyomesh Hanspal", team: "technical", image: "/members/Vyomesh Hanspal.png", socials: { linkedin: "https://www.linkedin.com/in/vyomesh-hanspal-4777a8382/", instagram: "https://www.instagram.com/vyomesh_b291/" }, year: 2025 }
];

const order = ["core","technical","marketing","social","public relation"];

const currYr = new Date().getFullYear();

const processedMembers = members
  .filter(m => {
    const diff = currYr - m.year;
    return diff !== 1 && diff <= 4;
  })
  .flatMap(m => {
    const diff = currYr - m.year;

    if (diff === 4)
      return [{ ...m, team: "core" }];

    if (diff === 3)
      return [
        m,
        { ...m, id: `${m.id}_core`, team: "core" }
      ];

    return [m];
  });

processedMembers.sort((a, b) => {
  const indexA = order.indexOf(a.team);
  const indexB = order.indexOf(b.team);

  const posA = indexA === -1 ? 999 : indexA;
  const posB = indexB === -1 ? 999 : indexB;

  return posA - posB;
});   

export const alumniData = members.filter(m => currYr - m.year >= 4);
export default processedMembers;