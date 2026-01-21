import React from 'react';
import { Link } from 'react-router-dom';
import { SESSIONS } from '../constants';
import { PlayCircle, Lock, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
            Curso: IA para Programación
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Domina el arte de crear software utilizando las herramientas de Inteligencia Artificial más avanzadas.
          </p>
        </header>

        <div className="grid gap-4 md:gap-6">
          {SESSIONS.map((session) => {
            const isAvailable = session.id === 1; // Only session 1 is active for this demo
            
            return (
              <div 
                key={session.id}
                className={`group relative overflow-hidden rounded-xl border ${
                  isAvailable 
                    ? 'border-indigo-500/30 bg-slate-900/60 hover:border-indigo-500/60' 
                    : 'border-slate-800 bg-slate-900/30 opacity-75'
                } transition-all duration-300 p-6`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-6">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg font-mono text-xl font-bold shrink-0 ${
                       isAvailable ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-500'
                    }`}>
                      {session.id}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-1 group-hover:text-indigo-300 transition-colors ${!isAvailable && 'text-slate-500'}`}>
                        {session.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {session.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 ml-4">
                    {isAvailable ? (
                      <Link 
                        to={`/session/${session.id}`}
                        className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-indigo-900/20 transform hover:scale-105 active:scale-95"
                      >
                        <PlayCircle size={18} />
                        <span>Entrar</span>
                      </Link>
                    ) : (
                      <div className="flex items-center gap-2 px-6 py-2 bg-slate-800 text-slate-500 rounded-lg cursor-not-allowed">
                        <Lock size={18} />
                        <span>Próximamente</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <footer className="mt-16 text-center text-slate-600 text-sm">
            <p className="flex items-center justify-center gap-2">
                <BookOpen size={16} />
                Panel de Instructor - Modo Edición Habilitado
            </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;