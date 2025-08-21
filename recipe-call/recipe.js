document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById("itemDropdown");
    const selected = dropdown.querySelector(".dropdown-selected");
    const selectedText = dropdown.querySelector("#selectedText");
    const options = dropdown.querySelectorAll(".dropdown-option");

    // Toggle dropdown open/close
    selected.addEventListener("click", () => {
        dropdown.classList.toggle("open");
    });

    // Option click
    options.forEach(option => {
        option.addEventListener("click", () => {
            const text = option.querySelector("span").innerText;
            const img = option.querySelector("img").src;

            selected.innerHTML = `
        <img src="${img}" style="width:28px; height:28px; border-radius:50%; margin-right:8px;">
        <span>${text}</span>
      `;

            dropdown.classList.remove("open"); // 🔴 Close after select
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
        }
    });
});
