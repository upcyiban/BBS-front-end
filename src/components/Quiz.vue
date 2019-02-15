<template>
  <div class="main-container dy_flex">
    <textarea autofocus id="byDY" v-model="details" placeholder="提供你的疑惑、问题相关的详细信息，以便老师能更好的帮助到你">
    </textarea>
    <div class="radios-conatainer">
      <div class="option-container" v-for="i in 2" :key="i" @click="setprivate(i)">
        <div class="radio inner-center">
          <div class="radio-inner" :class="radioinner[i-1]">
          </div>
        </div>{{optionInfos[i-1]}}
      </div>
    </div>
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
      optionInfos: [' 公开  （所有人可见）', ' 私密  （问题以及回复仅提问者与老师可见）'],
      radioinner: ['beSelect', 'notbeSelect'],
      isopen: 1
    }
  },
  created(){
    //this.user = sessionStorage.getItem('userId')
    this.user = '2323'
  },
  methods:{
    setprivate (i) {
      console.log(11)
      this.isopen = (i + 1) % 2
      for (let n = 0;n < 2;n++) {
        this.$set(this.radioinner, n, 'notbeSelect')
        if (n == i-1) {
          this.$set(this.radioinner, n, 'beSelect')
        }
      }
    },
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
  height: 65%;
  margin-top: 5%;
  padding: 4%;
  border: 1px solid #666666;
  outline: none;
  border-radius:15px; 
  font-size: 1.6rem;
  box-sizing: border-box;
}
.radios-conatainer {
  width: 93%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.option-container {
  width: 100%;
  height: 30%;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
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
.submit-container {
  width: 100%;
  height: 10%;
}
#DY_button{
  display:block;
  width:90%;
  height: 90%;
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
