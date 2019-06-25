<template>
  <nav>
    <li>
      <a :href="title">Home</a>
    </li>
    <li>About</li>
  </nav>
</template>
<script>
import { Script } from "vm";
export default {
  data() {
    return {
      title: "http://github.com/voloyev/cors_app"
    };
  }
};
</script>
<style scoped>
li {
  display: inline-block;
}
</style>
