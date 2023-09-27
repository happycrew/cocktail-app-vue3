<script setup>
import AppLayout from '@/components/AppLayout.vue';
import { useRootStore } from '../stores/root';
import { storeToRefs } from 'pinia';

const rootStore = useRootStore();
const test = rootStore.getIngredients();

const { ingredients } = storeToRefs(rootStore);

</script>

<template>
  <AppLayout imgUrl="/src/assets/img/cocktail-bg.jpg">
    <div class="wrapper">
      <div class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.info {
  padding: 80px 0;
  text-align: center;
}
</style>
