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
    intro: {
      ro: "Totul a început cu o pasiune. A devenit un standard.",
      en: "It all started with a passion. It became a standard.",
    },
    story1: {
      ro: "În 2014, Flavius și Roxana Biea au pus bazele Biea Promotion, transformând dragostea pentru box într-o viziune: evenimente de nivel înalt, construite cu respect pentru sport și pentru sportivi.",
      en: "In 2014, Flavius and Roxana Biea founded Biea Promotion, turning a love for boxing into a vision: high-level events built with respect for the sport and for the athletes.",
    },
    story2: {
      ro: "De atunci, fiecare gală a însemnat mai mult decât un eveniment — a fost o experiență, transmisă publicului din România și din întreaga lume.",
      en: "Since then, every gala has meant more than just an event — it has been an experience, broadcast to audiences in Romania and around the world.",
    },
    story3: {
      ro: "Între 2019 și 2023, am ridicat standardele boxului profesionist din România, fiind singurii organizatori ale căror gale au fost recunoscute și licențiate internațional.",
      en: "Between 2019 and 2023, we raised the standards of professional boxing in Romania, being the only organizers whose galas were nationally recognized and internationally licensed.",
    },
    story4: {
      ro: "Astăzi, continuăm să construim viitorul boxului — susținând performanța, descoperind campioni și inspirând o nouă generație.",
      en: "Today, we continue to build the future of boxing — supporting performance, discovering champions, and inspiring a new generation.",
    },
    quote1: {
      ro: "„Biea Promotion nu este doar despre box. Este despre oameni, despre visuri și despre curajul de a începe, indiferent de punctul din care pleci.",
      en: "\u201cBiea Promotion is not just about boxing. It\u2019s about people, about dreams, and about the courage to start, no matter where you begin.",
    },
    quote2: {
      ro: "Știm că, uneori, există temeri, preconcepții sau motive care îi țin pe oameni departe de sporturile de contact. Însă credem cu tărie că boxul nu este doar despre luptă — este despre disciplină, echilibru și încredere în sine. De aceea, îi încurajăm pe toți cei care ne descoperă să aibă curajul de a face primul pas.",
      en: "We know that sometimes fears, preconceptions, or reasons keep people away from contact sports. But we firmly believe that boxing is not just about fighting \u2014 it\u2019s about discipline, balance, and self-confidence. That\u2019s why we encourage everyone who discovers us to have the courage to take the first step.",
    },
    quote3: {
      ro: "Ușile noastre sunt deschise pentru fiecare dintre voi. Vă așteptăm să deveniți parte din povestea noastră.\u201d",
      en: "Our doors are open to each of you. We look forward to you becoming part of our story.\u201d",
    },
    signature: {
      ro: "Roxana & Flavius Biea",
      en: "Roxana & Flavius Biea",
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
  // SPONSORS
  // ============================
  sponsors: {
    tag:   { ro: "Parteneri",            en: "Partners" },
    title: { ro: "Sponsori & Parteneri", en: "Sponsors & Partners" },
  },

  // ============================
  // SCHEDULE
  // ============================
  schedule: {
    tag:   { ro: "Program",        en: "Schedule" },
    title: { ro: "Program Clase",  en: "Class Schedule" },
    note:  { ro: "* Programul poate suferi modificări. Contactează-ne pentru detalii.", en: "* Schedule may change. Contact us for details." },
    today:  { ro: "azi", en: "today" },
    groupA: { ro: "Grupa A",  en: "Group A" },
    groupB: { ro: "Grupa B",  en: "Group B" },
    group5: { ro: "Grupa 5",  en: "Group 5" },
    time:  { ro: "Ora",      en: "Time" },
    mon:   { ro: "Luni",     en: "Monday" },
    tue:   { ro: "Marți",    en: "Tuesday" },
    wed:   { ro: "Miercuri", en: "Wednesday" },
    thu:   { ro: "Joi",      en: "Thursday" },
    fri:   { ro: "Vineri",   en: "Friday" },
    sat:   { ro: "Sâmbătă",  en: "Saturday" },
    sun:   { ro: "Duminică", en: "Sunday" },

    // -------------------------------------------------------
    // TIMETABLE DATA
    // Each row: time slot + what happens each day
    // type: "boxing" | "kickboxing" | "mma" | "kids" | "selfdefense" | "" (empty)
    // name: { ro: "...", en: "..." } — displayed text
    // -------------------------------------------------------
    classes: [
      {
        time: "13:00", endTime: "14:30",
        mon: { type: "",           name: { ro: "", en: "" } },
        tue: { type: "",           name: { ro: "", en: "" } },
        wed: { type: "",           name: { ro: "", en: "" } },
        thu: { type: "",           name: { ro: "", en: "" } },
        fri: { type: "",           name: { ro: "", en: "" } },
        sat: { type: "boxing-5",   name: { ro: "Grupa 5",            en: "Group 5" } },
        sun: { type: "",           name: { ro: "", en: "" } },
      },
      {
        time: "15:00", endTime: "16:00",
        mon: { type: "",           name: { ro: "", en: "" } },
        tue: { type: "",           name: { ro: "", en: "" } },
        wed: { type: "",           name: { ro: "", en: "" } },
        thu: { type: "",           name: { ro: "", en: "" } },
        fri: { type: "",           name: { ro: "", en: "" } },
        sat: { type: "",           name: { ro: "", en: "" } },
        sun: { type: "kids",       name: { ro: "Copii (4-12 ani)",   en: "Kids (4-12 yrs)" } },
      },
      {
        time: "17:30", endTime: "18:30",
        mon: { type: "",           name: { ro: "", en: "" } },
        tue: { type: "kids",       name: { ro: "Copii (4-12 ani)",   en: "Kids (4-12 yrs)" } },
        wed: { type: "",           name: { ro: "", en: "" } },
        thu: { type: "kids",       name: { ro: "Copii (4-12 ani)",   en: "Kids (4-12 yrs)" } },
        fri: { type: "",           name: { ro: "", en: "" } },
        sat: { type: "",           name: { ro: "", en: "" } },
        sun: { type: "",           name: { ro: "", en: "" } },
      },
      {
        time: "18:00", endTime: "19:30",
        mon: { type: "boxing-a",   name: { ro: "Grupa A",            en: "Group A" } },
        tue: { type: "",           name: { ro: "", en: "" } },
        wed: { type: "boxing-a",   name: { ro: "Grupa A",            en: "Group A" } },
        thu: { type: "",           name: { ro: "", en: "" } },
        fri: { type: "boxing-a",   name: { ro: "Grupa A",            en: "Group A" } },
        sat: { type: "boxing-b",   name: { ro: "Grupa B",            en: "Group B" } },
        sun: { type: "",           name: { ro: "", en: "" } },
      },
      {
        time: "18:30", endTime: "20:00",
        mon: { type: "",           name: { ro: "", en: "" } },
        tue: { type: "boxing-5",   name: { ro: "Grupa 5",            en: "Group 5" } },
        wed: { type: "",           name: { ro: "", en: "" } },
        thu: { type: "boxing-5",   name: { ro: "Grupa 5",            en: "Group 5" } },
        fri: { type: "",           name: { ro: "", en: "" } },
        sat: { type: "",           name: { ro: "", en: "" } },
        sun: { type: "",           name: { ro: "", en: "" } },
      },
      {
        time: "20:00", endTime: "21:30",
        mon: { type: "kickboxing", name: { ro: "Kickbox",            en: "Kickboxing" } },
        tue: { type: "boxing-b",   name: { ro: "Grupa B",            en: "Group B" } },
        wed: { type: "kickboxing", name: { ro: "Kickbox",            en: "Kickboxing" } },
        thu: { type: "boxing-b",   name: { ro: "Grupa B",            en: "Group B" } },
        fri: { type: "kickboxing", name: { ro: "Kickbox",            en: "Kickboxing" } },
        sat: { type: "",           name: { ro: "", en: "" } },
        sun: { type: "",           name: { ro: "", en: "" } },
      },
    ],
  },

  // ============================
  // PRIVATE CLASSES
  // ============================
  private: {
    tag:   { ro: "One-to-One",                              en: "One-to-One" },
    title: { ro: "Clase Private",                           en: "Private Classes" },
    desc:  { ro: "Contactați-ne pentru clase private",      en: "Contact us for private classes" },
    cta:   { ro: "Programează o Ședință",                   en: "Book an Appointment" },
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
        slug: "flavius-biea",
        specialty: { ro: "Antrenor Box — Licențiat", en: "Licensed Boxing Coach" },
        bio: {
          ro: "Antrenamente cu clasa, grup restrâns și private. Box Amator: 316 meciuri (298V / 18Î), 8× Campion Național, 3× Campion European, 1× Campion Mondial, 2× Vice-campion Mondial. Box Profesionist: 24V / 2Î — 1× Campion WBA Continental, 2× WBC Continental, 4× IBA Intercontinental, 1× Campion Mondial IBA.",
          en: "Group, small-group and private sessions. Amateur Boxing: 316 bouts (298W / 18L), 8× National Champion, 3× European Champion, 1× World Champion, 2× World Runner-up. Pro Boxing: 24W / 2L — 1× WBA Continental, 2× WBC Continental, 4× IBA Intercontinental, 1× IBA World Champion.",
        },
        image: "images/trainers/flavius-biea.webp",
        schedule: [
          { days: { ro: "Luni, Miercuri, Vineri", en: "Mon, Wed, Fri" }, time: "18:00 – 19:30", class: { ro: "Grupa A — Box", en: "Group A — Boxing" }, type: "boxing-a" },
        ],
      },
      {
        name: "Claudiu Ienci",
        slug: "claudiu-ienci",
        specialty: { ro: "Antrenor Box", en: "Boxing Coach" },
        bio: {
          ro: "Antrenor Box cu 4 ani experiență. Antrenamente cu clasa și private. Box Amator: 8 ani experiență, 2× Vicecampion Național, multiplu medaliat la turnee naționale și internaționale. Box Profesionist: 5 victorii (4 KO) și 1 înfrângere.",
          en: "Boxing Coach with 4 years of coaching experience. Group and private sessions. Amateur Boxing: 8 years experience, 2× National Runner-up, multiple medals at national and international tournaments. Pro Boxing: 5 wins (4 KO) and 1 loss.",
        },
        image: "images/trainers/claudiu-ienci.webp",
        schedule: [
          { days: { ro: "Marți, Joi", en: "Tue, Thu" }, time: "18:30 – 20:00", class: { ro: "Grupa 5 — Box", en: "Group 5 — Boxing" }, type: "boxing-5" },
          { days: { ro: "Marți, Joi", en: "Tue, Thu" }, time: "20:00 – 21:30", class: { ro: "Grupa B — Box", en: "Group B — Boxing" }, type: "boxing-b" },
          { days: { ro: "Sâmbătă", en: "Saturday" }, time: "13:00 – 14:30", class: { ro: "Grupa 5 — Box", en: "Group 5 — Boxing" }, type: "boxing-5" },
          { days: { ro: "Sâmbătă", en: "Saturday" }, time: "18:00 – 19:30", class: { ro: "Grupa B — Box", en: "Group B — Boxing" }, type: "boxing-b" },
        ],
      },
      {
        name: "Flavius Andrei",
        slug: "flavius-andrei",
        specialty: { ro: "Antrenor MMA & Self Defense", en: "MMA & Self-Defense Coach" },
        bio: {
          ro: "Antrenamente cu grupul și private. 3× Campion Național la lupte libere, 6× Vicecampion Național lupte libere, 2014–2019 component al lotului național de lupte libere, 2020 luptător profesionist MMA.",
          en: "Group and private sessions. 3× National Freestyle Wrestling Champion, 6× National Runner-up, 2014–2019 member of the national wrestling team, 2020 professional MMA fighter.",
        },
        image: "images/trainers/flavius-andrei.webp",
        schedule: [],
      },
      {
        name: "Gheorghe Tudosie",
        slug: "gheorghe-tudosie",
        specialty: { ro: "Antrenor Box", en: "Boxing Trainer" },
        bio: {
          ro: "Antrenor Box specializat în: Managementul Greutății, Coaching Box, Programe de Forță și Condiționare pentru sport, Antrenament pentru Evenimente Speciale (Tough Mudder, Maraton etc.).",
          en: "Boxing Trainer specializing in: Weight Management, Boxing Coaching, Strength & Conditioning Programmes for sport, Special Event Training (Tough Mudder, Marathon etc.).",
        },
        image: "images/trainers/gheorghe-tudosie.webp",
        schedule: [],
      },
      {
        name: "Mariana Condescu",
        slug: "mariana-condescu",
        specialty: { ro: "Instructor Box & Kickbox", en: "Boxing & Kickboxing Instructor" },
        bio: {
          ro: "Instructor Box și Kickbox cu 4 ani experiență. Antrenamente cu clasa și private. 10 ani Karate Wu-Thao (Centură Verde), 2 ani Karate Shotokan, 7 ani Kickbox — multiplă medaliată la competiții naționale (3 medalii Locul 1), 4 ani Box.",
          en: "Boxing & Kickboxing Instructor with 4 years of coaching experience. Group and private sessions. 10 years Karate Wu-Thao (Green Belt), 2 years Karate Shotokan, 7 years Kickboxing — multiple national medals (3× 1st place), 4 years Boxing.",
        },
        image: "images/trainers/mariana-condescu.webp",
        schedule: [
          { days: { ro: "Luni, Miercuri, Vineri", en: "Mon, Wed, Fri" }, time: "20:00 – 21:30", class: { ro: "Kickbox", en: "Kickboxing" }, type: "kickboxing" },
          { days: { ro: "Marți, Joi", en: "Tue, Thu" }, time: "17:30 – 18:30", class: { ro: "Copii (4–12 ani)", en: "Kids (4–12 yrs)" }, type: "kids" },
          { days: { ro: "Duminică", en: "Sunday" }, time: "15:00 – 16:00", class: { ro: "Copii (4–12 ani)", en: "Kids (4–12 yrs)" }, type: "kids" },
        ],
      },
    ],
  },

  // ============================
  // TRAINER PROFILE PAGE
  // ============================
  trainerPage: {
    back:               { ro: "← Înapoi la Antrenori", en: "← Back to Trainers" },
    viewProfile:        { ro: "Vezi Profilul →",        en: "View Profile →" },
    scheduleTitle:      { ro: "Program de Antrenament", en: "Training Schedule" },
    days:               { ro: "Zile",                   en: "Days" },
    time:               { ro: "Ora",                    en: "Time" },
    class:              { ro: "Clasă",                  en: "Class" },
    contactForSchedule: { ro: "Contactați-ne pentru detalii despre program.", en: "Contact us for schedule details." },
    privateTitle:       { ro: "Clase Private",          en: "Private Sessions" },
    privateDesc:        { ro: "Contactați-ne pentru a programa o ședință privată cu acest antrenor.", en: "Contact us to book a private session with this trainer." },
    privateCta:         { ro: "Programează o Ședință",  en: "Book a Session" },
  },

  // ============================
  // EVENTS / FIGHT RECORD
  // ============================
  events: {
    tag:         { ro: "Palmares",              en: "Record" },
    title:       { ro: "Flavius Biea — Record Profesionist", en: "Flavius Biea — Professional Record" },
    totalFights: { ro: "Runde Boxate",          en: "Rounds Boxed" },
    wins:        { ro: "Victorii",              en: "Fights Won" },
    knockouts:   { ro: "Knockouturi",           en: "Knockouts" },
    titles:      { ro: "Titluri Curente",       en: "Current Titles" },
    date:        { ro: "Data",                  en: "Date" },
    opponent:    { ro: "Adversar",              en: "Opponent" },
    record:      { ro: "Record",                en: "Record" },
    location:    { ro: "Locație",               en: "Location" },
    result:      { ro: "Rezultat",              en: "Result" },

    fights: [
      { date: "2024-05-24", opponent: "Jonathan Jose Eniz", record: "33-19-1", location: "Sala Polivalenta, Craiova",          result: "W", method: "WSD" },
      { date: "2024-04-24", opponent: "Darleys Perez",      record: "34-7-2",  location: "Sala Constantin Jude, Timișoara",   result: "W", method: "WSD" },
      { date: "2023-05-05", opponent: "Juan Jose Velasco",  record: "24-3-0",  location: "Sports Hall, Mioveni",               result: "W", method: "WSD" },
      { date: "2022-05-07", opponent: "Ricardo Ruben Villalba", record: "20-5-1", location: "Sala Constantin Jude, Timișoara", result: "W", method: "WSD" },
      { date: "2021-07-30", opponent: "Ivan Alvarez",        record: "31-11-1", location: "Sala Constantin Jude, Timișoara",   result: "W", method: "WUD" },
      { date: "2020-08-20", opponent: "Teodor Nikolovo",    record: "5-35-4",  location: "Roman Arenas, București",            result: "W", method: "WRTD" },
      { date: "2019-11-16", opponent: "Berman Sanchez",     record: "29-10-3", location: "York Hall, Bethnal Green",           result: "W", method: "WPTS" },
      { date: "2019-06-28", opponent: "Jesus Gurrola",      record: "27-13-3", location: "Sala Olympia, Timișoara",            result: "W", method: "WUD" },
      { date: "2018-11-17", opponent: "Yeison Gonzalez",    record: "12-1-0",  location: "Sala Polivalenta, Arad",             result: "W", method: "WRTD" },
      { date: "2018-09-14", opponent: "Jemal Shalamberidze", record: "8-4-0", location: "Kalaszi Sporthall, Budakalász",       result: "W", method: "WRTD" },
      { date: "2018-06-02", opponent: "Chaquib Fadli",      record: "13-11-0", location: "Thury Castle, Várpalota",            result: "W", method: "WTKO" },
      { date: "2018-04-13", opponent: "Giorgi Gujejiani",   record: "8-7-2",   location: "Trade Center, Oradea",               result: "W", method: "WUD" },
      { date: "2017-12-08", opponent: "Valentyn Golovko",   record: "23-2-0",  location: "Romeo Iamandi, Buzău",               result: "L", method: "LTKO" },
      { date: "2017-05-06", opponent: "Laszlo Toth",        record: "23-2-1",  location: "Sala Constantin Jude, Timișoara",   result: "W", method: "WUD" },
    ],
  },

  // ============================
  // OPENING HOURS
  // ============================
  hours: {
    label:       { ro: "Program",          en: "Hours" },
    monFri:      { ro: "Luni – Vineri",    en: "Mon – Fri" },
    monFriTime:  { ro: "07:00 – 22:00",    en: "7 am – 10 pm" },
    sat:         { ro: "Sâmbătă",          en: "Saturday" },
    satTime:     { ro: "08:00 – 16:00",    en: "8 am – 4 pm" },
    sun:         { ro: "Duminică",         en: "Sunday" },
    sunTime:     { ro: "Închis",           en: "Closed" },
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
  },

  // ============================
  // COOKIE CONSENT BANNER
  // ============================
  cookies: {
    message:  { ro: "Folosim cookie-uri pentru a îmbunătăți experiența ta pe site.", en: "We use cookies to improve your experience on this site." },
    accept:   { ro: "Accept",        en: "Accept" },
    decline:  { ro: "Refuz",         en: "Decline" },
  },

  // ============================
  // WHATSAPP BUTTON
  // ============================
  whatsapp: {
    tooltip:   { ro: "Contactează-ne pe WhatsApp", en: "Contact us on WhatsApp" },
    ariaLabel: { ro: "Contact WhatsApp",            en: "WhatsApp Contact" },
  },
};
