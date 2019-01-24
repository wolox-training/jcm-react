import api from '../config/api';

const FoodService = {
  getFoods: () => api.get('/foods')
};

export default FoodService;
