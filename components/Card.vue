<template>
  <div class="mt-8 mb-2 lg:mb-8 h-96 relative">
    <div class="flex flex-col mt-6">
      <h5 class="font-bold lg:mt-4 ml-8 lg:ml-12">{{ title }}</h5>
      <h2 class="text-3xl lg:text-4xl font-bold ml-8 lg:ml-12 w-10/12">
        {{ subtitle }}
      </h2>
      <br />
      <p class="w-10/12 ml-8 lg:ml-12">{{ content }}</p>
      <br />
      <br />
      <a href="" class="absolute left-60 md:left-3/4 top-80"
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
