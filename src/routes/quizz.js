var express = require("express");
var router = express.Router();

var quizzController = require("../controllers/quizzController");

router.post("/cadastrar", function (req, res) {
    quizzController.cadastrar(req, res);
})
router.get("/listar", function (req, res) {
    quizzController.listar(req, res);
})



module.exports = router;