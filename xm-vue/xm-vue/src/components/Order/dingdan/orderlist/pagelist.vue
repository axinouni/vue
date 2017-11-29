<template>
    <div class="block">
        <span class="demonstration"></span>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'pagelist',
    data () {
        return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            pickerOptions0: {
                disabledDate (time) {
                    return time.getTime() > Date.now();
                }
            }
        };
    },
    computed: {
        ...mapState({
            total: state => state.Order.total,
            currentPage: state => state.Order.conditions.pageIndex
        })
    },
    methods: {
        handleSizeChange (val) {
            this.orderSearch({pageNum: val});
        },
        handleCurrentChange (val) {
            this.orderSearch({pageIndex: val});
        },
        ...mapActions(['orderSearch'])
    }
};
</script>
<style>
.block{
    margin: 40px 0;
}
</style>


