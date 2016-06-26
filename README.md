# antd-enzyme

[![Build Status](https://travis-ci.org/yesmeck/antd-enzyme.svg?branch=master)](https://travis-ci.org/yesmeck/antd-enzyme)

[Enzyme](https://github.com/airbnb/enzyme) enhancement for [Ant Design](https://github.com/ant-design/ant-design) components.


## Basic Usage

```javascript
import test from 'ava'
import sinon from 'sinon'
import 'antd-enzyme'
import { mount } from 'enzyme'
import React from 'react'

test('app', t => {
  const handleChange = sinon.spy()
  const wrapper = mount(<SelectForm handleChange={handleChange} />)

  // Find antd's Select component which has a prop name="color"
  const select = wrapper.antd().find('Select', { name: 'color' })

  select.simulate('change', { target: { value: 'green' } })

  t.is(handleChange.firstCall.args[0], 'green')
})
```

## Supported components

* [Cascader](test/wrappers/CascaderWrapper.spec.js)
* [DatePicker](test/wrappers/DatePickerWrapper.spec.js)
* [Rate](test/wrappers/RateWrapper.spec.js)
* [Select](test/wrappers/SelectWrapper.spec.js)
* [Slider](test/wrappers/SliderWrapper.spec.js)
* [Switch](test/wrappers/SwitchWrapper.spec.js)
* [TimePicker](test/wrappers/TimePickerWrapper.spec.js)
