<template>
  <div class="fixed inset-0 z-50 overflow-hidden bg-black p-4">
    <div class="w-8 h-8 absolute left-85 mt-12" @click="closeComponent">
      <div
        class="w-8 h-1 bg-white absolute top-1/2 left-0 transform -translate-y-1/2 rotate-45"
      ></div>
      <div
        class="w-8 h-1 bg-white absolute top-1/2 left-0 transform -translate-y-1/2 -rotate-45"
      ></div>
    </div>
    <img src="../../images/circles.png" alt="" class="mt-6" />
    <ul class="text-white text-3xl space-y-4 ml-8 mt-32">
      <li><a href="">Work</a></li>
      <li><a href="">What we do</a></li>
      <li><a href="">Stories</a></li>
      <li><a href="">Contact</a></li>
      <li><a href="">Careers</a></li>
      <li><a href="">About us</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    closeComponent() {
      this.$emit("close");
    },
  },
};
</script>
