<template>
  <div class="main-container">
    <div class="buttons-container">
      <div class="button-container" v-for="i in 2" :id="'button-' + i" :key="i" @click="switchIndex(i)">
        {{buttontitle[i-1]}}
      </div>
      <div class="toMessages" @click="$router.push('/messages')">
        <img :src="toMessages" alt="">
      </div>
    </div>
    <div class="header-line">
      <div v-for="i in 5" :key="i" :id="'line-' + i"></div>
    </div>
  </div>
</template>

<script>
import Bus from "../../assets/eventBus.js";
export default {
  name: 'index-Header',
  data () {
    return {
      buttontitle: ['问答', '我的'],
      Indexpage: 1,
      toMessages: require('../../assets/images/无未读消息.png'),
    }
  },
  methods: {
    switchIndex (page) {
      for (let i = 1;i <= 2;i ++) {
        let id = 'button-' + i
        let lineId = 'line-' + (2 * i)
        document.getElementById(id).style.color = 'gray'
        document.getElementById(id).style.fontWeight = 'normal'
        document.getElementById(lineId).style.background = 'lightgray'
        document.getElementById(lineId).style.height = '1px'
        if (i == page) {
          document.getElementById(id).style.color = 'black'
          document.getElementById(id).style.fontWeight = 'bold'
          document.getElementById(lineId).style.background = 'black'
          document.getElementById(lineId).style.height = '3px'
        }
      }
      Bus.$emit('pageNum', page)
    }
  },
  created () {
    
  },
  mounted () {
    this.switchIndex(this.Indexpage)
    for (let i = 1;i <= 5;i++) {
      let id = 'line-' + i
      let width = '5%'
      if (i % 4 == 1) {
        width = '37.5%'
      } else if (i % 4 == 3) {
        width = '15%'
      }
      document.getElementById(id).style.width = width
    }
    Bus.$emit('pageNum', this.Indexpage)
  },
  watch: {
    Indexpage (val, oldval) {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
	width: 100%;
  height: 10%;
  background: white;
  position: relative;
  top: 0;
  left: 0;
}
.buttons-container {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.button-container {
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: gray;
}
.toMessages {
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.toMessages img {
  width: 35%;
  height: auto;
}
.header-line {
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.header-line div {
  height: 1px;
  background: lightgray;
}
</style>
