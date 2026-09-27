export default async function authMiddleware(res , req , next) {
    const authHeader = req.header.authorization

    if(!authHeader) {
        res.status(401).json({message :"Unauthorized"})
    }

    next()
}