export const componentsConfigJson =
    [
        {
            "type": "Button",
            "title": "按钮",
            "panel_class": "basics",
            "span": 8,
            "offset": 0,
            "style": {
                "width": "25%",
                "height": "50px",
                "display": "flex"
            },
            "template": "<van-button{component_template_insertstr}>{{prop_data.extend_attr.button_text.val}}</van-button>",
            "props": ["prop_data"],
            "extend_attr": {
                "button_text": {
                    "title": "按钮内容",
                    "val": "按钮",
                    "type": "textinputbox"
                },
                "type": {
                    "title": "按钮类型",
                    "val": {
                        "select_val": "primary",
                        "selectgroup": [
                            {
                                "value": "primary",
                                "label": "主要按钮"
                            },
                            {
                                "value": "success",
                                "label": "成功按钮"
                            },
                            {
                                "value": "default",
                                "label": "默认按钮"
                            }, {
                                "value": "warning",
                                "label": "警告按钮"
                            }, {
                                "value": "danger",
                                "label": "危险按钮"
                            }
                        ]
                    },
                    "type": "select"
                },
                "plain": {
                    "title": "是否为朴素按钮",
                    "val": {
                        "select_val": "",
                        "ridiogroup": [
                            {
                                "value": "plain",
                                "label": "是"
                            },
                            {
                                "value": "",
                                "label": "否"
                            }
                        ]
                    },
                    "type": "radiogroup"
                },
                "hairline": {
                    "title": "是否展示细边框",
                    "val": {
                        "select_val": "",
                        "ridiogroup": [
                            {
                                "value": "hairline",
                                "label": "是"
                            },
                            {
                                "value": "",
                                "label": "否"
                            }
                        ]
                    },
                    "type": "radiogroup"
                },
                "disabled": {
                    "title": "是否禁用",
                    "val": {
                        "select_val": "",
                        "ridiogroup": [
                            {
                                "value": "disabled",
                                "label": "是"
                            },
                            {
                                "value": "",
                                "label": "否"
                            }
                        ]
                    },
                    "type": "radiogroup"
                },
                "loading": {
                    "title": "是否加载状态",
                    "val": {
                        "select_val": "",
                        "ridiogroup": [
                            {
                                "value": "loading",
                                "label": "是"
                            },
                            {
                                "value": "",
                                "label": "否"
                            }
                        ]
                    },
                    "type": "radiogroup"
                },
                "loading_type": {
                    "title": "加载时图标",
                    "val": {
                        "select_val": "spinner",
                        "selectgroup": [
                            {
                                "value": "spinner",
                                "label": "spinner"
                            },
                            {
                                "value": "",
                                "label": "无"
                            }
                        ]
                    },
                    "type": "select"
                },
                "loading_text": {
                    "title": "加载状态文字",
                    "val": "加载中...",
                    "type": "textinputbox"
                },
                "shape": {
                    "title": "按钮形状",
                    "val": {
                        "select_val": "square",
                        "selectgroup": [
                            {
                                "value": "round",
                                "label": "圆形按钮"
                            },
                            {
                                "value": "square",
                                "label": "方形按钮"
                            }
                        ]
                    },
                    "type": "select"
                },
                "icon": {
                    "title": "按钮图标",
                    "val": "plus",
                    "type": "textinputbox"
                },
                "size": {
                    "title": "按钮尺寸",
                    "val": {
                        "select_val": "normal",
                        "selectgroup": [
                            {
                                "value": "large",
                                "label": "大号按钮"
                            },
                            {
                                "value": "normal",
                                "label": "正常按钮"
                            },
                            {
                                "value": "small",
                                "label": "小型按钮"
                            }, {
                                "value": "mini",
                                "label": "迷你按钮"
                            }
                        ]
                    },
                    "type": "select"
                },
                "block": {
                    "title": "是否为块级按钮",
                    "val": {
                        "select_val": "",
                        "ridiogroup": [
                            {
                                "value": "block",
                                "label": "是"
                            },
                            {
                                "value": "",
                                "label": "否"
                            }
                        ]
                    },
                    "type": "radiogroup"
                },
                "navurl": {
                    "title": "页面导航",
                    "val": {
                        "select_val": "",
                        "select_key": "url",
                        "kvgroup": [{
                            "value": "url",
                            "label": "url跳转"
                        },
                        {
                            "value": "to",
                            "label": "路由跳转"
                        }]
                    },
                    "type": "select_textinputbox"
                },
                "color": {
                    "title": "按钮颜色",
                    "val": "",
                    "type": "colorinputbox"
                }
            },
            "attr_dic": [{
                "key": "type",
                "val": "extend_attr.type.val.select_val",
                "type": "string",
                "bindkey": true,
                "dynamickey": false
            },
            {
                "key": "plain",
                "val": "extend_attr.plain.val.select_val",
                "type": "string",
                "bindkey": false,
                "dynamickey": false
            },
            {
                "key": "hairline",
                "val": "extend_attr.hairline.val.select_val",
                "type": "string",
                "bindkey": false,
                "dynamickey": false
            },
            {
                "key": "disabled",
                "val": "extend_attr.disabled.val.select_val",
                "type": "string",
                "bindkey": false,
                "dynamickey": false
            },
            {
                "key": "loading",
                "val": "extend_attr.loading.val.select_val",
                "type": "string",
                "bindkey": false,
                "dynamickey": false
            },
            {
                "key": "loading-type",
                "val": "extend_attr.loading_type.val.select_val",
                "type": "string",
                "bindkey": true,
                "dynamickey": false
            },
            {
                "key": "loading-text",
                "val": "extend_attr.loading_text.val",
                "type": "string",
                "bindkey": true,
                "dynamickey": false
            },
            {
                "key": "shape",
                "val": "extend_attr.shape.val.select_val",
                "type": "string",
                "bindkey": false,
                "dynamickey": false
            },
            {
                "key": "icon",
                "val": "extend_attr.icon.val",
                "type": "string",
                "bindkey": true,
                "dynamickey": false
            },
            {
                "key": "size",
                "val": "extend_attr.size.val.select_val",
                "type": "string",
                "bindkey": true,
                "dynamickey": false
            },
            {
                "key": "block",
                "val": "extend_attr.block.val.select_val",
                "type": "string",
                "bindkey": false,
                "dynamickey": false
            },
            {
                "key": "extend_attr.navurl.val.select_key",
                "val": "extend_attr.navurl.val.select_val",
                "type": "string",
                "bindkey": true,
                "dynamickey": true
            }, {
                "key": "color",
                "val": "extend_attr.color.val",
                "type": "string",
                "bindkey": true,
                "dynamickey": false
            },
            ]
        },
        {
            "type": "Cell",
            "title": "cell单元格",
            "panel_class": "basics",
            "span": 18,
            "offset": 1,
            "style": {
                "width": "80%",
                "height": "60px",
                "display": "flex"
            },
            "template": "<van-cell{component_template_insertstr}></van-cell>",
            "props": ["prop_data"],
            "extend_attr": {
                "title": {
                    "title": "左侧标题",
                    "val": "单元格",
                    "type": "textinputbox"
                },
                "value": {
                    "title": "右侧内容",
                    "val": "内容",
                    "type": "textinputbox"
                },
                "label": {
                    "title": "描述信息",
                    "val": "描述信息",
                    "type": "textinputbox"
                },
                "size": {
                    "title": "单元格大小",
                    "val": {
                        "select_val": "",
                        "selectgroup": [
                            {
                                "value": "large",
                                "label": "large"
                            },
                            {
                                "value": "",
                                "label": "默认"
                            }
                        ]
                    },
                    "type": "select"
                },
                "icon": {
                    "title": "左侧图标",
                    "val": "location-o",
                    "type": "textinputbox"
                },
                "is-link": {
                    "title": "是否展示箭头",
                    "val": {
                        "select_val": "",
                        "ridiogroup": [
                            {
                                "value": "is-link",
                                "label": "是"
                            },
                            {
                                "value": "",
                                "label": "否"
                            }
                        ]
                    },
                    "type": "radiogroup"
                },
                "arrowdirection": {
                    "title": "箭头方向",
                    "val": {
                        "select_val": "",
                        "selectgroup": [
                            {
                                "value": "left",
                                "label": "左"
                            },
                            {
                                "value": "",
                                "label": "右"
                            },
                            {
                                "value": "up",
                                "label": "上"
                            },
                            {
                                "value": "down",
                                "label": "下"
                            }
                        ]
                    },
                    "type": "select"
                },
            },
            "attr_dic": [
                {
                    "key": "title",
                    "val": "extend_attr.title.val",
                    "type": "string",
                    "bindkey": true,
                    "dynamickey": false
                },
                {
                    "key": "value",
                    "val": "extend_attr.value.val",
                    "type": "string",
                    "bindkey": true,
                    "dynamickey": false
                },
                {
                    "key": "label",
                    "val": "extend_attr.label.val",
                    "type": "string",
                    "bindkey": true,
                    "dynamickey": false
                },
                {
                    "key": "size",
                    "val": "extend_attr.size.val.select_val",
                    "type": "string",
                    "bindkey": true,
                    "dynamickey": false
                },
                {
                    "key": "icon",
                    "val": "extend_attr.icon.val",
                    "type": "string",
                    "bindkey": true,
                    "dynamickey": false
                },
                {
                    "key": "is-link",
                    "val": "extend_attr.is-link.val.select_val",
                    "type": "string",
                    "bindkey": false,
                    "dynamickey": false
                },
                {
                    "key": "arrow-direction",
                    "val": "extend_attr.arrowdirection.val.select_val",
                    "type": "string",
                    "bindkey": true,
                    "dynamickey": false
                }
            ]
        }];