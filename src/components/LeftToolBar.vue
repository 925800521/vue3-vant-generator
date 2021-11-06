<script setup lang="ts">
import { Toast } from 'vant';
import { ref } from 'vue';
import { NCollapse, NCollapseItem } from "naive-ui";
import { ILeftTools,IComponentInfo} from "../Model";
const props = defineProps({
  left_tools: {
    type: Object as () => ILeftTools,
    default: []
  },
});
const emit = defineEmits(['setCreatComponentInfo'])
const dragStartEvent = (left_tool: IComponentInfo, e: DragEvent) => {
    //设置要创建的组件信息
    emit('setCreatComponentInfo', left_tool);
}
const dragEndEvent = (e: DragEvent) => {
    //拖动时记录拖动的组件信息
    if (e.dataTransfer?.dropEffect !== 'copy') {
        Toast.fail('请将组件拖入画布');
        //清空已选择的信息
        emit('setCreatComponentInfo', {});
        return;
    }
}
</script>
<template>
    <n-collapse default-expanded-names="1" accordion>
        <n-collapse-item title="基础组件" name="1" style="margin-top: 15px;">
            <ul>
                <li v-for="basics_item in props.left_tools.basicsComponentList"
                    class="item-li"
                    draggable="true"
                    @dragstart="dragStartEvent(basics_item, $event)"
                    @dragend="dragEndEvent($event)"
                >{{basics_item.title}}</li>
            </ul>
        </n-collapse-item>
        <n-collapse-item title="表单组件" name="2"></n-collapse-item>
        <n-collapse-item title="反馈组件" name="3"></n-collapse-item>
        <n-collapse-item title="展示组件" name="4"></n-collapse-item>
        <n-collapse-item title="导航组件" name="5"></n-collapse-item>
        <n-collapse-item title="业务组件" name="6"></n-collapse-item>
    </n-collapse>
</template>
<style scoped>
.item-li {
    margin-bottom: 5%;
    background-color: #f4f6fc;
    color: #000000;
    cursor: move;
    line-height: 30px;
}
</style>