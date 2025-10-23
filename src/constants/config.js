import { config } from "dotenv";
import fs from "fs";
import path from "path";
const envFileName = `.env`;
if (!fs.existsSync(path.resolve(envFileName))) {
  console.log(`Không tìm thấy file môi trường ${envFileName}`);
  console.log(
    `Lưu ý: App không dùng file .env, ví dụ môi trường development thì app sẽ dùng file .env.development`
  );
  console.log(
    `Vui lòng tạo file ${envFileName} và tham khảo nội dung ở file .env.example`
  );
  process.exit(1);
}
config({
  path: envFileName,
});
export const envConfig = {
  port: process.env.PORT || 4000,
  host: process.env.HOST,
  // Accept either uppercase or lowercase env var names (some .env files use lowercase)
  dbUsername: process.env.DB_USERNAME || process.env.dbUsername,
  dbPassword: process.env.DB_PASSWORD || process.env.dbPassword,
  dbName: process.env.DB_NAME || process.env.dbName,
};
