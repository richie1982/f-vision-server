const Joi = require('joi')


const userValidation = (data) => {
    const schema = {
        firstname: Joi.string().min(2).required(),
        surname: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
    }
    return Joi.validate(data, schema)
}

const  moreInfoValidation = (data) => {
    const schema = {
        id: Joi.string(),
        telephone: Joi.number().min(11).required(),
        gender: Joi.string().required(),
        dateOfBirth: Joi.date().max('now'),
    }
    return Joi.validate(data, schema)
}
const commentValidation = (data) => {
    const schema = {
        text: Joi.string().max(200).required()
    }
    return Joi.validate(data, schema)
}

module.exports.userValidation = userValidation
module.exports.moreInfoValidation = moreInfoValidation
module.exports.commentValidation = commentValidation