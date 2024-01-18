import { heroes } from "../data/heroes.js";

export const getHeroeById = (id) => {
  return heroes.find((element) => element.id === id);
};
//console.log(getHeroeById(2));

export const getHeroesbyOwner = (owner) => {
  return heroes.filter((element) => element.owner === owner);
};
//console.log(getHeroesbyOwner("Marvel"));
