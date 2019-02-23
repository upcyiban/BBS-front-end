<template>
  <div class="main-container">
    <Header />
    <Body />
    <div class="toQuiz">
      <button @click="$router.push('/quiz')">
        我要提问
      </button>
    </div>
  </div>
</template>

<script>
import Header from './Index/Header.vue'
import Body from './Index/Body.vue'
import Bus from "../assets/eventBus.js"

export default {
  name: 'index',
  components: {
    Header: Header,
    Body: Body
  },
  data () {
    return {
      yb_uid: '113',
      pageinfos: [],
      pageNum: 1
    }
  },
  methods: {
    getPageInfos () {
      let url = 'http://yb.upc.edu.cn/forum/getAll'
      let data = {
        user: this.yb_uid,
        page: 1
      }
      if (this.pageNum == 2){
        url = 'http://yb.upc.edu.cn/forum/getSelf'
        data = {
          user: this.yb_uid
        }
      }
      this.$axios.post(url, data).then(rsp=>{
        console.log(rsp)
        Bus.$emit('pageInfos', rsp.data.info)
      })
    }
  },
  created () {
    Bus.$on("pageNum", msg => {
      this.pageNum = msg
    })
    var verify_request = this.$GetQueryString("verify_request")
    var yb_uid = this.$GetQueryString("yb_uid")
    sessionStorage.setItem("verify_request", verify_request)
    var APPID = '32eade4df8222ddb'
    var CALLBACK = 'http://f.yiban.cn/iapp306340'
    /*
    if (
      verify_request == -1 ||
      verify_request == "" ||
      verify_request == null
    ) {
      window.location.href =
        "https://openapi.yiban.cn/oauth/authorize?client_id=" +
        APPID +
        "&redirect_uri=" +
        CALLBACK +
        "&state=5050"
    } else {
      console.log(verify_request)
      sessionStorage.setItem('userId', '113')
      this.getPageInfos()
    }
    */
   this.getPageInfos()
  },
  mounted () {
    Bus.$emit('pageInfo', this.pageinfos)
  },
  watch: {
    pageNum (val, oldval) {
      this.getPageInfos()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background: lightgray;
}
.toQuiz {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 9%;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.toQuiz button {
  width: 90%;
  height: 90%;
  background: none;
  border: 1px black solid;
  outline: none;
  border-radius: 10px;
  font-size: 1.4rem;
}
</style>