import React, { useState, useEffect } from "react";
import '../styles/resume.css';

const templates = [
  { img: "/assets/Reseume-1.png" },
  { img: "/assets/Resume2.png" },
  { img: "/assets/Reseume-3.png" },
  { img: "/assets/Resume4.png" },
  { img: "/assets/Reseme5.png" },
  { img: "/assets/Reseume6.png" },
  { img: "/assets/resume7.png" },
  { img: "/assets/reseume8 (2).png" },
];

const ResumePage = () => {
  const [index, setIndex] = useState(0);

  const visibleCards = 4;
  const cardWidth = 284; // 260px width + 24px gap

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    if (index < templates.length - visibleCards) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(templates.length - visibleCards);
    }
  };

  return (
    <div className="resume-page-container" style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: '#eef1f5' }}>

      <div style={{ padding: '40px 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1a202c', maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          Pick one of many world-class templates and build your resume in minutes
        </h1>
      </div>


      <div className="slider-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', maxWidth: '1250px', margin: '0 auto', padding: '0 60px' }}>

        <button
          onClick={prevSlide}
          className="arrow left"
          style={{ position: 'absolute', left: '0', zIndex: '10', fontSize: '2rem', cursor: 'pointer', background: 'white', borderRadius: '50%', width: '50px', height: '50px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
        >
          ❮
        </button>

        <div className="slider-container" style={{ width: '100%', overflow: 'hidden' }}>
          <div
            className="slider"
            style={{
              display: 'flex',
              gap: '24px',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${index * cardWidth}px)`
            }}
          >
            {templates.map((tpl, i) => (
              <div
                key={i}
                className="template-card"
                style={{
                  minWidth: '260px',
                  height: '380px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  flexShrink: '0',
                  transition: 'transform 0.3s'
                }}
              >
                <img
                  src={tpl.img}
                  alt={`template-${i}`}
                  style={{ width: '100%', height: '100%', objectCover: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="arrow right"
          style={{ position: 'absolute', right: '0', zIndex: '10', fontSize: '2rem', cursor: 'pointer', background: 'white', borderRadius: '50%', width: '50px', height: '50px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
        >
          ❯
        </button>
      </div>


      <div className="dots" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', gap: '10px', paddingBottom: '60px' }}>
        {Array.from({ length: templates.length - visibleCards + 1 }).map(
          (_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`dot ${i === index ? "active" : ""}`}
              style={{
                width: i === index ? '25px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: i === index ? '#e67e22' : '#cbd5e0',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ResumePage;