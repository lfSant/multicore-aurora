# Libreria de MULTICORE

Librería TypeScript para gestión dinámica de múltiples conexiones a cores bancarios de cooperativas.

## 🎯 Qué hace

- Recibe input estándar (p.ej. `{ clientIdentification: "1000275816" }`)
- Mapea dinámicamente según configuración en MySQL (p.ej. `{ identificacionCliente: "1000275816" }`)
- Llama al core con ruta/método/timeout/headers/params definidos en base de datos
- Normaliza respuesta a envelope estándar (éxito/error) con opción de incluir `raw`

## 📦 Instalación

### Desde GitHub (Recomendado)

```bash
# Última versión desde rama release
npm install git+ssh://git@github.com/lfSant/multicore-aurora.git#release

# Versión específica por tag
npm install git+ssh://git@github.com/lfSant/multicore-aurora.git#v1.0.1

# O con HTTPS
npm install git+https://github.com/lfSant/multicore-aurora.git#release
npm install git+https://github.com/lfSant/multicore-aurora.git#v1.0.1
```

### Desarrollo Local

```bash
# Clonar repositorio
git clone git@github.com:lfSant/multicore-aurora.git
cd multicore-aurora

# Instalar dependencias
yarn install

# Compilar
yarn build

# Copiar dist/ al proyecto consumidor
cp -r dist /path/to/project/multicore-connector
```

Agregar al `package.json` del proyecto consumidor:
```json
{
  "dependencies": {
    "multicore-connector": "./multicore-connector"
  }
}
```

## 🌿 Ramas

- **`develop`**: Rama de desarrollo (código fuente completo)
- **`release`**: Rama de distribución (solo dist/ + configs) - **usar para npm install**

## 🔄 Workflow de Desarrollo

### 1. Hacer Cambios en `develop`

```bash
# Asegurarse de estar en develop
git checkout develop

# Hacer cambios en src/
# ... editar archivos ...

# Compilar para verificar
yarn build
```

### 2. Incrementar Versión (Semántico)

Antes de hacer deploy, incrementa la versión según el tipo de cambio:

```bash
# Para correcciones de bugs (1.0.0 → 1.0.1)
yarn version:patch

# Para nuevas funcionalidades compatibles (1.0.0 → 1.1.0)
yarn version:minor

# Para cambios incompatibles (1.0.0 → 2.0.0)
yarn version:major
```

### 3. Desplegar con Scripts Automatizados

```bash
# Opción A: Desplegar solo a develop
yarn deploy:develop

# Opción B: Desplegar solo a release (compila y crea tag)
yarn deploy:release

# Opción C: Desplegar a ambas ramas (RECOMENDADO)
yarn deploy:all
```

El script `deploy:release` automáticamente:
- ✅ Compila el código (`yarn build`)
- ✅ Cambia a rama `release`
- ✅ Copia el `package.json` con la nueva versión
- ✅ Agrega `dist/` y `package.json`
- ✅ Crea commit con mensaje "chore(release): update dist v1.x.x"
- ✅ Crea tag git con la versión (ej: `v1.0.1`)
- ✅ Hace push a `release` con tags
- ✅ Regresa a rama `develop`

### 4. Instalar Versión Específica

Los consumidores pueden instalar versiones específicas usando tags:

```bash
# Última versión desde release
npm install git+ssh://git@github.com/lfSant/multicore-aurora.git#release

# Versión específica por tag
npm install git+ssh://git@github.com/lfSant/multicore-aurora.git#v1.0.1
npm install git+ssh://git@github.com/lfSant/multicore-aurora.git#v1.2.0
```

### Ejemplo Completo de Deploy

```bash
# 1. Hacer cambios
git checkout develop
# ... editar src/ ...

# 2. Incrementar versión (corrección de bug)
yarn version:patch  # 1.0.0 → 1.0.1

# 3. Desplegar todo
yarn deploy:all

# Resultado:
# ✅ develop actualizado con nueva versión en package.json
# ✅ release actualizado con dist/ compilado
# ✅ Tag v1.0.1 creado en GitHub
```

### ⚠️ Importante

- **NO commitear `dist/` en `develop`** - está ignorado en `.gitignore`
- **SÍ commitear `dist/` en `release`** - es la rama de distribución
- **Solo `src/`, `queries/`, `.github/`** se commitean en `develop`
- **Siempre compilar** con `yarn build` antes de actualizar `release`