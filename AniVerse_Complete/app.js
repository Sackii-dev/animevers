
document.addEventListener("DOMContentLoaded", () => {
    const colorInput = document.getElementById("primary-color");
    if (colorInput) {
        colorInput.value = localStorage.getItem("themeColor") || "#8b5cf6";
        colorInput.addEventListener("input", () => {
            document.documentElement.style.setProperty("--tw-prose-body", colorInput.value);
            localStorage.setItem("themeColor", colorInput.value);
        });
    }
});
