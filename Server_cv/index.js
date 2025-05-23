import express from "express";
import cors from "cors";
import { contactMe } from "./email/contactMe.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/contact", contactMe);

app.listen(port, () => console.log(`server running on port ${port}`));
