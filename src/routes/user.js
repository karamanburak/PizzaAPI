"use strict";
/* -------------------------------------------------------
                        PIZZA API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const user = require("../controllers/user");
const idValidation = require("../middlewares/idValidation");

router.route("/").get(user.list).post(user.create);
router
  .route("/:id")
  .all(idValidation)
  .get(user.read)
  .put(user.update)
  .patch(user.update)
  .delete(user.delete);

/* ------------------------------------------------------- */
module.exports = router;
