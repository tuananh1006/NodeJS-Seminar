// filepath: e:\NodeJS-Seminar\src\controllers\shirts.controller.js
import shirtsService from "../services/shirts.service.js";

export const getShirtsController = async (req, res) => {
    const shirts = await shirtsService.getAllShirts();
    return res.json(shirts);
};

export const getShirtByIDController = async (req, res) => {
    const { id } = req.params;
    const shirt = await shirtsService.getShirtById(id);
    return res.json(shirt);
};

export const addShirtController = async (req, res) => {
    const shirtData = req.body;
    const newShirt = await shirtsService.addShirt(shirtData);
    return res.status(201).json(newShirt);
};

export const updateShirtController = async (req, res) => {
    const { id } = req.params;
    const shirtData = req.body;
    const updatedShirt = await shirtsService.updateShirt(id, shirtData);
    return res.json(updatedShirt);
};

export const deleteShirtController = async (req, res) => {
    const { id } = req.params;
    await shirtsService.deleteShirt(id);
    return res.status(204).send();
};