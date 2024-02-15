const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(express.json());
app.use(cors())
app.use(express.json());

const taskRouters = require('./routes/taskRoutes')

app.use('/api', taskRouters)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://adarshsoman29:vDuXr9qfr9rOXRCq@cluster0.j6f5ada.mongodb.net/?retryWrites=true&w=majority');
}
