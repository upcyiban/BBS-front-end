<template>
  <div class="main-container">
    <textarea id="byDY" placeholder="
    
  提供你的疑惑、问题相关的详细信息，以便老师能更好的帮助到你">
    
    </textarea>
    <br><br>
    <input type="radio" name="DY" class="DY_radio">公开  (所有人可见)<br>
    <input type="radio" name="DY" class="DY_radio">私密  (问题以及回复仅提问者与老师可见)
    <br>
    <input type="button" id="DY_button" class="DY_radio" value="确认提问">
  </div>

</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  created(){

  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  width: 100%;
  height: 100%;
}
*{margin:0;padding:0}
#byDY{
  display:block;
  width:90%;
  height:80%;
  margin-top:10%;
  margin-left:5%; /*或者auto考虑到移动端不存在页面大小移动，建议使用固定百分比*/
  border: solid 2px #63B8FF;
  font-size: 1.5em;
}
.DY_radio{
  margin-left:5%;
}
#DY_button{
  display:block;
  width:90%;
  height:5%;
  margin-top:5%;
  font-size: 1em;
}
</style>
