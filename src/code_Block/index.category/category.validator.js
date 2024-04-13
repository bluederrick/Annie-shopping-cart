import { object, string, number, date } from 'yup';

export const categorySchema = object({
  title: string().required(),
  icon: string().required(),
  isFeatured: boolean().required()
  createdOn: date().default(() => new Date())
});
