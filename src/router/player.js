const express = require('express')
const Player = require('../core/player/player')
const router = new express.Router()

router.post('/player', async(req, res) => {
    const player = new Player(req.body)
    try {
        console.log("save player")
        await player.save()
        res.status(201).send(player)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.patch('/player/me', async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'status', 'baseValue', 'sellPrice', 'gender', 'playerType']
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

router.get('/player', (req, res) => {
    console.log("in player list")
    Player.find().then((players) => {
        res.send(players)
    }).catch((e) => {
        res.status(500).send(e)
    })

})

router.get('/player/bid', (req, res) => {
    console.log("one player list")
    Player.find({status:false}).then((players) => {
        res.send(players[0])
    }).catch((e) => {
        res.status(500).send(e)
    })

})



module.exports = router