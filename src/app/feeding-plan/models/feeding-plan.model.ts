import { Meal } from './meal.model';

export interface FeedingPlan {
    meals?: Meal[];
    calories?: number;
    fat?: number;
    carbs?: number;
    protein?: number;
}
