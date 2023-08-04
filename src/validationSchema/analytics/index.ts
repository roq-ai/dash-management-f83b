import * as yup from 'yup';

export const analyticsValidationSchema = yup.object().shape({
  graph_type: yup.string().required(),
  user_id: yup.string().nullable(),
});
