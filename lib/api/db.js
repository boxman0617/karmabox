import postgres from "postgres";
import { dbConfig } from "lib/config";

const sql = postgres(dbConfig);

export default sql;
