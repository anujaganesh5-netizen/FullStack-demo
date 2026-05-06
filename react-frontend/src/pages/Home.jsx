import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Home = () => {
  useEffect(() => {
  
  }, []);

  return (
    <>
     
      <section className="hero">
        <h1 id="welcomeText">Hello User</h1>

        <lord-icon
          className="icon"
          src="https://cdn.lordicon.com/ldpyyqjp.json"
          trigger="loop"
          style={{ width: '50px', height: '200px' }}
        ></lord-icon>

        <h2>WELCOME TO INTERVIEWHUB</h2>

        <video autoPlay muted loop playsInline>
          <source src="/assets/home_video.mp4" type="video/mp4" />
        </video>
      </section>


      <section className="about">
        <div className="about-container">
          <div className="about-image">
            <img
              src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg"
              alt="About InterviewHub"
            />
          </div>

          <div className="about-text">
            <h2>About InterviewHub</h2>
            <p>
              InterviewHub helps students and professionals learn about different
              job roles and practice interview questions to improve their career
              opportunities. Our platform provides career insights, interview
              preparation resources, and job role guidance to help users succeed
              in their professional journey.
            </p>
          </div>
        </div>
      </section>

      
      <section className="jobs">
        <h2>Popular Job Roles</h2>

        <div className="job-grid">
          <div className="job-card">
            <i className="fa-solid fa-chart-line job-icon"></i>
            <h3>Business Analyst</h3>
            <p>Analyze business data and improve company performance.</p>
            <Link to="/roles/business-analyst">View Role</Link>
          </div>

          <div className="job-card">
            <i className="fa-solid fa-compass-drafting job-icon"></i>
            <h3>CAD Drafter</h3>
            <p>Create technical engineering drawings using CAD software.</p>
            <Link to="/roles/cad-drafter">View Role</Link>
          </div>

          <div className="job-card">
            <i className="fa-solid fa-headset job-icon"></i>
            <h3>Customer Care Analyst</h3>
            <p>Support customers and improve service experience.</p>
            <Link to="/roles/customer-care-analyst">View Role</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Platform Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <i className="fa-solid fa-user-tie feature-icon"></i>
            <h3>Interview Preparation</h3>
            <p>Practice role-based interview questions.</p>
          </div>

          <div className="feature-card">
            <i className="fa-solid fa-compass feature-icon"></i>
            <h3>Explore Careers</h3>
            <p>Understand responsibilities of different job roles.</p>
          </div>

          <div className="feature-card">
            <i className="fa-solid fa-brain feature-icon"></i>
            <h3>Skill Development</h3>
            <p>Improve knowledge and prepare for job interviews.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
