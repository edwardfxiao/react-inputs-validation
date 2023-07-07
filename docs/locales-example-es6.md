```html
<script type="text/javascript">
  window.REACT_INPUTS_VALIDATION = {
    customErrorMessage: {
      "my-own-locale": {...},//structure must follow below
      "en-US": {
        textbox: {
          empty: name => `${name} cannot be empty(custom message)`,
          invalid: name => `${name} invalid format(custom message)`,
          invalidFormat: name => `${name} is not a number(custom message)`,
          inBetween: name => min => max => `${name} must be ${min}-${max}(custom message)`,
          lessThan: name => min => `${name} cannot less than ${min}(custom message)`,
          greaterThan: name => max => `${name} cannot greater than ${max}(custom message)`,
          lengthEqual: name => length => `${name} length must be ${length}(custom message)`,
          twoInputsNotEqual: () => `two inputs are not equal(custom message)`
        },
        radiobox: {
          empty: name => `Please choose one ${name}(custom message)`
        },
        checkbox: {
          unchecked: name => `${name} must be checked(custom message)`
        },
        select: {
          empty: name => `Please select a ${name}(custom message)`
        },
        textarea: {
          empty: name => `${name} cannot be empty(custom message)`,
          invalid: name => `${name} invalid format(custom message)`,
          invalidFormat: name => `${name} is not a number(custom message)`,
          inBetween: name => min => max => `${name} must be ${min}-${max}(custom message)`,
          lessThan: name => min => `${name} cannot less than ${min}(custom message)`,
          greaterThan: name => max => `${name} cannot greater than ${max}(custom message)`,
          lengthEqual: name => length => `${name} length must be ${length}(custom message)`,
          twoInputsNotEqual: () => `two inputs are not equal(custom message)`
        }
      },
      "zh-CN": {
        textbox: {
          empty: name => `${name}不能为空`,
          invalid: name => `${name}格式有误`,
          invalidFormat: name => `${name}不是数字`,
          inBetween: name => min => max => `${name}必须在${min}-${max}之间`,
          lessThan: name => min => `${name}不可少于${min}`,
          greaterThan: name => max => `${name}不可大于${max}`,
          lengthEqual: name => length => `${name}长度必须为${length}`,
          twoInputsNotEqual: () => `两次输入不一致`
        },
        radiobox: {
          empty: name => `必须勾选一个${name}`
        },
        checkbox: {
          unchecked: name => `${name}必须勾选`
        },
        select: {
          empty: name => `请选择一个${name}`
        },
        textarea: {
          empty: name => `${name}不能为空`,
          invalid: name => `${name}格式有误`,
          invalidFormat: name => `${name}不是数字`,
          inBetween: name => min => max => `${name}必须在${min}-${max}之间`,
          lessThan: name => min => `${name}不可少于${min}`,
          greaterThan: name => max => `${name}不可大于${max}`,
          lengthEqual: name => length => `${name}长度必须为${length}`,
          twoInputsNotEqual: () => `两次输入不一致`
        }
      }
    }
  };
</script>
<script type="text/javascript" src="/js/index.js"></script></body>
```