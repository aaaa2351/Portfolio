const myProjects = document.querySelector(".myProjects");
const projectList = [
  {
    name: "Cipher",
    imageSrc: "images/cipher.png",
    description: "A premium platform built for learning and growth",
    appType: "Web App",
  },
  {
    name: "The fish spot",
    imageSrc: "images/fishSpot.jpg",
    description: "A modern restaurant website for The Fish Spot.",
    appType: "Website",
  },
  {
    name: "Task Manager",
    imageSrc:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=600&q=80",
    description:
      "A productivity tool designed to track and organize daily workflows.",
    appType: "Web App",
  },
];

const tools = [
  {
    name: "HTML5",
    logo: "images/html.jpg",
  },
  {
    name: "CSS3",
    logo: "images/css.jpg",
  },
  {
    name: "Git",
    logo: "images/git.svg",
  },
  {
    name: "JavaScript",
    logo: "images/js.jpg",
  },
  {
    name: "Blender",
    logo: "images/blender.jpg",
  },
];

const wds = [
  {
    logo: "images/wds/web.svg",
    title: "Web Development",
    description:
      "Modern, responsive and scalable web applications.",
  },
  {
    logo: "images/wds/js.svg",
    title: "Interactive JavaScript",
    description:
      "Adding dynamic behavior, custom logic, and interactive features to websites using vanilla JavaScript.",
  },
  {
    logo: "images/wds/3d.svg",
    title: "3D Modeling & Assets",
    description:
      "Crafting custom 3D models, low-poly assets, and visual elements for digital projects using Blender.",
  },
  {
    logo: "images/wds/design.svg",
    title: "UI/UX Development",
    description:
      "Beautiful, intuitive and user-centered designs.",
  },
];

function createProjects() {
  projectList.forEach((project) => {
    let projectCard = document.createElement("div");
    projectCard.classList.add("pCard");
    projectCard.innerHTML = `
            <img src="${project.imageSrc}" alt="${project.name}">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="btm">
              <span>${project.appType}</span>
              <div class="icon_btm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
    `;
    myProjects.appendChild(projectCard);
  });
}

function createTool() {
  let mainTool = document.querySelector(".tools");
  tools.forEach((tool) => {
    const toolCard = document.createElement("div");
    toolCard.classList.add("toolCard");
    toolCard.innerHTML = `
            <img src="${tool.logo}" alt="${tool.name}">
            <p>${tool.name}</p>
    `;
    mainTool.appendChild(toolCard);
  });
}

function createWds() {
  let mainWds = document.querySelector(".wdss");
  wds.forEach((item) => {
    const wdsCard = document.createElement("div");
    wdsCard.classList.add("wdsCard");
    wdsCard.innerHTML = `
            <img src="${item.logo}" alt="${item.title}">
            <div class="wtxt">
              <h2>${item.title}</h2>
              <p>${item.description}</p>
            </div>
    `;
    mainWds.appendChild(wdsCard);
  });
}

createWds();
createTool();
createProjects();