import 'dotenv/config'
import App from "./app"

const port = process.env.PORT || 9000
const app = new App().app

app.listen(port, () => {
    console.log(`✅ Server running on ${port}`)
})

export default app