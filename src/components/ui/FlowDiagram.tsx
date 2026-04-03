"use client";
import React from 'react';
import { Icon } from "@iconify/react";

export const FlowDiagram = () => {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative bg-white border border-[#E5E7EB] rounded-2xl p-2">
      <svg viewBox="0 0 800 400" className="w-full h-full">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="50%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>
        
        {/* Left incoming */}
        <path id="path1" d="M 150 100 C 250 100, 300 200, 400 200" fill="none" stroke="#10B981" strokeWidth="1.5" />
        <path id="path2" d="M 150 200 C 250 200, 300 200, 400 200" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
        <path id="path3" d="M 150 300 C 250 300, 300 200, 400 200" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
        
        {/* Right outgoing */}
        <path id="path4" d="M 400 200 C 500 200, 550 100, 650 100" fill="none" stroke="#f97316" strokeWidth="1.5" />
        <path id="path5" d="M 400 200 C 500 200, 550 200, 650 200" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <path id="path6" d="M 400 200 C 500 200, 550 300, 650 300" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />

        {/* Traveling Dots left to right */}
        <circle r="4" fill="#10B981">
          <animateMotion dur="2.5s" repeatCount="indefinite"><mpath href="#path1" /></animateMotion>
        </circle>
        <circle r="4" fill="#7C3AED">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s"><mpath href="#path2" /></animateMotion>
        </circle>
        <circle r="4" fill="#14b8a6">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="1s"><mpath href="#path3" /></animateMotion>
        </circle>

        {/* Traveling Dots right from center */}
        <circle r="4" fill="#f97316">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.2s"><mpath href="#path4" /></animateMotion>
        </circle>
        <circle r="4" fill="#3b82f6">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.7s"><mpath href="#path5" /></animateMotion>
        </circle>
        <circle r="4" fill="#8B5CF6">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.2s"><mpath href="#path6" /></animateMotion>
        </circle>

        {/* Left Nodes */}
        <g transform="translate(150,100)">
          <circle r="26" fill="#ffffff" stroke="#10B981" strokeWidth="2"/>
          <foreignObject x="-14" y="-14" width="28" height="28">
            <div className="w-full h-full flex items-center justify-center">
              <Icon icon="mdi:whatsapp" style={{ color: "#22C55E", fontSize: "28px" }} />
            </div>
          </foreignObject>
          <text x="0" y="44" textAnchor="middle" fontSize="13" fontWeight="700" fill="#10b981">WHATSAPP</text>
        </g>
        
        <g transform="translate(150,200)">
          <circle r="26" fill="#ffffff" stroke="#7C3AED" strokeWidth="2"/>
          <foreignObject x="-14" y="-14" width="28" height="28">
            <div className="w-full h-full flex items-center justify-center">
              <Icon icon="mdi:phone-outline" style={{ color: "#7C3AED", fontSize: "28px" }} />
            </div>
          </foreignObject>
          <text x="0" y="44" textAnchor="middle" fontSize="13" fontWeight="700" fill="#7C3AED">VOICE</text>
        </g>
        
        <g transform="translate(150,300)">
          <circle r="26" fill="#ffffff" stroke="#14b8a6" strokeWidth="2"/>
          <foreignObject x="-14" y="-14" width="28" height="28">
            <div className="w-full h-full flex items-center justify-center">
              <Icon icon="mdi:web" style={{ color: "#14B8A6", fontSize: "28px" }} />
            </div>
          </foreignObject>
          <text x="0" y="44" textAnchor="middle" fontSize="13" fontWeight="700" fill="#14b8a6">WEB</text>
        </g>

        {/* Center Node */}
        <g transform="translate(400,200)">
          <circle r="50" fill="#f3f4f6" stroke="#2D1B8E" strokeWidth="4"/>
          <circle r="40" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 4">
             <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite" />
          </circle>
          <foreignObject x="-16" y="-30" width="32" height="32">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <Icon icon="mdi:cpu-64-bit" style={{ color: "#2D1B8E", fontSize: "32px" }} />
            </div>
          </foreignObject>
          <text x="0" y="18" textAnchor="middle" fontSize="14" fontWeight="800" fill="#2D1B8E">AI ENGINE</text>
        </g>

        {/* Right Nodes */}
        <g transform="translate(650,100)">
          <circle r="26" fill="#ffffff" stroke="#f97316" strokeWidth="2"/>
          <foreignObject x="-14" y="-14" width="28" height="28">
            <div className="w-full h-full flex items-center justify-center">
              <Icon icon="mdi:database-outline" style={{ color: "#F97316", fontSize: "28px" }} />
            </div>
          </foreignObject>
          <text x="0" y="44" textAnchor="middle" fontSize="13" fontWeight="700" fill="#f97316">CRM</text>
        </g>
        
        <g transform="translate(650,200)">
          <circle r="26" fill="#ffffff" stroke="#3b82f6" strokeWidth="2"/>
          <foreignObject x="-14" y="-14" width="28" height="28">
            <div className="w-full h-full flex items-center justify-center">
              <Icon icon="mdi:email-outline" style={{ color: "#3B82F6", fontSize: "28px" }} />
            </div>
          </foreignObject>
          <text x="0" y="44" textAnchor="middle" fontSize="13" fontWeight="700" fill="#3b82f6">EMAIL</text>
        </g>
        
        <g transform="translate(650,300)">
          <circle r="26" fill="#ffffff" stroke="#8B5CF6" strokeWidth="2"/>
          <foreignObject x="-14" y="-14" width="28" height="28">
            <div className="w-full h-full flex items-center justify-center">
              <Icon icon="mdi:calendar-outline" style={{ color: "#8B5CF6", fontSize: "28px" }} />
            </div>
          </foreignObject>
          <text x="0" y="44" textAnchor="middle" fontSize="13" fontWeight="700" fill="#8B5CF6">CALENDAR</text>
        </g>
      </svg>
    </div>
  );
};
