/* data.js — BOTW Full + DLC
   Parte 1/3: INGREDIENTS (completo) y mapas auxiliares
   - Las imágenes deben existir en ./img con los nombres exactos indicados en el campo img.
   - Categorías principales usadas: fruta, seta, vegetal, hierba, carne, pescado, marisco, lácteo, grano, condimento, dulce, granja, monstruo, bicho, mineral, especial
   - Efectos: ataque, defensa, velocidad, sigilo, resistencia, calor, frío, eléctrico, corazones, vitalidad, ninguno
*/

const INGREDIENTS = [
  // FRUTAS
  { nombre: "Manzana", categoria: "fruta", efecto: "corazones", img: "./img/Apple.png" },
  { nombre: "Manzana dorada", categoria: "fruta", efecto: "corazones", img: "./img/Golden_Apple.png" },
  { nombre: "Bellota", categoria: "fruta", efecto: "ninguno", img: "./img/Acorn.png" },
  { nombre: "Nuez de palma", categoria: "fruta", efecto: "corazones", img: "./img/Palm_Fruit.png" },
  { nombre: "Plátano recio", categoria: "fruta", efecto: "ataque", img: "./img/Mighty_Bananas.png" },
  { nombre: "Durian vivaz", categoria: "fruta", efecto: "vitalidad", img: "./img/Hearty_Durian.png" },
  { nombre: "Melón gélido", categoria: "fruta", efecto: "frío", img: "./img/Hydromelon.png" },
  { nombre: "Fruta electro", categoria: "fruta", efecto: "eléctrico", img: "./img/Voltfruit.png" },

  // SETAS
  { nombre: "Seta hyliana", categoria: "seta", efecto: "ninguno", img: "./img/Hylian_Shroom.png" },
  { nombre: "Seta resistente", categoria: "seta", efecto: "resistencia", img: "./img/Stamella_Shroom.png" },
  { nombre: "Trufa vivaz", categoria: "seta", efecto: "vitalidad", img: "./img/Hearty_Truffle.png" },
  { nombre: "Trufa grande vivaz", categoria: "seta", efecto: "vitalidad", img: "./img/Big_Hearty_Truffle.png" },
  { nombre: "Seta gélida", categoria: "seta", efecto: "frío", img: "./img/Chillshroom.png" },
  { nombre: "Seta ígnea", categoria: "seta", efecto: "calor", img: "./img/Sunshroom.png" },
  { nombre: "Seta electro", categoria: "seta", efecto: "eléctrico", img: "./img/Zapshroom.png" },
  { nombre: "Seta rauda", categoria: "seta", efecto: "velocidad", img: "./img/Rushroom.png" },
  { nombre: "Seta robusta", categoria: "seta", efecto: "defensa", img: "./img/Ironshroom.png" },
  { nombre: "Seta sigilosa", categoria: "seta", efecto: "sigilo", img: "./img/Silent_Shroom.png" },
  { nombre: "Seta de fuerza", categoria: "seta", efecto: "ataque", img: "./img/Razorshroom.png" },

  // HIERBAS / FLORES
  { nombre: "Hierba de Hyrule", categoria: "hierba", efecto: "ninguno", img: "./img/Hyrule_Herb.png" },
  { nombre: "Flor rauda", categoria: "hierba", efecto: "velocidad", img: "./img/Swift_Violet.png" },
  { nombre: "Flor sigilosa", categoria: "hierba", efecto: "sigilo", img: "./img/Silent_Princess.png" },
  { nombre: "Flor robusta", categoria: "hierba", efecto: "defensa", img: "./img/Armoranth.png" },

  // VEGETALES / TUBÉRCULOS / CALABAZAS
  { nombre: "Pimiento ígneo", categoria: "vegetal", efecto: "calor", img: "./img/Spicy_Pepper.png" },
  { nombre: "Rábano vivaz", categoria: "vegetal", efecto: "vitalidad", img: "./img/Hearty_Radish.png" },
  { nombre: "Rábano grande vivaz", categoria: "vegetal", efecto: "vitalidad", img: "./img/Big_Hearty_Radish.png" },
  { nombre: "Zanahoria resistente", categoria: "vegetal", efecto: "resistencia", img: "./img/Endura_Carrot.png" },
  { nombre: "Zanahoria rauda", categoria: "vegetal", efecto: "velocidad", img: "./img/Swift_Carrot.png" },
  { nombre: "Calabaza robusta", categoria: "vegetal", efecto: "defensa", img: "./img/Fortified_Pumpkin.png" },

  // CARNES AVES Y MAMÍFEROS
  { nombre: "Carne de caza", categoria: "carne", efecto: "ninguno", img: "./img/Raw_Meat.png" },
  { nombre: "Carne de caza fina", categoria: "carne", efecto: "ninguno", img: "./img/Raw_Prime_Meat.png" },
  { nombre: "Carne de caza suprema", categoria: "carne", efecto: "ninguno", img: "./img/Raw_Gourmet_Meat.png" },
  { nombre: "Carne de ave", categoria: "carne", efecto: "ninguno", img: "./img/Raw_Bird_Drumstick.png" },
  { nombre: "Muslo de ave fina", categoria: "carne", efecto: "ninguno", img: "./img/Raw_Bird_Thigh.png" },
  { nombre: "Muslo de ave suprema", categoria: "carne", efecto: "ninguno", img: "./img/Raw_Whole_Bird.png" },

  // PECES Y MARISCOS
  { nombre: "Lubina de Hyrule", categoria: "pescado", efecto: "corazones", img: "./img/Hyrule_Bass.png" },
  { nombre: "Trucha ígnea", categoria: "pescado", efecto: "calor", img: "./img/Sizzlefin_Trout.png" },
  { nombre: "Trucha helada", categoria: "pescado", efecto: "frío", img: "./img/Chillfin_Trout.png" },
  { nombre: "Trucha eléctrica", categoria: "pescado", efecto: "eléctrico", img: "./img/Voltfin_Trout.png" },
  { nombre: "Carpa robusta", categoria: "pescado", efecto: "defensa", img: "./img/Armored_Carp.png" },
  { nombre: "Carpa rauda", categoria: "pescado", efecto: "velocidad", img: "./img/Mighty_Carp.png" },
  { nombre: "Perca armada", categoria: "pescado", efecto: "ataque", img: "./img/Armored_Porgy.png" },
  { nombre: "Salmón vivaz", categoria: "pescado", efecto: "vitalidad", img: "./img/Hearty_Salmon.png" },
  { nombre: "Cangrejo robusta", categoria: "marisco", efecto: "defensa", img: "./img/Ironshell_Crab.png" },
  { nombre: "Caracol vivaz", categoria: "marisco", efecto: "vitalidad", img: "./img/Hearty_Blueshell_Snail.png" },
  { nombre: "Cangrejo resistente", categoria: "marisco", efecto: "resistencia", img: "./img/Bright-Eyed_Crab.png" },

  // LÁCTEOS, GRANJA, DULCES, GRANOS Y CONDIMENTOS
  { nombre: "Leche fresca", categoria: "lácteo", efecto: "ninguno", img: "./img/Fresh_Milk.png" },
  { nombre: "Mantequilla de cabra", categoria: "lácteo", efecto: "ninguno", img: "./img/Goat_Butter.png" },
  { nombre: "Huevo de ave", categoria: "granja", efecto: "ninguno", img: "./img/Bird_Egg.png" },
  { nombre: "Arroz de Hyrule", categoria: "grano", efecto: "ninguno", img: "./img/Hylian_Rice.png" },
  { nombre: "Trigo de Tabanta", categoria: "grano", efecto: "ninguno", img: "./img/Tabantha_Wheat.png" },
  { nombre: "Azúcar de caña", categoria: "condimento", efecto: "ninguno", img: "./img/Cane_Sugar.png" },
  { nombre: "Sal de roca", categoria: "condimento", efecto: "ninguno", img: "./img/Rock_Salt.png" },
  { nombre: "Miel de colmena", categoria: "dulce", efecto: "corazones", img: "./img/Courser_Bee_Honey.png" },

  // PARTES DE MONSTRUO (para elixires)
  { nombre: "Gelatina chuchu", categoria: "monstruo", efecto: "ninguno", img: "./img/Chuchu_Jelly.png" },
  { nombre: "Ala de keese", categoria: "monstruo", efecto: "ninguno", img: "./img/Keese_Wing.png" },
  { nombre: "Colmillo de bokoblin", categoria: "monstruo", efecto: "ninguno", img: "./img/Bokoblin_Fang.png" },
  { nombre: "Cuerno de bokoblin", categoria: "monstruo", efecto: "ninguno", img: "./img/Bokoblin_Horn.png" },
  { nombre: "Cuerno de moblin", categoria: "monstruo", efecto: "ninguno", img: "./img/Moblin_Horn.png" },
  { nombre: "Colmillo de moblin", categoria: "monstruo", efecto: "ninguno", img: "./img/Moblin_Fang.png" },
  { nombre: "Garra de lizalfos", categoria: "monstruo", efecto: "ninguno", img: "./img/Lizalfos_Talon.png" },

  // BICHOS (para elixires)
  { nombre: "Grillo vigoroso", categoria: "bicho", efecto: "resistencia", img: "./img/Restless_Cricket.png" },
  { nombre: "Rana rauda", categoria: "bicho", efecto: "velocidad", img: "./img/Hot-Footed_Frog.png" },
  { nombre: "Luciérnaga sigilosa", categoria: "bicho", efecto: "sigilo", img: "./img/Sunset_Firefly.png" },
  { nombre: "Escarabajo robusto", categoria: "bicho", efecto: "defensa", img: "./img/Rugged_Rhino_Beetle.png" },
  { nombre: "Libélula ígnea", categoria: "bicho", efecto: "calor", img: "./img/Warm_Darner.png" },
  { nombre: "Libélula gélida", categoria: "bicho", efecto: "frío", img: "./img/Cold_Darner.png" },
  { nombre: "Libélula eléctrica", categoria: "bicho", efecto: "eléctrico", img: "./img/Electric_Darner.png" },
  { nombre: "Escarabajo de fuerza", categoria: "bicho", efecto: "ataque", img: "./img/Bladed_Rhino_Beetle.png" },
  { nombre: "Hada", categoria: "bicho", efecto: "vitalidad", img: "./img/Fairy.png" },

  // MINERALES Y ESPECIALES (usados por algunas recetas/ventas, placeholder para futuras expansiones)
  { nombre: "Ámbar", categoria: "mineral", efecto: "ninguno", img: "./img/Amber.png" },
  { nombre: "Ópalo", categoria: "mineral", efecto: "ninguno", img: "./img/Opal.png" },
  { nombre: "Rubí", categoria: "mineral", efecto: "ninguno", img: "./img/Ruby.png" },
  { nombre: "Zafiro", categoria: "mineral", efecto: "ninguno", img: "./img/Sapphire.png" },
  { nombre: "Topacio", categoria: "mineral", efecto: "ninguno", img: "./img/Topaz.png" },
  { nombre: "Diamante", categoria: "mineral", efecto: "ninguno", img: "./img/Diamond.png" },
  { nombre: "Fósil antiguo", categoria: "especial", efecto: "ninguno", img: "./img/Ancient_Core.png" }
];

/* Mapa auxiliar opcional: nombre -> ingrediente */
const INGREDIENTS_BY_NAME = new Map(INGREDIENTS.map(i => [i.nombre, i]));

/* Export global para index.html */
window.INGREDIENTS = INGREDIENTS;
window.INGREDIENTS_BY_NAME = INGREDIENTS_BY_NAME;

/* Placeholder: la constante RECIPES se define en data.js Parte 2/3 y 3/3 */
/* ===========================
   Parte 2/3 — RECIPES (Comida)
   =========================== */

const RECIPES = [
  // SIMPLES A LA PARRILLA / SALTEADOS BASE
  { nombre: "Brocheta de carne", tipo: "plato", efecto: "ninguno", corazones: 2,
    requisitos: [{ anyOf: ["Carne de caza","Carne de caza fina","Carne de caza suprema"], cantidad: 1 }] },
  { nombre: "Brocheta de ave", tipo: "plato", efecto: "ninguno", corazones: 2,
    requisitos: [{ anyOf: ["Carne de ave","Muslo de ave fina","Muslo de ave suprema"], cantidad: 1 }] },
  { nombre: "Pescado a la parrilla", tipo: "plato", efecto: "ninguno", corazones: 2,
    requisitos: [{ categoria: "pescado", cantidad: 1 }] },
  { nombre: "Marisco a la parrilla", tipo: "plato", efecto: "ninguno", corazones: 2,
    requisitos: [{ categoria: "marisco", cantidad: 1 }] },
  { nombre: "Salteado de setas", tipo: "plato", efecto: "ninguno", corazones: 3,
    requisitos: [{ categoria: "seta", cantidad: 2 }] },
  { nombre: "Salteado de vegetales", tipo: "plato", efecto: "ninguno", corazones: 3,
    requisitos: [{ categoria: "vegetal", cantidad: 2 }] },
  { nombre: "Fruta salteada", tipo: "plato", efecto: "ninguno", corazones: 3,
    requisitos: [{ categoria: "fruta", cantidad: 2 }] },

  // EFECTOS ELEMENTALES Y DE ESTADO (PLATOS)
  { nombre: "Salteado ígneo", tipo: "plato", efecto: "calor", corazones: 3, duracion: "5:00",
    requisitos: [{ anyOf: ["Seta ígnea","Pimiento ígneo","Trucha ígnea","Libélula ígnea"], cantidad: 2 }] },
  { nombre: "Salteado gélido", tipo: "plato", efecto: "frío", corazones: 3, duracion: "5:00",
    requisitos: [{ anyOf: ["Seta gélida","Melón gélido","Trucha helada","Libélula gélida"], cantidad: 2 }] },
  { nombre: "Salteado eléctrico", tipo: "plato", efecto: "eléctrico", corazones: 3, duracion: "5:00",
    requisitos: [{ anyOf: ["Seta electro","Fruta electro","Trucha eléctrica","Libélula eléctrica"], cantidad: 2 }] },
  { nombre: "Salteado raudo", tipo: "plato", efecto: "velocidad", corazones: 3, duracion: "3:00",
    requisitos: [{ anyOf: ["Seta rauda","Flor rauda","Carpa rauda","Zanahoria rauda"], cantidad: 2 }] },
  { nombre: "Salteado robusto", tipo: "plato", efecto: "defensa", corazones: 3, duracion: "3:00",
    requisitos: [{ anyOf: ["Seta robusta","Flor robusta","Carpa robusta","Calabaza robusta"], cantidad: 2 }] },
  { nombre: "Salteado sigiloso", tipo: "plato", efecto: "sigilo", corazones: 3, duracion: "3:00",
    requisitos: [{ anyOf: ["Seta sigilosa","Flor sigilosa","Luciérnaga sigilosa"], cantidad: 2 }] },
  { nombre: "Salteado de fuerza", tipo: "plato", efecto: "ataque", corazones: 3, duracion: "3:00",
    requisitos: [{ anyOf: ["Plátano recio","Perca armada","Seta de fuerza","Mighty_Carp_ALIAS"], cantidad: 2 }] },
  { nombre: "Guiso vivaz", tipo: "plato", efecto: "vitalidad", corazones: 4,
    requisitos: [{ anyOf: ["Durian vivaz","Rábano vivaz","Trufa vivaz","Trufa grande vivaz","Salmón vivaz"], cantidad: 1 }] },
  { nombre: "Salteado resistente", tipo: "plato", efecto: "resistencia", corazones: 3,
    requisitos: [{ anyOf: ["Seta resistente","Zanahoria resistente","Cangrejo resistente"], cantidad: 2 }] },

  // ARROCES
  { nombre: "Arroz con carne", tipo: "arroz", efecto: "ninguno", corazones: 4,
    requisitos: [{ nombre: "Arroz de Hyrule", cantidad: 1 }, { anyOf: ["Carne de caza","Carne de caza fina","Carne de caza suprema"], cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Arroz con ave", tipo: "arroz", efecto: "ninguno", corazones: 4,
    requisitos: [{ nombre: "Arroz de Hyrule", cantidad: 1 }, { anyOf: ["Carne de ave","Muslo de ave fina","Muslo de ave suprema"], cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Arroz con pescado", tipo: "arroz", efecto: "ninguno", corazones: 4,
    requisitos: [{ nombre: "Arroz de Hyrule", cantidad: 1 }, { categoria: "pescado", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Arroz con setas", tipo: "arroz", efecto: "ninguno", corazones: 3,
    requisitos: [{ nombre: "Arroz de Hyrule", cantidad: 1 }, { categoria: "seta", cantidad: 1 }] },
  { nombre: "Arroz con marisco", tipo: "arroz", efecto: "ninguno", corazones: 4,
    requisitos: [{ nombre: "Arroz de Hyrule", cantidad: 1 }, { categoria: "marisco", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Arroz con curry", tipo: "arroz", efecto: "ninguno", corazones: 4,
    requisitos: [{ nombre: "Arroz de Hyrule", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }, { anyOf: ["Carne de caza","Carne de ave","Lubina de Hyrule"], cantidad: 1 }] },

  // SOPAS
  { nombre: "Sopa de setas", tipo: "sopa", efecto: "ninguno", corazones: 3,
    requisitos: [{ categoria: "seta", cantidad: 2 }, { nombre: "Leche fresca", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Sopa de marisco", tipo: "sopa", efecto: "ninguno", corazones: 4,
    requisitos: [{ categoria: "marisco", cantidad: 1 }, { nombre: "Leche fresca", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Sopa de calabaza", tipo: "sopa", efecto: "defensa", corazones: 3, duracion: "3:00",
    requisitos: [{ nombre: "Calabaza robusta", cantidad: 1 }, { nombre: "Leche fresca", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Sopa de zanahoria", tipo: "sopa", efecto: "velocidad", corazones: 3, duracion: "3:00",
    requisitos: [{ nombre: "Zanahoria rauda", cantidad: 1 }, { nombre: "Leche fresca", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Sopa de pescado", tipo: "sopa", efecto: "ninguno", corazones: 4,
    requisitos: [{ categoria: "pescado", cantidad: 1 }, { nombre: "Leche fresca", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },

  // GUISOS / ESTOFADOS
  { nombre: "Guiso de carne", tipo: "guiso", efecto: "ninguno", corazones: 5,
    requisitos: [{ anyOf: ["Carne de caza","Carne de caza fina","Carne de caza suprema"], cantidad: 1 }, { categoria: "vegetal", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Guiso de ave", tipo: "guiso", efecto: "ninguno", corazones: 5,
    requisitos: [{ anyOf: ["Carne de ave","Muslo de ave fina","Muslo de ave suprema"], cantidad: 1 }, { categoria: "vegetal", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Guiso de pescado", tipo: "guiso", efecto: "ninguno", corazones: 5,
    requisitos: [{ categoria: "pescado", cantidad: 1 }, { categoria: "vegetal", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Estofado robusto", tipo: "guiso", efecto: "defensa", corazones: 5, duracion: "3:00",
    requisitos: [{ anyOf: ["Carpa robusta","Calabaza robusta","Seta robusta","Flor robusta"], cantidad: 2 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Estofado raudo", tipo: "guiso", efecto: "velocidad", corazones: 5, duracion: "3:00",
    requisitos: [{ anyOf: ["Zanahoria rauda","Seta rauda","Carpa rauda","Flor rauda"], cantidad: 2 }, { nombre: "Sal de roca", cantidad: 1 }] },

  // PASTAS Y PANES
  { nombre: "Pan de trigo", tipo: "pan", efecto: "ninguno", corazones: 2,
    requisitos: [{ nombre: "Trigo de Tabanta", cantidad: 1 }, { nombre: "Mantequilla de cabra", cantidad: 1 }] },
  { nombre: "Pasta simple", tipo: "pasta", efecto: "ninguno", corazones: 3,
    requisitos: [{ nombre: "Trigo de Tabanta", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Pasta con carne", tipo: "pasta", efecto: "ninguno", corazones: 5,
    requisitos: [{ nombre: "Trigo de Tabanta", cantidad: 1 }, { anyOf: ["Carne de caza","Carne de caza fina","Carne de caza suprema"], cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Pasta con pescado", tipo: "pasta", efecto: "ninguno", corazones: 5,
    requisitos: [{ nombre: "Trigo de Tabanta", cantidad: 1 }, { categoria: "pescado", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Pasta con setas", tipo: "pasta", efecto: "ninguno", corazones: 4,
    requisitos: [{ nombre: "Trigo de Tabanta", cantidad: 1 }, { categoria: "seta", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },

  // POSTRES, TARTAS Y DULCES
  { nombre: "Manzana con miel", tipo: "postre", efecto: "corazones", corazones: 3,
    requisitos: [{ nombre: "Manzana", cantidad: 1 }, { nombre: "Miel de colmena", cantidad: 1 }] },
  { nombre: "Leche caliente", tipo: "postre", efecto: "corazones", corazones: 2,
    requisitos: [{ nombre: "Leche fresca", cantidad: 1 }, { nombre: "Azúcar de caña", cantidad: 1 }] },
  { nombre: "Tarta de manzana", tipo: "postre", efecto: "corazones", corazones: 5,
    requisitos: [{ nombre: "Trigo de Tabanta", cantidad: 1 }, { nombre: "Mantequilla de cabra", cantidad: 1 }, { nombre: "Azúcar de caña", cantidad: 1 }, { nombre: "Manzana", cantidad: 1 }] },
  { nombre: "Pastel de frutas", tipo: "postre", efecto: "corazones", corazones: 6,
    requisitos: [{ nombre: "Trigo de Tabanta", cantidad: 1 }, { nombre: "Mantequilla de cabra", cantidad: 1 }, { nombre: "Azúcar de caña", cantidad: 1 }, { categoria: "fruta", cantidad: 2 }] },
  { nombre: "Crepe de miel", tipo: "postre", efecto: "corazones", corazones: 4,
    requisitos: [{ nombre: "Trigo de Tabanta", cantidad: 1 }, { nombre: "Mantequilla de cabra", cantidad: 1 }, { nombre: "Miel de colmena", cantidad: 1 }] },
  { nombre: "Pastel de arroz", tipo: "postre", efecto: "corazones", corazones: 4,
    requisitos: [{ nombre: "Arroz de Hyrule", cantidad: 1 }, { nombre: "Azúcar de caña", cantidad: 1 }, { nombre: "Huevo de ave", cantidad: 1 }] },

  // PESCADOS PREPARADOS
  { nombre: "Pescado con mantequilla", tipo: "plato", efecto: "corazones", corazones: 4,
    requisitos: [{ anyOf: ["Lubina de Hyrule","Trucha ígnea","Trucha helada","Trucha eléctrica"], cantidad: 1 }, { nombre: "Mantequilla de cabra", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Pescado con sal", tipo: "plato", efecto: "ninguno", corazones: 3,
    requisitos: [{ categoria: "pescado", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Pescado a la pimienta", tipo: "plato", efecto: "calor", corazones: 3, duracion: "3:00",
    requisitos: [{ anyOf: ["Lubina de Hyrule","Trucha helada","Trucha eléctrica","Trucha ígnea"], cantidad: 1 }, { nombre: "Pimiento ígneo", cantidad: 1 }] },

  // CARNES Y AVES PREPARADAS
  { nombre: "Carne salteada con setas", tipo: "plato", efecto: "ninguno", corazones: 5,
    requisitos: [{ anyOf: ["Carne de caza","Carne de caza fina","Carne de caza suprema"], cantidad: 1 }, { categoria: "seta", cantidad: 2 }] },
  { nombre: "Carne con arroz", tipo: "plato", efecto: "ninguno", corazones: 5,
    requisitos: [{ anyOf: ["Carne de caza","Carne de caza fina","Carne de caza suprema"], cantidad: 1 }, { nombre: "Arroz de Hyrule", cantidad: 1 }] },
  { nombre: "Ave con arroz", tipo: "plato", efecto: "ninguno", corazones: 5,
    requisitos: [{ anyOf: ["Carne de ave","Muslo de ave fina","Muslo de ave suprema"], cantidad: 1 }, { nombre: "Arroz de Hyrule", cantidad: 1 }] },
  { nombre: "Carne salada", tipo: "plato", efecto: "ninguno", corazones: 3,
    requisitos: [{ anyOf: ["Carne de caza","Carne de caza fina","Carne de caza suprema"], cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },
  { nombre: "Ave salada", tipo: "plato", efecto: "ninguno", corazones: 3,
    requisitos: [{ anyOf: ["Carne de ave","Muslo de ave fina","Muslo de ave suprema"], cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },

  // VEGETALES Y SETAS PREPARADAS
  { nombre: "Verduras salteadas", tipo: "plato", efecto: "ninguno", corazones: 3,
    requisitos: [{ categoria: "vegetal", cantidad: 2 }] },
  { nombre: "Setas a la parrilla", tipo: "plato", efecto: "ninguno", corazones: 2,
    requisitos: [{ categoria: "seta", cantidad: 1 }] },
  { nombre: "Setas con mantequilla", tipo: "plato", efecto: "corazones", corazones: 3,
    requisitos: [{ categoria: "seta", cantidad: 1 }, { nombre: "Mantequilla de cabra", cantidad: 1 }] },

  // COMBOS ESPECÍFICOS POPULARES
  { nombre: "Plátanos recios fritos", tipo: "plato", efecto: "ataque", corazones: 3, duracion: "4:00",
    requisitos: [{ nombre: "Plátano recio", cantidad: 3 }] },
  { nombre: "Durian vivaz a la parrilla", tipo: "plato", efecto: "vitalidad", corazones: 6,
    requisitos: [{ nombre: "Durian vivaz", cantidad: 2 }] },
  { nombre: "Rábanos vivaces salteados", tipo: "plato", efecto: "vitalidad", corazones: 6,
    requisitos: [{ anyOf: ["Rábano vivaz","Rábano grande vivaz"], cantidad: 2 }] },

  // HUEVOS Y LÁCTEOS
  { nombre: "Tortilla sencilla", tipo: "plato", efecto: "ninguno", corazones: 3,
    requisitos: [{ nombre: "Huevo de ave", cantidad: 2 }] },
  { nombre: "Tortilla con setas", tipo: "plato", efecto: "ninguno", corazones: 4,
    requisitos: [{ nombre: "Huevo de ave", cantidad: 1 }, { categoria: "seta", cantidad: 1 }] },
  { nombre: "Crema dulce", tipo: "postre", efecto: "corazones", corazones: 3,
    requisitos: [{ nombre: "Leche fresca", cantidad: 1 }, { nombre: "Azúcar de caña", cantidad: 1 }] },

  // SUSHI / ONIGIRI-STYLE (ARROZ + PESCADO/MARISCO)
  { nombre: "Bola de arroz con pescado", tipo: "arroz", efecto: "ninguno", corazones: 4,
    requisitos: [{ nombre: "Arroz de Hyrule", cantidad: 1 }, { categoria: "pescado", cantidad: 1 }] },
  { nombre: "Bola de arroz con marisco", tipo: "arroz", efecto: "ninguno", corazones: 4,
    requisitos: [{ nombre: "Arroz de Hyrule", cantidad: 1 }, { categoria: "marisco", cantidad: 1 }] },

  // PASTELES ADICIONALES
  { nombre: "Pastel de calabaza", tipo: "postre", efecto: "defensa", corazones: 5, duracion: "3:00",
    requisitos: [{ nombre: "Trigo de Tabanta", cantidad: 1 }, { nombre: "Mantequilla de cabra", cantidad: 1 }, { nombre: "Azúcar de caña", cantidad: 1 }, { nombre: "Calabaza robusta", cantidad: 1 }] },
  { nombre: "Pastel de durian", tipo: "postre", efecto: "vitalidad", corazones: 6,
    requisitos: [{ nombre: "Trigo de Tabanta", cantidad: 1 }, { nombre: "Mantequilla de cabra", cantidad: 1 }, { nombre: "Azúcar de caña", cantidad: 1 }, { nombre: "Durian vivaz", cantidad: 1 }] },

  // VARIOS
  { nombre: "Fruta mixta", tipo: "plato", efecto: "corazones", corazones: 3,
    requisitos: [{ categoria: "fruta", cantidad: 3 }] },
  { nombre: "Brocheta marina", tipo: "plato", efecto: "ninguno", corazones: 4,
    requisitos: [{ categoria: "marisco", cantidad: 2 }] }
];

/* Alias internos para robustez (no toques) */
for (const r of RECIPES) {
  if (r.requisitos) {
    for (const req of r.requisitos) {
      if (req.anyOf) {
        // Reemplazar alias "Mighty_Carp_ALIAS" por "Carpa rauda" si apareció
        const idx = req.anyOf.indexOf("Mighty_Carp_ALIAS");
        if (idx >= 0) req.anyOf[idx] = "Carpa rauda";
      }
    }
  }
}

/* Export parcial para que index.html pueda renderizar mientras cargamos Parte 3 */
window.RECIPES = RECIPES;
/* ================================
   Parte 3/3 — Elixires + Especiales + DLC
   ================================ */

/* Elixires: regla general de BOTW
   - 1 bicho con efecto (libélula, rana, escarabajo, luciérnaga, grillo, etc.)
   - + 1..4 partes de monstruo (cuerno, colmillo, ala, gelatina, garra, etc.)
   - El número y la rareza de partes de monstruo ajusta la duración/potencia.
   - Aquí listamos variantes principales por efecto.
*/
const ELIXIRES = [
  { nombre: "Elixir raudo", tipo: "elixir", efecto: "velocidad", corazones: 0, duracion: "3:00",
    requisitos: [{ anyOf: ["Rana rauda"], cantidad: 1 }, { categoria: "monstruo", cantidad: 1 }],
    notas: "Más partes de monstruo aumentan duración." },

  { nombre: "Elixir sigiloso", tipo: "elixir", efecto: "sigilo", corazones: 0, duracion: "3:00",
    requisitos: [{ anyOf: ["Luciérnaga sigilosa"], cantidad: 1 }, { categoria: "monstruo", cantidad: 1 }] },

  { nombre: "Elixir de fuerza", tipo: "elixir", efecto: "ataque", corazones: 0, duracion: "3:00",
    requisitos: [{ anyOf: ["Escarabajo de fuerza"], cantidad: 1 }, { categoria: "monstruo", cantidad: 1 }] },

  { nombre: "Elixir robusto", tipo: "elixir", efecto: "defensa", corazones: 0, duracion: "3:00",
    requisitos: [{ anyOf: ["Escarabajo robusto"], cantidad: 1 }, { categoria: "monstruo", cantidad: 1 }] },

  { nombre: "Elixir resistente", tipo: "elixir", efecto: "resistencia", corazones: 0, duracion: "3:00",
    requisitos: [{ anyOf: ["Grillo vigoroso"], cantidad: 1 }, { categoria: "monstruo", cantidad: 1 }] },

  { nombre: "Elixir ígneo", tipo: "elixir", efecto: "calor", corazones: 0, duracion: "6:00",
    requisitos: [{ anyOf: ["Libélula ígnea"], cantidad: 1 }, { categoria: "monstruo", cantidad: 1 }] },

  { nombre: "Elixir gélido", tipo: "elixir", efecto: "frío", corazones: 0, duracion: "6:00",
    requisitos: [{ anyOf: ["Libélula gélida"], cantidad: 1 }, { categoria: "monstruo", cantidad: 1 }] },

  { nombre: "Elixir eléctrico", tipo: "elixir", efecto: "eléctrico", corazones: 0, duracion: "6:00",
    requisitos: [{ anyOf: ["Libélula eléctrica"], cantidad: 1 }, { categoria: "monstruo", cantidad: 1 }] },

  { nombre: "Elixir vivaz", tipo: "elixir", efecto: "vitalidad", corazones: 0, duracion: null,
    requisitos: [{ anyOf: ["Hada"], cantidad: 1 }, { categoria: "monstruo", cantidad: 1 }],
    notas: "Los hadas cocinados producen elixir vivaz; mejor usarlos para revivir automáticamente." }
];

/* Recetas adicionales, especiales y DLC
   - Incluye combinaciones populares y de pruebas maestras.
   - Algunas usan nombre exacto para reflejar ítems únicos del juego.
*/
const RECIPES_DLC = [
  // Combos de potencia
  { nombre: "Salteado de plátanos recios (potente)", tipo: "plato", efecto: "ataque", corazones: 5, duracion: "4:30",
    requisitos: [{ nombre: "Plátano recio", cantidad: 4 }] },

  // Arroz y curry mejorado
  { nombre: "Arroz con curry de carne", tipo: "arroz", efecto: "ninguno", corazones: 6,
    requisitos: [{ nombre: "Arroz de Hyrule", cantidad: 1 }, { anyOf: ["Carne de caza","Carne de caza fina","Carne de caza suprema"], cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },

  // Postres con frutas especiales
  { nombre: "Pastel de manzana dorada", tipo: "postre", efecto: "corazones", corazones: 6,
    requisitos: [{ nombre: "Trigo de Tabanta", cantidad: 1 }, { nombre: "Mantequilla de cabra", cantidad: 1 }, { nombre: "Azúcar de caña", cantidad: 1 }, { nombre: "Manzana dorada", cantidad: 1 }] },

  // Sopas elementales alternativas
  { nombre: "Sopa eléctrica", tipo: "sopa", efecto: "eléctrico", corazones: 3, duracion: "4:00",
    requisitos: [{ anyOf: ["Trucha eléctrica","Seta electro","Fruta electro"], cantidad: 1 }, { nombre: "Leche fresca", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },

  // Guisos de resistencia vital
  { nombre: "Guiso vivaz reforzado", tipo: "guiso", efecto: "vitalidad", corazones: 7,
    requisitos: [{ anyOf: ["Rábano grande vivaz","Durian vivaz","Trufa grande vivaz"], cantidad: 2 }, { nombre: "Sal de roca", cantidad: 1 }] },

  // DLC temáticos (representativos; el juego contiene variaciones)
  { nombre: "Estofado gélido de cangrejo", tipo: "guiso", efecto: "frío", corazones: 5, duracion: "5:00",
    requisitos: [{ nombre: "Cangrejo resistente", cantidad: 1 }, { categoria: "vegetal", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },

  { nombre: "Arroz robusto con calabaza", tipo: "arroz", efecto: "defensa", corazones: 5, duracion: "4:00",
    requisitos: [{ nombre: "Arroz de Hyrule", cantidad: 1 }, { nombre: "Calabaza robusta", cantidad: 1 }, { nombre: "Sal de roca", cantidad: 1 }] },

  { nombre: "Crepe eléctrico", tipo: "postre", efecto: "eléctrico", corazones: 3, duracion: "3:00",
    requisitos: [{ nombre: "Trigo de Tabanta", cantidad: 1 }, { nombre: "Mantequilla de cabra", cantidad: 1 }, { anyOf: ["Fruta electro","Trucha eléctrica","Seta electro"], cantidad: 1 }] }
];

/* Unir todas las recetas: base (Parte 2/3) + elixires + DLC */
const ALL_RECIPES = []
  .concat(RECIPES || [])
  .concat(ELIXIRES)
  .concat(RECIPES_DLC);

/* Export final */
window.RECIPES = ALL_RECIPES;

/* Sugerencia: placeholder local para imágenes faltantes.
   Asegúrate de tener ./img/placeholder.png en el repo.
*/
