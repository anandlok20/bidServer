const express = require('express')
const Player = require('../core/user/player')
const router = new express.Router()

router.post('/create', async(req, res) => {
    const player = new Player(req.body)
    try {
        player.playerType = "player";
        await player.save()
        res.status(201).send(player)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.patch('/update/me', async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'status', 'baseValue', 'sellPrice', 'gender', 'playerType', 'playerImages']
    const validateUpdates = updates.every((updates) => allowedUpdates.includes(updates))
        // console.log(validateUpdates)
    if (!validateUpdates) {
        return res.status(400).send({
            error: 'Invalid Update'
        })
    }
    try {
        updates.forEach(update => req.players[update] = req.body[update])
        await req.players.save()

        res.status(200).send(req.players)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router