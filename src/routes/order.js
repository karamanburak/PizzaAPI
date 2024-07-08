"use strict";
/* -------------------------------------------------------
                        PIZZA API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const order = require("../controllers/order");
const idValidation = require("../middlewares/idValidation");

//* /pizzas
router.route("/").get(order.list).post(order.create);

router
  .route("/:id")
  .all(idValidation)
  .get(order.read)
  .put(order.update)
  .patch(order.update)
  .delete(order.delete);

/* ------------------------------------------------------- */
module.exports = router;
