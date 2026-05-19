const params = new URLSearchParams(window.location.search);

const subject_id = params.get("subject");

loadQuestions();

async function loadQuestions() {
  const container = document.getElementById("questionsContainer");

  container.innerHTML = "Loading questions...";

  try {
    const response = await fetch(
      `http://127.0.0.1:8000/subjects/${subject_id}/questions`,
    );

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
    container.innerHTML = "Error loading questions";
  }
}
