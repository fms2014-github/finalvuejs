<template>
  <div>
    <div>
      <br />
      <form action method="POST" name="frmForm" id="_frmForm" @submit.prevent="addWrite()">
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
            <th>작성자</th>
            <td>
              <input type="text" name="name" id="_name" size="75" v-model="info.user" disabled/>
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <textarea name="name" id="_name" rows="10" cols="80" v-model="info.content"></textarea>
            </td>
          </tr>
        </table>
        <button type="submit" name="button">게시글 작성</button>
      </form>
    </div>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  name: "writequest",
  data() {
    return {
      info: {
        id: "",
        title: "",
        content: "",
        user : "admin"
      }
    };
  },
  methods: {
    addWrite() {
      alert(this.info.user);
      http
        .post("/insertQuestion", {
          id: this.info.user,
          title: this.info.title,
          content: this.info.content,
          refno: this.info.no
        })
        .then(function(response) {
          if (response.data >= 0) {
            alert(" 작성 완료!!");
          } else {
            alert(" 작성 실패....");
            this.$router.push("/boardlist");
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