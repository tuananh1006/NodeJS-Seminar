import { ObjectId } from "mongodb";

export default class Shirt {
    _id
    name
    description
    slug 
    categoryID
    createdAt
    updatedAt
    constructor(shirt){
        this._id = shirt._id;
        this.name = shirt.name;
        this.description = shirt.description;
        this.slug = shirt.slug;
        this.categoryID = shirt.categoryID;
        this.createdAt = shirt.createdAt;
        this.updatedAt = shirt.updatedAt;
    }
}