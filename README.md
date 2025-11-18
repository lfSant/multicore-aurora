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
# Instalar desde rama release (solo dist/ compilado)
npm install git+ssh://git@github.com/lfSant/multicore-aurora.git#release

# O con HTTPS
npm install git+https://github.com/lfSant/multicore-aurora.git#release
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

### 1. Desarrollar en `develop`

```bash
# Asegurarse de estar en develop
git checkout develop

# Hacer cambios en src/
# ... editar archivos ...

# Compilar para verificar
yarn build

# Commitear solo cambios de src/ (dist/ está ignorado en develop)
git add src/
git commit -m "feat: nueva funcionalidad"
git push github develop
```

### 2. Actualizar `release` con nuevo `dist/`

```bash
# Asegurarse de tener el dist/ actualizado
yarn build

# Cambiar a rama release
git checkout release

# Agregar el nuevo dist/
git add dist/
git commit -m "chore: update dist from develop"
git push github release

# Volver a develop
git checkout develop
```

### 3. Workflow Completo (Recomendado)

```bash
# 1. Desarrollar
git checkout develop
# ... hacer cambios en src/ ...
yarn build
git add src/ queries/ .github/
git commit -m "feat: descripción del cambio"
git push github develop

# 2. Actualizar release
yarn build  # asegurar dist/ actualizado
git checkout release
git add dist/
git commit -m "chore: update dist from develop"
git push github release
git checkout develop
```

### ⚠️ Importante

- **NO commitear `dist/` en `develop`** - está ignorado en `.gitignore`
- **SÍ commitear `dist/` en `release`** - es la rama de distribución
- **Solo `src/`, `queries/`, `.github/`** se commitean en `develop`
- **Siempre compilar** con `yarn build` antes de actualizar `release`