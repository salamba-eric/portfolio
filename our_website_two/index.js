
// Render Footer
function renderFooter() {
  const footers = document.querySelectorAll("footer");
  footers.forEach(footer => {
    footer.innerHTML = `
        <div class="flex flex-1 flex-col" style="max-width:95vw; margin:0 auto;">
          <p id="contacts" class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center"> Contact Us </p>
          <footer class="flex flex-col gap-6 px-5 py-10 text-center @container border-t border-solid border-t-[#2c3135]">
            <div class="flex flex-wrap justify-center gap-4">
            <a href="#"><div class="text-[#a2abb3]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Z"></path></svg></div></a>
            <a href="#"><div class="text-[#a2abb3]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg></div></a>
            <a href="#"><div class="text-[#a2abb3]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg></div></a>
            </div>
            <p class="text-[#a2abb3] text-base font-normal leading-normal">&copy; 2024 Haki Tech. All rights reserved.</p>
          </footer>
        </div>
        `;
  });
}

function darkModeToggleSwitch(){
  const toggleSwitch = document.getElementById("dark-mode-toggle");
  if (!toggleSwitch) return;

  toggleSwitch.innerHTML = `
    <label class="switch">
      <input checked="true" id="checkbox" type="checkbox" />
      <span class="slider">
        <div class="star star_1"></div>
        <div class="star star_2"></div>
        <div class="star star_3"></div>
        <svg viewBox="0 0 16 16" class="cloud_1 cloud">
          <path
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
            fill="#fff"
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
          ></path>
        </svg>
      </span>
    </label>`
}

function handleThemeToggleLogic() {
  const checkbox = document.getElementById("checkbox");
  const root = document.documentElement;

  if (!checkbox) return;

  // Load saved theme on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.classList.toggle("dark", savedTheme === "dark");
    checkbox.checked = savedTheme === "dark";
  }

  checkbox.addEventListener("change", () => {
    const isDark = checkbox.checked;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}


// On DOM Load
document.addEventListener("DOMContentLoaded", () => {
    renderFooter();
    handleThemeToggleLogic();
    darkModeToggleSwitch();
});
