// review-utils.ts
import { Review } from './review';
export function calculateAverageRating(reviews: Review[]): number {
  if (!reviews.length) {
    throw new Error('Cannot calculate average rating for an empty list of reviews');
  }
  const sum = reviews.reduce((a, b) => a + b.getRating(), 0);
  return sum / reviews.length;
}
