document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  if (!form || !status) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.className = "form-status";
    status.textContent = "";

    const submit = form.querySelector("button[type='submit']");
    const original = submit.textContent;
    submit.disabled = true;
    submit.textContent = "Sending…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "X-Requested-With": "XMLHttpRequest" }
      });
      const payload = await response.json();
      if (!response.ok || !payload.ok) throw new Error(payload.message || "Unable to send enquiry.");
      status.className = "form-status success";
      status.textContent = payload.message || "Thank you. Your enquiry has been sent.";
      form.reset();
    } catch (error) {
      status.className = "form-status error";
      status.textContent = error.message || "We could not send the enquiry. Please email info@mhs-tech.com.pk directly.";
    } finally {
      submit.disabled = false;
      submit.textContent = original;
    }
  });
});
