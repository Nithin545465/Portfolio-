import './App.css'
import heroImg from './assets/hero.png'
import { useState, useEffect } from 'react'

function ContactLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="contact-link">
      {children}
    </a>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'default')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme(){
    setTheme(t => t === 'default' ? 'alt' : 'default')
  }

  return (
    <div className="portfolio-root">
      <header className="site-header">
        <div className="header-left">
          <img src={heroImg} alt="avatar" className="avatar" />
          <div>
            <h1>Nithin Abothula</h1>
            <p className="subtitle">B.Tech Computer Science & Engineering</p>
          </div>
        </div>
        <nav className="contact">
          <ContactLink href="http://www.linkedin.com/in/nithin-abothula-n545465">LinkedIn</ContactLink>
          <ContactLink href="mailto:nithinkumar545484@gmail.com">Email</ContactLink>
          <ContactLink href="https://github.com/Nithin5454">GitHub</ContactLink>
          <span className="phone">+91 93478 77318</span>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'default' ? 'Switch Accent' : 'Default Accent'}
          </button>
        </nav>
      </header>

      <main>
        <section className="summary">
          <h2>About</h2>
          <p>
            I build data-driven and ML-enabled solutions. Skilled in C++, Java,
            Python, DSA and tools such as MySQL, Power BI and GitHub. I enjoy
            turning data into actionable insights and prototyping ML systems.
          </p>
        </section>

        <section className="sections">
          <div className="left">
            <div className="card">
              <h3>Skills</h3>
              <ul className="skills-list">
                <li><strong>Languages:</strong> C++, Java, Python, DSA</li>
                <li><strong>Frameworks / Libs:</strong> NumPy, Pandas, HTML, CSS</li>
                <li><strong>Tools:</strong> MySQL, Power BI, Excel, GitHub</li>
                <li><strong>Soft:</strong> Critical Thinking, Team Player, Time Management</li>
              </ul>
            </div>

            <div className="card">
              <h3>Training</h3>
              <ul className="plain-list">
                <li>Cipher Schools — DSA (Java)</li>
                <li>Infosys — Generative AI, Computational Theory</li>
              </ul>
            </div>

            <div className="card">
              <h3>Certificates</h3>
              <ul className="plain-list">
                <li>Computational Theory — Infosys</li>
                <li>Generative AI — Infosys</li>
                <li>DSA using Java — Cipher School</li>
                <li>Computer Networking — Google</li>
              </ul>
            </div>
          </div>

          <div className="right">
            <div className="card">
              <h3>Projects</h3>
              <div className="project">
                <h4>Hypercar on Track — 3D Animation</h4>
                <p>
                  Rendered a high-fidelity 3D car animation using Blender,
                  focusing on realistic physics and cinematic lighting. Tech:
                  Blender, 3D Modeling.
                </p>
                <ContactLink href="https://github.com/Nithin5454">View on GitHub</ContactLink>
              </div>

              <div className="project">
                <h4>Zomato Market Insight India Top 100 Cities — Power BI Dashboard</h4>
                <p>
                  Developed an interactive Power BI dashboard analysing ~10k
                  transactions to surface revenue and logistics insights.
                </p>
                <ContactLink href="https://github.com/Nithin5454">View on GitHub</ContactLink>
              </div>

              <div className="project">
                <h4>AI-Driven Fake Review & Counterfeit Detection System</h4>
                <p>
                  Built a real-time ML pipeline using NLP and behavioral
                  analytics to flag suspicious reviews and counterfeit items.
                </p>
                <ContactLink href="https://github.com/Nithin5454">View on GitHub</ContactLink>
              </div>
            </div>

            <div className="card">
              <h3>Education</h3>
              <ul className="edu-list">
                <li>
                  <strong>Lovely Professional University</strong> — B.Tech CSE
                  (Aug'23 - Present), CGPA: 6.21
                </li>
                <li>
                  <strong>Narayana Junior College</strong> — Intermediate,
                  86.3%
                </li>
                <li>
                  <strong>Sri Chaitanya School</strong> — Matriculation, 94.5%
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>Extra Curricular</h3>
              <ul className="plain-list">
                <li>Awarded for management skills organising a university event</li>
                <li>Script & Dialogue Writer for TV shows</li>
                <li>Runner-up Trophy for a tournament</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <small>Made by Nithin Abothula — portfolio generated</small>
      </footer>
    </div>
  )
}
