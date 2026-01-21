import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';
import EditableText from '../components/EditableText';
import { Terminal, Cpu, FileCode } from 'lucide-react';

const Session1: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const totalSlides = 3;

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  return (
    <SlideLayout
      currentSlideIndex={currentSlide}
      totalSlides={totalSlides}
      onNext={nextSlide}
      onPrev={prevSlide}
      isEditing={isEditing}
      toggleEdit={() => setIsEditing(!isEditing)}
      title="Sesión 1: Intro a la Programación"
    >
      {/* Slide 1: Title Card */}
      {currentSlide === 0 && (
        <div className="flex flex-col items-center text-center gap-8">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-500/20 mb-4">
            <Terminal size={48} className="text-white" />
          </div>
          
          <div className="w-full">
            <EditableText
              storageKey="s1-slide1-title"
              initialValue="Introducción a la Programación con IA"
              tag="h1"
              isEditing={isEditing}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-200 pb-4"
            />
          </div>

          <div className="w-full max-w-2xl">
             <EditableText
              storageKey="s1-slide1-subtitle"
              initialValue="Aprende los fundamentos del código y cómo las herramientas de Inteligencia Artificial están revolucionando la forma en que creamos software."
              tag="p"
              isEditing={isEditing}
              className="text-xl md:text-2xl text-slate-400 leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* Slide 2: What is programming? */}
      {currentSlide === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
             <EditableText
              storageKey="s1-slide2-header"
              initialValue="¿Qué es programar realmente?"
              tag="h2"
              isEditing={isEditing}
              className="text-4xl font-bold text-white mb-6"
            />
             <EditableText
              storageKey="s1-slide2-p1"
              initialValue="Programar no es más que dar instrucciones a una computadora para que realice una tarea. Antes, teníamos que ser extremadamente explícitos en cada paso."
              tag="p"
              isEditing={isEditing}
              className="text-lg text-slate-300 leading-relaxed"
            />
             <EditableText
              storageKey="s1-slide2-p2"
              initialValue="Hoy, con la IA, pasamos de ser 'obreros del código' a ser 'arquitectos de soluciones'. Ya no escribimos cada línea; supervisamos la lógica."
              tag="p"
              isEditing={isEditing}
              className="text-lg text-indigo-300 font-medium leading-relaxed border-l-4 border-indigo-500 pl-4"
            />
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-slate-900 rounded-2xl border border-slate-800 p-8 flex flex-col items-center justify-center gap-6 shadow-2xl">
                <Cpu size={80} className="text-indigo-500 opacity-80" />
                <div className="w-full bg-slate-800 rounded-lg p-4 font-mono text-xs text-green-400">
                    <p>{`> iniciar_proceso()`}</p>
                    <p className="opacity-50">{`  cargando módulos IA...`}</p>
                    <p className="opacity-50">{`  analizando sintaxis...`}</p>
                    <p>{`> listo para crear`}</p>
                </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide 3: Basic Files */}
      {currentSlide === 2 && (
        <div className="space-y-8">
           <EditableText
              storageKey="s1-slide3-header"
              initialValue="Los 3 Archivos Mosqueteros"
              tag="h2"
              isEditing={isEditing}
              className="text-4xl font-bold text-center text-white mb-12"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* HTML Card */}
                <div className="bg-slate-900/50 border border-orange-500/20 rounded-xl p-6 hover:bg-slate-900 transition-colors group">
                    <div className="flex items-center gap-3 mb-4">
                        <FileCode className="text-orange-500" />
                        <h3 className="text-xl font-bold text-slate-100">HTML</h3>
                    </div>
                     <EditableText
                        storageKey="s1-slide3-html"
                        initialValue="La estructura. Es el esqueleto de tu web. Define qué es un título, qué es un párrafo y qué es una imagen."
                        tag="p"
                        isEditing={isEditing}
                        className="text-slate-400 text-sm leading-relaxed"
                    />
                </div>

                {/* CSS Card */}
                <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6 hover:bg-slate-900 transition-colors group">
                    <div className="flex items-center gap-3 mb-4">
                        <FileCode className="text-blue-500" />
                        <h3 className="text-xl font-bold text-slate-100">CSS</h3>
                    </div>
                     <EditableText
                        storageKey="s1-slide3-css"
                        initialValue="El estilo. Es el maquillaje y la ropa. Define colores, tamaños, posiciones y animaciones."
                        tag="p"
                        isEditing={isEditing}
                        className="text-slate-400 text-sm leading-relaxed"
                    />
                </div>

                {/* JS Card */}
                <div className="bg-slate-900/50 border border-yellow-500/20 rounded-xl p-6 hover:bg-slate-900 transition-colors group">
                    <div className="flex items-center gap-3 mb-4">
                        <FileCode className="text-yellow-500" />
                        <h3 className="text-xl font-bold text-slate-100">JavaScript</h3>
                    </div>
                     <EditableText
                        storageKey="s1-slide3-js"
                        initialValue="La lógica. Es el cerebro. Decide qué pasa cuando haces click, envías un formulario o cargas datos."
                        tag="p"
                        isEditing={isEditing}
                        className="text-slate-400 text-sm leading-relaxed"
                    />
                </div>
            </div>
        </div>
      )}
    </SlideLayout>
  );
};

export default Session1;