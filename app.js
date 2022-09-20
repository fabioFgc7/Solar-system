const planets = [
    {
      id: 1,
      img: "./public/img/mercury.jpg",
      name: "MERCURY",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, nobis similique! Reprehenderit!",
      rotation: "0.40 DAYS",
      revolution: "180 DAYS",
      radius: "3.695 KM",
      temp_pro: "200°C",
      link: "https://es.wikipedia.org/wiki/Mercurio_(planeta)",
    },
    {
      id: 2,
      img: "./public/img/venus.jpg",
      name: "VENUS",
      description:
        "Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte.",
      rotation: "0,92 DAYS",
      revolution: "243,187 DAYS",
      radius: "6 051,8 km",
      temp_pro: "463,85 °C",
      link: "https://es.wikipedia.org/wiki/Venus_(planeta)",
    },
    {
      id: 3,
      img: "./public/img/earth.png",
      name: "EARTH",
      description:
        "La Tierra (del latín Terra,17​ deidad romana equivalente a Gea, diosa griega de la feminidad y la fecundidad) es un planeta del sistema solar que gira alrededor de su estrella —el Sol— en la tercera órbita más interna. Es el más denso y el quinto mayor de los ocho planetas del sistema solar. También es el mayor de los cuatro terrestres o rocosos.",
      rotation: "0,99 DAYS",
      revolution: "365,26 DAYS",
      radius: "6.371 KM",
      temp_pro: "16°C",
      link: "https://es.wikipedia.org/wiki/Tierra",
    },
    {
      id: 4,
      img: "./public/img/marte.jpg",
      name: "MARTE",
      description:
        "Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio. Recibió su nombre en homenaje al dios de la guerra de la mitología romana (Ares en la mitología griega), y también es conocido como «el planeta rojo»3​4​ debido a la apariencia rojiza5​ que le confiere el óxido de hierro predominante en su superficie",
      rotation: "24h 37m 22,7s",
      revolution: " 668,6  DAYS",
      radius: "3 389.50 KM",
      temp_pro: "−46 °C",
      link: "https://es.wikipedia.org/wiki/Marte_(planeta)",
    },
    {
      id: 5,
      img: "./public/img/jupiter.png",
      name: "JUPITER",
      description:
        "Júpiter es el planeta con mayor masa del sistema solar: equivale a unas 2,48 veces la suma de las masas de todos los demás planetas juntos. A pesar de ello, no es el planeta más masivo que se conoce: más de un centenar de planetas extrasolares que han sido descubiertos tienen masas similares o superiores a la de Júpiter.",
      rotation: "9h 55m 30s",
      revolution: "398,9 DAYS",
      radius: "	71 492 KM",
      temp_pro: "−121,15 °C",
      link: "https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)",
    },
    {
      id: 6,
      img: "./public/img/saturn.jpg",
      name: "SATURNO",
      description:
        "Saturno es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra. Su nombre proviene del dios romano Saturno. Forma parte de los denominados planetas exteriores o gaseosos. ",
      rotation: "10h 33m 38s ",
      revolution: "378,1 DAYS",
      radius: "58.232 KM",
      temp_pro: "−130,15 °C",
      link: "https://es.wikipedia.org/wiki/Saturno_(planeta)",
    },
    {
      id: 7,
      img: "./public/img/uranu.jpg",
      name: "URANUS",
      description:
        "Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama así en honor de la divinidad griega del cielo Urano (del griego antiguo Οὐρανός), el padre de Crono (Saturno) y el abuelo de Zeus (Júpiter).",
      rotation: "-17h 14m",
      revolution: "30.799,095 DAYS",
      radius: "25 362 KM",
      temp_pro: "−205,2 °C",
      link: "https://es.wikipedia.org/wiki/Urano_(planeta)",
    },
    {
      id: 8,
      img: "./public/img/neptuno.jpg",
      name: "NEPTUNO",
      description:
        "Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones matemáticas. Su nombre fue puesto en honor al dios romano del mar —Neptuno—, y es el cuarto planeta en diámetro y el tercero más grande en masa.",
      rotation: "0,671 DAYS",
      revolution: "60190 DAYS",
      radius: "24 622 KM",
      temp_pro: "-220 °C",
      link: "https://es.wikipedia.org/wiki/Neptuno_(planeta)",
    },
    {
      id: 9,
      img: "./public/img/pluto.jpg",
      name: "PLUTON",
      description:
        "Plutón, designado (134340) Pluto, es un planeta enano del sistema solar situado a continuación de la órbita de Neptuno. Su nombre se debe al dios mitológico romano Plutón (Hades según la mitología griega). En la Asamblea General de la Unión Astronómica Internacional celebrada en Praga el 24 de agosto de 2006 se creó una nueva categoría llamada planeta enano, en la que se incluye a Plutón.",
      rotation: "153 HOURS",
      revolution: "248 a 197 d5,5h ",
      radius: "1 185 KM",
      temp_pro: "-229,1 °C",
      link: "https://es.wikipedia.org/wiki/Plut%C3%B3n_(planeta_enano)",
    },
  ];
  
  // VIEWS
  const imagen = document.getElementById("img");
  const nombrePlaneta = document.getElementById("nombre");
  const description = document.getElementById("description");
  const rotation = document.getElementById("rotation");
  const revolution = document.getElementById("revolution");
  const radius = document.getElementById("radius");
  const tempPro = document.getElementById("temp");
  const link = document.getElementById("link");
  
  // BOTTON PLANETS
  const btnMercury = document.querySelector("#mercury ");
  const venusBtn = document.querySelector("#venus ");
  const tierraBtn = document.querySelector("#tierra ");
  const marteBtn = document.querySelector(" #marte");
  const jupiterBtn = document.querySelector(" #jupiter");
  const saturnBtn = document.querySelector(" #saturno");
  const neptunoBtn = document.querySelector(" #neptuno");
  const uranoBtn = document.querySelector(" #urano");
  const plutonBtn = document.querySelector(" #pluton");
  
  //FUNCTION ADDITEMS
  function addItems(id) {
    const item = planets[id];
    imagen.src = item.img;
    nombrePlaneta.innerHTML = item.name;
    description.innerHTML = item.description;
    rotation.innerHTML = item.rotation;
    revolution.innerHTML = item.revolution;
    radius.innerHTML = item.radius;
    tempPro.innerHTML = item.temp_pro;
    link.href = item.link;
  }
  // console.log(planets[0]);
  const menuCard = document.querySelectorAll("ul li ");
  
  
  // EVENT PLANETS
  btnMercury.addEventListener("click", () => {
    addItems(0);
  });
  venusBtn.addEventListener("click", (e) => {
    addItems(1);
  });
  tierraBtn.addEventListener("click", () => {
    addItems(2);
  });
  marteBtn.addEventListener("click", () => {
    addItems(3);
  });
  jupiterBtn.addEventListener("click", () => {
    addItems(4);
  });
  saturnBtn.addEventListener("click", () => {
    addItems(7);
  });
  uranoBtn.addEventListener("click", () => {
    addItems(6);
  });
  neptunoBtn.addEventListener("click", () => {
    addItems(7);
  });
  plutonBtn.addEventListener("click", () => {
    addItems(8);
  });
  addItems(2);
  
  
  // MENU RESPONSIVE HIDDEN
  const btnPanel = document.querySelector(".btn-panel");
  const btnPanels = document.querySelector(".btn-panels");
  const panels = document.querySelector(".panel");
  const ul = document.querySelector(".ulLi");
  const form = document.querySelector(".main");
  const menu = document.querySelector(".menu");
  
  // BOTTON OPEN
  btnPanel.addEventListener("click", (e) => {
    if (e.target.matches) {
      menu.classList.remove("-translate-x-full");
      btnPanel.classList.add("hidden");
      btnPanels.classList.remove("hidden");
    } else {
      menu.classList.add("-left-full");
      btnPanel.classList.remove("is-active");
    }
  });
  // BOTTON CLOSED
  btnPanels.addEventListener("click", (e) => {
    menu.classList.add("-translate-x-full");
    btnPanels.classList.add("hidden");
    btnPanel.classList.remove("hidden");
  });
  
  // SELECTOR UL
  menuCard.forEach((element) => {
    element.addEventListener("click", () => {
      menu.classList.add("-translate-x-full");
      btnPanels.classList.add("hidden");
      btnPanel.classList.remove("hidden");
    });
  });
  