# GuitarHeroStyles

Sitio estático de ejemplo para publicar en GitHub Pages.

## Estado actual
- Archivos en la carpeta del proyecto: `index.html`, `styles.css`, `script.js`, `images/`, `edad.py`.

---

## Pasos para publicar (recomendado: Git + GitHub)

1. Instalar Git en Windows:
   - Descárgalo e instálalo desde https://git-scm.com/download/win
2. (Opcional) Instalar GitHub CLI para simplificar la creación del repo:
   - https://cli.github.com/
3. Configurar Git (solo la primera vez):
```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu@correo.com"
```
4. Inicializar y subir el proyecto a GitHub:
```powershell
cd c:\Users\alonso\Desktop\guitarherostyles
git init
git add .
git commit -m "Publicar sitio en GitHub Pages"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/guitarherostyles.git
git push -u origin main
```
(Reemplaza `TU_USUARIO` por tu usuario y la URL por la de tu repo)

5. Activar GitHub Pages (en GitHub web):
   - Entra al repo → Settings → Pages → Source → selecciona `main` y `/ (root)` → Save.
   - GitHub mostrará la URL pública: `https://TU_USUARIO.github.io/guitarherostyles/` (puede tardar 1–10 minutos).

6. Si no quieres instalar Git ahora, puedes subir los archivos desde la web:
   - En el repo de GitHub: **Add file → Upload files** → arrastra tus archivos → Commit.

---

## Reemplazar enlaces o texto con la URL pública
- Una vez que tengas la URL pública, puedes editar `index.html` para insertar el enlace y luego hacer commit y push:
```html
<p>Visita la versión pública: <a href="https://TU_USUARIO.github.io/guitarherostyles/" target="_blank">https://TU_USUARIO.github.io/guitarherostyles/</a></p>
```

---

Si quieres, te guío paso a paso para instalar Git y hacer el primer push, o puedo ayudarte a crear el repo desde la web y subir los archivos manualmente.
