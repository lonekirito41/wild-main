let animals = [
  { name: "Asian Elephant", category: "Mammal", status: "Endangered", location: "Periyar", season: "Monsoon", description: "A social giant of forest edges, wetlands, and grasslands.", image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=80" },
  { name: "Bengal Tiger", category: "Mammal", status: "Endangered", location: "Wayanad", season: "Winter", description: "A powerful apex predator that moves silently through dense cover.", image: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&w=900&q=80" },
  { name: "Indian Leopard", category: "Mammal", status: "Vulnerable", location: "Silent Valley", season: "Summer", description: "An adaptable spotted cat often seen near rocky forest corridors.", image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=900&q=80" },
  { name: "Sambar Deer", category: "Mammal", status: "Vulnerable", location: "Periyar", season: "Monsoon", description: "A large forest deer with a deep alarm call and twilight habits.", image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=900&q=80" },
  { name: "Spotted Deer", category: "Mammal", status: "Least Concern", location: "Wayanad", season: "Spring", description: "Graceful herds with white-flecked coats that shine in broken light.", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/A_chital_stag_1.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original" },
  { name: "Indian Gaur", category: "Mammal", status: "Vulnerable", location: "Silent Valley", season: "Monsoon", description: "A muscular wild bovine with pale stockings and a high ridgeback.", image: "https://t3.ftcdn.net/jpg/03/88/25/88/360_F_388258874_nHzvnXwqV0EaJQb0vBbJzl5Eq393YrsC.jpg" },
  { name: "Malabar Giant Squirrel", category: "Mammal", status: "Least Concern", location: "Thattekad", season: "Monsoon", description: "A vivid canopy acrobat with rust, cream, and black fur.", image: "https://images.unsplash.com/photo-1507666405895-422eee7d517f?auto=format&fit=crop&w=900&q=80" },
  { name: "Indian Peafowl", category: "Bird", status: "Least Concern", location: "Periyar", season: "Spring", description: "A radiant bird known for courtship displays and ringing calls.", image: "https://p2.piqsels.com/preview/271/444/951/peacock-bird-plumage-pheasant.jpg", imagePosition: "center 35%" },
  { name: "Great Hornbill", category: "Bird", status: "Vulnerable", location: "Thattekad", season: "Summer", description: "A huge forest bird with a golden casque and heavy wingbeats.", image: "https://media.istockphoto.com/id/1356304155/photo/the-great-hornbill-also-known-as-the-concave-casqued-hornbill-great-indian-hornbill-or-great.jpg?s=612x612&w=0&k=20&c=8Fw2EZSOVp6fdEnp6JnExC_kTeWAkrXpHd154w47Uuo=" },
  { name: "King Cobra", category: "Reptile", status: "Vulnerable", location: "Eravikulam", season: "Monsoon", description: "A long, alert forest serpent and one of the world's most iconic reptiles.", image: "https://www.worldatlas.com/r/w768/upload/50/54/3a/shutterstock-2653816315-s3cdn.jpg", imagePosition: "center 28%" }
];

let places = [
  { name: "Periyar", habitat: "Lake forest and wet evergreen edges", encounters: 39, image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80" },
  { name: "Wayanad", habitat: "Moist deciduous forest corridors", encounters: 27, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80" },
  { name: "Silent Valley", habitat: "Rainforest, streams, and canopy trails", encounters: 21, image: "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?auto=format&fit=crop&w=1000&q=80" },
  { name: "Thattekad", habitat: "Riparian bird habitat", encounters: 18, image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1000&q=80" },
  { name: "Eravikulam", habitat: "High grassland and shola forest", encounters: 14, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80" }
];

let encounters = [
  { id: "asian-elephant-periyar-2026-09-19", animal: "Asian Elephant", location: "Periyar", date: "2026-09-19", labelDate: "19 September 2026", time: "6:42 PM", season: "Monsoon", image: animals[0].image, observation: "A small herd crossed the damp teak path near the lake edge, moving calmly after evening rain." },
  { id: "sambar-deer-wayanad-2026-08-12", animal: "Sambar Deer", location: "Wayanad", date: "2026-08-12", labelDate: "12 August 2026", time: "7:15 AM", season: "Monsoon", image: animals[3].image, observation: "A lone stag paused at the bamboo edge before slipping back into the shaded Wayanad corridor." },
  { id: "indian-gaur-silent-valley-2026-07-02", animal: "Indian Gaur", location: "Silent Valley", date: "2026-07-02", labelDate: "02 July 2026", time: "5:30 PM", season: "Monsoon", image: animals[5].image, observation: "A heavy-shouldered gaur grazed near a wet clearing while mist gathered under the rainforest canopy." },
  { id: "bengal-tiger-wayanad-2026-01-24", animal: "Bengal Tiger", location: "Wayanad", date: "2026-01-24", labelDate: "24 January 2026", time: "6:10 AM", season: "Winter", image: animals[1].image, observation: "Fresh pugmarks and a brief striped flash marked a winter patrol route beside the forest track." },
  { id: "indian-peafowl-periyar-2026-03-15", animal: "Indian Peafowl", location: "Periyar", date: "2026-03-15", labelDate: "15 March 2026", time: "8:05 AM", season: "Spring", image: animals[7].image, observation: "A peafowl crossed the open lawn in bright morning light, tail train dragging through short grass." },
  { id: "king-cobra-eravikulam-2026-06-08", animal: "King Cobra", location: "Eravikulam", date: "2026-06-08", labelDate: "08 June 2026", time: "4:20 PM", season: "Summer", image: animals[9].image, observation: "The cobra lifted its hood near a warm trail margin before easing into cover away from the path." }
];

const KING_COBRA_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/King_Cobra_%28Ophiophagus_hannah%29_hunting_Sungei_Buloh_Wetland_Reserve_%28Singapore%2C_May_27%2C_2023%29.jpg/960px-King_Cobra_%28Ophiophagus_hannah%29_hunting_Sungei_Buloh_Wetland_Reserve_%28Singapore%2C_May_27%2C_2023%29.jpg";
const KING_COBRA_IMAGE_SOURCE = "https://commons.wikimedia.org/wiki/File:King_Cobra_(Ophiophagus_hannah)_hunting_Sungei_Buloh_Wetland_Reserve_(Singapore,_May_27,_2023).jpg";

const mapTargets = {
  Periyar: "Periyar Tiger Reserve, Thekkady, Kerala, India",
  Wayanad: "Wayanad Wildlife Sanctuary, Kerala, India",
  "Silent Valley": "Silent Valley National Park, Kerala, India",
  Thattekad: "Thattekkad Bird Sanctuary, Kerala, India",
  Eravikulam: "Eravikulam National Park, Kerala, India"
};

applySavedTheme();

const API_BASE = window.WILDLIFE_API_BASE || (location.port === "8080" ? "" : "http://localhost:8080");
let backendReady = false;
let currentAccount = null;
let myEncounters = [];
let myEncountersError = null;

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}/api${path}`, {
    credentials: "include",
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers || {}) }
  });
  const result = response.status === 204 ? null : await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.message || result.detail || "The request could not be completed.");
  return result;
}

async function loadBackendData() {
  try {
    const [species, locations] = await Promise.all([apiRequest("/animals"), apiRequest("/locations")]);
    animals = species;
    places = locations.map(place => ({ ...place, encounters: 0 }));
    places.forEach(place => { mapTargets[place.name] = place.mapQuery; });
    backendReady = true;
    try {
      currentAccount = await apiRequest("/auth/me");
    } catch (_) {
      currentAccount = null;
    }
    try {
      encounters = await apiRequest("/observations");
      places.forEach(place => { place.encounters = encounters.filter(item => item.location === place.name).length; });
    } catch (_) { encounters = []; }
  } catch (_) {
    backendReady = false;
    encounters = [];
  }
  if (!backendReady) {
    const notice = document.createElement("p");
    notice.className = "backend-notice";
    notice.textContent = "Wildlife data is temporarily unavailable. Refresh the page in a moment.";
    notice.setAttribute("role", "status");
    document.body.prepend(notice);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadBackendData();
  buildNavigation();
  setActiveNavigation();
  initThemeToggle();
  initAuthModal();
  initCommonDateTime();

  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "wildlife") initWildlife();
  if (page === "animal") initAnimalGuide();
  if (page === "places") initPlaces();
  if (page === "place") initPlaceGuide();
  if (page === "animal-map") initMap();
  if (page === "seasons") initSeasons();
  if (page === "identifier") initIdentifier();
  if (page === "my-wildlife") initMyWildlife();
  if (page === "encounter") initEncounterForm();
  if (page === "encounter-details") initEncounterDetails();
  if (page === "insights") initInsights();
  initReveal();
  initCounters();
});

function buildNavigation() {
  const emptyHeader = document.querySelector(".site-header:empty");
  if (!emptyHeader) return;
  emptyHeader.innerHTML = `
    <nav class="nav-shell">
      <a class="logo" href="index.html"><span>🐾</span> Wild Life Seasonal Tracker</a>
      <button class="menu-toggle" aria-label="Open navigation"><span></span><span></span><span></span></button>
      <div class="nav-links">
        <a href="index.html" data-nav="home">Home</a>
        <a href="wildlife.html" data-nav="wildlife">Wildlife</a>
        <a href="places.html" data-nav="places">Places</a>
        <a href="seasons.html" data-nav="seasons">Seasons</a>
        <a href="identifier.html" data-nav="identifier">Identifier</a>
        <a href="my-wildlife.html" data-nav="my-wildlife">My Wildlife</a>
        <a href="insights.html" data-nav="insights">Insights</a>
        <button class="theme-toggle" type="button" aria-label="Switch to dark mode" title="Switch theme"><span class="theme-icon">☾</span></button>
        <a class="btn btn-primary nav-cta" href="encounter.html">+ Record Encounter</a>
      </div>
      <div class="account-menu">
        <button class="account-button" type="button" aria-label="Open account menu" aria-expanded="false"><span></span></button>
        <div class="account-panel">
          <strong id="accountName">Guest</strong>
          <p id="accountEmail">No email</p>
          <div class="account-auth-actions">
            <button class="btn btn-light auth-trigger" type="button" data-auth-mode="login">Login</button>
            <button class="btn btn-primary auth-trigger" type="button" data-auth-mode="register">Register</button>
          </div>
          <button class="btn btn-light auth-logout" type="button">Logout</button>
        </div>
      </div>
    </nav>`;
}

function setActiveNavigation() {
  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach(link => {
    if (link.dataset.nav === page) link.classList.add("active");
  });
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) toggle.addEventListener("click", () => links.classList.toggle("open"));
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("wildlife-theme") || "light";
  document.documentElement.dataset.theme = savedTheme;
}

function initThemeToggle() {
  const button = document.querySelector(".theme-toggle");
  const icon = document.querySelector(".theme-icon");
  if (!button || !icon) return;

  const sync = () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    icon.textContent = isDark ? "☀" : "☾";
    button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  };

  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("wildlife-theme", nextTheme);
    sync();
  });

  sync();
}

function initAuthModal() {
  if (!document.getElementById("authModal")) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="auth-modal" id="authModal" aria-hidden="true">
        <div class="auth-card" role="dialog" aria-modal="true" aria-labelledby="authTitle">
          <button class="auth-close" type="button" aria-label="Close login form">×</button>
          <div class="auth-illustration" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div class="auth-tabs">
            <button class="active" type="button" data-auth-mode="login">Login</button>
            <button type="button" data-auth-mode="register">Register</button>
          </div>
          <form id="authForm" class="auth-form">
            <p class="eyebrow" id="authEyebrow">Welcome Back</p>
            <h2 id="authTitle">Login</h2>
            <label>Email<input id="authEmail" type="email" autocomplete="email" placeholder="you@example.com" required></label>
            <label>Username<input id="authUsername" type="text" autocomplete="username" placeholder="Enter username" required></label>
            <label>Password
              <div class="password-field">
                <input id="authPassword" type="password" autocomplete="current-password" placeholder="Enter password" required>
                <button class="password-toggle" type="button" aria-label="Show password">Show</button>
              </div>
            </label>
            <button class="btn btn-primary" id="authSubmit" type="submit">Login</button>
            <p class="auth-message" id="authMessage" aria-live="polite"></p>
          </form>
        </div>
      </div>`);
  }

  const modal = document.getElementById("authModal");
  const form = document.getElementById("authForm");
  const title = document.getElementById("authTitle");
  const eyebrow = document.getElementById("authEyebrow");
  const password = document.getElementById("authPassword");
  const submit = document.getElementById("authSubmit");
  const message = document.getElementById("authMessage");
  const emailInput = document.getElementById("authEmail");
  const usernameInput = document.getElementById("authUsername");
  const accountMenu = document.querySelector(".account-menu");
  const accountButton = document.querySelector(".account-button");
  const accountName = document.getElementById("accountName");
  const accountEmail = document.getElementById("accountEmail");
  const accountAuthActions = document.querySelector(".account-auth-actions");
  const logoutButton = document.querySelector(".auth-logout");
  const passwordToggle = document.querySelector(".password-toggle");
  const api = async (path, options = {}) => {
    return apiRequest(`/auth${path}`, options);
  };
  const closeAccountMenu = () => {
    if (!accountMenu || !accountButton) return;
    accountMenu.classList.remove("open");
    accountButton.setAttribute("aria-expanded", "false");
  };
  let mode = "login";

  const syncAuthState = user => {
    currentAccount = user || null;
    const activeUser = user?.username;
    document.querySelectorAll(".auth-trigger").forEach(button => {
      button.hidden = Boolean(activeUser);
    });
    if (accountAuthActions) accountAuthActions.hidden = Boolean(activeUser);
    if (logoutButton) logoutButton.hidden = !activeUser;
    if (accountName) accountName.textContent = activeUser || "Guest";
    if (accountEmail) accountEmail.textContent = user?.email || "Sign in or create an account";
    if (!activeUser) closeAccountMenu();
  };

  const setPasswordVisible = visible => {
    password.type = visible ? "text" : "password";
    if (passwordToggle) {
      passwordToggle.textContent = visible ? "Hide" : "Show";
      passwordToggle.setAttribute("aria-label", visible ? "Hide password" : "Show password");
    }
  };

  const setMode = nextMode => {
    mode = nextMode;
    const isRegister = mode === "register";
    title.textContent = isRegister ? "Create Account" : "Login";
    eyebrow.textContent = isRegister ? "Start Tracking" : "Welcome Back";
    password.autocomplete = isRegister ? "new-password" : "current-password";
    usernameInput.required = true;
    usernameInput.placeholder = isRegister ? "Choose username" : "Enter username";
    submit.textContent = isRegister ? "Register" : "Login";
    message.textContent = "";
    message.classList.remove("error");
    form.reset();
    setPasswordVisible(false);
    document.querySelectorAll("[data-auth-mode]").forEach(button => {
      button.classList.toggle("active", button.dataset.authMode === mode && button.closest(".auth-tabs"));
    });
  };

  const openModal = nextMode => {
    setMode(nextMode);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    emailInput.focus();
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  document.querySelectorAll(".auth-trigger").forEach(button => {
    button.addEventListener("click", () => {
      closeAccountMenu();
      openModal(button.dataset.authMode);
    });
  });
  document.querySelectorAll(".auth-tabs button").forEach(button => {
    button.addEventListener("click", () => setMode(button.dataset.authMode));
  });
  document.querySelector(".auth-close").addEventListener("click", closeModal);
  if (passwordToggle) {
    passwordToggle.addEventListener("click", () => setPasswordVisible(password.type === "password"));
  }
  if (accountButton && accountMenu) {
    accountButton.addEventListener("click", event => {
      event.stopPropagation();
      const isOpen = accountMenu.classList.toggle("open");
      accountButton.setAttribute("aria-expanded", String(isOpen));
    });
  }
  if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
      try { await api("/logout", { method: "POST" }); } catch (_) { /* Clear the local view even if the server is unreachable. */ }
      closeAccountMenu();
      syncAuthState(null);
      window.location.reload();
    });
  }
  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
    if (event.key === "Escape") closeAccountMenu();
  });
  document.addEventListener("click", event => {
    if (accountMenu && !accountMenu.contains(event.target)) closeAccountMenu();
  });
  form.addEventListener("submit", async event => {
    event.preventDefault();
    const email = emailInput.value.trim().toLowerCase();
    const username = usernameInput.value.trim();
    const passwordValue = password.value;

    if (!emailInput.checkValidity()) {
      message.textContent = "Enter a valid email address.";
      message.classList.add("error");
      return;
    }
    if (username.length < 3) {
      message.textContent = "Username needs at least 3 characters.";
      message.classList.add("error");
      return;
    }
    if (passwordValue.length < 8) {
      message.textContent = "Password needs at least 8 characters.";
      message.classList.add("error");
      return;
    }

    submit.disabled = true;
    message.textContent = "Connecting securely…";
    try {
      const user = await api(mode === "register" ? "/register" : "/login", {
        method: "POST",
        body: JSON.stringify({ email, username, password: passwordValue })
      });
      message.textContent = mode === "register" ? `Account created for ${user.username}.` : `Welcome back, ${user.username}.`;
      message.classList.remove("error");
      form.classList.remove("pulse");
      requestAnimationFrame(() => form.classList.add("pulse"));
      syncAuthState(user);
      try {
        encounters = await apiRequest("/observations");
        places.forEach(place => { place.encounters = encounters.filter(item => item.location === place.name).length; });
      } catch (_) { encounters = []; }
      setTimeout(() => window.location.reload(), 650);
    } catch (error) {
      message.textContent = error.message;
      message.classList.add("error");
    } finally {
      submit.disabled = false;
    }
  });
  syncAuthState(currentAccount);
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function animateInserted(root) {
  const items = root.querySelectorAll(".reveal");
  items.forEach((item, index) => {
    item.classList.remove("visible");
    item.style.setProperty("--reveal-delay", `${Math.min(index, 7) * 55}ms`);
  });
  requestAnimationFrame(() => {
    items.forEach(item => item.classList.add("visible"));
  });
}

function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      let value = 0;
      const step = Math.max(1, Math.ceil(target / 34));
      const tick = () => {
        value = Math.min(target, value + step);
        el.textContent = value;
        if (value < target) requestAnimationFrame(tick);
      };
      tick();
      observer.unobserve(el);
    });
  });
  counters.forEach(counter => observer.observe(counter));
}

function initCommonDateTime() {
  const dateEl = document.querySelector("[data-current-date]");
  const timeEl = document.querySelector("[data-current-time]");
  if (dateEl) dateEl.textContent = formatDate(new Date());
  if (timeEl) {
    const update = () => timeEl.textContent = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit", second: "2-digit" });
    update();
    setInterval(update, 1000);
  }
}

function initHome() {
  const latest = encounters[0];
  const recentAnimal = document.getElementById("recentEncounterAnimal");
  const recentLocation = document.getElementById("recentEncounterLocation");
  if (recentAnimal && recentLocation) {
    recentAnimal.textContent = latest?.animal || "No observations yet";
    recentLocation.textContent = latest ? latest.location : "Record the first wildlife encounter.";
    document.getElementById("recentEncounterDate").textContent = latest?.labelDate || "";
    document.getElementById("recentEncounterTime").textContent = latest?.time || "";
    document.getElementById("recentEncounterSeason").textContent = latest?.season || "";
    document.getElementById("recentEncounterLink").href = latest ? `encounter-details.html?encounter=${encodeURIComponent(latest.id)}` : "encounter.html";
    if (latest) {
      document.getElementById("recentEncounterImage").src = latest.image;
      document.getElementById("recentEncounterImage").alt = latest.animal;
    }
  }
  const stats = [
    ["🐾", latest?.animal || "—", "Latest Observed Animal"],
    ["📍", latest?.location || "—", "Latest Observation Location"],
    ["🌦️", getSeason(new Date()), "Current Season"],
    ["🗒️", String(encounters.length), "Shared Encounters"],
    ["🐾", String(encounters.reduce((sum,item)=>sum+item.count,0)), "Individual Animals Observed"],
    ["📅", `<span data-current-date>${formatDate(new Date())}</span>`, "Today's Date"],
    ["🕐", `<span data-current-time></span>`, "Current Time"]
  ];
  const homeStats = document.getElementById("homeStats");
  const featuredAnimals = document.getElementById("featuredAnimals");
  homeStats.innerHTML = stats.map(([icon, value, label]) => `<article class="stat-card reveal"><span class="icon">${icon}</span><strong>${value}</strong><span>${label}</span></article>`).join("");
  initCommonDateTime();
  featuredAnimals.innerHTML = animals.slice(0, 4).map(animalCard).join("");
  animateInserted(homeStats);
  animateInserted(featuredAnimals);
}

function initWildlife() {
  const grid = document.getElementById("wildlifeGrid");
  renderCommunityPosts();
  const search = document.getElementById("wildlifeSearch");
  const buttons = document.querySelectorAll("#categoryFilters .chip");
  let active = "All";

  const render = () => {
    const term = search.value.toLowerCase();
    const filtered = animals.filter(animal => {
      const matchesCategory = active === "All" || animal.category === active;
      const matchesSearch = animal.name.toLowerCase().includes(term) || animal.description.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
    grid.innerHTML = filtered.map(animalCard).join("") || `<p class="empty-state">No wildlife matches that search.</p>`;
    animateInserted(grid);
  };

  search.addEventListener("input", render);
  buttons.forEach(button => button.addEventListener("click", () => {
    buttons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    active = button.dataset.category;
    render();
  }));
  render();
}

function renderCommunityPosts() {
  const grid = document.getElementById("communityEncounterGrid");
  if (!grid) return;
  grid.replaceChildren();

  if (!encounters.length) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = "No wildlife posts have been recorded yet.";
    grid.append(emptyState);
    return;
  }

  encounters.forEach(encounter => {
    const card = document.createElement("article");
    card.className = "encounter-card reveal";

    const body = document.createElement("div");
    body.className = "card-body";

    const animal = document.createElement("h3");
    animal.textContent = encounter.animal;

    const postedBy = document.createElement("p");
    postedBy.textContent = `Posted by ${encounter.ownerName || "Wildlife observer"}`;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const guide = document.createElement("a");
    guide.className = "btn btn-primary";
    guide.href = `animal.html?animal=${encodeURIComponent(encounter.animal)}`;
    guide.textContent = "View Animal Guide";

    actions.append(guide);
    body.append(animal, postedBy, actions);
    card.append(body);
    grid.append(card);
  });

  animateInserted(grid);
}

function animalCard(animal) {
  const guideUrl = `animal.html?animal=${encodeURIComponent(animal.name)}`;
  return `
    <article class="animal-card reveal" data-category="${animal.category}">
      <div class="image-frame"><img src="${animal.name === "King Cobra" ? KING_COBRA_IMAGE : animal.image}" alt="${animal.name}" style="object-position:${animal.imagePosition || "center"}" onerror="this.style.display='none'">${kingCobraCreditMarkup(animal.name)}</div>
      <div class="card-body">
        <h3>${animal.name}</h3>
        <p>${animal.category}</p>
        <p>${animal.description}</p>
        <div class="card-actions">
          <span class="status-pill ${animal.status === "Endangered" ? "endangered" : ""}">${animal.status}</span>
          <a class="btn btn-primary" href="${guideUrl}">View Guide</a>
        </div>
      </div>
    </article>`;
}

function kingCobraCreditMarkup(animalName) {
  if (animalName !== "King Cobra") return "";
  return `<a class="image-credit" href="${KING_COBRA_IMAGE_SOURCE}" target="_blank" rel="noopener">Photo: Jason Quinn · CC BY-SA 4.0</a>`;
}

function addKingCobraImageCredit(container, animalName) {
  if (!container || animalName !== "King Cobra") return;
  const credit = document.createElement("a");
  credit.className = "image-credit hero-image-credit";
  credit.href = KING_COBRA_IMAGE_SOURCE;
  credit.target = "_blank";
  credit.rel = "noopener";
  credit.textContent = "Photo: Jason Quinn · CC BY-SA 4.0";
  container.append(credit);
}

function initAnimalGuide() {
  const requestedAnimal = new URLSearchParams(window.location.search).get("animal") || "Asian Elephant";
  const animal = animals.find(item => item.name.toLowerCase() === requestedAnimal.toLowerCase());
  if (!animal) {
    document.getElementById("animalName").textContent = "Animal not found";
    document.getElementById("animalCategory").textContent = "This species is not in the wildlife catalog.";
    document.getElementById("animalFacts").replaceChildren();
    return;
  }
  const details = getAnimalDetails(animal);

  document.title = `Wild Life Seasonal Tracker | ${animal.name}`;
  document.getElementById("animalHero").style.setProperty("--hero", `url('${animal.image.replace("w=900", "w=1800")}')`);
  if (animal.name === "King Cobra") document.getElementById("animalHero").style.setProperty("--hero", `url('${KING_COBRA_IMAGE}')`);
  document.getElementById("animalHero").style.backgroundPosition = `center, ${animal.imagePosition || "center"}, center`;
  addKingCobraImageCredit(document.querySelector("#animalHero .hero-content"), animal.name);
  document.getElementById("animalName").textContent = animal.name;
  document.getElementById("animalCategory").textContent = animal.category;
  const status = document.getElementById("animalStatus");
  status.textContent = animal.status;
  status.className = `status-pill ${animal.status === "Endangered" ? "endangered" : ""}`;
  document.getElementById("animalHabitat").textContent = details.habitat;
  document.getElementById("animalDiet").textContent = details.diet;
  document.getElementById("animalBehaviour").textContent = details.behaviour;
  document.getElementById("animalFacts").innerHTML = details.facts.map(fact => `<article class="fact-card reveal">${fact}</article>`).join("");
  document.getElementById("animalRecordTitle").textContent = `${animal.name} Encounters`;
  const animalObservations = encounters.filter(item => item.animal === animal.name);
  const uniqueLocations = new Set(animalObservations.map(item => item.location)).size;
  const uniqueSeasons = new Set(animalObservations.map(item => item.season)).size;
  document.getElementById("animalSummary").innerHTML = `
    <article class="stat-card reveal"><strong>${animalObservations.length}</strong><span>Shared Encounters</span></article>
    <article class="stat-card reveal"><strong>${uniqueLocations}</strong><span>Locations</span></article>
    <article class="stat-card reveal"><strong>${uniqueSeasons}</strong><span>Seasons</span></article>`;
  document.getElementById("animalTimeline").innerHTML = animalObservations.slice(0, 10).map(item => `<div><time>${item.labelDate}</time><strong>${item.location}</strong><span>${item.time}</span></div>`).join("") || `<p class="empty-state">No encounters for this animal yet.</p>`;
  document.querySelector('a[href="animal-map.html"]').href = `animal-map.html?animal=${encodeURIComponent(animal.name)}`;
}

function getAnimalDetails(animal) {
  const guideDetails = {
    "Asian Elephant": {
      habitat: "Forests, grasslands and wetlands.",
      diet: "Herbivore",
      behaviour: "Social, highly intelligent, and matriarch-led.",
      facts: ["Elephants communicate with low-frequency rumbles that travel through the ground.", "A matriarch can remember migration routes and water sources for decades.", "Their trunks contain more than 40,000 muscles and act like a hand, hose, and signal flag."],
      sightings: 12, locations: 4, seasons: 3,
      timeline: [{ date: "19 Sep 2026", place: "Periyar", time: "6:42 PM" }, { date: "12 Aug 2026", place: "Wayanad", time: "7:15 AM" }, { date: "02 Jul 2026", place: "Silent Valley", time: "5:30 PM" }]
    },
    "Bengal Tiger": {
      habitat: "Dense forest, grassland edges, and shaded water corridors.",
      diet: "Carnivore",
      behaviour: "Solitary, territorial, and most active around dawn and dusk.",
      facts: ["Each tiger has a unique stripe pattern.", "Tigers often use water channels as quiet travel routes.", "A single territory can cover many square kilometers of forest."],
      sightings: 5, locations: 2, seasons: 2,
      timeline: [{ date: "24 Jan 2026", place: "Wayanad", time: "6:10 AM" }, { date: "18 Dec 2025", place: "Silent Valley", time: "5:50 PM" }, { date: "04 Nov 2025", place: "Wayanad", time: "6:35 AM" }]
    },
    "Indian Leopard": {
      habitat: "Rocky forest, scrub edges, and broken canopy corridors.",
      diet: "Carnivore",
      behaviour: "Elusive, adaptable, and skilled at moving through steep terrain.",
      facts: ["Leopards often drag prey into trees or dense cover.", "Their rosettes help break up their outline in dappled shade.", "They can live close to human-shaped landscapes while staying rarely seen."],
      sightings: 4, locations: 2, seasons: 3,
      timeline: [{ date: "09 Jun 2026", place: "Silent Valley", time: "7:40 PM" }, { date: "17 Apr 2026", place: "Wayanad", time: "6:55 AM" }, { date: "11 Feb 2026", place: "Eravikulam", time: "5:45 PM" }]
    },
    "Sambar Deer": {
      habitat: "Moist forest, lake margins, and shadowed clearings.",
      diet: "Herbivore",
      behaviour: "Alert, crepuscular, and known for loud alarm calls.",
      facts: ["Sambar deer often freeze before giving a deep alarm bark.", "Their large ears help detect movement in dense forest.", "They are important prey for big cats."],
      sightings: 8, locations: 3, seasons: 3,
      timeline: [{ date: "12 Aug 2026", place: "Wayanad", time: "7:15 AM" }, { date: "28 Jul 2026", place: "Periyar", time: "6:25 PM" }, { date: "03 Mar 2026", place: "Silent Valley", time: "6:05 AM" }]
    }
  };

  return guideDetails[animal.name] || {
    habitat: animal.habitat || "Forest, wetland, or grassland habitat listed for this species.",
    diet: animal.category === "Bird" ? "Fruit, seeds, insects, and seasonal forest food." : animal.category === "Reptile" ? "Small animals and forest prey." : "Forest plants, fruits, or prey depending on the species.",
    behaviour: animal.description,
      facts: [animal.description, `This species is listed as ${animal.status}.`, "Observation summaries below come from shared encounters."],
    sightings: 3,
    locations: 2,
    seasons: 2,
    timeline: [{ date: "19 Sep 2026", place: animal.location, time: "6:42 PM" }, { date: "12 Aug 2026", place: "Wayanad", time: "7:15 AM" }, { date: "02 Jul 2026", place: "Silent Valley", time: "5:30 PM" }]
  };
}

function initPlaces() {
  const placesGrid = document.getElementById("placesGrid");
  placesGrid.innerHTML = places.map(place => `
    <article class="place-card reveal" style="background-image:url('${place.image}')">
      <div class="card-body">
        <h3>${place.name}</h3>
        <p>${place.habitat}</p>
        <p>${place.encounters || 0} shared encounters</p>
        <a class="btn btn-light" href="place.html?place=${encodeURIComponent(place.name)}">Explore</a>
      </div>
    </article>`).join("");
  animateInserted(placesGrid);
}

function initPlaceGuide() {
  const requestedPlace = new URLSearchParams(window.location.search).get("place") || "Periyar";
  const place = places.find(item => item.name.toLowerCase() === requestedPlace.toLowerCase());
  if (!place) {
    document.getElementById("placeName").textContent = "Location not found";
    return;
  }
  const details = getPlaceDetails(place);
  const foundAnimals = animals.filter(animal => details.wildlife.includes(animal.name) || animal.location === place.name);

  document.title = `Wild Life Seasonal Tracker | ${place.name}`;
  document.getElementById("placeHero").style.setProperty("--hero", `url('${place.image.replace("w=1000", "w=1800")}')`);
  document.getElementById("placeName").textContent = place.name;
  document.getElementById("placeSubtitle").textContent = details.subtitle;
  document.getElementById("placeHabitat").textContent = place.habitat || details.habitat;
  const placeMapQuery = place.mapQuery || mapTargets[place.name] || place.name;
  const placeMapFrame = document.getElementById("placeMapFrame");
  const placeMapTitle = document.getElementById("placeMapTitle");
  const placeMapAddress = document.getElementById("placeMapAddress");
  const placeMapLink = document.getElementById("placeMapLink");
  if (placeMapFrame && placeMapTitle && placeMapAddress && placeMapLink) {
    placeMapTitle.textContent = `${place.name} Map`;
    placeMapFrame.title = `Map of ${placeMapQuery}`;
    placeMapFrame.src = googleMapsEmbedUrl(placeMapQuery);
    placeMapAddress.textContent = placeMapQuery;
    placeMapLink.href = googleMapsUrl(placeMapQuery);
  }
  const locationObservations = encounters.filter(item => item.location === place.name);
  const seenSpecies = [...new Set(locationObservations.map(item => item.animal))];
  document.getElementById("placeCommonWildlife").textContent = seenSpecies.join(", ") || "No observations recorded yet";
  const seasonRank=Object.entries(locationObservations.reduce((counts,item)=>{counts[item.season]=(counts[item.season]||0)+1;return counts;},{})).sort((a,b)=>b[1]-a[1]);
  document.getElementById("placeBestSeason").textContent = seasonRank[0]?.[0] || "No observations yet";
  document.getElementById("placeEncounters").textContent = `${locationObservations.length} shared encounters`;
  const ranked = Object.entries(locationObservations.reduce((counts,item) => { counts[item.animal]=(counts[item.animal]||0)+1; return counts; },{})).sort((a,b)=>b[1]-a[1]);
  document.getElementById("placeMedals").innerHTML = ranked.slice(0,2).map(([name,count],index)=>`<article class="medal-card reveal"><span>${index===0?"🥇":"🥈"}</span><p>${index===0?"Most Frequently Observed":"Second Most Observed"}</p><h3>${name}</h3><strong>${count} encounters</strong></article>`).join("") || `<p class="empty-state">Location statistics will appear after encounters are recorded.</p>`;
  document.getElementById("placeSpeciesTitle").textContent = `${place.name} Species`;
  const placeAnimals = document.getElementById("placeAnimals");
  placeAnimals.innerHTML = (seenSpecies.length ? animals.filter(item => seenSpecies.includes(item.name)) : foundAnimals.slice(0, 6)).map(animalCard).join("");
  animateInserted(placeAnimals);
}

function getPlaceDetails(place) {
  const details = {
    Periyar: {
      subtitle: "A lake-fringed forest habitat for some of India's most iconic wildlife.",
      habitat: "Evergreen forest, lake edges, and damp grassland.",
      wildlife: ["Asian Elephant", "Sambar Deer", "Indian Peafowl", "Indian Gaur"],
      bestSeason: "Monsoon",
      top: [{ name: "Asian Elephant", sightings: 12 }, { name: "Sambar Deer", sightings: 8 }]
    },
    Wayanad: {
      subtitle: "A corridor of moist forest, bamboo, and shaded paths where large mammals move quietly.",
      habitat: "Moist deciduous forest corridors and bamboo-rich slopes.",
      wildlife: ["Bengal Tiger", "Sambar Deer", "Spotted Deer", "Indian Leopard"],
      bestSeason: "Winter",
      top: [{ name: "Sambar Deer", sightings: 9 }, { name: "Bengal Tiger", sightings: 5 }]
    },
    "Silent Valley": {
      subtitle: "A deep rainforest landscape shaped by streams, canopy trails, and mist.",
      habitat: "Rainforest, streams, and dense canopy habitat.",
      wildlife: ["Indian Gaur", "Indian Leopard", "Malabar Giant Squirrel", "Great Hornbill"],
      bestSeason: "Monsoon",
      top: [{ name: "Indian Gaur", sightings: 7 }, { name: "Indian Leopard", sightings: 4 }]
    },
    Thattekad: {
      subtitle: "A riparian bird haven with lush edges, tall trees, and active morning calls.",
      habitat: "Riverine forest, birding trails, and green canopy breaks.",
      wildlife: ["Great Hornbill", "Malabar Giant Squirrel", "Indian Peafowl", "King Cobra"],
      bestSeason: "Spring",
      top: [{ name: "Great Hornbill", sightings: 6 }, { name: "Malabar Giant Squirrel", sightings: 5 }]
    },
    Eravikulam: {
      subtitle: "High grasslands and shola patches with cool air, open slopes, and rare encounters.",
      habitat: "High grassland, rocky slopes, and shola forest pockets.",
      wildlife: ["King Cobra", "Indian Gaur", "Sambar Deer", "Indian Leopard"],
      bestSeason: "Summer",
      top: [{ name: "Indian Gaur", sightings: 5 }, { name: "King Cobra", sightings: 3 }]
    }
  };

  return details[place.name] || details.Periyar;
}

function initMap() {
  const frame = document.getElementById("googleMapFrame");
  const list = document.getElementById("mapLocationList");
  const pinLayer = document.getElementById("mapPinLayer");
  const externalLink = document.getElementById("mapExternalLink");
  const title = document.getElementById("mapTitle");
  const subtitle = document.getElementById("mapSubtitle");
  const stats = document.getElementById("mapStats");
  const journey = document.getElementById("mapJourney");
  if (!frame || !list || !pinLayer || !externalLink || !title || !subtitle || !stats || !journey) return;

  const requestedAnimal = new URLSearchParams(window.location.search).get("animal");
  const mappedEncounters = requestedAnimal ? encounters.filter(item => item.animal.toLowerCase() === requestedAnimal.toLowerCase()) : encounters;
  document.title = `Wild Life Seasonal Tracker | ${requestedAnimal || "Wildlife Sighting Map"}`;
  title.textContent = requestedAnimal ? `${requestedAnimal} Sighting Map` : "Shared Wildlife Sighting Map";
  subtitle.textContent = requestedAnimal ? `Locations from shared ${requestedAnimal} encounters.` : "Locations from shared encounters.";

  const locationNames = [...new Set(mappedEncounters.map(item => item.location))];
  const seasonCount = new Set(mappedEncounters.map(item => item.season)).size;
  const setLocation = location => {
    frame.src = googleMapsEmbedUrl(location);
    frame.title = `Google map of ${mapTargets[location] || location}`;
    externalLink.href = googleMapsUrl(location);
    document.querySelectorAll(".map-location-button").forEach(button => {
      button.classList.toggle("active", button.dataset.location === location);
    });
    document.querySelectorAll(".sighting-pin").forEach(pin => {
      pin.classList.toggle("active", pin.dataset.location === location);
    });
  };

  list.innerHTML = locationNames.map(location => {
    const locationEncounters = mappedEncounters.filter(item => item.location === location);
    const sightingCount = locationEncounters.length;
    const animalNames = [...new Set(locationEncounters.map(item => item.animal))].join(", ");
    const label = `${sightingCount} ${sightingCount === 1 ? "sighting" : "sightings"}`;
    return `
      <button class="map-location-button" type="button" data-location="${location}">
        <strong>${location}</strong>
        <span>${mapTargets[location] || location}</span>
        <span>${label}</span>
        <em>${animalNames}</em>
      </button>`;
  }).join("");
  pinLayer.replaceChildren();

  stats.innerHTML = `
    <article class="stat-card reveal visible"><strong>${mappedEncounters.length}</strong><span>Total Sightings</span></article>
    <article class="stat-card reveal visible"><strong>${locationNames.length}</strong><span>Locations</span></article>
    <article class="stat-card reveal visible"><strong>${seasonCount}</strong><span>Seasons</span></article>`;
  journey.innerHTML = locationNames.join(" <span>→</span> ");

  document.querySelectorAll(".map-location-button").forEach(button => {
    button.addEventListener("click", () => setLocation(button.dataset.location));
  });
  document.querySelectorAll(".sighting-pin").forEach(pin => {
    pin.addEventListener("click", () => setLocation(pin.dataset.location));
  });

  if (!locationNames.length) {
    list.innerHTML = `<p class="empty-state">No shared observations to map yet.</p>`;
    stats.innerHTML = `<article class="stat-card"><strong>0</strong><span>Observations</span></article><article class="stat-card"><strong>0</strong><span>Locations</span></article><article class="stat-card"><strong>0</strong><span>Seasons</span></article>`;
    journey.textContent = "";
    externalLink.style.display = "none";
    frame.src = "about:blank";
    return;
  }
  externalLink.style.display = "";
  setLocation(locationNames[0]);
}

function initSeasons() {
  const title = document.getElementById("seasonTitle");
  const list = document.getElementById("seasonWildlife");
  const select = document.getElementById("seasonSelect");
  const render = season => {
    title.textContent = `${season} Wildlife`;
    const seasonRecords = encounters.filter(item => item.season === season);
    const animalsThisSeason = [...new Set(seasonRecords.map(item => item.animal))];
    list.innerHTML = animalsThisSeason.length ? animalsThisSeason.map(item => `<a href="animal.html?animal=${encodeURIComponent(item)}">${item}</a>`).join("") : `<p class="empty-state">No ${season.toLowerCase()} encounters yet.</p>`;
    [...list.children].forEach((item, index) => {
      item.style.animationDelay = `${index * 55}ms`;
    });
    const stats = document.getElementById("seasonStats");
    if (stats) stats.innerHTML = `<article class="stat-card reveal"><strong>${seasonRecords.length}</strong><span>Encounters</span></article><article class="stat-card reveal"><strong>${animalsThisSeason.length}</strong><span>Animals</span></article><article class="stat-card reveal"><strong>${new Set(seasonRecords.map(item=>item.location)).size}</strong><span>Locations</span></article>`;
  };
  if (select) {
    select.onchange = () => render(select.value);
    render(select.value || "Monsoon");
  } else render("Monsoon");
}

function initIdentifier() {
  const location = document.getElementById("identifierLocation");
  const animal = document.getElementById("identifierAnimal");
  location.innerHTML=`<option value="">All locations</option>${places.map(item=>`<option value="${item.name}">${item.name}</option>`).join("")}`;
  [...new Set(encounters.map(item=>item.animal))].sort().forEach(name=>animal.insertAdjacentHTML("beforeend",`<option>${name}</option>`));
  const render = () => {
    const results = encounters.filter(item => (!location.value || item.location === location.value) && (!animal.value || item.animal === animal.value));
    const counts = Object.entries(results.reduce((value,item)=>{value[item.animal]=(value[item.animal]||0)+1;return value;},{})).sort((a,b)=>b[1]-a[1]);
    document.getElementById("identifierSuggestions").innerHTML = counts.map(([name,count],index)=>`<article class="suggestion-card"><span>${index===0?"🥇":"🐾"}</span><h3>${name}</h3><p>${count} matching shared ${count===1?"encounter":"encounters"}</p><a class="btn btn-primary" href="animal.html?animal=${encodeURIComponent(name)}">View Animal Guide</a></article>`).join("") || `<p class="empty-state">No matching shared encounters. Record a sighting to build the wildlife list.</p>`;
  };
  location.addEventListener("change", render);
  animal.addEventListener("change", render);
  render();
}

function initMyWildlife() {
  const animalFilter = document.getElementById("animalFilter");
  const locationFilter = document.getElementById("locationFilter");
  animalFilter.querySelectorAll("option:not(:first-child)").forEach(option=>option.remove());
  locationFilter.querySelectorAll("option:not(:first-child)").forEach(option=>option.remove());

  const loadMyEncounters = async () => {
    myEncountersError = null;
    if (!currentAccount) {
      myEncounters = [];
    } else {
      try {
        myEncounters = await apiRequest("/observations/mine");
      } catch (error) {
        myEncounters = [];
        myEncountersError = error.message;
      }
    }
    const statGrid=document.getElementById("myWildlifeStats");
    if (myEncountersError) {
      statGrid.innerHTML = "";
      renderEncounters();
      return;
    }
    if (!currentAccount) {
      statGrid.innerHTML = "";
      renderEncounters();
      return;
    }
    [...new Set(myEncounters.map(item => item.animal))].forEach(name => animalFilter.insertAdjacentHTML("beforeend", `<option>${name}</option>`));
    [...new Set(myEncounters.map(item => item.location))].forEach(name => locationFilter.insertAdjacentHTML("beforeend", `<option>${name}</option>`));
    statGrid.innerHTML=`<article class="stat-card reveal"><strong>${myEncounters.length}</strong><span>Total Encounters</span></article><article class="stat-card reveal"><strong>${new Set(myEncounters.map(item=>item.animal)).size}</strong><span>Animals</span></article><article class="stat-card reveal"><strong>${new Set(myEncounters.map(item=>item.location)).size}</strong><span>Locations</span></article><article class="stat-card reveal"><strong>${new Set(myEncounters.map(item=>item.season)).size}</strong><span>Seasons</span></article>`;
    renderEncounters();
  };

  ["encounterSearch", "animalFilter", "locationFilter", "seasonFilter", "dateFilter"].forEach(id => {
    document.getElementById(id).addEventListener("input", renderEncounters);
  });

  loadMyEncounters();
}

function renderEncounters() {
  const term = document.getElementById("encounterSearch").value.toLowerCase();
  const animal = document.getElementById("animalFilter").value;
  const location = document.getElementById("locationFilter").value;
  const season = document.getElementById("seasonFilter").value;
  const date = document.getElementById("dateFilter").value;
  const records = Array.isArray(myEncounters) ? myEncounters : [];
  const filtered = records.filter(item =>
    (!term || item.animal.toLowerCase().includes(term) || item.location.toLowerCase().includes(term)) &&
    (!animal || item.animal === animal) &&
    (!location || item.location === location) &&
    (!season || item.season === season) &&
    (!date || item.date === date)
  );
  const grid = document.getElementById("encounterGrid");
  if (!currentAccount) {
    grid.innerHTML = `<p class="empty-state">Sign in to view your wildlife recordings.</p>`;
    return;
  }
  if (myEncountersError) {
    const errorMessage = document.createElement("p");
    errorMessage.className = "empty-state";
    errorMessage.textContent = `Could not load your wildlife recordings: ${myEncountersError}`;
    grid.replaceChildren(errorMessage);
    return;
  }
  grid.innerHTML = filtered.map(item => `
    <article class="encounter-card reveal">
      <div class="image-frame"><img src="${item.animal === "King Cobra" ? KING_COBRA_IMAGE : item.image}" alt="${item.animal}" onerror="this.style.display='none'">${kingCobraCreditMarkup(item.animal)}</div>
      <div class="card-body">
        <h3>${item.animal}</h3>
        <p>${item.location}</p>
        <div class="meta-line"><span>${item.labelDate}</span><span>${item.time}</span><span>${item.season}</span><span>${item.count} individual${item.count===1?"":"s"}</span></div>
        <div class="meta-line"><span>Shared by ${item.ownerName || "Wildlife observer"}</span></div>
        <div class="card-actions"><a class="btn btn-primary" href="encounter-details.html?encounter=${encodeURIComponent(item.id)}">View Details</a>${currentAccount && Number(item.ownerId)===Number(currentAccount.id) ? `<a class="btn btn-light" href="encounter.html?edit=${encodeURIComponent(item.id)}">Edit</a><button class="btn btn-light delete-observation" type="button" data-observation-id="${item.id}">Delete</button>` : ""}</div>
      </div>
    </article>`).join("") || `<p class="empty-state">No encounters match those filters.</p>`;
  grid.querySelectorAll(".delete-observation").forEach(button=>button.addEventListener("click",async()=>{
    if(!window.confirm("Delete this observation? This cannot be undone.")) return;
    button.disabled=true;
    try {
      await apiRequest(`/observations/${button.dataset.observationId}`,{method:"DELETE"});
      myEncounters=myEncounters.filter(item=>String(item.id)!==button.dataset.observationId);
      const stats=document.getElementById("myWildlifeStats");
      stats.innerHTML=`<article class="stat-card reveal"><strong>${myEncounters.length}</strong><span>Total Encounters</span></article><article class="stat-card reveal"><strong>${new Set(myEncounters.map(item=>item.animal)).size}</strong><span>Animals</span></article><article class="stat-card reveal"><strong>${new Set(myEncounters.map(item=>item.location)).size}</strong><span>Locations</span></article><article class="stat-card reveal"><strong>${new Set(myEncounters.map(item=>item.season)).size}</strong><span>Seasons</span></article>`;
      renderEncounters();
    }
    catch(error) { button.disabled=false; window.alert(error.message); }
  }));
  animateInserted(grid);
}

function initEncounterDetails() {
  const params = new URLSearchParams(window.location.search);
  const requestedEncounter = params.get("encounter");
  const requestedAnimal = params.get("animal");
  const encounter = encounters.find(item => String(item.id) === requestedEncounter) ||
    encounters.find(item => item.animal.toLowerCase() === (requestedAnimal || "").toLowerCase());
  if (!encounter) {
    document.getElementById("encounterAnimal").textContent = "Observation not found";
    document.getElementById("encounterObservation").textContent = "This shared observation could not be found.";
    return;
  }
  const animal = animals.find(item => item.name === encounter.animal) || animals[0];

  document.title = `Wild Life Seasonal Tracker | ${encounter.animal} Encounter`;
  document.getElementById("encounterHero").style.setProperty("--hero", `url('${encounter.image.replace("w=900", "w=1800")}')`);
  if (encounter.animal === "King Cobra") {
    document.getElementById("encounterHero").style.setProperty("--hero", `url('${KING_COBRA_IMAGE}')`);
    addKingCobraImageCredit(document.querySelector("#encounterHero .hero-content"), encounter.animal);
  }
  document.getElementById("encounterAnimal").textContent = encounter.animal;
  document.getElementById("encounterMeta").textContent = `📍 ${encounter.location}   📅 ${encounter.labelDate}   🕐 ${encounter.time}   ${seasonIcon(encounter.season)} ${encounter.season}   🐾 ${encounter.count} individual${encounter.count===1?"":"s"}`;
  document.getElementById("encounterObservation").textContent = encounter.observation;
  document.getElementById("encounterStatus").textContent = animal.status;
  document.getElementById("encounterLocation").textContent = mapTargets[encounter.location] || encounter.location;
  document.getElementById("encounterMap").href = googleMapsUrl(encounter.location);
}

function initEncounterForm() {
  const now = new Date();
  const dateInput = document.getElementById("recordDate");
  const timeInput = document.getElementById("recordTime");
  const seasonInput = document.getElementById("recordSeason");
  const timePeriod = document.getElementById("timePeriod");

  dateInput.value = toDateInputValue(now);
  timeInput.value = toTimeInputValue(now);
  seasonInput.value = getSeason(now);

  const animal = document.getElementById("recordAnimal");
  const location = document.getElementById("recordLocation");
  const warning = document.getElementById("sensitiveWarning");
  animal.innerHTML = animals.map(item=>`<option value="${item.id}">${item.name}</option>`).join("");
  location.innerHTML = places.map(item=>`<option value="${item.id}">${item.name}</option>`).join("");
  const editId=new URLSearchParams(window.location.search).get("edit");
  const editRecord=editId?encounters.find(item=>String(item.id)===editId):null;
  if(editId&&!editRecord) {
    document.getElementById("encounterMessage").textContent="That observation could not be found.";
    document.querySelector('#encounterForm [type="submit"]').disabled=true;
  }
  if(editRecord){
    animal.value=String(editRecord.animalId); location.value=String(editRecord.locationId);
    dateInput.value=editRecord.date; timeInput.value=editRecord.time24||"12:00";
    document.getElementById("recordCount").value=editRecord.count;
    document.getElementById("recordNotes").value=editRecord.observation||"";
    document.querySelector(".page-title h1").textContent="Edit Observation";
    document.querySelector('#encounterForm [type="submit"]').textContent="Save Changes";
  }
  const syncTimeStyle = () => {
    const hour = Number((timeInput.value || "12:00").split(":")[0]);
    timePeriod.textContent = hour >= 12 ? "PM" : "AM";
    document.querySelector(".time-icon").textContent = hour >= 19 || hour < 5 ? "☾" : hour < 10 ? "☀" : hour < 17 ? "◐" : "◒";
    document.querySelectorAll(".time-presets button").forEach(button => {
      button.classList.toggle("active", button.dataset.time === timeInput.value);
    });
  };
  const render = () => {
    const selectedAnimal=animals.find(item=>String(item.id)===animal.value);
    document.getElementById("recordSuggestions").innerHTML = selectedAnimal ? `<article class="suggestion-card"><span>🐾</span><h3>${selectedAnimal.name}</h3><p>${selectedAnimal.description}</p></article>` : "";
    warning.classList.toggle("show", ["Bengal Tiger", "King Cobra", "Asian Elephant"].includes(selectedAnimal?.name));
  };

  dateInput.addEventListener("change", () => {
    if (dateInput.value) seasonInput.value = getSeason(new Date(`${dateInput.value}T12:00:00`));
  });
  timeInput.addEventListener("input", syncTimeStyle);
  document.querySelectorAll(".time-presets button").forEach(button => {
    button.addEventListener("click", () => {
      timeInput.value = button.dataset.time;
      syncTimeStyle();
    });
  });
  animal.addEventListener("change", render);
  location.addEventListener("change", render);
  document.getElementById("encounterForm").addEventListener("submit", async event => {
    event.preventDefault();
    const message=document.getElementById("encounterMessage");
    if(!currentAccount){
      message.textContent="Sign in to save your observation.";
      document.querySelector('.auth-trigger[data-auth-mode="login"]')?.click();
      return;
    }
    const submit=event.currentTarget.querySelector('[type="submit"]');
    submit.disabled=true;
    message.textContent="Saving observation…";
    try {
      const created=await apiRequest(`/observations${editRecord?`/${editRecord.id}`:""}`,{method:editRecord?"PUT":"POST",body:JSON.stringify({
        animalId:Number(animal.value),locationId:Number(location.value),date:dateInput.value,time:timeInput.value,
        count:Math.max(1,Number(document.getElementById("recordCount")?.value||1)),
        observation:document.getElementById("recordNotes").value.trim(),
        sensitiveLocation:["Bengal Tiger","King Cobra","Asian Elephant"].includes(animals.find(item=>String(item.id)===animal.value)?.name)
      })});
      if(editRecord) encounters=encounters.map(item=>String(item.id)===String(created.id)?created:item); else encounters.unshift(created);
      message.textContent="";
      document.getElementById("successModal").classList.add("open");
      setTimeout(()=>{window.location.href="my-wildlife.html";},1100);
    } catch(error) {
      message.textContent=error.message;
      message.classList.add("error");
    } finally { submit.disabled=false; }
  });
  document.querySelector(".modal-close").addEventListener("click", () => document.getElementById("successModal").classList.remove("open"));
  document.getElementById("successModal").addEventListener("click", event => {
    if (event.target.id === "successModal") event.currentTarget.classList.remove("open");
  });
  render();
  syncTimeStyle();
}

function initInsights() {
  const data=Object.entries(encounters.reduce((counts,item)=>{counts[item.animal]=(counts[item.animal]||0)+1;return counts;},{})).sort((a,b)=>b[1]-a[1]);
  const max=Math.max(1,...data.map(item=>item[1]));
  document.getElementById("animalBars").innerHTML=data.map(([name,value])=>`<div class="bar-row"><strong>${name}</strong><div class="bar-track"><div class="bar-fill" style="width:${(value/max)*100}%"></div></div><span>${value}</span></div>`).join("")||`<p class="empty-state">Shared animal insights will appear after encounters are recorded.</p>`;
  const seasons=["Spring","Summer","Monsoon","Winter"].map(season=>[season,encounters.filter(item=>item.season===season).length]);
  const maxSeason=Math.max(1,...seasons.map(item=>item[1]));
  document.getElementById("seasonBars").innerHTML=seasons.map(([season,value])=>`<span style="height:${Math.max(4,(value/maxSeason)*100)}%" title="${value} encounters">${season}</span>`).join("");
  const statGrid=document.getElementById("insightStats");
  const activeSeason=seasons.sort((a,b)=>b[1]-a[1])[0];
  statGrid.innerHTML=`<article class="stat-card reveal"><strong>${encounters.length}</strong><span>Total Encounters</span></article><article class="stat-card reveal"><strong>${new Set(encounters.map(item=>item.animal)).size}</strong><span>Unique Animals</span></article><article class="stat-card reveal"><strong>${new Set(encounters.map(item=>item.location)).size}</strong><span>Locations Explored</span></article><article class="stat-card reveal"><strong>${activeSeason?.[1]?activeSeason[0]:"—"}</strong><span>Most Active Season</span></article>`;
  document.getElementById("insightTimeline").innerHTML=encounters.slice(0,8).map(item=>`<div><time>${item.labelDate}</time><strong>${item.animal}</strong><span>${item.location}</span></div>`).join("")||`<p class="empty-state">Recent shared encounters will appear here.</p>`;
}

function getSeason(date) {
  const month = date.getMonth() + 1;
  if ([3, 4, 5].includes(month)) return "Spring";
  if ([6, 7].includes(month)) return "Summer";
  if ([8, 9, 10].includes(month)) return "Monsoon";
  return "Winter";
}

function seasonIcon(season) {
  return {
    Spring: "🌸",
    Summer: "☀️",
    Monsoon: "🌧️",
    Winter: "❄️"
  }[season] || "📍";
}

function googleMapsUrl(location) {
  const query = mapTargets[location] || location;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function googleMapsEmbedUrl(location) {
  const query = mapTargets[location] || location;
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

function formatDate(date) {
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
}

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function toTimeInputValue(date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}
