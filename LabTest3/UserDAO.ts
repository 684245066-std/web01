import { User } from "./User";
import { BaseDAO } from "./BaseDAO";

export class UserDAO extends BaseDAO {
    protected iniTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                point INTEGER NOT NULL,
                isActive REAL NOT NULL
            )
        `);
    }

    public insertUser(username: string, point: number, isActive: boolean): void {
        const stmt = this.db.prepare(`INSERT INTO users (username, point, isActive) VALUES (?, ?, ?)`);
        const result = stmt.run(username, point, isActive, 1);
        return result.changes > 0;
    }

    public findUserById(id: number): User | null {
        const stmt = this.db.prepare(`SELECT * FROM users WHERE id = ?`);
        const row = stmt.get(id) as 
        { id: number ;}