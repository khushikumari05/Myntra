const UserModel = require("../models/user.model");
const sendEmail = require("../config/sendEmail");
const bcrypt = require("bcrypt");
const verifyEmailTemplate = require("../utils/verifyEmailTemplate");


const userRegistration = async (req, res) => {
    const {name, email, password} = req.body
    try {
        if(!name || !email || !password){
            return res.status(400).json({
                message: "Provide email, name, password",
                error: true,
                success: false            
            })
        }
        const user = await UserModel.findOne({email})

        if(user){
            return res.json({
                message: "Already register email",
                error: true,
                success : false
            })

        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const newUser = new UserModel({
            name,
            email,
            password : hashPassword 
        })
        await newUser.save();

        // i will create url
        const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save?._id}` 

        const verifyEmail = await sendEmail({
            sendTo : email,
            subject : "Verify email from myntra",
            html: verifyEmailTemplate({
                name,
                url: VerifyEmailUrl
            })

        })

        return res.json({
            message: "User register successfully",
            error: false,
            success: true,
            data: save
        })
         
    } catch (error) {
        return res.status(500).json({
            message: "Occured Error during creation of user",
            error: true,
            success: false
        })
    }
}

module.exports = userRegistration;
