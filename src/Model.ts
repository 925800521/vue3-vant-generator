/**
 * @description: 画好的组件数据格式
 * @param {*}
 * @return {*}
 */
export interface IDoneComponentList {
  id: string,
  type: string,
  title: string,
  span: number,
  offset: number,
  extend_attr: any,
  attr_dic: any,
  style: IStyle
}

/**
 * @description: 数据结构
 * @param {*} basicsComponentList 常规组件列表
 * @param {*} drawComponentList 绘制组件列表
 * @param {*} chartComponentList 图表组件列表
 * @return {*}
 */
export interface ILeftTools {
  basicsComponentList?: Array<IComponentInfo>,
  drawComponentList?: Array<IComponentInfo>,
  chartComponentList?: Array<IComponentInfo>
}
/**
 * @description: 组件信息格式
 * @param {*} type  组件类型
 * @param {*} title 组件显示标题
 * @param {*} panel_class 面板显示分类
 * @param {*} template 组件渲染模板
 * @param {*} props 组件传值
 * @param {*} extend_attr 组件拓展属性
 * @param {*} create_type 组件创建类型
 * @param {*} span 栅格大小
 * @param {*} offset 偏移
 * @return {*}
 */
export interface IComponentInfo {
  type: string,
  title: string,
  span: number,
  offset: number,
  panel_class: string,
  template: string,//
  props: Array<string>,
  extend_attr: any,
  attr_dic: any,
  style: IStyle
}
export interface IStyle {
  width: string,
  height: string,
  display: string
}