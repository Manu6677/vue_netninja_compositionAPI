<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" placeholder="search Here" v-model="search" />
    <p>Searched term: {{ search }}</p>
    <div v-for="name in searchTerm" :key="name">{{ name }}</div>
    <button @click="handleClick">Stop watching</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
export default {
  name: "HomeView",
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);

    const stopWatch = watch(search, () => {
      console.log("watch ran");
    });

    const stopEffect = watchEffect(() => {
      console.log("i am watch effect", search.value);
    });

    const searchTerm = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };
    return { names, search, searchTerm, handleClick };
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
