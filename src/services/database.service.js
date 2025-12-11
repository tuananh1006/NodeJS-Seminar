import { envConfig } from "../constants/config.js";
import { MongoClient, ServerApiVersion } from "mongodb";

const username = envConfig.dbUsername;
const password = envConfig.dbPassword;
const uri = `mongodb+srv://${username}:${password}@${envConfig.dbName}.gfrmqy5.mongodb.net/?retryWrites=true&w=majority&appName=${envConfig.dbName}`;

class DatabaseService {
  constructor() {
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    this.db = this.client.db(`${envConfig.dbName}`);
  }
  async connect() {
    try {
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 });
      console.log("You successfully connected to MongoDB!");
    } catch (error) {
      // Ensures that the client will close when you finish/error
      // await this.client.close()
      console.log("Error", error);
      throw error;
    }
  }
  async findUserByEmail(email) {
    return await this.users.findOne({ email });
  }

  async findUserById(id) {
    return await this.users.findOne({ _id: id });
  }

  async createUser(userData) {
    const result = await this.users.insertOne(userData);
    return { id: result.insertedId, ...userData };
  }

  async updatePassword(email, hashedPassword) {
    return await this.users.updateOne(
      { email },
      { $set: { password: hashedPassword } }
    );
  }

  async getAllUsers() {
    return await this.users.find({}).toArray();
  }

  async saveResetToken(email, token) {
    return await this.users.updateOne(
      { email },
      { $set: { resetToken: token } }
    );
  }

  async findByResetToken(token) {
    return await this.users.findOne({ resetToken: token });
  }

  async clearResetToken(email) {
    return await this.users.updateOne(
      { email },
      { $unset: { resetToken: "" } }
    );
  }
}
   

const databaseService = new DatabaseService();
export default databaseService;
