import aramTournament from '../assets/images/aram-tournament.png';
import coachingPro from '../assets/images/coaching-pro.png';
import portfolio from '../assets/images/portfolio.png';

export const projects = [
  {
    id: 1,
    title: "2v2 ARAM Tournament",
    description: "Gaming tournament platform for League of Legends with registration system and prize pool management",
    image: aramTournament,
    technologies: ["React", "Firebase", "Material-UI"],
    liveUrl: "https://aram-tn.web.app/",
    features: [
      "Tournament registration",
      "Prize pool display",
      "Admin dashboard",
      "Real-time updates"
    ]
  },
  {
    id: 2,
    title: "Professional Coach Website",
    description: "Modern coaching platform with service booking and consultation management",
    image: coachingPro,
    technologies: ["React", "Netlify", "Styled-Components"],
    liveUrl: "https://coaching-pro.netlify.app/",
    features: [
      "Service listings",
      "Consultation booking",
      "Responsive design",
      "Modern UI/UX"
    ]
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing web development projects and skills",
    image: portfolio,
    technologies: ["React", "Netlify", "Styled-Components"],
    liveUrl: "https://yaeportfolio.netlify.app/",
    features: [
      "Project showcase",
      "Responsive design",
      "Dark/Light theme",
      "Modern animations"
    ]
  }
]; 