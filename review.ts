// review.ts
export class Review {
  private id: number | null;
  private bookId: number;
  private rating: number;
  private title: string;
  private text: string;

  constructor(bookId: number, rating: number, title: string, text: string) {
    if (!bookId || !rating || !title || !text) {
      throw new Error('All fields are required');
    }
    if (rating < 1 || rating > 5) {
      throw new Error('Rating must be between 1 and 5');
    }
    this.id = null;
    this.bookId = bookId;
    this.rating = rating;
    this.title = title;
    this.text = text;
  }

  public getId(): number | null {
    return this.id;
  }

  public getBookId(): number {
    return this.bookId;
  }

  public getRating(): number {
    return this.rating;
  }

  public getTitle(): string {
    return this.title;
  }

  public getText(): string {
    return this.text;
  }
}
