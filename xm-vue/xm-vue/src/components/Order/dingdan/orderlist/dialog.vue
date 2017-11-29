<template>
    <el-dialog
        title="提示"
        :visible.sync="dialogs.istrue"
        width="30%"
        :before-close="handleClose">
        <span>{{dialogs.type}}</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible">取 消</el-button>
            <el-button type="primary" @click="dialogVisible">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'dialog',
    computed: {
        ...mapState({
            dialogs: state => state.Order.dialogs
        })
    },
    methods: {
        handleClose (done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        ...mapActions(['setedittype']),
        dialogVisible () {
            this.setedittype({istrue: false});
        }
    }
};
</script>
<style>

</style>

