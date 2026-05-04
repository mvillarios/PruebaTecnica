# Notifications API

API REST para el envío y registro de notificaciones por email y SMS, construida con Node.js, Express y TypeScript.

## Requisitos previos

- Node.js v18 o superior
- npm

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd notifications-api

# Instalar dependencias
npm install
```

## Scipt disponibles

- `npm run dev`: Inicia el servidor en modo desarrollo con hot-reloading.
- `npm test`: Ejecuta las pruebas unitarias.

## Iniciar en desarrollo

```bash
npm run dev
```

El servidor corre por defecto en `http://localhost:3001`

## Patrón de diseño

La selección del proveedor de notificaciones utiliza el **Strategy Pattern**. Cada canal (`email`, `sms`) tiene su propio provider que implementa la interface `NotificationProvider`. El service selecciona el provider correcto según el `channel` recibido, sin necesidad de condicionales.

## Diseño Casos de Prueba

| Endpoint            | Descripción             | Input                                 | Resultado Esperado        |
| ------------------- | ----------------------- | ------------------------------------- | ------------------------- |
| POST /notifications | Envío exitoso por email | `{userId, message, channel: "email"}` | 201 + objeto notificación |
| POST /notifications | Falta el campo message  | `{userId, channel: "email"}`          | 400 + error               |
| POST /notifications | Channel inválido        | `{userId, channel: "llamada"}`        | 400 + error               |
| GET /notifications  | Obtener historial       | —                                     | 200 + `{ data: [] }`      |

## Ejecutar Test

```bash
npm test
```
