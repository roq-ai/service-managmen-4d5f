import * as yup from 'yup';

export const complaintValidationSchema = yup.object().shape({
  description: yup.string().required(),
  status: yup.string().required(),
  customer_id: yup.string().nullable(),
  assigned_to: yup.string().nullable(),
});
