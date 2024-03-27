const arcane = {
  symCost: function (lvl) {
    return lvl ** 2 + 11;
  },
  mesoCost: function (region, lvl) {
    const regionVar = {
      vj: 8,
      chuchu: 10,
      lach: 12,
      arcana: 14,
      morass: 16,
      esfera: 18,
    };
    return (
      10000 * Math.floor((lvl ** 2 + 11) * (regionVar[region] + 0.1 * lvl))
    );
  },
};

const sacred = {
  symCost: function (lvl) {
    return 9 * lvl ** 2 + 20 * lvl;
  },
  mesoCost: function (region, lvl) {
    const regionVar = {
      cernium: 13.2,
      arcus: 15,
      odium: 16.8,
      shangrila: 18.6,
      arteria: 20.4,
      carcion: 22.2,
    };
    // console.log(regionVar[region] - 0.6 * lvl);
    // console.log((regionVar[region] * 10 - 0.6 * 10 * lvl) / 10); // do this so there are no floating point errors
    return (
      100000 *
      Math.floor(
        (9 * lvl ** 2 + 20 * lvl) *
          ((regionVar[region] * 10 - 0.6 * 10 * lvl) / 10)
      )
    );
  },
};

const lvl = 19;
const region = 'esfera';
// console.log(`symbol cost for lvl ${lvl}: `, sacred.symCost(lvl));
// console.log(
//   `meso cost to upgrade lvl ${lvl} ${region} symbol: `,
//   arcane.mesoCost(region, lvl)
// );
