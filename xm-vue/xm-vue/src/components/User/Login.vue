<template>
  <div id='particles-js' class="login">
    <el-form class="demo-ruleForm" ref="ele">
        <h1>Wecash Mall</h1>
        <el-form-item prop='username' label="用户名">
            <el-input type="text" @focus="foc(0)" @blur="blr(0)" v-model='username'></el-input>
            <p id="please">请输入用户名</p>
        </el-form-item>
        <el-form-item prop="pwd" label="密码">
            <el-input type="password" @focus="foc(1)" @blur='blr(1)' v-model='pwd'></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import axios from 'axios';
export default {
    name: 'login',
    data () {
        return {
            pwd: '',
            username: '',
            dynamicValidateForm: {
                value: '',
                username: '',
                pwd: ''
            }
        };
    },
    mounted () {
        particlesJS.load('particles-js', '../../../static/data/particles.json', function () {
            console.log('callback - particles.js config loaded');
        });
    },
    methods: {
        foc (index) {
            // 获取焦点
            this.$refs.ele.$children[index].$el.children[0].className += ' pos';
        },
        blr (index) {
            // 失去焦点
            var inner = document.getElementsByClassName('el-input__inner')[index].value;
            // inner中有值的时候不添加样式 如果直接点击登录第一个显示下划线为红色并且提示请输入用户名
            if (inner !== '') {
                this.$refs.ele.$children[index].$el.children[0].className += ' pos';
                var please = document.getElementById('please');
                please.style.display = 'none';
            } else {
                this.$refs.ele.$children[index].$el.children[0].className = 'el-form-item__label';
            }
        },
        login () {
            // 点击登录
            var inner = document.getElementsByClassName('el-input__inner');
            for (var i = 0; i < inner.length; i++) {
                if (inner[i].value === '') {
                    var please = document.getElementById('please');
                    please.style.display = 'block';
                }
            };
            if (inner === '') {
                console.log(1);
            };
            this.$http.post('http://localhost:8082/login', {
                method: 'POST',
                body: 'username=' + this.username + '&pwd=' + this.pwd
            }).then((res) => {
                this.$router.push('/home');
                if (!window.localStorage) {
                    console.log('yes');
                    return false;
                } else {
                    let storage = window.localStorage;
                    storage.username = res.username;
                }
                // if (this.username === res.username && this.pwd === res.pwd) {
                //     this.$router.push('/home');
                //     this.$store.dispatch('user', res.username);
                // } else {
                //     console.log('error');
                // }
            });
        }
    }
};
</script>
<style>
.login{
    width: 100%;
    height: 100%;
    background: url(../../assets/images/bg2.jpg) no-repeat;
    overflow: hidden;
    background-size: 100% 100%;
}
.demo-ruleForm h1{
    line-height: .5rem;
    color: #efefef;
    font-weight: bolder;
    text-align: center;
}
.login .demo-ruleForm{
    width: 300px;
    height: 220px;
    background: rgba(0, 0, 0, .5);
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -110px;
    padding: 25px;
    border-radius: 5px;
}
.demo-ruleForm .el-form-item{
    position: relative;
}
.el-form-item__label{
    position: absolute;
    left: 36px;
    z-index: 10;
    top: 5px;
    font-size: .14rem;
}
.demo-ruleForm .el-input{
    width: 80%;
    margin: 5px auto;
}
.demo-ruleForm .el-button--primary{
    width: 80%;
}
.pos{
    position: absolute;
    top: -10px;
    font-size: 12px;
    color: aqua;
}
.demo-ruleForm .el-input__inner{
    background: transparent;
    border-width: 0;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
}
#please{
    position: absolute;
    top: 40px;
    left: 38%;
    color: red;
    font-size: .12rem;
    display: none;
}
.el-form-item__error{
    left: 35%;
}
</style>

