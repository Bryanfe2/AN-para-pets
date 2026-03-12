import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdBannerProps {
  productId: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
}

const ads: AdBannerProps[] = [
  {
    productId: 'curso-videoaulas',
    name: 'Curso Completo AN: Do Zero ao Avançado',
    price: 'R$ 67,90',
    image: 'https://drive.google.com/thumbnail?id=1-IXFGpJOWOA8lMgf3fU0zou2T84PrNAa&sz=w800',
    tag: 'Mais Vendido'
  },
  {
    productId: 'confeitaria-pet',
    name: 'Confeitaria Pet: Bolos e Petiscos Lucrativos',
    price: 'R$ 27,90',
    image: 'https://drive.google.com/thumbnail?id=1GLtPZBNxLoHfavYAl-OVl0FZ5SNqNe2a&sz=w800',
    tag: 'Novo'
  },
  {
    productId: 'renda-extra-an',
    name: 'Renda Extra com Alimentação Natural',
    price: 'R$ 47,90',
    image: 'https://drive.google.com/thumbnail?id=1KRcHDsY4epdV5rntUDKyrjDgEpxlg_Ts&sz=w800',
    tag: 'Oportunidade'
  }
];

export const AdBanner: React.FC<{ index?: number }> = ({ index = 0 }) => {
  const ad = ads[index % ads.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="my-12 bg-gradient-to-br from-brand-olive/5 to-stone-100 rounded-3xl border border-brand-olive/20 overflow-hidden shadow-sm hover:shadow-md transition-all group"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
        <div className="w-full md:w-32 h-32 shrink-0 rounded-2xl overflow-hidden shadow-sm">
          <img 
            src={ad.image} 
            alt={ad.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-brand-olive" />
            <span className="text-brand-olive text-[10px] font-bold uppercase tracking-widest">Recomendado para você</span>
            {ad.tag && (
              <span className="px-2 py-0.5 bg-brand-olive text-white text-[9px] font-bold uppercase tracking-wider rounded-full ml-2">
                {ad.tag}
              </span>
            )}
          </div>
          <h3 className="serif text-xl font-medium text-stone-800 mb-1">{ad.name}</h3>
          <p className="text-stone-500 text-sm mb-4">Aprofunde seus conhecimentos com nosso material completo.</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-brand-olive font-bold text-lg">{ad.price}</span>
            <Link 
              to={`/produto/${ad.productId}`}
              className="inline-flex items-center gap-2 bg-brand-olive text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-sm"
            >
              Ver Detalhes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
