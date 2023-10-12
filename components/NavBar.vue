<template>
  <nav class="text-white flex flex-row-reverse mt-16 mr-24 relative">
    <button @click="toggleHamburgerMenu" class="lg:hidden focus:outline-none">
      <div class="absolute ml-8">
        <div class="w-8 h-1 bg-white mb-2"></div>
        <div class="w-8 h-1 bg-white mb-2"></div>
        <div class="w-8 h-1 bg-white mb-2"></div>
      </div>
    </button>
    <ul class="hidden lg:flex">
      <li><a href="">Work</a></li>
      <li class="cursor-pointer">
        <a @click="openModal" :class="{ highlighted: isComponentVisible }"
          >What we do</a
        >
      </li>
      <li><a href="">Stories</a></li>
      <li><a href="">Contact</a></li>
      <li><a href="">Careers</a></li>
      <li><a href="">About us</a></li>
    </ul>
  </nav>
  <HamburgerMenu v-if="isHamburgerMenuVisible" @close="toggleHamburgerMenu" />
  <NavModal v-if="isComponentVisible" />
</template>

<script>
export default {
  data() {
    return {
      isComponentVisible: false,
      isHamburgerMenuVisible: false,
    };
  },

  methods: {
    openModal() {
      this.isComponentVisible = !this.isComponentVisible;
    },
    toggleHamburgerMenu() {
      this.isHamburgerMenuVisible = !this.isHamburgerMenuVisible;
    },
    closeModal() {
      this.isComponentVisible = false;
    },
  },
};
</script>

<style scoped>
a {
  padding: 15px 20px 15px 20px;
}
.highlighted {
  border-radius: 30px;
  background-color: hsla(151, 45%, 55%, 0.42);
}
</style>
