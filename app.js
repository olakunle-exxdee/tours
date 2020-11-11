const menu = [
  {
    id: 3,
    realimage: "./image/testimony3.jpg",
    person1: "Peter Sommer",
    person2: "Founder CBS",
    text: `Peter Sommer runs a a highly professional organization. From his brochure to drop off at the airport to fly home his attention to detail and his consideration for his clients is superb. `,
  },
  {
    id: 1,
    realimage: "./image/testimony4.jpg",
    person1: "Gerald Clark ",
    person2: "Football Agent",
    text: `This was a superb tour... beautifully crafted, taking us through the long history of the island and travelling from the arid East to the green West. The accommodation was wonderful and the food/wine experiences truly memorable. `,
  },
  {
    id: 2,
    realimage: "./image/testimony2.jpg",
    person1: "Kenneth Clark",
    person2: "Astronaut",
    text: `My experience, a week-long tour of Athens, was superb. We saw not only the usual tourist sites, but several that were certainly off the beaten track. The visits to the National Archaeological Museum and the Acropolis Museum, as well as several smaller ones, were fascinating.`,
  },
];

const hamburger = document.querySelector(".hamburger");
const section2 = document.querySelector(".section2");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const testimony = document.querySelector(".testimony");
const realimage = document.querySelector(".realimage");
const person1 = document.querySelector(".person1");
const person2 = document.querySelector(".person2");
const texting = document.querySelector(".texting");
let showMenu = false;

window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

hamburger.addEventListener("click", openMenu);

function openMenu() {
  if (!showMenu) {
    section2.classList.add("open");
    showMenu = true;
  } else {
    section2.classList.remove("open");
    showMenu = false;
  }
}

let currentItem = 0;

console.log(menu[currentItem]);
right.addEventListener("click", () => {
  const item = menu[currentItem];
  realimage.src = item.realimage;
  person1.innerHTML = item.person1;
  person2.innerHTML = item.person2;
  texting.innerHTML = item.text;
  currentItem++;
  if (currentItem > menu.length - 1) {
    currentItem = 0;
  }
});
left.addEventListener("click", () => {
  const item = menu[currentItem];
  realimage.src = item.realimage;
  currentItem--;
  if (currentItem < 0) {
    currentItem = menu.length - 1;
  }
});
