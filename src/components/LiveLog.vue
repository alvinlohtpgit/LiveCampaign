<template>
  <div>
    <h3>Live Log - Total Votes {{ totalvotes }}</h3>
    <div id="livelogdisplay">
      <ul>
        <li>Entry 1</li>
        <li>Entry 2</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LiveLog",
  data() {
    return {
      totalvotes: 0
    };
  }
};
</script>

<style scoped>
#livelogdisplay {
  overflow: auto;
}
</style>
