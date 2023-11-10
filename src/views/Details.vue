<template>
  <div>
    <h3>Details View Page</h3>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="!post">Loading....</div>
    <div v-else>
      <h3 class="post">
        {{ post.title }}
      </h3>
      <p class="pre">{{ post.body }}</p>

      <span v-for="tag in post.tags" :key="tag">#{{ tag }}, </span>
    </div>
  </div>
</template>

<script>
import getOnePost from "../composables/getOnePost";
export default {
  props: ["id"],
  setup(props) {
    // console.log(props)
    const { load, post, error } = getOnePost(props.id);
    load();

    return { load, post, error };
  },
};
</script>

<style></style>
