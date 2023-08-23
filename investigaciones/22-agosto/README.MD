# CONVENTIONAL COMMITS

Es un formato basico, en el que se envian los commit, es de provecho en los equipos de trabajo,
porque como todos envian sus contribuciones de una forma establecida, podemos filtrar rapidamente
las areas que se modificaron durante la sesion de trabajo de un integrante del equipo.

***actualmente tambien es comun que se envien emojis en los commit, lo que facilita aun mas el filtrado***

## Ejemplo de uso 

- **feat**: Nueva característica.
- **fix**: Corrección de un error.
- **docs**: Cambios en la documentación.
- **style**: Cambios en el formato, estilo o espacio en blanco, que no afectan el código.
- **refactor**: Cambios en el código que no corrigen errores ni agregan características.
- **test**: Agregar o modificar pruebas.
- **chore**: Cambios en tareas de mantenimiento, automatización, etc.

---
---

# README PARA ENDPOINTS

La idea es describir como interactua la API con cada metodo HTTP, mostrando la manera en que se debe usar cada una de las rutas. En caso de ser necesario tambien podemos mostrar como es que se deben enviar parametros o como se debe hacer una autenticacion para acceder.

## Ejemplo de documentacion: 

### /api/fotos

Nos retorna la lista completa de fotos en .JSON

### /api/fotos/{id}

Nos retorna unicamente la foto con el id que se mando por parametro



