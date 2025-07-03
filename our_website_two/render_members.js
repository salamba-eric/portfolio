// Define the team members
const members = [
  {
    name: "Sophia Bennett",
    title: "CTO",
    image: "../resume/image_1.jpg",
    description: "Sophia oversees the technical direction, ensuring cutting-edge solutions and maintaining high standards of quality.",
    link: "",
    specialties: ["Architecture", "Innovation"]
  },

  {
    name: "Ethan Carter",
    title: "CEO",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Zh2-j6GIyy4f8QIM2GONHBrVA5PnEFUeTknWGLbbkE8syMc-t2C3kW90mBaHS9X0U_c3QkSFIjucy_rYrBmiyYH1qEXPhmYZxvpf0dH_Io_iOMriZy4OMSbraQwKsxj8Dod8_NxIlFFrfR_5is4vwiQn4CqA49DNtmtNJsxb0kLdqA80ra9l9zn467o4dKhlMYNER9OO8Hn7e1npIVUdtYGBVIT6lF1YbiMA1iHPayAXPLEP8n6Bp6nZwLnhg3x33y6sUFEkm_g",
    description: "Ethan leads Haki Tech with a vision for innovative software solutions and a commitment to client success.",
    link: "",
    specialties: ["Leadership", "Business Strategy"]
  },

  // Add other members here...
];

function createMemberCard(member) {
  const card = document.createElement("a");
  card.href = member.link;
  card.className = "flex flex-col gap-3 text-center pb-3";

card.innerHTML = `
    <div class="px-4">
      <div
        class="bg-center bg-no-repeat aspect-square bg-cover rounded-full"
        style="background-image: url('${member.image}'); width: 150px; height: 150px; max-width: 150px; max-height: 150px; margin: 0 auto;"
      ></div>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-white text-base font-medium leading-normal">${member.name}</p>
      <p class="text-[#9cabba] text-sm font-normal leading-normal">${member.title}</p>
      <p class="text-[#9cabba] text-sm font-normal leading-normal">${member.description}</p>
    <p class="mt-5">Specialties:</p>
    <div class="flex justfy-center items-center gap-1 flex-wrap mt-1">
      ${member.specialties.map(specialty => `
        <p class ="bg-[#606060] rounded-xl p-2 text-white text-xs font-normal leading-normal">${specialty}</p>
      `).join("")}
    </div>
`;

  return card;
}

function populateMembers() {
  const container = document.getElementById("members-container");
  if (!container) return;

  members.forEach(member => {
    const card = createMemberCard(member);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", populateMembers);
