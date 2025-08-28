import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"
import mock8 from "../img/mock8.jpeg"
import mock9 from "../img/mock9.png"

export let colors = ["rgb(248, 248, 255)", "rgb(248, 248, 255)"];

export const info = {
    firstName: "Davison",
    lastName: "Tavares",
    initials: "dt", // Alterado para iniciais do seu nome
    position: "Desenvolvedor Full Stack & Mobile",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'Alimentado por café e código'
        },
        {
            emoji: '🌎',
            text: 'João Pessoa, Brasil'
        },
        {
            emoji: "💼",
            text: "Engenheiro de Computação em formação"
        },
        {
            emoji: "📧",
            text: "davisontavares0@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/davison.tavares",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/DavisonTavares",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://br.linkedin.com/in/davison-tavares",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Engenheiro de Computação em formação pela UFPB com paixão por desenvolvimento full-stack e mobile. Experiência em criar soluções completas utilizando JavaScript, TypeScript, Python e frameworks modernos como React, Next.js, Node.js e Django. Autodidata e movido por desafios, busco sempre transformar ideias em aplicações robustas que resolvem problemas reais. Além do código, sou entusiasta de futebol e cinema.",
    skills: {
        proficientWith: [
            'javascript', 'typescript', 'react', 'nextjs', 'nodejs', 
            'nestjs', 'react native', 'flutter', 'django', 'python',
            'git', 'github', 'jwt', 'postgresql'
        ],
        exposedTo: [
            'prisma', 'koa', 'express', 'mongodb', 'firebase', 
            'planetscale', 'docker', 'ionic'
        ]
    },
    hobbies: [
        {
            label: 'Futebol',
            emoji: '⚽'
        },
        {
            label: 'Faça você mesmo (DIY)',
            emoji: '🔧'
        },
        {
            label: 'Cinema',
            emoji: '🎬'
        }
    ],
    portfolio: [
        {
            title: "Sistema de Gestão de Produção - Dashboard Web",
            descricao: "Aplicação web desenvolvida em Next.js para otimizar a gestão operacional. Oferece uma interface administrativa completa e um dashboard interativo com visualização de KPIs em tempo real, permitindo à diretoria e ao setor técnico acompanhar a produtividade das equipes, analisar desempenhos e tomar decisões estratégicas com base em dados concretos.",
            live: "#",
            source: "#", 
            image: mock7
        },
        {
            title: "Sistema de Gestão de Produção - App Mobile",
            descricao: "Aplicativo desenvolvido em Flutter para o setor operário. Permite que colaboradores registrem atividades e produção em tempo real, integrando-se perfeitamente ao dashboard web. Modernizou o processo de reporte, substituindo planilhas manuais e garantindo dados precisos e instantâneos para a gerência.",
            live: "#",
            source: "#",
            image: mock8
        },
        {
            title: "Gerenciador de Caixa e Estoque",
            descricao: "Aplicativo mobile desenvolvido com Ionic e Firebase para controle integrado de vendas e estoque. Realiza operações CRUD, gerencia transações financeiras e oferece relatórios consolidados, ideal para pequenos comércios que necessitam de uma solução intuitiva e eficiente.",
            live: "#",
            source: "#",
            image: mock2
        },
        {
            title: "Bolão da Copa - App Mobile",
            descricao: "Aplicativo em React Native para apostas em jogos da Copa do Mundo. Conta com sistema de autenticação JWT, integração com API RESTful desenvolvida em Node.js (Koa) e banco de dados PlanetScale. Os usuários podem criar palpites, acompanhar pontuações e competir em rankings.",
            live: "#",
            source: "#",
            image: mock3
        },
        {
            title: "Bolão da Copa - Versão Web",
            descricao: "Plataforma web em React com as mesmas funcionalidades do app mobile, oferecendo uma experiência responsiva e integrada para usuários que preferem apostar via desktop. Destaca-se pela interface limpa e desempenho otimizado.",
            live: "#",
            source: "#",
            image: mock4
        },
        {
            title: "Sistema de Gestão de Custos - Teccel Engenharia",
            descricao: "Sistema full-stack desenvolvido para controle financeiro e orçamentário. Com front-end em React e back-end em Node.js + Express, utiliza PostgreSQL como banco principal e Prisma ORM. Inclui módulos de autenticação, relatórios personalizados e dashboard analítico.",
            live: "#",
            source: "#",
            image: mock5
        },
        {
            title: "Sistema de Ponto de Venda (PDV)",
            descricao: "Sistema desktop desenvolvido para automação comercial de um mercadinho. Controla vendas, emissão de notas, gestão de clientes e fornecedores, e geração de relatórios financeiros, trazendo organização e eficiência para o negócio.",
            live: "#",
            source: "#",
            image: mock6
        },
        {
            title: "RAPIDEX - Sistema de Vendas de Água",
            descricao: "Plataforma Django para gestão comercial de distribuição de água. Controla estoque, vendas, comissões de vendedores e métricas de desempenho. Gera relatórios detalhados e oferece uma solução completa para pequenas e médias empresas do segmento.",
            live: "#",
            source: "#",
            image: mock9
        },
        {
            title: "Sou Peladeiro - Organizador de Peladas",
            descricao: "App mobile desenvolvido em Ionic para amantes de futebol. Sortea times equilibrados, contabiliza gols, assistências, gera rankings e possui cronômetro integrado. Perfect para tornar as peladas mais organizadas e competitivas.",
            live: "#",
            source: "#",
            image: mock1
        }
    ]
}
