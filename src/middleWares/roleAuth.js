const roleAuthPage = (permission) => {
  return (req, res, next) => {};
  const userRole = req.body.role;
  if (permission.includes(userRole)) {
    next();
  }
  return res.status(401).json('you dont have permission');
};

export default roleAuthPage;
