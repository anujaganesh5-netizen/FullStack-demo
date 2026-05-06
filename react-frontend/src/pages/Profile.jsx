import React, { useState, useEffect } from 'react';
import '../styles/profile.css';

const Profile = () => {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'User Name',
    bio: 'Your bio',
    location: 'Location',
    company: 'Company',
    education1: 'Add education',
    skills: 'Add skills',
    experience: 'Add experience'
  });

  const toggleEditForm = () => {
    setIsEditFormOpen(!isEditFormOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const saveProfile = () => {
    toggleEditForm();
  };

  return (
    <div className="profile-page" style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', paddingTop: '100px' }}>
      <section className="profile-card">
        <div className="cover">
          <img src="/assets/Background_profile.png" alt="Cover" />
        </div>

        <div className="profile-info">
          <div className="profile-text">
            <h1 id="profileName">{profileData.name}</h1>
            <p className="text" id="profileBio">{profileData.bio}</p>
            <p className="location" id="profileLocation">
              {profileData.location}
            </p>
          </div>

          <div className="company">
            <p id="profileCompany">{profileData.company}</p>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <h2>Education</h2>
        <div className="add-link">
          <p id="education1">{profileData.education1}</p>
        </div>
      </section>

      <section className="section skills-section">
        <h2>Skills</h2>
        <div className="add-link">
          <p id="skills">{profileData.skills}</p>
        </div>
      </section>

      <section className="section experience-section">
        <h2>Experience</h2>
        <div className="add-link">
          <p id="experience">{profileData.experience}</p>
        </div>
      </section>

      <div className="edit-action" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <button id="editBtn" onClick={toggleEditForm} style={{ margin: '0' }}>
          Edit Profile
        </button>
      </div>

      <div id="editForm" className={`edit-form ${isEditFormOpen ? 'active' : ''}`} style={{ display: isEditFormOpen ? 'flex' : 'none' }}>
        <div className="form-box">
          <span id="closeForm" className="close-btn" onClick={toggleEditForm}>
            &times;
          </span>

          <h2>Edit Profile</h2>
          <br />

          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={profileData.name} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Bio</label>
            <input type="text" name="bio" value={profileData.bio} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input type="text" name="location" value={profileData.location} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Company</label>
            <input type="text" name="company" value={profileData.company} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Education</label>
            <input type="text" name="education1" value={profileData.education1} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Skills</label>
            <input type="text" name="skills" value={profileData.skills} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Experience</label>
            <input type="text" name="experience" value={profileData.experience} onChange={handleInputChange} />
          </div>

          <button id="saveBtn" onClick={saveProfile}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
