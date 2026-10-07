export class User {
    constructor(
        private id: number,
        private username: string,
        private point: number,
        private isActive: boolean
    ) {}
    public getid(): number {
    return this.id;
}
public getusername(): string {
    return this.username;
}
public getpoint(): number {
    return this.point;
}
public getisActive(): boolean {
    return this.isActive;
}
public setid(id: number): void {
    this.id = id;
}
public setusername(username: string): void {
    this.username = username;
}
public setpoint(point: number): void {
    this.point = point;
}
public setisActive(isActive: boolean): void {
    this.isActive = isActive;
}

public canRedeem(requiredPoints: number): boolean {
    if (this.isActive === true && this.point >= requiredPoints) {
        return true;
    }
    return false;
}
}