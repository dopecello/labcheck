tableEL = document.getElementById("material-columns");

async function checkoutHandler(id) {
    const response = await fetch("/api/materials" + "/" + id, {
      method: "put",
      body: JSON.stringify({
        student_id: 8,
        available: false,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/dash");
    } else {
        console.log(response);
    }
  }

tableEL.addEventListener("click", (event) => {
  if (event.target.id) {
    let materialId = event.target.id;
    console.log(materialId, "this is the action");
    checkoutHandler(materialId)
  }
});