import * as yup from 'yup';

export const timeTrackingValidationSchema = yup.object().shape({
  punch_in: yup.date().required(),
  punch_out: yup.date().nullable(),
  user_id: yup.string().nullable(),
});
