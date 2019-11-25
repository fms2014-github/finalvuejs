<template>
  <div class="container" align="center">
    <br/>
    <table class="table" id="bbsListTable" border="2">
      <thead>
        <tr>
          <th>제목</th>
          <th>작성자</th>
          <th>작성날짜</th>
        </tr>
      </thead>
      <tbody id="bbsList">
          <tr v-for="notice in info" :key="notice.no">
              <td v-html="notice.title" @click="show_detail(notice.no)"></td>
              <td v-html="notice.id"></td>
              <td v-html="notice.createDate"></td>

          </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
import http from "../http-common"
export default {
  name: "boardlist",
  data(){
      return{
          info: [],
          loading: true,
          errored: false
      };
  },
  methods:{
      getAllNotice(){
          http
              .get("/getAllListQna")
              .then(response => (this.info = response.data))
              .catch(() =>{
                  this.errored = true;
              })
              .finally(() => (this.loading = false));
      },
      show_detail: function(noticenum){
          this.$router.push("/boarddetail/" +noticenum);
      }
  },
  mounted(){
      this.getAllNotice();
  }
};
</script>

<style lang="scss" scoped>
</style>