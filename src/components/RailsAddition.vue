<template>
  <p>
    <a :href="getLink(link)"> {{ title }} <span>from Rails</span> </a>
  </p>
</template>

<script>
const baseUrl = "http://localhost:3000/api/v1/product/";
export default {
  props: ["title", "link"],
  methods: {
    getLink(link) {
      return baseUrl + link;
    }
  }
};
</script>
<style scoped>
span {
  color: red;
  font-weight: bold;
}
</style>
