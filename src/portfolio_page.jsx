import React from "react";
import { Github, Mail, Phone } from "lucide-react";
import { LiaTelegram } from "react-icons/lia";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 max-w-screen">
      {/* Header/Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl mb-4 font-noto">Fakhriddin Mavlonov</h1>
          <h2 className="text-2xl mb-6">Full-Stack Developer</h2>
          <div className="flex justify-between items-center w-full flex-wrap px-[100px]">
            <a
              href="mailto:mavlonovfahriddin0822@gmail.com"
              className="flex items-center gap-2 !text-white"
              target="_blank"
            >
              <Mail size={20} />
              mavlonovfahriddin0822@gmail.com
            </a>
            <a
              href="https://github.com/fahriddin0822"
              className="flex items-center gap-2 !text-white"
              target="_blank"
            >
              <Github size={20} />
              fahriddin0822
            </a>
            <a
              href="tel:+998770125860"
              className="flex items-center gap-2 !text-white"
              target="_blank"
            >
              <Phone size={20} />
              +998 77 012 5860
            </a>
            <a
              href="https://t.me/mavlonovw"
              className="flex items-center gap-2 !text-white"
              target="_blank"
            >
              <LiaTelegram size={20} />
              Telegram
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Profile Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-noto mb-4">Profile</h2>
          <p className="text-gray-700">
            I'm a Full-Stack developer with experience in creating independent
            projects and leading development teams. I specialize in API
            integrations (Payment, Yandex, Tax, MoySklad) and deliver
            high-quality projects efficiently. I'm passionate about continuous
            learning and always ready to adapt to new technologies.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-noto mb-4">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Node.js",
              "Javascript",
              "Typescript",
              "Nest.js",
              "Express.js",
              "SQL",
              "NoSQL",
              "ORM",
              "ODM",
              "Telegram-bot",
              "React",
              "Tailwind",
              "Sass",
              "Next.js",
              "DevOps",
              "Docker",
              "PM2",
              "CI/CD",
              "Nginx",
              "Ubuntu",
              "Git",
              "Swagger",
              "Postman",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-noto mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-noto mb-2">Order Restaurant</h3>
              <p className="text-gray-600 mb-2">Back-end Application</p>
              <p className="mb-4">
                A corporate site for restaurant ordering systems. Led the
                project as a back-end developer, implementing solutions using
                NestJs, Sequelize, and PostgreSQL.
              </p>
              <div className="flex gap-2">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                  NestJs
                </span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                  Sequelize
                </span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                  PostgreSQL
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-noto mb-2">Furnioro</h3>
              <p className="text-gray-600 mb-2">Full-Stack Website</p>
              <p className="mb-4">
                A corporate e-commerce site for ordering products. Contributed
                as a full-stack developer, working with NestJs, Sequelize,
                PostgreSQL, React, and Tailwind CSS.
              </p>
              <div className="flex gap-2">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                  React
                </span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                  NestJs
                </span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-noto mb-4">Professional Experience</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h3 className="text-xl font-noto">Front-end Developer</h3>
              <p className="text-gray-600">
                Freelance | November 2024 - Present
              </p>
              <p className="mt-2">
                Working as a freelance developer for various projects, including
                Noor travel agency.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-noto mb-4">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-noto">
              Foundation and Full-stack Bootcamp
            </h3>
            <p className="text-gray-600">Najot ta'lim | Dec 2023 - Jan 2025</p>
            <p className="mt-2">
              Completed Foundation level programming and Full-stack bootcamp
              (Node.js and React.js)
            </p>
          </div>
        </section>

        {/* Languages Section */}
        <section>
          <h2 className="text-2xl font-noto mb-4">Languages</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="font-noto">Uzbek</h3>
              <p className="text-gray-600">Native</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="font-noto">English</h3>
              <p className="text-gray-600">B1</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="font-noto">Russian</h3>
              <p className="text-gray-600">A2</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
