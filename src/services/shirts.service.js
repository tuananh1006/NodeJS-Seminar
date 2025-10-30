import databaseService from "./database.service.js";
import Shirt from "../models/schemas/shirt.schema.js"; 
class ShirtsService {
    async getAllShirts() {
        // Logic to retrieve all shirts from the database
        shirts = await databaseService.shirts.findAll();
        return shirts;
    }
    async getShirtById(shirtId) {
        // Logic to retrieve a shirt by its ID from the database
        const shirt = await databaseService.shirts.findById(shirtId);
        return shirt;
    }
    //Add shirt
    async addShirt(shirtData) {
        const newShirt = await databaseService.Shirts.insertOne(new Shirt(shirtData));
        return newShirt;
    }
    async updateShirt(shirtId, shirtData) {
        const updatedShirt = await databaseService.shirts.update(shirtId, shirtData);
        return updatedShirt;
    }
    async deleteShirt(shirtId) {
        await databaseService.shirts.delete(shirtId);
        return;
    }
}

const shirtsService = new ShirtsService();
export default shirtsService;