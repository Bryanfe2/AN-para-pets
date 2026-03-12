import React, { useState } from 'react';
import { ShoppingBag, Star, ArrowRight, ExternalLink, PlayCircle, ShieldCheck, BookOpen, Sparkles, GraduationCap, Users, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  rating: number;
  reviews: number;
  image: string;
  tag?: string;
  link: string;
  type: 'curso' | 'ebook' | 'mentoria';
}

const products: Product[] = [
  {
    id: 'renda-extra-an',
    name: 'Renda Extra com Alimentação Natural: Guia de Negócios',
    price: 'R$ 47,90',
    rating: 4.9,
    reviews: 342,
    image: 'https://drive.google.com/thumbnail?id=1KRcHDsY4epdV5rntUDKyrjDgEpxlg_Ts&sz=w800',
    tag: 'Oportunidade',
    link: 'https://pay.cakto.com.br/zuejpzt_798461',
    type: 'curso'
  },
  {
    id: 'curso-videoaulas',
    name: 'Curso Completo AN: Do Zero ao Avançado (Videoaulas)',
    price: 'R$ 67,90',
    rating: 5.0,
    reviews: 856,
    image: 'https://drive.google.com/thumbnail?id=1-IXFGpJOWOA8lMgf3fU0zou2T84PrNAa&sz=w800',
    tag: 'Mais Vendido',
    link: 'https://pay.cakto.com.br/3b482jd',
    type: 'curso'
  },
  {
    id: 'horta-pets',
    name: 'Horta para Pets: Ervas e Vegetais em Casa',
    price: 'R$ 27,90',
    rating: 4.8,
    reviews: 156,
    image: 'https://drive.google.com/thumbnail?id=1HCYC0WEzhFFu5MthYJgrY3DTKSFTPg7A&sz=w800',
    link: 'https://pay.cakto.com.br/ij5kar2',
    type: 'curso'
  },
  {
    id: 'confeitaria-pet',
    name: 'Confeitaria Pet: Bolos e Petiscos Lucrativos',
    price: 'R$ 27,90',
    rating: 4.9,
    reviews: 218,
    image: 'https://drive.google.com/thumbnail?id=1GLtPZBNxLoHfavYAl-OVl0FZ5SNqNe2a&sz=w800',
    tag: 'Novo',
    link: 'https://pay.cakto.com.br/hyewd73_798502',
    type: 'curso'
  },
  {
    id: 'petiscos-desidratados',
    name: 'Mestre dos Desidratados: Petiscos 100% Naturais',
    price: 'R$ 27,90',
    rating: 4.7,
    reviews: 94,
    image: 'https://drive.google.com/thumbnail?id=1zxt4Oq7772QE0PyRkd6QhgZlQ54DqnCs&sz=w800',
    link: 'https://pay.cakto.com.br/5sqwhoi_798508',
    type: 'curso'
  },
  {
    id: 'primeiros-socorros',
    name: 'Primeiros Socorros Pet: Guia de Emergências',
    price: 'R$ 19,90',
    rating: 5.0,
    reviews: 112,
    image: 'https://drive.google.com/thumbnail?id=1SiUOVnmAGJSoSQL-acFGoN7auBZadKZU&sz=w800',
    link: 'https://pay.cakto.com.br/j33odvb_798516',
    type: 'curso'
  },
  {
    id: 'clube-vip',
    name: 'Clube VIP de Nutrição Pet: Newsletter & Cardápios',
    price: 'R$ 29,90/mês',
    rating: 5.0,
    reviews: 128,
    image: 'https://drive.google.com/thumbnail?id=1mKITkw1JyjcCM6njqBKs2EOoiew7FDJR&sz=w800',
    tag: 'Assinatura',
    link: 'https://pay.cakto.com.br/9r5gg8c',
    type: 'mentoria'
  }
];

export const Marketplace: React.FC = () => {
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);

  return (
    <section className="py-16 bg-brand-accent/30 rounded-[48px] px-8 md:px-12 border border-brand-primary/10 relative">
      <AnimatePresence>
        {isVipModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVipModalOpen(false)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[32px] shadow-2xl w-full max-w-lg overflow-hidden border border-stone-100"
            >
              <div className="absolute top-6 right-6 z-10">
                <button
                  onClick={() => setIsVipModalOpen(false)}
                  className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-500 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Benefícios Exclusivos</span>
                </div>
                <h3 className="serif text-3xl text-stone-800 mb-6">Clube VIP de Nutrição Pet</h3>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-brand-primary/10 rounded-full text-brand-primary">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 text-sm mb-1">Newsletter Premium (1x por semana)</h4>
                        <p className="text-stone-500 text-xs leading-relaxed">E-mails exclusivos com novidades, dicas práticas, receitas inéditas e tendências da alimentação natural.</p>
                      </div>
                    </div>
                    <div className="pl-10 space-y-2">
                      <div className="flex items-center gap-2 text-[11px] text-stone-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40" />
                        Novidades sobre nutrição pet
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-stone-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40" />
                        Dicas práticas e receitas inéditas
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-stone-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40" />
                        Estudos e tendências
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-brand-primary/10 rounded-full text-brand-primary">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 text-sm mb-1">Biblioteca de Cardápios Sazonais</h4>
                        <p className="text-stone-500 text-xs leading-relaxed">Acesso contínuo a um acervo de cardápios temáticos exclusivos.</p>
                      </div>
                    </div>
                    <div className="pl-10 space-y-2">
                      <div className="flex items-center gap-2 text-[11px] text-stone-400 italic">
                        <span className="w-1 h-1 rounded-full bg-stone-300" />
                        "Cardápio de inverno: Alimentos que aquecem"
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-stone-400 italic">
                        <span className="w-1 h-1 rounded-full bg-stone-300" />
                        "Especial de Natal: Ceia Pet Safe"
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-stone-400 italic">
                        <span className="w-1 h-1 rounded-full bg-stone-300" />
                        "Páscoa: Ovos de 'Chocolate' Pet"
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-stone-400 italic">
                        <span className="w-1 h-1 rounded-full bg-stone-300" />
                        "Cardápio de Verão & Hidratação"
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="https://pay.cakto.com.br/9r5gg8c"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsVipModalOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-brand-primary text-white text-sm font-bold uppercase tracking-widest rounded-2xl shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/90 transition-all"
                  >
                    Fazer Parte do Clube
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Ecossistema Pet Natural</span>
          </div>
          <h2 className="serif text-4xl md:text-5xl text-stone-800 mb-4">
            Cursos e Treinamentos
          </h2>
          <p className="text-stone-500 font-light text-lg">
            Expanda seu conhecimento e transforme sua paixão por pets em uma fonte de renda com nossos infoprodutos exclusivos.
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-sm font-medium text-stone-400">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-brand-primary" />
            <span>Certificado Incluso</span>
          </div>
          <div className="flex items-center gap-1">
            <PlayCircle className="w-4 h-4 text-brand-primary" />
            <span>Acesso Vitalício</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-brand-primary/5 transition-all group"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.tag && (
                  <span className="bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    {product.tag}
                  </span>
                )}
                <span className="bg-white/90 backdrop-blur-sm text-stone-800 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm w-fit flex items-center gap-1">
                  {product.type === 'curso' ? <GraduationCap className="w-3 h-3" /> : product.type === 'mentoria' ? <Users className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
                  {product.type}
                </span>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating) ? 'text-brand-primary fill-brand-primary' : 'text-stone-200'
                    }`}
                  />
                ))}
                <span className="text-[10px] text-stone-400 font-medium ml-1">({product.reviews})</span>
              </div>

              <h3 className="font-medium text-stone-800 text-sm mb-3 line-clamp-2 h-10">
                {product.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-lg font-bold text-brand-primary">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-xs text-stone-300 line-through">{product.oldPrice}</span>
                )}
              </div>

              {product.id === 'clube-vip' ? (
                <button
                  onClick={() => setIsVipModalOpen(true)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-brand-primary/5 hover:bg-brand-primary hover:text-white text-brand-primary text-xs font-bold uppercase tracking-widest rounded-2xl transition-all border border-brand-primary/10"
                >
                  Ver Benefícios
                  <Sparkles className="w-3 h-3" />
                </button>
              ) : product.link.startsWith('http') ? (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-stone-50 hover:bg-brand-primary hover:text-white text-stone-600 text-xs font-bold uppercase tracking-widest rounded-2xl transition-all"
                >
                  Garantir Vaga
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <Link
                  to={product.link}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-stone-50 hover:bg-brand-primary hover:text-white text-stone-600 text-xs font-bold uppercase tracking-widest rounded-2xl transition-all"
                >
                  Garantir Vaga
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
