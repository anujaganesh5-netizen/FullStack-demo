const params = new URLSearchParams(window.location.search);

const subject_id = params.get("subject");

// Detect backend URL
const API_BASE_URL =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname === ""
    ? "http://127.0.0.1:8000"
    : "https://full-stack-demo-inpi7knvf-anujaganesh5-7118s-projects.vercel.app";

loadQuestions();

async function loadQuestions() {
  const container = document.getElementById("questionsContainer");

  container.innerHTML = "Loading questions...";

  try {
    const response = await fetch(
      `${API_BASE_URL}/subjects/${subject_id}/questions`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await response.json();

    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = "No questions found";
      return;
    }

    data.forEach((q) => {
      const card = document.createElement("div");

      card.classList.add("question-card");

      card.innerHTML = `
        <h3>${q.question}</h3>
        <p>${q.answer}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error(error);
    container.innerHTML = "Error loading questions";
  }
}