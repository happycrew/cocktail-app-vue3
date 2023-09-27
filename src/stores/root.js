import { defineStore } from 'pinia';
import axios from 'axios';
import { INGREDIENTS_URL } from '../constants/api';


export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: [],
  }),
  actions: {
    async getIngredients() {
      console.log(URL);
      const data = await axios.get(INGREDIENTS_URL);
      this.ingredients = data?.data?.drinks;
    },
  },
});
