'use client';

import Link from 'next/link';
import { Target, TrendingUp, Zap, Crown, BookOpen, Video, FileText, CheckCircle } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

export default function Home() {
  const { user, login } = useAuth();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/10 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full blur-[120px] opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37] rounded-full blur-[150px] opacity-10 animate-pulse delay-1000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center space-y-8">
            {/* Logo Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <Target className="w-20 h-20 sm:w-24 sm:h-24 text-[#d4af37]" />
                <div className="absolute inset-0 bg-[#d4af37] blur-2xl opacity-30" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#d4af37] tracking-tight">
              Gatilhos de Ouro
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Domine as técnicas de vendas mais poderosas e os gatilhos mentais que transformam 
              vendedores comuns em <span className="text-[#d4af37] font-semibold">vendedores de elite</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                href="/curso"
                className="w-full sm:w-auto bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all hover:scale-105"
              >
                Começar Agora
              </Link>
              <Link
                href="/biblioteca"
                className="w-full sm:w-auto border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d4af37]/10 transition-all"
              >
                Ver Materiais
              </Link>
            </div>

            {/* Demo Access */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => login('free')}
                className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                Modo: <span className="font-semibold">{user?.tier === 'prime' ? 'Prime' : 'Gratuito'}</span>
              </button>
              <span className="text-gray-600 hidden sm:block">|</span>
              <button
                onClick={() => login(user?.tier === 'prime' ? 'free' : 'prime')}
                className="text-sm text-[#d4af37] hover:text-[#f4d03f] transition-colors font-medium"
              >
                Alternar para {user?.tier === 'prime' ? 'Gratuito' : 'Prime'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4">
              O Que Você Vai Aprender
            </h2>
            <p className="text-gray-400 text-lg">
              Conteúdo completo para transformar sua carreira em vendas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-b from-[#d4af37]/5 to-transparent border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all group">
              <div className="bg-[#d4af37]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Técnicas de Vendas</h3>
              <p className="text-gray-400">
                Aprenda as estratégias mais eficazes para fechar vendas de alto valor e superar objeções
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-b from-[#d4af37]/5 to-transparent border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all group">
              <div className="bg-[#d4af37]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Gatilhos Mentais</h3>
              <p className="text-gray-400">
                Domine os gatilhos psicológicos que influenciam decisões de compra e aceleram vendas
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-b from-[#d4af37]/5 to-transparent border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all group">
              <div className="bg-[#d4af37]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Comunicação Persuasiva</h3>
              <p className="text-gray-400">
                Desenvolva habilidades de comunicação que convencem e criam conexões genuínas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4">
              Conteúdo do Curso
            </h2>
            <p className="text-gray-400 text-lg">
              Mais de 20 horas de videoaulas + materiais exclusivos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl p-6 text-center">
              <Video className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">21+</h3>
              <p className="text-gray-400">Videoaulas</p>
            </div>
            <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl p-6 text-center">
              <BookOpen className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">6</h3>
              <p className="text-gray-400">Módulos Completos</p>
            </div>
            <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl p-6 text-center">
              <FileText className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">10+</h3>
              <p className="text-gray-400">PDFs e E-books</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#d4af37]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-gray-400 text-lg">
              Comece gratuitamente ou tenha acesso completo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Acesso Gratuito</h3>
              <p className="text-gray-400 mb-6">Comece sua jornada</p>
              <div className="text-4xl font-bold text-white mb-8">
                R$ 0<span className="text-lg text-gray-400">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">3 aulas introdutórias</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">2 materiais básicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Acesso limitado</span>
                </li>
              </ul>
              <button
                onClick={() => login('free')}
                className="w-full border-2 border-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
              >
                Começar Grátis
              </button>
            </div>

            {/* Prime Plan */}
            <div className="bg-gradient-to-b from-[#d4af37]/20 to-black border-2 border-[#d4af37] rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-4 py-1 rounded-full text-sm font-bold">
                MAIS POPULAR
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-6 h-6 text-[#d4af37]" />
                <h3 className="text-2xl font-bold text-[#d4af37]">Acesso Prime</h3>
              </div>
              <p className="text-gray-400 mb-6">Conteúdo completo</p>
              <div className="text-4xl font-bold text-[#d4af37] mb-8">
                R$ 197<span className="text-lg text-gray-400">/único</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                  <span className="text-white">21+ videoaulas completas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                  <span className="text-white">6 módulos avançados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                  <span className="text-white">10+ PDFs e E-books</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                  <span className="text-white">Scripts prontos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                  <span className="text-white">Acesso vitalício</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                  <span className="text-white">Atualizações gratuitas</span>
                </li>
              </ul>
              <Link
                href="/upgrade"
                className="block w-full bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-6 py-3 rounded-lg font-bold text-center hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all hover:scale-105"
              >
                Garantir Acesso Prime
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-6">
            Pronto para se Tornar um Vendedor de Elite?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a milhares de vendedores que transformaram suas carreiras
          </p>
          <Link
            href="/upgrade"
            className="inline-block bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-12 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all hover:scale-105"
          >
            Começar Agora
          </Link>
        </div>
      </section>
    </div>
  );
}
