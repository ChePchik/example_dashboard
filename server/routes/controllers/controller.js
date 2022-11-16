const data = require("../../data.json");

const helloworld = (req, res) => {
	// console.log(data);
	res.render("index", { data });
};
const test = async (req, res) => {
	res.json("json");
};

module.exports = { helloworld, test };
