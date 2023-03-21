import { object, string, number, date, InferType } from 'yup';

let Userschema = object({
    firstName: string().required(),
    lastName: string().required(),
    // age: number().required().positive().integer(),
    email: string().email(),
    website: string().url().nullable(),
    createdOn: date().default(() => new Date()),
})

export default Userschema;