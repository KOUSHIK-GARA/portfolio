/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Koushik Gara",
  title: "Hi, I'm Koushik",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and  applications with JavaScript/ Angular /Java and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12D20rD_Ir559Smv9VhaxW_a9Yr9idWfm/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KOUSHIK-GARA",
  linkedin: "https://www.linkedin.com/in/koushik-gara-159ab3260/",
  gmail: "koushikgara.dev@gmail.com",
  instagram:"https://www.instagram.com/__koushik__2806/",
  twitter:"https://x.com/gara_koushik",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full stack web development",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "Html",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "Bootstrap",
    //   fontAwesomeClassname: "fab fa-bootstrap"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular",
    },
    // {
    //   skillName: "React",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "Nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    //},
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "Mongo DB",
      fontAwesomeClassname: "fas fa-database",
    },

    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Narayana Junior College",
      logo: require("./assets/images/narayana_logo.jpeg"),
      subHeader: "Intermediate - Higher Secondary Education ",
      duration: "May 2017 - May 2019",
    },
    {
      schoolName:
        "Birla Institute of Technology & Science Pilani Hyderabad Campus",
      logo: require("./assets/images/bitsLogo.png"),
      subHeader:
        "Bachelor of Engineering in Electrical and Electronics Engineering",
      duration: "August 2019 - May 2023",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Biz2X/Biz2Credit",
      companylogo: require("./assets/images/biz2x_logo.webp"),
      date: "June 2024 – Present",
      desc: "",
      descBullets: ["Bank Statement Parser", "Letter Configurator", "Chatbot"],
    },
    {
      role: "Assoc. Software Eng.",
      company: "Biz2X/Biz2Credit",
      companylogo: require("./assets/images/biz2x_logo.webp"),
      date: "July 2023 – June 2024",
      desc: "",
      descBullets: [
        "Rule Engine UI",
        "Rule Engine Integration",
        "Parser Configurations",
      ],
    },
    {
      role: "Full Stack Intern",
      company: "Biz2X/Biz2Credit",
      companylogo: require("./assets/images/biz2x_logo.webp"),
      date: "July 2022 – Jan 2023",
      desc: ``,
      descBullets: ["Microservices", "Meta Service", "Rule Engine Service"],
    },
    {
      role: "Software Intern",
      company: "Xarvis Systems",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "June 2021 – Aug 2021",
      desc: "",
      descBullets: [
        "User Management - UI",
        "User Authentication and Authorization - UI",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "xTech Hackathon",
      subtitle:"Winners (2025)",
      image: require("./assets/images/companylogo.png"),
      imageAlt: "Biz2x Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1bd9MRYy5WWNfdNRP4UJrruHsFQOPIXb0/view?usp=sharing",
        },
      ],
    },
    {
      title: "Functional Award",
      subtitle: "NOV 2024",
      image: require("./assets/images/companylogo.png"),
      imageAlt: "Biz2x",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13iGLt1BCxFpQV1AxGG0gimazeyg3iMt9/view?usp=sharing"
        },
      ],
    },
   
    {
      title: "Functional Award",
      subtitle: "APRIL 2024",
      image: require("./assets/images/companylogo.png"),
      imageAlt: "Biz2x",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1nIA1AMArqjFVhH6wW-1P3OppFp74QTg6/view?usp=sharing",
        },
      ],
    },
    {
      title: "Functional Award",
      subtitle: "DEC 2023",
      image: require("./assets/images/companylogo.png"),
      imageAlt: "Biz2x",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1KtnDZ1EbsxIMpDrvXn9CL2GjH1DqKaK5/view?usp=sharing",
        },
      ],
    },
    {
      title: "xTech Hackathon",
      subtitle:"Runners (2023)",
      image: require("./assets/images/companylogo.png"),
      imageAlt: "Biz2x Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1bd9MRYy5WWNfdNRP4UJrruHsFQOPIXb0/view?usp=sharing",
        },
      ],
    },

    {
      title: "Student Expert",
      subtitle: "Postman API Fundamentals",
      image: require("./assets/images/postman-icon.png"),
      imageAlt: "Postman",
      footerLink: [{ name: "Certification", url: "" }],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Let's Connect!",
  subtitle: `Have a project in mind? Want to collaborate or just say hello? `,
  message: `I'm always open to new ideas, opportunities, and conversations. Whether it’s a quick     chat or a serious business inquiry — my inbox is always open.`,
  number: "+91 9390093095",

};

// Twitter Section

const twitterDetails = {
  userName: "gara_koushik", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
};
