<template>
  <div class="main-container dy_flex">
    <textarea autofocus id="byDY" v-model="details" placeholder="提供你的疑惑、问题相关的详细信息，以便老师能更好的帮助到你">
    </textarea>
    <div class="submit-container inner-center">
      <input type="button" id="DY_button" value="确认提问" @click="submitQuiz">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      details: '',
      user: '',
    }
  },
  created(){
    //this.user = sessionStorage.getItem('userId')
    this.user = '2323'
  },
  methods:{
    submitQuiz () {
      let url = 'http://yb.upc.edu.cn/forum/quest'
      let data = {
        user: this.user,
        details: this.details
      }
      this.$axios.post(url, data).then(rsp=>{
        console.log(rsp)
        if (rsp.data.code == 1) {
          alert('提问成功！')
        }
      })
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#byDY{
  width: 90%;
  height: 80%;
  margin-top: 5%;
  padding: 4%;
  border: 1px solid #0e0d0d;
  outline: none;
  border-radius:15px; 
  font-size: 1.4rem;
  box-sizing: border-box;
}
.submit-container {
  width: 100%;
  height: 15%;
  position: fixed;
  bottom: 0;
}
#DY_button{
  display:block;
  width:90%;
  height: 50%;
  outline: none;
  font-size: 1.4rem;
  border: 1px #666666 solid;
  border-radius: 8px;
  background: none;
}
/*.dy_flex{
  display: flex;
  flex-direction: column;
}*/
.inner-center {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
