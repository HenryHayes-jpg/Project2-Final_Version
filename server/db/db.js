const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Henry:Growlingclown2@cluster0.vnce9.mongodb.net/<dbname>?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
