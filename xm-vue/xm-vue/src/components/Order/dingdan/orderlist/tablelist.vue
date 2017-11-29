<template>
    <div>
    <el-table
        border
        :data='tableData'
        style="width: 100%">
        <el-table-column
            v-for="(item, k) in tableHead"
            :key="k"
            :label="item[0]"
            :prop='k'
            width="150"
            align='center'
            >
        </el-table-column>
        <el-table-column
            label="商品管理"
            width="200"
            align='center'
            >
            <template slot-scope="scoped">
                <el-button type="primary" @click="edit('商品管理')">编辑</el-button>
                <el-button type="primary">删除</el-button>
            </template>
        </el-table-column>
        <el-table-column
            label="客服管理"
            width="260"
            align='center'
            >
            <template slot-scope="scoped">
                <el-button type="primary" @click="edit('客服管理')">编辑</el-button>
                <el-button type="primary">确认收货</el-button>
            </template>
        </el-table-column>
    </el-table>
        <Dialogs></Dialogs>
    </div>
</template>
<script>
import Dialogs from './dialog.vue';
import { mapState, mapActions } from 'vuex';
import { Order } from '@/assets/js/modules.js';
export default {
    name: 'tablelist',
    data () {
        return {
            tableHead: Order,
            isDialog: false
        };
    },
    methods: {
        handleClick (row) {
            console.log(row);
        },
        ...mapActions(['orderSearch', 'setedittype']),
        edit (type) {
            this.isDialog = !this.dialogs.istrue;
            this.setedittype({istrue: this.isDialog, type: type});
        }
    },
    computed: {
        ...mapState({
            tableData: state => state.Order.data,
            dialogs: state => state.Order.dialogs
        })
    },
    mounted () {
        this.orderSearch();
    },
    components: {
        Dialogs
    }
};
</script>
<style scoped>
.el-table{
    width: 95% !important;
    margin: 30px auto;
}
.cell{
    text-align: center;
}
</style>


