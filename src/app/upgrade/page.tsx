'use client';

import { Crown, CheckCircle, Zap, Target, TrendingUp, ExternalLink, Flame } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';
import { KIWIFY_CHECKOUT_URL } from '@/lib/constants';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function UpgradePage() {
  const { user, login } = useAuth();
  const router = useRouter();
  const [subscribersLeft, setSubscribersLeft] = useState(100);

  // Simula contagem regressiva de assinantes (em produção, isso viria de um backend)
  useEffect(() => {
    const interval = setInterval(() => {
      setSubscribersLeft(prev => {
        if (prev > 15) {
          return prev - 1;
        }
        return prev;
      });
    }, 30000); // Reduz 1 a cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  const handleKiwifyCheckout = () => {
    // Redireciona para o checkout da Kiwify
    window.open(KIWIFY_CHECKOUT_URL, '_blank');
  };

  const handleSimulateUpgrade = () => {
    login('prime');
    router.push('/curso');
  };

  if (user?.tier === 'prime') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center">
          <Crown className="w-20 h-20 text-[#d4af37] mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">
            Você já é um Membro Prime!
          </h1>
          <p className="text-gray-400 mb-8">
            Aproveite todo o conteúdo exclusivo do curso
          </p>
          <button
            onClick={() => router.push('/curso')}
            className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#d4af37]/50 transition-all"
          >
            Ir para o Curso
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Crown className="w-16 h-16 text-[#d4af37]" />
              <div className="absolute inset-0 bg-[#d4af37] blur-2xl opacity-30" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#d4af37] mb-4">
            Torne-se um Membro Prime
          </h1>
          <p className="text-xl text-gray-400">
            Desbloqueie todo o potencial do curso e acelere seus resultados
          </p>
        </div>

        {/* Urgency Banner - Promoção 100 Primeiros */}
        <div className="relative mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 animate-pulse opacity-20" />
          <div className="relative bg-gradient-to-r from-red-600/90 to-orange-600/90 border-2 border-red-500 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Flame className="w-6 h-6 text-yellow-300 animate-bounce" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                🔥 PROMOÇÃO RELÂMPAGO 🔥
              </h2>
              <Flame className="w-6 h-6 text-yellow-300 animate-bounce" />
            </div>
            <p className="text-lg sm:text-xl text-white font-semibold mb-2">
              Apenas para os <span className="text-yellow-300 font-bold text-2xl">{subscribersLeft}</span> primeiros assinantes!
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-3xl sm:text-4xl font-bold text-white line-through opacity-70">R$ 497</span>
              <span className="text-xl text-white">→</span>
              <span className="text-4xl sm:text-6xl font-bold text-yellow-300 drop-shadow-lg">R$ 97</span>
            </div>
            <p className="text-white mt-3 font-medium">
              Economize <span className="text-yellow-300 font-bold">R$ 400</span> • Desconto de 80%
            </p>
            <div className="mt-4 bg-white/20 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-yellow-300 to-orange-400 h-full transition-all duration-1000"
                style={{ width: `${subscribersLeft}%` }}
              />
            </div>
            <p className="text-sm text-white/90 mt-2">
              ⚡ Vagas se esgotando rapidamente!
            </p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-gradient-to-b from-[#d4af37]/20 to-black border-2 border-[#d4af37] rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
              OFERTA ESPECIAL - 100 PRIMEIROS
            </div>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-2xl text-gray-500 line-through">R$ 497</span>
              <span className="text-6xl font-bold text-[#d4af37]">R$ 97</span>
            </div>
            <p className="text-gray-400">Pagamento único • Acesso vitalício</p>
            <p className="text-red-400 font-semibold mt-2 animate-pulse">
              ⏰ Apenas {subscribersLeft} vagas restantes!
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-semibold">21+ Videoaulas Completas</h3>
                <p className="text-sm text-gray-400">Mais de 20 horas de conteúdo exclusivo</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-semibold">6 Módulos Avançados</h3>
                <p className="text-sm text-gray-400">Do básico ao avançado em vendas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-semibold">10+ PDFs e E-books Premium</h3>
                <p className="text-sm text-gray-400">Materiais de apoio e scripts prontos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-semibold">50 Gatilhos Mentais</h3>
                <p className="text-sm text-gray-400">E-book completo com gatilhos poderosos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-semibold">Scripts de Vendas Prontos</h3>
                <p className="text-sm text-gray-400">20 scripts testados e aprovados</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-semibold">Acesso Vitalício</h3>
                <p className="text-sm text-gray-400">Pague uma vez, acesse para sempre</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-semibold">Atualizações Gratuitas</h3>
                <p className="text-sm text-gray-400">Novos conteúdos sem custo adicional</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-semibold">Garantia de 7 Dias</h3>
                <p className="text-sm text-gray-400">100% do seu dinheiro de volta</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleKiwifyCheckout}
            className="w-full bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all hover:scale-105 flex items-center justify-center gap-2 animate-pulse"
          >
            <ExternalLink className="w-5 h-5" />
            Garantir Meu Acesso Prime por R$ 97
          </button>

          <p className="text-center text-red-400 text-sm mt-3 font-semibold">
            ⚠️ Promoção válida apenas para os 100 primeiros!
          </p>

          {/* Demo Button */}
          <div className="mt-4 text-center">
            <button
              onClick={handleSimulateUpgrade}
              className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors underline"
            >
              Simular acesso Prime (Demo)
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl p-6 text-center">
            <Zap className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Resultados Rápidos</h3>
            <p className="text-sm text-gray-400">
              Aplique as técnicas e veja resultados em dias
            </p>
          </div>
          <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl p-6 text-center">
            <Target className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Conteúdo Prático</h3>
            <p className="text-sm text-gray-400">
              Direto ao ponto, sem enrolação
            </p>
          </div>
          <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl p-6 text-center">
            <TrendingUp className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Aumente Suas Vendas</h3>
            <p className="text-sm text-gray-400">
              Técnicas comprovadas que funcionam
            </p>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/30 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Garantia Incondicional de 7 Dias
          </h3>
          <p className="text-gray-400">
            Se você não ficar satisfeito por qualquer motivo, devolvemos 100% do seu investimento. 
            Sem perguntas, sem burocracia.
          </p>
        </div>

        {/* FAQ Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Pagamento seguro processado pela Kiwify • Seus dados estão protegidos
          </p>
        </div>
      </div>
    </div>
  );
}
