enum Queries {
  GetAllProducts = 'SELECT * FROM TrybeSmith.products',
  SaveProduct = 'INSERT INTO TrybeSmith.products (name, amount), values (?, ?)',
  SaveUser = 'INSERT INTO TrybeSmith.users (username, classe, level, password) values (?, ?, ?, ?)',
}

export default Queries;
