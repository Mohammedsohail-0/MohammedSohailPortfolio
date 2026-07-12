import React, { useState } from "react";
import './Portfolio.css';
import { ButtonPrimary } from "./components/Button";
import { ButtonSecondary } from "./components/Button";
import ovrlooxImg from "./assets/ovrlooxImg.png";
import eagleImg from "./assets/eagleImg.png";
import gainchekImg from "./assets/gainchekImg.png";
import coffeecrepeImg from "./assets/coffee&crepeImg.png";

import javaIcon from "./assets/icons/java-brands-solid.png";
import jsIcon from "./assets/icons/js-brands-solid.png";
import reactIcon from "./assets/icons/react-brands-solid.png";
import nodeIcon from "./assets/icons/node-brands-solid.png";
import htmlIcon from "./assets/icons/html5-brands-solid.png";
import cssIcon from "./assets/icons/css-brands-solid.png";
import gitIcon from "./assets/icons/github-brands-solid.png";

import chessStatsImg from "./assets/chess_stats.png";
import chessGraphImg from "./assets/chess-graph.png";




export default function Portfolio() {

    return (
        <div className="portfolio">
            <Nav></Nav>
            <Hero></Hero>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
        </div>
    );
}

function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="navBar">
            <h3>Mohammed Sohail</h3>

            <button
                className={`burger ${open ? "open" : ""}`}
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                aria-expanded={open}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`btns-wraper ${open ? "open" : ""}`}>
                <div className={`btns-wraper ${open ? "open" : ""}`}>
                    <a href="#home" className="btn btn-secondary" onClick={() => setOpen(false)}>Home</a>
                    <a href="#about" className="btn btn-secondary" onClick={() => setOpen(false)}>About</a>
                    <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>Contact</a>
                </div>
            </div>
        </div>
    );
}



function Hero() {
    return (
        <div id="home" className="hero-card">
            <div>
                <p className="intro">Hey, I'm <span>Mohammed Sohail</span></p>
            </div>
            <div>
                <p className="tag-line">I build software for real problems<br></br> — <span>mine, </span>and other people's.</p>
            </div>
            <div className="hero-btns-wraper">
                 <a href="#projects" className="btn btn-secondary" onClick={() => setOpen(false)}>See my work</a>
                 <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>Get in touch</a>
            </div>

        </div>
    )
}



function Projects() {
    return (
        <div id="projects" className="projects-section">

            <div className="project-section-header">
                <h1>Projects</h1>
                <hr />
            </div>

            <div className="project-card project-card-left">
                <h2 className="mobile-header">Gainchek</h2>
                <div className="project-img-wraper">
                    <img src={gainchekImg} alt="Gainchek app screenshot" />
                </div>
                <div className="about-project">
                    <h2>Gainchek</h2>
                    <p className="used-tech">Java · Firebase · IoT · Bluetooth · Hackathon</p>
                    <p className="about">A client management tool for personal trainers — built to help them track clients and keep them engaged through visualized progress, instead of scattered spreadsheets and screenshots. Currently building this out solo, with a waitlist live now ahead of launch.</p>
                    <div className="project-btns-wraper">
                        <ButtonSecondary className="view-code-btn" onClick={() => window.open("https://github.com/Mohammedsohail-0")} >View code</ButtonSecondary>
                        <ButtonPrimary className="cta-btn" onClick={() => window.open("https://gainchek-landing-page.vercel.app/")} >Join waitlist</ButtonPrimary>
                    </div>
                </div>
            </div>

            <div className="project-card project-card-right">
                <h2 className="mobile-header">Eagle</h2>
                <div className="project-img-wraper">
                    <img src={eagleImg} alt="EAGLE smart glass hardware prototype" />
                </div>
                <div className="about-project">
                    <h2>EAGLE</h2>
                    <p className="used-tech">Java · Firebase · IoT · Bluetooth · Hackathon</p>
                    <p className="about">Team-built at a hackathon: a wearable smart-glass prototype that syncs real-time notifications from a companion mobile app over Bluetooth and Firebase as the real-time sync layer between them.</p>
                    <div className="project-btns-wraper">
                        <ButtonSecondary className="view-code-btn" onClick={() => window.open("https://github.com/Mohammedsohail-0")} >View code</ButtonSecondary>
                    </div>
                </div>
            </div>

            <div className="project-card project-card-left">
                <h2 className="mobile-header">OVRLOOX — Shape The Drop</h2>
                <div className="project-img-wraper">
                    <img src={ovrlooxImg} alt="OVRLOOX Shape The Drop app screenshot" />
                </div>
                <div className="about-project">
                    <h2>OVRLOOX — Shape The Drop</h2>
                    <p className="used-tech">JavaScript · Freelance · E-commerce</p>
                    <p className="about">Freelance build for a streetwear brand. Built the multi-step preference quiz — style, garment picks, price range, colour palette — end to end, including form handling and lead capture for early-access signups.</p>
                    <div className="project-btns-wraper">
                        <ButtonSecondary className="view-code-btn" onClick={() => window.open("https://github.com/Mohammedsohail-0")} >View code</ButtonSecondary>
                        <ButtonPrimary className="cta-btn" onClick={() => window.open("https://ovrloox.store/")}>Live Link</ButtonPrimary>
                    </div>
                </div>
            </div>

            <div className="project-card project-card-right">
                <h2 className="mobile-header">Coffee & Crepe — Demo Menu</h2>
                <div className="project-img-wraper">
                    <img src={coffeecrepeImg} alt="Coffee & Crepe demo menu screenshot" />
                </div>
                <div className="about-project">
                    <h2>Coffee & Crepe — Demo Menu</h2>
                    <p className="used-tech">JavaScript · Freelance Pitch · Admin Panel</p>
                    <p className="about">A pitch demo for a café client — an interactive menu with instant, no-code price updates and an admin login. The client passed, but the build is fully functional.</p>
                    <div className="project-btns-wraper">
                        <ButtonSecondary className="view-code-btn" onClick={() => window.open("https://github.com/Mohammedsohail-0")} >View code</ButtonSecondary>
                        <ButtonPrimary className="cta-btn" onClick={() => window.open("https://coffee-crepe.github.io/Demo-Menu/")}  >Live Link</ButtonPrimary>
                    </div>
                </div>
            </div>

        </div>
    );
}




function About() {
    const skills = [
        { name: "Java", icon: javaIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "React", icon: reactIcon },
        { name: "Node.js", icon: nodeIcon },
        { name: "Html", icon: htmlIcon },
        { name: "Css", icon: cssIcon },
        { name: "Github", icon: gitIcon }
    ];

    return (
        <div id="about" className="about-section">

            <div className="section-header">
                <hr />
                <h1>About</h1>
                <hr />
            </div>

            <p className="about-bio">
                I'm a final-year B.Tech student who ended up spending more time
                building things than studying for them. Between freelance work,
                Gainchek, and the occasional hackathon, most of what I know I
                picked up by shipping — not from a syllabus.
            </p>

            <div className="skills-box">
                <div className="skills-header">
                    <hr />
                    <h3>Skills/technologies</h3>
                    <hr />
                </div>
                <div className="skills-row">
                    {skills.map((skill) => (
                        <div className="skill-item" key={skill.name}>
                            <img src={skill.icon} alt={skill.name} />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <p className="chess-line">
                Outside of code, I play a lot of <span className="highlight">chess</span> —
                badly, but with real commitment. Turns out losing gracefully is
                good practice for debugging.
            </p>

            <div className="chess-stats">
                <img src={chessStatsImg} alt="Chess stats — games, wins, draws, losses" />
            </div>

            <div className="chess-graph">
                <img src={chessGraphImg} alt="Chess rating over time" />
            </div>

        </div>
    );
}



const socials = [
    {
        name: "GitHub", url: "https://github.com/Mohammedsohail-0", icon: gitIcon

    },
];

function Contact() {
    return (
        <div id="contact" className="contact-section">

            <div className="section-header">
                <h1>Contact</h1>
                <hr />
            </div>

            <p className="contact-line">
                Open for freelance work and always happy to talk about a project.
                Best way to reach me:
            </p>

            <a className="contact-email" href="mailto:youremail@example.com">
                Mohammedsohail01010@gmail.com
            </a>

            <div className="socials-row">
                {socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="social-link"
                    >
                        <img src={social.icon} alt="" />
                    </a>
                ))}
            </div>

        </div>
    );
}

