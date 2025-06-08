# 📚 Explain Like I'm 5 (ELI5) AI Web App

## 📸 Screenshots
<div align="center">
  <img src="https://github.com/Rishabshirur/claude/blob/87698f0ed8fa9879363fc1b458ae806d652342ac/Screenshot%202024-10-14%20205138.png" alt="Topic Input Page" style="width:300px; height:200px; object-fit: cover;" />
  <img src="https://github.com/Rishabshirur/claude/blob/87698f0ed8fa9879363fc1b458ae806d652342ac/Screenshot%202024-10-14%20205357.png" alt="Topic Input Page" style="width:400px; height:200px; object-fit: cover;" />
</div>

## 🚀 Badges

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)  
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)  
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)  
![Anthropic AI](https://img.shields.io/badge/Powered%20by-Anthropic%20Claude-6f42c1?style=for-the-badge&logo=anthropic&logoColor=white)


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
git clone https://github.com/Rishabshirur/claude.git
cd claude-master
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


## 📝 License
This project is built for educational and portfolio purposes.



