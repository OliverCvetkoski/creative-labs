<template>
  <div
    class="bgImage flex flex-col justify-between bg-no-repeat bg-cover relative w-full"
  >
    <HamburgerMenu />
    <div
      class="flex-none text-white w-10/12 lg:w-8/12 p-8 absolute bottom-0 z-0"
    >
      <h1 class="text-3xl font-bold lg:text-5xl">
        Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
        incididunt.
      </h1>
      <br />
      <p class="lg:w-11/12">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia.
      </p>
    </div>
  </div>
</template>

<style>
.bgImage {
  background-image: url("../images/man.png");
  height: 100vh;
}
</style>
