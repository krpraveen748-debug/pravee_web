
import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Shield,
  GraduationCap,
  ArrowUpRight,
  Database,
  Briefcase,
  Terminal,
  Laptop,
  Award
} from "lucide-react";
import "./App.css";

const skills = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "C", "SQL"]
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
  },
  {
    title: "Frameworks & Backend",
    items: ["Spring Boot", "Flask", "FastAPI"]
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "SQLite"]
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "Docker", "Linux", "VS Code"]
  },
  {
    title: "Data & Core Concepts",
    items: ["Power BI", "Excel", "Pandas", "DSA", "OOP", "DBMS"]
  }
];

const projects = [
  {
    number: "01",
    title: "User Behavior Anomaly Detection System (UBADS)",
    description:
      "Developed a user behavior monitoring solution that analyses activity patterns to identify unusual behavior and potential security threats. The system uses anomaly detection techniques to support improved monitoring and security analysis.",
    tech: ["Python", "FastAPI", "Azure", "Machine Learning"],
    link: "https://github.com/PradeepTech-hub/User-Behavior-Anomaly-Detection-System-UBADS-"
  },
  {
    number: "02",
    title: "AI Interview Preparation System",
    description:
      "Designed a web-based interview preparation platform that helps candidates strengthen their technical knowledge and prepare for interviews through an interactive application.",
    tech: ["Python", "Flask", "HTML", "CSS"],
    link: null
  },
  {
    number: "03",
    title: "IoT-Based Zoo Management System",
    description:
      "Designed an IoT-based monitoring solution for zoo environments, focusing on enclosure temperature monitoring, visitor counting and automated office lighting to support efficient zoo operations.",
    tech: ["ESP32", "IoT", "Flask", "SQLite"],
    link: null
  },
  {
    number: "04",
    title: "Optimizing Information Leakage in Multicloud Storage",
    description:
      "Worked on a security-focused multicloud storage solution aimed at reducing information leakage risks and improving the protection and management of data across cloud environments.",
    tech: ["Java", "Spring Boot", "MySQL"],
    link: null
  },
  {
    number: "05",
    title: "Employee Salary Prediction",
    description:
      "Built a data-driven prediction project that applies machine learning techniques to estimate employee salaries using relevant employee information and patterns in the dataset.",
    tech: ["Python", "Machine Learning"],
    link: "https://github.com/krpraveen748-debug/Salary_predication"
  },
  {
    number: "06",
    title: "Dashboard for Employee Data",
    description:
      "Created an interactive employee data dashboard to organise, analyse and present workforce information through visual reports, helping users understand data and identify useful insights.",
    tech: ["Power BI", "Data Visualization"],
    link: "https://github.com/krpraveen748-debug/Dashboard-for-Employee-Data"
  }
];

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">PKR<span>.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            MCA STUDENT & ASPIRING SOFTWARE ENGINEER
          </p>

          <h1>
            Hi, I'm <span>Praveen K R</span>
          </h1>

          <h2>Building solutions through technology.</h2>

          <p className="hero-description">
            I am an MCA student at RV College of Engineering, Bengaluru,
            passionate about software development, problem-solving,
            full-stack development and emerging technologies. I enjoy
            transforming ideas into practical applications and continuously
            developing my technical capabilities.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work <ArrowUpRight size={18}/>
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/krpraveen748-debug"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github/>
            </a>

            <a
              href="https://www.linkedin.com/in/praveen-k-r-b5ba88321/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin/>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-glow"></div>

          <img
            src="/hacker.png"
            alt="Cybersecurity and technology themed visual"
          />

          <div className="image-label">
            <Shield size={18}/>
            Software Development & Technology
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-card">
          <div className="about-icon">
            <Code size={35}/>
          </div>

          <div>
            <h3>Driven by Innovation. Focused on Growth.</h3>

            <p>
              I am Praveen K R, an aspiring software engineer currently
              pursuing a Master of Computer Applications at RV College
              of Engineering, Bengaluru. With a foundation in computer
              applications, I am passionate about using technology to
              solve meaningful problems and create practical digital
              solutions.
            </p>

            <p>
              My technical interests span software engineering,
              full-stack development, database management, cloud
              technologies, cybersecurity and data analytics. Through
              academic and personal projects, I continuously explore
              new tools, strengthen my programming skills and turn
              concepts into working applications.
            </p>

            <p>
              I believe that consistent learning, creativity and
              problem-solving are essential to becoming a successful
              technology professional. My ambition is to contribute
              to innovative projects, collaborate with talented teams
              and build reliable solutions that create real-world impact.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <div className="section-heading">
          <p>WHAT I WORK WITH</p>
          <h2>Technical <span>Skills</span></h2>
          <p className="section-subtitle">
            Technologies and tools I have learned and worked with.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-category" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <div className="section-heading">
          <p>MY RECENT WORK</p>
          <h2>Featured <span>Projects</span></h2>
          <p className="section-subtitle">
            Academic and technical projects focused on practical
            problem-solving and technology.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <Code size={25}/>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project <ExternalLink size={16}/>
                </a>
              ) : (
                <span className="project-status">
                  Academic Project
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section" id="education">
        <div className="section-heading">
          <p>MY ACADEMIC BACKGROUND</p>
          <h2>My <span>Education</span></h2>
        </div>

        <div className="education-list">
          <div className="education-card">
            <GraduationCap size={34}/>

            <div>
              <h3>Master of Computer Applications (MCA)</h3>
              <p>RV College of Engineering, Bengaluru</p>
              <span>Currently Pursuing</span>
            </div>
          </div>

          <div className="education-card">
            <GraduationCap size={34}/>

            <div>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>
                P.E.S. College of Science, Arts & Commerce
                (University of Mysore)
              </p>
              <span>Completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" id="certifications">
        <div className="section-heading">
          <p>LEARNING & DEVELOPMENT</p>
          <h2>Certifications & <span>Achievements</span></h2>
        </div>

        <div className="about-card certification-card">
          <Award size={35}/>
          <div>
            <h3>Continuous Learning</h3>
            <p>
              I actively participate in technical learning activities,
              online courses and certification programs to expand my
              knowledge, strengthen my skills and stay updated with
              evolving technologies.
            </p>
            <p>
              My focus is on continuous improvement, practical learning
              and applying new knowledge to real-world projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <p>LET'S CONNECT</p>
          <h2>Get In <span>Touch</span></h2>
        </div>

        <p className="contact-intro">
          Interested in connecting, collaborating or discussing
          professional opportunities? Feel free to reach out.
        </p>

        <div className="contact-grid">

          <a
            href="mailto:praveenweb@gmail.com"
            className="contact-card"
          >
            <Mail/>
            <div>
              <small>Email</small>
              <strong>praveenweb@gmail.com</strong>
            </div>
            <ArrowUpRight/>
          </a>

          <a
            href="tel:+918431605656"
            className="contact-card"
          >
            <Phone/>
            <div>
              <small>Phone Number</small>
              <strong>+91 8431605656</strong>
            </div>
            <ArrowUpRight/>
          </a>

          <a
            href="https://github.com/krpraveen748-debug"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <Github/>
            <div>
              <small>GitHub</small>
              <strong>github.com/krpraveen748-debug</strong>
            </div>
            <ArrowUpRight/>
          </a>

          <a
            href="https://www.linkedin.com/in/praveen-k-r-b5ba88321/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <Linkedin/>
            <div>
              <small>LinkedIn</small>
              <strong>Connect with me on LinkedIn</strong>
            </div>
            <ArrowUpRight/>
          </a>

          <div className="contact-card location-card">
            <MapPin/>
            <div>
              <small>Location</small>
              <strong>Bengaluru, Karnataka, India</strong>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <a href="#home" className="logo">PKR<span>.</span></a>

        <p>Designed & Built by Praveen K R</p>

        <div className="footer-socials">
          <a
            href="https://github.com/krpraveen748-debug"
            target="_blank"
            rel="noreferrer"
          >
            <Github/>
          </a>

          <a
            href="https://www.linkedin.com/in/praveen-k-r-b5ba88321/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin/>
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Praveen K R. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
