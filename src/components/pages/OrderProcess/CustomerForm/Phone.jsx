import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
  
function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const Phone = (props) => {

  const onBlur = (e, eAttr, attr) =>{
    console.log(e.target.value)
    if(e.target.value === '(   )    -    '){
      console.log(e.target.value)
      props.setValues({ [eAttr]: true });
    } else {
      props.setValues({ [eAttr]: false });
      props.changeCustomerValue(attr, e.target.value)
    }
  }

  return (
    <Grid item xs={12} sm={6}>
      <FormControl>
        <InputLabel htmlFor="formatted-text-mask-input">Phone</InputLabel>
        <Input
          required
          defaultValue={props.contact_number}
          error={props.values.phoneError}
          helperText={props.values.phoneError && "Phone is required."}
          onBlur={(e)=> onBlur(e, "phoneError", "contact_number")}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
    </Grid>
  );
}

export default Phone;