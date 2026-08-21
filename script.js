function askAI() {
  const question = document.getElementById("question").value.trim();
  const response = document.getElementById("response");

  if (question === "") {
    response.innerHTML =
      "<p style='margin-top:15px;'>💕 Please enter a question first.</p>";
    return;
  }

  response.innerHTML = `
    <div style="
      margin-top:15px;
      padding:15px;
      background:#fff0f7;
      border-radius:15px;
    ">
      <strong>🌸 AmandaBiz AI</strong>
      <p style="margin-top:8px;">
        Your request has been received! 🤖✨
      </p>
      <p style="margin-top:5px;">
        The real AI connection will be added next.
      </p>
    </div>
  `;
}

function selectTool(tool) {
  const question = document.getElementById("question");

  question.value = `I want help with the ${tool}.`;
  question.focus();
}
