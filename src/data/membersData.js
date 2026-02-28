const members = [
  { id: 1, name: "Akshat Agrawal", role: "member", team: "marketing", image: "/members/Akshat Agrawal.png", socials: { linkedin: "", instagram: "" }, year: 2025 },
  { id: 2, name: "Amrit Pal", role: "Gen Alpha Social Media Lead", team: "social", image: "/members/Amrit Pal.png", socials: { linkedin: "https://www.linkedin.com/in/amritpalnitj/", instagram: "https://www.instagram.com/" }, year: 2024 },
  { id: 3, name: "Ankit Kumar", role: "member", team: "Public Relation", image: "/members/Ankit Kumar.png", socials: { linkedin: "", instagram: "" }, year: 2025 },
  { id: 4, name: "Ayan khan", role: "Gen Alpha Marketing Lead", team: "Marketing", image: "/members/Ayan khan.png", socials: { linkedin: "https://www.linkedin.com/in/ayan-khan-6b231b32b/", instagram: "https://www.instagram.com/" }, year: 2024 },
  { id: 6, name: "Harish Kumar", role: "member", team: "Public Relation", image: "/members/Harish Kumar.png", socials: { linkedin: "", instagram: "https://www.instagram.com/" }, year: 2024 },
  { id: 7, name: "Harshit Mishra", role: "PR Head", team: "core", image: "/members/Harshit Mishra.png", socials: { linkedin: "https://www.linkedin.com/in/harshit-mishra-246a57257/", instagram: "https://www.instagram.com/" }, year: 2021 },
  { id: 8, name: "Mohit Insan", role: "Gen Alpha Technical Lead", team: "technical", image: "/members/Mohit Insan.png", socials: { linkedin: "", instagram: "https://www.instagram.com/" }, year: 2024 },
  { id: 9, name: "Nimay Saxena", role: "member", team: "Marketing", image: "/members/Nimay Saxena.png", socials: { linkedin: "", instagram: "https://www.instagram.com/" }, year: 2024 },
  { id: 10, name: "Nitin Kumar", role: "PR Head", team: "Public Relation", image: "/members/Nitin Kumar.png", socials: { linkedin: "https://www.linkedin.com/in/nitinkumarsvg/?skipRedirect=true", instagram: "https://www.instagram.com/" }, year: 2023 },
  { id: 11, name: "Prabhsimran Singh", role: "Technical HEAD", team: "core", image: "/members/Prabhsimran Singh.png", socials: { linkedin: "", instagram: "https://www.instagram.com/" }, year: 2021 },
  { id: 12, name: "Prateek Kumar", role: "member", team: "technical", image: "/members/Prateek kumar.png", socials: { linkedin: "", instagram: "https://www.instagram.com/" }, year: 2025 },
  { id: 13, name: "Prem Kumar Kardale", role: "member", team: "social", image: "/members/Prem Kumar Kardale.png", socials: { linkedin: "", instagram: "https://www.instagram.com/" }, year: 2021 },
  { id: 14, name: "Purli Saikishore", role: "Treasury Head", team: "marketing", image: "/members/Purli Saikishore.png", socials: { linkedin: "https://www.linkedin.com/in/purlisaikishore/", instagram: "https://www.instagram.com/" }, year: 2023 },
  { id: 5, name: "Gursaranjot Singh", role: "Technical HEAD", team: "core", image: "/members/Gursaranjot Singh.png", socials: { linkedin: "https://www.linkedin.com/in/gursaranjot-singh-28bb3320b/", instagram: "https://www.instagram.com/" }, year: 2021 },
  { id: 15, name: "Ramavath Babu", role: "member", team: "technical", image: "/members/Ramavath Babu.png", socials: { linkedin: "https://www.linkedin.com/in/baburamavath/", instagram: "https://www.instagram.com/" }, year: 2023 },
  { id: 16, name: "Ravi", role: "Sponser Lead", team: "social", image: "/members/Ravi.png", socials: { linkedin: "https://www.linkedin.com/in/ravi-khatawaliya-39a536318/", instagram: "https://www.instagram.com/" }, year: 2023 },
  { id: 17, name: "Rhythm Jain", role: "HEAD", team: "core", image: " /members/Rhythm Jain.png ", socials: { linkedin: " https://www.linkedin.com/in/rhythm-jain-duggarhh/", instagram: " https://www.instagram.com/" }, year: 2021 },
  { id: 18, name: "Sanjeevan Khanduri", role: "member", team: "technical", image: "/members/Sanjeevan Khanduri.png", socials: { linkedin: "", instagram: "https://www.instagram.com/" }, year: 2025 },
  { id: 19, name: "Sujal Gupta", role: "member", team: "social", image: "/members/Sujal Gupta.png", socials: { linkedin: "", instagram: "https://www.instagram.com/" }, year: 2025 },
  { id: 20, name: "Tarun Chaudhary", role: "member", team: "marketing", image: "/members/Tarun Chaudhary.png", socials: { linkedin: "", instagram: "https://www.instagram.com/" }, year: 2025 },
  { id: 21, name: "Yaswanth Kumar", role: "Social Media Head", team: "technical", image: "/members/Yaswanth Kumar.png", socials: { linkedin: "", instagram: "https://www.instagram.com/" }, year: 2023 },
  { id: 22, name: "Unnati PSK", role: "Sponser Lead", team: "social", image: "/members/Unnati PSK.png", socials: { linkedin: "https://www.linkedin.com/in/unnati-khadatkar-563a3628b/", instagram: "https://www.instagram.com/" }, year: 2023 },
  { id: 23, name: "Arshpreet Singh", role: "member", team: "Public Relation", image: "/members/Arshpreet singh.png", socials: { linkedin: "https://www.linkedin.com/in/pradeep-kumar-awasthi-9313a2280/", instagram: "https://www.instagram.com/" }, year: 2024 },
  { id: 24, name: "Tarush Gupta", role: "Website & techinal Handling", team: "core", image: "/members/Tarush Gupta.png", socials: { linkedin: "https://www.linkedin.com/in/tarush23-gupta/", instagram: "https://www.instagram.com/" }, year: 2021 },
  { id: 25, name: "Ashmeet Kaur", role: "member", team: "social", image: "/members/Ashmeet Kaur.png", socials: { linkedin: "https://www.linkedin.com/in/pradeep-kumar-awasthi-9313a2280/", instagram: "https://www.instagram.com/" }, year: 2024 },
  { id: 26, name: "Sachin Singh Rawat", role: "Purchase head", team: "Public Relation", image: "/members/Sachin Singh Rawat.png", socials: { linkedin: "https://www.linkedin.com/in/pradeep-kumar-awasthi-9313a2280/", instagram: "https://www.instagram.com/" }, year: 2024 },
  { id: 27, name: "Yashika", role: "member", team: "technical", image: "/members/Yashika.png", socials: { linkedin: "https://www.linkedin.com/in/pradeep-kumar-awasthi-9313a2280/", instagram: "https://www.instagram.com/" }, year: 2023 },
  { id: 28, name: "Simran Rawat", role: "member", team: "social", image: "/members/Simran Rawat.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pradeep-kumar-awasthi-9313a2280/", instagram: "https://www.instagram.com/" }, year: 2025 },
  { id: 29, name: "Bhavya Issrani", role: "member", team: "social", image: "/members/Bhavya Issarani.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pradeep-kumar-awasthi-9313a2280/", instagram: "https://www.instagram.com/" }, year: 2025 },
  { id: 30, name: "Pratham Namdev", role: "member", team: "social", image: "/members/Pratham Namdev.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pradeep-kumar-awasthi-9313a2280/", instagram: "https://www.instagram.com/" }, year: 2024 },
  { id: 31, name: "Pradeep Kumar Awasthi", role: "Gen Alpha Technical Lead", team: "technical", image: "/members/Pradeep Kumar Awasthi.jpeg", socials: { linkedin: "https://www.linkedin.com/in/pradeep-kumar-awasthi-9313a2280/", instagram: "https://www.instagram.com/p.awasthi_18/" }, year: 2024 },
  { id: 32, name: "Naveen Yadav", role: "Gen Alpha Social Media Lead", team: "social", image: "/members/Naveen Yadav.jpeg", socials: { linkedin: "https://www.linkedin.com/in/naveenkumar5595/", instagram: "https://www.instagram.com/" }, year: 2024 },
  { id: 33, name: "Aman Kumar", role: "member", team: "technical", image: "/members/Aman Kumar.jpeg", socials: { linkedin: "https://www.linkedin.com/in/naveenkumar5595/", instagram: "https://www.instagram.com/" }, year: 2025 },
  { id: 34, name: "Akash Silapara Setty", role: "member", team: "core", image: "/members/Akash.jpeg", socials: { linkedin: "https://www.linkedin.com/in/akash-silapara-setty-82a7b7279?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/akash_.setty?igsh=N256OTFmZmwycTg=" }, year: 2021 },

];

// Priority ordering: Core -> Technical -> Social -> Marketing
// Members with year < 2022 are treated as Core for prioritization
const order = ["core", "technical", "social", "marketing"];

export const priorityMembers = members.slice().sort((a, b) => {
  const ta = (a.team || "").toString().toLowerCase().trim();
  const tb = (b.team || "").toString().toLowerCase().trim();
  const aKey = a.year && a.year < 2022 ? "core" : ta;
  const bKey = b.year && b.year < 2022 ? "core" : tb;
  const ai = order.indexOf(aKey) === -1 ? order.length : order.indexOf(aKey);
  const bi = order.indexOf(bKey) === -1 ? order.length : order.indexOf(bKey);
  if (ai !== bi) return ai - bi;
  return a.id - b.id;
});

export default members;
