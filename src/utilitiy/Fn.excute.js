import bcrypt from 'bcrypt';

export const PasswordEncoded = (generic) => (num) => {
  bcrypt.hash(generic, num, (err, hash) => {
    if (err) {
      console.log(err);
      return err;
    }
    return {
      hash: hash,
      message: 'hashed password successfully'
    };
    // TODO: Store the hash in your password DB
  });
};
export const user = (generic) => (num) => {
  bcrypt
    .hash(generic, num)
    .then((res) => {
      console.log(res);
      return {
        res: res,
        type: true
      };
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
