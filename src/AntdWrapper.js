import {
  SelectWrapper,
  DatePickerWrapper,
  RangePickerWrapper,
  CascaderWrapper,
  RateWrapper,
  SliderWrapper,
  SwitchWrapper,
  TreeSelectWrapper,
  TimePickerWrapper,
} from './wrappers'

export default class AntdWrapper {
  constructor(wrapper) {
    this.wrapper = wrapper
  }

  find(component, selector) {
    let ComponentWrapper
    switch (component) {
      case 'Select':
        ComponentWrapper = SelectWrapper
        break
      case 'DatePicker':
      case 'MonthPicker':
        ComponentWrapper = DatePickerWrapper
        break
      case 'RangePicker':
        ComponentWrapper = RangePickerWrapper
        break
      case 'Cascader':
        ComponentWrapper = CascaderWrapper
        break
      case 'Rate':
        ComponentWrapper = RateWrapper
        break
      case 'Slider':
        ComponentWrapper = SliderWrapper
        break
      case 'Switch':
        ComponentWrapper = SwitchWrapper
        break
      case 'TreeSelect':
        ComponentWrapper = TreeSelectWrapper
      case 'TimePicker':
        ComponentWrapper = TimePickerWrapper
        break
    }

    this.componentWrapper = new ComponentWrapper(
      new ComponentWrapper(this.wrapper, component).find(selector)
    )
    return this
  }

  simulate(...args) {
    this.componentWrapper.simulate(...args)
  }
}
