const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { helloworld } = require("./server/routes/controllers/controller");
const app = express();
const port = 3001;
app.set("view engine", "pug");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); //логирование
app.disable("x-powered-by"); //для безопасности

app.use(express.static("views"));
// Routes
app.get("/", helloworld); //подключить
// Обработчик ошибок
app.use((req, res) => {
	res.status(500).send("Вы сломали сервер!");
});

//Go the SERVERs
app.listen(port, () => {
	console.log("\x1b[35m%s\x1b[0m", `The server is running on the port ${port}`);
	console.log("\x1b[32m%s\x1b[0m", `http://localhost:${port}/`);
	// console.log(`Worker ${cluster.worker.id} launched`);
});
