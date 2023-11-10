import { ref } from "vue";

const getOnePost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("Post is not available right now");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { load, post, error };
};

export default getOnePost;
