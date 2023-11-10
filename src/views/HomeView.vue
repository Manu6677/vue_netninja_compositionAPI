<template>
  <div class="home">
    <h1>Home</h1>

    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>

    <div v-else>
      <p>Loading....</p>
    </div>

    <button @click="showPosts = !showPosts">Toggle post data</button>
    <button @click="posts.pop()">Update data by poping</button>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";
import getPost from "../composables/getPost";
export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPost();

    load();
    const showPosts = ref(true);
    return { posts, showPosts, error };
  },
};

/**
  -> Remember reactive does not work on the Primitive values

  -> Computed properties are used to calculate the value of a property based on some other conditions.

  -> Watchers, on the other hand, are not primarily used for changing the value of a property;
      ->instead, they are used to notify you when the value has changed and let you perform certain actions based on these changes.

  -> Computed properties should be used when you need to get the current value of an object and use it in your logic, such as calculating something based on it.
  -> And watchers should be used when you need to know when one or more values have changed and react accordingly.

  -> watchEffect: it runs initially at first and when we are watching something it runs again and again

  -> Remember you can STOP "Watch" and "watchEffect" just by invoking the function
     -> In stopWatch and stopEffect we are getting the function and in handle click we are invoking them to stop


*/
</script>
