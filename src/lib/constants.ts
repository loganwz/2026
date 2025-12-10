import { Module, Material } from './types';

export const MODULES: Module[] = [
  {
    id: 1,
    title: 'Fundamentos da Venda',
    description: 'Aprenda os princípios básicos que todo vendedor de sucesso precisa dominar',
    level: 'beginner',
    isPremium: false,
    lessons: [
      {
        id: 1,
        title: 'O Mindset do Vendedor de Elite',
        duration: '15:30',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: false
      },
      {
        id: 2,
        title: 'Entendendo o Processo de Vendas',
        duration: '22:45',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: false
      },
      {
        id: 3,
        title: 'Construindo Rapport com o Cliente',
        duration: '18:20',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: false
      }
    ]
  },
  {
    id: 2,
    title: 'Gatilhos Mentais Poderosos',
    description: 'Domine os gatilhos psicológicos que influenciam decisões de compra',
    level: 'intermediate',
    isPremium: true,
    lessons: [
      {
        id: 4,
        title: 'Gatilho da Escassez',
        duration: '25:10',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      },
      {
        id: 5,
        title: 'Gatilho da Urgência',
        duration: '20:30',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      },
      {
        id: 6,
        title: 'Gatilho da Autoridade',
        duration: '28:15',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      },
      {
        id: 7,
        title: 'Gatilho da Prova Social',
        duration: '23:40',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      },
      {
        id: 8,
        title: 'Gatilho da Reciprocidade',
        duration: '19:55',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      }
    ]
  },
  {
    id: 3,
    title: 'Técnicas Avançadas de Fechamento',
    description: 'Estratégias profissionais para fechar vendas de alto valor',
    level: 'advanced',
    isPremium: true,
    lessons: [
      {
        id: 9,
        title: 'Fechamento Assumido',
        duration: '30:20',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      },
      {
        id: 10,
        title: 'Técnica do Silêncio',
        duration: '17:45',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      },
      {
        id: 11,
        title: 'Superando Objeções',
        duration: '35:10',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      },
      {
        id: 12,
        title: 'Negociação Estratégica',
        duration: '28:30',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      }
    ]
  },
  {
    id: 4,
    title: 'Comunicação Persuasiva',
    description: 'Domine a arte da comunicação que convence e influencia',
    level: 'intermediate',
    isPremium: true,
    lessons: [
      {
        id: 13,
        title: 'Linguagem Corporal na Venda',
        duration: '24:15',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      },
      {
        id: 14,
        title: 'Storytelling que Vende',
        duration: '26:40',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      },
      {
        id: 15,
        title: 'Perguntas Poderosas',
        duration: '21:20',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      }
    ]
  },
  {
    id: 5,
    title: 'Vendas Consultivas',
    description: 'Torne-se um consultor de confiança, não apenas um vendedor',
    level: 'advanced',
    isPremium: true,
    lessons: [
      {
        id: 16,
        title: 'Diagnóstico de Necessidades',
        duration: '32:10',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      },
      {
        id: 17,
        title: 'Apresentação de Soluções',
        duration: '29:30',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      },
      {
        id: 18,
        title: 'Construindo Relacionamentos Duradouros',
        duration: '25:45',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      }
    ]
  },
  {
    id: 6,
    title: 'Vendas Digitais e Online',
    description: 'Estratégias para vender no ambiente digital',
    level: 'intermediate',
    isPremium: true,
    lessons: [
      {
        id: 19,
        title: 'Funil de Vendas Digital',
        duration: '27:20',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      },
      {
        id: 20,
        title: 'Copy que Converte',
        duration: '31:15',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      },
      {
        id: 21,
        title: 'Vendas pelo WhatsApp',
        duration: '23:50',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isPremium: true
      }
    ]
  }
];

export const MATERIALS: Material[] = [
  {
    id: 1,
    title: 'E-book: 50 Gatilhos Mentais',
    description: 'Guia completo com os 50 gatilhos mentais mais poderosos para vendas',
    type: 'ebook',
    downloadUrl: '#',
    isPremium: true,
    category: 'Gatilhos Mentais'
  },
  {
    id: 2,
    title: 'PDF: Checklist do Vendedor',
    description: 'Lista de verificação para preparação antes de cada venda',
    type: 'pdf',
    downloadUrl: '#',
    isPremium: false,
    category: 'Ferramentas'
  },
  {
    id: 3,
    title: 'PDF: Scripts de Vendas Prontos',
    description: '20 scripts testados e aprovados para diferentes situações',
    type: 'pdf',
    downloadUrl: '#',
    isPremium: true,
    category: 'Scripts'
  },
  {
    id: 4,
    title: 'E-book: Objeções e Como Superá-las',
    description: 'Manual completo com as 30 objeções mais comuns e suas respostas',
    type: 'ebook',
    downloadUrl: '#',
    isPremium: true,
    category: 'Técnicas'
  },
  {
    id: 5,
    title: 'PDF: Planilha de Metas',
    description: 'Ferramenta para definir e acompanhar suas metas de vendas',
    type: 'pdf',
    downloadUrl: '#',
    isPremium: false,
    category: 'Ferramentas'
  },
  {
    id: 6,
    title: 'E-book: Psicologia do Consumidor',
    description: 'Entenda como funciona a mente do seu cliente',
    type: 'ebook',
    downloadUrl: '#',
    isPremium: true,
    category: 'Psicologia'
  },
  {
    id: 7,
    title: 'PDF: Guia de Linguagem Corporal',
    description: 'Aprenda a ler e usar a linguagem corporal a seu favor',
    type: 'pdf',
    downloadUrl: '#',
    isPremium: true,
    category: 'Comunicação'
  },
  {
    id: 8,
    title: 'E-book: Vendas B2B Avançado',
    description: 'Estratégias específicas para vendas corporativas',
    type: 'ebook',
    downloadUrl: '#',
    isPremium: true,
    category: 'B2B'
  },
  {
    id: 9,
    title: 'PDF: Template de Proposta Comercial',
    description: 'Modelo profissional de proposta que fecha vendas',
    type: 'pdf',
    downloadUrl: '#',
    isPremium: true,
    category: 'Ferramentas'
  },
  {
    id: 10,
    title: 'E-book: Mindset Milionário',
    description: 'Desenvolva a mentalidade dos vendedores de elite',
    type: 'ebook',
    downloadUrl: '#',
    isPremium: true,
    category: 'Mindset'
  }
];

export const KIWIFY_CHECKOUT_URL = https://pay.kiwify.com.br/SoriU9c
