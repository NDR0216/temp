import { Review } from './review';
import { calculateAverageRating } from './review-utils';

describe('calculateAverageRating', () => {
  it('should calculate the average rating', () => {
    const reviews = [
      new Review(1, 5, 'Excellent book', 'This book is a must-read'),
      new Review(1, 4, 'Good book', 'This book is good'),
      new Review(1, 3, 'Average book', 'This book is average'),
    ];
    const average = calculateAverageRating(reviews);
    expect(average).toBe(4);
  });

  it('should throw an error when calculating average rating for an empty list of reviews', () => {
    expect(() => calculateAverageRating([])).toThrowError('Cannot calculate average rating for an empty list of reviews');
  });
});
