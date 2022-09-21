async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector("#login-form-email").value.trim();
    const password = document.querySelector("#login-form-password").value.trim();
  
    if (email && password) {
      const response = await fetch("/api/students/login", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  }
    
    document
      .querySelector("#login-form-btn")
      .addEventListener("click", loginFormHandler);