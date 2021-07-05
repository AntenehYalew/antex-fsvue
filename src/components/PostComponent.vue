<template>
  <div>
    <div v-if='posts'>
      <div v-for="post in posts"
        v-bind:item="post.text"
        v-bind:key="post._id"
      >
      {{post.text}}
      </div>
    </div>
    <div> 
      <label for="create-post"> Create Somethings </label>
      <input type="text" id="create-post" v-model="text" placeholder="create a post"> 
      <button @click="createPost"> Submit  </button> 
    </div>
  </div>
</template>

<script>
import PostService from "../PostService"
export default {
  name: 'PostComponent',
  data() {
    return {
      posts:[],
      error: '',
      text: ''
    }
  },

  methods: {
    async createPost() {
     await PostService.insertPost(this.text)
     this.posts = await PostService.getPosts()
    }
  },

  async created () {
    try {
      this.posts = await PostService.getPosts()
    }
    catch (error) {
      this.error = error
      console.log (error.message)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
