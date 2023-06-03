const express = require('express')
const postRouter = require('./routes/posts')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json())
app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

app.listen(4000, () => {
     console.log('Connected to backend')
})