// ══ RECIPES.JS ═══════════════════════════════════════════════════
//
// FLUX COMPLET (5 étapes) :
//
// ÉTAPE 1 : Miner des MATRICES BRUTES dans les astéroïdes
//   SLAG  → Platinum-Palladium Matrix (40u) → 10 Silica Grains + 30 Iron-Rich Nodules + 8 Palladium
//   COMET → Hydrated Sulfide Matrix   (40u) → 20 Hydrocarbon Residue + 200 Water Ice
//   CHAR  → Feldspar Crystals         (40u) → 10 Hydrocarbon Residue + 30 Silica Grains
//
// ÉTAPE 2 : Raffiner les INTERMÉDIAIRES → donne des MATIÈRES BRUTES
//   10 Iron-Rich Nodules      → 198 Nickel-Iron Veins + 20 Platinum-Group Veins
//   20 Hydrocarbon Residue    → 180 Tholin Aggregates + 20 Troilite Sulfide Grains
//   20 Silica Grains          → 50 Feldspar Crystal Shards + 150 Silicon Dust
//
// ÉTAPE 3 : Crafter les COMPOSANTS depuis les MATIÈRES BRUTES
//   Mini Printer : 1050 Nickel-Iron Veins + 1050 Feldspar Crystal Shards → 14 Reinforced Alloys
//   Field Printer: 105 Silica Grains + 70 Iron-Rich Nodules + 70 Palladium → 8 Reinforced Alloys
//
// ÉTAPE 4 : Crafter le PRODUIT FINAL
//   65 Reinforced Alloys + 65 Carbon Weave + 65 Thermal Composites → 10 Building Foam

// ─────────────────────────────────────────────────────────────────
// ÉTAPE 4 — Produit final
// ─────────────────────────────────────────────────────────────────
const RECIPES = {
  building_foam: {
    name: "Building Foam", batch: 10, machine: "Printer S",
    inputs: [
      { name: "Reinforced Alloys",  qty: 65 },
      { name: "Carbon Weave",       qty: 65 },
      { name: "Thermal Composites", qty: 65 },
    ]
  },

  // ── Ships ───────────────────────────────────────────────────────
  wend: {
    name: "Wend", batch: 1, machine: "Mini Berth",
    inputs: [
      { name: "Nomad Program Frame", qty:  1 },
      { name: "Reinforced Alloys",   qty: 34 },
      { name: "Carbon Weave",        qty: 17 },
      { name: "Thermal Composites",  qty: 17 },
    ]
  },
  reiver: {
    name: "Reiver", batch: 1, machine: "Mini Berth",
    inputs: [
      { name: "Nomad Program Frame", qty:  2 },
      { name: "Reinforced Alloys",   qty: 78 },
      { name: "Carbon Weave",        qty: 33 },
      { name: "Thermal Composites",  qty: 33 },
    ]
  },
  usv: {
    name: "USV", batch: 1, machine: "Berth",
    inputs: [
      { name: "Archangel Protocol Frame",   qty:  1 },
      { name: "Batched Reinforced Alloys",  qty: 56 },
      { name: "Batched Carbon Weave",       qty: 28 },
      { name: "Batched Thermal Composites", qty: 28 },
    ]
  },
  tades: {
    name: "Tades", batch: 1, machine: "Berth",
    inputs: [
      { name: "Apocalypse Protocol Frame",  qty:   1 },
      { name: "Batched Reinforced Alloys",  qty: 211 },
      { name: "Batched Carbon Weave",       qty: 123 },
      { name: "Batched Thermal Composites", qty: 123 },
      { name: "Still Kernel",               qty:   7 },
    ]
  },

  batched_reinforced_alloys: {
    name: "Batched Reinforced Alloys", batch: 1, machine: "Printer",
    inputs: [
      { name: "Reinforced Alloys", qty: 10 },
    ]
  },
  batched_carbon_weave: {
    name: "Batched Carbon Weave", batch: 1, machine: "Printer",
    inputs: [
      { name: "Carbon Weave", qty: 10 },
    ]
  },
  batched_thermal_composites: {
    name: "Batched Thermal Composites", batch: 1, machine: "Printer",
    inputs: [
      { name: "Thermal Composites", qty: 10 },
    ]
  },

  rapid_plasma_ammo_1_m: {
    name: "Rapid Plasma Ammo 1 (M)", batch: 100, machine: "Printer",
    inputs: [
      { name: "Nickel-Iron Veins",       qty:  900 },
      { name: "Reinforced Alloys",        qty:    4 },
      { name: "Troilite Sulfide Grains",  qty: 1080 },
      { name: "Hydrocarbon Residue",      qty:   43 },
      { name: "Palladium",                qty:  630 },
    ]
  },

  reinforced_alloys: {
    name: "Reinforced Alloys", batch: 14, machine: "Mini Printer",
    isSelfCraft: true,
    inputs: [
      { name: "Nickel-Iron Veins",       qty: 1050 },
      { name: "Feldspar Crystal Shards", qty: 1050 },
    ]
  },
  carbon_weave: {
    name: "Carbon Weave", batch: 14, machine: "Mini Printer",
    isSelfCraft: true,
    inputs: [
      { name: "Tholin Aggregates", qty: 3150 },
    ]
  },
  thermal_composites: {
    name: "Thermal Composites", batch: 14, machine: "Mini Printer",
    isSelfCraft: true,
    inputs: [
      { name: "Silicon Dust",            qty:  630 },
      { name: "Tholin Aggregates",       qty: 1260 },
      { name: "Feldspar Crystal Shards", qty:  210 },
    ]
  },

  // ── Frames, Kernels & Echo Chamber (sub-products) ───────────────
  // Still Kernel and Echo Chamber can also be crafted in "Mini Printer"
  // with the same recipe; the static machine label below is for display.
  nomad_program_frame: {
    name: "Nomad Program Frame", batch: 1, machine: "Mini Printer",
    inputs: [
      { name: "Fossilized Exotronics", qty: 5 },
    ]
  },
  archangel_protocol_frame: {
    name: "Archangel Protocol Frame", batch: 1, machine: "Printer",
    inputs: [
      { name: "Still Knot",   qty:  1 },
      { name: "Echo Chamber", qty:  1 },
      { name: "Kerogen Tar",  qty: 38 },
    ]
  },
  apocalypse_protocol_frame: {
    name: "Apocalypse Protocol Frame", batch: 1, machine: "Printer",
    inputs: [
      { name: "Still Knot",   qty:   1 },
      { name: "Echo Chamber", qty:   1 },
      { name: "Kerogen Tar",  qty: 128 },
    ]
  },
  still_kernel: {
    name: "Still Kernel", batch: 1, machine: "Printer",
    inputs: [
      { name: "Brine",                 qty: 50 },
      { name: "Aromatic Carbon Weave", qty:  1 },
    ]
  },
  echo_chamber: {
    name: "Echo Chamber", batch: 1, machine: "Printer",
    inputs: [
      { name: "Nickel-Iron Veins",       qty: 120 },
      { name: "Troilite Sulfide Grains", qty:  45 },
      { name: "Feldspar Crystal Shards", qty: 105 },
    ]
  },
  still_knot: {
    name: "Still Knot", batch: 1, machine: "Mini Printer",
    inputs: [
      { name: "Salt",       qty: 5 },
      { name: "Feral Echo", qty: 5 },
    ]
  },
};

// ─────────────────────────────────────────────────────────────────
// ÉTAPE 3 — Composants par machine
// ─────────────────────────────────────────────────────────────────
const MACHINES = ["Mini Printer", "Field Printer"];
const DEFAULT_MACHINE = "Mini Printer";

const COMPOSANTS_BY_MACHINE = {
  "Mini Printer": {
    "Reinforced Alloys": {
      batch: 14,
      inputs: [
        { name: "Nickel-Iron Veins",       qty: 1050 },
        { name: "Feldspar Crystal Shards", qty: 1050 },
      ]
    },
    "Carbon Weave": {
      batch: 14,
      inputs: [
        { name: "Tholin Aggregates", qty: 3150 },
      ]
    },
    "Thermal Composites": {
      batch: 14,
      inputs: [
        { name: "Silicon Dust",            qty:  630 },
        { name: "Tholin Aggregates",       qty: 1260 },
        { name: "Feldspar Crystal Shards", qty:  210 },
      ]
    },
  },
  "Field Printer": {
    "Reinforced Alloys": {
      batch: 8,
      inputs: [
        { name: "Silica Grains",     qty: 105 },
        { name: "Iron-Rich Nodules", qty:  70 },
        { name: "Palladium",         qty:  70 },
      ]
    },
    "Carbon Weave": {
      batch: 14,
      inputs: [
        { name: "Hydrocarbon Residue", qty: 350 },
      ]
    },
    "Thermal Composites": {
      batch: 14,
      inputs: [
        { name: "Hydrocarbon Residue", qty: 140 },
        { name: "Silica Grains",       qty:  90 },
      ]
    },
  },
};

// Alias Mini Printer pour compatibilité avec recipes.html
const COMPOSANTS = COMPOSANTS_BY_MACHINE[DEFAULT_MACHINE];

function getComposantRecipe(name, machine) {
  const m = COMPOSANTS_BY_MACHINE[machine] || COMPOSANTS_BY_MACHINE[DEFAULT_MACHINE];
  return (m && m[name]) || COMPOSANTS_BY_MACHINE[DEFAULT_MACHINE][name] || null;
}

// ─────────────────────────────────────────────────────────────────
// ÉTAPE 2 — Intermédiaires (raffinés → donnent des matières brutes)
// ─────────────────────────────────────────────────────────────────
const INTERMEDIAIRES = {
  "Iron-Rich Nodules": {
    batch: 10, machine: "Refinery",
    outputs: [
      { name: "Nickel-Iron Veins",    qty: 198 },
      { name: "Platinum-Group Veins", qty:  20 },
    ]
  },
  "Hydrocarbon Residue": {
    batch: 20, machine: "Refinery",
    outputs: [
      { name: "Tholin Aggregates",       qty: 180 },
      { name: "Troilite Sulfide Grains", qty:  20 },
    ]
  },
  "Silica Grains": {
    batch: 20, machine: "Refinery",
    outputs: [
      { name: "Feldspar Crystal Shards", qty:  50 },
      { name: "Silicon Dust",            qty: 150 },
    ]
  },
  "Aromatic Carbon Veins": {
    batch: 100, machine: "Refinery",
    outputs: [
      { name: "Aromatic Carbon Weave", qty: 4 },
      { name: "Kerogen Tar",           qty: 8 },
      { name: "Chitinous Organics",    qty: 1 },
    ]
  },
  "Rough Old Crude Matter": {
    batch: 30, machine: "Refinery",
    outputs: [
      { name: "Salt",      qty: 16 },
      { name: "Sophrogon", qty: 28 },
    ]
  },
};

// ─────────────────────────────────────────────────────────────────
// ÉTAPE 1 — Matrices brutes (minées dans les astéroïdes)
// ─────────────────────────────────────────────────────────────────
const MATRICES = {
  "Platinum-Palladium Matrix": {
    batch: 40, asteroid: "SLAG", volume: 1,
    outputs: [
      { name: "Silica Grains",     qty: 16 },
      { name: "Iron-Rich Nodules", qty: 30 },
      { name: "Palladium",         qty:  8 },
    ]
  },
  "Hydrated Sulfide Matrix": {
    batch: 40, asteroid: "COMET", volume: 1,
    outputs: [
      { name: "Hydrocarbon Residue", qty:  20 },
      { name: "Water Ice",           qty: 300 },
    ]
  },
  "Feldspar Crystals": {
    batch: 40, asteroid: "CHAR", volume: 1,
    outputs: [
      { name: "Hydrocarbon Residue", qty: 10 },
      { name: "Silica Grains",       qty: 30 },
    ]
  },
  "Iridosmine Nodules": {
    batch: 40, asteroid: "Ingot", volume: 1,
    outputs: [
      { name: "Iron-Rich Nodules", qty: 40 },
    ]
  },
  // Aromatic Carbon Veins is both the mined item (from Glint asteroid)
  // and the refinery input (see INTERMEDIAIRES above) — 1:1 here.
  "Aromatic Carbon Veins": {
    batch: 40, asteroid: "Glint", volume: 1,
    outputs: [
      { name: "Aromatic Carbon Veins", qty: 40 },
    ]
  },
  // Rough Old Crude Matter is harvested from a Rough Rift and feeds
  // the Refinery (see INTERMEDIAIRES above) — 1:1 here.
  "Rough Old Crude Matter": {
    batch: 50, asteroid: "Rough Rift", volume: 1,
    outputs: [
      { name: "Rough Old Crude Matter", qty: 50 },
    ]
  },
};

// ─────────────────────────────────────────────────────────────────
// CALCULATEUR
// ─────────────────────────────────────────────────────────────────

function _computeIntermediaires(result, stock) {
  const t0mats = result.matieres;
  for (const [matName, matData] of Object.entries(t0mats)) {
    if (matData.manque <= 0) continue;
    for (const [interName, interRec] of Object.entries(INTERMEDIAIRES)) {
      const out = interRec.outputs.find(o => o.name === matName);
      if (!out) continue;
      const b = Math.ceil(matData.manque / out.qty);
      const prev = result.intermediaires[interName];
      if (!prev || b > prev.batches) {
        const toUse    = b * interRec.batch;
        const inStock  = stock[interName] || 0;
        const manque   = Math.max(0, toUse - inStock);
        const produces = interRec.outputs.map(o => ({ name: o.name, qty: o.qty * b }));
        result.intermediaires[interName] = { toUse, inStock, manque, batches: b, produces, rec: interRec };
      }
    }
  }
}

// Calcule toutes les matrices en une passe, avec byproducts chaînés.
// Remplace _computeMatrices + _computeMatricesFromMatieres + _buildByAsteroid.
//
// Principe : trier les matières par nombre de sources de matrice (unique en premier).
// Ex: Iron-Rich Nodules → SLAG seulement (1 source) est traité avant
//     Silica Grains → SLAG ou CHAR (2 sources).
// Les byproducts de SLAG (SG, Palladium) réduisent automatiquement les besoins suivants.
function _computeAllMatrices(result, stock) {
  result.matrices  = {};
  result.byAsteroid = {};

  // ── Collecter les besoins BRUTS (avant déduction stock) ─────────
  // Une même matière peut apparaître à la fois comme input de raffinerie
  // ET comme besoin direct (ex: Silica Grains pour raffiner FCS + direct TC).
  // On additionne les deux besoins bruts et on soustrait le stock UNE SEULE FOIS.
  const grossNeeded = {};

  for (const [name, data] of Object.entries(result.intermediaires)) {
    if (data.toUse > 0) grossNeeded[name] = (grossNeeded[name] || 0) + data.toUse;
  }

  for (const [name, data] of Object.entries(result.matieres)) {
    if (data.needed <= 0) continue;
    const fromRefinery = Object.values(result.intermediaires).some(
      i => i.produces?.some(p => p.name === name)
    );
    if (!fromRefinery) grossNeeded[name] = (grossNeeded[name] || 0) + data.needed;
  }

  const remaining = {};
  for (const [name, gross] of Object.entries(grossNeeded)) {
    const net = Math.max(0, gross - (stock[name] || 0));
    if (net > 0) remaining[name] = net;
  }

  // ── Trier : sources uniques d'abord ─────────────────────────────
  const enabledMatrices = Object.values(MATRICES).filter(m => m.asteroid !== 'Ingot' || window.ingotEnabled);
  const order = Object.keys(remaining).sort((a, b) => {
    const optA = enabledMatrices.filter(m => m.outputs.some(o => o.name === a)).length;
    const optB = enabledMatrices.filter(m => m.outputs.some(o => o.name === b)).length;
    return optA - optB;
  });

  // ── Calculer les matrices, byproducts déduits à chaque étape ────
  for (const matName of order) {
    const needed = remaining[matName];
    if (needed <= 0) continue;

    let best = null;
    for (const [mxName, mxRec] of Object.entries(MATRICES)) {
      if (mxRec.asteroid === 'Ingot' && !window.ingotEnabled) continue;
      const out = mxRec.outputs.find(o => o.name === matName);
      if (!out) continue;
      const batches = Math.ceil(needed / out.qty);
      if (!best || batches < best.batches) best = { mxName, batches, rec: mxRec, out };
    }
    if (!best) continue;

    const existingBatches   = result.matrices[best.mxName]?.batches || 0;
    const additionalBatches = Math.ceil(needed / best.out.qty);
    const newTotal = existingBatches + additionalBatches;
    const toMine   = newTotal * best.rec.batch;
    const inStock  = stock[best.mxName] || 0;
    const manque   = Math.max(0, toMine - inStock);
    result.matrices[best.mxName] = { toMine, inStock, manque, batches: newTotal, asteroid: best.rec.asteroid, volume: best.rec.volume };

    // Soustraire les byproducts des besoins restants
    for (const out of best.rec.outputs) {
      if (out.name === matName) continue;
      if (remaining[out.name] !== undefined) {
        remaining[out.name] = Math.max(0, remaining[out.name] - additionalBatches * out.qty);
      }
    }
  }

  // ── Construire byAsteroid ────────────────────────────────────────
  for (const [name, data] of Object.entries(result.matrices)) {
    if (data.manque <= 0) continue;
    const ast = data.asteroid;
    if (!result.byAsteroid[ast]) result.byAsteroid[ast] = [];
    result.byAsteroid[ast].push({ name, toMine: data.manque, volume: data.volume });
  }
}

// ─────────────────────────────────────────────────────────────────
// Helpers : récursion ships → frames → kernels → composants → matières
// ─────────────────────────────────────────────────────────────────

// Cherche une recette dans RECIPES par son nom affiché (pour Batched,
// Frames, Kernels, Echo Chamber, etc.).
function findRecipeByName(name) {
  for (const rec of Object.values(RECIPES)) {
    if (rec.name === name) return rec;
  }
  return null;
}

// Une matière brute est produite par une refinerie OU une matrice.
// Sert à classer un input qui n'a aucune recette de craft.
function isRawMaterial(name) {
  for (const rec of Object.values(INTERMEDIAIRES))
    if (rec.outputs.some(o => o.name === name)) return true;
  for (const rec of Object.values(MATRICES))
    if (rec.outputs.some(o => o.name === name)) return true;
  return false;
}

// Walker récursif. Classe chaque input dans composants / subproducts /
// matieres / unknowns et descend dans les sous-recettes avec le delta
// de batches restant à produire (stock-aware, accumule sur les doublons).
function _expandInputs(parentBatches, inputs, machineChoices, stock, result) {
  for (const inp of inputs) {
    _classifyAndAdd(inp.name, inp.qty * parentBatches, machineChoices, stock, result);
  }
}

function _classifyAndAdd(name, qty, machineChoices, stock, result) {
  // 1. Composant Mini/Field Printer (Reinforced Alloys, Carbon Weave, Thermal Composites)
  const machine = machineChoices[name] || DEFAULT_MACHINE;
  const compRec = getComposantRecipe(name, machine);
  if (compRec) {
    const prev = result.composants[name];
    if (prev) {
      const newNeeded  = prev.needed + qty;
      const newManque  = Math.max(0, newNeeded - prev.inStock);
      const newBatches = Math.ceil(newManque / compRec.batch);
      const delta      = newBatches - prev.batches;
      prev.needed  = newNeeded;
      prev.manque  = newManque;
      prev.batches = newBatches;
      prev.toCraft = newBatches * compRec.batch;
      if (delta > 0) for (const sub of compRec.inputs)
        _classifyAndAdd(sub.name, sub.qty * delta, machineChoices, stock, result);
    } else {
      const inStock = stock[name] || 0;
      const manque  = Math.max(0, qty - inStock);
      const batches = Math.ceil(manque / compRec.batch);
      result.composants[name] = { needed: qty, inStock, manque, batches, toCraft: batches * compRec.batch, rec: compRec, machine };
      if (batches > 0) for (const sub of compRec.inputs)
        _classifyAndAdd(sub.name, sub.qty * batches, machineChoices, stock, result);
    }
    return;
  }

  // 2. Sous-produit (Batched, Frame, Kernel, Echo Chamber...) — recette dans RECIPES
  const subRec = findRecipeByName(name);
  if (subRec) {
    const prev = result.subproducts[name];
    if (prev) {
      const newNeeded  = prev.needed + qty;
      const newManque  = Math.max(0, newNeeded - prev.inStock);
      const newBatches = Math.ceil(newManque / subRec.batch);
      const delta      = newBatches - prev.batches;
      prev.needed  = newNeeded;
      prev.manque  = newManque;
      prev.batches = newBatches;
      prev.toCraft = newBatches * subRec.batch;
      if (delta > 0) _expandInputs(delta, subRec.inputs, machineChoices, stock, result);
    } else {
      const inStock = stock[name] || 0;
      const manque  = Math.max(0, qty - inStock);
      const batches = Math.ceil(manque / subRec.batch);
      result.subproducts[name] = { needed: qty, inStock, manque, batches, toCraft: batches * subRec.batch, rec: subRec, machine: subRec.machine };
      if (batches > 0) _expandInputs(batches, subRec.inputs, machineChoices, stock, result);
    }
    return;
  }

  // 3. Matière brute (sortie d'une refinerie ou d'une matrice)
  if (isRawMaterial(name)) {
    const prev = result.matieres[name];
    if (prev) {
      prev.needed += qty;
      prev.manque = Math.max(0, prev.needed - prev.inStock);
    } else {
      const inStock = stock[name] || 0;
      result.matieres[name] = { needed: qty, inStock, manque: Math.max(0, qty - inStock) };
    }
    return;
  }

  // 4. Inconnu — pas de recette, l'utilisateur fournit (Still Knot, Brine, Fossilized Exotronics, …)
  const prev = result.unknowns[name];
  if (prev) {
    prev.needed += qty;
    prev.manque = Math.max(0, prev.needed - prev.inStock);
  } else {
    const inStock = stock[name] || 0;
    result.unknowns[name] = { needed: qty, inStock, manque: Math.max(0, qty - inStock) };
  }
}

function computeCraft(recipeKey, wantedQty, machineChoices = {}) {
  const recipe = RECIPES[recipeKey];
  if (!recipe) return null;
  const stock = window.ssuStock || {};

  const result = {
    final: {}, subproducts: {}, composants: {}, matieres: {},
    unknowns: {}, intermediaires: {}, matrices: {}, byAsteroid: {},
  };

  // ── CAS isSelfCraft : le produit est lui-même le composant final ─
  if (recipe.isSelfCraft) {
    const machine     = machineChoices[recipe.name] || DEFAULT_MACHINE;
    const recipeToUse = getComposantRecipe(recipe.name, machine) || recipe;
    const inStock     = stock[recipe.name] || 0;
    const batches     = Math.ceil(wantedQty / recipeToUse.batch);
    const toCraft     = batches * recipeToUse.batch;
    result.final      = { name: recipe.name, needed: wantedQty, inStock, batches, toCraft, machine };

    for (const inp of recipeToUse.inputs) {
      const needed = inp.qty * batches;
      const inStk  = stock[inp.name] || 0;
      result.matieres[inp.name] = { needed, inStock: inStk, manque: Math.max(0, needed - inStk) };
    }
    _computeIntermediaires(result, stock);
    _computeAllMatrices(result, stock);
    return result;
  }

  // ── CAS NORMAL : expansion récursive via _expandInputs ──────────
  const finalBatches = Math.ceil(wantedQty / recipe.batch);
  const finalQty     = finalBatches * recipe.batch;
  const finalInStock = stock[recipe.name] || 0;
  result.final = {
    name: recipe.name, needed: finalQty, batches: finalBatches,
    inStock: finalInStock, machine: recipe.machine,
  };

  _expandInputs(finalBatches, recipe.inputs, machineChoices, stock, result);
  _computeIntermediaires(result, stock);
  _computeAllMatrices(result, stock);

  return result;
}
