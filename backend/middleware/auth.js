import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {

    const { token } = req.headers;
console.log(token);

    if (!token) {
        return res.json({success:false, message: "Not Authorized please Login Again"})
    }

    try {
        
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode._id
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }

}

export default authUser