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
 
INSERT INTO autores (nombre, nacionalidad, fecha_nacimiento) VALUES 
    ('Gabriel García Márquez', 'Colombiano', '1927-03-06'),
    ('Jane Austen', 'Británica', '1775-12-16'),
    ('Jorge Luis Borges', 'Argentino', '1899-08-24'),
    ('Isabel Allende', 'Chilena', '1942-08-02'),
    ('Haruki Murakami', 'Japonés', '1949-01-12');


INSERT INTO Libros (titulo, fecha_publicacion, genero, id_autor) VALUES 
    ('Cien años de soledad', '1967-05-30', 'Realismo Mágico', 5),
    ('Orgullo y prejuicio', '1813-01-28', 'Novela', 6),
    ('Ficciones', '1944-01-01', 'Cuento', 10),
    ('La casa de los espíritus', '1982-01-01', 'Novela', 10),
    ('Kafka en la orilla', '2002-09-12', 'Ficción', 10);

