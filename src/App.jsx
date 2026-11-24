
import React from "react";
import "./App.css";

const skills = [
  "Java", "Python", "C", "SQL", "HTML", "CSS",
  "JavaScript", "React", "Node.js", "Spring Boot",
  "Flask", "FastAPI", "MySQL", "MongoDB", "SQLite",
  "Git", "GitHub", "Docker", "Linux", "Power BI",
  "Excel", "Pandas", "DSA", "OOP", "DBMS"
];

const projects = [
  {
    title: "User Behavior Anomaly Detection System",
    description:
      "A system designed to identify unusual user activities using machine learning and behavioral analysis.",
    tech: "Python • FastAPI • Azure • Machine Learning",
    link: "https://github.com/PradeepTech-hub/User-Behavior-Anomaly-Detection-System-UBADS-"
  },
  {
    title: "AI Interview Preparation System",
    description:
      "A web-based application designed to help users prepare for interviews through an interactive platform.",
    tech: "Python • Flask • HTML • CSS",
    link: ""
  },
  {
    title: "IoT-Based Zoo Management System",
    description:
      "An IoT-based monitoring solution for zoo environments, office automation, visitor counting and temperature alerts.",
    tech: "ESP32 • IoT • Flask • SQLite",
    link: ""
  },
  {
    title: "Optimizing Information Leakage in Multicloud Storage",
    description:
      "An academic project focused on improving data privacy and reducing information leakage in multicloud storage systems.",
    tech: "Java • Spring Boot • MySQL",
    link: ""
  },
  {
    title: "Employee Salary Prediction",
    description:
      "A machine learning project that predicts employee salary based on relevant input features.",
    tech: "Python • Machine Learning",
    link: "https://github.com/krpraveen748-debug/Salary_predication"
  },
  {
    title: "Dashboard for Employee Data",
    description:
      "An interactive dashboard that presents employee information through data visualization and reports.",
    tech: "Power BI • Data Visualization",
    link: "https://github.com/krpraveen748-debug/Dashboard-for-Employee-Data"
  }
];

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo">PKR<span>.</span></a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero section">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Praveen K R</span>
          </h1>

          <h2>MCA Student & Aspiring Software Engineer</h2>

          <p className="hero-description">
            I build clean, reliable and scalable digital solutions
            using modern technologies. I enjoy learning, developing
            practical applications and solving real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              Explore My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/krpraveen748-debug"
               target="_blank" rel="noreferrer">GitHub ↗</a>

            <a href="https://www.linkedin.com/in/praveen-k-r-b5ba88321/"
               target="_blank" rel="noreferrer">LinkedIn ↗</a>

            <a href="mailto:praveenweb@gmail.com">Email ↗</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-card">
            <div className="profile-symbol">{"< />"}</div>
            <p className="profile-name">Praveen K R</p>
            <p className="profile-role">Full Stack Developer</p>
            <div className="profile-line"></div>
            <p className="profile-quote">
              "Building solutions through technology."
            </p>
            <div className="profile-tags">
              <span>Development</span>
              <span>Innovation</span>
              <span>Learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section-heading">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">
          <div className="about-card">
            <div className="about-icon">{"</>"}</div>
            <h3>Who I Am</h3>
            <p>
              Hello! I'm Praveen K R, an MCA student and aspiring
              software engineer passionate about technology and
              software development.
            </p>
            <p>
              I enjoy creating practical applications, exploring
              new technologies and improving my problem-solving
              skills. My goal is to develop meaningful digital
              solutions that provide real value.
            </p>
            <p>
              I believe in continuous learning, teamwork and
              building projects that combine creativity with
              technical knowledge.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <span>01</span>
              <h3>Problem Solving</h3>
              <p>Finding practical solutions to technical challenges.</p>
            </div>

            <div className="highlight-card">
              <span>02</span>
              <h3>Development</h3>
              <p>Building useful and responsive software applications.</p>
            </div>

            <div className="highlight-card">
              <span>03</span>
              <h3>Continuous Learning</h3>
              <p>Exploring new tools, technologies and ideas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section alternate-section">
        <div className="section-heading">
          <p className="eyebrow">MY TECHNICAL EXPERTISE</p>
          <h2>Technical <span>Skills</span></h2>
          <p>Technologies and tools I use to build solutions.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="section-heading">
          <p className="eyebrow">WHAT I CAN DO</p>
          <h2>My <span>Services</span></h2>
          <p>Areas of development and technical interest.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">01</div>
            <h3>Web Development</h3>
            <p>
              Creating responsive and user-friendly websites
              using modern web technologies.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">02</div>
            <h3>Backend Development</h3>
            <p>
              Developing application logic, APIs and database
              integrations.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">03</div>
            <h3>Data Analytics</h3>
            <p>
              Working with data, dashboards and visualization
              tools to present useful insights.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">04</div>
            <h3>IoT & Application Development</h3>
            <p>
              Exploring connected devices and practical
              software-based monitoring solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section alternate-section">
        <div className="section-heading">
          <p className="eyebrow">MY RECENT WORK</p>
          <h2>Featured <span>Projects</span></h2>
          <p>Some of the applications and systems I have worked on.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <span className="project-index">
                  PROJECT / {String(index + 1).padStart(2, "0")}
                </span>
                <span className="project-arrow">↗</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">{project.tech}</div>

              {project.link ? (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project <span>↗</span>
                </a>
              ) : (
                <span className="project-status">Academic Project</span>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <div className="section-heading">
          <p className="eyebrow">MY ACADEMIC BACKGROUND</p>
          <h2>My <span>Education</span></h2>
        </div>

        <div className="education-list">
          <div className="education-card">
            <div className="education-marker">01</div>
            <div>
              <p className="education-label">POSTGRADUATE</p>
              <h3>Master of Computer Applications (MCA)</h3>
              <p>RV College of Engineering, Bengaluru</p>
              <span>Currently Pursuing</span>
            </div>
          </div>

          <div className="education-card">
            <div className="education-marker">02</div>
            <div>
              <p className="education-label">UNDERGRADUATE</p>
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
      <section id="certifications"
               className="section certifications-section">
        <div className="section-heading">
          <p className="eyebrow">PROFESSIONAL DEVELOPMENT</p>
          <h2>Certifications & <span>Learning</span></h2>
          <p>Building knowledge through continuous learning.</p>
        </div>

        <div className="certification-card">
          <div className="certification-icon">🏆</div>

          <div className="certification-content">
            <h3>Professional Learning & Certifications</h3>
            <p>
              Continuously developing technical knowledge through
              courses, workshops, practical learning and hands-on
              projects.
            </p>
            <span>Continuous Learning</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Get In <span>Touch</span></h2>
          <p>
            Have a project idea or an opportunity? Feel free to
            contact me.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <div>
              <h3>Email</h3>
              <a href="mailto:praveenweb@gmail.com">
                praveenweb@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">☎</span>
            <div>
              <h3>Phone</h3>
              <a href="tel:+918431605656">+91 8431605656</a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">⌖</span>
            <div>
              <h3>Location</h3>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">in</span>
            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/praveen-k-r-b5ba88321/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">⌘</span>
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/krpraveen748-debug"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <a className="btn primary-btn contact-button"
           href="mailto:praveenweb@gmail.com">
          Send Me an Email ↗
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo">PKR<span>.</span></a>
        <p>Designed & Developed by Praveen K R</p>
        <p>© {new Date().getFullYear()} PraveenIT. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
