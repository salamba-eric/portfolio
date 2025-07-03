// Project Data
const projects = [
  {
    name: "E-commerce Platform for Retailer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgZYG9IEM0qsVkSvkSVeKMpFkROUL2U63nXl0T_k7tElFs7R7df9n-LGfacjeLyvhnWcpks4uyY8Xeuv376VlrhAMpFcLamo4l9v9Bqi3LmR56yTU-neP4MkhPBW_vzTQ-BilKvLhRX_BOsmI8jeZ8S-w4ZOTL8B3WZrWvv6GXbNVSny6gFzDi37ynuw9Oe8xsLj1a1FE1KWnLO_YMNvCw81G1zc5sjrES6eioBCnrJjV0OaOhWvaIAoeGUmrCXZ91vV5P-GE_PL8",
    link: "#",
    category: "Web Development",
    tools: ["React", "Node.js", "PostgreSQL"],
    description: "Developed a robust e-commerce platform with product catalog, shopping cart, payment integration, and order management."
  },
  {
    name: "Mobile App for Fitness Tracking",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1nl-nTOm4cT6QSXmep8jS-oBIoqsEX1fU0r_-PW33WVMpnl3OSIe5rul6Kv6C4fpoo-NYldD0TX5VTUHO52qxxcMo-iqB6fQF_oEPWFkXB4Rkhqz7yx-p3vOWiuEg44O5N0kjczK9sh51k9047zGFllncOO7tAsuOT-PLRCy9QsRQhP2_qQqzSsIySkX-rJFOlf_pGxME1Y93piSwOlZB9bgshT_EcumLV2tdlZWrVNw_Fze7wxJnDl3esLwPKSzJTyMtPDcyCmI",
    link: "#",
    category: "Mobile App",
    tools: ["Swift", "Firebase"],
    description: "User-friendly app for tracking fitness activities, including logging, progress, and social sharing."
  },
   {
    name: "Mobile App for Fitness Tracking",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1nl-nTOm4cT6QSXmep8jS-oBIoqsEX1fU0r_-PW33WVMpnl3OSIe5rul6Kv6C4fpoo-NYldD0TX5VTUHO52qxxcMo-iqB6fQF_oEPWFkXB4Rkhqz7yx-p3vOWiuEg44O5N0kjczK9sh51k9047zGFllncOO7tAsuOT-PLRCy9QsRQhP2_qQqzSsIySkX-rJFOlf_pGxME1Y93piSwOlZB9bgshT_EcumLV2tdlZWrVNw_Fze7wxJnDl3esLwPKSzJTyMtPDcyCmI",
    link: "#",
    category: "Mobile App",
    tools: ["Swift", "Firebase"],
    description: "User-friendly app for tracking fitness activities, including logging, progress, and social sharing."
  },
   {
    name: "Mobile App for Fitness Tracking",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1nl-nTOm4cT6QSXmep8jS-oBIoqsEX1fU0r_-PW33WVMpnl3OSIe5rul6Kv6C4fpoo-NYldD0TX5VTUHO52qxxcMo-iqB6fQF_oEPWFkXB4Rkhqz7yx-p3vOWiuEg44O5N0kjczK9sh51k9047zGFllncOO7tAsuOT-PLRCy9QsRQhP2_qQqzSsIySkX-rJFOlf_pGxME1Y93piSwOlZB9bgshT_EcumLV2tdlZWrVNw_Fze7wxJnDl3esLwPKSzJTyMtPDcyCmI",
    link: "#",
    category: "Mobile App",
    tools: ["Swift", "Firebase"],
    description: "User-friendly app for tracking fitness activities, including logging, progress, and social sharing."
  },
  // Add more project entries as needed...
];

// Render Projects
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  projects.forEach(project => {
    const card = document.createElement("a");
    card.href = project.link;
    card.className = "flex flex-col gap-3 pb-3";

    card.innerHTML = `
      <div
      class="w-full bg-center bg-no-repeat bg-cover rounded-lg"
      style="background-image: url('${project.image}'); width: 100%; aspect-ratio: 16/9; min-height: 0; height: 180px; max-height: 180px;"
      ></div>
      <div>
      <p class="text-white text-base font-medium leading-normal">${project.name}</p>
      <p class="text-[#9cabba] text-sm font-normal leading-normal">${project.description}</p>
      </div>
      <p class="text-white text-sm font-medium leading-normal">${project.category}:</p>
      <div class="flex justfy-center items-center gap-1 flex-wrap">
        ${project.tools.map(tool => `
          <p class ="bg-[#606060] rounded-xl p-2 text-white text-xs font-normal leading-normal">${tool}</p>
        `).join("")}
      </div>
    `;
    card.style.maxWidth = "300px";
    card.style.width = "100%";

    container.appendChild(card);
  });
}

// On DOM Load
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderFooter();
});
