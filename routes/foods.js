const express = require('express')
const router = express.Router()
const Food = require('../models/food')

router.get('/', async(req,res) => {
    try{
        const foods = await Food.find()
        res.json(foods)

    }catch(err){
        res.ssend('Error' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const food = await Food.findById(req.params.id)
           res.json(food)
    }catch(err){
        res.send('Error' + err)
    }
})


router.post('/', async(req,res) => {
    const food = new Food({
        name: req.body.name,
        ingredients: req.body.ingredients,
        diet:  req.body.diet,
        prep_time: req.body.prep_time,
        cook_time: req.body.cook_time,
        flavor_profile: req.body.flavor_profile,
        course: req.body.course,
        state: req.body.state,
        region: req.body.region

    })

    try{
        const a1 = await food.save()
        res.json(a1) 
    }catch(err){
        res.send('Error')
    }

})    


module.exports = router