enum Queries {
  GetAllProducts = 'SELECT * FROM Trybesmith.Products',
  SaveProduct = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
  SaveUser = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
}

export default Queries;
