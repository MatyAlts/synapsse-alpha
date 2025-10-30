## Monorepo overview

This repository now contains two applications:

- **frontend** – a Next.js storefront located in the repository root.
- **backend** – a Spring Boot API located in [`backend/`](backend/) that exposes product, catalog search, authentication and admin features backed by PostgreSQL.

## Backend (Spring Boot)

### Requisitos previos

- Java 17+
- Maven 3.9+
- PostgreSQL 14+

### Configuración de base de datos

1. Crear la base de datos y el usuario:

   ```sql
   CREATE DATABASE synapsse;
   CREATE USER synapsse_app WITH ENCRYPTED PASSWORD 'changeMe';
   GRANT ALL PRIVILEGES ON DATABASE synapsse TO synapsse_app;
   ```

2. Actualizar las credenciales en [`backend/src/main/resources/application.yml`](backend/src/main/resources/application.yml) si es necesario. El esquema se genera y actualiza automáticamente usando JPA (`hibernate.ddl-auto=update`).

3. Opcional: cambiar el valor `synapsse.security.jwt.secret` por una cadena en Base64 generada de forma segura.

### Ejecutar el backend

```bash
cd backend
mvn spring-boot:run
```

Esto expone la API en `http://localhost:8080` con los siguientes grupos principales de endpoints:

- `POST /api/auth/register` y `POST /api/auth/login` – registro y autenticación usando JWT.
- `GET /api/products` / `GET /api/products/{id}` – catálogo público.
- `GET /api/products/search?q=...` – barra de búsqueda sobre nombre y descripción.
- `POST|PUT|DELETE /api/admin/products` – gestión de productos (requiere rol `ADMIN`).
- `GET /api/admin/users` – listado de usuarios para el panel admin (requiere rol `ADMIN`).

Al iniciar por primera vez se crea automáticamente un usuario administrador (`admin@synapsse.com` / `Admin1234`).

## Frontend (Next.js)

### Requisitos previos

- Node.js 18+

### Ejecutar el frontend

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Desarrollo adicional

- Ajusta los dominios permitidos, CORS, reglas de seguridad y secretos antes de desplegar a producción.
- Configura variables de entorno (por ejemplo `DATABASE_URL`, `JWT_SECRET`) para entornos gestionados.
