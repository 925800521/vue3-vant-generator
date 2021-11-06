<script setup lang="ts">
import { reactive, ref, createApp, markRaw, provide, watch, shallowRef, computed } from "vue";
import { IDoneComponentList } from "../Model";

const props = defineProps({
    component_template: {
        type: String as () => any,
        default: ''
    },
    component_props: {
        type: Array as () => Array<any>,
        default: ''
    },
    component_attr: {
        type: Object as () => IDoneComponentList,
        default: {}
    },
    span: {
        type: Number,
        default: 8
    },
    offset: {
        type: Number,
        default: 0
    }
});
//根据对象深度取出对象实际值
const temp_deep = ref<any>("");
//计算要插入到模板中的字符串
const component_template_insertstr = computed(() => {
    let tempstr = "";
    ((props.component_attr as any)?.attr_dic as Array<any>)?.forEach(f => {
        temp_deep.value = props.component_attr;
        (f.val as string).split('.').forEach(f => {
            temp_deep.value = temp_deep.value[f];
        });
        //判断当前val是否存在
        if (!temp_deep.value) {
            return;
        }
        if (f.bindkey) {
            //判断是否为动态key 是则找出并赋值
            let temp_key = f.key
            if (f.dynamickey) {
                temp_key = props.component_attr;
                (f.key as string).split('.').forEach(f => {
                    temp_key = temp_key[f];
                });
            }
            tempstr += ` :${temp_key}=prop_data.${f.val}`
        }
        else {
            tempstr += ` ${temp_deep.value}`
        }

    });
    return tempstr;
}
);
//计算替换完占位符的字符串
const templatestr = computed(() => props.component_template.replace("{component_template_insertstr}", component_template_insertstr.value))
//计算要生成的组件信息
const component_info = computed(() => {
    return {
        template: templatestr.value,
        props: ['prop_data']
    }
});
</script>

<template>
    <component ref="vant_ref" :is="component_info" :prop_data="props.component_attr"></component>
</template>
<style scoped>
</style>

