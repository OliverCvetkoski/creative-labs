<template>
  <div class="long-arrow-right left-52 -mt-3 relative"></div>
</template>

<style scoped>
.long-arrow-right {
  width: 5px;
  height: 5px;
  border-top: 3px solid #000;
  border-left: 3px solid #000;
}

.long-arrow-right {
  transform: rotate(135deg);
}

.long-arrow-right::after {
  content: "";
  display: block;
  width: 1px;
  height: 30px;
  background-color: black;
  transform: rotate(-45deg) translate(10px, 4px);
  left: 0;
  top: 0;
}
</style>
