<template>
  <div class="hamburger-container" @click="toggleClick">
    <i class="el-icon-s-unfold hamburger" :class="{'is-active':isActive}"></i>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
.hamburger-container {
  padding: 0 15px;
}
.hamburger {
  display: inline-block;
  vertical-align: middle;
  font-size: 22px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
