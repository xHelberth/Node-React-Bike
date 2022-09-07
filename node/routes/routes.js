import express from "express";
import { createBike, deleteBike, getAllBikes, getBike, updateBike } from "../controllers/BikeController.js";

const router = express.Router()

router.get('/',getAllBikes)
router.get('/:id', getBike)
router.post('/',createBike)
router.put('/:id',updateBike)
router.delete('/:id',deleteBike)

export default router