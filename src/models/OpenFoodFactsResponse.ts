export type OpenFoodFactsNutriments = {
  energy?: number;
  fat?: number;
  carbohydrates?: number;
  sugars?: number;
  proteins?: number;
  salt?: number;
};

export type OpenFoodFactsProduct = {
  product_name?: string;
  brands?: string;
  ingredients_text?: string;
  nutriments?: OpenFoodFactsNutriments;
};

export type OpenFoodFactsResponse = {
  code: string;
  product: OpenFoodFactsProduct | null;
};

