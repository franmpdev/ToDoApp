-- Crear base de datos
DROP DATABASE IF EXISTS tasks;
CREATE DATABASE tasks;
-- Usuario
DROP USER 'nestuser'@'localhost';
CREATE USER 'nestuser'@'localhost' IDENTIFIED BY 'passuser';
GRANT ALL PRIVILEGES ON tasks.* TO 'nestuser'@'localhost';

-- Usar la base de datos
USE tasks;

-- Crear tabla usuarios
CREATE TABLE usuarios (
  usuario_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  contraseña VARCHAR(255) NOT NULL,
  fecha_creacion DATE
);

-- Crear tabla tareas
CREATE TABLE tareas (
  tarea_id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descripcion VARCHAR(255),
  fecha DATE,
  usuario_id INT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id)
);
