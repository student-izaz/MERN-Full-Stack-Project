const adminMiddlewre = async (req, res, next) => {
    try {
        const isAdmin = req.user.isAdmin;

        if(!isAdmin){
            return res.status(401).json({ msg: "HTTP not Authorized, you cannot access this page."});
        }

        next();

    } catch (error) {
        next(error)
    }
}

module.exports = adminMiddlewre;