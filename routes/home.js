const router = require('express').Router()
const User = require('../model/User')
const { userValidation, moreInfoValidation, commentValidation } = require('../validation')

router.get('/', (req, res) => {
    res.send("User page")
})

router.post('/', async (req, res) => {
    const { error } = userValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const user = new User({
        firstname: req.body.firstname,
        surname: req.body.surname,
        email: req.body.email,
    })

    try{
        const savedUser = await user.save()
        res.send(savedUser)
    }catch(error){
        res.status(400).send(error)
    }

    
})

router.patch('/', async (req, res) => {
    const { error } = moreInfoValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const moreInfo = await User.findByIdAndUpdate({_id: req.body.id}, 
        {
            telephone: req.body.telephone,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth,
        }
    )
    if(!moreInfo) res.status(404).send("Error")

    res.send(moreInfo)
})

router.patch('/comment', async(req, res) => {
    const { error } = commentValidation(req.body)
    if (error) return res.status(404).send(error.details[0].message)

    const comment = await User.findByIdAndUpdate({_id: req.body.id},
            {
                comment: req.body.comment
            }
        )
    if (!comment) res.status(404).send("Error")

    res.send(comment)
})


module.exports = router