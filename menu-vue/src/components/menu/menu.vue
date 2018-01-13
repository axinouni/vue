<template>
    <div class="detailPage">
      <div class="header">
          <h4>{{detailData.name}}</h4>
      </div>
      <div class="goods">
            <div class="menu-wrapper" ref="menuwrapper">
                <ul>
                    <li v-for="(item,index) in datas.goods" class="menu-item" :class="{'current':currentIndex === index}" @click="selectMenu(index,$event)" :key='index'>
                        <span class="text">
                            {{item.name}}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrapper" ref="foodwrapper">
                <ul>
                    <li v-for="(item,index) in datas.goods" class="food-list food-list-hook" :key='index'>
                        <h2 class="title" :class="{'current':currentIndex === index}">{{item.name}}</h2>
                        <ul>
                            <li v-for="(food,index) in item.children" class="food-item" :key='index'>
                                <div class="icon"></div>
                                <div class="content">
                                    <h2 class="name">{{food.name}}</h2>
                                    <p class="desc">{{food.description}}</p>
                                    <div class="extra">
                                        <span class="count">月售{{food.month_sales}}份</span>
                                        <span>好评率{{food.favorableRate}}%</span>
                                    </div>
                                    <div class="price">
                                        <span class="now">￥{{food.price}}</span>
                                    </div>
                                    <div class="shopping">
                                        <b>-</b><input type="text" value='1' id="inp"><b>+</b>
                                    </div> 
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul> 
            </div>
            <div id="bottom">
                footer
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
import VueResource from 'vue-resource';
import MenuList from '../../assets/js/shop.js';
  export default {
    name: 'detailPage',
    data () {
      return {
        detailData: {},
        datas: {},
        listHeight:[],  
        scrollY:0,
      }
    },
    mounted () {
      this.detailData = this.$route.query
      this.datas = MenuList
    },
    created() {
        this.$nextTick(() => {
            this._initScroll();
            //计算高度
            this._calculateHeight();
        })
    },
    computed: {
        currentIndex() {
            for(let i = 0; i < this.listHeight.length; i++) {
                //判断当currentIndex在height1和height2之间的时候显示
                let height1 = this.listHeight[i];
                let height2 = this.listHeight[i + 1];
                //          console.log('height1:'+height1+','+'height2:'+height2)
                //最后一个区间没有height2
                if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                    return i;
                }
            }
            return 0;
        }
    },
    methods: {
        selectMenu(index, event) {
            //      自己默认派发事件时候(BScroll),_constructed被置为true,但是浏览器原生并没有这个属性
            if(!event._constructed) {
                return;
            }
            //运用BScroll接口，滚动到相应位置
            let foodList = this.$refs.foodwrapper.getElementsByClassName('food-list-hook');
            //获取对应元素的列表
            let el = foodList[index];
            this.foodScroll.scrollToElement(el, 300);
        },
        _initScroll() {
            this.meunScroll = new BScroll(this.$refs.menuwrapper, {
                click: true,
                scrollY: true
            });
            this.foodScroll = new BScroll(this.$refs.foodwrapper, {
                click: true,
                //探针作用，实时监测滚动位置
                probeType: 3,
                scrollY: true
            });
            //设置监听滚动位置
            this.foodScroll.on('scroll', (pos) => {
                //scrollY接收变量
                this.scrollY = Math.abs(Math.round(pos.y));
            })
        },
        _calculateHeight() {
            let foodList = this.$refs.foodwrapper.getElementsByClassName('food-list-hook');
            let height = 0;
            //把第一个高度送入数组
            this.listHeight.push(height);
            //通过循环foodList下的dom结构，将每一个li的高度依次送入数组
            for(let i = 0; i < foodList.length; i++) {
                let item = foodList[i]
                height += item.clientHeight
                this.listHeight.push(height);
            }
        },
    }
  }
</script>
<style scoped>
#bottom{
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    background: skyblue;
}
.shopping{
    float: right;
    margin-top: -18px;
    margin-right: 15px;
}
.shopping #inp{
    width: 20px;
    outline: none;
    border: none;
    border: 1px solid #ccc;
    text-align: center;
}
.detailPage{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.header{
    width:100%;
    height:70px;
    line-height:70px;
    text-indent: 2em;
    font-size:24px;
    color:#fff;
    background:hotpink;
}
.header h4{
    font-size: 20px;
}
.goods {
    flex: 1;
    display: flex;
    overflow: hidden;
}
.goods .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    position: relative;
}
.goods .menu-wrapper .current {
    position: relative;
    z-index: 10;
    margin-top: -1px;
    background: #FFFFFF;
    font-weight: 700;
    font-size: 14px;
}
.goods .menu-wrapper .menu-item {
    display: table;
    height: 54px;
    width: 80px;
    line-height: 14px;
    padding: 0 12px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    box-sizing: border-box;
}
.goods .menu-wrapper .menu-item .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    -webkit-background-size: 12px 12px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    vertical-align: top;
}
.goods .menu-wrapper .menu-item .text {
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    font-size: 12px;
    text-align: center;
}
.goods .foods-wrapper {
    flex: 1;
}
.goods .foods-wrapper .title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147, 153, 159);
    background: #F3F5F7;
}
.goods .foods-wrapper .current {
    color: #42B983;
    font-size: 14px;
    transition: all .5s;
    line-height: 27px;
}
.goods .foods-wrapper .food-item {
    display: flex;
    margin: 18px 0 18px 0;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    padding-bottom: 18px;
}
.goods .foods-wrapper .food-item:last-child {
    border-bottom: 0px solid rgba(7, 17, 27, .1);
    margin-bottom: 0;
}
.goods .foods-wrapper .food-item .icon {
    flex: 0 0 57px;
    margin-right: 10px;
    margin-left: 10px;
    background:pink;
}
.goods .foods-wrapper .food-item .content {
    position: relative;
    flex: 1;
}
.goods .foods-wrapper .food-item .content .name {
    margin: 2px 0 8px 0;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7, 17, 27);
}
.goods .foods-wrapper .food-item .content .desc {
    margin-bottom: 8px;
    line-height: 10px;
    font-size: 10px;
    color: rgb(147, 153, 159);
}
.goods .foods-wrapper .food-item .content .extra {
    font-size: 10px;
    color: rgb(147, 153, 159);
    line-height: 10px;
}
.goods .foods-wrapper .food-item .content .extra .count {
    margin-right: 12px;
}
.goods .foods-wrapper .food-item .content .price {
    font-weight: 700;
    line-height: 24px;
}
.goods .foods-wrapper .food-item .content .price .now {
    margin-right: 8px;
    font-size: 14px;
    color: rgb(240, 20, 20);
}
.goods .foods-wrapper .food-item .content .price .old {
    text-decoration: line-through;
    font-size: 10px;
    color: rgb(147, 153, 159);
}
.goods .foods-wrapper .food-item .content .cartcontrol-wrapper {
    position: absolute;
    right: 6px;
    bottom: 12px;
}
</style>
