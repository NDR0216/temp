// review.test.ts
import { Review } from './review';

describe('Review', () => {
  it('should create a new review', () => {
    const review = new Review(1, 5, 'Excellent book', 'This book is a must-read');
    expect(review.getBookId()).toBe(1);
    expect(review.getRating()).toBe(5);
    expect(review.getTitle()).toBe('Excellent book');
    expect(review.getText()).toBe('This book is a must-read');
  });

  it('should throw an error when creating a review without book ID', () => {
    expect(() => new Review(0, 5, 'Excellent book', 'This book is a must-read')).toThrowError('All fields are required');
  });

  it('should throw an error when creating a review without rating', () => {
    expect(() => new Review(1, 0, 'Excellent book', 'This book is a must-read')).toThrowError('All fields are required');
  });

  it('should throw an error when creating a review without title', () => {
    expect(() => new Review(1, 5, '', 'This book is a must-read')).toThrowError('All fields are required');
  });

  it('should throw an error when creating a review without text', () => {
    expect(() => new Review(1, 5, 'Excellent book', '')).toThrowError('All fields are required');
  });

  it('should throw an error when creating a review with invalid rating', () => {
    expect(() => new Review(1, 6, 'Excellent book', 'This book is a must-read')).toThrowError('Rating must be between 1 and 5');
  });
});
