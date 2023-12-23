const Joi=require('joi');


function validateCar(clientData){
    const userSchema=Joi.object({
        brand: Joi.string().min(3).required(),
        model: Joi.string().min(3).required(),
        Year: Joi.number().required()
        
    })

    return userSchema.validate(clientData);

}

module.exports=validateCar