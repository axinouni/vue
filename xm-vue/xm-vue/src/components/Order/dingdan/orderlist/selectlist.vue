<template>
    <div class="sel">
        <el-form ref="form" :model="form" label-width="80px">
            订单状态 <el-select v-model="form.status" placeholder="请选择状态"  class="selectbox">
                <el-option label="未支付" :value="0"></el-option>
                <el-option label="已支付" :value="1"></el-option>
            </el-select>
            收货城市 <el-select v-model="form.city" placeholder="请选择活动区域"  class="selectbox">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            优惠方式 <el-select v-model="form.methods" placeholder="请选择活动区域"  class="selectbox">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            下单时间 <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0" class="selectbox">
            </el-date-picker>至
            <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0" class="selectbox">
            </el-date-picker>    
            <!-- </el-form-item> -->
            <!-- <el-form-item label=""> -->
            发货商家 <el-select v-model="form.shop" placeholder="请选择活动区域"  class="selectbox">
                    <el-option label="区域一" value="youhuijuan"></el-option>
                    <el-option label="区域二" value="bazhe"></el-option>
                </el-select>
            <!-- </el-form-item> -->
            <!-- <el-form-item label=""  class="selectbox"> -->
            关键字 <el-input v-model="form.txt" class="main"></el-input>
            <!-- </el-form-item> -->
            <el-form-item>
                <el-button type="primary" @click="onSubmit">搜索</el-button>
                <el-button>重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'selectlist',
    data () {
        return {
            form: {
                status: '',
                city: '',
                methods: '',
                date1: '',
                date2: '',
                shop: '',
                txt: ''
            },
            value1: '',
            value2: '',
            pickerOptions0: {
                disabledDate (time) {
                    return time.getTime() > Date.now();
                }
            }
        };
    },
    methods: {
        onSubmit () {
            this.searchState(this.form);
            this.orderSearch();
        },
        ...mapActions(['orderSearch', 'searchState'])
    }
};
</script>
<style>
.sel{
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    padding: 0 10px;
}
.el-form{
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: left;
    line-height: 40px;
}
.el-form-item{
    display: inline-block;
}
.el-form-item__content{
    display: inline-block;
    margin-left: 0 !important;
}
.el-form-item{
    margin-bottom: 0;
    margin-top: 20px;
}
.el-form-item{
    margin-bottom: -16px;
}
.el-button{
    margin-left: .2rem;
}
.selectbox{
    margin: 10px;
    max-width: 1.5rem;
    max-height: 0.3rem; 
}
.main{
    max-width: 1.5rem;
    max-height: 0.3rem;
    margin-left: 10px;
}
</style>


