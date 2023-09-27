import { defineStore } from 'pinia';
import axios from 'axios';
import { INGREDIENTS_URL, COCKTAILS_BY_INGREDIENT } from '../constants/api';

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: [],
    cocktails: [],
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL);
      this.ingredients = data?.data?.drinks;
    },
    async getCocktails(ingredient) {
      const data = await axios.get(`${COCKTAILS_BY_INGREDIENT}${ingredient}`);
      this.cocktails = data?.data?.drinks;
      console.log(this.cocktails);
    },
  },
});
