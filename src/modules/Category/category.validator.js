import { object, string, number, date, boolean } from 'yup';

export const categoryValidator = object({
  title: string().required(),
  icon: string().required(),
  isFeatured: boolean().required(),
  isVoided: boolean().required()
});
