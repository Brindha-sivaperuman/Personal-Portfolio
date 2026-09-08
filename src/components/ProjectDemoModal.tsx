import React, { useState } from 'react';
import {
  X,
  Compass,
  CloudSun,
  Search,
  MapPin,
  Calendar,
  Star,
  Wind,
  Droplets,
  Eye,
  ExternalLink,
  Check,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const isTourism = project.id === 'tourism-platform';

  // State for Tourism Demo
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState<string | null>('Promenade Beach');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // State for Weather Demo
  const [selectedCity, setSelectedCity] = useState('Puducherry');
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C');

  const tourismSpots = [
    {
      id: 'promenade',
      name: 'Promenade Beach & Rock Beach',
      category: 'coastal',
      rating: '4.8',
      reviews: '1,240',
      time: 'Sunrise & Sunset',
      description:
        'Iconic 1.5km seaside boulevard dotted with heritage colonial landmarks, French war memorial, and vibrant ocean breezes.',
      highlights: ['Heritage Walking Trail', 'Oceanfront cafes', 'Vehicle-free evenings'],
    },
    {
      id: 'french-quarter',
      name: 'White Town / French Quarter',
      category: 'heritage',
      rating: '4.9',
      reviews: '980',
      time: 'Open Daily',
      description:
        'Mustard-yellow colonial villas adorned with bougainvillea, quaint European bakeries, art galleries, and cobbled alleys.',
      highlights: ['Colonial Architecture', 'Artisanal cafes', 'Boutique shopping'],
    },
    {
      id: 'auroville',
      name: 'Matrimandir & Auroville',
      category: 'spiritual',
      rating: '4.7',
      reviews: '2,150',
      time: '9:00 AM - 4:30 PM',
      description:
        'Universal township known for the golden geodesic meditation sphere, peace gardens, and sustainable architecture.',
      highlights: ['Geodesic sphere', 'Meditation gardens', 'Ecological crafts'],
    },
    {
      id: 'paradise-beach',
      name: 'Paradise Beach (Chunnambar)',
      category: 'coastal',
      rating: '4.6',
      reviews: '850',
      time: 'Ferry: 9 AM - 5 PM',
      description:
        'Golden sand beach isolated by backwaters, reachable via scenic boat ride along the Chunnambar river estuary.',
      highlights: ['Boat ferry ride', 'Water sports', 'Golden sand dunes'],
    },
  ];

  const weatherData: Record<
    string,
    {
      temp: number;
      condition: string;
      humidity: number;
      wind: number;
      visibility: number;
      forecast: { day: string; temp: number; icon: string; cond: string }[];
    }
  > = {
    Puducherry: {
      temp: 29,
      condition: 'Clear Sky with Gentle Breeze',
      humidity: 78,
      wind: 14,
      visibility: 9.5,
      forecast: [
        { day: 'Wed', temp: 30, icon: '☀️', cond: 'Sunny' },
        { day: 'Thu', temp: 31, icon: '🌤️', cond: 'Partly Cloudy' },
        { day: 'Fri', temp: 29, icon: '⛅', cond: 'Breezy' },
        { day: 'Sat', temp: 28, icon: '🌦️', cond: 'Scattered Showers' },
        { day: 'Sun', temp: 29, icon: '☀️', cond: 'Clear' },
      ],
    },
    Chennai: {
      temp: 32,
      condition: 'Humid & Sunny',
      humidity: 82,
      wind: 16,
      visibility: 8.8,
      forecast: [
        { day: 'Wed', temp: 33, icon: '☀️', cond: 'Sunny' },
        { day: 'Thu', temp: 33, icon: '🌤️', cond: 'Warm' },
        { day: 'Fri', temp: 31, icon: '🌦️', cond: 'Coastal Rain' },
        { day: 'Sat', temp: 30, icon: '⛅', cond: 'Cloudy' },
        { day: 'Sun', temp: 32, icon: '☀️', cond: 'Clear' },
      ],
    },
    Bengaluru: {
      temp: 24,
      condition: 'Pleasant & Overcast',
      humidity: 62,
      wind: 11,
      visibility: 10,
      forecast: [
        { day: 'Wed', temp: 25, icon: '⛅', cond: 'Overcast' },
        { day: 'Thu', temp: 24, icon: '🌧️', cond: 'Light Rain' },
        { day: 'Fri', temp: 23, icon: '🌦️', cond: 'Showers' },
        { day: 'Sat', temp: 25, icon: '🌤️', cond: 'Partly Sunny' },
        { day: 'Sun', temp: 26, icon: '⛅', cond: 'Pleasant' },
      ],
    },
  };

  const currentCityWeather = weatherData[selectedCity] || weatherData['Puducherry'];
  const displayTemp = (celsius: number) => {
    if (tempUnit === 'F') {
      return `${Math.round((celsius * 9) / 5 + 32)}°F`;
    }
    return `${celsius}°C`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#111827] rounded-2xl border border-white/[0.1] shadow-2xl flex flex-col overflow-hidden text-[#dae2fd]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Window Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08] bg-[#171f33]/80 backdrop-blur">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
              <span className="w-3 h-3 rounded-full bg-[#4edea3]/70"></span>
              <span className="w-3 h-3 rounded-full bg-[#8083ff]"></span>
            </div>
            <div className="flex items-center gap-2 truncate">
              {isTourism ? (
                <Compass className="w-4 h-4 text-[#8083ff]" />
              ) : (
                <CloudSun className="w-4 h-4 text-[#4edea3]" />
              )}
              <span className="font-mono text-xs sm:text-sm font-semibold truncate">
                {project.previewUrlDisplay} · Interactive Demo
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded bg-[#222a3d] hover:bg-[#2d3449] text-xs font-mono text-[#c7c4d7] hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#908fa0] hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {isTourism ? (
            /* ================= TOURISM INTERACTIVE DEMO ================= */
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#171f33] to-[#222a3d] p-6 rounded-xl border border-white/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="font-mono text-xs text-[#8083ff] font-semibold">
                    EXPLORE PUDUCHERRY & HERITAGE CIRCUITS
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                    Coastal & Colonial Exploration Portal
                  </h3>
                  <p className="text-xs sm:text-sm text-[#c7c4d7] max-w-xl mt-1">
                    Discover iconic monuments, tranquil beaches, French heritage promenades, and
                    curated local itineraries.
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-[#0b1326]/80 px-3 py-1.5 rounded-lg border border-white/[0.06] font-mono text-xs text-[#4edea3]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Pondicherry, India</span>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex gap-2">
                  {['all', 'coastal', 'heritage', 'spiritual'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-colors cursor-pointer ${
                        activeCategory === cat
                          ? 'bg-[#8083ff] text-[#0d0096] font-semibold'
                          : 'bg-[#171f33] text-[#c7c4d7] hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <span className="font-mono text-xs text-[#908fa0]">
                  Showing curated travel itineraries
                </span>
              </div>

              {/* Tourism Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tourismSpots
                  .filter(
                    (spot) => activeCategory === 'all' || spot.category === activeCategory
                  )
                  .map((spot) => (
                    <div
                      key={spot.id}
                      onClick={() => setSelectedPlace(spot.name)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                        selectedPlace === spot.name
                          ? 'bg-[#1e293b] border-[#8083ff] shadow-md shadow-[#8083ff]/10'
                          : 'bg-[#171f33] border-white/[0.06] hover:border-white/[0.12]'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-display font-semibold text-white text-base">
                            {spot.name}
                          </h4>
                          <span className="text-[11px] font-mono text-[#8083ff] uppercase">
                            {spot.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-mono text-[#4edea3] bg-[#00a572]/15 px-2 py-0.5 rounded">
                          <Star className="w-3 h-3 fill-current" />
                          <span>{spot.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#c7c4d7] mt-2 leading-relaxed">
                        {spot.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {spot.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-[#222a3d] text-[11px] font-mono text-[#dae2fd]"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>

              {/* Inquiry Simulator */}
              <div className="bg-[#171f33] p-5 rounded-xl border border-white/[0.06]">
                <h4 className="font-display font-semibold text-white text-sm mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#4edea3]" />
                  Simulate Tour Guide Inquiry for: {selectedPlace}
                </h4>
                {inquirySubmitted ? (
                  <div className="p-3 rounded-lg bg-[#00a572]/20 border border-[#4edea3]/30 text-xs font-mono text-[#4edea3] flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>
                      Inquiry simulated successfully! Guides will receive notice for {selectedPlace}.
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Your Name (e.g. Maya)"
                      defaultValue="Maya Sharma"
                      className="px-3 py-2 rounded-lg bg-[#0b1326] border border-white/[0.08] text-xs font-mono text-white flex-1"
                    />
                    <input
                      type="email"
                      placeholder="maya@company.com"
                      defaultValue="traveler@example.com"
                      className="px-3 py-2 rounded-lg bg-[#0b1326] border border-white/[0.08] text-xs font-mono text-white flex-1"
                    />
                    <button
                      onClick={() => setInquirySubmitted(true)}
                      className="px-4 py-2 rounded-lg bg-[#8083ff] text-[#0d0096] font-mono text-xs font-semibold hover:bg-[#c0c1ff] transition-colors cursor-pointer"
                    >
                      Book Tour Guide
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* ================= WEATHER INTERACTIVE DEMO ================= */
            <div className="space-y-6">
              {/* Weather App Top Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#171f33] p-4 rounded-xl border border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <CloudSun className="w-5 h-5 text-[#4edea3]" />
                  <span className="font-display font-semibold text-white text-base">
                    WeatherPulse Live Simulator
                  </span>
                </div>

                {/* City Picker & Unit Toggle */}
                <div className="flex items-center gap-3">
                  <div className="flex bg-[#0b1326] rounded-lg p-0.5 border border-white/[0.06]">
                    {['Puducherry', 'Chennai', 'Bengaluru'].map((city) => (
                      <button
                        key={city}
                        onClick={() => setSelectedCity(city)}
                        className={`px-3 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                          selectedCity === city
                            ? 'bg-[#4edea3] text-[#003824] font-semibold'
                            : 'text-[#c7c4d7] hover:text-white'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setTempUnit(tempUnit === 'C' ? 'F' : 'C')}
                    className="px-2.5 py-1 rounded-lg bg-[#222a3d] border border-white/[0.08] text-xs font-mono text-white hover:bg-[#2d3449] cursor-pointer"
                  >
                    °{tempUnit}
                  </button>
                </div>
              </div>

              {/* Main Weather Card */}
              <div className="bg-gradient-to-br from-[#171f33] via-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-white/[0.08] shadow-lg">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="font-mono text-xs text-[#4edea3] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {selectedCity}, India
                    </span>
                    <div className="font-display text-5xl sm:text-6xl font-bold text-white mt-2">
                      {displayTemp(currentCityWeather.temp)}
                    </div>
                    <p className="text-sm font-mono text-[#dae2fd] mt-1">
                      {currentCityWeather.condition}
                    </p>
                  </div>

                  {/* Atmospheric Metrics */}
                  <div className="grid grid-cols-3 gap-3 w-full sm:w-auto">
                    <div className="p-3 rounded-xl bg-[#0b1326]/60 border border-white/[0.04] flex flex-col items-center text-center">
                      <Droplets className="w-4 h-4 text-[#8083ff]" />
                      <span className="text-[11px] text-[#908fa0] mt-1 font-mono">Humidity</span>
                      <span className="font-mono text-xs font-semibold text-white">
                        {currentCityWeather.humidity}%
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0b1326]/60 border border-white/[0.04] flex flex-col items-center text-center">
                      <Wind className="w-4 h-4 text-[#4edea3]" />
                      <span className="text-[11px] text-[#908fa0] mt-1 font-mono">Wind</span>
                      <span className="font-mono text-xs font-semibold text-white">
                        {currentCityWeather.wind} km/h
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0b1326]/60 border border-white/[0.04] flex flex-col items-center text-center">
                      <Eye className="w-4 h-4 text-[#d0bcff]" />
                      <span className="text-[11px] text-[#908fa0] mt-1 font-mono">Visibility</span>
                      <span className="font-mono text-xs font-semibold text-white">
                        {currentCityWeather.visibility} km
                      </span>
                    </div>
                  </div>
                </div>

                {/* 5-Day Forecast Grid */}
                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <span className="font-mono text-xs text-[#908fa0] uppercase tracking-wider block mb-3">
                    5-Day Outlook
                  </span>
                  <div className="grid grid-cols-5 gap-2">
                    {currentCityWeather.forecast.map((fc, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-[#0b1326]/50 border border-white/[0.04] flex flex-col items-center text-center gap-1"
                      >
                        <span className="font-mono text-xs text-[#908fa0]">{fc.day}</span>
                        <span className="text-xl my-0.5">{fc.icon}</span>
                        <span className="font-mono text-xs font-semibold text-white">
                          {displayTemp(fc.temp)}
                        </span>
                        <span className="text-[10px] text-[#c7c4d7] truncate max-w-full">
                          {fc.cond}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#171f33] border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c7c4d7]">
            <span>Tech:</span>
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="text-[#dae2fd]">
                {tech.name}
                {idx < project.techStack.length - 1 ? ' ·' : ''}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#222a3d] text-xs font-mono text-[#dae2fd] hover:bg-[#2d3449] transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
