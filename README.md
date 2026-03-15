# Biea Boxing — Website

## How to edit content

**The only file you need to edit is `js/content.js`**

### Steps:

1. Open `js/content.js` with any text editor (Notepad, TextEdit, VS Code)
2. Find the text you want to change
3. Modify ONLY the text between the quotes `" "`
4. Save the file
5. Reload the page in the browser (F5 or Ctrl+R)

### Examples:

**Changing a text:**
```js
// Before:
title: { ro: "Text vechi", en: "Old text" },

// After:
title: { ro: "Text nou", en: "New text" },
```

**Adding a trainer:**
1. Open `js/content.js`
2. Find the `trainers > list` section
3. Copy an existing block and change the data:
```js
{
  name: "Trainer Name",
  specialty: { ro: "Specializare",  en: "Specialty" },
  bio:       { ro: "Bio în română", en: "Bio in English" },
  image: "images/trainers/trainer-name.jpg",
},
```
4. Put the trainer's photo in the `images/trainers/` folder

**Updating the class schedule:**
- Find the `schedule > classes` section in `content.js`
- Each row has: `time`, `mon`, `tue`, `wed`, `thu`, `fri`, `sat`
- Valid types: `"boxing"`, `"kickboxing"`, `"mma"`, `"kids"`, `"selfdefense"`

**Adding a fight to the record:**
- Find the `events > fights` section
- Add a new row at the beginning of the list:
```js
{ date: "2024-06-15", opponent: "Opponent Name", record: "10-2-0", location: "Timișoara", result: "W", method: "WTKO" },
```

## File structure

```
BieaBoxing/
├── index.html         ← Main page (DO NOT edit)
├── css/style.css      ← Styles (DO NOT edit)
├── js/
│   ├── content.js     ← ✏️ EDIT THIS FILE for text
│   ├── i18n.js        ← Translation system (DO NOT edit)
│   └── app.js         ← Site logic (DO NOT edit)
├── images/
│   ├── hero/          ← Hero images (main page background)
│   ├── trainers/      ← Trainer photos
│   └── events/        ← Event photos
└── README.md          ← This file
```

## How to add/change images

1. Put the image in the appropriate folder (`images/trainers/`, `images/hero/`, etc.)
2. Use the filename (no spaces, use hyphens) e.g. `flavius-biea.jpg`
3. Update the path in `content.js`, e.g. `image: "images/trainers/flavius-biea.jpg"`

## Running the site locally

```bash
bash scripts/start.sh
```

Opens a local server at [http://localhost:8080](http://localhost:8080). Press `Ctrl+C` to stop.

Requires Python 3 (pre-installed on Mac/Linux).

## Building

```bash
bash scripts/build.sh
```

Minifies JS and CSS, then outputs everything to the `dist/` folder, ready for deployment.

Requires Node.js for the first run (downloads `terser` and `clean-css-cli` automatically via `npx`).

## Deploying

The deploy script builds the project and uploads `dist/` to your server via FTP.

**First-time setup:**
1. Install `lftp`: `brew install lftp`
2. Copy `.env.example` to `.env` and fill in your FTP credentials:
```
FTP_HOST=your-host.com
FTP_USER=your-username
FTP_PASS=your-password
FTP_DIR=/public_html
```

**Deploy:**
```bash
bash scripts/deploy.sh
```

The `.env` file is git-ignored — never commit it.

