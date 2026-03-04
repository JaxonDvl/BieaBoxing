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
    gallery:  { ro: "Galerie",       en: "Gallery" },
    contact:  { ro: "Contact",       en: "Contact" },
  },

  // ============================
  // HERO SECTION
  // ============================
  hero: {
    title:        { ro: "BIEA BOXING GYM",                                    en: "BIEA BOXING GYM" },
    subtitle:     { ro: "Sala de box nr. 1 din Timișoara — Box, Kickboxing, MMA", en: "Timișoara's #1 boxing gym — Boxing, Kickboxing, MMA" },
    cta:          { ro: "Începe antrenamentul",                                en: "Start Training" },
    ctaSecondary: { ro: "Descoperă mai mult",                                  en: "Discover More" },
  },

  // ============================
  // ABOUT SECTION
  // ============================
  about: {
    tag:    { ro: "Despre Noi",                  en: "About Us" },
    title:  { ro: "Mai mult decât o sală de box în Timișoara", en: "More than a boxing gym in Timișoara" },
    story1: {
      ro: "Fondată în 2014 de campionul național Flavius Biea și Roxana Biea, Biea Boxing este cea mai importantă sală de box din Timișoara. Între 2019-2023, evenimentele Biea Promotion au fost singurele gale de box recunoscute la nivel național și licențiate internațional din România.",
      en: "Founded in 2014 by national champion Flavius Biea and Roxana Biea, Biea Boxing is Timișoara's premier boxing gym. Between 2019-2023, Biea Promotion events were the only nationally recognized and internationally licensed boxing galas in Romania.",
    },
    story2: {
      ro: "Biea Boxing Gym este sala de box profesionistă din Timișoara care oferă cursuri de box, kickboxing, MMA, autoapărare și programe pentru copii. Indiferent dacă ești începător sau boxer avansat, antrenorii noștri te ghidează către obiectivele tale.",
      en: "Biea Boxing Gym is Timișoara's professional boxing facility offering boxing, kickboxing, MMA, self-defense, and kids programs. Whether you're a complete beginner or an advanced fighter, our trainers guide you towards your goals.",
    },
  },

  // ============================
  // SERVICES
  // ============================
  services: {
    boxing:      { name: { ro: "Box",          en: "Boxing" },       desc: { ro: "Cursuri de box în Timișoara pentru începători și avansați. Antrenament profesionist sub îndrumarea campionului Flavius Biea.", en: "Boxing classes in Timișoara for beginners and advanced. Professional training under champion Flavius Biea." } },
    kickboxing:  { name: { ro: "Kickboxing",   en: "Kickboxing" },   desc: { ro: "Cursuri de kickboxing în Timișoara. Tehnici de lovire cu picioarele și pumnii pentru fitness și competiție.", en: "Kickboxing classes in Timișoara. Kicking and punching techniques for fitness and competition." } },
    mma:         { name: { ro: "MMA",          en: "MMA" },          desc: { ro: "Antrenament MMA în Timișoara — arte marțiale mixte cu antrenori experimentați.", en: "MMA training in Timișoara — mixed martial arts with experienced trainers." } },
    selfDefense: { name: { ro: "Autoapărare",  en: "Self-Defense" }, desc: { ro: "Cursuri de autoapărare în Timișoara. Tehnici practice pentru situații reale, accesibile oricui.", en: "Self-defense classes in Timișoara. Practical techniques for real-life situations, accessible to everyone." } },
    kids:        { name: { ro: "Box Copii",    en: "Kids Boxing" },  desc: { ro: "Box pentru copii în Timișoara. Programe specializate pentru copii și juniori într-un mediu sigur și distractiv.", en: "Kids boxing in Timișoara. Specialized programs for children and juniors in a safe, fun environment." } },
    corporate:   { name: { ro: "Corporate",    en: "Corporate" },    desc: { ro: "Team-building prin box în Timișoara. Sesiuni corporate unice pentru companii care vor altceva.", en: "Boxing team-building in Timișoara. Unique corporate sessions for companies looking for something different." } },
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
        specialty: { ro: "Antrenor Box — Licențiat", en: "Licensed Boxing Coach" },
        bio: {
          ro: "Antrenamente cu clasa, grup restrâns și private. Box Amator: 316 meciuri (298V / 18Î), 8× Campion Național, 3× Campion European, 1× Campion Mondial, 2× Vice-campion Mondial. Box Profesionist: 24V / 2Î — 1× Campion WBA Continental, 2× WBC Continental, 4× IBA Intercontinental, 1× Campion Mondial IBA.",
          en: "Group, small-group and private sessions. Amateur Boxing: 316 bouts (298W / 18L), 8× National Champion, 3× European Champion, 1× World Champion, 2× World Runner-up. Pro Boxing: 24W / 2L — 1× WBA Continental, 2× WBC Continental, 4× IBA Intercontinental, 1× IBA World Champion.",
        },
        image: "images/trainers/flavius-biea.jpeg",
      },
      {
        name: "Claudiu Ienci",
        specialty: { ro: "Antrenor Box", en: "Boxing Coach" },
        bio: {
          ro: "Antrenor Box cu 4 ani experiență. Antrenamente cu clasa și private. Box Amator: 8 ani experiență, 2× Vicecampion Național, multiplu medaliat la turnee naționale și internaționale. Box Profesionist: 5 victorii (4 KO) și 1 înfrângere.",
          en: "Boxing Coach with 4 years of coaching experience. Group and private sessions. Amateur Boxing: 8 years experience, 2× National Runner-up, multiple medals at national and international tournaments. Pro Boxing: 5 wins (4 KO) and 1 loss.",
        },
        image: "images/trainers/claudiu-ienci.jpeg",
      },
      {
        name: "Flavius Andrei",
        specialty: { ro: "Antrenor MMA & Self Defense", en: "MMA & Self-Defense Coach" },
        bio: {
          ro: "Antrenamente cu grupul și private. 3× Campion Național la lupte libere, 6× Vicecampion Național lupte libere, 2014–2019 component al lotului național de lupte libere, 2020 luptător profesionist MMA.",
          en: "Group and private sessions. 3× National Freestyle Wrestling Champion, 6× National Runner-up, 2014–2019 member of the national wrestling team, 2020 professional MMA fighter.",
        },
        image: "images/trainers/flavius-andrei.jpeg",
      },
      {
        name: "Mariana Condescu",
        specialty: { ro: "Instructor Box & Kickbox", en: "Boxing & Kickboxing Instructor" },
        bio: {
          ro: "Instructor Box și Kickbox cu 4 ani experiență. Antrenamente cu clasa și private. 10 ani Karate Wu-Thao (Centură Verde), 2 ani Karate Shotokan, 7 ani Kickbox — multiplă medaliată la competiții naționale (3 medalii Locul 1), 4 ani Box.",
          en: "Boxing & Kickboxing Instructor with 4 years of coaching experience. Group and private sessions. 10 years Karate Wu-Thao (Green Belt), 2 years Karate Shotokan, 7 years Kickboxing — multiple national medals (3× 1st place), 4 years Boxing.",
        },
        image: "images/trainers/mariana-condescu.jpeg",
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
    title:              { ro: "Hai la antrenament în Timișoara", en: "Join the training in Timișoara" },
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
    tagline:     { ro: "Sala de box profesionistă din Timișoara — Box, Kickboxing, MMA.", en: "Timișoara's professional boxing gym — Boxing, Kickboxing, MMA." },
    navTitle:    { ro: "Navigare",     en: "Navigation" },
    socialTitle: { ro: "Social Media", en: "Social Media" },
    rights:      { ro: "Toate drepturile rezervate.", en: "All rights reserved." },
  },

  // ============================
  // GALLERY
  // ============================
  gallery: {
    tag:              { ro: "Galerie",                   en: "Gallery" },
    title:            { ro: "Foto & Video",              en: "Photos & Videos" },
    subtitle:         { ro: "Momente din antrenamente, meciuri și gale de box", en: "Moments from training, fights and boxing galas" },
    filterAll:        { ro: "Toate",                     en: "All" },
    filterPhotos:     { ro: "Ring / Gym",                en: "Ring / Gym" },
    filterFights:     { ro: "Meciuri",                   en: "Fights" },
    filterVideos:     { ro: "Video",                     en: "Videos" },
    photoPlaceholder: { ro: "Foto în curând",            en: "Photo coming soon" },
    videoPlaceholder: { ro: "Video în curând",           en: "Video coming soon" },
    comingSoon:       { ro: "Conținut nou va fi adăugat în curând. Urmărește-ne pe social media!", en: "New content will be added soon. Follow us on social media!" },
  },

  // ============================
  // WHATSAPP BUTTON
  // ============================
  whatsapp: {
    tooltip:   { ro: "Contactează-ne pe WhatsApp", en: "Contact us on WhatsApp" },
    ariaLabel: { ro: "Contact WhatsApp",            en: "WhatsApp Contact" },
  },
};
