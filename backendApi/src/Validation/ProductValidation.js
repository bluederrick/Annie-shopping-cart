import yup from 'yup';
const MAX_FILE_SIZE = 102400; //100KB;
const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };
function isValidFileType(fileName, fileType) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

export const ProductSchema = yup.object({
    product: yup.string().required("Please select a product").oneOf(products),
    title: yup.string().required(),
    cost: yup.string().required(),
    image: yup
        .mixed()
        .required("Required")
        .test("is-valid-type", "Not a valid image type",
            value => isValidFileType(value && value.name.toLowerCase(), "image"))
        .test("is-valid-size", "Max allowed size is 100KB",
            value => value && value.size <= MAX_FILE_SIZE)

})








// const validationSchema = object().shape({
//     file: mixed()
//       .test('fileSize', 'File too large', (value) => value === null || (value && value.size <= FILE_SIZE))
//       .test(
//         'fileFormat',
//         'Unsupported file type',
//         (value) => value === null || (value && SUPPORTED_FORMATS.includes(value.type))
//       )
//   })