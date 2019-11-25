import Vue from "vue"; 
import Router from "vue-router";
import BoardList from "./components/BoardList.vue"
import BoardDetail from "./components/BoardDetail.vue"
import UpdateBoard from "./components/UpdateBoard.vue"
import WriteQuest from "./components/WriteQuest.vue"
import WriteAnswer from "./components/WriteAnswer.vue"


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
      {
        path:"/boardlist",
        name:"boardlist",
        component: BoardList
      },
      {
        path:"/boarddetail/:num",
        name:"boarddetail",
        component: BoardDetail,
        props : true
      },
      {
        path:"/boardupdate/:id",
        name: "boardupdate",
        component: UpdateBoard,
        props : true
      },
      {
        path:"/writequest",
        name: "writequest",
        component: WriteQuest
      },
      {
        path:"/writeanswer/:num/:title/:refno/:answerseq",
        name: "writeanswer",
        component: WriteAnswer,
        props : true
      }
  ]
});