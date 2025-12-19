const jwt = require('jsonwebtoken')

const jwtAuthMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message:"Authorization header missing"})
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(401).json({message:"Auth Failed"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded;
        next()
    }
    catch(err){
        return res.status(401).json({message:"Inavlid Token"})
    }
}

const genToken = (userData) => {
    return jwt.sign(userData,process.env.JWT_SECRET)
}

module.exports = {jwtAuthMiddleware,genToken}