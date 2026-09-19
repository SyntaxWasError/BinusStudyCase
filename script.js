"use strict";

/* =========================================================
   USER INPUT
   Edit data anggota hanya di bagian ini.
   ========================================================= */

const members = [
  {
    name: "Adiarta",
    role: "Vibe Coder & Web Designer",
    image: "assets/anggota_1.jpg",
    description:
      "Saya adalah atlet renang yang juga senang belajar programming. Saya menggabungkan disiplin dari olahraga dengan kreativitas untuk membangun website yang menarik, rapi, dan fungsional.",
    skills: ["C", "HTML", "CSS", "Web Design"],
  },
  {
    name: "Frangky Kusuma",
    role: "Frontend Developer",
    image: "assets/anggota_2.png",
    description:
      "Saya berfokus mengembangkan antarmuka web yang responsif, interaktif, dan mudah digunakan. Saya senang mengubah ide dan desain menjadi pengalaman digital yang nyaman bagi pengguna.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Nyoman Keindiva",
    role: "Backend Developer",
    image: "assets/anggota_3.png",
    description:
      "Saya berfokus membangun logika aplikasi, API, dan pengelolaan data yang terstruktur. Saya senang memastikan sistem di balik layar berjalan stabil, efisien, dan mudah dikembangkan.",
    skills: ["Backend Development", "API", "Database"],
  },
];

const STORAGE_KEYS = {
  theme: "team-profile-theme",
  likes: "team-profile-likes",
};

function getRequiredElement(selector) {
  const element = document.querySelector(selector);

  if (!element) {
    throw new Error(`Elemen HTML tidak ditemukan: ${selector}`);
  }

  return element;
}

function loadLikeCounts() {
  const emptyCounts = Array(members.length).fill(0);

  try {
    const savedCounts = JSON.parse(localStorage.getItem(STORAGE_KEYS.likes));

    if (!Array.isArray(savedCounts)) {
      return emptyCounts;
    }

    return emptyCounts.map((_, index) => {
      const count = Number(savedCounts[index]);
      return Number.isInteger(count) && count >= 0 ? count : 0;
    });
  } catch {
    return emptyCounts;
  }
}

function initializeApp() {
  const memberLinks = [...document.querySelectorAll(".member-link")];
  const userName = getRequiredElement("#user-name");
  const userRole = getRequiredElement("#user-role");
  const avatar = getRequiredElement(".avatar");
  const aboutText = getRequiredElement(".about p");
  const skillList = getRequiredElement("#skill-list");
  const themeToggleButton = getRequiredElement("#theme-toggle");
  const counterButton = getRequiredElement("#counter-btn");
  const counterText = getRequiredElement("#counter");

  let activeMemberIndex = 0;
  const likeCounts = loadLikeCounts();

  function renderSkills(skills) {
    skillList.replaceChildren();

    skills.forEach((skill) => {
      const listItem = document.createElement("li");
      listItem.textContent = skill;
      skillList.append(listItem);
    });
  }

  function renderMember(memberIndex) {
    const member = members[memberIndex];

    if (!member) {
      console.warn(`Anggota dengan index ${memberIndex} tidak tersedia.`);
      return;
    }

    activeMemberIndex = memberIndex;
    userName.textContent = member.name;
    userRole.textContent = member.role;
    avatar.src = member.image;
    avatar.alt = `Foto profil ${member.name}`;
    aboutText.textContent = member.description;
    counterText.textContent = String(likeCounts[memberIndex]);
    renderSkills(member.skills);

    memberLinks.forEach((link, index) => {
      const isActive = index === memberIndex;
      link.classList.toggle("active", isActive);
      link.setAttribute("aria-pressed", String(isActive));
    });
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark-mode", isDark);
    themeToggleButton.textContent = isDark
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
    themeToggleButton.setAttribute("aria-pressed", String(isDark));
  }

  memberLinks.forEach((link, fallbackIndex) => {
    link.addEventListener("click", () => {
      const requestedIndex = Number(link.dataset.member ?? fallbackIndex);

      if (!Number.isInteger(requestedIndex)) {
        console.warn("Atribut data-member harus berisi angka.");
        return;
      }

      renderMember(requestedIndex);
    });
  });

  themeToggleButton.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-mode")
      ? "light"
      : "dark";

    localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
    applyTheme(nextTheme);
  });

  counterButton.addEventListener("click", () => {
    likeCounts[activeMemberIndex] += 1;
    counterText.textContent = String(likeCounts[activeMemberIndex]);
    localStorage.setItem(STORAGE_KEYS.likes, JSON.stringify(likeCounts));
  });

  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  applyTheme(savedTheme ?? preferredTheme);
  renderMember(0);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
