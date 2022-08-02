import express from "express"

const app = express()
const port = process.env.PORT || 8000

app.use(express.static("src/public"))

app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`)
})
