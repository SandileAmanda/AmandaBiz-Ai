async function askAI() {
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
      <p style="margin-top:8px;">Thinking... 🤖✨</p>
    </div>
  `;

  try {
    const result = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: question
      })
    });

    const data = await result.json();

    if (!result.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    response.innerHTML = `
      <div style="
        margin-top:15px;
        padding:15px;
        background:#fff0f7;
        border-radius:15px;
      ">
        <strong>🌸 AmandaBiz AI</strong>
        <p style="margin-top:8px;">${data.reply}</p>
      </div>
    `;

  } catch (error) {
    console.error(error);

    response.innerHTML = `
      <div style="
        margin-top:15px;
        padding:15px;
        background:#fff0f7;
        border-radius:15px;
      ">
        <strong>🌸 AmandaBiz AI</strong>
        <p style="margin-top:8px;">
          Sorry 💕 AmandaBiz AI couldn't process your request right now.
        </p>
      </div>
    `;
  }
}

function selectTool(tool) {
  const question = document.getElementById("question");

  question.value = `I want help with the ${tool}.`;
  question.focus();
}
