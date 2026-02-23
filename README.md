# Calculadora (React Native + Expo)

Pequeña aplicación de calculadora construida con React Native y Expo, diseñada como proyecto de práctica para aprender hooks, componentes reutilizables y el enrutador de Expo.

![Image](https://github.com/user-attachments/assets/5f27759a-bc47-4ba5-bd7a-bf8f059eb0b0)

**Características**

- Operaciones básicas: suma, resta, multiplicación y división.
- Interfaz táctil optimizada para dispositivos móviles.
- Componentes reutilizables (`CalculatorButton`, `ThemeText`).
- Lógica encapsulada en el hook `useCalculator`.

**Tecnologías**

- React Native
- Expo (expo-router)
- TypeScript

**Requisitos**

- Node.js (v16+ recomendado)
- Yarn o npm
- Expo CLI (opcional, se puede usar el script `npm run start`)

**Instalación**

```bash
# clonar el repositorio
git clone <tu-repo-url>
cd calculator-app

# instalar dependencias (usa npm o yarn)
npm install
# o
yarn install
```

**Ejecución**

```bash
# iniciar el proyecto en Expo
npm run start

# abrir en Android
npm run android

# abrir en iOS
npm run ios

# web
npm run web
```

**Scripts disponibles**

- `start`: inicia Expo (`expo start`)
- `android`: inicia Expo y abre en Android
- `ios`: inicia Expo y abre en iOS
- `web`: ejecuta en la plataforma web
- `lint`: ejecuta linter (expo lint)

**Estructura del proyecto (resumen)**

- `app/`: entrada y rutas de la aplicación (Expo Router)
- `components/`: componentes reutilizables (`CalculatorButton.tsx`, `ThemeText.tsx`)
- `hooks/`: hooks personalizados (`useCalculator.tsx`)
- `constants/`: constantes y temas (`theme.ts`)
- `styles/`: estilos globales (`global-styles.ts`)
- `assets/`: imágenes y recursos estáticos

**Componentes clave**

- `CalculatorButton`: botón de la calculadora, recibe texto, color y callback.
- `ThemeText`: texto con estilos del tema.
- `useCalculator`: hook que maneja la lógica de la calculadora (estado, operaciones, formato).

**Contribuciones**
Si quieres contribuir, abre un issue o envía un pull request con cambios claros y pruebas cuando sea posible.

Si quieres, puedo añadir un GIF/screenshot de la app, un badge de estado o una sección de pruebas/CI. ¿Qué prefieres que agregue ahora?
