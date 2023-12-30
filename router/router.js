import express from "express"

import { getHome, getCompose, postCompose } from "../controllers/controllers.js"

let router = express()

router.get("/", getHome)

router.get("/compose-blog", getCompose).post("/compose-blog", postCompose)

export { router }