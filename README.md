# 🏆 Certificate Search Portal (Static GitHub Pages)

Looking for an **easy, free, and no-backend way** to distribute certificates online?  
Here’s a **ready-to-use GitHub Pages** project that lets people search and download their certificates by **Team ID** — all with just HTML + JavaScript. 🚀  

---

## 🌟 What This Project Does
- 📂 Stores all certificates as image files in a single folder.
- 🔍 Lets users enter a **Team ID** to instantly find matching certificates.
- 📥 Allows direct download of the certificate images.
- 💻 Runs **entirely on GitHub Pages** — no hosting fees, no backend servers.

---

## 📦 Folder Structure
/index.html → Main search page
/script.js → Handles searching & displaying certificates 
/style.css → Optional styling
/certificates/ → All certificate images go here
/certificates.json → List of all certificate filenames
/generate_json.py → Script to auto-update certificates.json


---

## 📸 File Naming Format
Every certificate image should follow this naming pattern:
teamID_PersonName.png


Example:
team101_Alice.png
team101_Bob.png
team102_Ravi.png


---

## 🚀 How to Use This for Your Own Certificates

### 1️⃣ **Clone or Use as Template**
- Click **"Use this template"** (recommended) or **"Fork"** at the top right of this repo.
- This creates a copy under your GitHub account.

### 2️⃣ **Add Your Certificates**
- Place all your certificate images inside the `certificates/` folder.
- Ensure filenames follow the `teamID_Name.png` format.

### 3️⃣ **Update the Certificates List**
- Run the Python script to auto-generate `certificates.json`:
```bash
python generate_json.py
Commit and push changes:


git add .
git commit -m "Added certificates"
git push
(Optional: You can also update certificates.json manually.)

4️⃣ Enable GitHub Pages
Go to your repo Settings → Pages.

Under "Branch", select main (or master) and / (root).

Save — your site will be live at:

https://your-username.github.io/your-repo-name/
💡 Features
✅ 100% Free Hosting

✅ No Backend Needed

✅ Mobile Friendly

✅ Easy Updates (just add images + run script)

✅ Works for any number of certificates

📜 License

This project is open-source — you are free to copy, modify, and use it for your own needs.
Attribution is appreciated but not required. 💙

⭐ Support

If you like this project:

Star ⭐ this repo.

Share it with others who might need it.

Contribute improvements via Pull Request
