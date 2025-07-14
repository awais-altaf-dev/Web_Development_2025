const profiles = [
  { name: "Muhammad Awais Altaf", age: 19, img: "pic.jpg", github: "https://github.com/awaisaltaf5" },
  { name: "Ali Hassan Khan", age: 20, img: "pic2.jpg", github: null },
  { name: "Muhammad Hasnain Altaf", age: 25, img: "pic3.jpg", github: null },
  { name: "Muhammad Moeen Altaf", age: 30, img: "pic4.jpg", github: null }
];

let current = 0;
let revolving = false;

const singleView = document.getElementById("singleView");
const circleView = document.getElementById("circleView");
const profileCard = document.getElementById("profileCard");
const imgEl = document.getElementById("profileImg");
const nameEl = document.getElementById("profileName");
const ageEl = document.getElementById("profileAge");
const githubLink = document.getElementById("githubLink");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  if (!revolving && current < profiles.length - 1) {
    profileCard.style.transform = "rotateY(90deg)";
    setTimeout(() => {
      current++;
      applyProfile(profiles[current]);
      profileCard.style.transform = "rotateY(0deg)";
    }, 350);
  } else if (!revolving) {
    startRevolving();
  }
});

function applyProfile(p) {
  imgEl.src = p.img;
  nameEl.textContent = p.name;
  ageEl.textContent = `Age: ${p.age}`;
  if (p.github) {
    githubLink.href = p.github;
    githubLink.style.display = "block";
  } else {
    githubLink.style.display = "none";
  }
}

function startRevolving() {
  revolving = true;
  singleView.classList.add("hidden");

  circleView.innerHTML = "";
  const R = 200; // radius
  const N = profiles.length;

  profiles.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "circle-card";
    card.innerHTML = `
      <img src="${p.img}"><h2>${p.name}</h2><p>Age: ${p.age}</p>
      ${p.github ? `<a href="${p.github}" target="_blank">GitHub</a>` : ``}
    `;
    const angle = (2 * Math.PI * i) / N;
    card.style.transform = `translate(${R * Math.cos(angle)}px, ${R * Math.sin(angle)}px)`;
    circleView.appendChild(card);
  });

  circleView.classList.remove("hidden");
  circleView.classList.add("revolving");
}
