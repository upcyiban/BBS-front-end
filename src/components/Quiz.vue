<template>
  <div class="main-container dy_flex">
    <textarea autofocus id="byDY" placeholder="
    
  提供你的疑惑、问题相关的详细信息，以便老师能更好的帮助到你">
    
    </textarea>
   
    <label><input type="radio" name="DY" class="DY_radio" checked="checked">公开  (所有人可见)</label>
<br><label><input type="radio" name="DY" class="DY_radio">私密  (问题以及回复仅提问者与老师可见)</label>
    
    <input type="button" id="DY_button" class="DY_radio dy_flex" value="确认提问">
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
  margin-top:6%;
  margin-left:5%; /*或者auto考虑到移动端不存在页面大小移动，建议使用固定百分比*/
  border: 5px solid #63B8FF;
  outline: none;
  border-radius:15px; 
  font-size: 1.5em;
  padding: 2px;
  box-sizing: border-box;
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
  color:#ffffff;
  background-color:#3385FF;
}
/*.dy_flex{
  display: flex;
  flex-direction: column;
}*/
</style>
