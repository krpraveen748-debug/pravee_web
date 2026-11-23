
import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Menu,
  X,
  ExternalLink,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const projects = [
  {
    title: "User Behavior Anomaly Detection System (UBADS)",
    description:
      "A system designed to identify unusual user activities and detect potential security threats using machine learning and anomaly detection.",
    technologies: ["Python", "FastAPI", "Azure", "Machine Learning"],
    link: "https://github.com/PradeepTech-hub/User-Behavior-Anomaly-Detection-System-UBADS-",
  },
  {
    title: "AI Interview Preparation System",
    description:
      "A web-based application designed to help students prepare for technical interviews through an interactive interview preparation platform.",
    technologies: ["Python", "Flask", "HTML", "CSS"],
    link: "",
  },
  {
    title: "IoT-Based Zoo Management System",
    description:
      "An IoT-based monitoring solution for zoo environments, including temperature monitoring, people counting and automated office lighting.",
    technologies: ["ESP32", "IoT", "Flask", "SQLite"],
    link: "",
  },
  {
    title: "Optimizing Information Leakage in Multicloud Storage",
    description:
      "A project focused on improving information security and reducing data leakage risks in multicloud storage environments.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    link: "",
  },
  {
    title: "Employee Salary Prediction",
    description:
      "A data-driven project focused on predicting employee salaries using available employee-related information.",
    technologies: ["Python", "Machine Learning"],
    link: "https://github.com/krpraveen748-debug/Salary_predication",
  },
  {
    title: "Dashboard for Employee Data",
    description:
      "An employee data dashboard designed to present information through visual reports and interactive data analysis.",
    technologies: ["Power BI", "Data Visualization"],
    link: "https://github.com/krpraveen748-debug/Dashboard-for-Employee-Data",
  },
];

const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "C", "SQL"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    category: "Frameworks & Backend",
    items: ["Spring Boot", "Flask", "FastAPI"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "SQLite"],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "GitHub", "Docker", "Linux", "VS Code"],
  },
  {
    category: "Data & Core Concepts",
    items: ["Power BI", "Excel", "Pandas", "DSA", "OOP", "DBMS"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            PKR<span>.</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            {["Home", "About", "Skills", "Projects", "Education", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">
                <span className="status-dot"></span>
                MCA STUDENT & ASPIRING SOFTWARE ENGINEER
              </p>

              <h1>
                Hi, I'm <span>Praveen K R</span>
              </h1>

              <h2>Building solutions through technology.</h2>

              <p className="hero-description">
                I am an MCA student at RV College of Engineering, Bengaluru,
                passionate about software development, problem-solving,
                full-stack development and emerging technologies.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  Explore My Work <ArrowUpRight size={18} />
                </a>

                <a href="#contact" className="btn btn-outline">
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
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/praveen-k-r-b5ba88321/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a href="#contact" aria-label="Email">
                  <Mail />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-card">
                <div className="profile-circle">PKR</div>
                <h3>Praveen K R</h3>
                <p>Software Developer Aspirant</p>
                <div className="profile-line"></div>
                <div className="profile-details">
                  <span><Code2 size={16} /> Software Development</span>
                  <span><GraduationCap size={16} /> MCA Student</span>
                  <span><MapPin size={16} /> Bengaluru, India</span>
                </div>
              </div>
              <div className="floating-tag tag-one">Java</div>
              <div className="floating-tag tag-two">Python</div>
              <div className="floating-tag tag-three">React</div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">GET TO KNOW ME</p>
              <h2>About <span>Me</span></h2>
            </div>

            <div className="about-content">
              <div className="about-icon">
                <BriefcaseBusiness size={42} />
              </div>

              <div>
                <h3>Passionate About Technology</h3>
                <p>
                  I am Praveen K R, currently pursuing my Master of Computer
                  Applications (MCA) at RV College of Engineering, Bengaluru.
                  I completed my Bachelor of Computer Applications (BCA) from
                  the University of Mysore.
                </p>
                <p>
                  I enjoy developing practical applications, learning new
                  technologies and solving real-world problems through
                  programming. My interests include Java development, Python,
                  web technologies, databases and data analytics.
                </p>
                <p>
                  My goal is to become a skilled software engineer and
                  contribute to meaningful technology projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section alternate-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">WHAT I WORK WITH</p>
              <h2>Technical <span>Skills</span></h2>
              <p>Technologies and tools I have learned and worked with.</p>
            </div>

            <div className="skills-grid">
              {skills.map((group) => (
                <div className="skill-card" key={group.category}>
                  <h3><Code2 size={20} /> {group.category}</h3>
                  <div className="skill-tags">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">MY RECENT WORK</p>
              <h2>Featured <span>Projects</span></h2>
              <p>Some academic and technical projects I have worked on.</p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="skill-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  {project.link ? (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="project-status">Academic Project</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section alternate-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">MY ACADEMIC BACKGROUND</p>
              <h2>My <span>Education</span></h2>
            </div>

            <div className="education-list">
              <div className="education-card">
                <div className="education-icon">
                  <GraduationCap size={25} />
                </div>
                <div>
                  <span className="education-year">2025 – 2027</span>
                  <h3>Master of Computer Applications (MCA)</h3>
                  <p>RV College of Engineering, Bengaluru</p>
                  <span className="education-score">Current GPA: 7.45</span>
                </div>
              </div>

              <div className="education-card">
                <div className="education-icon">
                  <GraduationCap size={25} />
                </div>
                <div>
                  <span className="education-year">2022 – 2025</span>
                  <h3>Bachelor of Computer Applications (BCA)</h3>
                  <p>University of Mysore</p>
                  <span className="education-score">CGPA: 8.12</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">LEARNING & DEVELOPMENT</p>
              <h2>Certifications & <span>Achievements</span></h2>
            </div>

            <div className="certificate-card">
              <GraduationCap size={35} />
              <div>
                <h3>Continuous Learning</h3>
                <p>
                  I actively participate in technical learning activities,
                  online courses and certification programs to improve my
                  knowledge and professional skills.
                </p>
                <p className="certificate-note">
                  Add your certificate names and verification links here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section alternate-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">LET'S CONNECT</p>
              <h2>Get In <span>Touch</span></h2>
              <p>
                Interested in connecting or discussing opportunities? Feel
                free to reach out.
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-item">
                <div className="contact-icon"><MapPin /></div>
                <div>
                  <h3>Location</h3>
                  <p>Bengaluru, Karnataka, India</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaGithub /></div>
                <div>
                  <h3>GitHub</h3>
                  <a
                    href="https://github.com/krpraveen748-debug"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/krpraveen748-debug
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaLinkedin /></div>
                <div>
                  <h3>LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/praveen-k-r-b5ba88321/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect with me on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-buttons">
              <a
                className="btn btn-primary"
                href="https://github.com/krpraveen748-debug"
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub <ArrowUpRight size={18} />
              </a>
              <a
                className="btn btn-outline"
                href="https://www.linkedin.com/in/praveen-k-r-b5ba88321/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <a href="#home" className="logo">PKR<span>.</span></a>
          <p>Designed & Built by Praveen K R</p>
          <p>© {new Date().getFullYear()} Praveen K R. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
