CREATE DATABASE IF NOT EXISTS bibliotecadb;

USE bibliotecadb;

CREATE TABLE autores (
    id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    nacionalidad VARCHAR(50),
    fecha_nacimiento DATE
);

CREATE TABLE libros(
    id_libro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    fecha_publicacion DATE,
    genero VARCHAR(50),
    id_autor INT,
    FOREIGN KEY (id_autor) REFERENCES Autores(id_autor)
);

DESCRIBE autores;
DESCRIBE libros;
