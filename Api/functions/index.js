const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");

admin.initializeApp();

const app = express();
const db = admin.firestore();

app.get("/images/:img", async (req, res) => {
  const img = req.params.img;
  try {
    const image = await db.collection("images")
        .where("name", "==", img)
        .limit(1)
        .get();

    if (image.empty) {
      return res.status(404).send("Image not found");
    }

    const data = image.docs[0].data();
    res.status(200).send(data);
  } catch (erro) {
    res.status(500).send("error: " + erro.message);
  }
});

app.get("/all-food", async (req, res) => {
  try {
    let foodType = await db.collection("foodtypes").get();
    foodType = foodType.docs.map((doc) => doc.data());
    for (let i=0; i < foodType.length; i++) {
      let food = await db.collection("food")
          .where("type", "==", foodType[i].id)
          .get();
      food = food.docs.map((doc) => doc.data());
      foodType[i].children = food;
    }

    res.status(200).send(foodType);
  } catch (erro) {
    res.status(500).send("error: " + erro.message);
  }
});

app.get("/menu", async (req, res) => {
  try {
    const menu = await db.collection("menus").get();
    res.status(200).send(menu.docs.map((doc) => doc.data()));
  } catch (erro) {
    res.status(500).send("error: " + erro.message);
  }
});

exports.api = functions.https.onRequest(app);
