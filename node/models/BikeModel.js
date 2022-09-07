import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BikeModel = db.define('bikes',{
    brand: { type: DataTypes.STRING },
    model: { type: DataTypes.STRING},
})

export default BikeModel