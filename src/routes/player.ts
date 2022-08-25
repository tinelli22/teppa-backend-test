import express from "express";
import  playerControllers from '../controllers/player'

const playerRouter = express.Router()

playerRouter.post("/new", playerControllers.post)
playerRouter.get("/player", playerControllers.get)
playerRouter.get('', playerControllers.getAll)

export default playerRouter