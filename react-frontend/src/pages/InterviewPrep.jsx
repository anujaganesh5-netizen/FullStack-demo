import React, { useEffect } from 'react';
import '../styles/question.css';

const InterviewPrep = () => {
  useEffect(() => {
    // Note: The logic from question.js needs to be moved to React state eventually.
  }, []);

  const handleOpenQuestions = (id) => {
    if (window.openQuestions) {
      window.openQuestions(id);
    } else {
      console.log('Open questions for ID:', id);
    }
  };

  return (
    <div className="skills-wrapper">
      <h2 className="page-heading">
        Prepare your interview from it
        <lord-icon
          className="icon"
          src="https://cdn.lordicon.com/epzxzayu.json"
          trigger="loop"
          colors="primary:#2e3b55"
          style={{ width: '50px', height: '50px' }}
        ></lord-icon>
      </h2>

      <div className="skill-card frontend">
        <h2>Frontend</h2>

        <ul>
          <li onClick={() => handleOpenQuestions(1)}>
            <i className="fa-brands fa-html5"></i> HTML
          </li>

          <li onClick={() => handleOpenQuestions(2)}>
            <i className="fa-brands fa-css3-alt"></i> CSS
          </li>

          <li onClick={() => handleOpenQuestions(3)}>
            <i className="fa-brands fa-js"></i> JavaScript
          </li>

          <li onClick={() => handleOpenQuestions(4)}>
            <i className="fa-brands fa-react"></i> React.js
          </li>

          <li onClick={() => handleOpenQuestions(5)}>
            <i className="fa-solid fa-cloud"></i> REST API
          </li>

          <li onClick={() => handleOpenQuestions(6)}>
            <i className="fa-solid fa-database"></i> JSON
          </li>
        </ul>
      </div>

      <div className="skill-card backend">
        <h2>Backend</h2>

        <ul>
          <li onClick={() => handleOpenQuestions(7)}>
            <i className="fa-brands fa-python"></i> Python
          </li>

          <li onClick={() => handleOpenQuestions(8)}>
            <i className="fa-solid fa-code"></i> TypeScript
          </li>

          <li onClick={() => handleOpenQuestions(9)}>
            <i className="fa-brands fa-node-js"></i> Node.js
          </li>

          <li onClick={() => handleOpenQuestions(10)}>
            <i className="fa-brands fa-php"></i> PHP
          </li>

          <li onClick={() => handleOpenQuestions(11)}>
            <i className="fa-solid fa-database"></i> SQL
          </li>

          <li onClick={() => handleOpenQuestions(12)}>
            <i className="fa-solid fa-server"></i> MySQL
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InterviewPrep;
