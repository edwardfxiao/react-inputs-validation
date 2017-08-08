import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import STYLES from '../src/css/example.css';
import { Textbox, Radiobox, Checkbox } from '../src/js/Inputs';
import 'material-icons/css/material-icons.css';
const JOB_OPTIONS_LIST = ['engineer', 'teacher', 'student'];
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
      agreement: false,
      hasNameError: true,
      hasJobError: true,
      hasAgreementError: true,
      validate: false
    };
    this.handleNameBlur = this.handleNameBlur.bind(this);
    this.handleAgreementBlur = this.handleAgreementBlur.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgreementChange = this.handleAgreementChange.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
    this.validationgCallbackName = this.validationgCallbackName.bind(this);
    this.validationgCallbackAgreement = this.validationgCallbackAgreement.bind(
      this
    );
    this.validationgCallbackJob = this.validationgCallbackName.bind(this);
  }

  handleAgreementChange(agreement) {
    this.setState({ agreement });
  }

  handleAgreementBlur() {}

  validationgCallbackAgreement(hasAgreementError) {
    this.setState({ hasAgreementError });
  }

  handleNameBlur() {}
  onRadioClick() {}

  handleNameChange(name) {
    this.setState({ name });
  }

  validationgCallbackName(hasNameError) {
    this.setState({ hasNameError });
    this.toggleValidating(false);
  }

  handleJobChange(job) {
    this.setState({ job });
  }

  validationgCallbackJob(hasJobError) {
    this.setState({ hasJobError });
    this.toggleValidating(false);
  }

  toggleValidating(validate) {
    this.setState({ validate });
  }

  renderRadioboxItem(name) {
    return (
      <div style={{ color: '#4a4a4a' }}>
        {name}
      </div>
    );
  }

  renderCheckboxChild() {
    return (
      <div
        style={{ color: '#4a4a4a', marginTop: '2px' }}
      >
        dsfd
      </div>
    );
  }

  render() {
    const { name, job, agreement, validate } = this.state;
    const rowStyle = {
      display: 'flex',
      alignItems: 'flex-start',
      // alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2%',
      fontSize: '14px'
    };
    const rowWrapperStyle = {
      display: 'table',
      width: '100%'
    };
    const rowContainerStyle = {
      display: 'table-cell',
      verticalAlign: 'middle',
      borderBottom: '1px solid #e5e5e5'
    };
    const labelStyle = {
      display: 'inline-block'
    };
    const labelContentStyle = {
      verticalAlign: 'middle'
    };
    return (
      <div>
        <div style={rowWrapperStyle}>
          <div style={rowContainerStyle}>
            <div style={rowStyle}>
              <div style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}>
                {/*<div style={(labelStyle, { flex: '3 3 0' })}>*/}
                <span
                  className="mi mi-account-box"
                  style={{ ...labelContentStyle, fontSize: '20px' }}
                />&nbsp;
                <span style={labelContentStyle}>name姓名</span>
              </div>
              <div className={STYLES['test']} style={{ flex: '6 6 0' }}>
                <Textbox
                  id={'textbox'}
                  type="number"
                  value={name}
                  disabled={false}
                  placeholder="请输入姓名"
                  validate={validate}
                  classNameInput={`${STYLES['textbox__input']}`}
                  classNameWrapper={`${STYLES['textbox__wrapper']}`}
                  classNameContainer={`${STYLES['textbox__container']}`}
                  customStyleInput={{}}
                  customStyleWrapper={{}}
                  customStyleContainer={{}}
                  onBlur={this.handleNameBlur}
                  onChange={this.handleNameChange}
                  validationgCallback={this.validationgCallbackName}
                  locale="en-US"
                  validationOption={{
                    // name: 'haha',
                    check: true,
                    required: true,
                    showMsg: true,
                    // msgOnError: 'ddd',
                    // min: 2,
                    // max: 10,
                    length: 2,
                    // compare: '3',
                    // reg: /^\d{18}|\d{15}$/,
                    // regMsg: '格式错误',
                    // type: 'string'
                    type: 'phone',
                    phoneCountry: 'zh-CN',
                    msgOnSuccess: 'zh-CN'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={rowWrapperStyle}>
          <div style={rowContainerStyle}>
            <div style={rowStyle}>
              <div style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}>
                {/*<div style={(labelStyle, { flex: '3 3 0' })}>*/}
                <span
                  className="mi mi-account-box"
                  style={{ ...labelContentStyle, fontSize: '20px' }}
                />&nbsp;
                <span style={labelContentStyle}>name姓名</span>
              </div>
              <div style={{ flex: '6 6 0', display: 'flex' }}>
                {JOB_OPTIONS_LIST.map((i, k) => {
                  return (
                    <div style={{ flex: '1 1 0', textAlign: 'center' }} key={k}>
                      <Radiobox
                        checked={job == i ? true : false}
                        disabled={false}
                        id={`job-${k}`}
                        value={i}
                        classNameInput={`${STYLES['radiobox__input']}`}
                        classNameWrapper={
                          job == i
                            ? `${STYLES['radiobox__wrapper']} ${STYLES['checked']}`
                            : `${STYLES['radiobox__wrapper']}`
                        }
                        classNameContainer={`${STYLES['radiobox__container']}`}
                        labelHtml={this.renderRadioboxItem(i)}
                        onChange={() => {
                          this.handleJobChange(i);
                        }}
                        onClick={() => {
                          this.onRadioClick(i);
                        }}
                        validationOption={{
                          name: 'haha',
                          check: true
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={rowWrapperStyle}>
          <div style={rowContainerStyle}>
            <div style={rowStyle}>
              <div style={{ ...labelStyle, flex: '3 3 0', marginTop: '3px' }}>
                {/*<div style={(labelStyle, { flex: '3 3 0' })}>*/}
                <span
                  className="mi mi-account-box"
                  style={{ ...labelContentStyle, fontSize: '20px' }}
                />&nbsp;
                <span style={labelContentStyle}>agreement</span>
              </div>
              <div style={{ flex: '6 6 0' }}>
                <Checkbox
                  id={'checkbox'}
                  value={agreement}
                  disabled={false}
                  placeholder="请输入姓名"
                  validate={validate}
                  classNameInput={`${STYLES['textbox__input']}`}
                  classNameWrapper={`${STYLES['textbox__wrapper']}`}
                  classNameContainer={`${STYLES['textbox__container']}`}
                  customStyleInput={{}}
                  customStyleWrapper={{}}
                  customStyleContainer={{}}
                  onBlur={this.handleAgreementBlur}
                  onChange={this.handleAgreementChange}
                  validationgCallback={this.validationgCallbackAgreement}
                  labelHtml={this.renderCheckboxChild()}
                  locale="en-US"
                  validationOption={{
                    name: 'haha',
                    check: true,
                    required: true,
                    showMsg: true,
                    // msgOnSuccess: 'zh-CN'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
