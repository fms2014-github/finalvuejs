<template>
  <div >
    <br/>
    <form action method="POST" name="frmForm" id="_frmForm" @submit.prevent="updateNotice">
      <table class="table table-bordered">
        <colgroup>
          <col style="width:30%" />
          <col style="width:70%" />
        </colgroup>
        <tr>
          <th>제목</th>
          <td>
            <input type="text" name="name" id="_name" size="75" v-model="info.title" />
          </td>
        </tr>
        <tr>
          <th>내용</th>
          <td>
            <textarea name="name" id="_name" rows="10" cols="80" v-model="info.content" ></textarea>
          </td>
        </tr>
      </table>
       <button type="submit" name="button">정보 수정</button>
    </form>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  props: ["id"],
  name: "boardupdate",
  data() {
    return {
      info: {
        id: "",
        title: "",
        createDate: "",
        content: "",
        refno: 0,
        answerseq: 0,
        answerlevel: 0
      },
      loading: true,
      errored: false,
   
    };
  },
  mounted() {
    http
      .get("/getQuestionDetail/" + this.id)
      .then(response => (this.info = response.data))
      .catch(() => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    updateNotice() {
      http
        .put("/updateQuestion", {
          no: this.info.no,
          id: this.info.id,
          title: this.info.title,
          createDate: this.info.createDate,
          content: this.info.content,
          refno: this.info.refno,
          answerseq: this.info.answerseq,
          answerlevel: this.info.answerlevel
        })
        .then(function(response) {
          if (response.data >= 0) {
            alert(" 수정 완료!!");
          } else {
            alert(" 수정 실패....");
            location.href = "/";
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