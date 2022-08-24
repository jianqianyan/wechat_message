const params = {
  appid: 'wx6fdabaf859b68a85',
  secret: 'ae18951bc35346f740d2a0247b6c3574',
  touser: 'on70E56SAkoqDwJ0kAoE9ubVRxfs',
  template_id: 'BrDBgFCl-IHFkG5UzmHu2Vop2nI9-m9C0BkHSB6PlkY',
}

const listConfig = {
  data: {
    nowDate: {
      value: '今天是 2022/08/20 周天 ',
      color: '#57E6E2',
    },
    city: {
      value: '北京',
      color: '#9CA2A0',
    },
    low: {
      value: '29℃',
      color: '#7CD47D',
    },
    high: {
      value: '37℃',
      color: '#CBA476',
    },
    loveDate: {
      value: '999',
      color: '#AEC5C8',
    },

    txt: {
      value: '我习惯在包里藏一瓶百无聊赖，打发人间的白云和苍狗设计睡着的未来',
      color: '#3C4244',
    },
  },
}

/* 上述代码是需要自定义的配置项 */
function verifyEmpty() {
  var flag = ''
  for (const key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      if (!params[key]) {
        flag = key
        break
      }
    }
  }
  return flag
}

// 校验为空
if (verifyEmpty()) {
  console.error(
    '警告：请完善 “/src/config/config.js中的配置项: ' +
      verifyEmpty() +
      '”的内容,再执行代码！'
  )
  process.exit(0)
}

module.exports = {
  params,
  listConfig,
}
