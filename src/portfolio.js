/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Koushik Gara",
  title: "Hi, I'm Koushik",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and  applications with JavaScript / Reactjs / Nodejs / Angular /Java and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mXauBY0GHkjpwsghB6jpR7JKi358gsNY/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KOUSHIK-GARA",
  linkedin: "https://www.linkedin.com/in/koushik-gara-159ab3260/",
  gmail: "koushikgara.dev@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full stack web development",
  skills: [
  ],

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
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Mongo DB",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Birla Institute of Technology & Science Pilani Hyderabad Campus",
      logo: require("./assets/images/bitsLogo.png"),
      subHeader: "Bachelor of Engineering in Electrical and Electronics Engineering",
      duration: "August 2019 - May 2023",
      
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Biz2Credit Pvt Ltd.",
      companylogo: require("./assets/images/Biz2Credit.png"),
      date: "July 2023 – Present",
      desc: "",
      descBullets: [
        "Spearheaded the UI development of a dynamic Frontend Web application for the Rule Engine micro service.",
        "Engineered an intuitive User Interface for a Parsing Tool, enabling swift extraction of essential details from bank statement PDFs", 
        "Innovated a user-friendly interface for the Biz2x chatbot, enabling users to effortlessly engage with the  platform in Arabic",
        "Revolutionised the search functionality by implementing a high-speed search engine. Utilised advanced optimisation techniques such as tries"
      ]
    },
    {
      role: "Full Stack Intern",
      company: "Biz2Credit Pvt Ltd.",
      companylogo: require("./assets/images/companylogo.png"),
      date: "July 2022 – May 2023",
      desc: ``,
      descBullets: [
        "Initiated the development of a robust Meta Service Ecosystem, serving as a centralised repository of metadata to fulfil the diverse needs of integrated systems across the organisation",
        "Built and implemented the Rules Engine micro service, responsible for processing a wide array of attributes and executing corresponding automations"
       ]
    },
    {
      role: "Software Intern",
      company: "Xarvis Systems Pvt Ltd.",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "June 2021 – Aug 2021",
      desc: "",
      descBullets: [
        "Developed the SignUp, Login, and Logout pages utilizing Node.js, MongoDB, Express, and JWT for robust user authentication. Resulted in a seamless and secure authentication process, enhancing user experience and system security"
       ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
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
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      subtitle:
        "Runner-up in xTech Hackathon, where as a team we developed  a parser which parses the US Government Tax Statements. We created a smart and extendable parser that identifies the type of tax statement and extracts the information accordingly. This parser resulted in  extraction of  important data from various types of tax statements with complete accuracy and validation",
      image: require("./assets/images/companylogo.png"),
      imageAlt: "Biz2x Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
      ]
    },
    {
      title: "Functional Award",
      subtitle:
        "Recipient of the Functional Award in Innovations Team at Biz2Credit. Recognized for continuous learning and contributing positively to team success, leading to innovative problem solving and software development.",
      image: require("./assets/images/Biz2Credit.png"),
      imageAlt: "Biz2credit",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Student Expert Certification",
      subtitle: "Postman API Fundamentals Student Expert Certification",
      image: require("./assets/images/postman-icon.png"),
      imageAlt: "Postman",
      footerLink: [
        {name: "Certification", url: ""},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Reach Out to me!",
  subtitle:
    "DISCUSS A PROJECT OR WANNA HIRE? MY INBOX IS OPEN FOR ALL.",
  message : "open for opportunities",
  number : "+919390093095",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
