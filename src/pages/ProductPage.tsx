import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { AdBanner } from '../components/AdBanner';
import { ArrowLeft, Utensils, Clock, Scale, ChevronDown, ChevronUp, Search, Sparkles, CheckCircle2, Zap, Lightbulb } from 'lucide-react';
import Markdown from 'react-markdown';
import { products, Recipe, ChecklistItem, MindfulnessExercise } from '../data/products';

const MindfulnessExerciseCard: React.FC<{ exercise: MindfulnessExercise }> = ({ exercise }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div 
      layout
      className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div 
        className="p-6 cursor-pointer flex justify-between items-center gap-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-brand-olive/10 text-brand-olive text-[10px] font-bold uppercase tracking-wider rounded-full">
              {exercise.duration}
            </span>
          </div>
          <h3 className="serif text-xl font-medium text-stone-800">{exercise.title}</h3>
        </div>
        <div className="text-stone-400">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-stone-100"
          >
            <div className="p-6 bg-stone-50/50 space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-stone-700 uppercase tracking-wider mb-3">
                  <Zap className="w-4 h-4 text-brand-olive" />
                  Passo a Passo
                </h4>
                <ol className="space-y-3">
                  {exercise.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-stone-600 text-sm">
                      <span className="font-serif italic text-brand-olive font-bold">{idx + 1}.</span>
                      <p className="leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200">
                <h4 className="flex items-center gap-2 text-sm font-bold text-stone-700 uppercase tracking-wider mb-2">
                  <Lightbulb className="w-4 h-4 text-brand-olive" />
                  Dicas Extras
                </h4>
                <ul className="space-y-2">
                  {exercise.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-stone-500 text-xs italic">
                      <div className="w-1 h-1 rounded-full bg-brand-olive/40 mt-1.5 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ChecklistCard: React.FC<{ item: ChecklistItem }> = ({ item }) => {
  const [completed, setCompleted] = React.useState(false);

  return (
    <motion.div 
      layout
      onClick={() => setCompleted(!completed)}
      className={`p-6 rounded-2xl border transition-all cursor-pointer select-none ${
        completed 
          ? 'bg-brand-olive/5 border-brand-olive/30 shadow-inner' 
          : 'bg-white border-stone-200 shadow-sm hover:shadow-md'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`mt-1 shrink-0 transition-colors ${completed ? 'text-brand-olive' : 'text-stone-300'}`}>
          <CheckCircle2 className={`w-6 h-6 ${completed ? 'fill-brand-olive/10' : ''}`} />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-stone-100 text-stone-500 text-[10px] font-bold uppercase tracking-wider rounded-full">
              {item.category}
            </span>
          </div>
          <h3 className={`text-lg font-medium transition-all ${completed ? 'text-stone-400 line-through' : 'text-stone-800'}`}>
            {item.task}
          </h3>
          <p className={`text-sm leading-relaxed mt-2 transition-colors ${completed ? 'text-stone-400' : 'text-stone-500'}`}>
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div 
      layout
      className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div 
        className="p-6 cursor-pointer flex justify-between items-start gap-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-brand-olive/10 text-brand-olive text-[10px] font-bold uppercase tracking-wider rounded-full">
              {recipe.category}
            </span>
          </div>
          <h3 className="serif text-xl font-medium text-stone-800 mb-1">{recipe.title}</h3>
          <div className="flex flex-wrap items-center gap-4 text-stone-500 text-xs">
            <div className="flex items-center gap-1">
              <Scale className="w-3 h-3" />
              <span>{recipe.quantityInfo || 'Porção padrão'}</span>
            </div>
            {recipe.benefits && (
              <div className="flex items-center gap-1 text-brand-olive font-medium">
                <Sparkles className="w-3 h-3" />
                <span>{recipe.benefits.join(' • ')}</span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-1 text-stone-400">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-stone-100"
          >
            <div className="p-6 bg-stone-50/50 space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-stone-700 uppercase tracking-wider mb-3">
                  <Utensils className="w-4 h-4 text-brand-olive" />
                  Ingredientes
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-stone-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-olive/40 mt-1.5 shrink-0" />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-stone-700 uppercase tracking-wider mb-3">
                  <Clock className="w-4 h-4 text-brand-olive" />
                  Modo de Preparo
                </h4>
                <ol className="space-y-3">
                  {recipe.instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-stone-600 text-sm">
                      <span className="font-serif italic text-brand-olive font-bold">{idx + 1}.</span>
                      <p className="leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? products[id] : null;
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('Todas');

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="serif text-4xl mb-4">Produto não encontrado</h1>
        <p className="text-stone-500 mb-8">O conteúdo que você está procurando não existe ou foi removido.</p>
        <Link to="/" className="bg-brand-olive text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
          Voltar para a Home
        </Link>
      </div>
    );
  }

  const categories = ['Todas', ...Array.from(new Set(product.recipes?.map(r => r.category) || []))];

  const filteredRecipes = product.recipes?.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         recipe.ingredients.some(i => i.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Todas' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-stone-600 hover:text-brand-olive transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Voltar</span>
          </button>
          <div className="serif text-xl font-light">Pet Natural</div>
          <div className="w-10"></div> {/* Spacer */}
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-8 sm:mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-olive/10 text-brand-olive mb-6">
              {React.cloneElement(product.icon as any, { size: 32 })}
            </div>
            {product.isBonus && (
              <span className="block text-brand-olive text-[10px] font-bold uppercase tracking-widest mb-2">Bônus Exclusivo</span>
            )}
            <h1 className="serif text-4xl md:text-5xl font-light mb-4">{product.title}</h1>
            <p className="text-stone-500 text-lg font-light max-w-2xl mx-auto">{product.description}</p>
          </div>

          {/* Intro Content */}
          <div className="bg-white rounded-3xl shadow-sm border border-stone-200 p-4 sm:p-8 md:p-10 mb-12">
            {product.videoUrl && (
              <div className="-mx-4 -mt-4 sm:mx-0 sm:mt-0 mb-8 sm:mb-10 aspect-video sm:rounded-2xl overflow-hidden shadow-lg border-b sm:border border-stone-100">
                <iframe
                  src={product.videoUrl}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className="markdown-body prose prose-stone max-w-none">
              <Markdown>{product.content}</Markdown>
            </div>
            <AdBanner index={0} />
          </div>

          {/* Checklist Section */}
          {product.checklistItems && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="serif text-3xl font-light">Passo a Passo</h2>
                <span className="text-stone-400 text-sm font-medium">{product.checklistItems.length} itens</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.checklistItems.map(item => (
                  <ChecklistCard key={item.id} item={item} />
                ))}
              </div>
              
              <div className="bg-brand-olive/5 rounded-3xl p-8 border border-brand-olive/10 text-center">
                <h4 className="serif text-xl text-brand-olive mb-2">Dica de Ouro</h4>
                <p className="text-stone-600 text-sm max-w-xl mx-auto">
                  Não tenha pressa! A organização inicial é o que garante que você não desista no meio do caminho. 
                  Uma vez que você pega o ritmo, preparar a comida do seu pet vira uma terapia.
                </p>
              </div>
              <AdBanner index={1} />
            </div>
          )}

          {/* Exercises Section */}
          {product.exercises && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="serif text-3xl font-light">Práticas Sugeridas</h2>
                <span className="text-stone-400 text-sm font-medium">{product.exercises.length} exercícios</span>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {product.exercises.map(exercise => (
                  <MindfulnessExerciseCard key={exercise.id} exercise={exercise} />
                ))}
              </div>
              <AdBanner index={2} />
            </div>
          )}

          {/* Recipes Section */}
          {product.recipes && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h2 className="serif text-3xl font-light">Receitas Detalhadas</h2>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input 
                      type="text" 
                      placeholder="Buscar ingrediente ou prato..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-white border border-stone-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive transition-all w-full sm:w-64"
                    />
                  </div>

                  {/* Category Filter */}
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive/20 focus:border-brand-olive transition-all"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              {filteredRecipes && filteredRecipes.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {filteredRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300">
                  <p className="text-stone-400">Nenhuma receita encontrada para os filtros selecionados.</p>
                </div>
              )}
            </div>
          )}

          {/* Footer Action */}
          <div className="mt-20 text-center border-t border-stone-200 pt-12">
            <p className="text-stone-400 text-sm mb-6 italic">Esperamos que este conteúdo transforme a vida do seu pet!</p>
            <Link to="/" className="inline-flex items-center gap-2 bg-white border border-stone-200 px-6 py-2 rounded-full text-stone-600 font-medium hover:bg-stone-50 transition-all">
              <ArrowLeft className="w-4 h-4" />
              Explorar outros módulos
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ProductPage;
