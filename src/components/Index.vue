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

export default {
  name: 'index',
  components: {
    Header: Header,
    Body: Body
  },
  methods: {
  },
  data () {
    return {

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
  height: 10%;
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