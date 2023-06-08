import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDataSource {
  static async getAllData() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DATA);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addReview(review) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    return response.json();
  }
}

export default RestaurantDataSource;
