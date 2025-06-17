import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const downloadFile = (type) => {
    const fileUrl = type === 'pdf' ? '/files/Eric_Salamba_Resume.pdf' : '/files/Eric_Salamba_Resume.docx';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `Eric_Salamba_Resume.${type}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"} min-h-screen transition duration-500 p-6`}> 
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-blue-600">Eric Salamba</h1>
          <div className="flex gap-2">
            <Button onClick={() => downloadFile('pdf')}><Download className="mr-1 h-4 w-4" /> PDF</Button>
            <Button onClick={() => downloadFile('docx')}><Download className="mr-1 h-4 w-4" /> Word</Button>
            <Button variant="outline" onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</Button>
          </div>
        </div>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <p className="text-lg">Computer Scientist</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Kitengela, Kajiado, Kenya (Open to Remote) · +254 724 530 004 · ericsalamba@gmail.com
          </p>
        </motion.section>

        <hr className="my-4 border-gray-300 dark:border-gray-700" />

        {[
          {
            title: "Professional Summary",
            content: "Full stack developer with a strong foundation in building scalable web applications..."
          },
          {
            title: "Skills",
            content: [
              "Languages: Python, JavaScript/TypeScript, SQL, PHP",
              "Frameworks: React.js, Node.js, Express, Flask, Django",
              "Tools & Platforms: Git, Docker, MongoDB, Postman, PostgreSQL, MySQL, Canva, Krita, Blender",
              "Soft Skills: Self-motivated, Critical thinker, Effective communicator, Detail-oriented, Adaptable"
            ]
          },
          {
            title: "Work Experience",
            content: (
              <div>
                <h3 className="text-xl font-bold">Attachee</h3>
                <p className="italic text-gray-700 dark:text-gray-300">Senate, Kenya – Nairobi | May 2024 – August 2024</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Provided IT support to staff in various departments</li>
                  <li>Contributed frontend development for an internal project management software</li>
                  <li>Collaborated with developers and staff to implement requested UI improvements</li>
                </ul>
              </div>
            )
          },
          {
            title: "Education",
            content: (
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold">BSc Computer Science</h3>
                  <p className="italic text-gray-700 dark:text-gray-300">JKUAT – Juja, Kenya | 2021 – 2025</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Alliance High School</h3>
                  <p className="italic text-gray-700 dark:text-gray-300">Graduated 2021 – A- Grade</p>
                  <p>Active in Science and Robotics Club throughout</p>
                </div>
              </div>
            )
          },
          {
            title: "Projects",
            content: [
              {
                name: "Project Management Web App",
                desc: "Built with React, Express, and MySQL. Full-stack functionality including auth and dashboard features."
              },
              {
                name: "Shopping Website for Door Store",
                desc: "Started with React + PHP + MySQL, later migrated to Express + MongoDB. Featured full e-commerce system."
              },
              {
                name: "Final Year Project – Voice Transcription & Data Extraction",
                desc: "Python, Whisper, MongoDB. Captures audio, transcribes, and extracts structured data using NLP."
              },
              {
                name: "Games Collection",
                desc: "Checkers, Chess, and Ping Pong games built in Python. Emphasis on game logic and UI experience."
              }
            ]
          },
          {
            title: "Certifications",
            content: (
              <ul className="list-disc list-inside ml-4">
                <li>Advanced Python Programming – IST, Nairobi</li>
                <li>Microsoft Azure Fundamentals (AZ-900) – Certified by Microsoft</li>
              </ul>
            )
          }
        ].map((sec, i) => (
          <motion.section key={i} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, delay: i * 0.1 }} className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{sec.title}</h2>
            {Array.isArray(sec.content) ? (
              <>
                {sec.content.map((item, idx) =>
                  typeof item === 'string' ? (
                    <p key={idx}>{item}</p>
                  ) : (
                    <div key={idx} className="mb-3">
                      <h3 className="font-bold">{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                  )
                )}
              </>
            ) : (
              <div>{sec.content}</div>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  );
}
