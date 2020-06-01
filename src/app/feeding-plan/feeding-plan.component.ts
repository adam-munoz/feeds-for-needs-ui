import { Component, OnInit, ViewChild } from '@angular/core';
import { FeedingPlan } from './models/feeding-plan.model';
import { FormGroup, FormArray } from '@angular/forms';
import { mealPlanFormGroup, foodFormGroup, mealFormGroup } from './feeding-plan.form';
import { MatTable } from '@angular/material/table';
import { Meal } from './models/meal.model';
import { Food } from './models/food.model';
import { calculateFoodMacrosByServings } from '../business-service/calculate-macros';

@Component({
  selector: 'app-feeding-plan',
  templateUrl: './feeding-plan.component.html',
  styleUrls: ['./feeding-plan.component.less']
})

export class FeedingPlanComponent implements OnInit {
  mealPlan: FeedingPlan;
  foodColumns: string[] = [
    'name',
    'servingSize',
    'caloriesPerServing',
    'gramsFatPerServing',
    'gramsCarbsPerServing',
    'gramsProteinPerServing',
    'numberOfServings',
    'calories',
    'actions'
  ];
  mealPlanForm: FormGroup;
  @ViewChild('foodTable') table: MatTable<any>;

  constructor() { }

  ngOnInit(): void {
    this.mealPlanForm = mealPlanFormGroup(this.mealPlan);
  }

  addMeal() {
    (this.mealPlanForm.get('meals')['controls'] as FormArray).push(mealFormGroup());
  }

  deleteMeal(mealIndex: number) {
    (this.mealPlanForm.controls.meals as FormArray).controls.splice(mealIndex, 1);
  }

  addFood(meal: FormGroup) {
    (meal.controls.foods['controls'] as FormArray).push(foodFormGroup());
    this.table.renderRows();
  }

  deleteFood(meal: FormGroup, foodIndex: number) {
    (meal.controls.foods as FormArray).controls.splice(foodIndex, 1);
    this.table.renderRows();
  }

  getMealFormAtIndex(mealIndex: number): FormGroup {
    return this.mealPlanForm.get('meals')['controls'][mealIndex];
  }

  getFoodForm(mealIndex: number, foodIndex: number): FormGroup {
    return this.getMealFormAtIndex(mealIndex).get('foods')['controls'][foodIndex];
  }

  calculate() {
    const meals = this.mealPlanForm.getRawValue().meals;
    let totalCal = 0;
    let totalFat = 0;
    let totalCarb = 0;
    let totalProtein = 0;
    meals.forEach((meal: Meal, mealIndex: number) => {
      let cal = 0;
      let fat = 0;
      let carb = 0;
      let protein = 0;
      meal.foods.forEach((food: Food, foodIndex: number) => {
        const totals = calculateFoodMacrosByServings(food);
        this.getFoodForm(mealIndex, foodIndex).get('calories').patchValue(totals.calories, {emit: false});
        this.getFoodForm(mealIndex, foodIndex).get('fat').patchValue(totals.fat, {emit: false});
        this.getFoodForm(mealIndex, foodIndex).get('carbs').patchValue(totals.carbs, {emit: false});
        this.getFoodForm(mealIndex, foodIndex).get('protein').patchValue(totals.protein, {emit: false});
        cal += totals.calories;
        fat += totals.fat;
        carb += totals.carbs;
        protein += totals.protein;
      });
      this.getMealFormAtIndex(mealIndex).get('calories').patchValue(cal, {emit: false});
      this.getMealFormAtIndex(mealIndex).get('fat').patchValue(fat, {emit: false});
      this.getMealFormAtIndex(mealIndex).get('carbs').patchValue(carb, {emit: false});
      this.getMealFormAtIndex(mealIndex).get('protein').patchValue(protein, {emit: false});
      totalCal += cal;
      totalFat += fat;
      totalCarb += carb;
      totalProtein += protein;
    });

    this.mealPlanForm.get('calories').patchValue(totalCal, {emit: false});
    this.mealPlanForm.get('fat').patchValue(totalFat, {emit: false});
    this.mealPlanForm.get('carbs').patchValue(totalCarb, {emit: false});
    this.mealPlanForm.get('protein').patchValue(totalProtein, {emit: false});
  }

}
