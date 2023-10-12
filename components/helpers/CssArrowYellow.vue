<template>
  <div class="long-arrow-right left-28 relative"></div>
</template>

<style scoped>
.long-arrow-right {
  width: 9px;
  height: 9px;
  border-top: 3px solid #ffe17a;
  border-left: 3px solid #ffe17a;
}

.long-arrow-right {
  transform: rotate(135deg);
}

.long-arrow-right::after {
  content: "";
  display: block;
  width: 3px;
  height: 120px;
  background-color: #ffe17a;
  transform: rotate(-45deg) translate(41px, 16px);
  left: 0;
  top: 0;
}
</style>
