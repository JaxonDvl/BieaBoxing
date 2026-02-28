/* ============================================================
   BIEA BOXING — CONTENT FILE
   ============================================================
   Acesta este SINGURUL fișier pe care trebuie să-l editezi
   pentru a schimba textul de pe site.

   This is the ONLY file you need to edit to change website text.

   Instrucțiuni / Instructions:
   - Schimbă DOAR textul dintre ghilimele " "
   - Only change text between quotes " "
   - NU modifica structura (paranteze, virgule, etc.)
   - Do NOT modify the structure (brackets, commas, etc.)
   ============================================================ */

const siteContent = {

  // ============================
  // NAVIGATION
  // ============================
  nav: {
    home:     { ro: "Acasă",         en: "Home" },
    about:    { ro: "Despre Noi",    en: "About Us" },
    schedule: { ro: "Program Clase", en: "Class Schedule" },
    trainers: { ro: "Antrenori",     en: "Trainers" },
    events:   { ro: "Evenimente",    en: "Events" },
    contact:  { ro: "Contact",       en: "Contact" },
  },

  // ============================
  // HERO SECTION
  // ============================
  hero: {
    title:        { ro: "BIEA BOXING GYM",                                    en: "BIEA BOXING GYM" },
    subtitle:     { ro: "Pasiune și excelență în boxul profesionist",          en: "Passion and excellence in professional boxing" },
    cta:          { ro: "Contactează-ne",                                      en: "Contact Us" },
    ctaSecondary: { ro: "Descoperă mai mult",                                  en: "Discover More" },
  },

  // ============================
  // ABOUT SECTION
  // ============================
  about: {
    tag:    { ro: "Despre Noi",                  en: "About Us" },
    title:  { ro: "Mai mult decât o sală de box", en: "More than a boxing gym" },
    story1: {
      ro: "Fondată în 2014 de Flavius și Roxana Biea, Biea Boxing reprezintă pasiune și excelență în boxul profesionist. Între 2019-2023, evenimentele noastre au fost singurele gale recunoscute la nivel național și licențiate internațional din România.",
      en: "Founded in 2014 by Flavius and Roxana Biea, Biea Boxing represents passion and excellence in professional boxing. Between 2019-2023, our events were the only nationally recognized and internationally licensed galas in Romania.",
    },
    story2: {
      ro: "Biea Boxing Gym este o sală profesionistă de antrenament care oferă cursuri de box, kickboxing, MMA și autoapărare pentru toate nivelurile — de la începători la avansați.",
      en: "Biea Boxing Gym is a professional training facility offering boxing, kickboxing, MMA, and self-defense classes for all skill levels — from beginners to advanced.",
    },
  },

  // ============================
  // SERVICES
  // ============================
  services: {
    boxing:      { name: { ro: "Box",          en: "Boxing" },       desc: { ro: "Antrenament profesionist de box pentru toate nivelurile.",                  en: "Professional boxing training for all levels." } },
    kickboxing:  { name: { ro: "Kickboxing",   en: "Kickboxing" },   desc: { ro: "Tehnici de lovire cu picioarele și pumnii combinate.",                      en: "Combined kicking and punching striking techniques." } },
    mma:         { name: { ro: "MMA",          en: "MMA" },          desc: { ro: "Arte marțiale mixte — combinație completă de stiluri de luptă.",            en: "Mixed martial arts — a complete combination of fighting styles." } },
    selfDefense: { name: { ro: "Autoapărare",  en: "Self-Defense" }, desc: { ro: "Cursuri practice de autoapărare pentru situații reale.",                    en: "Practical self-defense courses for real-life situations." } },
    kids:        { name: { ro: "Copii",        en: "Kids" },         desc: { ro: "Programe specializate pentru copii și juniori.",                            en: "Specialized programs for children and juniors." } },
    corporate:   { name: { ro: "Corporate",    en: "Corporate" },    desc: { ro: "Sesiuni de team-building pentru companii.",                                 en: "Team-building sessions for companies." } },
  },

  // ============================
  // SCHEDULE
  // ============================
  schedule: {
    tag:   { ro: "Program",        en: "Schedule" },
    title: { ro: "Program Clase",  en: "Class Schedule" },
    note:  { ro: "* Programul poate suferi modificări. Contactează-ne pentru detalii.", en: "* Schedule may change. Contact us for details." },
    time:  { ro: "Ora",      en: "Time" },
    mon:   { ro: "Luni",     en: "Monday" },
    tue:   { ro: "Marți",    en: "Tuesday" },
    wed:   { ro: "Miercuri", en: "Wednesday" },
    thu:   { ro: "Joi",      en: "Thursday" },
    fri:   { ro: "Vineri",   en: "Friday" },
    sat:   { ro: "Sâmbătă",  en: "Saturday" },

    // -------------------------------------------------------
    // TIMETABLE DATA
    // Each row: time slot + what happens each day
    // type: "boxing" | "kickboxing" | "mma" | "kids" | "selfdefense" | "" (empty)
    // name: { ro: "...", en: "..." } — displayed text
    // -------------------------------------------------------
    classes: [
      {
        time: "10:00",
        mon: { type: "boxing",     name: { ro: "Box — Începători",   en: "Boxing — Beginners" } },
        tue: { type: "",           name: { ro: "",                    en: "" } },
        wed: { type: "boxing",     name: { ro: "Box — Începători",   en: "Boxing — Beginners" } },
        thu: { type: "",           name: { ro: "",                    en: "" } },
        fri: { type: "boxing",     name: { ro: "Box — Începători",   en: "Boxing — Beginners" } },
        sat: { type: "boxing",     name: { ro: "Box — Toate Nivelurile", en: "Boxing — All Levels" } },
      },
      {
        time: "16:00",
        mon: { type: "kids",       name: { ro: "Box Copii",          en: "Kids Boxing" } },
        tue: { type: "kids",       name: { ro: "Box Copii",          en: "Kids Boxing" } },
        wed: { type: "kids",       name: { ro: "Box Copii",          en: "Kids Boxing" } },
        thu: { type: "kids",       name: { ro: "Box Copii",          en: "Kids Boxing" } },
        fri: { type: "",           name: { ro: "",                    en: "" } },
        sat: { type: "",           name: { ro: "",                    en: "" } },
      },
      {
        time: "17:30",
        mon: { type: "kickboxing", name: { ro: "Kickboxing",         en: "Kickboxing" } },
        tue: { type: "mma",        name: { ro: "MMA",                en: "MMA" } },
        wed: { type: "kickboxing", name: { ro: "Kickboxing",         en: "Kickboxing" } },
        thu: { type: "mma",        name: { ro: "MMA",                en: "MMA" } },
        fri: { type: "kickboxing", name: { ro: "Kickboxing",         en: "Kickboxing" } },
        sat: { type: "",           name: { ro: "",                    en: "" } },
      },
      {
        time: "19:00",
        mon: { type: "boxing",     name: { ro: "Box — Avansați",     en: "Boxing — Advanced" } },
        tue: { type: "boxing",     name: { ro: "Box — Intermediari", en: "Boxing — Intermediate" } },
        wed: { type: "boxing",     name: { ro: "Box — Avansați",     en: "Boxing — Advanced" } },
        thu: { type: "boxing",     name: { ro: "Box — Intermediari", en: "Boxing — Intermediate" } },
        fri: { type: "selfdefense", name: { ro: "Autoapărare",       en: "Self-Defense" } },
        sat: { type: "",           name: { ro: "",                    en: "" } },
      },
      {
        time: "20:30",
        mon: { type: "boxing",     name: { ro: "Sparring",           en: "Sparring" } },
        tue: { type: "",           name: { ro: "",                    en: "" } },
        wed: { type: "boxing",     name: { ro: "Sparring",           en: "Sparring" } },
        thu: { type: "",           name: { ro: "",                    en: "" } },
        fri: { type: "",           name: { ro: "",                    en: "" } },
        sat: { type: "",           name: { ro: "",                    en: "" } },
      },
    ],
  },

  // ============================
  // TRAINERS
  // To add a trainer: copy a block and fill in the details.
  // Put trainer photos in images/trainers/ folder.
  // ============================
  trainers: {
    tag:   { ro: "Echipa",            en: "Team" },
    title: { ro: "Antrenorii Noștri", en: "Our Trainers" },

    list: [
      {
        name: "Flavius Biea",
        specialty: { ro: "Box Profesionist",          en: "Professional Boxing" },
        bio:       { ro: "Campion național de box profesionist și fondatorul Biea Boxing. Experiență de peste 15 ani în ring.", en: "National professional boxing champion and founder of Biea Boxing. Over 15 years of ring experience." },
        image: "images/trainers/flavius-biea.jpg",
      },
      {
        name: "Trainer 2",
        specialty: { ro: "Kickboxing / MMA",          en: "Kickboxing / MMA" },
        bio:       { ro: "Descriere antrenor. Editează acest text în content.js.", en: "Trainer description. Edit this text in content.js." },
        image: "",  // Lasă gol pentru placeholder / Leave empty for placeholder
      },
      {
        name: "Trainer 3",
        specialty: { ro: "Box Copii",                  en: "Kids Boxing" },
        bio:       { ro: "Descriere antrenor. Editează acest text în content.js.", en: "Trainer description. Edit this text in content.js." },
        image: "",
      },
    ],
  },

  // ============================
  // EVENTS / FIGHT RECORD
  // ============================
  events: {
    tag:         { ro: "Palmares",              en: "Record" },
    title:       { ro: "Flavius Biea — Record Profesionist", en: "Flavius Biea — Professional Record" },
    totalFights: { ro: "Meciuri Totale",        en: "Total Fights" },
    wins:        { ro: "Victorii",              en: "Wins" },
    knockouts:   { ro: "Knockouturi",           en: "Knockouts" },
    titles:      { ro: "Titluri",               en: "Titles" },
    date:        { ro: "Data",                  en: "Date" },
    opponent:    { ro: "Adversar",              en: "Opponent" },
    record:      { ro: "Record",                en: "Record" },
    location:    { ro: "Locație",               en: "Location" },
    result:      { ro: "Rezultat",              en: "Result" },

    fights: [
      { date: "2024-03-15", opponent: "Opponent 16", record: "10-2-0", location: "Timișoara, Romania",  result: "W", method: "WUD" },
      { date: "2023-11-18", opponent: "Opponent 15", record: "8-3-0",  location: "București, Romania",  result: "W", method: "WTKO" },
      { date: "2023-06-10", opponent: "Opponent 14", record: "12-1-0", location: "Timișoara, Romania",  result: "W", method: "WSD" },
      { date: "2023-02-25", opponent: "Opponent 13", record: "9-4-0",  location: "Craiova, Romania",    result: "W", method: "WUD" },
      { date: "2022-10-08", opponent: "Opponent 12", record: "7-2-0",  location: "Budapest, Hungary",   result: "W", method: "WRTD" },
      { date: "2022-05-14", opponent: "Opponent 11", record: "11-3-0", location: "Timișoara, Romania",  result: "W", method: "WSD" },
      { date: "2021-11-20", opponent: "Opponent 10", record: "6-1-0",  location: "Timișoara, Romania",  result: "W", method: "WTKO" },
      { date: "2021-06-12", opponent: "Opponent 9",  record: "8-5-0",  location: "București, Romania",  result: "L", method: "LSD" },
      { date: "2020-12-05", opponent: "Opponent 8",  record: "5-2-0",  location: "Timișoara, Romania",  result: "W", method: "WTKO" },
      { date: "2020-03-07", opponent: "Opponent 7",  record: "10-4-0", location: "Craiova, Romania",    result: "W", method: "WUD" },
      { date: "2019-09-21", opponent: "Opponent 6",  record: "4-0-0",  location: "Timișoara, Romania",  result: "W", method: "WTKO" },
      { date: "2019-04-13", opponent: "Opponent 5",  record: "7-3-0",  location: "Timișoara, Romania",  result: "W", method: "WSD" },
      { date: "2018-10-27", opponent: "Opponent 4",  record: "6-2-0",  location: "Budapest, Hungary",   result: "L", method: "LSD" },
      { date: "2018-05-19", opponent: "Opponent 3",  record: "3-1-0",  location: "Timișoara, Romania",  result: "W", method: "WUD" },
      { date: "2017-11-11", opponent: "Opponent 2",  record: "5-4-0",  location: "Timișoara, Romania",  result: "W", method: "WTKO" },
      { date: "2017-06-03", opponent: "Opponent 1",  record: "2-0-0",  location: "Timișoara, Romania",  result: "W", method: "WTKO" },
    ],
  },

  // ============================
  // CONTACT
  // ============================
  contact: {
    tag:                { ro: "Contact",                 en: "Contact" },
    title:              { ro: "Hai la antrenament",       en: "Join the training" },
    addressLabel:       { ro: "Adresă",                  en: "Address" },
    address:            { ro: "Aleea Viilor Nr. 12A, Etaj 1, Timișoara", en: "Aleea Viilor Nr. 12A, 1st Floor, Timișoara" },
    phoneLabel:         { ro: "Telefon",                 en: "Phone" },
    emailLabel:         { ro: "Email",                   en: "Email" },
    nameLabel:          { ro: "Nume",                    en: "Name" },
    namePlaceholder:    { ro: "Numele tău",              en: "Your name" },
    emailFormLabel:     { ro: "Email",                   en: "Email" },
    emailPlaceholder:   { ro: "email@exemplu.com",       en: "email@example.com" },
    messageLabel:       { ro: "Mesaj",                   en: "Message" },
    messagePlaceholder: { ro: "Scrie mesajul tău aici...", en: "Write your message here..." },
    send:               { ro: "Trimite mesajul",          en: "Send Message" },
  },

  // ============================
  // FOOTER
  // ============================
  footer: {
    tagline:     { ro: "Pasiune și excelență în boxul profesionist.", en: "Passion and excellence in professional boxing." },
    navTitle:    { ro: "Navigare",     en: "Navigation" },
    socialTitle: { ro: "Social Media", en: "Social Media" },
    rights:      { ro: "Toate drepturile rezervate.", en: "All rights reserved." },
  },

  // ============================
  // WHATSAPP BUTTON
  // ============================
  whatsapp: {
    tooltip:   { ro: "Contactează-ne pe WhatsApp", en: "Contact us on WhatsApp" },
    ariaLabel: { ro: "Contact WhatsApp",            en: "WhatsApp Contact" },
  },
};
