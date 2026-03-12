/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  PlayCircle, 
  Cookie, 
  CheckSquare, 
  Heart, 
  ChevronRight,
  Info,
  Calculator
} from 'lucide-react';
import { motion } from 'motion/react';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import { Marketplace } from './components/Marketplace';

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

interface ModuleProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  actionLabel: string;
  isBonus?: boolean;
}

// --- Components ---

const ModuleCard = ({ id, title, description, icon, actionLabel, isBonus }: ModuleProps) => {
  const isExternal = id === 'comunidade';
  const externalUrl = "https://chat.whatsapp.com/LW6MTQAjFexDdwiXRjXs8d";

  const linkClasses = "flex items-center justify-between w-full py-3 px-5 bg-stone-50 hover:bg-brand-olive hover:text-white transition-colors rounded-2xl text-sm font-medium group";
  
  const linkContent = (
    <>
      {actionLabel}
      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </>
  );

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-[32px] shadow-sm border border-stone-100 flex flex-col h-full relative overflow-hidden"
    >
      {isBonus && (
        <div className="absolute top-4 right-4 bg-brand-olive text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-semibold">
          Bônus
        </div>
      )}
      <div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-olive mb-6">
        {icon}
      </div>
      <h3 className="serif text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      {isExternal ? (
        <a 
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          {linkContent}
        </a>
      ) : (
        <Link 
          to={`/produto/${id}`}
          className={linkClasses}
        >
          {linkContent}
        </Link>
      )}
    </motion.div>
  );
};

const HomePage = () => (
  <div className="min-h-screen pb-20">
    {/* Header */}
    <header className="pt-12 pb-20 px-6 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-brand-olive uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
          Bem-vindo ao seu novo estilo de vida
        </span>
        <h1 className="serif text-5xl md:text-7xl font-light mb-6">
          Alimentação Natural <br />
          <span className="italic">para Cães e Gatos</span>
        </h1>
        <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Tudo o que você precisa para transformar a saúde do seu pet com ingredientes simples, baratos e muito amor.
        </p>
      </motion.div>
    </header>

    <main className="max-w-7xl mx-auto px-6">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <ModuleCard 
          id="50-receitas"
          title="50 Receitas Naturais"
          description="Ingredientes baratos e nutritivos para cães e gatos. O guia completo para o dia a dia."
          icon={<BookOpen />}
          actionLabel="Acessar Material"
        />
        <ModuleCard 
          id="guia-suplementacao"
          title="Guia de Suplementação"
          description="Como, qual e quanto de suplemento para cada pet. Não deixe faltar nada na dieta."
          icon={<Info />}
          actionLabel="Acessar Material"
        />
        <ModuleCard 
          id="calculo-detalhado"
          title="Cálculo Nutricional"
          description="Aprenda a calcular a quantidade exata de proteína, vísceras e vegetais para o seu pet."
          icon={<Calculator />}
          actionLabel="Acessar Material"
        />
        <ModuleCard 
          id="comunidade"
          title="Comunidade Exclusiva"
          description="Troque experiências, tire dúvidas e compartilhe fotos dos seus pets com outros tutores."
          icon={<Users />}
          actionLabel="Acessar Material"
        />
        <ModuleCard 
          id="transicao"
          title="Transição Alimentar"
          description="Vídeo aula completa ensinando o passo a passo seguro para mudar a dieta do seu pet."
          icon={<PlayCircle />}
          actionLabel="Acessar Material"
        />
        <ModuleCard 
          id="petiscos"
          title="10 Petiscos Naturais"
          description="Receitas saudáveis e fáceis para recompensar seu melhor amigo entre as refeições."
          icon={<Cookie />}
          actionLabel="Acessar Material"
          isBonus={true}
        />
        <ModuleCard 
          id="checklist"
          title="Checklist de Início"
          description="Tudo o que você precisa preparar para começar a alimentação natural com segurança e organização."
          icon={<CheckSquare />}
          actionLabel="Acessar Material"
          isBonus={true}
        />
        <ModuleCard 
          id="mindfulness"
          title="Guia de Mindfulness"
          description="Descubra como criar uma conexão profunda e presente com seu pet através de técnicas de atenção plena."
          icon={<Heart />}
          actionLabel="Acessar Material"
          isBonus={true}
        />
      </div>

      {/* Marketplace Section */}
      <div className="mb-20">
        <Marketplace />
      </div>
    </main>

    {/* Footer */}
    <footer className="mt-20 pt-10 border-t border-stone-200 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-stone-400 text-sm">© 2026 Pet Natural. Todos os direitos reservados.</p>
      <div className="flex gap-8 text-stone-400 text-xs uppercase tracking-widest font-semibold">
        <a href="#" className="hover:text-brand-olive">Termos de Uso</a>
        <a href="#" className="hover:text-brand-olive">Privacidade</a>
      </div>
    </footer>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produto/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}
