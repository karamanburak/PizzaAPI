"use strict";
/* -------------------------------------------------------
                        PIZZA API
------------------------------------------------------- */
const Topping = require("../models/topping");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Topping);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails,
      data,
    });
  },
  //! CRUD(Create-Read-Update-Delete)
  create: async (req, res) => {
    const data = await Topping.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await Topping.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const data = await Topping.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      data,
      newData: await Topping.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await Topping.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
      message: "Topping not found!",
    });
  },
};
