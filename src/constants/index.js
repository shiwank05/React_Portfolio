import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import achievement1 from "../assets/achievement/achievement1.jpg";
import achievement2 from "../assets/achievement/achievement2.jpg";
import achievement3 from "../assets/achievement/achievement3.jpg";
import achievement4 from "../assets/achievement/achievement4.jpg";
import achievement5 from "../assets/achievement/achievement5.jpg";
import achievement6 from "../assets/achievement/achievement6.jpg";

export const HERO_CONTENT = `I am a passionate Computer Science and Engineering student with a keen interest in technology and innovation. I actively work on projects and explore new ideas, continuously learning and building impactful solutions in the ever-evolving tech world.`;

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology",
    duration: "August 2023 - Present",
    description:
      "Currently pursuing my B.Tech in Computer Science and Engineering. Gaining a strong foundation in core computer science concepts while exploring areas like coding, app development, web development, and machine learning. Living away from home has also given me the opportunity to build new friendships and experiences.",
  },
  {
    degree: "12th Science",
    institution: "St. Paul's High School,CBSE",
    duration: "June 2021 - May 2023",
    description:
      "Studied Physics, Chemistry, Mathematics, and Physical Education. Developed a growing interest in programming, enjoyed memorable trips with friends, and cherished the final moments of school life.",
  },
  {
    degree: "Primary School",
    institution: "St. Karen's High School,CBSE",
    duration: "April 2011 - May 2021",
    description:
      "Gained a solid foundation across all subjects while growing from a curious child into a motivated young adult. Embraced a wide range of activities, including quizzes, Taekwondo, and other extracurriculars, which enriched my learning experience and personal development.",
  },
]; 

export const PROJECTS = [

  {
    title: "Car Rental Management System",
    image: project1,
    description:
      "The Car Rental Management System automates customer registration, vehicle bookings, and payments, ensuring a seamless and efficient workflow for vehicle owners and rental agencies. It features a user-friendly interface for easy navigation and management while securely handling vehicle details, rental records, and customer data.",
    technologies: ["Java Swing", "Apache-NETBEANS","Sqlite"],
  },
  {
    title: "Price Prediction Model",
    image: project2,
    description:
      "I developed a machine learning model to predict property prices in Bengaluru's real estate market. Using Python, Flask, and Scikit-learn, it analyzes factors like location, size, and amenities to deliver accurate predictions. The project includes a web interface built with HTML, CSS, and JavaScript, demonstrating my ability to integrate machine learning with user-friendly applications.",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Python Flask", "HTML", "CSS", "Javascript"],
  },
  
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind Css", "React",],
  },
];

export const ACHIEVEMENTS = [
  {
      title: 'AICTE Android Developer Virtual Internship',
      description: 'Completed a transformative 10-week Android Developer Virtual Internship, supported by Google for Developers (April-June 2024), through EduSkills Foundation and AICTE.',
      image: achievement1,
  },
  {
      title: 'Tech Nova Hackathon',
      description: 'Participated in TechNova: Igniting Brilliance (Season 1) hackathon, organized by Enterprise System Solution Private Limited.',
      image: achievement2,
  },
  {
      title: 'Ultra 8.0 Hackathon',
      description: 'Participated in Ultron 8.0 -Hackvengers, a 24-hour hackathon organized by SRM Institute of Science and Technology.',
      image: achievement3,
  },
  {
      title: 'Techknow 2023-2024',
      description: 'Received a certificate of appreciation for demonstrating the Arduino Based Alarm during Techknow 2023-2024. Organized by the Department of Physics and Nanotechnology.',
      image: achievement4,
  },
  {
      title: 'Certified in Cybersecurity Fundamentals',
      description: 'Successfully completed a 40-hour course in Cybersecurity for Beginners, awarded by Tata Communications and Microsoft.',
      image: achievement5,
  },
  {
      title: 'ISRO Course on AIML Geospatial Data Analysis',
      description: 'Successfully completed an online course on AI and Machine Learning for Geospatial Data Analysis, organized by IIRS-ISRO, Dehradun.',
      image: achievement6,
  }
];