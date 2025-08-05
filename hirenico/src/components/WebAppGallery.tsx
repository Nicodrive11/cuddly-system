"use client"
import React from 'react';
import Link from 'next/link';

const WebAppGallery = () => {
  const projects = [
    {
      id: 1,
      title: "Mobile APP (coming soon)",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      liveUrl: "https://example.com/OnlyTrailers",
    },
    {
      id: 2,
      title: "Task Management App (coming soon)", 
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      liveUrl: "https://example.com/taskmanager",
    },
    {
      id: 3,
      title: "Rock Paper Scissors (coming soon)",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop", 
      liveUrl: "https://example.com/RPS",
    },
    {
      id: 4,
      title: "Wordle Game (coming soon)",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      liveUrl: "https://example.com/Wordz", 
    },
    {
      id: 5,
      title: "Tick Tac Toe Game (coming soon)",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      liveUrl: "https://example.com/TTT",
    },
    {
      id: 6,
      title: "WebSocket Game (coming soon)",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      liveUrl: "https://example.com/websocket-game",
    },
    {
      id: 7,
      title: "Music Player (coming soon)",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      liveUrl: "https://example.com/music-player",
    },
    {
      id: 8,
      title: "Recipe App (coming soon)",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      liveUrl: "https://example.com/recipe-app",
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')`
      }}
    >
      {/* Navigation */}
      <div className="text-center py-6 text-gray-300 text-sm uppercase tracking-widest">
        <span className="text-white">HOME</span>
        <span className="mx-2">/</span>
        <Link href="/about" className="hover:text-white transition-colors">
          ABOUT NICO
        </Link>
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

      {/* Hero Section */}
      <div className="text-center py-2">
      </div>

      {/* Projects Grid */}
      <div className="max-w-5xl mx-auto px-8">
        {/* Row 1 - Three large tiles */}
        <div className="flex gap-6 mb-6">
          <a 
            href={projects[0]?.liveUrl}
            className="flex-1 h-48 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ease-out"
            style={{ borderRadius: '22px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={projects[0]?.image} 
              alt={projects[0]?.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-medium tracking-tight">{projects[0]?.title}</h3>
            </div>
            <div className="absolute inset-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300"></div>
          </a>
          
          <a 
            href={projects[1]?.liveUrl}
            className="flex-1 h-48 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ease-out"
            style={{ borderRadius: '22px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={projects[1]?.image} 
              alt={projects[1]?.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-medium tracking-tight">{projects[1]?.title}</h3>
            </div>
            <div className="absolute inset-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300"></div>
          </a>
          
          <a 
            href={projects[2]?.liveUrl}
            className="flex-1 h-48 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ease-out"
            style={{ borderRadius: '22px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={projects[2]?.image} 
              alt={projects[2]?.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-medium tracking-tight">{projects[2]?.title}</h3>
            </div>
            <div className="absolute inset-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300"></div>
          </a>
        </div>

        {/* Row 2 - Three medium tiles */}
        <div className="flex gap-6 mb-6">
          <a 
            href={projects[3]?.liveUrl}
            className="flex-1 h-44 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ease-out"
            style={{ borderRadius: '20px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={projects[3]?.image} 
              alt={projects[3]?.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-medium tracking-tight">{projects[3]?.title}</h3>
            </div>
            <div className="absolute inset-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300"></div>
          </a>
          
          <a 
            href={projects[4]?.liveUrl}
            className="flex-1 h-44 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ease-out"
            style={{ borderRadius: '20px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={projects[4]?.image} 
              alt={projects[4]?.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-medium tracking-tight">{projects[4]?.title}</h3>
            </div>
            <div className="absolute inset-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300"></div>
          </a>
          
          <a 
            href={projects[5]?.liveUrl}
            className="flex-1 h-44 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ease-out"
            style={{ borderRadius: '20px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={projects[5]?.image} 
              alt={projects[5]?.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-medium tracking-tight">{projects[5]?.title}</h3>
            </div>
            <div className="absolute inset-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300"></div>
          </a>
        </div>

        {/* Row 3 - Two images + one text tile */}
        <div className="flex gap-6 mb-12">
          <a 
            href={projects[6]?.liveUrl}
            className="flex-1 h-40 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ease-out"
            style={{ borderRadius: '18px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={projects[6]?.image} 
              alt={projects[6]?.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-medium tracking-tight">{projects[6]?.title}</h3>
            </div>
            <div className="absolute inset-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300"></div>
          </a>
          
          <a 
            href={projects[7]?.liveUrl}
            className="flex-1 h-40 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ease-out"
            style={{ borderRadius: '18px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={projects[7]?.image} 
              alt={projects[7]?.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-medium tracking-tight">{projects[7]?.title}</h3>
            </div>
            <div className="absolute inset-0 shadow-lg group-hover:shadow-2xl transition-shadow duration-300"></div>
          </a>
          
          {/* Text only tile */}
          <div 
            className="flex-1 h-40 bg-white bg-opacity-95 backdrop-blur-sm flex flex-col justify-center px-6 hover:scale-[1.02] transition-all duration-300 ease-out hover:shadow-2xl"
            style={{ borderRadius: '18px' }}
          >
            <div className="text-gray-500 text-xs mb-2 uppercase tracking-wider font-medium">
              August 2025
            </div>
            <h3 className="text-gray-900 text-lg font-semibold leading-tight tracking-tight">
              MORE PROJECTS<br />
              COMING SOON
            </h3>
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

export default WebAppGallery;