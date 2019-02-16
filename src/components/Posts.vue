<template>
  <div class="main-container">
    <div class="post-container">
      <div class="post-owner-container">
        <div class="post-owner-info">
          <div class="owner-avatar inner-center">
            <img src="../assets/images/头像.jpg" alt>
          </div>
          <div class="owner-info">
            <div class="owner-nickname">{{postOwner.user}}</div>
            <div class="owner-time">{{postOwner.time}}</div>
          </div>
        </div>
        <div class="owner-content">{{postOwner.details}}</div>
      </div>
      <div class="first-comment-container" v-for="item in comments" :key="item.key">
        <div class="first-comment" v-if="item">
          <div class="avatar-container">
            <img src="../assets/images/头像.jpg" alt>
          </div>
          <div class="first-comment-info">
            <div class="first-comment-owner">
              <div class="first-owner-container">
                <span>{{item[0].YBID_t}}</span>
                <div class="istop-container">
                  <img src="../assets/images/置顶.png" alt>
                </div>
              </div>
              <div class="reply-first">
                <button @click="toEditComment(item[0].YBID_t, item[0].id, false)">回复</button>
              </div>
            </div>
            <div class="first-comment-content-container">
              <div class="first-comment-content">{{item[0].details}}</div>
              <div class="first-comment-time owner-time">{{item[0].time}}</div>
              <div
                class="second-comment-container"
                v-for="(second, index) in item"
                :key="second.key"
              >
                <div class="second-comment" v-if="index >= 1">
                  <div class="second-user-info">
                    <div class="second-avatar">
                      <img src="../assets/images/头像.jpg" alt>
                    </div>
                    <div class="second-nickname">{{second.YBID_t}}</div>
                    <div class="reply-second">
                      <button @click="toEditComment(second.YBID_t, item[0].id, false)">回复</button>
                    </div>
                  </div>
                  <div class="second-content">
                    <span class="isreply" v-if="second.YBID_a != item[0].YBID_t">回复
                      <span>{{second.YBID_a}}</span>：
                    </span>
                    {{second.details}}
                    <div class="second-time owner-time">{{second.time}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="reply-container" id="reply">
      <div class="comment-function">
        <div class="toSomebody-container">
          <div v-show="!isToOwner">
            回复{{YBID_a}}
            <span class="close" @click="ToOwner">X</span>
          </div>
        </div>
        <div class="private-button">
          <div class="radios-conatainer">
            <div class="option-container" v-for="i in 2" :key="i" @click="setprivate(i)">
              <div class="radio inner-center">
                <div class="radio-inner" :class="radioinner[i-1]">
                </div>
              </div>{{optionInfos[i-1]}}
            </div>
          </div>
        </div>
      </div>
      <div class="comment inner-center">
        <input type="text" placeholder="添加评论..." ref="gain" v-model="commentContent">
        <button @click="submitComment">发送</button>
      </div>
    </div>
    <div class="over-main"  v-show="!isToOwner" @click="ToOwner"></div>
  </div>
</template>

<script>
export default {
  name: "posts",
  data() {
    return {
      postOwner: null,
      comments: null,
      commentContent: "",
      YBID_t: "",
      YBID_a: "",
      question: "",
      comment: "",
      details: "",
      onshow: 1,
      isToOwner: true,
      optionInfos: ['私密', '公开'],
      radioinner: ['notbeSelect', 'beSelect']
    };
  },
  created() {
    document.title = "详情";
    var postsid = this.$route.query.id;
    var yb_uid = this.$route.query.user;
    this.postOwner = this.$route.query.postsinfo;
    this.YBID_t = this.$route.query.user;
    this.YBID_a = parseInt(this.$route.query.postsinfo.user);
    this.question = this.$route.query.id;
    console.log(postsid);
    console.log(yb_uid);
    let url = "http://yb.upc.edu.cn/forum/getDetails";
    let data = {
      id: postsid,
      user: yb_uid
    };
    this.$axios.post(url, data).then(rsp => {
      console.log(rsp);
      this.comments = rsp.data.info;
    });
    this.fixStyle()
  },
  methods: {
    toEditComment(YBID_a, comment, isToOwner) {
      this.YBID_a = YBID_a;
      this.comment = comment;
      this.isprivate = false;
      this.isToOwner = isToOwner;
      this.$nextTick(() => {
        this.$refs.gain.focus();
        this.fixStyle()
      });
    },
    submitComment() {
      if (this.isToOwner == true) {
        this.comment = -1;
      }
      let data = {
        YBID_t: this.YBID_t,
        YBID_a: this.YBID_a,
        question: this.question,
        comment: this.comment,
        details: this.commentContent,
        onshow: this.onshow
      };
      let url = "http://yb.upc.edu.cn/forum/comment";
      this.$axios.post(url, data).then(rsp => {
        console.log(rsp);
        if (rsp.data.code == 1) {
          alert('回复成功！')
        }
      });
    },
    ToOwner() {
      this.isToOwner = true;
      this.YBID_a = parseInt(this.$route.query.postsinfo.user);
    },
    setprivate (i) {
      console.log(11)
      this.onshow = (i + 1) % 2
      for (let n = 0;n < 2;n++) {
        this.$set(this.radioinner, n, 'notbeSelect')
        if (n == i-1) {
          this.$set(this.radioinner, n, 'beSelect')
        }
      }
    },
    fixStyle() {
      var nowClientHeight = document.documentElement.clientHeight || document.body.clientHeight
      var submitHeight = (nowClientHeight * 0.13).toString() + 'px'
      setTimeout(()=>{
        document.getElementById('reply').style.height = submitHeight
      }, 20)
      console.log(submitHeight)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*楼主部分*/
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.post-container {
  width: 100%;
  height: 90%;
  overflow: scroll;
}
.post-owner-container {
  width: 90%;
  min-height: 7rem;
  margin-left: 5%;
  border-bottom: 1px #eeeeee solid;
  padding-bottom: 1.5rem;
}
.post-owner-info {
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
}
.owner-avatar {
  width: 10%;
  height: 100%;
}
.owner-avatar img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}
.owner-info {
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.owner-info div {
  width: 95%;
  height: 30%;
  margin-left: 5%;
}
.owner-nickname {
  font-size: 1rem;
  color: black;
}
.owner-time {
  font-size: 0.8rem;
  color: #b3b3b3;
}
.owner-content {
  width: 100%;
  min-height: 3rem;
}
/*一级回复*/
.first-comment-container {
  width: 90%;
  min-height: 7rem;
  margin-left: 5%;
  margin-top: 1rem;
}
.first-comment {
  width: 100%;
  min-height: 7rem;
  display: flex;
  flex-direction: row;
}
.avatar-container {
  width: 10%;
  min-height: 3rem;
}
.avatar-container img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}
.first-comment-info {
  width: 89%;
  margin-left: 1%;
  min-height: 3rem;
  display: flex;
  flex-direction: column;
}
.first-comment-owner {
  width: 100%;
  height: 1.5rem;
  display: flex;
  flex-direction: row;
}
.first-owner-container {
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.first-owner-container span {
  height: 100%;
  color: #2e3192;
  font-size: 0.9rem;
}
.istop-container {
  margin-left: 4%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.istop-container img {
  height: 75%;
  width: auto;
}
.reply-first {
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.first-comment-content-container {
  width: 100%;
  min-height: 3rem;
}
.first-comment-content {
  width: 100%;
  min-height: 2rem;
}
.first-comment-time {
  width: 100%;
  min-height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.second-comment-container {
  width: 100%;
  min-height: 0.1rem;
  padding-bottom: 1rem;
  border-bottom: 1px #eeeeee solid;
}
.second-comment {
  width: 100%;
  min-height: 0.1rem;
  margin-top: 0.5rem;
}
.second-user-info {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.second-avatar {
  width: 10%;
  height: 2rem;
}
.second-avatar img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}
.second-nickname {
  width: 73%;
  margin-left: 2%;
}
.reply-second {
  width: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: #666666;
}
.second-content {
  width: 88%;
  margin-left: 12%;
  margin-top: 0.5rem;
}
.isreply span {
  color: #2e3192;
}
.second-time {
  margin-top: 0.5rem;
  width: 100%;
}
.inner-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
button {
  background: none;
  border: none;
  outline: none;
}
.reply-container {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  background: white;
  border-top: #eeeeee 1px solid;
  display: flex;
  flex-direction: column;
}
.comment-function {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
}
.toSomebody-container {
  width: 40%;
  height: 100%;
  margin-left: 1rem;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.close {
  font-size: 1rem;
  background: #CCCCCC;
}
.private-button {
  width: 40%;
  height: 100%;
  margin-right: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.comment {
  width: 100%;
  height: 50%;
}
.comment input {
  width: 75%;
  height: 70%;
  border-radius: 8px;
  outline: none;
  border: #cccccc 1px solid;
  font-size: 1rem;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
}
.comment button {
  width: 15%;
  font-size: 1.2rem;
}
.radios-conatainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.option-container {
  width: 50%;
  height: 100%;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.radio {
  height: 1.2rem;
  width: 1.2rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  border: 1px solid #888888;
}
.radio-inner {
  width: 80%;
  height: 80%;
  border-radius: 50%;
}
.beSelect {
  background: black;
}
.notbeSelect {
  background: white;
}
.over-main {
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.1;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
