<template>
  <div class="main-container" v-if="isRouterAlive">
    <pull-to :top-load-method="refresh" :bottom-load-method="fetchdata">
      <div v-for="item in pageInfos" :key="item.key" class="message-container" @click="goToPosts(item.id, item)">
        <div class="user-container inner-center">
          <div class="avatar inner-center">
            <img src="../../assets/images/头像.jpg" alt="">
          </div>
          <div class="nick-time">
            <div class="nickname">{{item.user.nick}}</div>
            <div class="time">{{item.time}}</div>
          </div>
          <div class="isopen-container">
            <div class="isopen inner-center" v-show="isopen">
              <img src="../../assets/images/私密.png" alt="">
            </div>
          </div>
        </div>
        <div class="theme-container inner-center">
          <div class="theme">
            {{item.details}}
          </div>
        </div>
        <div class="first-comment-container inner-center" v-if="item.f_comment">
          <div class="first-comment-frame inner-center">
            <div class="first-comment">
              <span>{{item.f_comment.user.nick}}：</span>{{item.f_comment.details}}
            </div>
          </div>
        </div>
      </div>
    </pull-to>
  </div>
</template>

<script>
import Bus from "../../assets/eventBus.js"
import PullTo from 'vue-pull-to'

const TOP_DEFAULT_CONFIG = {
  pullText: '下拉刷新', // 下拉时显示的文字
  triggerText: '释放更新', // 下拉到触发距离时显示的文字
  loadingText: '加载中...', // 加载中的文字
  doneText: '加载完成', // 加载完成的文字
  failText: '加载失败', // 加载失败的文字
  loadedStayTime: 400, // 加载完后停留的时间ms
  stayDistance: 50, // 触发刷新后停留的距离
  triggerDistance: 70 // 下拉刷新触发的距离
}

const BOTTOM_DEFAULT_CONFIG = {
  pullText: '上拉加载',
  triggerText: '释放更新',
  loadingText: '加载中...',
  doneText: '加载完成',
  failText: '加载失败',
  loadedStayTime: 400,
  stayDistance: 50,
  triggerDistance: 70
}

export default {
  name: 'index-Body',
  components: {
    PullTo,
  },
  data () {
    return {
      isRouterAlive: true,
      isopen: false,
      pageNum: 1,
      pageInfos: [{
        user: '',
        details: '',
        time: '',
        f_comment: {
          user: '',
          details: '',
          time: ''
        }
      }],
      yb_uid: '11364041',
      page: 1,
    }
  },
  created() {
    Bus.$on("pageNum", msg => {
      this.pageNum = msg
    })
    Bus.$on("pageInfos", msg => {
      this.pageInfos = msg
      console.log(msg)
    })
  },
  methods: {
    refresh(loaded) {
      console.log('下拉事件')
      setTimeout(() => {
        this.isRouterAlive = false
        this.$nextTick(() => (this.isRouterAlive = true))
        loaded('done')
      }, 400)
    },
    fetchdata(loaded) {
      console.log('上拉事件')
      let url = 'http://yb.upc.edu.cn/forum/getAll'
      this.page ++
      let data = {
        user: this.yb_uid,
        page: this.page
      }
      this.$axios.post(url, data).then(rsp=>{
        console.log(rsp.data.info)
        if (rsp.data.info) {
          let infos = this.pageInfos.concat(rsp.data.info)
          this.pageInfos = infos
        }
        setTimeout(() => {
          loaded('done')
        }, 200)
      })
    },
    goToPosts (PostsId, postinfo) {
      this.$router.push({
        path:'/posts',
        query:{
          id: PostsId,
          user: this.yb_uid,
          postsinfo: postinfo
        }
      })
    }
  },
  watch: {
    pageNum (val, oldval) {
      if (val == 1) {
        this.isopen = false
      } else if (val == 2) {
        this.isopen = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
	width: 100%;
  height: 81%;
  background: white;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.message-container {
  margin-left: 5%;
  width: 90%;
  min-height: 4rem;
  border-bottom: 1px lightgrey solid;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
}
.user-container {
  width: 100%;
  height: 5rem;
}
.avatar {
  width: 15%;
  height: 4rem;
}
.avatar img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}
.nick-time {
  margin-left: 5%;
  width: 60%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nick-time div {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.nickname {
  font-size: 1rem;
  color: #666666;
}
.time {
  font-size: 0.8rem;
  color: #B3B3B3;
}
.isopen-container {
  width: 20%;
  height: 100%;
}
.isopen {
  width: 100%;
  height: 100%;
}
.isopen img {
  width: 80%;
}
.theme-container {
  width: 100%;
  height: 4.7rem;
}
.theme {
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.first-comment-container {
  width: 100%;
  height: 6rem;
}
.first-comment-frame {
  width: 100%;
  height: 60%;
  border: 1px lightgrey solid;
  border-radius: 8px;
}
.first-comment {
  width: 95%;
  height: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #B2B2B2;
}
.first-comment span {
  color: black;
}
.inner-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
