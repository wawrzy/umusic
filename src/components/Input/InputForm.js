// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';

import './InputForm.css';

type Props = {
  id: string,
  name?: string,
  type?: string,
  onEnterKey?: Function,
  className?: string,
  placeholder?: string,
  defaultValue?: string,
  readOnly?: boolean,
  required?: boolean,
  minlength?: string,
};

type State = {
  value: string,
};

class InputForm extends React.Component<Props, State> {
  static defaultProps = {
    name: '',
    type: 'text',
    onEnterKey: undefined,
    className: '',
    placeholder: '',
    defaultValue: '',
    readOnly: false,
    required: false,
    minlength: undefined,
  };

  constructor(props: Props) {
    super(props);
    const { defaultValue } = props;
    if (!defaultValue) {
      this.state = {
        value: '',
      };
    } else {
      this.state = {
        value: defaultValue,
      };
    }
  }

  handleKeyPress = (event: any) => {
    const { onEnterKey } = this.props;
    const { value } = this.state;

    if (event.key !== 'Enter') return;

    event.preventDefault();

    if (onEnterKey) {
      onEnterKey(value);
      this.setState({ value: '' });
    }
  };

  handleChange = (event: any) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { id, name, required, type, className, placeholder, readOnly, minlength } = this.props;
    const { value } = this.state;
    return (
      <TextField
        minlength={minlength}
        id={id}
        label={name}
        required={required}
        type={type}
        margin="normal"
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
        className={className}
        placeholder={placeholder}
        value={value}
        InputProps={{
          readOnly,
        }}
      />
    );
  }
}

export default InputForm;
