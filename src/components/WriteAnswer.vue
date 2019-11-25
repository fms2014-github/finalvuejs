<template>
  <div>
    <div>
      <br />
      <form action method="POST" name="frmForm" id="_frmForm" @submit.prevent="addAnswer()">
        <table class="table table-bordered">
          <colgroup>
            <col style="width:30%" />
            <col style="width:70%" />
          </colgroup>
          <tr>
            <th>작성자</th>
            <td>
              <input type="text" name="name" id="_name" size="75" v-model="info.id" />
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <textarea name="name" id="_name" rows="10" cols="80" v-model="info.content"></textarea>
            </td>
          </tr>
        </table>
        <button type="submit" name="button">답글 작성</button>
      </form>
    </div>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  props: ["num", "title", "refno","answerseq"],
  name: "writeanswer",
  data() {
    return {
      info: {
        id: "",
        content: "",
      }
    };
  },
  
  methods: {
    addAnswer() {
      var refnum;
      if(this.answerseq > 0){
           refnum = this.refno;
      }else{
        refnum = this.num;
      }
      http

        .post("/insertAnswer", {
          id: this.info.id,
          title: "└ RE : " + this.title,
          content: this.info.content,
          refno: refnum,
          answerseq : this.answerseq + 1
        })
        .then(function(response) {
          if (response.data >= 0) {
            alert(" 작성 완료!!");   
          } else {
            alert(" 작성 실패....");
          }
        })
        .finally(() => (
          this.loading = false,
          this.$router.push("/boardlist")
        ));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>