import express from "express"
import mongoose from "mongoose"

const Animal = mongoose.model("Animal", new mongoose.Schema({
  tipo: String,
  color: String,
}));

const app = express();

/**
 * Conexión al contenedor mongodb
 * Debe estar en la misma red que el contenedor creado a partir de la imagen creada a partir de esta aplicación
 */
const user = "user";
const password = "pass";
const port = "27017";
const mongoContainerName = "mongodb";

mongoose.connect(`mongodb://${user}:${password}@${mongoContainerName}:${port}`);

app.get("/", async (_req, res) => {
  console.log("Listando animales ...");  
  const animales = await Animal.find();

  return res.send(animales);
});

app.get("/crear", async (_req, res) => {
  console.log("Creando animal ...");
  await Animal.create({ tipo: "Perro", color: "Negro" });

  return res.send("ok");
})

app.listen(3000, () => console.log("Listening ..."));
