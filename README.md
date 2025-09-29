# Libreria de MULTICORE

npmo run build y colocal el dist en la raiz del proyecto que se va a usar con el nombre:
```
multicore-connector
```
y agregar al package.json en las dependencias:
```
"multicore-connector": "./multicore-connector",
```
para llamar a la libreria e instalar el conpilado de la libreria.

## Semilla de la libreria para la creacion de la tabla
```
CREATE TABLE `mapping_config` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `provider_key`     VARCHAR(64) NOT NULL,
  `operation_key`    VARCHAR(64) NOT NULL,
  `version`          INT NOT NULL DEFAULT 1,
  `is_active`        TINYINT(1) NOT NULL DEFAULT 1,
  `request_body_map`    JSON NOT NULL,
  `request_headers_map` JSON NULL,
  `request_params_map`  JSON NULL,
  `response_items_map`  JSON NOT NULL,
  `response_raw`        TINYINT(1) NOT NULL DEFAULT 1,
  `error_rules_json`    JSON NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_provider_operation_version` (`provider_key`(32),`operation_key`(32),`version`)
) ENGINE=InnoDB AUTO_INCREMENT=5265313 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE INDEX ix_map_lookup ON mapping_config(provider_key, operation_key, is_active, version);

INSERT INTO mapping_config
(provider_key,operation_key,version,is_active,request_body_map,response_items_map,response_raw,error_rules_json)
VALUES
(
  'dy-23','getClientProfile',1,1,
  JSON_OBJECT(
    'identificacionCliente', JSON_OBJECT('from','clientIdentification')
  ),
  JSON_ARRAY(
    JSON_OBJECT(
      'clientNumber',         JSON_OBJECT('from','numeroCliente'),
      'currencyCode',         JSON_OBJECT('from','secuencialMoneda'),
      'officeId',             JSON_OBJECT('from','secuencialOficina'),
      'officeName',           JSON_OBJECT('from','nombreOficina'),
      'firstNames',           JSON_OBJECT('from','nombres'),
      'lastNames',            JSON_OBJECT('from','apellidos'),
      'identification',       JSON_OBJECT('from','identificacion'),
      'identificationType',   JSON_OBJECT('from','secuencialTipoIdentificacion'),
      'address',              JSON_OBJECT('from','direccion'),
      'birthDateMs',          JSON_OBJECT('from','fechaNacimiento'),
      'countryCode',          JSON_OBJECT('from','codigoPais'),
      'countryName',          JSON_OBJECT('from','nombrePais'),
      'email',                JSON_OBJECT('from','correoElectronico'),
      'phone',                JSON_OBJECT('from','telefono'),
      'tradeName',            JSON_OBJECT('from','nombreComercial'),
      'businessName',         JSON_OBJECT('from','razonSocial'),
      'naturalPerson',        JSON_OBJECT('from','esPersonaNatural'),
      'gender',               JSON_OBJECT('from','sexo'),
      'maritalStatusCode',    JSON_OBJECT('from','codigoEstadoCivil'),
      'educationTypeCode',    JSON_OBJECT('from','codigoTipoEducacion'),
      'professionCode',       JSON_OBJECT('from','codigoProfesion')
    )
  ),
  1,
  JSON_ARRAY(
    JSON_OBJECT(
      'when', JSON_OBJECT('status',403,'body.code','419'),
      'client','Parámetros del usuario temporalmente no disponibles',
      'server','token expired',
      'status',403,
      'codeHint','E-TOKEN'
    )
  )
);

INSERT INTO mapping_config
(provider_key,operation_key,version,is_active,request_body_map,response_items_map,response_raw,error_rules_json)
VALUES
(
  'dy-29','getClientProfile',1,1,
  JSON_OBJECT(
    'cliIdentificacion', JSON_OBJECT('from','clientIdentification')
  ),
  JSON_ARRAY(
    JSON_OBJECT(
      'clientNumber',         JSON_OBJECT('toNumber', JSON_OBJECT('from','cliCodigoCore')),
      'currencyCode',         JSON_OBJECT('const','USD'),
      'officeId',             JSON_OBJECT('const',''),
      'officeName',           JSON_OBJECT('const',''),
      'firstNames',           JSON_OBJECT('join', JSON_OBJECT('of', JSON_ARRAY('cliNombre1','cliNombre2'), 'sep',' ')),
      'lastNames',            JSON_OBJECT('join', JSON_OBJECT('of', JSON_ARRAY('cliApellido1','cliApellido2'), 'sep',' ')),
      'identification',       JSON_OBJECT('from','cliIdentificacion'),
      'identificationType',   JSON_OBJECT('from','cliTipoIdentificacion'),
      'address',              JSON_OBJECT('from','direccion'),
      'birthDateMs',          JSON_OBJECT('toDateMs', JSON_OBJECT('from','cliFechaNacimiento','format','iso')),
      'countryCode',          JSON_OBJECT('const',0),
      'countryName',          JSON_OBJECT('from','descripcionNacionalidad'),
      'email',                JSON_OBJECT('from','cliEmail'),
      'phone',                JSON_OBJECT('coalesce', JSON_ARRAY('cliCelular','cliTelefono')),
      'tradeName',            JSON_OBJECT('from','cliNombreCompleto'),
      'businessName',         JSON_OBJECT('from','cliRazonSocial'),
      'naturalPerson',        JSON_OBJECT('mapValue', JSON_OBJECT('from','cliTipoPersona','dict', JSON_OBJECT('1', true,'2', false),'default', true)),
      'gender',               JSON_OBJECT('from','cliSexo'),
      'maritalStatusCode',    JSON_OBJECT('from','estadoCivil'),
      'educationTypeCode',    JSON_OBJECT('from','codigoNivelEstudios'),
      'professionCode',       JSON_OBJECT('const',''),
      'extras',               JSON_OBJECT('pick', JSON_ARRAY('tipoVivienda','codigoTipoVivienda','nivelEstudios','provincia','ciudad','cliUsuario','cliTieneTarjeta','cliEstado','cliLugarNacimiento','cliObservaciones'))
    )
  ),
  1,
  JSON_ARRAY(
    JSON_OBJECT(
      'when', JSON_OBJECT('status',200,'body.estadoTransaccion', false),
      'client','Parámetros del usuario temporalmente no disponibles',
      'server','Proveedor dy-29 (getClientProfile) retornó estadoTransaccion=false',
      'status',502,
      'codeHint','E-BIZ'
    ),
    JSON_OBJECT(
      'when', JSON_OBJECT('status',200,'body.errorCodigo', 500),
      'client','Parámetros del usuario temporalmente no disponibles',
      'server','Proveedor dy-29 (getClientProfile) error interno',
      'status',502,
      'codeHint','E-PROVIDER'
    )
  )
);
```