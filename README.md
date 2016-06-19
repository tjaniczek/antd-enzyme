# antd-enzyme

[enzyme](https://github.com/airbnb/enzyme) enhancer for [Ant Design](https://github.com/ant-design/ant-design) components.


# Basic Usage

```
import test from 'ava'
import sinon from 'sinon'
import 'antd-enzyme'
import { mount } from 'enzyme'
import React from 'react'

test('app', t => {
  const handleChange = sinon.spy()
  const wrapper = mount(<SelectForm handleChange={handleChange} />)

  const select = wrapper.antd().find('Select')

  select.simulate('change', { target: { value: 1 } })

  t.is(handleChange.firstCall.args[0], 1)
})
```
