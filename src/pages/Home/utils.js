import data from "../../assets/data/match-lineups.json";

export const teams = data.lineups.map(team => {
  const formation = `1${team.formation}`.split("");

  const players = formation.map(num => team.players.splice(0, num));

  return Object.assign({}, team, { players });
});
