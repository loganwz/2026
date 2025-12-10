'use client';

import { useState } from 'react';
import { FileText, Download, Lock, Crown, Search } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { MATERIALS } from '@/lib/constants';

export default function BibliotecaPage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(MATERIALS.map(m => m.category))];

  const filteredMaterials = MATERIALS.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    return <FileText className="w-6 h-6" />;
  };

  const getTypeBadge = (type: string) => {
    const badges = {
      pdf: { text: 'PDF', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
      ebook: { text: 'E-book', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
      video: { text: 'Vídeo', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' }
    };
    return badges[type as keyof typeof badges];
  };

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#d4af37] mb-4">
            Biblioteca de Materiais
          </h1>
          <p className="text-xl text-gray-400">
            {user?.tier === 'prime' 
              ? 'Baixe todos os materiais exclusivos' 
              : 'Acesse materiais gratuitos e desbloqueie conteúdo premium'}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar materiais..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]/50 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#d4af37] text-black'
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800 border border-gray-800'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        </div>

        {/* User Status */}
        {user?.tier === 'free' && (
          <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent border border-[#d4af37]/30 rounded-xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-[#d4af37]" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Acesso Limitado</h3>
                  <p className="text-sm text-gray-400">
                    Você tem acesso a {MATERIALS.filter(m => !m.isPremium).length} de {MATERIALS.length} materiais
                  </p>
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

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map(material => {
            const isLocked = material.isPremium && user?.tier === 'free';
            const badge = getTypeBadge(material.type);

            return (
              <div
                key={material.id}
                className={`rounded-xl overflow-hidden transition-all ${
                  isLocked
                    ? 'bg-gray-900/50 border border-gray-800'
                    : 'bg-gradient-to-b from-[#d4af37]/5 to-transparent border border-[#d4af37]/20 hover:border-[#d4af37]/40'
                }`}
              >
                <div className="p-6">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isLocked ? 'bg-gray-800 text-gray-600' : 'bg-[#d4af37]/20 text-[#d4af37]'
                    }`}>
                      {isLocked ? <Lock className="w-6 h-6" /> : getTypeIcon(material.type)}
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full border ${badge.color}`}>
                      {badge.text}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className={`text-lg font-bold mb-2 ${isLocked ? 'text-gray-500' : 'text-white'}`}>
                    {material.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isLocked ? 'text-gray-700' : 'text-gray-400'}`}>
                    {material.description}
                  </p>

                  {/* Category Tag */}
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      isLocked 
                        ? 'bg-gray-800 text-gray-600' 
                        : 'bg-[#d4af37]/10 text-[#d4af37]'
                    }`}>
                      {material.category}
                    </span>
                    {isLocked && (
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-500 border border-gray-700">
                        Prime
                      </span>
                    )}
                  </div>

                  {/* Download Button */}
                  <button
                    disabled={isLocked}
                    className={`w-full mt-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                      isLocked
                        ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                        : 'bg-[#d4af37]/20 text-[#d4af37] hover:bg-[#d4af37]/30'
                    }`}
                  >
                    <Download className="w-5 h-5" />
                    {isLocked ? 'Bloqueado' : 'Baixar'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredMaterials.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 mb-2">
              Nenhum material encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar os filtros ou termo de busca
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        {user?.tier === 'free' && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent border border-[#d4af37]/30 rounded-2xl p-8">
              <Crown className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Acesse Todos os Materiais
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Desbloqueie {MATERIALS.filter(m => m.isPremium).length} materiais premium incluindo e-books, PDFs e scripts prontos
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
