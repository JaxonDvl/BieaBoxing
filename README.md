# Biea Boxing — Website

## Cum să editezi conținutul / How to edit content

**Singurul fișier pe care trebuie să-l editezi este `js/content.js`**

### Pași:

1. Deschide fișierul `js/content.js` cu orice editor de text (Notepad, TextEdit, VS Code)
2. Găsește textul pe care vrei să-l schimbi
3. Modifică DOAR textul dintre ghilimele `" "`
4. Salvează fișierul
5. Reîncarcă pagina în browser (F5 sau Ctrl+R)

### Exemple:

**Schimbarea unui text:**
```js
// Înainte:
title: { ro: "Text vechi", en: "Old text" },

// După:
title: { ro: "Text nou", en: "New text" },
```

**Adăugarea unui antrenor:**
1. Deschide `js/content.js`
2. Găsește secțiunea `trainers > list`
3. Copiază un bloc existent și schimbă datele:
```js
{
  name: "Nume Antrenor",
  specialty: { ro: "Specializare",  en: "Specialty" },
  bio:       { ro: "Bio în română", en: "Bio in English" },
  image: "images/trainers/nume-antrenor.jpg",
},
```
4. Pune poza antrenorului în folderul `images/trainers/`

**Actualizarea programului de clase:**
- Găsește secțiunea `schedule > classes` în `content.js`
- Fiecare rând are: `time`, `mon`, `tue`, `wed`, `thu`, `fri`, `sat`
- Tipuri valide: `"boxing"`, `"kickboxing"`, `"mma"`, `"kids"`, `"selfdefense"`

**Adăugarea unui meci în palmares:**
- Găsește secțiunea `events > fights`
- Adaugă un rând nou la începutul listei:
```js
{ date: "2024-06-15", opponent: "Nume Adversar", record: "10-2-0", location: "Timișoara", result: "W", method: "WTKO" },
```

## Structura fișierelor

```
BieaBoxing/
├── index.html         ← Pagina principală (NU edita)
├── css/style.css      ← Stiluri (NU edita)
├── js/
│   ├── content.js     ← ✏️ EDITEAZĂ ACEST FIȘIER pentru text
│   ├── i18n.js        ← Sistem de traduceri (NU edita)
│   └── app.js         ← Logică site (NU edita)
├── images/
│   ├── hero/          ← Poze hero (fundal pagină principală)
│   ├── trainers/      ← Poze antrenori
│   └── events/        ← Poze evenimente
└── README.md          ← Acest fișier
```

## Cum să adaugi/schimbi poze

1. Pune poza în folderul potrivit (`images/trainers/`, `images/hero/`, etc.)
2. Folosește numele fișierului (fără spații, cu cratimă) de ex. `flavius-biea.jpg`
3. Actualizează calea în `content.js`, de ex. `image: "images/trainers/flavius-biea.jpg"`

## Formularul de contact

Formularul de contact trimite mesajul prin WhatsApp. Dacă vrei să primești mesajele pe email:
1. Creează un cont gratuit pe [Formspree](https://formspree.io)
2. Înlocuiește `YOUR_FORM_ID` în `index.html` cu ID-ul tău Formspree
