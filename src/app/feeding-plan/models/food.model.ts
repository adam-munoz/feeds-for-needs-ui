export enum ServingSizeMeasurement {
    'cups' = 'cups',
    'grams' = 'grams',
    'teaspoons' = 'teaspoons',
    'tablespoons' = 'tablespoons',
    'ounces' = 'ounces'
}

export interface Food {
    name?: string;
    description?: string;
    servingSize?: string;
    numberOfServings?: number;
    caloriesPerServing?: number;
    gramsProteinPerServing?: number;
    gramsCarbsPerServing?: number;
    gramsFatPerServing?: number;
    calories?: number;
    carbs?: number;
    fat?: number;
    protein?: number;

}
