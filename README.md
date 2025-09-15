# API Connector

Librería que permite abstraer la conexión y consumo de APIs externas a través de operaciones estandarizadas.

## Objetivo

Proveer una forma desacoplada y reutilizable para interactuar con servicios externos, centralizando la lógica de conexión y transformación.

## Instalación

```bash
yarn install
```

## Estructura del proyecto

```
api-connector/
├── .DS_Store
├── package-lock.json
├── package.json
├── src
│   ├── dto
│   │   ├── api-response-status.ts
│   │   ├── api-response.dto.ts
│   │   ├── users
│   │   │   ├── user.dto.ts
│   ├── index.ts
│   ├── operations
│   │   ├── operation.ts
│   │   │   ├── post-user-base-query.operation.ts
│   ├── rest-backend-connector.module.ts
│   ├── rest-backend-connector.service.spec.ts
│   ├── rest-backend-connector.service.ts
│   ├── validator
│   │   ├── generic-response.validator.ts
│   │   ├── response.validator.ts
├── tsconfig.lib.json
├── yarn.lock
```

## Uso

1. Define una operación en el conector (GET, POST, PUT, DELETE).
2. Configura el endpoint y headers necesarios.
3. Usa el método `execute` para enviar la solicitud.

## Integración en otros proyectos

`api-connector` está diseñado como una librería que puede ser importada en otros proyectos NestJS para consumir servicios externos de forma estandarizada.

### Registro del módulo

Importa el módulo `BackendConnectorModule` y utiliza `forRoot()` para configurar el `baseUrl` y los encabezados por defecto:

```ts
import { BackendConnectorModule } from 'api-connector';

@Module({
  imports: [
    BackendConnectorModule.forRoot({
      baseUrl: 'https://innova29bus-pruebas.29deoctubre.fin.ec:443',
      defaultHeaders: {
        'X-App-Token': '123456',
      },
    }),
  ],
})
export class AppModule {}
```

### Ejecución de una operación con `RestBackendConnectorService`

```ts
import { RestBackendConnectorService } from 'api-connector';
import { PostUserBaseQuery } from './operations/PostUserBaseQuery';

@Injectable()
export class UserService {
  constructor(
    private readonly connector: RestBackendConnectorService
  ) {}

  async createUser(userDto: any) {
    const operation = new PostUserBaseQuery(userDto);
    const result = await this.connector.execute(operation);
    return result.data;
  }
}
```


## Documentación técnica - Compodoc

### Instalación (una sola vez)

```bash
yarn global add @compodoc/compodoc
```

### Generar la documentación

```bash
yarn compodoc
```

> Asegúrate de que en tu `package.json` esté definido un script similar a:

```json
"scripts": {
  "compodoc": "compodoc -p tsconfig.json -s"
}
```
## Ejemplo de uso con `Operation` y `PostUserBaseQuery`

Supongamos que deseas hacer un POST a un servicio externo para registrar un usuario. Primero defines la operación extendiendo `Operation` y luego ejecutas esa operación con `apiConnector`.

### 1. Definir la operación

```ts
// src/operations/PostUserBaseQuery.ts
import { Operation } from '../core/Operation';

export class PostUserBaseQuery extends Operation {
  constructor(private payload: any) {
    super();
  }

  getConfig() {
    return {
      method: 'POST',
      url: '/users',
      data: this.payload,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
}
```

### 2. Ejecutar la operación

```ts
import { apiConnector } from '../core/ApiConnector';
import { PostUserBaseQuery } from '../operations/PostUserBaseQuery';

const payload = {
  clienteId: '12345'
};

const operation = new PostUserBaseQuery(payload);

const response = await apiConnector.execute(operation);
console.log(response.data);
```


### Ver la documentación

```bash
yarn compodoc
```

Esto abrirá un servidor local en:

```
http://localhost:8080
```



## Licencia

MIT
