import authRoute from "./routes/auth.route.js"
import express from "express";
import postRoute from "./routes/post.route.js" ;

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, the server is running!");
});

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Server is running on port 8800!");
});
