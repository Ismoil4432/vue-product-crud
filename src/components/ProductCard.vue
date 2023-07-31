<template>
  <div
    class="bg-white border-2 border-gray-300 rounded-lg overflow-hidden xl:mx-0 flex items-center gap-5 xl:block p-2"
  >
    <div
      class="flex justify-center items-center h-full xl:h-auto xl:border-b-2 xl:border-gray-300 flex-shrink-0 relative"
    >
      <slot />

      <img
        class="w-[80px] xl:w-[230px] h-[100px] xl:h-[230px] object-cover xl:mb-5"
        :src="`/images/${el.image}`"
        alt="mobile"
      />
    </div>

    <div class="xl:p-5">
      <div class="flex justify-between">
        <div>
          <div class="flex items-baseline gap-3 mb-1">
            <h5 class="h5">
              <span>{{ el.newPrice }}</span>
            </h5>
            <h6 class="h6">
              <span class="text-gray-500 font-normal line-through">{{
                el.oldPrice
              }}</span>
            </h6>
          </div>

          <div class="flex items-center gap-2">
            <Rating :el="el" />

            <div class="flex items-center gap-1 xl:hidden pt-1 xl:pt-0">
              <div class="bg-gray-500 w-1 h-1 rounded-full"></div>

              <h6 class="body-sm-muted">
                <span>{{ el.orders }} orders</span>
              </h6>
            </div>
          </div>
        </div>

        <!-- <div
          class="hidden w-[37px] h-[37px] xl:flex items-center justify-center border-2 border-gray-300 rounded-lg"
        >
          <Icons name="favorite_border" color="#0D6EFD" />
        </div> -->
      </div>

      <h6 class="h6 xl:body xl:w-[240px] pt-2">
        <span class="text-gray-600 font-normal">{{ el.description }}</span>
      </h6>

      <h6 class="xl:hidden body w-[240px] pt-2">
        <span class="text-green">Free shipping</span>
      </h6>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["el"]);
</script>

<style lang="scss" scoped></style>
