const express = require('express')
const router = new express.Router()
const Team = require('../core/team/team')


router.post('/team', async(req, res) => {
    console.log("Team", req.body)
    const team = new Team(req.body)
    try {
        await team.save()
        res.status(201).send(team)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.get('/team/:id', (req, res) => {
    const _id = req.params.id // Access the id provided  
    Event.findById(_id).then((ev) => {
        if (!ev) {
            return res.status(404).send()
        }
        res.send(ev)
    }).catch((e) => {
        res.status(500).send()
    })
})


router.patch('/team/:id', async(req, res) => {
    const ups = Object.keys(req.body)
    const allowedUpdates = ['name', ' owner', 'teamFund', 'players']
    const isValOp = ups.every((update) => allowedUpdates.includes(update))
    if (!isValOp) {
        return res.status(400).send({
            error: 'Invalid updates!'
        })
    }
    try {
        const ev = await Event.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!ev) {
            return res.status(404).send()
        }
        res.send(ev)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/team', (req, res) => {
    console.log("in team list")
    Team.find({}).then((teams) => {
        res.send(teams)
    }).catch((e) => {
        res.status(500).send()
    })

})

module.exports = router