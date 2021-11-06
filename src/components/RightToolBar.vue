<script setup lang="ts">
import { reactive, ref } from "vue";
import { NForm, NFormItem, NInput, NInputNumber, NColorPicker, NRadioGroup, NSpace, NRadio, NSelect, NButton } from "naive-ui";
import { IDoneComponentList } from "../Model";

const props = defineProps({
  set_componentattr: {
    type: Object as () => IDoneComponentList,
    default: {}
  }
});
const displays = ref([
  {
    value: "flex",
    label: "块级"
  },
  {
    value: 'inline-flex',
    label: '行内'
  }])
</script>
<template>
  <div class="rightnav">
    <div style="margin-left: 2rem;margin-top: 1rem;">
      <n-form v-if="set_componentattr.id" size="small" label-placement="left">
        <n-form-item label="标识">
          <span>{{ props.set_componentattr.id }}</span>
        </n-form-item>
        <n-form-item label="类型">
          <span>{{ props.set_componentattr.type }}</span>
        </n-form-item>
        <n-form-item label="名称">
          <n-input placeholder="请输入名称" v-model:value="props.set_componentattr.title" />
        </n-form-item>
        <n-form-item label="宽度">
          <n-input placeholder="请输入宽度" v-model:value="props.set_componentattr.style.width" />
        </n-form-item>
        <n-form-item label="高度">
          <n-input placeholder="请输入高度" v-model:value="props.set_componentattr.style.height" />
        </n-form-item>
        <n-form-item label="元素">
          <n-radio-group v-model:value="props.set_componentattr.style.display" name="radiogroup">
            <n-space>
              <n-radio
                v-for="display in displays"
                :key="display.value"
                :value="display.value"
              >{{ display.label }}</n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
        <n-form-item label="位置">
          还没想好哪种方式好 要不然用边距试试?
        </n-form-item>
        <n-form-item v-for="item in props.set_componentattr.extend_attr" :label="item.title">
          <n-input-number v-if="item.type == 'numberinputbox'" v-model:value="item.val" />
          <n-color-picker
            v-else-if="item.type == 'colorinputbox'"
            :modes="['hex']"
            v-model:value="item.val"
          />
          <n-input
            v-else-if="item.type == 'textinputbox'"
            :placeholder="`请输入${item.title}`"
            v-model:value="item.val"
          />
          <n-input
            v-else-if="item.type == 'textareainputbox'"
            :placeholder="`请输入${item.title}`"
            type="textarea"
            v-model:value="item.val"
          />
          <n-radio-group v-model:value="item.val.select_val" v-else-if="item.type == 'radiogroup'">
            <n-space>
              <n-radio
                v-for="ridioitem in item.val.ridiogroup"
                :key="ridioitem.value"
                :value="ridioitem.value"
              >{{ ridioitem.label }}</n-radio>
            </n-space>
          </n-radio-group>
          <n-select
            v-else-if="item.type == 'select'"
            v-model:value="item.val.select_val"
            :options="item.val.selectgroup"
          />
          <span v-else-if="item.type == 'select_textinputbox'" style="display: flex;">
            <n-select
              v-model:value="item.val.select_key"
              :options="item.val.kvgroup"
              style="width: auto;height: auto;"
            />
            <n-input
              v-model:value="item.val.select_val"
              type="text"
              style="width: auto;height: auto;"
            />
          </span>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>
<style scoped>
.rightnav {
  width: 250px;
  height: 100%;
  overflow: auto;
}
.rightnav::-webkit-scrollbar {
  display: none;
}
</style>