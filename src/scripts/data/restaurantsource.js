/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDataSource {
  static async getAllData() {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_DATA);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.log(error);
    }
  }

  static async getDetailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  static async addReview(review) {
    try {
      const response = await fetch(API_ENDPOINT.POST_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export default RestaurantDataSource;
