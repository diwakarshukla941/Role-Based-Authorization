const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(404).json({
        message: "No Token , Authorization Denied",
      });
    }
     try {
            const Decode = jwt.verify(token, process.env.JWT_SECRET );
            req.user = Decode;
            console.log(`Decoded User =>`, req.user)
            next();
     } catch (error) {
            res.status(400).json({message:"Token Is Not Valid"});
     }
  }else{
    return res.status(401).json({
        message: "No Token , Authorization Denied",
      });
  }
};

module.exports = verifyToken;
