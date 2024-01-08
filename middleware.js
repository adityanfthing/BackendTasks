import User from './userModel.js'; // Import your User model

const authenticateUser = async (req, res, next) => {
    const  email  = req.headers.email;
    try {
        
        const foundUser = await User.findOne({email:email}); // Query the database for the user
        console.log(foundUser);
        if (!email || !foundUser) {
            return res.status(401).json({ error: 'Unauthorized access' });
        }

        req.user = foundUser; // Store user info in request for future use
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

export default authenticateUser;