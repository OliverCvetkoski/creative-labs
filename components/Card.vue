<template>
  <div class="relative">
    <div class="flex flex-col p-10">
      <h5 class="font-bold">{{ title }}</h5>
      <h2 class="text-3xl lg:text-4xl font-bold w-10/12">
        {{ subtitle }}
      </h2>
      <br />
      <p class="w-10/12">{{ content }}</p>
      <br />
      <br />
      <a
        href=""
        class="absolute right-3 bottom-3 p-3 bg-black text-white font-bold cursor-pointer"
        >{{ link }} <br />
      </a>
    </div>
  </div>
</template>

<script>
import CssArrow from "./helpers/CssArrow.vue";

export default {
  props: {
    title: String,
    subtitle: String,
    content: String,
    link: String,
  },
  components: { CssArrow },
};
</script>
