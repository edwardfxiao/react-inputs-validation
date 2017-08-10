# react-inputs-validation

# Event & Usage
### Select
|  Props                            |                 |  Type            |  Description                                                                                               |  Default|
|---                                |---              |---               |---                                                                                                         |---      |
|options                            |<h4>Required</h4>|Array of Object(s)|select option list [{id: "1", name: "title 1"}, {id: "2", name: "title 2"}]                                 |[]       |
|id                                 |Optional         |String            |                                                                                                            |""       |
|name                               |Optional         |String            |                                                                                                            |""       |
|value                              |Optional         |String            |                                                                                                            |""       |
|disabled                           |Optional         |Bool              |                                                                                                            |false    |
|<h4>validate</h4>                  |Optional         |Bool              |                                                                                                            |false    |
|<h4>validationgCallback</h4>       |Optional         |Func              |                                                                                                            |none     |
|classNameSelect                    |Optional         |String            |                                                                                                            |""       |
|classNameWrapper                   |Optional         |String            |                                                                                                            |""       |
|classNameContainer                 |Optional         |String            |                                                                                                            |""       |
|classNameSelectOptionsContainer    |Optional         |String            |                                                                                                            |""       |
|classNameSelectOptionsItem         |Optional         |String            |                                                                                                            |""       |
|customStyleSelect                  |Optional         |Object            |                                                                                                            |{}       |
|customStyleWrapper                 |Optional         |Object            |                                                                                                            |{}       |
|customStyleContainer               |Optional         |Object            |                                                                                                            |{}       |
|customStyleSelectOptionsContainer  |Optional         |Object            |                                                                                                            |{}       |
|customStyleSelectOptionsItem       |Optional         |Object            |                                                                                                            |{}       |
|<h4>onBlur</h4>                    |Optional         |Func              |                                                                                                            |none     |
|<h4>onChange</h4>                  |Optional         |Func              |                                                                                                            |()=>{}   |
|onFocus                            |Optional         |Func              |                                                                                                            |none     |
|onClick                            |Optional         |Func              |                                                                                                            |none     |
|locale                             |Optional         |String            |                                                                                                            |"en-US"  |
|selectHtml                         |Optional         |String            |                                                                                                            |none     |
|selectOptionsItemHtml              |Optional         |String            |                                                                                                            |none     |
|<h3>validationOption</h3>          |<h4>Required</h4>|Object            |                                                                                                            |{}       |

### validationOption props

|  Props 	    |   	    |  Type 	|  Description 	|  Default 	|
|---	        |---	    |---	|---	|---	|
|name   	    |Optional |   	|   	|   	|
|check   	    |Optional |   	|   	|   	|
|required   	|Optional |   	|   	|   	|
|showMsg      |Optional |   	|   	|   	|
|msgOnSuccess |Optional |   	|   	|   	|
|msgOnError   |Optional |   	|   	|   	|


```js
<Select
                  id={'select'} //Optional.[String].
                  value={movie} //Optional.[String].
                  disabled={false} //Optional.[Bool].Default: false.
                  validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationgCallback" you provide.
                  validationgCallback={this.validationgCallbackMovie} //Optional.[Func]. Return the validation result.
                  options={MOVIE_OPTIONS_LIST} //Required.[Array of Object(s)].
                  classNameSelect="" //Optional.[String].
                  classNameWrapper="" //Optional.[String].
                  classNameContainer="" //Optional.[String].
                  classNameSelectOptionsContainer="" //Optional.[String].
                  classNameSelectOptionsItem="" //Optional.[String].
                  customStyleSelect={{}} //Optional.[Object].
                  customStyleWrapper={{}} //Optional.[Object].
                  customStyleContainer={{}} //Optional.[Object].
                  customStyleSelectOptionsContainer={{}} //Optional.[Object].
                  customStyleSelectOptionsItem={{}} //Optional.[Object].
                  onBlur={() => {}} //Optional.[Func]. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                  onChange={this.handleMovieChange} //Optional.[Func]. Will return the value.
                  onFocus={() => {console.log('onFocus')}} //Optional.[Func].
                  onClick={() => {console.log('onClick')}} //Optional.[Func].
                  locale="zh-CN" //Optional.[String]. Error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'.
                  selectHtml={<div>{movieItem.name}</div>} //Optional.[String]. The custom html that will display when user choose. Use it if you think the default html is ugly.
                  selectOptionsItemHtml={selectOptionsItemHtml} //Optional.[String]. The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.
                  validationOption={{
                    name: 'movie', //Optional.[String]. To display in Error message. i.e Please select a ${name}.
                    check: true, //Optional.[Bool]. To determin if you need to validate.
                    required: true, //Optional.[Bool]. To determin if it is required.
                    showMsg: true, //Optional.[Bool]. Display the error message or not.
                    msgOnSuccess: 'msgOnSuccess', //Optional.[String]. Show the success message if it is provied.
                    msgOnError: 'custom error message' //Optional.[String]. Show your custom error message no matter what when it has error if it is provied.
                  }}
                />
```
