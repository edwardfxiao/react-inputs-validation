# 4.9.10

- enable `hidden`, `disabled` props in OptionListItem for `<Select/>`

# 4.9.9

- `customStyleOptionListWrapper` for `<Select/>`

# 4.9.8

- `classNameInputBoxItem` for `<Checkbox/>`
- `title` and `ellipsis` for `<Select/>` option item

# 4.9.7

- fix bug of cached disabled in `<Select/>` handleOnItemClick

# 4.9.6

- Fix potential bug for `<Select/>`

# 4.9.5

- Remove `zh-CN` as an option to `validationOption.locale` in order to reduce size

# 4.9.4

- Add `decimalSeparator` to `<Textbox>` ```validationOption```. e.g. `decimalSeparator: ','` `'0.5' => '0,5'`

# 4.9.3

- Add `decimalSeparator` to `<Textbox>` ```validationOption```. e.g. `decimalSeparator: ','` `'0.5' => '0,5'`(forgot to compile)

# 4.9.2

- Update readme and for cdnjs updating

# 4.9.1

- Remove classname hash

# 4.9.0

- Update readme

# 4.8.9

- Fix 'undefined' classname for ```__container```

# 4.8.8

- Remove lib folder for github

# 4.8.7

- Update readme

# 4.8.6

- Update peerDependencies

# 4.8.5

- Update readme

# 4.8.4

- Update readme

# 4.8.3

- Minor fix for ```<Select/>```

# 4.8.2

- Minor fix for ```<Select/>```

# 4.8.1

- Add ```icon``` into ```<Select/>```'s ```optionList``` ```[{id: '1', name: 'Twin Peaks']``` => ```[{id: '1', name: 'Twin Peaks', icon: 'optional']```

# 4.8.0

- Replace ```classNameOptionListContainer``` with ```classNameOptionListWrapper``` and provide new ```classNameOptionListContainer``` & change className ```'options-container'``` to ```'options-wrapper'``` in ```<Select/>```

# 4.7.0

- Add ```shouldRenderMsgAsHtml``` to components ```validationOption```, in case you need to render html inside your ```messages``` as stated in issue [#29](https://github.com/edwardfxiao/react-inputs-validation/issues/29)
