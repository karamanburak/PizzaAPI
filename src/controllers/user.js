"use strict";
const sendMail = require("../helpers/sendMail");
/* -------------------------------------------------------
                        PIZZA API
------------------------------------------------------- */

const User = require("../models/user");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "List Users"
            #swagger.description = `
                You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const users = await res.getModelList(User);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(User),
      results: users.length,
      users,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Create User"
        */
    const newUser = await User.create(req.body);
    sendMail(
      newUser.email,
      "Wellcome to the PIZZAS",
      `<h1>Wellcome ${newUser.username} your account successfully created</h1>`
    );
    res.status(201).send({
      error: false,
      newUser,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Get Single User"
        */

    //* admin değilse her halükarda kullanıcya kendi bilgilerini döndür
    let customFilter = {};
    if (!req.user.isAdmin) {
      customFilter = { _id: req.user._id };
    } else {
      customFilter = { _id: req.params.id };
    }
    const data = await User.findOne(customFilter);

    //? admin değilse ve istediği bilgiler kendine ait değilse o zaman kullancıya hata döndür
    // if(!req.user.isAdmin){
    //   if(req.params.id != req.user._id){
    //     throw new CustomError("No permission! you must be admin or own")
    //   }
    // }

    // const data = await User.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
        */
    // let customFilter = {};
    // if (!req.user.isAdmin) {
    //   customFilter = { _id: req.user._id }; //* admin değilse değişimi istenen user değil isteği atan userı güncelle
    // } else {
    //   customFilter = { _id: req.params.id };
    // }
    // const data = await User.updateOne(customFilter, req.body, {
    //   runValidators: true,
    // });

    //? admin değilse ve istediği bilgiler kendine ait değilse o zaman kullancıya hata döndür
    if (!req.user.isAdmin) {
      if (req.params.id != req.user._id) {
        throw new CustomError("No permission! you must be admin or own");
      }
    }

    const data = await User.updateOne(customFilter, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      newData: await User.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */
    const user = await User.deleteOne({ _id: req.params.id });
    res.status(user.deletedCount ? 204 : 404).send({
      error: !user.deletedCount,
      user,
      message: "User not found!",
    });
  },
};
