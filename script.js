# Crear un nuevo archivo script.js con animaciones al hacer scroll usando Intersection Observer

script_js = """
document.addEventListener("DOMContentLoaded", function () {
  const animados = document.querySelectorAll(".animado");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  animados.forEach((el) => observer.observe(el));
});
"""

# CSS para animaciones
scroll_animation_css = """
.animado {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.animado.visible {
  opacity: 1;
  transform: translateY(0);
}
"""

# Guardar JavaScript y agregar el nuevo CSS al archivo style.css
with open("/mnt/data/script.js", "w", encoding="utf-8") as js_file:
    js_file.write(script_js)

# Añadir el CSS de animación al final del archivo existente
with open("/mnt/data/style.css", "a", encoding="utf-8") as css_file:
    css_file.write("\n" + scroll_animation_css)

"/mnt/data/script.js"

