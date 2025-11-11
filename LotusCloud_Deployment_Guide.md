git add LotusCloud_Deployment_Guide.md
git commit -m "Added Lotus Cloud Unified Deployment Guide – Initial version"
git push origin main

# 🌐 Lotus Cloud Unified Deployment Guide

**Version:** 1.0  
**Author:** Dr. Veera B. Dasari  
**Organization:** Lotus Cloud Inc.  
**Purpose:** Standardize deployment and maintenance across all Lotus Cloud projects — ATF Portal, LotusCloud.ai, QuickForm AI, PADMA, Smart Receipt Scanner, and future apps.

---

## 🏗️ 1. Development Environment

| Tool | Recommended Version | Notes |
|------|---------------------|-------|
| **macOS** | 12 or later | Use Mac Mini (primary dev) |
| **Node.js** | v22 LTS | Installed via `nvm` |
| **npm** | v10 or later | For dependency management |
| **Vite** | v7 or later | Default React + TypeScript bundler |
| **VS Code** | Latest | Enable ESLint + Prettier |
| **GitHub CLI** | Latest | For repo access and automation |

**Initial setup**
```bash
brew install node
npm install -g vite
npm install -g gh-pages
git config --global user.name "Dr. Veera B. Dasari"
git config --global user.email "DrDasari@lotus.buzz"

🧩 2. Folder Structure (Universal)

project-root/
│
├── public/                # Static assets (favicon, images)
│   └── images/
├── src/
│   ├── pages/             # React pages (Home, Events, etc.)
│   ├── components/        # Shared UI blocks
│   ├── assets/            # Logos, icons, brand visuals
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md

⚙️ 3. Local Development Workflow

# 1. Navigate to project
cd ~/Projects/atf-portal

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

Open ➜ http://localhost:5173

Stop server anytime with Ctrl + C.

🌍 4. Deployment Workflows
A. GitHub Pages

For lightweight static React sites (ATF Portal, LotusCloud.ai)

Add to package.json:

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}


Deploy:

npm run deploy


✅ Output → published to
https://lotuscloudai.github.io/atf-portal/

B. Firebase Hosting

For production deployment with custom domains
(e.g. americantelugufederation.org, lotuscloud.ai)

npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy


Default build target: dist/

C. Google Cloud Run / App Engine

For API services or dynamic web apps
(QuickForm AI, Smart Receipt Scanner, PADMA)

gcloud auth login
gcloud config set project lotuscloud-global
gcloud builds submit --tag gcr.io/lotuscloud-global/quickform-ai
gcloud run deploy quickform-ai \
  --image gcr.io/lotuscloud-global/quickform-ai \
  --platform managed --region us-central1 \
  --allow-unauthenticated

🪶 5. Branching and Version Control
Branch	Purpose	Deployment
main	Stable production code	Live hosting
dev	Active development	Local testing
feature/*	Specific features or experiments	Pull Request → Dev → Main

Typical Workflow

git checkout -b feature/homepage-update
# edit code
git add .
git commit -m "Enhanced hero section visuals"
git push origin feature/homepage-update
# create PR to main

🖼️ 6. Image and Asset Best Practices

Store all images in public/images/

Use relative paths in React:
src="/images/hero-bg2.png"

Optimize via https://squoosh.app

Keep consistent dimensions (1920×1080 hero, 600×400 tiles)

🔄 7. Routine Maintenance
Task	Command	Frequency
Update dependencies	npm update	Monthly
Audit vulnerabilities	npm audit fix	Quarterly
Clean cache	npm cache clean --force	As needed
Verify GitHub sync	git pull origin main	Weekly
🔗 8. Cross-Project Deployment Summary
Project	Hosting	Domain	Framework	Repo
LotusCloud Portal	Firebase	lotuscloud.ai	React + Tailwind	LotusCloudAI/lotuscloud-portal
ATF Portal	GitHub Pages	americantelugufederation.org	React + Vite	LotusCloudAI/atf-portal
QuickForm AI	Cloud Run + Firebase	quickform.ai	React + Flask API	LotusCloudAI/quickform-ai
Smart Receipt Scanner	Cloud Run	smartreceipts.app	Python + Vertex AI	LotusCloudAI/smart-receipt-scanner
PADMA App	Firebase + Cloud Run	padma.ai	Flutter + Vertex AI	LotusCloudAI/padma
🧠 9. Troubleshooting Checklist
Symptom	Likely Cause	Solution
Blank page after deploy	Wrong base URL in vite.config.ts	Set base: "./"
404 on refresh	Missing history fallback	Add connect-history-api-fallback
Git push error	Remote not set or auth issue	git remote -v → re-add origin
Firebase deploy fails	Wrong project or missing auth	firebase use --add
🧾 10. License and Attribution

© 2025 Lotus Cloud Inc. All Rights Reserved.
Developed by Dr. Veera B. Dasari and Lotus Cloud Team.
Use, reproduction, or distribution only with written permission.

End of Document


---

### ✅ **Next Step**
1. Open your terminal:  
   ```bash
   cd ~/Projects/atf-portal
   nano LotusCloud_Deployment_Guide.md


Paste the above Markdown exactly.

Save and exit (Ctrl + O, Enter, Ctrl + X).

Commit & push:

git add LotusCloud_Deployment_Guide.md
git commit -m "Added Lotus Cloud Unified Deployment Guide – Initial version"
git push origin main



