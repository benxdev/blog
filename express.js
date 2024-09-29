import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("page.ejs");
});

app.listen(port,  () => {
    console.log(`Server is running on port ${port}`);
});
