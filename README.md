# Libreria de MULTICORE

- Qué hace la librería
- Recibe input estándar (p.ej. { clientIdentification: "1000275816" }).
- Mapea a lo que el core necesita (p.ej. { identificacionCliente: "1000275816" }).
- Llama al core con ruta/método/timeout/headers/params definidos en MySQL.
- Normaliza la respuesta a un envelope estándar (éxito/error) e incluye raw (opcional) con lo que devolvió el core.

yarn build y colocal el dist en la raiz del proyecto que se va a usar con el nombre:

```
/multicore-connector
```

y agregar al package.json en las dependencias:

```
"multicore-connector": "./multicore-connector",
```

para llamar a la libreria e instalar el compilado de la libreria.

## Semilla de la libreria para la creacion de la tabla

```
CREATE TABLE `mapping_config` (
  `id` int NOT NULL AUTO_INCREMENT,
  `provider_key` varchar(64) NOT NULL,
  `operation_key` varchar(64) NOT NULL,
  `version` int NOT NULL DEFAULT '1',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `request_path` varchar(512) DEFAULT NULL,
  `request_method` varchar(10) DEFAULT NULL,
  `request_timeout_ms` int DEFAULT NULL,
  `default_headers_json` json DEFAULT NULL,
  `default_params_json` json DEFAULT NULL,
  `request_body_map` json NOT NULL,
  `request_headers_map` json DEFAULT NULL,
  `request_params_map` json DEFAULT NULL,
  `response_items_map` json NOT NULL,
  `response_raw` tinyint(1) NOT NULL DEFAULT '1',
  `error_rules_json` json NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_provider_operation_version` (`provider_key`(32),`operation_key`(32),`version`),
  KEY `ix_map_lookup` (`provider_key`,`operation_key`,`is_active`,`version`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO ws_multicore.mapping_config
(provider_key, operation_key, version, is_active, title, description, request_path, request_method, request_timeout_ms, default_headers_json, default_params_json, request_body_map, request_headers_map, request_params_map, response_items_map, response_raw, error_rules_json, created_at, updated_at)
VALUES('dy-23', 'getClientProfile', 1, 1, 'SERVICIO DE INFORMACION DEL CLIENTE', 'Configuraciones de mapeo para la obtencion de mapeo de servicio.', '/datosPorIdentificacion', 'POST', 10000, '{}', '{}', '{"identificacionCliente": {"from": "clientIdentification"}}', '{}', '{}', '[{"email": {"from": "correoElectronico"}, "phone": {"from": "telefono"}, "gender": {"from": "sexo"}, "address": {"from": "direccion"}, "officeId": {"from": "secuencialOficina"}, "lastNames": {"from": "apellidos"}, "tradeName": {"from": "nombreComercial"}, "firstNames": {"from": "nombres"}, "officeName": {"from": "nombreOficina"}, "birthDateMs": {"from": "fechaNacimiento"}, "countryCode": {"from": "codigoPais"}, "countryName": {"from": "nombrePais"}, "businessName": {"from": "razonSocial"}, "clientNumber": {"from": "numeroCliente"}, "currencyCode": {"from": "secuencialMoneda"}, "naturalPerson": {"from": "esPersonaNatural"}, "identification": {"from": "identificacion"}, "professionCode": {"from": "codigoProfesion"}, "educationTypeCode": {"from": "codigoTipoEducacion"}, "maritalStatusCode": {"from": "codigoEstadoCivil"}, "identificationType": {"from": "secuencialTipoIdentificacion"}}]', 1, '[{"when": {"status": 403, "body.code": "419"}, "client": "Su token esta espirado chch!!!!!!!!!!!", "server": "token expired", "status": 403, "codeHint": "E-TOKEN"}, {"when": {"tieneError": true, "respuestaCod": "18201"}, "client": "No existen datos para la identificación proporcionada", "server": "Proveedor dy-23 (getClientProfile): sin datos", "status": 404, "codeHint": "E-NOTFOUND", "whenContains": {"mensaje": "no existen datos"}}, {"when": {"tieneError": true, "respuestaCod": "18103"}, "client": "No existen datos para la identificación proporcionada", "server": "Proveedor dy-23 (getClientProfile): error del core", "status": 404, "codeHint": "E-NOTFOUND"}]', '2025-09-28 16:40:32', '2025-10-03 21:46:19');

INSERT INTO ws_multicore.mapping_config
(provider_key, operation_key, version, is_active, title, description, request_path, request_method, request_timeout_ms, default_headers_json, default_params_json, request_body_map, request_headers_map, request_params_map, response_items_map, response_raw, error_rules_json, created_at, updated_at)
VALUES('dy-29', 'getClientProfile', 1, 1, 'SERVICIO DE INFORMACION DEL CLIENTE', 'Configuraciones de mapeo para la obtencion de mapeo de servicio.', '/ConsultarClienteIdentificacion', 'POST', 45000, '{}', '{}', '{"cliIdentificacion": {"from": "clientIdentification"}}', '{}', '{}', '[{"email": {"from": "cliEmail"}, "phone": {"coalesce": ["cliCelular", "cliTelefono"]}, "extras": {"pick": ["tipoVivienda", "codigoTipoVivienda", "nivelEstudios", "provincia", "ciudad", "cliUsuario", "cliTieneTarjeta", "cliEstado", "cliLugarNacimiento", "cliObservaciones"], "append": {"sourceCore": "dy-29"}, "mapKeys": {"ciudad": "city", "cliEstado": "clientState", "provincia": "province", "cliUsuario": "username", "tipoVivienda": "housingType", "nivelEstudios": "educationLevel", "cliTieneTarjeta": "hasCard", "cliObservaciones": "notes", "cliLugarNacimiento": "birthPlace", "codigoTipoVivienda": "housingTypeCode"}}, "gender": {"from": "cliSexo"}, "address": {"from": "direccion"}, "officeId": {"const": ""}, "lastNames": {"join": {"of": ["cliApellido1", "cliApellido2"], "sep": " "}}, "tradeName": {"from": "cliNombreCompleto"}, "firstNames": {"join": {"of": ["cliNombre1", "cliNombre2"], "sep": " "}}, "officeName": {"const": ""}, "birthDateMs": {"toDateMs": {"from": "cliFechaNacimiento", "format": "iso"}}, "countryCode": {"const": 0}, "countryName": {"from": "descripcionNacionalidad"}, "businessName": {"from": "cliRazonSocial"}, "clientNumber": {"toNumber": {"from": "cliCodigoCore"}}, "currencyCode": {"const": "USD"}, "naturalPerson": {"mapValue": {"dict": {"1": true, "2": false}, "from": "cliTipoPersona", "default": true}}, "identification": {"from": "cliIdentificacion"}, "professionCode": {"const": ""}, "educationTypeCode": {"from": "codigoNivelEstudios"}, "maritalStatusCode": {"from": "estadoCivil"}, "identificationType": {"from": "cliTipoIdentificacion"}}]', 1, '[{"when": {"status": 200, "body.estadoTransaccion": false}, "client": "Parámetros del usuario temporalmente no disponibles", "server": "Proveedor dy-29 (getClientProfile) retornó estadoTransaccion=false", "status": 502, "codeHint": "E-BIZ"}, {"when": {"status": 200, "body.errorCodigo": 500}, "client": "Parámetros del usuario temporalmente no disponibles", "server": "Proveedor dy-29 (getClientProfile) error interno", "status": 502, "codeHint": "E-PROVIDER"}]', '2025-09-28 16:42:30', '2025-10-03 22:00:51');
```