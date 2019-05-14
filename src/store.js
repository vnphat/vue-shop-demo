import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
      { invId: 1, name: 'Kinh Tế Học - Khái Lược Những Tư Tưởng Lớn', image: '//placehold.it/200', price: 500 },
      { invId: 2, name: 'Sự kết thúc của thời đại giả kim', image: '//placehold.it/200', price: 200 },
      { invId: 3, name: 'Bạn Đắt Giá Bao Nhiêu?', image: '//placehold.it/200', price: 400 },
      { invId: 4, name: 'Đắc nhân tâm', image: '//placehold.it/200', price: 500 },
    ],
    inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
});