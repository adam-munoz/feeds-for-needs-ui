import { Food } from '../feeding-plan/models/food.model';

export const calculateFoodMacrosByServings = (food: Food): { calories: number, fat: number, carbs: number, protein: number } => (
    {
        calories: Math.round((+food.caloriesPerServing || 0) * (+food.numberOfServings || 0)),
        fat: Math.round((+food.gramsFatPerServing || 0) * (+food.numberOfServings || 0)),
        protein: Math.round((+food.gramsProteinPerServing || 0) * (+food.numberOfServings || 0)),
        carbs: Math.round((+food.gramsCarbsPerServing || 0) * (+food.numberOfServings || 0))
    }
);
