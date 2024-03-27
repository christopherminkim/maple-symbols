const arcane = {
  symCost: function (lvl) {
    return lvl ** 2 + 11;
  },
};

const sacred = {
  symCost: function (lvl) {
    return 9 * lvl ** 2 + 20 * lvl;
  },
};

const lvl = 10;
console.log(`cost for lvl ${lvl}: `, sacred.symCost(lvl));
