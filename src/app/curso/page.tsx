'use client';

import { useState } from 'react';
import { Lock, Play, Clock, ChevronDown, ChevronUp, Crown } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { MODULES } from '@/lib/constants';

export default function CursoPage() {
  const { user } = useAuth();
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const getLevelBadge = (level: string) => {
    const badges = {
      beginner: { text: 'Iniciante', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
      intermediate: { text: 'Intermediário', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
      advanced: { text: 'Avançado', color: 'bg-red-500/20 text-red-400 border-red-500/30' }
    };
    return badges[level as keyof typeof badges];
  };

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#d4af37] mb-4">
            Módulos do Curso
          </h1>
          <p className="text-xl text-gray-400">
            {user?.tier === 'prime' 
              ? 'Você tem acesso completo a todos os módulos!' 
              : 'Desbloqueie todos os módulos com o acesso Prime'}
          </p>
        </div>

        {/* User Status */}
        {user?.tier === 'free' && (
          <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent border border-[#d4af37]/30 rounded-xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-[#d4af37]" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Acesso Limitado</h3>
                  <p className="text-sm text-gray-400">Você tem acesso apenas ao módulo básico</p>
                </div>
              </div>
              <Link
                href="/upgrade"
                className="flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#d4af37]/50 transition-all whitespace-nowrap"
              >
                <Crown className="w-5 h-5" />
                Desbloquear Tudo
              </Link>
            </div>
          </div>
        )}

        {/* Modules List */}
        <div className="space-y-4">
          {MODULES.map((module, index) => {
            const isLocked = module.isPremium && user?.tier === 'free';
            const isExpanded = expandedModule === module.id;
            const badge = getLevelBadge(module.level);

            return (
              <div
                key={module.id}
                className={`border rounded-xl overflow-hidden transition-all ${
                  isLocked
                    ? 'bg-gray-900/50 border-gray-800'
                    : 'bg-gradient-to-r from-[#d4af37]/5 to-transparent border-[#d4af37]/20 hover:border-[#d4af37]/40'
                }`}
              >
                {/* Module Header */}
                <button
                  onClick={() => !isLocked && toggleModule(module.id)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left"
                  disabled={isLocked}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${
                      isLocked ? 'bg-gray-800 text-gray-600' : 'bg-[#d4af37]/20 text-[#d4af37]'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className={`text-xl font-bold ${isLocked ? 'text-gray-500' : 'text-white'}`}>
                          {module.title}
                        </h3>
                        <span className={`text-xs px-3 py-1 rounded-full border ${badge.color}`}>
                          {badge.text}
                        </span>
                        {isLocked && (
                          <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                            <Lock className="w-3 h-3" />
                            Prime
                          </span>
                        )}
                      </div>
                      <p className={`text-sm ${isLocked ? 'text-gray-600' : 'text-gray-400'}`}>
                        {module.description}
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                        <span>{module.lessons.length} aulas</span>
                        <span>•</span>
                        <span>
                          {module.lessons.reduce((acc, lesson) => {
                            const [min] = lesson.duration.split(':');
                            return acc + parseInt(min);
                          }, 0)} min
                        </span>
                      </div>
                    </div>
                  </div>
                  {!isLocked && (
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-[#d4af37]" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  )}
                </button>

                {/* Lessons List */}
                {isExpanded && !isLocked && (
                  <div className="border-t border-[#d4af37]/20 bg-black/30">
                    <div className="p-6 space-y-3">
                      {module.lessons.map((lesson, lessonIndex) => {
                        const lessonLocked = lesson.isPremium && user?.tier === 'free';
                        
                        return (
                          <div
                            key={lesson.id}
                            className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                              lessonLocked
                                ? 'bg-gray-900/50 cursor-not-allowed'
                                : 'bg-[#d4af37]/5 hover:bg-[#d4af37]/10 cursor-pointer'
                            }`}
                          >
                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                              lessonLocked ? 'bg-gray-800' : 'bg-[#d4af37]/20'
                            }`}>
                              {lessonLocked ? (
                                <Lock className="w-5 h-5 text-gray-600" />
                              ) : (
                                <Play className="w-5 h-5 text-[#d4af37]" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className={`font-medium ${lessonLocked ? 'text-gray-600' : 'text-white'}`}>
                                {lessonIndex + 1}. {lesson.title}
                              </h4>
                              <div className="flex items-center gap-2 mt-1">
                                <Clock className={`w-4 h-4 ${lessonLocked ? 'text-gray-700' : 'text-gray-500'}`} />
                                <span className={`text-sm ${lessonLocked ? 'text-gray-700' : 'text-gray-500'}`}>
                                  {lesson.duration}
                                </span>
                              </div>
                            </div>
                            {lessonLocked && (
                              <span className="flex-shrink-0 text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-500 border border-gray-700">
                                Prime
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {user?.tier === 'free' && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent border border-[#d4af37]/30 rounded-2xl p-8">
              <Crown className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Desbloqueie Todo o Conteúdo
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Tenha acesso a todos os 6 módulos, 21+ videoaulas e materiais exclusivos com o acesso Prime
              </p>
              <Link
                href="/upgrade"
                className="inline-block bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-8 py-4 rounded-lg font-bold hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all hover:scale-105"
              >
                Garantir Acesso Prime Agora
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
