<template>
  <div id="app">
    <div>
      
    </div>
            <router-view/>

    <!-- <span v-if="user != ''"><router-link class="btn btn-primary" to="/writequest">게시글 작성</router-link></span> -->
  </div>
  
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      user: ''
    }
  },
  mounted(){
    this.$router.push("/boardlist")
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
