"use strict";
/* -------------------------------------------------------
                        PIZZA API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// ROUTER INDEX:

// URL: /

// auth:
router.use("/auth", require("./auth"));
// user:
router.use("/users", require("./user"));
// token:
router.use("/tokens", require("./token"));

// order:
router.use("/orders", require("./order"));
// pizza:
router.use("/pizzas", require("./pizza"));
// topping:
router.use("/toppings", require("./topping"));

// document:
router.use("/documents", require("./documents"));

/* ------------------------------------------------------- */
module.exports = router;
