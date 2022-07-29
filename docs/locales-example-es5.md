```html
<script type="text/javascript">
  window.REACT_INPUTS_VALIDATION = {
    customErrorMessage: {
      "my-own-locale": {...},//structure must follow below
      "en-US": {
        textbox: {
          empty: function empty(name) {
            return name + " cannot be empty(custom message)";
          },
          invalid: function invalid(name) {
            return name + " invalid format(custom message)";
          },
          invalidFormat: function invalidFormat(name) {
            return name + " is not a number(custom message)";
          },
          inBetween: function inBetween(name) {
            return function (min) {
              return function (max) {
                return name + " must be " + min + "-" + max + "(custom message)";
              };
            };
          },
          lessThan: function lessThan(name) {
            return function (min) {
              return name + " cannot less than " + min + "(custom message)";
            };
          },
          greaterThan: function greaterThan(name) {
            return function (max) {
              return name + " cannot greater than " + max + "(custom message)";
            };
          },
          lengthEqual: function lengthEqual(name) {
            return function (length) {
              return name + " length must be " + length + "(custom message)";
            };
          },
          twoInputsNotEqual: function twoInputsNotEqual() {
            return "two inputs are not equal(custom message)";
          }
        },
        radiobox: {
          empty: function empty(name) {
            return "Please choose one " + name + "(custom message)";
          }
        },
        checkbox: {
          unchecked: function unchecked(name) {
            return name + " must be checked(custom message)";
          }
        },
        select: {
          empty: function empty(name) {
            return "Please select a " + name + "(custom message)";
          }
        },
        textarea: {
          empty: function empty(name) {
            return name + " cannot be empty(custom message)";
          },
          invalid: function invalid(name) {
            return name + " invalid format(custom message)";
          },
          invalidFormat: function invalidFormat(name) {
            return name + " is not a number(custom message)";
          },
          inBetween: function inBetween(name) {
            return function (min) {
              return function (max) {
                return name + " must be " + min + "-" + max + "(custom message)";
              };
            };
          },
          lessThan: function lessThan(name) {
            return function (min) {
              return name + " cannot less than " + min + "(custom message)";
            };
          },
          greaterThan: function greaterThan(name) {
            return function (max) {
              return name + " cannot greater than " + max + "(custom message)";
            };
          },
          lengthEqual: function lengthEqual(name) {
            return function (length) {
              return name + " length must be " + length + "(custom message)";
            };
          },
          twoInputsNotEqual: function twoInputsNotEqual() {
            return "two inputs are not equal(custom message)";
          }
        }
      },
      "zh-CN": {
        textbox: {
          empty: function empty(name) {
            return name + "不能为空";
          },
          invalid: function invalid(name) {
            return name + "格式有误";
          },
          invalidFormat: function invalidFormat(name) {
            return name + "不是数字";
          },
          inBetween: function inBetween(name) {
            return function (min) {
              return function (max) {
                return name + "必须在" + min + "-" + max + "之间";
              };
            };
          },
          lessThan: function lessThan(name) {
            return function (min) {
              return name + "不可少于" + min;
            };
          },
          greaterThan: function greaterThan(name) {
            return function (max) {
              return name + "不可大于" + max;
            };
          },
          lengthEqual: function lengthEqual(name) {
            return function (length) {
              return name + "长度必须为" + length;
            };
          },
          twoInputsNotEqual: function twoInputsNotEqual() {
            return "两次输入不一致";
          }
        },
        radiobox: {
          empty: function empty(name) {
            return "请选择一个" + name;
          }
        },
        checkbox: {
          unchecked: function unchecked(name) {
            return name + "必须勾选";
          }
        },
        select: {
          empty: function empty(name) {
            return "请选择一个" + name;
          }
        },
        textarea: {
          empty: function empty(name) {
            return name + "不能为空";
          },
          invalid: function invalid(name) {
            return name + "格式有误";
          },
          invalidFormat: function invalidFormat(name) {
            return name + "不是数字";
          },
          inBetween: function inBetween(name) {
            return function (min) {
              return function (max) {
                return name + "必须在" + min + "-" + max + "之间";
              };
            };
          },
          lessThan: function lessThan(name) {
            return function (min) {
              return name + "不可少于" + min;
            };
          },
          greaterThan: function greaterThan(name) {
            return function (max) {
              return name + "不可大于" + max;
            };
          },
          lengthEqual: function lengthEqual(name) {
            return function (length) {
              return name + "长度必须为" + length;
            };
          },
          twoInputsNotEqual: function twoInputsNotEqual() {
            return "两次输入不一致";
          }
        }
      }
    }
  };
</script>
<script type="text/javascript" src="/js/index.js"></script></body>
```