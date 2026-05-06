import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/job.css';

const Jobs = () => {
  useEffect(() => {
   
  }, []);

  return (
    <main className="main">
      <h2 className="page-heading">
        Your Career Starts Here
        <lord-icon
          src="https://cdn.lordicon.com/uuulnrwh.json"
          className="icon"
          trigger="loop"
          colors="primary:#17171c,secondary:#e67e22,tertiary:#97675d,quaternary:#2e3b55"
          style={{ width: '70px', height: '70px' }}
        ></lord-icon>
      </h2>

      <aside className="sidebar">
        <ul>
          <li>Company</li>
          <select id="companyFilter" className="Dropdown">
            <option value="">~Select the Company~</option>
            <option value="Netflix">Netflix</option>
            <option value="Wanderlog">Wanderlog</option>
            <option value="Plaid">Plaid</option>
            <option value="Support & Onboarding Lead">Support & Onboarding Lead</option>
            <option value="G&A Recruiter">G&A Recruiter</option>
            <option value="Events Lead">Events Lead</option>
            <option value="Executive Assistant">Executive Assistant</option>
            <option value="Research specialist">Research specialist</option>
            <option value="Head of Sales">Head of Sales</option>
            <option value="Video Editor">Video Editor</option>
            <option value="Junior Brand Strategist">Junior Brand Strategist</option>
            <option value="In-House CRA">In-House CRA</option>
            <option value="Customer Care Analyst">Customer Care Analyst</option>
            <option value="CAD Drafter">CAD Drafter</option>
            <option value="UX/UI Designer">UX/UI Designer</option>
            <option value="Business Analyst">Business Analyst</option>
          </select>

          <li>Location</li>
          <select id="locationFilter" className="Dropdown">
            <option value="">~Select the Location~</option>
            <option value="United States">United States</option>
            <option value="San Francisco,CA">San Francisco,CA</option>
            <option value="Los Analyst,CA">Los Analyst,CA</option>
            <option value="Springfield,IL">Springfield,IL</option>
            <option value="East Montpelier,VT">East Montpelier,VT</option>
            <option value="New York,NY">New York,NY</option>
            <option value="Denver,CO">Denver,CO</option>
          </select>

          <li>Experience</li>
          <select id="experienceFilter" className="Dropdown">
            <option value="">~Select your Experience~</option>
            <option>Fresher</option>
            <option>1-2 years</option>
            <option>2-3 years</option>
            <option>3-4 years</option>
            <option>4-5 years</option>
            <option>5-6 years</option>
            <option>above 6 years</option>
          </select>

          <li>Remote</li>
          <select id="modeFilter" className="Dropdown">
            <option value="">~Select the Work Mode~</option>
            <option>Work from office</option>
            <option>Hybrid</option>
            <option>Remote</option>
          </select>

          <button className="submit">Filters</button>
        </ul>
      </aside>


      <section className="content">
        <div className="card">
          <Link to="/roles/netflix">
            <img src="/assets/Netflix.png" alt="img" />
            <h4>Netflix</h4>
            <p>
              Software Engineer (L4)<br />
              Member, Commerce & Games Engineering<br />
              United States<br />
              3-4 years<br />
              Remote<br />
              <small>2 hours ago</small>
            </p>
          </Link>
        </div>

        <div className="card">
          <Link to="/roles/wanderlog">
            <img src="/assets/Wandarlo.png" alt="img" />
            <h4>Wanderlog</h4>
            <p>
              Full-Stack Software Engineer<br />
              United States<br />
              2-3 years<br />
              Remote<br />
              <small>5 hours ago</small>
            </p>
          </Link>
        </div>

        <div className="card">
          <Link to="/roles/plaid">
            <img src="/assets/Plaid (1).png" alt="img" />
            <h4>Plaid</h4>
            <p>
              Software Engineer – Web<br />
              United States<br />
              2-3 years<br />
              Hybrid<br />
              <small>5 hours ago</small>
            </p>
          </Link>
        </div>

        <div className="card">
          <Link to="/roles/support-and-onboarding-lead">
            <img src="/assets/Support&Organiser Lead.png" alt="img" />
            <h4>Support & Onboarding Lead</h4>
            <p>
              Base<br />
              United States<br />
              4-5 years<br />
              Work from office<br />
              <small>2 hours ago</small>
            </p>
          </Link>
        </div>

   
        <div className="card">
          <Link to="/roles/ga-recruiter">
            <img src="/assets/G&A Recruiter.png" alt="img" />
            <h4>G&A Recruiter</h4>
            <p>
              Decagon<br />
              San Francisco,CA<br />
              3-4 years<br />
              Work from office<br />
              <small>4 hours ago</small>
            </p>
          </Link>
        </div>

   
        <div className="card">
          <Link to="/roles/events-lead">
            <img src="/assets/Events Lead.png" alt="img" />
            <h4>Events Lead</h4>
            <p>
              Substack<br />
              Los Angeles,CA<br />
              4-5 years<br />
              Hybrid<br />
              <small>2 hours ago</small>
            </p>
          </Link>
        </div>

      
        <div className="card">
          <Link to="/roles/executive-assistant">
            <img src="/assets/Exective Assitor.png" alt="img" />
            <h4>Executive Assistant</h4>
            <p>
              Wiraa<br />
              United States<br />
              1-2 years<br />
              Remote<br />
              <small>17 minutes ago</small>
            </p>
          </Link>
        </div>

        {/* Research Specialist */}
        <div className="card">
          <Link to="/roles/research-specialist">
            <img src="/assets/Research.png" alt="img" />
            <h4>Research specialist</h4>
            <p>
              Peek (L4)<br />
              United States<br />
              2-3 years<br />
              Remote<br />
              <small>2 hours ago</small>
            </p>
          </Link>
        </div>

        {/* Head of Sales */}
        <div className="card">
          <Link to="/roles/head-of-sales">
            <img src="/assets/Head sales.png" alt="img" />
            <h4>Head of Sales</h4>
            <p>
              eDerm Systems<br />
              Springfield,IL<br />
              5-6 years<br />
              Work from office<br />
              <small>3 hours ago</small>
            </p>
          </Link>
        </div>

        {/* Video Editor */}
        <div className="card">
          <Link to="/roles/video-editor">
            <img src="/assets/Video Editor.png" alt="img" />
            <h4>Video Editor</h4>
            <p>
              Roster<br />
              East Montpelier,VT<br />
              1-2 years<br />
              Hybrid<br />
              <small>3 hours ago</small>
            </p>
          </Link>
        </div>

        {/* Junior Brand Strategist */}
        <div className="card">
          <Link to="/roles/junior-brand-strategist">
            <img src="/assets/Junior.png" alt="img" />
            <h4>Junior Brand Strategist</h4>
            <p>
              the Skimm<br />
              New York,NY<br />
              Fresher<br />
              Hybrid<br />
              <small>4 hours ago</small>
            </p>
          </Link>
        </div>

        {/* In-House CRA */}
        <div className="card">
          <Link to="/roles/in-house-cra">
            <img src="/assets/In house.png" alt="img" />
            <h4>In-House CRA</h4>
            <p>
              Lensa<br />
              United States<br />
              3-4 years<br />
              Remote<br />
              <small>3 hours ago</small>
            </p>
          </Link>
        </div>

        {/* Customer Care Analyst */}
        <div className="card">
          <Link to="/roles/customer-care-analyst">
            <img src="/assets/In house.png" alt="img" />
            <h4>Customer Care Analyst</h4>
            <p>
              Lensa<br />
              United States<br />
              1-2 years<br />
              Remote<br />
              <small>7 hours ago</small>
            </p>
          </Link>
        </div>

        {/* CAD Drafter */}
        <div className="card">
          <Link to="/roles/cad-drafter">
            <img src="/assets/CAD.png" alt="img" />
            <h4>CAD Drafter</h4>
            <p>
              Luster National<br />
              Denver,CO<br />
              2-3 years<br />
              Work from office<br />
              <small>3 hours ago</small>
            </p>
          </Link>
        </div>

        {/* UX/UI Designer */}
        <div className="card">
          <Link to="/roles/ui-designer">
            <img src="/assets/UXUI.png" alt="img" />
            <h4>UX/UI Designer</h4>
            <p>
              MLabs<br />
              United States<br />
              2-3 years<br />
              Remote<br />
              <small>25 minutes ago</small>
            </p>
          </Link>
        </div>

        {/* Business Analyst */}
        <div className="card">
          <Link to="/roles/business-analyst">
            <img src="/assets/Business.png" alt="img" />
            <h4>Business Analyst</h4>
            <p>
              Arvento A<br />
              United States<br />
              3-4 years<br />
              Hybrid<br />
              <small>1 hours ago</small>
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Jobs;
