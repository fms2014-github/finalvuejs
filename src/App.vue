<template>
  <div id="app">
    <div class='headtitle'><h2>Q&A 게시판</h2></div>
    <div class='search_box'>
      <nav>
        <router-link class="btn btn-primary" to="/boardlist">모든 게시글 보기</router-link> &nbsp;  
        <router-link class="btn btn-primary" to="/writequest">게시글 작성</router-link>
      </nav>
    </div>
            <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
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
