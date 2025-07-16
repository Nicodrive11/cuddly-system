"use client"
import React, { useState, useEffect } from 'react';
import { ExternalLink, Moon, Sun } from 'lucide-react';

const WebAppGallery = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or default to light mode
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage?.getItem('theme');
      return savedTheme === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (typeof window !== 'undefined') {
      window.localStorage?.setItem('theme', newDarkMode ? 'dark' : 'light');
    }
  };

  // Sample data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with seamless payment integration and modern design.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop",
      liveUrl: "https://example.com/ecommerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      featured: true
    },
    {
      id: 2,
      title: "Task Management",
      description: "Collaborative workspace with real-time updates and intuitive drag-and-drop interface.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
      liveUrl: "https://example.com/taskmanager",
      technologies: ["React", "TypeScript", "Socket.io"],
      category: "Frontend",
      featured: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather insights with beautiful visualizations and location-based forecasts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=400&fit=crop",
      liveUrl: "https://example.com/weather",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      category: "Frontend",
      featured: true
    },
    {
      id: 4,
      title: "Analytics Suite",
      description: "Comprehensive analytics dashboard with advanced data visualization and reporting.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=400&fit=crop",
      liveUrl: "https://example.com/analytics",
      technologies: ["React", "D3.js", "Express"],
      category: "Data Visualization",
      featured: false
    },
    {
      id: 5,
      title: "Learning Platform",
      description: "Educational ecosystem with interactive courses and personalized learning paths.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=400&fit=crop",
      liveUrl: "https://example.com/lms",
      technologies: ["React", "Node.js", "MySQL"],
      category: "Full Stack",
      featured: true
    },
    {
      id: 6,
      title: "Recipe Discovery",
      description: "Intelligent recipe finder with meal planning and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      liveUrl: "https://example.com/recipes",
      technologies: ["React", "Firebase", "API"],
      category: "Frontend",
      featured: false
    },
    {
      id: 7,
      title: "Portfolio Studio",
      description: "Creative portfolio builder with stunning templates and seamless customization.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=400&fit=crop",
      liveUrl: "https://example.com/portfolio",
      technologies: ["React", "Tailwind", "Framer Motion"],
      category: "Frontend",
      featured: false
    },
    {
      id: 8,
      title: "Chat Application",
      description: "Real-time messaging platform with file sharing and group collaboration features.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=400&fit=crop",
      liveUrl: "https://example.com/chat",
      technologies: ["React", "Socket.io", "Node.js"],
      category: "Full Stack",
      featured: false
    },
    {
      id: 9,
      title: "Expense Tracker",
      description: "Smart financial management with automated categorization and insightful analytics.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop",
      liveUrl: "https://example.com/expenses",
      technologies: ["React", "Chart.js", "API"],
      category: "Frontend",
      featured: true
    }
  ];

  const AppButton = ({ project, index }) => (
    <div 
      className="group relative"
      style={{
        animationDelay: `${index * 0.05}s`
      }}
    >
      <a 
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
      >
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {project.featured && (
            <div className="absolute top-1.5 left-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-1.5 py-0.5 rounded text-xs font-medium">
              ★
            </div>
          )}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-5 h-5 bg-white/90 rounded-full flex items-center justify-center">
              <ExternalLink className="w-2.5 h-2.5 text-gray-700" />
            </div>
          </div>
        </div>
        
        <div className="p-2">
          <h3 className="text-xs font-medium text-gray-900 dark:text-white truncate">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight line-clamp-1 mt-0.5">
            {project.description}
          </p>
        </div>
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-200"
        >
          {darkMode ? (
            <Sun className="w-4 h-4 text-yellow-500" />
          ) : (
            <Moon className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium text-gray-900 dark:text-white">
              Portfolio
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Masters of Software Development
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
            Crafted with
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">
              precision.
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            A collection of applications that demonstrate innovation, 
            technical excellence, and thoughtful design.
          </p>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
            {projects.map((project, index) => (
              <AppButton key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200/30 dark:border-gray-700/30 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2024 Portfolio. Designed and developed with passion.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default WebAppGallery;