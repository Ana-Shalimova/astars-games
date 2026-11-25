(() => {
  const STORAGE_KEY = "astars-lang";

  const STRINGS = {
    en: {
      "doc.home": "Astars",
      "home.welcome": "Welcome to Astars — a space we create, store and play our simple kids’ games.",
      "home.age": "(recommended age 5–7 years)",
      "home.free": "Enjoy them for free, no subscription required — only fun!",
      "home.foot": "Made for joy and fun",
      "home.lang": "Language",
      "common.home": "Home",
      "common.go": "Go!",
      "common.start": "Start",
      "common.playAgain": "Play again",
      "common.score": "Score",
      "common.stars": "Stars",
      "common.time": "Time",
      "common.wins": "Wins",
      "common.back": "Back",
      "common.sound": "Mute sound",

      "game.maths.title": "Maths Stars",
      "game.maths.desc": "Add and subtract with numbers 1–10 — tap or type the answer.",
      "game.maths.kicker": "Numbers",
      "game.more.title": "More or Less",
      "game.more.desc": "Spot which side has more — or less.",
      "game.more.kicker": "Compare",
      "game.balance.title": "Balance Stars",
      "game.balance.desc": "Stack the tray so both sides match.",
      "game.balance.kicker": "Balance",
      "game.robot.title": "Build a Robot",
      "game.robot.desc": "Mix parts, press, and watch your robot dance.",
      "game.robot.kicker": "Create",
      "game.ttt.title": "Star Tac Toe",
      "game.ttt.desc": "Three stars in a row — 2 players or vs computer.",
      "game.ttt.kicker": "Logic",
      "game.pexeso.title": "Pexeso",
      "game.pexeso.desc": "Find matching faces — 5 pairs, then 8.",
      "game.pexeso.kicker": "Memory",
      "game.photo.title": "Photo Puzzle",
      "game.photo.desc": "Turn a photo into a sliding puzzle.",
      "game.photo.kicker": "Puzzle",
      "game.find.title": "Find the Number",
      "game.find.desc": "Catch the right number before time runs out.",
      "game.find.kicker": "Catch",
      "game.fuel.title": "Fuel Run",
      "game.fuel.desc": "Catch matching petrol cans and keep the car going.",
      "game.fuel.kicker": "Drive",

      "maths.sub": "Add & subtract · numbers 1–10",
      "maths.ready": "Ready to play?",
      "maths.blurb": "Two levels · 20 questions\nFirst tap the answer · then type it",
      "more.sub": "Compare star piles · numbers 1–10",
      "more.ready": "Ready to play?",
      "more.blurb": "Two levels · 20 questions\nFirst find more · then find less",
      "balance.sub": "Make both sides the same",
      "balance.ready": "Ready to play?",
      "balance.blurb": "Two levels · 10 rounds\nFirst fill both sides · then match a ready side",
      "robot.sub": "Press the button · head, face, torso, arms, legs, feet",
      "robot.rule": "Press the button six times.\nBuild your robot part by part!",
      "robot.again": "Build again",
      "robot.ready": "Your robot is ready!",
      "robot.meet": "★★★ Meet your creation ★★★",
      "ttt.sub": "Three stars in a row",
      "ttt.rule": "Get three stars in a row.\nGold and blue take turns.",
      "ttt.how": "How do you want to play?",
      "ttt.two": "2 players",
      "ttt.twoSub": "Same tablet",
      "ttt.cpu": "Computer",
      "ttt.cpuSub": "You are gold ★",
      "ttt.newRound": "New round",
      "ttt.changeMode": "Change mode",
      "ttt.goldTurn": "Gold’s turn",
      "ttt.blueTurn": "Blue’s turn",
      "ttt.cpuTurn": "Computer’s turn",
      "ttt.modeTwo": "2 players",
      "ttt.modeCpu": "vs computer",
      "ttt.goldWins": "Gold wins!",
      "ttt.blueWins": "Blue wins!",
      "ttt.cpuWins": "Computer wins!",
      "ttt.draw": "It’s a draw!",
      "ttt.drawMsg": "No three in a row — try again.",
      "ttt.winMsg": "Three stars in a row!",
      "pexeso.sub": "Find the matching faces",
      "pexeso.rule": "Tap two cards.\nMatch the same feeling to earn a star.",
      "pexeso.hint": "Tap two matching faces",
      "pexeso.l1": "Level 1 · 5 pairs",
      "pexeso.l2": "Level 2 · 8 pairs",
      "pexeso.l1cap": "Five feelings · five pairs to find.",
      "pexeso.l2cap": "Eight feelings · a bigger board!",
      "pexeso.match": "Match! ⭐",
      "pexeso.try": "Try again",
      "pexeso.win": "You matched them all!",
      "pexeso.winMsg": "You found all {n} matching pairs!",
      "photo.sub": "Your picture · your pieces",
      "photo.rule": "Add a photo, pick how many pieces,\nthen tap two tiles to swap them.",
      "photo.play": "Play",
      "photo.pieces": "How many pieces?",
      "photo.privacy": "Your photo stays on this device — nothing is uploaded.",
      "photo.upload": "Tap to add a photo",
      "photo.orDrop": "or drop an image here",
      "photo.hint": "Tap one tile, then another to swap",
      "photo.shuffle": "Shuffle again",
      "photo.newPhoto": "New photo",
      "photo.win": "You did it!",
      "photo.winMsg": "Nice puzzle solving!",
      "photo.another": "Another photo",
      "find.sub": "Move · catch the matching falling numbers",
      "find.rule": "Move your box with ◀ ▶ (or arrow keys).\nCatch only numbers that match the box!",
      "find.hint": "Tablet: tap and hold the arrows · Computer: ← → keys",
      "find.well": "Well done!",
      "find.end": "Great catching!",
      "fuel.sub": "Catch matching petrol · keep driving",
      "fuel.rule": "Move with ◀ ▶ (or arrow keys).\nOnly the same number fills the tank.\nWrong numbers use petrol up.\nWhen petrol is empty, the car stops.",
      "fuel.catch": "Catch",
      "fuel.wrongHint": "Wrong cans use up petrol",
      "fuel.petrol": "Petrol",
      "fuel.hint": "Tablet: tap and hold the arrows · Computer: ← → keys",
      "fuel.out": "Out of petrol!",
      "fuel.up": "Fuel up!",
      "fuel.wrong": "Wrong number — petrol lost!",
      "fuel.nice": "Nice try! {n} fills.",
      "fuel.great": "Great run! {n} fills.",
      "fuel.amazing": "Amazing drive! {n} fills.",
    },
    cs: {
      "doc.home": "Astars",
      "home.welcome": "Vítejte v Astars — místo, kde tvoříme, ukládáme a hrajeme naše jednoduché dětské hry.",
      "home.age": "(doporučený věk 5–7 let)",
      "home.free": "Hrajte je zdarma, bez předplatného — jen zábava!",
      "home.foot": "Pro radost a zábavu",
      "home.lang": "Jazyk",
      "common.home": "Domů",
      "common.go": "Start!",
      "common.start": "Start",
      "common.playAgain": "Hrát znovu",
      "common.score": "Skóre",
      "common.stars": "Hvězdy",
      "common.time": "Čas",
      "common.wins": "Výhry",
      "common.back": "Zpět",
      "common.sound": "Ztlumit zvuk",

      "game.maths.title": "Matematické hvězdy",
      "game.maths.desc": "Sčítej a odčítej čísla 1–10 — klepni nebo napiš odpověď.",
      "game.maths.kicker": "Čísla",
      "game.more.title": "Více nebo méně",
      "game.more.desc": "Poznej, která strana má více — nebo méně.",
      "game.more.kicker": "Porovnání",
      "game.balance.title": "Váha hvězd",
      "game.balance.desc": "Naplň misky tak, aby byly stejné.",
      "game.balance.kicker": "Váha",
      "game.robot.title": "Postav robota",
      "game.robot.desc": "Míchej díly, mačkej a sleduj taneček.",
      "game.robot.kicker": "Tvoření",
      "game.ttt.title": "Hvězdné piškvorky",
      "game.ttt.desc": "Tři hvězdy v řadě — 2 hráči nebo proti počítači.",
      "game.ttt.kicker": "Logika",
      "game.pexeso.title": "Pexeso",
      "game.pexeso.desc": "Najdi stejné obličeje — 5 párů, pak 8.",
      "game.pexeso.kicker": "Paměť",
      "game.photo.title": "Foto puzzle",
      "game.photo.desc": "Proměň fotku v posuvné puzzle.",
      "game.photo.kicker": "Puzzle",
      "game.find.title": "Najdi číslo",
      "game.find.desc": "Chyť správné číslo, než vyprší čas.",
      "game.find.kicker": "Chytání",
      "game.fuel.title": "Benzínová jízda",
      "game.fuel.desc": "Chyť stejná čísla benzínu a jeď dál.",
      "game.fuel.kicker": "Jízda",

      "maths.sub": "Sčítání a odčítání · čísla 1–10",
      "maths.ready": "Připraveni hrát?",
      "maths.blurb": "Dvě úrovně · 20 otázek\nNejdřív klepni na odpověď · pak ji napiš",
      "more.sub": "Porovnej hromádky hvězd · čísla 1–10",
      "more.ready": "Připraveni hrát?",
      "more.blurb": "Dvě úrovně · 20 otázek\nNejdřív hledej více · pak méně",
      "balance.sub": "Udělej obě strany stejné",
      "balance.ready": "Připraveni hrát?",
      "balance.blurb": "Dvě úrovně · 10 kol\nNejdřív naplň obě strany · pak dorovnej",
      "robot.sub": "Mačkej tlačítko · hlava, obličej, tělo, ruce, nohy, chodidla",
      "robot.rule": "Stiskni tlačítko šestkrát.\nSestav robota díl po dílu!",
      "robot.again": "Stavět znovu",
      "robot.ready": "Tvůj robot je hotový!",
      "robot.meet": "★★★ Poznej svůj výtvor ★★★",
      "ttt.sub": "Tři hvězdy v řadě",
      "ttt.rule": "Získej tři hvězdy v řadě.\nZlatá a modrá se střídají.",
      "ttt.how": "Jak chcete hrát?",
      "ttt.two": "2 hráči",
      "ttt.twoSub": "Stejný tablet",
      "ttt.cpu": "Počítač",
      "ttt.cpuSub": "Ty jsi zlatá ★",
      "ttt.newRound": "Nové kolo",
      "ttt.changeMode": "Změnit režim",
      "ttt.goldTurn": "Zlatá hraje",
      "ttt.blueTurn": "Modrá hraje",
      "ttt.cpuTurn": "Hraje počítač",
      "ttt.modeTwo": "2 hráči",
      "ttt.modeCpu": "proti počítači",
      "ttt.goldWins": "Zlatá vyhrála!",
      "ttt.blueWins": "Modrá vyhrála!",
      "ttt.cpuWins": "Počítač vyhrál!",
      "ttt.draw": "Remíza!",
      "ttt.drawMsg": "Nikdo nemá tři v řadě — zkus to znovu.",
      "ttt.winMsg": "Tři hvězdy v řadě!",
      "pexeso.sub": "Najdi stejné obličeje",
      "pexeso.rule": "Klepni na dvě karty.\nStejný obličej = hvězda.",
      "pexeso.hint": "Klepni na dva stejné obličeje",
      "pexeso.l1": "Úroveň 1 · 5 párů",
      "pexeso.l2": "Úroveň 2 · 8 párů",
      "pexeso.l1cap": "Pět emocí · pět párů k nalezení.",
      "pexeso.l2cap": "Osm emocí · větší deska!",
      "pexeso.match": "Shoda! ⭐",
      "pexeso.try": "Zkus znovu",
      "pexeso.win": "Našli jste všechny!",
      "pexeso.winMsg": "Našli jste všech {n} párů!",
      "photo.sub": "Tvoje fotka · tvoje dílky",
      "photo.rule": "Přidej fotku, vyber počet dílků\na klepáním prohoď dva dílky.",
      "photo.play": "Hrát",
      "photo.pieces": "Kolik dílků?",
      "photo.privacy": "Fotka zůstává v tomto zařízení — nic se neodesílá.",
      "photo.upload": "Klepni a přidej fotku",
      "photo.orDrop": "nebo sem fotku přetáhni",
      "photo.hint": "Klepni na jeden dílek, pak na druhý",
      "photo.shuffle": "Zamíchat znovu",
      "photo.newPhoto": "Nová fotka",
      "photo.win": "Hotovo!",
      "photo.winMsg": "Skvělé skládání!",
      "photo.another": "Jiná fotka",
      "find.sub": "Pohybuj se · chytej stejná padající čísla",
      "find.rule": "Posouvej box šipkami ◀ ▶ (nebo klávesami).\nChytej jen čísla, která sedí na boxu!",
      "find.hint": "Tablet: podrž šipky · Počítač: klávesy ← →",
      "find.well": "Výborně!",
      "find.end": "Skvělé chytání!",
      "fuel.sub": "Chyť stejný benzín · jeď dál",
      "fuel.rule": "Ovládej šipkami ◀ ▶ (nebo klávesami).\nJen stejné číslo dolije nádrž.\nŠpatné číslo benzín ubere.\nBez benzínu auto zastaví.",
      "fuel.catch": "Chytej",
      "fuel.wrongHint": "Špatné kanystry berou benzín",
      "fuel.petrol": "Benzín",
      "fuel.hint": "Tablet: podrž šipky · Počítač: klávesy ← →",
      "fuel.out": "Došel benzín!",
      "fuel.up": "Dotankováno!",
      "fuel.wrong": "Špatné číslo — ubyl benzín!",
      "fuel.nice": "Dobrý pokus! {n} doplnění.",
      "fuel.great": "Skvělá jízda! {n} doplnění.",
      "fuel.amazing": "Úžasná jízda! {n} doplnění.",
    },
  };

  function normalize(lang) {
    return lang === "cs" ? "cs" : "en";
  }

  function getLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      const fromUrl = params.get("lang");
      if (fromUrl === "cs" || fromUrl === "en") {
        localStorage.setItem(STORAGE_KEY, fromUrl);
        return fromUrl;
      }
      return normalize(localStorage.getItem(STORAGE_KEY) || "en");
    } catch (_) {
      return "en";
    }
  }

  function setLang(lang) {
    const next = normalize(lang);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (_) {}
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url);
    apply();
  }

  function t(key, vars) {
    const lang = getLang();
    let text = (STRINGS[lang] && STRINGS[lang][key]) || (STRINGS.en && STRINGS.en[key]) || key;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        text = text.replace(new RegExp(`\\{${k}\\}`, "g"), String(vars[k]));
      });
    }
    return text;
  }

  function applyText(el, text) {
    if (el.dataset.i18nHtml === "true") {
      el.innerHTML = text.replace(/\n/g, "<br />");
    } else if (text.includes("\n") && el.children.length === 0) {
      el.innerHTML = text.replace(/\n/g, "<br />");
    } else {
      el.textContent = text;
    }
  }

  function apply() {
    const lang = getLang();
    document.documentElement.lang = lang === "cs" ? "cs" : "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      applyText(el, t(key));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key) el.setAttribute("aria-label", t(key));
    });

    const titleKey = document.body.getAttribute("data-i18n-title");
    if (titleKey) document.title = t(titleKey);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      btn.classList.toggle("active", btnLang === lang);
      btn.setAttribute("aria-pressed", btnLang === lang ? "true" : "false");
    });

    document.dispatchEvent(new CustomEvent("astars:lang", { detail: { lang } }));
  }

  function ensureStyles() {
    if (document.getElementById("astars-i18n-style")) return;
    const style = document.createElement("style");
    style.id = "astars-i18n-style";
    style.textContent = `
      .lang-switch {
        display: inline-flex;
        gap: 6px;
        align-items: center;
        padding: 4px;
        border-radius: 14px;
        background: rgba(255,255,255,0.45);
        border: 1px solid rgba(61,58,52,0.1);
      }
      .site-header .lang-switch {
        margin-left: auto;
      }
      .lang-btn {
        border: none;
        background: transparent;
        width: 42px;
        height: 42px;
        border-radius: 12px;
        font-size: 1.45rem;
        line-height: 1;
        cursor: pointer;
        display: inline-grid;
        place-items: center;
        opacity: 0.55;
        transition: opacity 0.15s ease, background 0.15s ease, transform 0.12s ease;
      }
      .lang-btn:hover { opacity: 0.85; transform: translateY(-1px); }
      .lang-btn.active {
        opacity: 1;
        background: #fff;
        box-shadow: 0 2px 0 rgba(61,58,52,0.08);
      }
    `;
    document.head.appendChild(style);
  }

  function mountSwitch() {
    if (document.querySelector(".lang-switch")) return;
    const host =
      document.querySelector(".header-tools") ||
      document.querySelector(".site-header");
    if (!host) return;

    const wrap = document.createElement("div");
    wrap.className = "lang-switch";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", t("home.lang"));

    ["en", "cs"].forEach((lang) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lang-btn";
      btn.dataset.lang = lang;
      btn.textContent = lang === "en" ? "🇬🇧" : "🇨🇿";
      btn.setAttribute("aria-label", lang === "en" ? "English" : "Čeština");
      btn.addEventListener("click", () => setLang(lang));
      wrap.appendChild(btn);
    });

    if (host.classList.contains("site-header")) host.appendChild(wrap);
    else host.insertBefore(wrap, host.firstChild);
  }

  function init() {
    ensureStyles();
    mountSwitch();
    apply();
  }

  window.AstarsI18n = { getLang, setLang, t, apply, init };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
