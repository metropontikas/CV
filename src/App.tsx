// Components
import TextWrapper from "./components/TextWrapper/TextWrapper";
import HeadingAlt from "./components/HeadingAlt/HeadingAlt";
import SectionAlt from "./components/SectionAlt/SectionAlt";
import BasicRating from "./components/Ratings/BasicRating";
import ExcellentRating from "./components/Ratings/ExcellentRating";
import ContactMedium from "./components/ContactMedium/ContactMedium";
import HeaderWrapper from "./components/HeaderWrapper/HeaderWrapper";
// Assets
import LanguageSVG from "./assets/svgComponents/LanguageSVG";
import SoftwareSVG from "./assets/svgComponents/SoftwareSVG";
import SkillsSVG from "./assets/svgComponents/SkillsSVG";
import ContactSVG from "./assets/svgComponents/ContactSVG";
import MonogramSVG from "./assets/svgComponents/MonogramSVG";
// Styles
import "./App.css";

const contactMedia = [
  {
    title: "Phone",
    link: "00306947662164",
    type: "tel:",
    placeholder: "+30-6947-6621-64",
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
  "React Native",
  "Typescript",
  "JavaScript",
  "Redux.js",
  "Styled Components",
  "REST APIs",
  "SASS",
  "WordPress",
  "WooCommerce",
  "Bash",
  "Git",
  "HTML",
  "CSS",
];

function App() {
  return (
    <div className="docWrapper">
      <div className="col-1">
        <HeaderWrapper
          initials="VP"
          name="Vasilis Pontikakis"
          profession="React developer"
        />
        <div className="section" id="summary">
          <div className="heading">
            <div className="heading__icon">
              <svg width="30px" height="30px" viewBox="0 0 54 54">
                <circle cx="27" cy="27" r="26"></circle>
                <path
                  transform="translate(11,11)"
                  d="M31 15h-1.051C29.457 8.079 23.922 2.543 17 2.05V1a1 1 0 0 0-2 0v1.05C8.078 2.545 2.543 8.08 2.051 15H1a1 1 0 0 0 0 2h1.051C2.543 23.921 8.078 29.456 15 29.949V31a1 1 0 0 0 2 0v-1.05c6.922-.494 12.457-6.029 12.949-12.95H31a1 1 0 1 0 0-2zm-5 2h1.949c-.483 5.819-5.13 10.466-10.949 10.949V26a1 1 0 0 0-2 0v1.949C9.181 27.466 4.534 22.819 4.051 17H6a1 1 0 0 0 0-2H4.051C4.534 9.181 9.181 4.534 15 4.051V6a1 1 0 0 0 2 0V4.051c5.819.483 10.466 5.13 10.949 10.949H26a1 1 0 0 0 0 2z"
                ></path>
                <path
                  transform="translate(11,11)"
                  d="M19 16c0-1.654-1.346-3-3-3-1.655 0-3 1.346-3 3s1.345 3 3 3 3-1.346 3-3zm-4 0c0-.551.449-1 1-1 .551 0 1 .449 1 1 0 .551-.449 1-1 1-.551 0-1-.449-1-1z"
                ></path>
                <path
                  transform="translate(11,11)"
                  d="M17 10a1 1 0 0 0-1-1c-3.86 0-7 3.14-7 7a1 1 0 0 0 2 0c0-2.757 2.243-5 5-5a1 1 0 0 0 1-1zM22 15a1 1 0 0 0-1 1c0 2.757-2.244 5-5 5a1 1 0 1 0 0 2c3.86 0 7-3.14 7-7a1 1 0 0 0-1-1z"
                ></path>
              </svg>
            </div>
            <h3>Summary</h3>
          </div>
          <div className="content">
            <pre>
              JavaScript enthusiast, avid learner of anything computer-related
              with strong desire to contribute.
            </pre>
          </div>
        </div>
        <div className="section" id="experience">
          <div className="heading">
            <div className="heading__icon">
              <svg width="30px" height="30px" viewBox="0 0 54 54">
                <circle cx="27" cy="27" r="26"></circle>
                <path
                  transform="translate(11,11)"
                  d="M30 5.983h-7.987V4.045c0-1.655-1.345-3-3-3h-6.015c-1.655 0-3 1.345-3 3v1.938H2.001C.9 5.983 0 6.883 0 7.982V28.953c0 1.1.9 2.001 2 2.001h28c1.099 0 2-.9 2-2V7.981a2.008 2.008 0 0 0-2-1.999zM12 4.045c0-.551.447-1 1-1h6.011c.55 0 1 .447 1 1v1.938H12V4.045zM2 7.982h28v7.008H18.986v-1.025c0-1.101-.897-2-1.998-2h-1.993c-1.101 0-2 .897-2 2v1.025H2V7.982zm14.989 11.02h-1.993v-5.037h1.993v5.037zM2 28.951V16.988h10.997V19c0 1.102.897 2 2 2h1.99a2.002 2.002 0 0 0 2-2v-2.01h11.011v11.963H2.001z"
                ></path>
              </svg>
            </div>
            <h3>Experience</h3>
          </div>
          <div className="content">
            <span className="year">
              11/2022-
              <br />
              Present
            </span>
            <h4>React Developer</h4>
            <p className="comments">
              Developing mobile apps for the company's clients with React
              Native's CLI.
              <br />
              Styling with Styled Components and managing state with Redux
              Toolkit.
              <br />
              CI/CD through CircleCI and Fastlane.
            </p>
            <p>
              <a href="https://codedlines.com/">CodedLines</a>
            </p>
            <p className="region">Athens, Greece</p>
          </div>
          <div className="content">
            <span className="year">
              06/2022-
              <br />
              11/2022
            </span>
            <h4>Junior Frontend Developer</h4>
            <p className="comments">
              Created e-commerce sites and used Docker for cross-platform
              development.
              <br />
              Developed re-usable components for the company's projects with
              React.js.
            </p>
            <p>
              <a href="https://www.bearinmind.gr/">Bear In Mind</a>
            </p>
            <p className="region">Thessaloniki, Greece</p>
          </div>
          <div className="content">
            <span className="year">
              01/2022-
              <br />
              06/2022
            </span>
            <h4>Intern Frontend Developer</h4>
            <p className="comments">
              Improved and broadened coding fundamentals.
              <br />
              Worked on React.js demo projects, using useContext and Redux
              toolkit, learned GitHub.
            </p>
            <p>
              <a href="https://www.bearinmind.gr/">Bear In Mind</a>
            </p>
            <p className="region">Thessaloniki, Greece</p>
          </div>
          <div className="content">
            <span className="year">
              07/2021-
              <br />
              12/2021
            </span>
            <h4>Career Transition</h4>
            <p className="comments">
              Decided to switch careers and jump into web development after
              failing to find exciting challenges at work. <br />
              Learned HTML, CSS, JavaScript through online courses.
            </p>
          </div>
          <div className="content">
            <span className="year">
              05/2020-
              <br />
              06/2021
            </span>
            <h4>Caregiver</h4>
            <p className="comments">
              Organised and facilitated the everyday life of 30 underage
              beneficiaries of various origins.
              <br />
              Solved unexpected events and tensions, worked under extreme
              pressure while keeping a cool head and took initiatives to improve
              the facility's operational status.
            </p>
            <p>
              <a href="https://tdh.gr/el">Terre Des Hommes Hellas</a>
            </p>
            <p className="region">Veroia, Greece</p>
          </div>
          <div className="content">
            <span className="year">
              11/2019-
              <br />
              02/2020
            </span>
            <h4>French Interpreter</h4>
            <p className="comments">
              Assisted colleagues in their interactions or sessions with the
              beneficiaries.
              <br />
              Worked under pressure and assisted colleagues in solving
              situations that required our attention.
            </p>
            <p>
              <a href="https://greece.iom.int/">
                International Organisation for Migration
              </a>
            </p>
            <p className="region">Polykastro, Greece</p>
          </div>
          <div className="content">
            <span className="year">
              03/2019-
              <br />
              11/2019
            </span>
            <h4>Caregiver</h4>
            <p className="comments">
              Responsible for organising and facilitating the everyday life of
              12 to 18 underage beneficiaries, age 4 to 18, of mixed origins.
              Worked constantly under pressure, learnt to think creatively,
              while keeping the quality of work.
            </p>
            <p>
              <a href="https://arsis.gr/to-spiti-tis-arsis/">
                ARSIS - Association for the Social Support of Youth
              </a>
            </p>
            <p className="region">Polykastro, Greece</p>
          </div>
        </div>
        <div className="section" id="seminars">
          <div className="heading">
            <div className="heading__icon">
              <svg width="30px" height="30px" viewBox="0 0 54 54">
                <circle cx="27" cy="27" r="26"></circle>
                <path
                  transform="translate(11,11)"
                  d="M31.872 26.24l-5.785-10.88c.643-1.28.857-2.773.857-4.48C26.944 4.907 22.016 0 16.016 0c-6 0-10.927 4.907-10.927 10.88 0 1.707.428 3.2 1.071 4.48l-6 10.667c-.214.426-.214.853 0 1.066.215.427.643.64 1.072.64l4.928-1.066 1.714 4.693c.214.213.429.64.857.64.429 0 .643-.213.857-.427l5.143-9.6h2.142l5.143 9.6c.214.427.428.427.857.427.428 0 .643-.213.857-.64l1.714-4.693 4.928 1.066c.429 0 .857 0 1.071-.426.643-.427.643-.854.429-1.067zM9.16 28.587l-1.286-3.414c-.214-.426-.643-.853-1.071-.64l-3.643.854 4.286-7.68c1.5 1.92 3.428 3.2 5.785 4.053L9.16 28.587zm6.856-8.747c-4.928 0-8.999-4.053-8.999-8.96 0-4.907 4.071-8.96 9-8.96 4.927 0 8.998 4.053 8.998 8.96 0 4.907-4.07 8.96-8.999 8.96zm9.428 4.48c-.429-.213-1.071.213-1.071.64l-1.286 3.627-3.857-7.04c2.357-.64 4.5-2.134 5.785-4.054l4.286 7.68-3.857-.853z"
                ></path>
              </svg>
            </div>
            <h3>Seminars</h3>
          </div>
          <div className="content">
            <span className="year">03/2023</span>
            <h4>React Native - The Practical Guide</h4>
            <p>
              <a href="https://www.udemy.com/certificate/UC-11d544f8-9dd6-453d-b5c3-8c7e6f3f2825/">
                Udemy
              </a>
            </p>
          </div>
          <div className="content">
            <span className="year">05/2022</span>
            <h4>Become a WordPress Developer: Unlocking Power With Code</h4>
            <p>
              <a href="https://www.udemy.com/course/become-a-wordpress-developer-php-javascript/">
                Udemy
              </a>
            </p>
          </div>
          <div className="content">
            <span className="year">
              02/2022-
              <br />
              04/2022
            </span>
            <h4>
              React - The Complete Guide (incl Hooks, React Router, Redux)
            </h4>
            <p>
              <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
                Udemy
              </a>
            </p>
          </div>
          <div className="content">
            <span className="year">
              12/2021-
              <br />
              01/2022
            </span>
            <h4>JavaScript Algorithms and Data Structures</h4>
            <p>
              <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">
                FreeCodeCamp Foundation
              </a>
            </p>
          </div>
          <div className="content">
            <span className="year">
              11/2021-
              <br />
              12/2021
            </span>
            <h4>Responsive Web Design</h4>
            <p>
              <a href="https://www.freecodecamp.org/certification/metropon/responsive-web-design">
                FreeCodeCamp Foundation
              </a>
            </p>
          </div>
        </div>
        <div className="section" id="education">
          <div className="heading">
            <div className="heading__icon">
              <svg width="30px" height="30px" viewBox="0 0 54 54">
                <circle cx="27" cy="27" r="26"></circle>
                <path
                  transform="translate(11,11)"
                  d="M30.96 22.58v-9.217l.503-.303c.327-.194.533-.58.537-1 .004-.421-.196-.81-.518-1.014L16.44 1.848a.893.893 0 0 0-.967.004l-14.96 9.21c-.318.202-.515.587-.513 1.005.002.417.203.8.525.998l6.573 3.999a1.256 1.256 0 0 0-.133.56v9.669c0 .325.122.637.335.853.217.22 2.294 2.146 8.646 2.146 6.33 0 8.463-1.82 8.686-2.028a1.21 1.21 0 0 0 .367-.884v-9.917c0-.16-.03-.313-.082-.452l4.044-2.441v8.016c-.593.396-.995 1.124-.995 1.965 0 1.262.895 2.285 2 2.285 1.104 0 1.999-1.023 1.999-2.285 0-.845-.407-1.576-1.005-1.97zM23 26.725c-.787.432-2.866 1.282-7.054 1.282-4.214 0-6.246-.905-6.982-1.34v-8.468l6.493 3.95a.892.892 0 0 0 .937.006L23 18.17v8.556zm-7.06-6.876L3.08 12.045l12.881-7.89 12.922 7.868L15.94 19.85z"
                ></path>
              </svg>
            </div>
            <h3>Education</h3>
          </div>
          <div className="content">
            <span className="year">
              2011-
              <br />
              2017
            </span>
            <h4>French Language and Literature</h4>
            <p>Aristotle University of Thessaloniki</p>
            <p className="region">Greece</p>
          </div>
          <div className="content">
            <span className="year">
              2014-
              <br />
              2015
            </span>
            <h4>Erasmus+ Exchange Program</h4>
            <p>Universite Stendhal-Grenoble 3</p>
            <p className="region">Grenoble, France</p>
          </div>
        </div>
      </div>
      <div className="RightColumn">
        <SectionAlt icon={<ContactSVG />} title="Contact">
          {contactMedia.map((medium) => (
            <ContactMedium
              title={medium.title}
              link={medium.link}
              type={medium.type}
              placeholder={medium.placeholder}
            />
          ))}
        </SectionAlt>

        <SectionAlt icon={<SkillsSVG />} title="Skills">
          {skills.map((skill) => (
            <TextWrapper text={skill} />
          ))}
        </SectionAlt>

        <SectionAlt icon={<SoftwareSVG />} title="Tech Stack">
          {techStack.map((tech) => (
            <TextWrapper text={tech} />
          ))}
        </SectionAlt>

        <SectionAlt icon={<LanguageSVG />} title="Languages">
          <TextWrapper text="Greek">
            <ExcellentRating nativeSpeaker />
          </TextWrapper>
          <TextWrapper text="French">
            <ExcellentRating />
          </TextWrapper>
          <TextWrapper text="English">
            <ExcellentRating />
          </TextWrapper>
          <TextWrapper text="Spanish">
            <BasicRating />
          </TextWrapper>
        </SectionAlt>
      </div>
    </div>
  );
}

export default App;
