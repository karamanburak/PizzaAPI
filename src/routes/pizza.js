"use strict";
/* -------------------------------------------------------
                        PIZZA API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const pizza = require("../controllers/pizza");
const idValidation = require("../middlewares/idValidation");
const { isAdmin } = require("../middlewares/permissions");
const multer = require("multer");

const upload = multer({
  // dest: "./uploads",
  storage: multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, returnCallback) {
      // returnCallback(null, "image.jpeg");
      console.log(file);

      returnCallback(null, Date.now() + "-" + file.originalname);
    },
  }),
});

//* /pizzas
router
  .route("/")
  .get(pizza.list)
  // .post(isAdmin, upload.single("fileInputName"), pizza.create);
  // .post(isAdmin, upload.single("image"), pizza.create); // single
  // .post(isAdmin, upload.any(), pizza.create); // not recommended
  // .post(isAdmin, upload.array("images"), pizza.create); // recommended
  .post(isAdmin, upload.array("images", 10), pizza.create); // recommended

router
  .route("/:id")
  .all(idValidation)
  .get(pizza.read)
  .put(isAdmin, pizza.update)
  .patch(isAdmin, pizza.update)
  .delete(isAdmin, pizza.delete);

/* ------------------------------------------------------- */
module.exports = router;
