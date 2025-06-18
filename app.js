const supabaseUrl = 'https://supabase.com/dashboard/project/gqjygbsbrzzrsxrzylvz'; // remplace par ton URL Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxanlnYnNicnp6cnN4cnp5bHZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNjc0OTgsImV4cCI6MjA2NTg0MzQ5OH0.PMqPYdlA9xRHFNkuswGz5hBVulIRFtm3BudPzitCTN0'; // remplace par ta clé ANON
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

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
