"use client"
import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')`
      }}
    >
      {/* Navigation */}
      <div className="text-center py-6 text-gray-300 text-sm uppercase tracking-widest">
        <Link href="/" className="hover:text-white transition-colors">
          HOME
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white">ABOUT NICO</span>
        <span className="mx-2">/</span>
        <a 
          href="https://www.linkedin.com/in/nicolas-saldana-a095291b4/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          LINKEDIN
        </a>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-1">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-6xl font-light mb-6 tracking-wider">
            ABOUT NICO
          </h1>
          <p className="text-gray-200 text-xl font-light">
            Software Developer & Creative Problem Solver
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <div 
            className="bg-white bg-opacity-95 backdrop-blur-sm p-8"
            style={{ borderRadius: '22px' }}
          >
            <h2 className="text-gray-900 text-2xl font-semibold mb-6 tracking-tight">
              My Journey
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Coming Soon
                {/* I'm currently pursuing my Masters of Software Development, diving deep into 
                modern technologies and best practices that shape today's digital landscape.
              </p>
              <p>
                My passion lies in creating intuitive, user-centered applications that solve 
                real-world problems. I believe great software is not just about clean code, 
                but about understanding the people who use it.
              </p>
              <p>
                Through my academic journey and hands-on projects, I've developed expertise 
                in full-stack development, with a particular focus on creating seamless 
                user experiences and robust backend systems. */}
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div 
            className="bg-white bg-opacity-95 backdrop-blur-sm p-8"
            style={{ borderRadius: '22px' }}
          >
            <h2 className="text-gray-900 text-2xl font-semibold mb-6 tracking-tight">
              Technical Skills
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-gray-800 font-medium mb-2">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-gray-800 font-medium mb-2">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MongoDB', 'MySQL'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-gray-800 font-medium mb-2">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'AWS', 'Figma'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section
        <div 
          className="bg-white bg-opacity-95 backdrop-blur-sm p-8 mb-16 text-center"
          style={{ borderRadius: '22px' }}
        >
          <h2 className="text-gray-900 text-2xl font-semibold mb-6 tracking-tight">
            Development Philosophy
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            "Great software is born from the intersection of technical excellence and human empathy. 
            Every line of code should serve a purpose, every interface should tell a story, 
            and every application should make someone's life a little bit better."
          </p>
        </div> */}

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-white text-3xl font-light mb-8 tracking-wide">
            Let's Connect
          </h2>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/nicolas-saldana-a095291b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white hover:bg-opacity-20 hover:border-opacity-30 transition-all"
              style={{ borderRadius: '12px' }}
            >
              LinkedIn
            </a>
            {/* <a 
              href="mailto:nicolas@example.com"
              className="px-8 py-3 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white hover:bg-opacity-20 hover:border-opacity-30 transition-all"
              style={{ borderRadius: '12px' }}
            >
              Email
            </a> */}
            {/* <Link 
              href="/"
              className="px-8 py-3 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white hover:bg-opacity-20 hover:border-opacity-30 transition-all"
              style={{ borderRadius: '12px' }}
            >
              View Portfolio
            </Link> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pb-8">
        <div className="text-white text-lg font-light mb-2">
          © 2025 NICO
        </div>
        <div className="text-gray-400 text-sm uppercase tracking-wider">
          PORTFOLIO BY NICOLAS SALDANA
        </div>
      </div>
    </div>
  );
};

export default AboutPage;