CREATE TABLE IF NOT EXISTS MedievalStore;

USE MedievalStore;

CREATE TABLE Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  classe TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE Orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  FOREIGN KEY (userId) REFERENCES Users (id)
);

CREATE TABLE Products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  orderId INTEGER,
  FOREIGN KEY (orderId) REFERENCES Orders (id)
);

INSERT INTO Users (username, classe, level, password)
VALUES
  ("Cateline", "Médica", 30, "juc3NM2yxVB2"),
  ("Letholdus", "Guerreiro", 8, "JhANPSnHTxP7"),
  ("Urd", "Arquiteta", 5, "tc&GXD2eEN=nfRzL"),
  ("Hawise", "Lenhador", 2, "fu*K9V?QuLjAdn*k");

INSERT INTO Orders
VALUES
  (1),
  (2),
  (3),
  (4),

INSERT INTO Products (name, amount)
VALUES
  ("Elmo", "10 barras de ouro"),
  (
    "Bacinete",
    "5 barras de ouro",
    1
  ),
  ("Cabasset", "1 barra de ouro"),
  ("Morrião", "25 barras de ouro");
