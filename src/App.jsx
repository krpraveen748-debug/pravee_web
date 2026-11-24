
import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Shield,
  Terminal,
  GraduationCap,
  ArrowUpRight,
  Database,
  Briefcase
} from "lucide-react";
import "./App.css";

const skills = [
  "Java", "Python", "C", "SQL",
  "HTML", "CSS", "JavaScript", "React",
  "Node.js", "Spring Boot", "MySQL", "MongoDB",
  "Docker", "Linux", "Git", "Power BI",
  "Excel", "FastAPI"
];

const projects = [
  {
    title: "UBADS – User Behavior Anomaly Detection System",
    description:
      "A system designed to identify unusual user activities and detect behavioral anomalies using machine learning.",
    tech: "Python • FastAPI • Azure",
    link: "https://github.com/PradeepTech-hub/User-Behavior-Anomaly-Detection-System-UBADS-"
  },
  {
    title: "AI Interview Preparation System",
    description:
      "A web application designed to help students prepare for technical interviews through an interactive experience.",
    tech: "Python • Flask",
    link: "https://github.com/krpraveen748-debug"
  },
  {
    title: "IoT-Based Zoo Management System",
    description:
      "An IoT-based monitoring system for enclosure environments, office automation and visitor monitoring.",
    tech: "ESP32 • Flask • SQLite",
    link: "https://github.com/krpraveen748-debug"
  },
  {
    title: "Employee Salary Prediction",
    description:
      "A machine learning project that predicts employee salaries based on relevant input data.",
    tech: "Python • Machine Learning",
    link: "https://github.com/krpraveen748-debug/Salary_predication"
  },
  {
    title: "Employee Data Dashboard",
    description:
      "An interactive dashboard for analysing and presenting employee-related information.",
    tech: "Power BI • Data Analytics",
    link: "https://github.com/krpraveen748-debug/Dashboard-for-Employee-Data"
  },
  {
    title: "Optimizing Information Leakage in Multicloud Storage",
    description:
      "A project focused on improving information security and reducing data leakage in multicloud storage.",
    tech: "Java • Spring Boot • MySQL",
    link: "https://github.com/krpraveen748-debug"
  }
];

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Praveen<span>IT</span>
        </a>

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
          <p className="eyebrow">WELCOME TO MY DIGITAL WORLD</p>

          <h1>
            Hi, I'm <span>Praveen K R</span>
          </h1>

          <h2>
            Software Developer
            <span> | </span>
            Cybersecurity Enthusiast
          </h2>

          <p className="hero-description">
            I am an MCA student and technology enthusiast passionate
            about software development, cybersecurity, cloud
            technologies and building innovative digital solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work <ArrowUpRight size={18} />
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
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/praveen-k-r-b5ba88321/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>

            <a href="mailto:praveenweb@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-glow"></div>

          <img
            src="/hacker.png"
            alt="Cybersecurity hacker working at a computer"
          />

          <div className="image-label">
            <Shield size={18} />
            Ethical Hacking & Technology
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
            <Code size={35} />
          </div>

          <div>
            <h3>Technology Enthusiast & Developer</h3>

            <p>
              I am Praveen K R, an MCA student at RV College of
              Engineering, Bengaluru. I have a background in Computer
              Applications and an interest in software development,
              cybersecurity, data analytics and emerging technologies.
              I enjoy learning new technologies and developing practical
              projects that solve real-world problems.
            </p>

            <p>
              My goal is to improve my technical knowledge, develop
              innovative applications and grow as a software professional.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <div className="section-heading">
          <p>MY TECHNICAL EXPERTISE</p>
          <h2>Technical <span>Skills</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              <Terminal size={19} />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <div className="section-heading">
          <p>WHAT I HAVE BUILT</p>
          <h2>My <span>Projects</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-icon">
                <Code size={26} />
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View Project <ExternalLink size={16} />
              </a>
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
            <GraduationCap size={34} />

            <div>
              <h3>Master of Computer Applications (MCA)</h3>
              <p>RV College of Engineering, Bengaluru</p>
            </div>
          </div>

          <div className="education-card">
            <GraduationCap size={34} />

            <div>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>
                P.E.S. College of Science, Arts & Commerce
                (University of Mysore)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <p>LET'S CONNECT</p>
          <h2>Contact <span>Me</span></h2>
        </div>

        <p className="contact-intro">
          Have a project, opportunity or idea? Feel free to contact me.
        </p>

        <div className="contact-grid">

          <a
            href="mailto:praveenweb@gmail.com"
            className="contact-card"
          >
            <Mail />
            <div>
              <small>Email Address</small>
              <strong>praveenweb@gmail.com</strong>
            </div>
            <ArrowUpRight />
          </a>

          <a
            href="tel:+918431605656"
            className="contact-card"
          >
            <Phone />
            <div>
              <small>Phone Number</small>
              <strong>+91 8431605656</strong>
            </div>
            <ArrowUpRight />
          </a>

          <a
            href="https://www.linkedin.com/in/praveen-k-r-b5ba88321/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <Linkedin />
            <div>
              <small>LinkedIn Profile</small>
              <strong>Praveen K R</strong>
            </div>
            <ArrowUpRight />
          </a>

          <a
            href="https://github.com/krpraveen748-debug"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <Github />
            <div>
              <small>GitHub Profile</small>
              <strong>krpraveen748-debug</strong>
            </div>
            <ArrowUpRight />
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <a href="#home" className="logo">
          Praveen<span>IT</span>
        </a>

        <p>Designed & Developed by Praveen K R</p>

        <div className="footer-socials">
          <a href="https://github.com/krpraveen748-debug" target="_blank" rel="noreferrer">
            <Github />
          </a>

          <a href="https://www.linkedin.com/in/praveen-k-r-b5ba88321/" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} PraveenIT. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
