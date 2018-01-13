<<template>
    <div class="navbar">
        <h3>我的订单 <span class='right'>查看全部 ></span></h3>
        <ul>
            <li v-for="(v, k) in fam" :key="k">
                <i :class="v.icon"></i>
                <span>{{v.txt}}</span>
            </li>
        </ul>
    </div>
</template>
<<script>
import axios from 'axios'
export default {
  data () {
    return {
      fam: []
    }
  },
  mounted () {
    axios.get('./myselfMock').then((res) => {
      this.fam = res.data.navbar
    })
  },
  name: 'navbar'
}
</script>
<style scoped>
.navbar{
    background: #fff;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 5px 10px;
}
.navbar h3{
    text-align: left;
    line-height: .3rem;
    border-bottom: 1px solid #efefef;
}
.right{
    float: right;
    font-size: .12rem;
    color: #B3B3B3;
    font-weight: initial;
}
.navbar ul{
    display: flex;
}
.navbar ul li{
    flex: 1;
    text-align: center;
}
.navbar ul li span{
    display: block;
    line-height: .2rem;
}
.navbar ul li i{
    margin-top: 10px;
    font-size: .16rem;
}
</style>
