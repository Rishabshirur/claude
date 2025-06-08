# 📚 Explain Like I'm 5 (ELI5) AI Web App


## 🚀 Badges

![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000?logo=nextdotjs&logoColor=white)  
![MongoDB Atlas](https://img.shields.io/badge/Database-MongoDB%20Atlas-4EA94B?logo=mongodb&logoColor=white)  
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel&logoColor=white)  
![Uses Anthropic AI API](https://img.shields.io/badge/AI%20powered%20by-Anthropic%20Claude-blueviolet)

---

## 📖 Project Overview  
This is a simple **Next.js** web application that generates kid-friendly explanations for any topic using the **Anthropic AI API**. Users can input a topic and their name, receive an explanation in real-time, and view a catalog of all past submissions. Explanations are stored in a **MongoDB Atlas** database, and the app is deployed on **Vercel**.

---

## ✨ Features  

- **Topic Input Page**  
  - Users enter a topic and their name.  
  - The app fetches a simple, 5-year-old-friendly explanation using the Anthropic AI API.  
  - The response is streamed in real-time.  
  - Explanations are saved to a MongoDB Atlas database.  

- **Explanation Catalog Page**  
  - Displays a table of all submitted explanations.  
  - Shows the topic, explanation, and submitter's name.  
  - Includes sorting functionality by submitter's name.  

---

## 🛠️ Tech Stack  

- **Next.js** — Frontend framework  
- **Anthropic AI API** — AI-powered content generation  
- **MongoDB Atlas** — Cloud database for storage  
- **Vercel** — Deployment platform  

Optional/Helpful Tools:  
- [Vercel AI SDK](https://sdk.vercel.ai/docs/getting-started/nextjs-app-router)  
- [Prisma ORM](https://www.prisma.io/)  

---

## 📦 Getting Started  

### 1️⃣ Clone the Repository  

```bash
git clone https://github.com/your-username/eli5-ai-webapp.git
cd eli5-ai-webapp
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a .env.local file in the project root with these contents:

```env
ANTHROPIC_API_KEY=your-api-key-here
MONGODB_URI=your-mongodb-uri-here
```

### 4️⃣ Run the Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser.


## 📚 Resources
Next.js Boilerplate

Vercel AI SDK

MongoDB Atlas Free Tier

Anthropic API Docs

## 📸 Screenshots


## 📝 License
This project is built for educational and portfolio purposes.

```sql
This contains **all your instructions, each step with proper code blocks and formatting**, so you do
```

