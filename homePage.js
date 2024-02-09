document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("heading");
    const gifContainer = document.querySelector(".tenor-gif-embed");

    heading.addEventListener("mouseover", () => {
        gifContainer.style.display = "block";
    });

    heading.addEventListener("mouseout", () => {
        gifContainer.style.display = "none";
    });
});


