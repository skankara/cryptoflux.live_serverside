const express = require('express');
// const authRoutes = require('./routes/authRoutes');
// require('./models/User');
// require('./services/passport');
// const keys = require('./config/keys');
const app = express();
const PORT = process.env.PORT || 5000;

// authRoutes(app);

// mongoose.connect(keys.mongoURI);

app.listen(PORT,()=>{
  console.log("Server started at http://localhost:5000");
});

//API Key AIzaSyB99_W1nzB0junYmRCP55WLsivpg0cg0WU
//Client Id - 30334964036-igm187dm11ri6oopdc2kop81rep4ig6e.apps.googleusercontent.com
//Client Secret - WPAN4Hjy02gT5AwYbHR8KEpe