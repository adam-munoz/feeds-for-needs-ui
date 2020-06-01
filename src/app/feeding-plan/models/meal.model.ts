import { Food } from './food.model';

export interface Meal {
    foods?: Food[];
    calories?: number;
    fat?: number;
    carbs?: number;
    protein?: number;
    name?: string;
}
