import { FunctionComponent } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { FieldLabel } from '../deliveryForm/deliveryFormStyled';

export type AutoCompleteFieldProps = {
  value: string;
  labelText: string;
  onChange(newValue: string): void;
  options: Array<string>
  errorText?: string;
}

const AutoCompleteField: FunctionComponent<AutoCompleteFieldProps> = ({
  value,
  onChange,
  labelText,
  options,
  errorText,
}) => {
  return(
    <>
      <FieldLabel>{labelText}</FieldLabel>
      <Autocomplete
        value={value || ' '}
        onChange={(event, newValue) => onChange(newValue)}
        freeSolo
        disableClearable
        options={options}
        renderInput={(params) => (
          <TextField
            error={!!errorText}
            {...params}
            helperText={errorText}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </>
  )
}

export default AutoCompleteField;
