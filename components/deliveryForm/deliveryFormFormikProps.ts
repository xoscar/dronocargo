import { FormikErrors, FormikValues } from 'formik';
import Delivery, { defaultValues, PlatformEnum } from "../../models/Delivery";

export enum DeliveryFields {
  orderId = 'orderId',
  technician = 'technician',
  droneId = 'droneId',
  status = 'status',
  platform = 'platform',
  technicalStatus = 'technicalStatus',
}

export type DeliveryValues = {
  orderId: string;
  technician: string;
  droneId: string;
  status: string;
  platform?: string;
  technicalStatus?: string;
  created: number;
};

export const TECHNICIAN_LIST = ['John Doe', 'Pedro Suarez'];
export const PLATFORM_LIST = ['TETHA', 'DHL', 'UPS'];
export const DRONE_LIST = ['DJI-004Q', '1234-55466'];

const validateData = (values: FormikValues): FormikErrors<DeliveryValues> => {
  const errors: Partial<DeliveryValues & { created: string }> = {};

  if (!values.orderId) errors.orderId = 'Order Id is mandatory';
  if (!values.technician) errors.technician = 'Technician is mandatory';
  if (!values.platform) errors.platform = 'Platform is mandatory' as PlatformEnum;
  if (!values.droneId) errors.droneId = 'Drone is mandatory';

  return errors;
};

const getInitialValues = (delivery: Delivery | undefined): DeliveryValues => delivery?.toJSON() || defaultValues;

export type DeliveryFormFormikProps = {
  initialValues: DeliveryValues;
  validate: typeof validateData;
};

const formikProps = (delivery: Delivery | undefined): DeliveryFormFormikProps => ({
  initialValues: getInitialValues(delivery),
  validate: validateData,
});

export default formikProps;
