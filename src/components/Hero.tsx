import React from 'react';
import { ArrowRight, Play, Brain, Cpu, Zap, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 overflow-hidden">
      {/* AI Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="neural-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#3B82F6" opacity="0.3">
                <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
          {/* Neural connections */}
          <g stroke="#3B82F6" strokeWidth="1" opacity="0.2">
            <line x1="100" y1="100" x2="300" y2="200">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="300" y1="200" x2="500" y2="150">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" />
            </line>
            <line x1="500" y1="150" x2="700" y2="300">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="200" y1="400" x2="400" y2="350">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.2s" repeatCount="indefinite" />
            </line>
            <line x1="400" y1="350" x2="600" y2="450">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.8s" repeatCount="indefinite" />
            </line>
          </g>
        </svg>
      </div>

      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-32 md:h-40"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-blue-800"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* AI Logo/Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Brain className="w-12 h-12 text-white" />
            </div>
            {/* Floating AI elements */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            AI赋能
          </span>
          红色文化，开启东平新体验
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed">
          探索百年东平历史，体验智能文化之旅。
          <span className="font-semibold text-blue-700">AI向导</span>
          带您领略东平独特的红湖文化、历史故事与民俗风情
        </p>
        
        {/* AI Features Highlight */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <Brain className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-slate-700">智能问答</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <Cpu className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-slate-700">深度学习</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <Zap className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-semibold text-slate-700">3秒响应</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('features')}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-blue-800/30 flex items-center gap-3"
          >
            <Brain className="w-5 h-5" />
            探索功能
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => scrollToSection('ai-demo')}
            className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 bg-white/50 backdrop-blur-sm"
          >
            <Play className="w-5 h-5" />
            体验AI向导
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse flex items-center justify-center">
        <Brain className="w-8 h-8 text-blue-600/50" />
      </div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-yellow-200/30 rounded-full animate-pulse delay-1000 flex items-center justify-center">
        <Sparkles className="w-6 h-6 text-yellow-600/50" />
      </div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-purple-300/20 rounded-full animate-pulse delay-500 flex items-center justify-center">
        <Cpu className="w-5 h-5 text-purple-600/50" />
      </div>
      <div className="absolute top-1/3 right-1/6 w-14 h-14 bg-green-200/30 rounded-full animate-pulse delay-700 flex items-center justify-center">
        <Zap className="w-6 h-6 text-green-600/50" />
      </div>
    </section>
  );
};

export default Hero;