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

Since this is a plain HTML site, you can preview it without installing anything:

**Option A — Open directly in a browser:**
Double-click `index.html`. Most things will work, but some browsers block local files from loading scripts. If the page looks broken, use Option B.

**Option B — Use a simple local server (recommended):**

With Python (comes pre-installed on Mac/Linux):
```bash
python3 -m http.server 8080
```
Then open [http://localhost:8080](http://localhost:8080) in your browser.

With Node.js:
```bash
npx serve .
```
Then open the URL shown in the terminal.

To stop the server press `Ctrl+C` in the terminal.

## Building

There is no build step — the site is already static HTML/CSS/JS and ready to deploy as-is.

## Deploying

To publish the site, upload all project files to your web hosting via FTP:

1. Connect to your hosting using an FTP client (e.g. [FileZilla](https://filezilla-project.org), free)
2. Navigate to the public directory (usually `public_html` or `www`)
3. Upload everything **except**: `README.md`, `CLAUDE.md`, and the Lighthouse report files (`*.report.html`, `*.report.json`)
4. Your site will be live immediately — no restart needed

Files to upload:
```
index.html
gallery.html
schedule.html
robots.txt
sitemap.xml
css/
js/
images/
```

