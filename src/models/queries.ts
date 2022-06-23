enum Queries {
  GetAllProducts = 'SELECT * FROM MedievalStore.Products',
  SaveProduct = 'INSERT INTO MedievalStore.Products (name, amount) VALUES (?, ?)',
  SaveUser = 'INSERT INTO MedievalStore.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
  GetAllOrders = 'SELECT * from MedievalStore.Orders',
  GetUserByUsername = 'SELECT * from MedievalStore.Users WHERE username = ?',
}

export default Queries;
