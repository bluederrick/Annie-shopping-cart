export const FindAll = (model) => {
  model
    .find()
    .then((res) => console.log(res, true))
    .catch((err) => {
      console.log(err.message);
    });
};

export const FindOne = (model) => {
  model
    .findOne()
    .then((res) => console.log(res, true))
    .catch((err) => {
      console.log(err.message);
    });
};

export const findLogin = (model) => (_u) => (_p) => {
  model
    .find(_u)
    .then((res) => res)
    .catch((err) => err.message) &&
    model
      .find(_p)
      .then((res) => res)
      .catch((err) => err.message);
};

export const findById = () => {
  model
    .findById()
    .then((res) => console.log(res, true))
    .catch((err) => {
      console.log(err.message);
    });
};

export const find = (model) => {
  model
    .find()
    .then((res) => console.log(res, true))
    .catch((err) => {
      console.log(err.message);
    });
};

export const duplicateDTO = (model) => (obj) => {
  const res = model.findOne(obj);

  return {
    res: res,
    status: 200
  };
};

export const User_sync = (model) => {
  const res = model
    .save()
    .then((result) => result)
    .catch((err) => {
      err;
    });
};

export const store = (model) =>
  model
    .save()
    .then((res) => res)
    .catch((error) => console.log(error));
