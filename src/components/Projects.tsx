import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles/Projects.css";

const projects = [
  { title: "Value Chain Optimization", desc: "Quantified revenue leakage and designed a low-cost MVP unlocking 30Cr in annual profit potential for industrial chemical storage.", tags: "Operations, Profit Maximization" },
  { title: "SaaS GTM Strategy", desc: "Leading market penetration strategies and evaluating structured levers for independent SaaS consulting for early-stage startups.", tags: "GTM, SaaS Strategy" },
  { title: "ROI-Based Prioritization", desc: "Driving leadership alignment through structured ROI-based frameworks to scale high-impact solutions into core products.", tags: "Product Strategy, ROI" },
];

const Projects = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".vibe-card", {
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 70%",
        end: "center 50%",
        scrub: 1,
      },
      y: 150,
      opacity: 0,
      rotationX: 45,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <div className="projects-section section-container" ref={container} id="projects">
      <h2>
        Vibe Coded <span>Projects</span>
      </h2>
      <div className="vibe-grid">
        {projects.map((proj, i) => (
          <div className="vibe-card" key={i}>
            <div className="vibe-card-inner">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <span>{proj.tags}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
