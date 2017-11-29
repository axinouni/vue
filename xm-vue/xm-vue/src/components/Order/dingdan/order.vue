<template>
    <div class="content">
        <selectlist />
        <tablelist />
        <pagelist />
    </div>
</template>
<script>
import selectlist from './orderlist/selectlist';
import tablelist from './orderlist/tablelist';
import pagelist from './orderlist/pagelist';
export default {
    name: 'order',
    components: {
        selectlist,
        tablelist,
        pagelist
    }
};
</script>
<style>
.content{
    height: 100%;
}
</style>

