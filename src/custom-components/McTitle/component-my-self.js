const myJson = {
    "label": "新增组件",
    "icon": "icon-zujian",
    "fields": {
      "标题": { // 建议用英文
        "label": "标题",
        "type": "string",
        "value": "MyTitle",
        "options": {
          "placeholder": "请输入标题"
        }
      },
      "布局选择": {
        "label": "布局选择",
        "type": "select",
        "value": "1",
        "data": [
          {
            "id": "1647138448Dv7P",
            "label": "居左",
            "value": "1"
          },
          {
            "id": "1647138458P2Kn",
            "label": "居中",
            "value": "2"
          },
          {
            "id": "1647138473raM2",
            "label": "居右",
            "value": "3"
          }
        ]
      },
      "标题样式": {
        "label": "标题样式",
        "type": "object",
        "child": {
          "标题字体": {
            "label": "标题字体",
            "type": "number",
            "value": 20,
            "options": {
              "min": 10,
              "max": 50
            }
          },
          "标题颜色": {
            "label": "标题颜色",
            "type": "color",
            "value": "#766A6A"
          }
        }
      }
    }
  }