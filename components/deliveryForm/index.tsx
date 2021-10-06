import { FunctionComponent, useMemo } from 'react';
import { Formik, FormikProps } from 'formik';
import formikProps, { DeliveryFields, DRONE_LIST, PLATFORM_LIST, TECHNICIAN_LIST } from './deliveryFormFormikProps';
import { TextField } from '@mui/material';
import {
  FormSection,
  AcceptButton,
  CancelButton,
  FooterSection,
  ContentSection,
  FieldLabel,
} from './deliveryFormStyled';
import Delivery, { DeliveryType } from '../../models/Delivery';
import AutoCompleteField from '../autoCompleteField';

export type DeliveryFormProps = {
  onSubmit(values: DeliveryFields): void;
  onClose(): void;
  delivery?: Delivery;
};

const DeliveryForm: FunctionComponent<DeliveryFormProps> = ({ onSubmit, onClose, delivery }) => {
  const { initialValues, validate } = useMemo(() => formikProps(delivery), [delivery]);  
  const isEditing = !!delivery?.orderId;

  return (
    <Formik validateOnChange={false} initialValues={initialValues} validate={validate} onSubmit={(values) => onSubmit(values as unknown as DeliveryFields)}>
      {({ values, errors, setFieldValue, submitForm }: FormikProps<DeliveryType>) => {

        return (
          <>
            <ContentSection>
              <FormSection>
                <FieldLabel>Order ID</FieldLabel>
                <TextField
                  disabled={isEditing}
                  id="input-with-icon-textfield"
                  variant="outlined"
                  error={!!errors[DeliveryFields.orderId]}
                  helperText={errors[DeliveryFields.orderId]}
                  onChange={(event) => {
                    const newValue = event.target.value;
                    setFieldValue(DeliveryFields.orderId, newValue);
                  }}
                  value={values.orderId}
                />
              </FormSection>
              <FormSection>
                <AutoCompleteField
                  labelText="Technician"
                  value={values.technician}
                  errorText={errors.technician}
                  options={TECHNICIAN_LIST}
                  onChange={(newValue) => setFieldValue(DeliveryFields.technician, newValue)}
                />
              </FormSection>
              <FormSection>
                <AutoCompleteField
                  labelText="Platform"
                  value={values.platform as string}
                  errorText={errors.platform}
                  options={PLATFORM_LIST}
                  onChange={(newValue) => setFieldValue(DeliveryFields.platform, newValue)}
                />
              </FormSection>
              <FormSection>
                <AutoCompleteField
                  labelText="Drone"
                  value={values.droneId}
                  errorText={errors.droneId}
                  options={DRONE_LIST}
                  onChange={(newValue) => setFieldValue(DeliveryFields.droneId, newValue)}
                />
              </FormSection>
            </ContentSection>
            <FooterSection>
              <CancelButton onClick={() => onClose()}>Cancel</CancelButton>
              <AcceptButton onClick={() => submitForm()}>{isEditing ? 'Edit delivery' : 'Create new delivery'}</AcceptButton>
            </FooterSection>
          </>
        );
      }}
    </Formik>
  );
};

export default DeliveryForm;
