create database ARQTEC;

use ARQTEC;

CREATE TABLE usuarios(
id INT UNIQUE NOT NULL PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
idade INT,
perfilfoto VARCHAR(255)
);

CREATE TABLE imagens(
exportarfoto VARCHAR(255)
)
   
