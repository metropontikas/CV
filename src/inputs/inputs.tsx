const headerDetails = {
    initials: "VP",
    name: "Vasilis Pontikakis",
    profession: "React developer",
};

const summaryText = "JavaScript enthusiast, avid learner of anything computer-related with strong desire to contribute.";

const workExperience = [
    {
        title: "Web Developer",
        dateStart: "08/2023",
        isPresent: true,
        href: "https://www.prosvasis.com/",
        linkText: "Prosvasis SA",
        styledContent: `Part of the R&D department, working on the web implementation of the company's software and services.\n\nEnhancing the clients' experience of the company's web app by implementing new business features, resolving bugs both on the front as well as on the back end and improving the app's UI.\n\nImproving the front-end part of the code base by refactoring, simplifying and unifying code logic.\n\nLearning to work with and apply architecture principles and design patterns.`,
        region: "Athens, Greece",
    },
    {
        title: "React Developer",
        dateStart: "11/2022",
        isPresent: true,
        href: "https://codedlines.com/",
        linkText: "CodedLines",
        styledContent: `One-man team, responsible for developing the company's mobile app product.\n\nMobile development was done with:\n- React Native's React Native CLI,\n- Styled Components for styling,\n- Axios for handling API calls,\n- Redux Toolkit for state and API calls,\n- CircleCI and Fastlane for CI/CD,\n- 3rd-party libraries to implement various features and aspects of the product.\n\nAutomations were fixed/improved/applied to enhance the CI/CD building and certificate signing phases, as well as the product's customisable nature.`,
        region: "Athens, Greece",
    },
    {
        title: "Junior Frontend Developer",
        dateStart: "06/2022",
        dateEnd: "11/2022",
        isPresent: false,
        href: "https://www.bearinmind.gr/",
        linkText: "Bear In Mind",
        styledContent: `Created e-commerce sites and used Docker for cross-platform development.\nDeveloped re-usable components for the company's projects with React.js.`,
        region: "Thessaloniki, Greece",
    },
    {
        title: "Intern Frontend Developer",
        dateStart: "01/2022",
        dateEnd: "06/2022",
        isPresent: false,
        styledContent: "Improved and broadened coding fundamentals.\n\nWorked on React.js demo projects, using useContext and Redux toolkit, learned GitHub.",
        href: "https://www.bearinmind.gr/",
        linkText: "Bear In Mind",
        region: "Thessaloniki, Greece",
    },
    {
        title: "Career Transition",
        dateStart: "07/2021",
        dateEnd: " 12/2021",
        isPresent: false,
        styledContent: "Decided to switch careers and jump into web development after failing to find exciting challenges at work.\n\nLearned HTML, CSS, JavaScript through online courses.",
    },
    {
        title: "Caregiver",
        dateStart: "05/2020",
        dateEnd: "06/2021",
        isPresent: false,
        href: "https://tdh.gr/el",
        linkText: "Terre Des Hommes Hellas",
        styledContent: `Part of the core of a 10 people team, responsible for organising and facilitating the everyday life of 30 underage beneficiaries of various origins and cultures.Handled unexpected events in the facility, resolved tensions between beneficiaries, and solved multiple challenges at a time.\n\nWorked under extreme pressure and tension while keeping a cool head.\nTook initiatives to resolve issues and situations that hindered the facility's operational status and/or to achieve our objectives, actively participated in meetings with colleagues and superiors.`,
        region: "Veroia, Greece",
    },
    {
        title: "French Interpreter",
        dateStart: "11/2019",
        dateEnd: "02/2020",
        isPresent: false,
        href: "https://greece.iom.int/",
        linkText: "Bear In Mind",
        styledContent: "Assisted colleagues in their interactions or sessions with the beneficiaries.\nWorked under pressure and assisted colleagues in solving situations that required our attention.",
        region: "Polykastro, Greece",
    },
    {
        title: "Caregiver",
        dateStart: "03/2019",
        dateEnd: "11/2019",
        isPresent: false,
        href: "https://arsis.gr/to-spiti-tis-arsis/",
        linkText: " ARSIS - Association for the Social Support of Youth",
        styledContent: "Responsible for organising and facilitating the everyday life of 12 to 18 underage beneficiaries, age 4 to 18, of mixed origins.\nWorked constantly under pressure, learnt to think creatively, while keeping the quality of work.",
        region: "Oraiokastro, Greece",
    },
];

const seminars = [
    {
        title: "React Native - The Practical Guide",
        dateStart: "03/2023",
        href: "https://www.udemy.com/certificate/UC-11d544f8-9dd6-453d-b5c3-8c7e6f3f2825/",
        linkText: "Udemy",
    },
    {
        title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        dateStart: "02/2022",
        dateEnd: "04/2022",
        href: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
        linkText: "Udemy",
    },
    {
        title: "JavaScript Algorithms and Data Structures",
        dateStart: "12/2021",
        dateEnd: "01/2022",
        href: "https://www.freecodecamp.org/certification/metropon/responsive-web-design",
        linkText: "FreeCodeCamp Foundation",
    },
    {
        title: "Responsive Web Design",
        dateStart: "11/2021",
        dateEnd: "02/2021",
        href: "https://www.freecodecamp.org/certification/metropon/responsive-web-design",
        linkText: "FreeCodeCamp Foundation",
    },
];

const education = [
    {
        title: "French Language and Literature",
        dateStart: "2011",
        dateEnd: "2017",
        content: "Aristotle University of Thessaloniki",
        region: "Thessaloniki, Greece",
    },
    {
        title: "Erasmus+ Exchange Program",
        dateStart: "2014",
        dateEnd: "2015",
        content: "Universite Stendhal-Grenoble 3",
        region: "Grenoble, France",
    },
];

const contactMedia = [
    {
        title: "Phone",
        placeholder: "Available upon request",
    },
    {
        title: "E-mail",
        link: "pontikav@protonmail.com",
        type: "mailto:",
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/vasilis-pontikakis-30874653",
        placeholder: "Vasilis Pontikakis",
    },
    {
        title: "GitHub",
        link: "https://github.com/metropontikas",
        placeholder: "Vasilis Pontikakis",
    },
];

const skills = [
    "Sense of duty",
    "Team Player",
    "Creative thinker",
    "Work under pressure",
    "Communicational skills",
    "Organisational skills",
    "Problem solver",
];

const techStack = [
    "React.js",
    "Typescript",
    "SASS",
    "Bootstrap",
    ".NET Ccore",
    "JavaScript",
    "Redux.js",
    "React Native",
    "Styled Components",
    "REST APIs",
    "Bash",
    "Git",
    "CSS",
    "HTML",
];

const langugages = [
    { name: "Greek", level: "nativeSpeaker" },
    { name: "French", level: "excellent" },
    { name: "English", level: "excellent" },
    { name: "Spanish", level: "basic" },
];

export { headerDetails, summaryText, workExperience, seminars, education, contactMedia, skills, techStack, langugages };
