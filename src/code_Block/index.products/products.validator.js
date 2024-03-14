import { object, string, number, date } from 'yup';



export const productSchema = object({
    productTitle: string().required(),
    price: number().required().positive().integer(),
    imageUrl: string().email(),
    createdOn: date().default(() => new Date()),
});

