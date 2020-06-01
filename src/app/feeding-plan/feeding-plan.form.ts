import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Meal } from './models/meal.model';
import { Food } from './models/food.model';
import { FeedingPlan } from './models/feeding-plan.model';

export const foodFormGroup = (food: Food = {}): FormGroup => (
    new FormGroup({
        name: new FormControl(food.name || '', Validators.required),
        description: new FormControl(food.description || '', Validators.required),
        servingSize: new FormControl(food.servingSize || 0, Validators.required),
        numberOfServings: new FormControl(food.numberOfServings || 0, Validators.required),
        caloriesPerServing: new FormControl(food.caloriesPerServing || 0, Validators.required),
        gramsProteinPerServing: new FormControl(food.gramsProteinPerServing || 0, Validators.required),
        gramsCarbsPerServing: new FormControl(food.gramsCarbsPerServing || 0, Validators.required),
        gramsFatPerServing: new FormControl(food.gramsFatPerServing || 0, Validators.required),
        calories: new FormControl(food.calories || 0, Validators.required),
        carbs: new FormControl(food.carbs || 0, Validators.required),
        fat: new FormControl(food.fat || 0, Validators.required),
        protein: new FormControl(food.protein || 0, Validators.required),

    })
);

export const foodFormArray = (foods: Food[] = [{}]): FormArray => (
    new FormArray(foods.map(food => (foodFormGroup(food))))
);

export const mealFormGroup = (meal: Meal = {}): FormGroup => (
    new FormGroup({
        foods: foodFormArray(meal.foods),
        calories: new FormControl(meal.calories || 0, Validators.required),
        fat: new FormControl(meal.fat || 0, Validators.required),
        carbs: new FormControl(meal.carbs || 0, Validators.required),
        protein: new FormControl(meal.protein || 0, Validators.required),
        name: new FormControl(meal.name || '', Validators.required)
    })
);

export const mealFormArray = (meals: Meal[] = [{}]): FormArray => (
    new FormArray(meals.map(meal => (mealFormGroup(meal))))
);

export const mealPlanFormGroup = (mealPlan: FeedingPlan = {}): FormGroup => (
    new FormGroup({
        meals: mealFormArray(mealPlan.meals),
        calories: new FormControl(mealPlan.calories || 0, Validators.required),
        fat: new FormControl(mealPlan.fat || 0, Validators.required),
        carbs: new FormControl(mealPlan.carbs || 0, Validators.required),
        protein: new FormControl(mealPlan.protein || 0, Validators.required),

    })
);
