const express = require("express");
const router = express.Router();
const Categories = require("../models/categories");

router.post("/newcategory", (req, res) => {
  const { name, parentCategory } = req.body;
  Categories.create({ name:name , parentCategory:parentCategory})
    .then(() => {
      res.status(200).json("category created successfully");
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/allcategories", (req, res) => {
  Categories.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});
router.delete(`/deletecategory/:_id`,(req,res)=>{
  const {_id} = req.params._id;
  Categories.findByIdAndDelete(_id).then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    res.status(500).json(err.message);
  });
})
module.exports = router;
