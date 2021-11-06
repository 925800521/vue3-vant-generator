<script setup lang="ts">
import { Ref, ref, reactive } from 'vue';
import LeftToolBar from './LeftToolBar.vue';
import RightToolBar from './RightToolBar.vue';
import ComponentDynamic from './ComponentDynamic.vue';
import { ILeftTools, IComponentInfo, IDoneComponentList } from "../Model";
import { componentsConfigJson } from "../lib/componentsConfig"
defineProps<{ msg: string }>()
const config_json = ref(componentsConfigJson);
const vant_ref = ref<null | HTMLElement>(null);
//要创建的组件信息
const create_lefttool: IDoneComponentList = reactive({
  id: '',
  type: '',
  title: '',
  span: 0,
  offset: 0,
  extend_attr: null,
  attr_dic: null,
  style: { width: "100%", height: "100%", display: "flex" }
});
//选中的组件信息
const select_compontent = ref<IDoneComponentList | null>(null);
//创建好的组件列表
const doneComponentList = ref<Array<IDoneComponentList>>([]);
//要移动位置的组件id
const drag_start_componentid = ref('');
/**
 * 获取当前时间
 */
const getDateTime = () => {
  let now_date = new Date();
  return `${now_date.getHours()}:${now_date.getMinutes()}`;
};
/**
 * 设置要创建的组件信息
 */
const setCreatComponentInfo = (creatComponentInfo: IComponentInfo) => {
  create_lefttool.id = `${new Date().getTime()}`;
  ({ type: create_lefttool.type, title: create_lefttool.title, span: create_lefttool.span, offset: create_lefttool.offset, extend_attr: create_lefttool.extend_attr, attr_dic: create_lefttool.attr_dic, style: create_lefttool.style } = creatComponentInfo);
};
/**
 * @description: 从左侧工具栏拖动组件到画布触发的事件
 * @param {*}
 * @return {*}
 */
const dropEvent = (e: DragEvent) => {
  //当左侧工具栏拖动到此处时在画布上创建该组件
  if (Object.keys(create_lefttool).length < 1 || create_lefttool.id == '') {
    //未选择任何组件
    return;
  }
  //在鼠标位置创建当前组件
  const create_comp: IDoneComponentList = {
    ...create_lefttool,
    extend_attr: JSON.parse(JSON.stringify(create_lefttool.extend_attr)),
    attr_dic: JSON.parse(JSON.stringify(create_lefttool.attr_dic)),
    style: JSON.parse(JSON.stringify(create_lefttool.style)),
  }
  setAttr(create_comp);
  doneComponentList.value.push(create_comp);
  create_lefttool.id = '';
}
const dragStartEvent = (e: DragEvent) => {
  drag_start_componentid.value = select_compontent.value?.id ?? '';
  // drag_start_componentid.value ='666888'
}
const dragEnterEvent = (e: DragEvent) => {
  //dragenter和dragover一定要阻止浏览器默认行为 不然不会触发drop
  e.preventDefault();
}
const dragOverEvent = (e: DragEvent) => {
  //dragenter和dragover一定要阻止浏览器默认行为 不然不会触发drop
  e.preventDefault();
  //如果不是要移动元素 直接返回
  if (!drag_start_componentid.value) {
    return;
  }
  if ((e.target as any).id && (e.target as any).dataset?.move == 'true') {
    changeIndex(drag_start_componentid.value, (e.target as any).id);
  }
}
/**
 * 改变两个元素的位置
 */
const changeIndex = (move_id: string, target_id: string) => {
  if (move_id == target_id || !move_id || !target_id) {
    return;
  }
  //找到当前元素
  const move_object = doneComponentList.value.filter(f => f.id == move_id)[0];
  const target_object = doneComponentList.value.filter(f => f.id == target_id)[0]
  //找到当前元素的位置
  let move_index = doneComponentList.value.indexOf(move_object);
  let target_index = doneComponentList.value.indexOf(target_object);
  doneComponentList.value.splice(move_index, 1)
  doneComponentList.value.splice(target_index, 0, move_object);
}
//左侧工具栏列表
const left_tools: Ref<ILeftTools> = ref({
  basicsComponentList: config_json.value.filter(f => f.panel_class == 'basics'),
  drawComponentList: [],
  chartComponentList: []
});
const setAttr = (component: IDoneComponentList) => {
  // ({id:select_compontent.id,type:select_compontent.type,title:select_compontent.title,span:select_compontent.span,offset:select_compontent.offset,extend_attr:select_compontent.extend_attr}=component)
  select_compontent.value = component;
}
</script>

<template>
  <div class="navtop">
    <!-- <span>{{ doneComponentList }}</span> -->
  </div>
  <div class="content">
    <div class="navleft">
      <left-tool-bar :left_tools="left_tools" @setCreatComponentInfo="setCreatComponentInfo"></left-tool-bar>
    </div>
    <div class="fencha" ref="vant_ref">
      <span
        style="position: relative;left: -34%;top: 1.5%;font-size: 13px;"
      >{{ `${getDateTime()}` }}</span>
      <div
        class="canvas"
        @dragstart="dragStartEvent"
        @drop="dropEvent"
        @dragenter="dragEnterEvent"
        @dragover="dragOverEvent"
      >
        <div
          v-for="item in doneComponentList"
          draggable="true"
          style="cursor: move"
          @mousedown="setAttr(item)"
          :style="`width:${item.style.width};height:${item.style.height};display:${item.style.display};${select_compontent?.id == item.id ? 'border:1px solid #00bdff' : ''}`"
        >
          <component-dynamic
            :id="item.id"
            data-move="true"
            :component_template="config_json.filter(f => f.type == item.type)[0].template"
            :component_props="config_json.filter(f => f.type == item.type)[0].props"
            :component_attr="item"
            :span="item.span"
            :offset="item.offset"
          ></component-dynamic>
        </div>
      </div>
    </div>
    <div class="navright">
      <right-tool-bar
        :set_componentattr="select_compontent == null ? undefined : select_compontent"
      ></right-tool-bar>
    </div>
  </div>
</template>

<style scoped>
.navtop {
  width: 100%;
  height: 60px;
  border-bottom: solid 1px rgb(239, 239, 245);
}
.content {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
.content .navleft {
  width: 200px;
  height: 100%;
  margin-right: 0;
  /* border-left: solid 1px rgb(239, 239, 245); */
}
.content .fencha {
  width: 370px;
  height: 812px;
  background-image: url(/fencha.png);
  background-repeat: no-repeat;
  background-size: 100%;
  margin-left: 10rem;
  margin-right: 10rem;
  /* display: flex;
  flex-wrap: wrap; */
}
.content .canvas {
  width: 360px;
  height: 812px;
  margin-top: 1rem;
  margin-left: 1rem;
}
.content .navright {
  width: 200px;
  height: 100%;
  margin-left: 0;
  /*background-color: aqua;*/
}
</style>
