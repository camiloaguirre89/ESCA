CREATE DATABASE DB_ESCA;
USE DB_ESCA;
CREATE TABLE producto (
	id INT AUTO_INCREMENT PRIMARY KEY,
	codigoBarras INT,
    nombreProducto varchar(100),
    marcaProducto varchar(100),
    referenciaProducto varchar(100),
    valorIngreso float,
    valorIVA float,
    valorVenta float,
    estadoIngresoProducto varchar(100),
    fechaIngreso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cantidadProducto int,
    descripcionProducto varchar(500)
);

CREATE TABLE proveedor (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nitProveedor INT,
    tipoProveedor varchar(100),
    razonSocial varchar(100),
    representanteLegal varchar(100),
    idRepresentanteLegal int,
    telefono float,
    direccion varchar(200),
    ciudad varchar(100),
    correoElectronico varchar(100),
    estado boolean,
    fechaIngresoProveedor TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notaProveedor varchar(500)
);

CREATE TABLE cliente (
	id INT AUTO_INCREMENT PRIMARY KEY,
	tipoCliente varchar(100),
    tipoId varchar(100),
    numeroDocumento int(100),
    nombreCliente varchar(100),
    apellidoCliente varchar(100),
    telefonoCliente float,
    telefonoFijoCliente float,
    direccionCliente varchar(200),
    ciudad varchar(100),
    correoElectronicoCliente varchar(100),
    fechaNacimientoCliente date,
    genero varchar(50),
    dondeConocio varchar(100),
    notaCliente varchar(500)
);