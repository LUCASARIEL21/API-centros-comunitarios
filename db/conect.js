const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://zLuk4sx:T9PdREKxgLS96khQ@centers.ggqnxa4.mongodb.net/?retryWrites=true&w=majority&appName=Centers"
    );
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
