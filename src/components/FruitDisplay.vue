<template>
  <div>
    <b-progress
      :value="fruitvalueint"
      :max="max"
      show-progress
      height="40px"
      striped="striped"
      class="mb-3"
      :variant="variantname"
    ></b-progress>
    <div class="fruitname"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: ["variantname", "fruitvalue"],
  name: "FruitDisplay",
  data() {
    return {
      striped: true,
      max: 100
    };
  },
  computed: {
    fruitvalueint() {
      return parseInt(this.fruitvalue);
    }
  }
};
</script>

<style scoped>
.fruitname {
  font-size: 2.4vh;
}
</style>
