//Quais ações o meu carriho pode fazer

//casos de uso
//=> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}
//=> calcular o total
async function calculateTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subtotal());
}

//=> deletar item do carrinho
async function deleteItem(userCart, name) {}
//=> remover um item diminui itens
async function removeItem(userCart, index) {}

export { addItem, calculateTotal, deleteItem, removeItem };
