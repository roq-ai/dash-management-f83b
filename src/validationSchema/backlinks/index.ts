import * as yup from 'yup';

export const backlinkValidationSchema = yup.object().shape({
  type: yup.string().required(),
  url: yup.string().required(),
  user_id: yup.string().nullable(),
});
