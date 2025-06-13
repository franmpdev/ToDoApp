-- Crear base de datos
DROP USER 'nestuser'@'localhost';
CREATE USER 'nestuser'@'localhost' IDENTIFIED BY 'passuser';
GRANT ALL PRIVILEGES ON db_peluqueria_canina.* TO 'nestuser'@'localhost';
CREATE DATABASE tasks;
-- Usar la base de datos
USE tasks;

-- Crear tabla usuarios
CREATE TABLE usuarios (
  usuario_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
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

-- Insertar usuarios de ejemplo
INSERT INTO usuarios (nombre, email, password) VALUES
('Juan Pérez', 'juan@example.com', 'password1'),
('Ana Gómez', 'ana@example.com', 'password2'),
('Carlos Ruiz', 'carlos@example.com', 'password3'),
('Lucía Torres', 'lucia@example.com', 'password4'),
('Pedro Sánchez', 'pedro@example.com', 'password5');

-- Insertar tareas de ejemplo
INSERT INTO tareas (titulo, descripcion, fecha, usuario_id) VALUES
('Comprar pan', 'Ir a la panadería y comprar pan fresco', '2025-06-10', 1),
('Estudiar SQL', 'Repasar comandos básicos de SQL', '2025-06-11', 2),
('Llamar al médico', 'Pedir cita para revisión anual', '2025-06-12', 3),
('Hacer ejercicio', 'Salir a correr 30 minutos', '2025-06-13', 4),
('Leer un libro', 'Terminar de leer el libro pendiente', '2025-06-14', 5),
('Revisar correo', 'Leer y responder correos pendientes', '2025-06-15', 1),
('Preparar presentación', 'Crear diapositivas para la reunión', '2025-06-16', 2),
('Pagar facturas', 'Pagar la luz y el agua', '2025-06-17', 3),
('Organizar escritorio', 'Limpiar y ordenar el escritorio de trabajo', '2025-06-18', 4),
('Visitar a los abuelos', 'Ir a casa de los abuelos el fin de semana', '2025-06-19', 5),
('Actualizar CV', 'Agregar experiencia reciente al currículum', '2025-06-20', 1),
('Comprar regalo', 'Buscar un regalo para el cumpleaños de Ana', '2025-06-21', 2),
('Hacer la compra', 'Comprar alimentos para la semana', '2025-06-22', 3),
('Ver una película', 'Ver la nueva película recomendada', '2025-06-23', 4),
('Planificar vacaciones', 'Buscar destinos y alojamiento', '2025-06-24', 5);