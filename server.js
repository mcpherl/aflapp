const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const userRoute = require('./routes/user');
const openPackRoute = require('./routes/openPack');
const inventoryRoute = require('./routes/inventory');

app.use('/users', userRoute);
app.use('/openPack', openPackRoute);
app.use('/inventory', inventoryRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
