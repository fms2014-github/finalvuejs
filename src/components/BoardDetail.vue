<template>
  <div class="container" align="center">
    <br/>
    <table class="table table-bordered" id="bbsDetail">
      <tr>
        <td>제목</td>
        <td>{{info.title}}</td>
      </tr>
      <tr>
        <td>작성자</td>
        <td>{{info.id}}</td>
      </tr>
      <tr>
        <td>작성일</td>
        <td>{{info.createDate}}</td>
      </tr>
      <tr>
        <td>내용</td>
        <td>{{info.content}}</td>
      </tr>
    </table>
    <button class="btn btn-primary" @click="updateboard()">수정</button> <button class="btn btn-primary" @click="delete_notice(info.no)">삭제</button> <button class="btn btn-primary" @click="goAnswer()">답글 달기</button>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  props:["num"],
  name: "boarddetail",
  
  data() {
    return {
      info: {
          no:'',
          id:'',
          title:'',
          createDate:'',
          content:'',
          refno:0,
          answerseq:0
      },
      loading: true,
      errored: false
    };
  },
  methods: {
    updateboard(){
        this.$router.push("/boardupdate/" +this.num )
    },
    goAnswer(){
        this.$router.push("/writeanswer/" +this.num +"/" + this.info.title + "/" + this.info.refno + "/" + this.info.answerseq)
    },
    
    delete_notice(noticenum) {
      var str;
      if(this.info.answerseq > 0){
        str = "deleteAnswer";
      }else{
        str = "deleteQuestion";
      }
      alert(str);
      alert(noticenum);
      http
        .delete("/"+ str + "/" + noticenum).then(response => {
            if (response.data > 0) { 
              alert("해당 게시글이 삭제되었습니다!!");
            }else {
              alert("삭제에 실패하였습니다.");
            }
        })
        .finally(() => (
          this.loading = false,
          this.$router.push("/boardlist")
        
        ));
    },

    getQuestionDetail(){

        http
            .get("/getQuestionDetail/"+ this.num)
            .then(response => (this.info = response.data))
            .catch(() =>{
                this.errored = true;
            })
            .finally(() => (this.loading = false));
    }
  },
  mounted(){
      this.getQuestionDetail();
  }
};
</script>

<style lang="scss" scoped>
</style>