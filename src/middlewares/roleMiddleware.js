const authorizedRole = (...allowedRoles) => {
  return (req, res, next) => {
    if(!allowedRoles.includes(req.user.role)){
        res.status(403).json({
            message:"Access Denied"
        })
    }
    next();
  };
};

module.exports = authorizedRole;
