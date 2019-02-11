<template>
  <div class="main-container">
    <div class="post-owner-container">
      <div class="post-owner-info">
        <div class="owner-avatar inner-center">
          <img src="../assets/images/头像.jpg" alt="">
        </div>
        <div class="owner-info">
          <div class="owner-nickname">
            悲伤的小企鹅
          </div>
          <div class="owner-time">
            2018年8月07日　14:37
          </div>
        </div>
      </div>
      <div class="owner-content">
        这里是内容这里是内容这里是内容这里是内容这里是内容
      </div>
    </div>
    <div class="first-comment-container"  v-for="i in 3" :key="i">
      <div class="first-comment">
        <div class="avatar-container">
          <img src="../assets/images/头像.jpg" alt="">
        </div>
        <div class="first-comment-info">
          <div class="first-comment-owner">
            <div class="first-owner-container">
              <span>吴老师</span>
              <div class="istop-container">
                <img src="../assets/images/置顶.png" alt="">
              </div>
            </div>
            <div class="reply-first">
              <button>回复</button>
            </div>
          </div>
          <div class="first-comment-content-container">
            <div class="first-comment-content">
              这里是一级评论这里是一级评论这里是一级评论这里是一级评论这里是一级评论这里是一级评论这里是一级评论这里是一级评论这里是一级评论
            </div>
            <div class="first-comment-time owner-time">
              14:25
            </div>
            <div class="second-comment-container">
              <div class="second-comment" v-for="j in 3" :key="j">
                <div class="second-user-info">
                  <div class="second-avatar">
                    <img src="../assets/images/头像.jpg" alt="">
                  </div>
                  <div class="second-nickname">
                    吴aaa
                  </div>
                  <div class="reply-second">
                    <button>回复</button>
                  </div>
                </div>
                <div class="second-content">
                  <span class="isreply" :id="'second-'+i+'-'+j">
                    回复<span>吴aaa</span>：
                  </span>
                  这里是二级评论这里是二级评论这里是二级评论这里是二级评论这里是二级评论这里是二级评论这里是二级评论这里是二级评论
                  <div class="second-time owner-time">
                    14:25
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="reply-container inner-center">
        <input type="text" placeholder="添加评论...">
        <button>发送</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'posts',
  data () {
    return {

    }
  },
  created () {
    document.title = '详情'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*楼主部分*/
.main-container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.post-owner-container {
  width: 90%;
  min-height: 7rem;
  margin-left: 5%;
  border-bottom: 1px #EEEEEE solid;
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
  color: #B3B3B3;
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
  color: #2E3192;
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
  min-height: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px #EEEEEE solid;
}
.second-comment {
  width: 100%;
  min-height: 3rem;
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
.isreply span{
  color: #2E3192;
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
}
.reply-container {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 3rem;
  width: 100%;
  background: white;
  border-top: #EEEEEE 1px solid;
}
.reply-container input {
  width: 75%;
  height: 70%;
  border-radius: 8px;
  outline: none;
  border: #CCCCCC 1px solid;
  font-size: 1rem;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
}
.reply-container button {
  width: 15%;
  font-size: 1.2rem;
}
</style>
