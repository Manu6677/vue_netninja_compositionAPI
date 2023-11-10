<template>
  <div>
    <h2>Post List</h2>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],

  setup() {
    onMounted(() => console.log("componennt Mounted"));
    onUnmounted(() => console.log("component unmounted"));
    onUpdated(() => console.log("component updated"));
  },
};
</script>
