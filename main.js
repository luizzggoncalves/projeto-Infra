document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const checklistItems = document.querySelectorAll(".checklist-link");

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();

        checklistItems.forEach(item => {
            const title = item.querySelector(".checklist-titulo").textContent.toLowerCase();
            const frequencyList = item.querySelector(".checklist-menu").textContent.toLowerCase();

            if (title.includes(searchTerm) || frequencyList.includes(searchTerm)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});