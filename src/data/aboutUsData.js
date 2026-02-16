import { Plane, Crosshair, Wind, Rocket } from "lucide-react";

// How to add data for a new event?
// 1. Add a new object to the array below with the following properties:
//    - id: A unique identifier for the event (e.g., 4, 5, etc.)
//    - title: The name of the event (e.g., "New Event Title")
//    - subtitle: A brief description or tagline for the event (e.g., "Event Subtitle")
//    - desc: A detailed description of the event (e.g., "This event focuses on...")
//    - images: An array of image paths related to the event (e.g., ["/events/newEvent/1.jpg", "/events/newEvent/2.jpg"])
//          #NOTE: this path is relative to the public folder.
//    - icon: An icon from lucide-react that represents the event (e.g., Plane, Crosshair, Wind, Rocket)


export default [
    {
      id: 0,
      title: "High-Speed Drone Racing",
      subtitle: "FPV Campus Circuit",
      desc: "Pushing the limits of agility and speed. Our pilots navigate complex obstacle courses in high-octane FPV drone races, testing both reflexes and custom builds.",
      images: ["/events/racing/1.jpg", "/events/racing/2.jpg", "/events/racing/3.jpeg", "/events/racing/4.jpeg"],
      icon: Crosshair, // Crosshair is a lucide-react icon. so if u want to use something else. make sure u add the import
    },
    {
      id: 1,
      title: "Swayaan Initiative",
      subtitle: "Govt. Technical Representation",
      desc: "Proudly representing our institution at the government level. We showcase our autonomous flight research and aerodynamic models on a national stage.",
      images: ["/events/swayaan/1.jpeg", "/events/swayaan/2.jpeg", "/events/swayaan/3.jpeg"],
      icon: Plane,
    },
    {
      id: 2,
      title: "Aerodynamics Workshops",
      subtitle: "Design, Build, Fly",
      desc: "Hands-on sessions where members design, construct, and test fixed-wing aircraft and multicopters from scratch, turning theory into flight.",
      images: ["/events/workshop/1.jpeg", "/events/workshop/2.jpeg", "/events/workshop/3.jpeg"],
      icon: Wind,
    },
    {
      id: 3,
      title: "Team Agastya",
      subtitle: "The Engineers",
      desc: "Meet the brilliant minds behind the machines. A collaborative team of designers, engineers, and pilots dedicated to conquering the skies.",
      images: ["/events/team/1.jpeg", "/events/team/2.jpeg", "/events/team/3.jpeg"],
      icon: Rocket,
    },
  ];