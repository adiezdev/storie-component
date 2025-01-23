# Storie Component

[![npm version](https://img.shields.io/npm/v/storie-component)](https://www.npmjs.com/package/storie-component)  
Un componente flexible y personalizable para mostrar historias (stories) al estilo de redes sociales en tus aplicaciones React.

---

## 🚀 Características

- **Soporte para múltiples tipos de contenido**: imágenes, videos, YouTube, contenido JSX personalizado.
- **Duración personalizable**: define cuántos segundos dura cada historia.
- **Interactividad**: pausa, reanuda y avanza las historias con facilidad.
- **Estilo adaptable**: personaliza el aspecto visual según tus necesidades.

---

## 🛠 Instalación

Primero, instala el paquete usando `npm` o `yarn`:

```bash
npm install storie-component
# o
yarn add storie-component
```

---

## 💻 Uso

Importa el componente y pásale un array de historias como propiedad `content`. Cada historia debe incluir un tipo (`type`) y el contenido asociado.
---

## 🔧 Propiedades

### **Props principales**
| Propiedad       | Tipo                | Descripción                                                                 | Obligatoria |
|------------------|---------------------|-----------------------------------------------------------------------------|-------------|
| `content`        | `TContent[]`       | Array de historias (puede incluir imágenes, videos, YouTube y JSX).         | ✅          |
| `seconds`        | `number`           | Duración de cada historia en segundos.                                      | ✅          |
| `progress`       | `boolean`          | Muestra u oculta la barra de progreso.                                      | ❌          |

### **Tipos de contenido**

1. **Imagen (`type: 'image'`)**:
   - **`url`**: URL de la imagen.

2. **YouTube (`type: 'youtube'`)**:
   - **`url`**: URL del video en formato embebido (`https://www.youtube.com/embed/...`).

3. **Contenido JSX (`type: 'jsx'`)**:
   - **`content`**: Función que retorna un componente JSX. Se recibe la prop `isPlay` para manejar el estado de reproducción.
   - **`styles`**: (Opcional) Objeto de estilos para personalizar el fondo o color.

4. **Video (`type: 'video'`)**:
   - **`url`**: URL del video.
   - **`fullscreen`**: (Opcional) Si el video debe mostrarse en pantalla completa (`true` por defecto).
   - **`muted`**: (Opcional) Si el video está silenciado.

---

## 📦 Instalación del paquete

Si necesitas compilar el proyecto antes de publicarlo:

```bash
npm run build
```

Asegúrate de que las dependencias de `peerDependencies` estén correctamente configuradas para React y ReactDOM.

---

## 🖌 Personalización

Puedes personalizar los estilos agregando tu propio archivo CSS o modificando el objeto `styles` en las historias JSX.

---

## 📚 Ejemplo más avanzado

```jsx
const advancedArray = [
  {
    type: 'image',
    url: 'https://via.placeholder.com/360x640',
  },
  {
    type: 'video',
    url: 'https://cdn.example.com/sample-video.mp4',
    muted: true,
    fullscreen: false,
  },
  {
    type: 'jsx',
    content: ({ isPlay }) => (
      <div style={{ padding: '20px', color: '#fff', backgroundColor: 'blue' }}>
        <h1>¡Hola!</h1>
        <p>Esto es contenido personalizado</p>
        <p>¿Está reproduciéndose? {isPlay ? 'Sí' : 'No'}</p>
      </div>
    ),
  },
];

<StoriesComponent content={advancedArray} seconds={10} />;
```

---

## 🛡 Soporte y Licencia

- **Licencia**: MIT.  
- **Contribución**: Se aceptan PRs y sugerencias en el repositorio oficial. 

Para preguntas, puedes contactarme en [GitHub](https://github.com/adiezdev).

---