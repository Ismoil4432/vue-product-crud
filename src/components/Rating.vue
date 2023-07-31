<template>
  <div class="flex items-center">
    <div
      v-for="(el, ind) in Math.floor(el.rating)"
      :key="ind"
      class="flex items-center"
    >
      <Icons name="star" color="#FF9017" size="20" />
    </div>

    <div v-if="el.rating != Math.floor(el.rating)" class="flex items-center">
      <Icons name="star_half" color="#FF9017" size="20" />
    </div>

    <div
      v-if="1 <= 5 - Math.ceil(el.rating) && el.rating == Math.floor(el.rating)"
      v-for="(el, ind) in 5 - Math.floor(el.rating)"
      :key="ind"
      class="flex items-center"
    >
      <Icons name="star_border" color="#FF9017" size="20" />
    </div>

    <div
      v-if="1 <= 5 - Math.ceil(el.rating) && el.rating != Math.floor(el.rating)"
      v-for="(el, ind) in 4 - Math.floor(el.rating)"
      :key="ind"
      class="flex items-center"
    >
      <Icons name="star_border" color="#FF9017" size="20" />
    </div>
  </div>

  <h6 class="body-sm xl:body pt-1 xl:pt-0">
    <span class="text-orange">{{ el.rating }}</span>
  </h6>
</template>

<script setup>
defineProps(["el"]);
</script>

<style lang="scss" scoped></style>
