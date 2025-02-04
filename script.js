// document.addEventListener('scroll', () => {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('header nav ul li a');
  
//     sections.forEach((section, index) => {
//       const rect = section.getBoundingClientRect();
//       if (rect.top <= 100 && rect.bottom >= 100) {
//         navLinks.forEach(link => link.classList.remove('active'));
//         navLinks[index].classList.add('active');
//       }
//     });
//   });

import React, { useEffect } from "react";
import "./styles.css";
import { FaAws, FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Jan 2024",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Mar 2024",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
  }
];

const Certifications = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav ul li a');
    
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLinks[index].classList.add('active');
        }
      });
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2><FaCertificate /> Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certification-card" key={index}>
              <h3><FaAws /> {cert.title}</h3>
              <p><strong>Issuer:</strong> {cert.issuer}</p>
              <p><strong>Date:</strong> {cert.date}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn">View Certification</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;