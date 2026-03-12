import { BookOpen, Info, Users, PlayCircle, Cookie, CheckSquare, Heart, Calculator } from 'lucide-react';
import { ReactNode } from 'react';

export interface Recipe {
  id: number;
  title: string;
  category: string;
  ingredients: string[];
  instructions: string[];
  quantityInfo?: string;
  benefits?: string[];
}

export interface ChecklistItem {
  id: number;
  task: string;
  description: string;
  category: string;
}

export interface MindfulnessExercise {
  id: number;
  title: string;
  duration: string;
  steps: string[];
  tips: string[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  content: string;
  isBonus?: boolean;
  recipes?: Recipe[];
  videoUrl?: string;
  checklistItems?: ChecklistItem[];
  exercises?: MindfulnessExercise[];
}

export const products: Record<string, Product> = {
  '50-receitas': {
    id: '50-receitas',
    title: '50 Receitas Naturais',
    description: 'Ingredientes baratos e nutritivos para cães e gatos.',
    icon: <BookOpen />,
    content: `Este guia foi elaborado para tutores que buscam saúde e longevidade para seus pets através da alimentação natural (AN). Abaixo, você encontrará 50 receitas divididas por categorias, todas com passo a passo detalhado.`,
    recipes: [
      {
        id: 1,
        title: 'Risoto de Frango e Abóbora',
        category: 'Frango',
        ingredients: ['200g de peito de frango', '100g de arroz integral', '100g de abóbora cabotiá', '50g de vagem'],
        instructions: [
          'Cozinhe o frango em água sem sal.',
          'Cozinhe a abóbora até ficar macia e amasse.',
          'Misture o frango desfiado, a abóbora e a vagem cozida ao arroz integral.',
          'Sirva em temperatura ambiente.'
        ],
        quantityInfo: 'Rende aprox. 450g',
        benefits: ['Digestão Saudável', 'Rico em Vitaminas']
      },
      {
        id: 2,
        title: 'Canja Nutritiva para Cães',
        category: 'Frango',
        ingredients: ['150g de peito de frango', '1 cenoura média', '50g de arroz branco', '1 chuchu pequeno'],
        instructions: [
          'Cozinhe o frango com a cenoura e o chuchu picados em bastante água.',
          'Adicione o arroz e deixe cozinhar até que tudo esteja bem macio.',
          'A consistência deve ser de uma sopa espessa.',
          'Espere esfriar antes de servir.'
        ],
        quantityInfo: 'Rende aprox. 500ml',
        benefits: ['Hidratação', 'Estômago Sensível']
      },
      {
        id: 3,
        title: 'Frango com Batata Doce e Espinafre',
        category: 'Frango',
        ingredients: ['200g de sobrecoxa (sem osso)', '150g de batata doce', '1 xícara de espinafre fresco'],
        instructions: [
          'Grelhe a sobrecoxa em cubos pequenos.',
          'Cozinhe a batata doce até ficar macia.',
          'No final do cozimento da batata, adicione o espinafre apenas para murchar.',
          'Misture tudo e sirva.'
        ],
        quantityInfo: 'Rende aprox. 400g',
        benefits: ['Energia Duradoura', 'Saúde da Pelagem']
      },
      {
        id: 4,
        title: 'Almôndegas de Frango e Aveia',
        category: 'Frango',
        ingredients: ['300g de frango moído', '1/2 xícara de farelo de aveia', '1 ovo', 'Salsinha picada'],
        instructions: [
          'Misture todos os ingredientes em uma tigela.',
          'Molde pequenas bolinhas.',
          'Asse em forno pré-aquecido a 180°C por 20 minutos.',
          'Deixe esfriar completamente.'
        ],
        quantityInfo: 'Rende 10-12 unidades',
        benefits: ['Saúde Cardíaca', 'Rico em Fibras']
      },
      {
        id: 5,
        title: 'Guisado de Frango com Ervilhas',
        category: 'Frango',
        ingredients: ['200g de peito de frango', '50g de ervilhas frescas', '100g de batata inglesa', 'Pitada de cúrcuma'],
        instructions: [
          'Refogue o frango em cubos com um pouco de água e a cúrcuma.',
          'Adicione a batata picada e cozinhe até amaciar.',
          'Adicione as ervilhas nos últimos 5 minutos.',
          'Misture bem e sirva.'
        ],
        quantityInfo: 'Rende aprox. 380g',
        benefits: ['Anti-inflamatório', 'Imunidade']
      },
      {
        id: 6,
        title: 'Frango com Quinoa e Brócolis',
        category: 'Frango',
        ingredients: ['200g de frango desfiado', '80g de quinoa em grãos', '100g de brócolis'],
        instructions: [
          'Cozinhe a quinoa em água (proporção 2:1) por 15 min.',
          'Cozinhe o brócolis no vapor até ficar macio.',
          'Misture o frango, a quinoa morna e o brócolis picado.',
          'Sirva.'
        ],
        quantityInfo: 'Rende aprox. 420g',
        benefits: ['Fortalecimento Muscular', 'Antioxidante']
      },
      {
        id: 7,
        title: 'Patê de Fígado de Frango (Gatos)',
        category: 'Frango',
        ingredients: ['150g de fígado de frango', '1/4 xícara de água', '30g de abóbora cozida'],
        instructions: [
          'Cozinhe o fígado em água fervente por 10 min.',
          'Bata no liquidificador com a água do cozimento e a abóbora.',
          'A textura deve ser de um creme liso.',
          'Pode ser congelado em formas de gelo.'
        ],
        quantityInfo: 'Rende aprox. 200g',
        benefits: ['Vitaminas A e B', 'Alta Palatabilidade']
      },
      {
        id: 8,
        title: 'Frango com Maçã e Arroz',
        category: 'Frango',
        ingredients: ['180g de peito de frango', '100g de arroz integral', '1/2 maçã (sem sementes)'],
        instructions: [
          'Cozinhe o frango e o arroz normalmente.',
          'Pique a maçã em cubos bem pequenos (mantenha a casca se for orgânica).',
          'Misture a maçã crua ao arroz e frango já cozidos.',
          'Sirva imediatamente.'
        ],
        quantityInfo: 'Rende aprox. 350g',
        benefits: ['Digestão Leve', 'Saúde Intestinal']
      },
      {
        id: 9,
        title: 'Mix de Frango com Moela',
        category: 'Frango',
        ingredients: ['100g de peito de frango', '100g de moela picada', '80g de cenoura', '80g de abobrinha'],
        instructions: [
          'Cozinhe a moela na pressão por 15 min (ela é mais dura).',
          'Cozinhe o frango e os legumes separadamente.',
          'Misture tudo picadinho.',
          'Rico em ferro e proteínas.'
        ],
        quantityInfo: 'Rende aprox. 400g',
        benefits: ['Rico em Ferro', 'Saúde das Articulações']
      },
      {
        id: 10,
        title: 'Frango ao Forno com Legumes',
        category: 'Frango',
        ingredients: ['250g de frango', '1 batata média', '1 cenoura', '1 colher de chá de óleo de coco'],
        instructions: [
          'Pique o frango e os legumes em cubos.',
          'Misture com o óleo de coco em uma assadeira.',
          'Asse a 200°C por 25-30 minutos.',
          'Deixe esfriar antes de oferecer ao pet.'
        ],
        quantityInfo: 'Rende aprox. 450g',
        benefits: ['Pele Saudável', 'Energia']
      },
      {
        id: 11,
        title: 'Carne com Mandioquinha e Beterraba',
        category: 'Carne Bovina',
        ingredients: ['200g de carne moída magra', '120g de mandioquinha', '50g de beterraba'],
        instructions: [
          'Refogue a carne na própria gordura até cozinhar.',
          'Cozinhe a mandioquinha e a beterraba até ficarem bem macias.',
          'Amasse os legumes e misture à carne.',
          'A beterraba pode tingir a urina, é normal.'
        ],
        quantityInfo: 'Rende aprox. 400g',
        benefits: ['Energia Rápida', 'Digestão Leve']
      },
      {
        id: 12,
        title: 'Escondidinho de Carne',
        category: 'Carne Bovina',
        ingredients: ['200g de patinho moído', '150g de batata doce', '2 folhas de couve'],
        instructions: [
          'Cozinhe a batata doce e faça um purê apenas com água.',
          'Refogue a carne com a couve bem picadinha.',
          'Em um pote, coloque a carne e cubra com o purê.',
          'Sirva morno.'
        ],
        quantityInfo: 'Rende aprox. 420g',
        benefits: ['Saúde da Pelagem', 'Rico em Vitaminas']
      },
      {
        id: 13,
        title: 'Carne com Lentilha e Chuchu',
        category: 'Carne Bovina',
        ingredients: ['180g de carne em cubos', '60g de lentilha seca', '100g de chuchu'],
        instructions: [
          'Cozinhe a lentilha (deixada de molho) até ficar macia.',
          'Cozinhe a carne com o chuchu picado.',
          'Misture tudo e sirva.',
          'Excelente fonte de fibras e ferro.'
        ],
        quantityInfo: 'Rende aprox. 380g',
        benefits: ['Rico em Fibras', 'Prevenção de Anemia']
      },
      {
        id: 14,
        title: 'Hambúrguer Caseiro de Carne',
        category: 'Carne Bovina',
        ingredients: ['300g de carne moída', '1 ovo', '1 colher de sopa de farinha de linhaça'],
        instructions: [
          'Misture a carne, o ovo e a linhaça.',
          'Molde pequenos hambúrgueres.',
          'Grelhe em frigideira antiaderente (sem óleo) por 3 min de cada lado.',
          'Pode ser oferecido como petisco ou refeição.'
        ],
        quantityInfo: 'Rende 6-8 unidades',
        benefits: ['Alta Proteína', 'Petisco Saudável']
      },
      {
        id: 15,
        title: 'Carne com Macarrão Integral',
        category: 'Carne Bovina',
        ingredients: ['150g de carne moída', '80g de macarrão integral', '1 tomate maduro (sem sementes)'],
        instructions: [
          'Cozinhe o macarrão até ficar "al dente".',
          'Refogue a carne com o tomate picado até formar um molho natural.',
          'Misture o macarrão à carne.',
          'Sirva em temperatura ambiente.'
        ],
        quantityInfo: 'Rende aprox. 300g',
        benefits: ['Energia', 'Alta Palatabilidade']
      },
      {
        id: 16,
        title: 'Picadinho de Carne com Quiabo',
        category: 'Carne Bovina',
        ingredients: ['200g de carne bovina', '4 quiabos picados', '100g de arroz integral'],
        instructions: [
          'Refogue a carne em cubos pequenos.',
          'Adicione o quiabo e um pouco de água, cozinhe até a baba secar um pouco.',
          'Misture ao arroz integral cozido.',
          'O quiabo é ótimo para as articulações.'
        ],
        quantityInfo: 'Rende aprox. 400g',
        benefits: ['Saúde das Articulações', 'Digestão']
      },
      {
        id: 17,
        title: 'Carne com Inhame e Manjericão',
        category: 'Carne Bovina',
        ingredients: ['200g de carne bovina', '150g de inhame', 'Folhas de manjericão fresco'],
        instructions: [
          'Cozinhe o inhame até ficar bem macio (quase desmanchando).',
          'Grelhe a carne e pique em pedaços pequenos.',
          'Misture o inhame amassado, a carne e o manjericão picado.',
          'O inhame fortalece o sistema imunológico.'
        ],
        quantityInfo: 'Rende aprox. 400g',
        benefits: ['Sistema Imunológico', 'Fortalecimento']
      },
      {
        id: 18,
        title: 'Mix de Carne e Coração Bovino',
        category: 'Carne Bovina',
        ingredients: ['100g de carne moída', '100g de coração bovino', '120g de abóbora'],
        instructions: [
          'Pique o coração em cubos minúsculos.',
          'Cozinhe a carne e o coração juntos.',
          'Adicione a abóbora cozida e amassada.',
          'O coração é essencial para gatos (rico em taurina).'
        ],
        quantityInfo: 'Rende aprox. 350g',
        benefits: ['Rico em Taurina', 'Saúde Cardíaca']
      },
      {
        id: 19,
        title: 'Carne com Grão de Bico',
        category: 'Carne Bovina',
        ingredients: ['180g de carne bovina', '50g de grão de bico seco', '80g de cenoura'],
        instructions: [
          'Deixe o grão de bico de molho por 24h e cozinhe bem na pressão.',
          'Refogue a carne com a cenoura picada.',
          'Misture o grão de bico cozido à carne.',
          'Rico em proteínas vegetais e animais.'
        ],
        quantityInfo: 'Rende aprox. 400g',
        benefits: ['Proteína Completa', 'Saciedade']
      },
      {
        id: 20,
        title: 'Estrogonofe Pet',
        category: 'Carne Bovina',
        ingredients: ['200g de carne em tiras', '2 colheres de sopa de iogurte natural', '1 batata doce pequena'],
        instructions: [
          'Grelhe a carne até ficar bem cozida.',
          'Cozinhe a batata doce em palitos finos no forno (batata palha pet).',
          'Misture o iogurte à carne já morna.',
          'Sirva com os palitos de batata doce por cima.'
        ],
        quantityInfo: 'Rende aprox. 350g',
        benefits: ['Probióticos Naturais', 'Refeição Especial']
      },
      {
        id: 21,
        title: 'Sardinha com Batata Doce',
        category: 'Peixe',
        ingredients: ['2 sardinhas frescas (limpas)', '150g de batata doce'],
        instructions: [
          'Cozinhe as sardinhas no vapor e remova TODAS as espinhas.',
          'Cozinhe a batata doce e amasse.',
          'Misture a sardinha desfiada à batata.',
          'Rico em Ômega 3 e cálcio.'
        ],
        quantityInfo: 'Rende aprox. 300g',
        benefits: ['Rico em Ômega 3', 'Saúde Óssea']
      },
      {
        id: 22,
        title: 'Tilápia com Arroz e Ervilha',
        category: 'Peixe',
        ingredients: ['150g de filé de tilápia', '100g de arroz branco', '50g de ervilhas frescas'],
        instructions: [
          'Grelhe a tilápia com um fio de azeite de oliva.',
          'Cozinhe o arroz com as ervilhas.',
          'Desfie o peixe e misture ao arroz.',
          'Leve e de fácil digestão.'
        ],
        quantityInfo: 'Rende aprox. 320g',
        benefits: ['Fácil Digestão', 'Baixo Teor de Gordura']
      },
      {
        id: 23,
        title: 'Salmão com Quinoa',
        category: 'Peixe',
        ingredients: ['120g de salmão', '60g de quinoa', '1 xícara de espinafre'],
        instructions: [
          'Cozinhe a quinoa em água por 15 min.',
          'Grelhe o salmão e remova a pele e espinhas.',
          'Misture o salmão desfiado, a quinoa e o espinafre picado.',
          'Uma refeição premium e nutritiva.'
        ],
        quantityInfo: 'Rende aprox. 300g',
        benefits: ['Pelagem Brilhante', 'Saúde Cardiovascular']
      },
      {
        id: 24,
        title: 'Bolinhos de Peixe Assados',
        category: 'Peixe',
        ingredients: ['200g de peixe branco moído', '1 ovo', '100g de batata amassada'],
        instructions: [
          'Misture o peixe, o ovo e a batata.',
          'Molde pequenas bolinhas.',
          'Asse a 180°C por 15-20 minutos.',
          'Excelente para cães que preferem texturas firmes.'
        ],
        quantityInfo: 'Rende 8-10 unidades',
        benefits: ['Textura Atrativa', 'Rico em Proteínas']
      },
      {
        id: 25,
        title: 'Peixe com Cenoura e Chuchu',
        category: 'Peixe',
        ingredients: ['180g de filé de pescada', '80g de cenoura', '80g de chuchu'],
        instructions: [
          'Cozinhe o peixe e os legumes no vapor.',
          'Pique tudo em pedaços adequados ao tamanho do pet.',
          'Misture e sirva.',
          'Baixo teor calórico, ideal para pets em dieta.'
        ],
        quantityInfo: 'Rende aprox. 350g',
        benefits: ['Controle de Peso', 'Vitaminas Essenciais']
      },
      {
        id: 26,
        title: 'Caldo de Peixe Nutritivo',
        category: 'Peixe',
        ingredients: ['Carcaça de peixe limpa', '1 litro de água', 'Legumes variados'],
        instructions: [
          'Ferva a carcaça com legumes por 40 min.',
          'Coe muito bem para garantir que não restou nenhuma espinha.',
          'Use o caldo para umedecer a ração ou misturar na AN.',
          'Hidratação saborosa.'
        ],
        quantityInfo: 'Rende aprox. 800ml',
        benefits: ['Hidratação Extra', 'Alta Palatabilidade']
      },
      {
        id: 27,
        title: 'Peixe com Batata Inglesa e Salsa',
        category: 'Peixe',
        ingredients: ['150g de peixe branco', '120g de batata inglesa', 'Bastante salsinha fresca'],
        instructions: [
          'Cozinhe o peixe e a batata.',
          'Amasse a batata e desfie o peixe.',
          'Adicione a salsinha picada por cima.',
          'A salsinha ajuda a reduzir o odor do hálito.'
        ],
        quantityInfo: 'Rende aprox. 300g',
        benefits: ['Hálito Fresco', 'Rico em Vitaminas']
      },
      {
        id: 28,
        title: 'Atum com Abóbora (Gatos)',
        category: 'Peixe',
        ingredients: ['1 lata de atum em água', '100g de purê de abóbora'],
        instructions: [
          'Escorra bem a água do atum.',
          'Misture o atum ao purê de abóbora cozida.',
          'A abóbora ajuda no trânsito intestinal dos gatos.',
          'Sirva pequenas porções.'
        ],
        quantityInfo: 'Rende aprox. 220g',
        benefits: ['Saúde Intestinal (Gatos)', 'Rico em Fibras']
      },
      {
        id: 29,
        title: 'Peixe com Lentilha Rosa',
        category: 'Peixe',
        ingredients: ['150g de filé de tilápia', '50g de lentilha rosa', '80g de abobrinha'],
        instructions: [
          'Cozinhe a lentilha rosa (não precisa de molho longo).',
          'Grelhe o peixe e cozinhe a abobrinha.',
          'Misture tudo picadinho.',
          'Fonte de proteína de alta absorção.'
        ],
        quantityInfo: 'Rende aprox. 320g',
        benefits: ['Alta Absorção Proteica', 'Energia']
      },
      {
        id: 30,
        title: 'Mix de Peixes Brancos',
        category: 'Peixe',
        ingredients: ['80g de tilápia', '80g de pescada', '120g de batata doce'],
        instructions: [
          'Cozinhe os dois tipos de peixe no vapor.',
          'Misture à batata doce cozida e amassada.',
          'Adicione um fio de óleo de peixe (opcional).',
          'Variedade de aminoácidos.'
        ],
        quantityInfo: 'Rende aprox. 300g',
        benefits: ['Mix de Aminoácidos', 'Variedade Nutricional']
      },
      {
        id: 31,
        title: 'Omelete de Espinafre',
        category: 'Ovos e Especiais',
        ingredients: ['2 ovos', '1/2 xícara de espinafre picado', '1 fatia pequena de queijo branco'],
        instructions: [
          'Bata os ovos com o espinafre.',
          'Cozinhe em frigideira antiaderente.',
          'Adicione o queijo picadinho no final.',
          'Corte em pedaços pequenos para o pet.'
        ],
        quantityInfo: 'Rende 1 porção',
        benefits: ['Rico em Ferro', 'Proteína de Alta Qualidade']
      },
      {
        id: 32,
        title: 'Arroz com Ovo e Cenoura',
        category: 'Ovos e Especiais',
        ingredients: ['1 ovo cozido', '100g de arroz integral', '50g de cenoura ralada'],
        instructions: [
          'Cozinhe o arroz e a cenoura.',
          'Pique o ovo cozido em pedaços pequenos.',
          'Misture tudo enquanto o arroz ainda está morno.',
          'Simples, barato e nutritivo.'
        ],
        quantityInfo: 'Rende aprox. 250g',
        benefits: ['Econômico', 'Nutrição Básica']
      },
      {
        id: 33,
        title: 'Fígado Acebolado (Maçã)',
        category: 'Vísceras',
        ingredients: ['100g de fígado bovino', '1/2 maçã fatiada', '100g de batata'],
        instructions: [
          'Grelhe o fígado com as fatias de maçã (sem sementes).',
          'Cozinhe a batata e amasse.',
          'Pique o fígado e a maçã e misture à batata.',
          'A maçã substitui a cebola (que é tóxica).'
        ],
        quantityInfo: 'Rende aprox. 300g',
        benefits: ['Rico em Vitaminas', 'Fonte de Ferro']
      },
      {
        id: 34,
        title: 'Moela com Polenta',
        category: 'Vísceras',
        ingredients: ['150g de moela de frango', '50g de fubá', '1 folha de couve'],
        instructions: [
          'Cozinhe a moela na pressão por 20 min.',
          'Prepare a polenta apenas com água até ficar cremosa.',
          'Pique a moela e a couve e misture à polenta.',
          'Refeição energética.'
        ],
        quantityInfo: 'Rende aprox. 350g',
        benefits: ['Alta Energia', 'Alta Palatabilidade']
      },
      {
        id: 35,
        title: 'Coração de Frango com Arroz',
        category: 'Vísceras',
        ingredients: ['150g de corações de frango', '100g de arroz integral', '50g de vagem'],
        instructions: [
          'Limpe o excesso de gordura dos corações.',
          'Cozinhe os corações e a vagem.',
          'Misture ao arroz integral cozido.',
          'Rico em taurina e vitaminas do complexo B.'
        ],
        quantityInfo: 'Rende aprox. 320g',
        benefits: ['Saúde do Coração', 'Complexo B']
      },
      {
        id: 36,
        title: 'Mix de Vísceras Nutritivo',
        category: 'Vísceras',
        ingredients: ['50g de fígado', '50g de rim', '150g de carne moída', '100g de abóbora'],
        instructions: [
          'Cozinhe todas as carnes e vísceras juntas.',
          'Adicione a abóbora cozida e amassada.',
          'As vísceras não devem ultrapassar 10% da dieta total.',
          'Bomba de vitaminas.'
        ],
        quantityInfo: 'Rende aprox. 380g',
        benefits: ['Bomba de Vitaminas', 'Nutrição Completa']
      },
      {
        id: 37,
        title: 'Ovo Mexido com Cúrcuma',
        category: 'Ovos e Especiais',
        ingredients: ['2 ovos', 'Pitada de cúrcuma', '1 colher de chá de óleo de coco'],
        instructions: [
          'Aqueça o óleo de coco na frigideira.',
          'Adicione os ovos batidos com a cúrcuma.',
          'Mexa até cozinhar bem.',
          'Poderoso anti-inflamatório natural.'
        ],
        quantityInfo: 'Rende 1 porção',
        benefits: ['Anti-inflamatório', 'Saúde Imunológica']
      },
      {
        id: 38,
        title: 'Língua Bovina com Batata',
        category: 'Vísceras',
        ingredients: ['150g de língua bovina', '120g de batata inglesa', '50g de cenoura'],
        instructions: [
          'Cozinhe a língua na pressão por 40 min até amaciar.',
          'Remova a pele áspera da língua.',
          'Pique a carne e misture aos legumes cozidos.',
          'Carne muito palatável e rica em gorduras boas.'
        ],
        quantityInfo: 'Rende aprox. 350g',
        benefits: ['Gorduras Saudáveis', 'Muito Palatável']
      },
      {
        id: 39,
        title: 'Panqueca de Banana e Ovo',
        category: 'Ovos e Especiais',
        ingredients: ['1 banana madura', '1 ovo'],
        instructions: [
          'Amasse a banana e misture bem com o ovo.',
          'Faça pequenas panquecas em frigideira antiaderente.',
          'Sirva como um lanche especial.',
          'Rico em potássio e energia.'
        ],
        quantityInfo: 'Rende 3-4 panquecas',
        benefits: ['Rico em Potássio', 'Energia Natural']
      },
      {
        id: 40,
        title: 'Arroz de Forno com Miúdos',
        category: 'Vísceras',
        ingredients: ['150g de miúdos de frango', '100g de arroz', '50g de ervilha'],
        instructions: [
          'Cozinhe os miúdos e o arroz.',
          'Misture tudo em um refratário com as ervilhas.',
          'Leve ao forno por 10 min apenas para aquecer.',
          'Muito atrativo pelo cheiro forte dos miúdos.'
        ],
        quantityInfo: 'Rende aprox. 320g',
        benefits: ['Atrativo Natural', 'Nutrição Intensa']
      },
      {
        id: 41,
        title: 'Biscoito de Fígado',
        category: 'Petiscos',
        ingredients: ['200g de fígado bovino', '1 xícara de farinha de aveia'],
        instructions: [
          'Bata o fígado no liquidificador até virar líquido.',
          'Misture com a farinha de aveia até formar uma massa.',
          'Abra a massa, corte em quadradinhos e asse a 180°C por 20 min.',
          'Guarde em pote fechado na geladeira.'
        ],
        quantityInfo: 'Rende aprox. 200g de biscoitos',
        benefits: ['Ideal para Treinamento', 'Rico em Vitaminas']
      },
      {
        id: 42,
        title: 'Gelatina de Caldo de Ossos',
        category: 'Petiscos',
        ingredients: ['Ossos bovinos com tutano', '2 litros de água', '1 colher de sopa de vinagre de maçã'],
        instructions: [
          'Cozinhe os ossos na água com vinagre por no mínimo 12h (fogo baixo).',
          'Coe muito bem e descarte os ossos.',
          'Deixe o líquido na geladeira até virar uma gelatina firme.',
          'Ofereça cubos gelados.'
        ],
        quantityInfo: 'Rende aprox. 1 litro',
        benefits: ['Saúde das Articulações', 'Colágeno Natural']
      },
      {
        id: 43,
        title: 'Sorvete de Iogurte e Morango',
        category: 'Petiscos',
        ingredients: ['200ml de iogurte natural', '5 morangos picados'],
        instructions: [
          'Misture o iogurte com os morangos (sem as folhas).',
          'Coloque em formas de gelo.',
          'Congele por 4 horas.',
          'Perfeito para dias de calor intenso.'
        ],
        quantityInfo: 'Rende 12-15 cubos',
        benefits: ['Refrescante', 'Probióticos Naturais']
      },
      {
        id: 44,
        title: 'Chips de Abobrinha',
        category: 'Petiscos',
        ingredients: ['1 abobrinha grande'],
        instructions: [
          'Corte a abobrinha em fatias muito finas.',
          'Coloque em uma assadeira sem sobrepor.',
          'Asse a 150°C por 30-40 min até ficarem crocantes.',
          'Petisco de baixíssima caloria.'
        ],
        quantityInfo: 'Rende 1 porção',
        benefits: ['Baixa Caloria', 'Rico em Fibras']
      },
      {
        id: 45,
        title: 'Muffins de Maçã e Canela',
        category: 'Petiscos',
        ingredients: ['1 maçã ralada', '1 ovo', '1/2 xícara de farinha de arroz', 'Pitada de canela'],
        instructions: [
          'Misture todos os ingredientes.',
          'Coloque em forminhas de mini muffin.',
          'Asse a 180°C por 15-20 minutos.',
          'A canela é um excelente antioxidante para pets.'
        ],
        quantityInfo: 'Rende 6-8 mini muffins',
        benefits: ['Antioxidante', 'Saúde Digestiva']
      },
      {
        id: 46,
        title: 'Patê de Requeijão Pet',
        category: 'Petiscos',
        ingredients: ['100g de ricota fresca', '2 colheres de sopa de água', 'Salsinha picada'],
        instructions: [
          'Bata a ricota com a água no processador até ficar cremoso.',
          'Misture a salsinha.',
          'Use para rechear brinquedos ou esconder remédios.',
          'Baixo teor de sódio.'
        ],
        quantityInfo: 'Rende aprox. 120g',
        benefits: ['Esconder Remédios', 'Alta Palatabilidade']
      },
      {
        id: 47,
        title: 'Pipoca de Sagú',
        category: 'Petiscos',
        ingredients: ['1/2 xícara de sagú seco'],
        instructions: [
          'Coloque o sagú em uma panela quente (sem óleo).',
          'Tampe e espere estourar como pipoca.',
          'Não use sal ou temperos.',
          'Petisco crocante e divertido.'
        ],
        quantityInfo: 'Rende 1 tigela pequena',
        benefits: ['Diversão', 'Sem Glúten']
      },
      {
        id: 48,
        title: 'Cubos de Manga Congelados',
        category: 'Petiscos',
        ingredients: ['1 manga madura'],
        instructions: [
          'Descasque e corte a manga em cubos pequenos.',
          'Coloque em uma bandeja e leve ao freezer.',
          'Depois de congelados, guarde em um saco plástico.',
          'Rico em vitaminas A e C.'
        ],
        quantityInfo: 'Rende 1 porção',
        benefits: ['Vitaminas A e C', 'Refrescante']
      },
      {
        id: 49,
        title: 'Biscoito de Abóbora e Linhaça',
        category: 'Petiscos',
        ingredients: ['1 xícara de purê de abóbora', '2 colheres de sopa de farinha de linhaça', '1 xícara de aveia'],
        instructions: [
          'Misture os ingredientes até formar uma massa modelável.',
          'Abra a massa e corte com cortadores de biscoito.',
          'Asse a 180°C por 25 minutos.',
          'Ajuda na saúde intestinal.'
        ],
        quantityInfo: 'Rende aprox. 15-20 biscoitos',
        benefits: ['Saúde Intestinal', 'Rico em Fibras']
      },
      {
        id: 50,
        title: 'Cerveja de Carne Pet',
        category: 'Petiscos',
        ingredients: ['500ml de água do cozimento da carne (sem sal)', 'Pedaços minúsculos de carne'],
        instructions: [
          'Use a água que sobrou do cozimento da carne bovina.',
          'Certifique-se de que não há gordura em excesso.',
          'Sirva gelado em uma tigela.',
          'Incentiva a hidratação de forma saborosa.'
        ],
        quantityInfo: 'Rende 500ml',
        benefits: ['Hidratação Divertida', 'Sabor Irresistível']
      }
    ]
  },
  'guia-suplementacao': {
    id: 'guia-suplementacao',
    title: 'Guia de Suplementação',
    description: 'Como, qual e quanto de suplemento para cada pet.',
    icon: <Info />,
    content: `
# Guia de Suplementação Essencial para Iniciantes

Se você está começando agora na Alimentação Natural (AN), a suplementação pode parecer a parte mais difícil, mas é ela que garante que seu pet não tenha deficiências nutricionais ao longo dos anos.

## 1. Por que suplementar?
Diferente da ração, que já vem com vitaminas sintéticas, a comida caseira (mesmo a mais variada) pode ter baixos níveis de alguns minerais e vitaminas após o cozimento. O suplemento é o "seguro saúde" do seu pet.

---

## 2. Suplementos para CÃES

### A. Cálcio (O mais importante!)
Se a dieta não tem ossos (AN Cozida), você **DEVE** adicionar cálcio para equilibrar o fósforo da carne.
- **O que usar:** Carbonato de Cálcio (pode ser casca de ovo moída em casa) ou suplementos comerciais.
- **Quantidade média:** 1g de carbonato de cálcio para cada 100g de carne oferecida.

### B. Ômega 3 (Óleo de Peixe)
Essencial para pele, pelos e cérebro.
- **Dosagem:** 
  - Cães pequenos (até 10kg): 500mg por dia.
  - Cães médios (10-25kg): 1000mg por dia.
  - Cães grandes (acima de 25kg): 2000mg por dia.

### C. Mix de Vitaminas e Minerais
Produtos prontos como "Food Dog", "Nutroplus" ou "Complement".
- **Como usar:** Siga a tabela do fabricante no rótulo, que geralmente é baseada no peso do animal.

---

## 3. Suplementação para GATOS

Gatos são carnívoros estritos e possuem necessidades únicas.

### A. Taurina
Essencial para o coração e visão. Embora a carne tenha taurina, o cozimento reduz os níveis.
- **Dica:** Sempre use o caldo do cozimento da carne, pois a taurina "foge" para a água.

### B. Cálcio
Assim como os cães, gatos precisam de cálcio para equilibrar a carne.
- **Quantidade:** Geralmente 500mg a 800mg de cálcio por dia para um gato adulto.

---

## 4. Tabela Prática de Quantidades (Referência)

| Porte do Pet | Peso | Quantidade de Suplemento Mix (Média) |
| :--- | :--- | :--- |
| **Mini** | Até 5kg | 1 a 2 gramas/dia |
| **Pequeno** | 5kg a 10kg | 3 a 5 gramas/dia |
| **Médio** | 10kg a 25kg | 6 a 10 gramas/dia |
| **Grande** | Acima de 25kg | 12+ gramas/dia |

*Nota: Sempre verifique a colher dosadora que vem dentro do produto comercial.*

---

## 5. Dicas de Ouro para Iniciantes

1. **Nunca cozinhe o suplemento:** O calor destrói as vitaminas. Adicione na comida já morna ou fria, na hora de servir.
2. **Introdução Gradual:** Comece com 1/4 da dose na primeira semana para o organismo do pet se acostumar.
3. **Conserve bem:** Mantenha os potes de suplemento longe da luz e do calor.
4. **Exames Anuais:** Mesmo suplementando, faça exames de sangue anuais para garantir que os níveis de cálcio e fósforo estão perfeitos.

**Atenção:** Este guia é informativo. Para pets com doenças renais, cardíacas ou filhotes, a suplementação DEVE ser calculada individualmente por um veterinário nutrólogo.
    `,
  },
  'comunidade': {
    id: 'comunidade',
    title: 'Comunidade Exclusiva',
    description: 'Troque experiências e tire dúvidas.',
    icon: <Users />,
    content: `
# Bem-vindo à nossa Comunidade!

Você agora faz parte de um grupo seleto de tutores que priorizam a saúde real dos seus pets. Este é o espaço para trocar experiências, tirar dúvidas e compartilhar a evolução do seu melhor amigo.

## Entre no nosso Grupo VIP:

[👉 CLIQUE AQUI PARA ENTRAR NO GRUPO DE WHATSAPP](https://chat.whatsapp.com/LW6MTQAjFexDdwiXRjXs8d)

---

**Regras da Comunidade:**
1. **Respeito Mútuo:** Tratamos todos com educação e empatia.
2. **Compartilhamento:** Sinta-se à vontade para postar fotos das refeições do seu pet!
3. **Foco em Saúde:** Dúvidas sobre receitas e transição são sempre bem-vindas.
4. **Sem Spam:** Evite propagandas ou links externos não relacionados.
    `,
  },
  'transicao': {
    id: 'transicao',
    title: 'Transição Alimentar',
    description: 'Vídeo aula completa ensinando o passo a passo seguro para mudar a dieta do seu pet.',
    icon: <PlayCircle />,
    videoUrl: 'https://drive.google.com/file/d/1xOwF7fun3mBidECryZFA2ZMkcv5vkHrS/preview',
    content: `
# Como fazer a Transição para Alimentação Natural

Mudar a dieta do seu pet é um processo que exige paciência e observação. Não devemos trocar a ração pela comida caseira de um dia para o outro, pois isso pode causar desconfortos gastrointestinais.

## O Método dos 7 Dias

A forma mais segura de fazer a transição é misturando gradualmente a nova alimentação à antiga:

*   **Dias 1 e 2:** 75% Ração + 25% Alimentação Natural
*   **Dias 3 e 4:** 50% Ração + 50% Alimentação Natural
*   **Dias 5 e 6:** 25% Ração + 75% Alimentação Natural
*   **Dia 7 em diante:** 100% Alimentação Natural

## Dicas Importantes:

1.  **Observe as Fezes:** Elas são o melhor termômetro. Se ficarem muito moles, mantenha a proporção atual por mais alguns dias antes de avançar.
2.  **Temperatura:** Sirva a comida em temperatura ambiente ou levemente morna. Nunca gelada.
3.  **Consistência:** No início, você pode amassar bem os legumes para facilitar a aceitação.
4.  **Não force:** Se o pet recusar, tente oferecer como um petisco primeiro para ele conhecer o novo sabor.

---

> **Assista à vídeo aula acima** para entender todos os detalhes técnicos e as reações comuns durante esse processo.
    `,
  },
  'petiscos': {
    id: 'petiscos',
    title: '10 Petiscos Naturais',
    description: 'Receitas saudáveis, fáceis e nutritivas para recompensar seu melhor amigo.',
    icon: <Cookie />,
    isBonus: true,
    content: `
# 10 Petiscos Saudáveis e Naturais

Recompensar seu pet não precisa significar oferecer alimentos ultraprocessados. Com ingredientes simples que você já tem em casa, é possível criar petiscos deliciosos, nutritivos e livres de conservantes.

Abaixo, você encontrará 10 receitas exclusivas com passo a passo detalhado. Lembre-se: petiscos devem representar no máximo 10% da ingestão calórica diária do seu pet!
    `,
    recipes: [
      {
        id: 101,
        title: 'Chips de Batata Doce Crocantes',
        category: 'Vegetais',
        ingredients: ['1 batata doce média', '1 colher de chá de óleo de coco (opcional)'],
        instructions: [
          'Lave bem a batata doce e corte em fatias bem finas (use um fatiador se tiver).',
          'Pincele levemente com óleo de coco.',
          'Disponha em uma assadeira sem sobrepor.',
          'Asse em forno baixo (160°C) por 20-30 minutos, virando na metade do tempo.',
          'Deixe esfriar completamente para ficarem crocantes.'
        ],
        quantityInfo: 'Rende aprox. 50g',
        benefits: ['Rico em Fibras', 'Energia Duradoura']
      },
      {
        id: 102,
        title: 'Sorvete de Melancia Refrescante',
        category: 'Frutas',
        ingredients: ['2 xícaras de melancia picada (sem sementes)', '1/2 xícara de iogurte natural desnatado'],
        instructions: [
          'Bata a melancia e o iogurte no liquidificador até ficar homogêneo.',
          'Coloque a mistura em formas de gelo ou moldes de silicone.',
          'Leve ao freezer por pelo menos 4 horas.',
          'Ofereça nos dias mais quentes para hidratar seu pet.'
        ],
        quantityInfo: 'Rende 12-15 cubos',
        benefits: ['Hidratação', 'Baixa Caloria']
      },
      {
        id: 103,
        title: 'Biscoito de Aveia e Banana',
        category: 'Assados',
        ingredients: ['1 banana madura', '1 xícara de farinha de aveia', '1 ovo'],
        instructions: [
          'Amasse bem a banana em uma tigela.',
          'Adicione o ovo e misture bem.',
          'Vá adicionando a farinha de aveia aos poucos até formar uma massa que não grude nas mãos.',
          'Abra a massa e corte com cortadores divertidos.',
          'Asse a 180°C por 15-20 minutos.'
        ],
        quantityInfo: 'Rende 15-20 biscoitos',
        benefits: ['Saúde Digestiva', 'Rico em Potássio']
      },
      {
        id: 104,
        title: 'Cubos de Iogurte e Morango',
        category: 'Laticínios',
        ingredients: ['200ml de iogurte natural (sem açúcar)', '5 morangos frescos picados'],
        instructions: [
          'Pique os morangos em pedaços bem pequenos.',
          'Misture os morangos ao iogurte.',
          'Distribua em forminhas de gelo.',
          'Congele até ficar firme.',
          'Ótimo para a saúde intestinal devido aos probióticos.'
        ],
        quantityInfo: 'Rende 12 cubos',
        benefits: ['Probióticos Naturais', 'Antioxidante']
      },
      {
        id: 105,
        title: 'Cenouras Baby Assadas com Mel',
        category: 'Vegetais',
        ingredients: ['1 pacote de cenouras baby', '1 colher de chá de mel (opcional)', 'Pitada de canela'],
        instructions: [
          'Misture as cenouras com o mel e a canela.',
          'Disponha em uma assadeira.',
          'Asse a 180°C por 15 minutos (elas devem continuar levemente firmes).',
          'A cenoura ajuda na limpeza mecânica dos dentes.'
        ],
        quantityInfo: 'Rende 1 porção',
        benefits: ['Saúde Ocular', 'Limpeza dos Dentes']
      },
      {
        id: 106,
        title: 'Desidratado de Peito de Frango',
        category: 'Proteína',
        ingredients: ['200g de peito de frango limpo'],
        instructions: [
          'Corte o frango em tiras muito finas e longas.',
          'Coloque em uma assadeira com papel manteiga.',
          'Asse em forno baixíssimo (140°C) por cerca de 1 hora ou até secar bem.',
          'O resultado é um "jerky" natural que os cães amam.',
          'Conserve na geladeira por até 5 dias.'
        ],
        quantityInfo: 'Rende aprox. 80g',
        benefits: ['Alta Proteína', 'Zero Carboidrato']
      },
      {
        id: 107,
        title: 'Muffins de Maçã e Canela',
        category: 'Assados',
        ingredients: ['1 maçã ralada (sem sementes)', '1 ovo', '1/2 xícara de farinha de arroz'],
        instructions: [
          'Misture a maçã ralada com o ovo.',
          'Adicione a farinha de arroz e misture até ficar homogêneo.',
          'Coloque em forminhas de mini muffin untadas com óleo de coco.',
          'Asse a 180°C por 15-20 minutos.',
          'Espere esfriar antes de servir.'
        ],
        quantityInfo: 'Rende 6 mini muffins',
        benefits: ['Vitamina C', 'Antioxidante']
      },
      {
        id: 108,
        title: 'Patê de Fígado Caseiro',
        category: 'Vísceras',
        ingredients: ['150g de fígado de frango', '1/4 xícara de água', 'Salsinha picada'],
        instructions: [
          'Cozinhe o fígado em água fervente por 10 minutos.',
          'Bata no liquidificador com a água do cozimento e a salsinha.',
          'A consistência deve ser de um creme.',
          'Use para rechear brinquedos de borracha (tipo Kong).',
          'Pode ser congelado para durar mais tempo.'
        ],
        quantityInfo: 'Rende aprox. 180g',
        benefits: ['Rico em Ferro', 'Alta Palatabilidade']
      },
      {
        id: 109,
        title: 'Pipoca de Sagú (Sem Sal)',
        category: 'Especiais',
        ingredients: ['1/2 xícara de sagú seco'],
        instructions: [
          'Aqueça uma panela de fundo grosso.',
          'Coloque o sagú seco (sem óleo, sem nada).',
          'Tampe e balance a panela até que as bolinhas estourem.',
          'Elas ficam como mini pipocas brancas.',
          'Petisco leve e crocante para treinamento.'
        ],
        quantityInfo: 'Rende 1 tigela pequena',
        benefits: ['Baixa Caloria', 'Sem Glúten']
      },
      {
        id: 110,
        title: 'Gelatina de Caldo de Ossos',
        category: 'Suplemento',
        ingredients: ['Ossos bovinos (joelho ou pé)', '1 litro de água', '1 colher de sopa de vinagre de maçã'],
        instructions: [
          'Cozinhe os ossos na água com vinagre por 12-24h em fogo baixíssimo.',
          'Coe o líquido e descarte os ossos cozidos.',
          'Leve o líquido à geladeira até que vire uma gelatina firme.',
          'Corte em cubos e ofereça como petisco.',
          'Poderoso para as articulações.'
        ],
        quantityInfo: 'Rende aprox. 800ml',
        benefits: ['Colágeno Natural', 'Saúde Articular']
      }
    ]
  },
  'checklist': {
    id: 'checklist',
    title: 'Checklist de Início',
    description: 'Tudo o que você precisa para começar a alimentação natural com segurança e organização.',
    icon: <CheckSquare />,
    isBonus: true,
    content: `
# Checklist Definitivo para Começar Hoje

Mudar a alimentação do seu pet é um ato de amor, mas requer organização para garantir que ele receba todos os nutrientes necessários sem estresse para você.

Este checklist foi desenhado para ser seu guia prático. Não tente fazer tudo de uma vez: siga as categorias e marque seu progresso. Quando todos os itens estiverem concluídos, você estará pronto para a primeira refeição natural!
    `,
    checklistItems: [
      {
        id: 1,
        category: 'Equipamentos',
        task: 'Balança de Cozinha Digital',
        description: 'Essencial para pesar as porções exatas de cada ingrediente. A precisão é a chave para uma dieta equilibrada.'
      },
      {
        id: 2,
        category: 'Equipamentos',
        task: 'Potes de Vidro ou BPA Free',
        description: 'Para armazenar as porções na geladeira ou congelador. Vidro é preferível por não reter cheiros nem resíduos.'
      },
      {
        id: 3,
        category: 'Equipamentos',
        task: 'Mixer ou Processador',
        description: 'Útil para triturar vegetais ou fazer patês, facilitando a digestão e a aceitação inicial.'
      },
      {
        id: 4,
        category: 'Saúde',
        task: 'Check-up Veterinário',
        description: 'Garanta que seu pet não tenha restrições de saúde antes de mudar a dieta. Exames de sangue básicos são recomendados.'
      },
      {
        id: 5,
        category: 'Saúde',
        task: 'Pesagem do Pet',
        description: 'Saiba o peso exato do seu pet para calcular a quantidade diária de comida (geralmente entre 2% a 5% do peso vivo).'
      },
      {
        id: 6,
        category: 'Planejamento',
        task: 'Escolha das 3 Primeiras Receitas',
        description: 'Comece com proteínas simples (frango ou carne magra) e vegetais de fácil digestão (cenoura, chuchu).'
      },
      {
        id: 7,
        category: 'Planejamento',
        task: 'Espaço no Congelador',
        description: 'Limpe uma gaveta ou prateleira. Cozinhar em lotes para 15 ou 30 dias economiza muito tempo.'
      },
      {
        id: 8,
        category: 'Suplementação',
        task: 'Compra do Suplemento Base',
        description: 'Tenha em mãos o suplemento vitamínico e mineral indicado para AN (Alimentação Natural).'
      },
      {
        id: 9,
        category: 'Transição',
        task: 'Cronograma de 7 Dias',
        description: 'Imprima ou anote o plano de transição gradual para não esquecer de aumentar as proporções diariamente.'
      },
      {
        id: 10,
        category: 'Organização',
        task: 'Etiquetas de Identificação',
        description: 'Para marcar nos potes a data de preparo e o tipo de receita. Segurança alimentar em primeiro lugar!'
      }
    ]
  },
  'mindfulness': {
    id: 'mindfulness',
    title: 'Guia de Mindfulness',
    description: 'Descubra como criar uma conexão profunda e presente com seu pet através de técnicas de atenção plena.',
    icon: <Heart />,
    isBonus: true,
    content: `
# Mindfulness e Conexão com seu Pet

Mindfulness, ou atenção plena, é a prática de estar presente no momento atual, sem julgamentos. Quando aplicamos isso à nossa relação com nossos pets, transformamos momentos rotineiros em experiências de profunda conexão e cura.

Nossos pets já vivem naturalmente no presente. Eles não estão preocupados com o que aconteceu ontem ou com o que farão amanhã. Ao praticarmos mindfulness com eles, estamos aprendendo com os melhores mestres.

## Por que praticar Mindfulness com seu Pet?

A ciência mostra que a interação consciente com animais reduz os níveis de **cortisol** (o hormônio do estresse) e aumenta a produção de **ocitocina** (o hormônio do amor e do vínculo) tanto em humanos quanto em animais. Além disso:

- **Redução da Ansiedade:** Ajuda pets reativos ou ansiosos a se sentirem mais seguros.
- **Melhora na Comunicação:** Você passa a notar sinais sutis de linguagem corporal que antes ignorava.
- **Longevidade:** Um ambiente calmo e uma mente tranquila contribuem para uma vida mais longa e saudável.

## Sinais de que seu Pet está Relaxado

Durante as práticas, observe se o seu pet apresenta estes sinais:
1. **Suspiros profundos:** Indica liberação de tensão.
2. **Olhos semicerrados ou piscadas lentas:** Sinal de confiança e calma.
3. **Corpo "mole":** Músculos relaxados, sem rigidez.
4. **Lamber o focinho ou bocejar:** Frequentemente são sinais de que ele está processando o relaxamento.

## Mitos vs Verdades

- **Mito:** "Meu pet precisa ficar estátua para a prática funcionar."
- **Verdade:** Mindfulness é sobre aceitar o momento como ele é. Se ele se mexer, apenas observe o movimento.
- **Mito:** "Preciso de 1 hora por dia."
- **Verdade:** 2 a 5 minutos de presença total valem mais do que 1 hora de distração.
- **Mito:** "Isso é só para cães calmos."
- **Verdade:** Pets agitados são os que mais se beneficiam, pois aprendem a co-regular sua energia com a sua.

## Preparando o Santuário

Para que as práticas sejam mais eficazes, você pode preparar o ambiente:
1. **Iluminação:** Prefira luzes indiretas ou amareladas.
2. **Som:** Música clássica em volume baixo ou sons da natureza podem ajudar (existem playlists específicas para acalmar cães e gatos).
3. **Distrações:** Desligue a TV e coloque o celular no modo "Não Perturbe".
4. **Aroma:** O uso de difusores com lavanda (verifique sempre a segurança para a espécie do seu pet) pode criar uma âncora olfativa de relaxamento.

## Desafio de 7 Dias: Pequenos Passos

Se você não sabe por onde começar, tente este cronograma:
- **Dia 1:** 2 minutos de observação silenciosa enquanto ele dorme.
- **Dia 2:** Pratique a "Refeição Sagrada" no jantar.
- **Dia 3:** 5 minutos de carinho consciente (Escaneamento do Toque).
- **Dia 4:** Caminhada de 10 minutos sem celular, focando nos sentidos do pet.
- **Dia 5:** Tente a "Respiração em Sincronia" por 3 minutos.
- **Dia 6:** Pratique o "Olhar de Conexão".
- **Dia 7:** Escolha a sua prática favorita e repita com intenção dobrada.

## Diário de Conexão: Reflita

Após cada prática, tente responder mentalmente ou anotar:
- Como meu pet reagiu hoje?
- Qual foi a sensação física mais marcante que senti ao tocá-lo?
- Minha mente estava muito agitada? Consegui voltar ao presente?
- O que aprendi sobre a personalidade dele hoje que eu não sabia?
    `,
    exercises: [
      {
        id: 1,
        title: 'Refeição Sagrada',
        duration: '5-10 minutos',
        steps: [
          'Prepare a comida do seu pet em silêncio, sentindo o aroma dos ingredientes.',
          'Antes de colocar o pote no chão, peça para ele sentar e respire fundo três vezes.',
          'Observe a expectativa e a alegria dele sem pressa.',
          'Enquanto ele come, não mexa no celular. Apenas observe o som da mastigação e o movimento do corpo dele.',
          'Sinta gratidão por poder oferecer saúde e nutrição para quem você ama.'
        ],
        tips: [
          'Tente fazer isso pelo menos uma vez por dia.',
          'Se sua mente divagar, gentilmente traga o foco de volta para o som da mastigação.'
        ]
      },
      {
        id: 2,
        title: 'Escaneamento do Toque',
        duration: '10-15 minutos',
        steps: [
          'Encontre um lugar calmo onde vocês possam sentar ou deitar juntos.',
          'Comece acariciando o topo da cabeça dele com movimentos lentos.',
          'Sinta a textura do pelo, a temperatura da pele e a estrutura óssea por baixo.',
          'Vá descendo para as orelhas, pescoço e costas, sempre mantendo o foco total no toque.',
          'Observe como a respiração dele muda conforme ele relaxa.'
        ],
        tips: [
          'Feche os olhos por alguns momentos para aguçar o sentido do tato.',
          'Se ele se afastar, respeite o espaço dele. Mindfulness também é sobre consentimento.'
        ]
      },
      {
        id: 3,
        title: 'Respiração em Sincronia',
        duration: '5 minutos',
        steps: [
          'Sente-se próximo ao seu pet enquanto ele está relaxado ou dormindo.',
          'Coloque uma mão suavemente sobre o tórax ou abdômen dele.',
          'Feche os olhos e sinta o ritmo da respiração dele.',
          'Tente sincronizar sua própria respiração com a dele: inspire quando ele inspirar, expire quando ele expirar.',
          'Sinta a energia de calma se espalhando entre vocês dois.'
        ],
        tips: [
          'Este exercício é excelente para reduzir a ansiedade de ambos.',
          'Não force a sincronia; se for difícil, apenas observe o ritmo dele sem tentar mudar nada.'
        ]
      },
      {
        id: 4,
        title: 'Caminhada Consciente',
        duration: '15-20 minutos',
        steps: [
          'Saia para caminhar sem fones de ouvido e sem pressa de chegar a lugar nenhum.',
          'Deixe seu pet guiar o ritmo e parar para cheirar o que ele quiser.',
          'Observe as orelhas dele se movendo com os sons e a cauda expressando curiosidade.',
          'Sinta o contato dos seus pés com o chão e a guia em sua mão.',
          'Agradeça mentalmente por cada passo que vocês dão juntos.'
        ],
        tips: [
          'O objetivo não é o exercício físico, mas a exploração sensorial conjunta.',
          'Tente notar três coisas novas no caminho que você nunca tinha percebido antes.'
        ]
      },
      {
        id: 5,
        title: 'Olhar de Conexão',
        duration: '2-3 minutos',
        steps: [
          'Sente-se em frente ao seu pet em um momento de calma.',
          'Olhe suavemente nos olhos dele, sem encarar de forma agressiva (mantenha o olhar relaxado).',
          'Pisque lentamente, como os gatos fazem, para sinalizar segurança.',
          'Apenas sustente o olhar por alguns segundos, sentindo a alma dele através dos olhos.',
          'Sorria levemente e sinta o amor fluindo entre vocês.'
        ],
        tips: [
          'Se o seu pet desviar o olhar, tudo bem. Não force.',
          'Este exercício libera grandes quantidades de ocitocina em ambos.'
        ]
      },
      {
        id: 6,
        title: 'Escuta Atenta',
        duration: '5 minutos',
        steps: [
          'Fique em silêncio absoluto ao lado do seu pet.',
          'Feche os olhos e tente identificar todos os sons que ele produz.',
          'O som da respiração, o barulho das unhas no chão, o som dele se lambendo ou suspirando.',
          'Perceba como cada som conta uma história sobre o estado atual dele.',
          'Apenas ouça, sem tentar interpretar ou mudar nada.'
        ],
        tips: [
          'Excelente para fazer à noite, antes de dormir.',
          'Ajuda a desenvolver uma sensibilidade auditiva para detectar desconfortos futuros.'
        ]
      },
      {
        id: 7,
        title: 'Escovação Consciente',
        duration: '10 minutos',
        steps: [
          'Pegue a escova e mostre ao seu pet, permitindo que ele a cheire.',
          'Comece a escovação com movimentos rítmicos e lentos.',
          'Foque na sensação da escova passando pelo pelo e na reação dele a cada passada.',
          'Se ele relaxar, continue; se ele ficar tenso, pare e apenas coloque a mão sobre ele.',
          'Transforme a higiene em um momento de carinho e presença absoluta.'
        ],
        tips: [
          'A escovação é uma ótima oportunidade para verificar a saúde da pele.',
          'Mantenha o ambiente calmo e sem distrações.'
        ]
      }
    ]
  },
  'clube-vip': {
    id: 'clube-vip',
    title: 'Clube VIP de Nutrição Pet',
    description: 'Newsletter semanal e biblioteca de cardápios sazonais.',
    icon: <Users />,
    content: `
# Bem-vindo ao Clube VIP de Nutrição Pet

O Clube VIP é o seu passe de acesso contínuo ao que há de mais moderno e eficiente na nutrição de cães e gatos. Aqui, você não recebe apenas informações, mas sim um acompanhamento constante para a saúde do seu pet.

## ✅ Newsletter Premium (1x por semana)
Toda semana, você receberá um e-mail exclusivo preparado por nossa equipe de especialistas, contendo:
- **Novidades sobre nutrição pet:** O que a ciência está descobrindo de novo.
- **Dicas práticas e receitas inéditas:** Ideias rápidas para variar o cardápio.
- **Estudos e tendências:** Fique por dentro do que há de melhor na alimentação natural.

---

## ✅ Biblioteca de Cardápios Sazonais
Acesso ilimitado a um acervo de cardápios temáticos que mudam conforme a necessidade do seu pet e a época do ano:

### ❄️ Cardápio de Inverno
*Alimentos que aquecem e fortalecem.*
Focado em ingredientes que auxiliam na manutenção da temperatura corporal e reforçam a barreira lipídica da pele durante os meses frios.

### ☀️ Cardápio de Verão & Hidratação
*Refresco e vitalidade sob o sol.*
Receitas com alto teor de umidade, frutas refrescantes permitidas e técnicas de congelamento para manter seu pet hidratado e ativo nos dias mais quentes.

### 🎄 Especial de Natal: Ceia Pet Safe
*Celebre com segurança e sabor.*
Um guia completo para preparar uma ceia natalina inesquecível para seu pet, com ingredientes tradicionais adaptados (como o "Peru Pet" e o "Panetone de Carne").

### 🐰 Páscoa: Ovos de "Chocolate" Pet
*Diversão sem teobromina.*
Aprenda a fazer ovos de páscoa saudáveis usando alfarroba e outros ingredientes seguros, garantindo que seu pet participe da tradição sem riscos à saúde.

### 🎂 Aniversário & Festas
*Bolos e petiscos comemorativos.*
Receitas de bolos confeitados com purês naturais e decorações comestíveis para celebrar a vida do seu melhor amigo.

---

> **Atenção:** Os cardápios são guias de referência. Sempre consulte um profissional para ajustes específicos baseados na raça, idade e condições de saúde do seu pet.
    `,
  },
  'calculo-detalhado': {
    id: 'calculo-detalhado',
    title: 'Cálculo Nutricional Detalhado',
    description: 'Aprenda a calcular a quantidade exata de proteína, vísceras e vegetais para o seu pet.',
    icon: <Calculator />,
    content: `
# Guia Definitivo de Cálculo Nutricional

Para que a Alimentação Natural (AN) seja segura e eficiente, o equilíbrio entre os grupos alimentares é fundamental. Este guia ensina o passo a passo para calcular a dieta ideal do seu cão ou gato.

---

## 1. Determinando a Quantidade Diária Total

A quantidade de comida que um pet deve comer por dia é baseada em uma porcentagem do seu **peso ideal**.

### Cães Adultos:
*   **Sedentários/Idosos:** 2% a 3% do peso ideal.
*   **Atividade Moderada:** 4% a 5% do peso ideal.
*   **Ativos/Trabalho:** 6% a 8% do peso ideal.
*   **Miniaturas (até 5kg):** Podem precisar de até 10% devido ao metabolismo acelerado.

### Gatos Adultos:
*   Geralmente entre **4% a 6%** do peso ideal, dependendo do nível de atividade.

---

## 2. A Composição do Prato (Proporções)

Uma dieta balanceada de AN Cozida para cães geralmente segue esta proporção:

### 🥩 Proteínas (Músculo): 35%
Carnes musculares magras (frango, bovina, suína, peixe). São a base para construção de tecidos e músculos.

### 🥦 Vegetais e Fibras: 30%
Legumes e verduras cozidos (abóbora, chuchu, cenoura, vagem). Fornecem vitaminas, minerais e fibras para o intestino.

### 🍚 Carboidratos (Opcional): 25%
Arroz integral, batata doce, mandioquinha. Fornecem energia rápida. *Nota: Gatos e alguns cães em dietas específicas podem ter 0% de carboidratos.*

### 🫀 Vísceras (Órgãos): 10%
Divididas em:
*   **5% Vísceras Secretoras:** Fígado (obrigatório pelas vitaminas A e cobre).
*   **5% Outras Vísceras:** Rim, baço, pâncreas ou pulmão.

---

## 3. Exemplo Prático: Cão de 10kg (Moderado - 4%)

1.  **Total Diário:** 10kg x 4% = **400g de comida por dia.**
2.  **Proteína (35%):** 400g x 0.35 = **140g**
3.  **Vegetais (30%):** 400g x 0.30 = **120g**
4.  **Carboidratos (25%):** 400g x 0.25 = **100g**
5.  **Vísceras (10%):** 400g x 0.10 = **40g** (sendo 20g de fígado e 20g de outra víscera).

---

## 4. Suplementação: O Toque Final

**A AN nunca é completa sem suplementação.**
Mesmo com a melhor variedade de ingredientes, faltarão nutrientes como Cálcio, Iodo e Vitamina E.
*   **Cálcio:** Essencial se não houver ossos na dieta.
*   **Ômega 3:** Óleo de peixe para saúde inflamatória e pelagem.
*   **Sal Iodado:** Em quantidades mínimas para a tireoide.

---

> **Dica de Ouro:** Prepare as porções da semana e congele. Isso garante que você nunca falte com a dieta correta por falta de tempo!
    `,
  },
};
