import { object, string, number, date } from 'yup';

export const productSchema = object({
  productTitle: string().required(),
  description: string().required(),
  price: number().required().positive().integer(),
  imageUrl: string().required('image Url is required'),
  category: string().required()
  // createdOn: date().default(() => new Date())
});
