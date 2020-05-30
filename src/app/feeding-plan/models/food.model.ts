export enum ServingSizeMeasurement {
    'cup' = 'cup',
    'grams' = 'grams',
    'teaspoons' = 'teaspoons',
    'tablespoons' = 'tablespoons',
    'ounces' = 'ounces'
}

export interface Food {
    name: string;
    description: string;
    servingSize: number;
    servingSizeMeasurement: ServingSizeMeasurement;
    numberOfServings: number;
    caloriesPerServing: number;
    gramsProteinPerServing: number;
    gramsCarbsPerServing: number;
    gramsFatPerServing: number;

}
