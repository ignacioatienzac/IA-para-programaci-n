import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Edit3, Eye, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SlideLayoutProps {
  children: React.ReactNode;
  currentSlideIndex: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  isEditing: boolean;
  toggleEdit: () => void;
  title: string;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({
  children,
  currentSlideIndex,
  totalSlides,
  onNext,
  onPrev,
  isEditing,
  toggleEdit,
  title
}) => {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isEditing) return; // Disable shortcuts while editing text
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, isEditing]);

  const progressPercentage = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[100px]" />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 w-full p-4 flex justify-between items-center border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white" title="Volver al menú">
            <Home size={20} />
          </Link>
          <span className="font-mono text-sm text-indigo-400 tracking-wider uppercase">
            {title}
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleEdit}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              isEditing 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {isEditing ? <><Eye size={16} /> Vista Previa</> : <><Edit3 size={16} /> Editar Texto</>}
          </button>
          <div className="font-mono text-sm text-slate-500">
            {currentSlideIndex + 1} / {totalSlides}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative z-10 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-5xl slide-enter">
          {children}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="relative z-10 h-16 w-full flex items-center justify-between px-8 pb-4">
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <button 
          onClick={onPrev}
          disabled={currentSlideIndex === 0}
          className={`p-3 rounded-full transition-all ${
            currentSlideIndex === 0 
              ? 'text-slate-700 cursor-not-allowed' 
              : 'text-slate-300 hover:bg-slate-800 hover:text-white hover:scale-110 active:scale-95'
          }`}
        >
          <ChevronLeft size={32} />
        </button>

        <button 
          onClick={onNext}
          disabled={currentSlideIndex === totalSlides - 1}
          className={`p-3 rounded-full transition-all ${
            currentSlideIndex === totalSlides - 1 
              ? 'text-slate-700 cursor-not-allowed' 
              : 'text-slate-300 hover:bg-slate-800 hover:text-white hover:scale-110 active:scale-95'
          }`}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default SlideLayout;