const session = require("express-session");

tableEL = document.getElementById("checkin-table");

async function checkoutHandler(id) {
    const response = await fetch("/api/materials" + "/" + id, {
      method: "put",
      body: JSON.stringify({
        student_id: req.session.student_id,
        available: true,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/dash");
    } else {
        console.log(response)
        alert("check console: err");
    }
  }

tableEL.addEventListener("click", (event) => {
  if (event.target.id) {
    let materialId = event.target.id;
    console.log(materialId, "this is the action");
    checkoutHandler(materialId)
  }
});