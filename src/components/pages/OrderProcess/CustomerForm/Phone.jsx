import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

const Phone = () => {
  
  const TextMaskCustom = (props) => {
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

  const [values] = React.useState({
    textmask: '(1  )    -    ',
    numberformat: '1320',
  });

  return (
    <Grid item xs={12} sm={6}>
      <FormControl>
        <InputLabel htmlFor="formatted-text-mask-input">Phone</InputLabel>
        <Input
          required
          value={values.textmask}
          //onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
    </Grid>
  );
}

export default Phone;