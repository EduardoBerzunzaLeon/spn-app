-- Crear base de datos con log
CREATE DATABASE prueba WITH BUFFERED LOG;

-- Conectarse a ella
DATABASE prueba;

-- Crear tabla con estructura correcta (ajusta las columnas a tu necesidad)
CREATE TABLE rfc (
    id          SERIAL          NOT NULL,
    nombre      VARCHAR(100)    NOT NULL,
    descripcion VARCHAR(255),
    fecha       DATE,
    PRIMARY KEY (id)
);

-- Permisos
GRANT ALL PRIVILEGES ON rfc TO PUBLIC;

-- Estadísticas
UPDATE STATISTICS FOR TABLE rfc;

-- Insert de prueba
INSERT INTO rfc (nombre, descripcion, fecha) 
VALUES ('test', 'registro de prueba', TODAY);