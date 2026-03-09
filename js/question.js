console.log("question.js loaded");

window.loadQuestions = async function(subject_id) {

    console.log("Loading subject:", subject_id);

    try {

        const response = await fetch(`http://127.0.0.1:8000/subjects/${subject_id}/questions`);

        const data = await response.json();

        console.log("API Data:", data);

        const container = document.getElementById("questionsContainer");

        // container.innerHTML = "";
        container.innerHTML = "<h3>Test Rendering</h3>";

        if (!Array.isArray(data) || data.length === 0) {
            container.innerHTML = "<p>No questions found.</p>";
            return;
        }

        data.forEach(q => {

            const question = q.question || q.question_text || "No question";
            const answer = q.answer || q.answer_text || "No answer";

            const card = document.createElement("div");

            card.innerHTML = `
                <div style="
                    background:white;
                    padding:15px;
                    margin:15px 0;
                    border-radius:10px;
                    box-shadow:0 2px 8px rgba(0,0,0,0.1);
                ">
                    <p><strong>${question}</strong></p>
                    <p>${answer}</p>
                </div>
            `;

            container.appendChild(card);

        });

    } catch (error) {

        console.error("Error fetching questions:", error);

    }

};