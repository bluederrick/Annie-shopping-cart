


export const FindAll = (model) => {
    model.find()
        .then((res) => console.log(res, true))
        .catch((err) => { console.log(err.message) });
}

export const FindOne = (model) => {
    model.findOne()
        .then((res) => console.log(res, true))
        .catch((err) => { console.log(err.message) });
};

export const findById = () => {
    model.findById()
        .then((res) => console.log(res, true))
        .catch((err) => { console.log(err.message) });
}