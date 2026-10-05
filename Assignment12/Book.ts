export class book {
  constructor(
    private id: number,
    private isbn: string,
    private title: string,
    private author: string,
    private isAvailable: boolean,
  ) {}

  public getid(): number {
    return this.id;
  }
  public getIsbn(): string {
    return this.isbn;
  }
  public getTitle(): string {
    return this.title;
  }
  public getAuthor(): string {
    return this.author;
  }
  public getIsAvailable(): boolean {
    return this.isAvailable;
  }

  public setid(id: number): void {
    this.id = id;
  }
  public setIsbn(isbn: string): void {
    this.isbn = isbn;
  }
  public setTitle(title: string): void {
    this.title = title;
  }
  public setAuthor(author: string): void {
    this.author = author;
  }
  public setIsAvailable(isAvailable: boolean): void {
    this.isAvailable = isAvailable;
  }

  public getInfo(): string {
    let status = "Borrowed";
    if (this.isAvailable) {
      status = "Available";
    }
    return `[ISBN-${this.isbn}] ${this.title} by ${this.author} Status: ${status}`;
  }
}
