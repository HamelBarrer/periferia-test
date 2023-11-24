export interface RestaurantMenuItem {
  restaurantMenuItemId: number;
  name: string;
  isActive: boolean;
}

export interface RestaurantMenu {
  restaurantMenuId: number;
  name: string;
  isActive: boolean;
  restaurantMenuItem: RestaurantMenuItem;
}

export interface Restaurant {
  restaurantId: number;
  name: string;
  menu: string;
  // restaurantMenu?: RestaurantMenu;
}
