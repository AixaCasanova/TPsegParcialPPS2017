define({ "api": [
  {
    "type": "post",
    "url": "/comisiones/alta/",
    "title": "da de alta una nueva comision",
    "name": "alta_comision",
    "group": "Comisiones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "arrayComision",
            "description": "<p>la Comision a dar de alta.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "hayError",
            "description": "<p>true o false si se realizo o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_comision",
            "description": "<p>ultimo id de la comision insertada.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Comisiones"
  },
  {
    "type": "post",
    "url": "/comisiones/eliminar/",
    "title": "elimina la comision",
    "name": "eliminar_comision",
    "group": "Comisiones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "objetoComision",
            "description": "<p>la Comision a eliminar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "hayError",
            "description": "<p>true o false si se realizo o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_comision",
            "description": "<p>id de la comision modificada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>descripcion de la comision modificada.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Comisiones"
  },
  {
    "type": "post",
    "url": "/comisiones/modificar/",
    "title": "modifica la comision",
    "name": "modificar_comision",
    "group": "Comisiones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "objetoComision",
            "description": "<p>la Comision a modificar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "hayError",
            "description": "<p>true o false si se realizo o no.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_comision",
            "description": "<p>id de la comision modificada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>descripcion de la comision modificada.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Comisiones"
  },
  {
    "type": "get",
    "url": "/comisiones/",
    "title": "Trae todas las comisiones",
    "name": "traer_todas_las_comisiones",
    "group": "Comisiones",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "array",
            "description": "<p>de comisiones.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Comisiones"
  },
  {
    "type": "post",
    "url": "/cursos/alta",
    "title": "da de alta al curso",
    "name": "alta_De_Curso",
    "group": "Cursos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "ArrayCurso",
            "description": "<p>array con los datos del curso</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "hayError",
            "description": "<p>confirmacion devuelve true o false si se realizo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Cursos"
  },
  {
    "type": "post",
    "url": "/alumnoCurso/alta/",
    "title": "asigna un alumno al curso",
    "name": "alta_alumno",
    "group": "Cursos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "el",
            "description": "<p>alumno a dar de alta.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "confirmacion",
            "description": "<p>devuelve true o false si se realizo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Cursos"
  },
  {
    "type": "post",
    "url": "/cursos/eliminar",
    "title": "elimina un curso especifico",
    "name": "eliminar_curso",
    "group": "Cursos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "objeto",
            "optional": false,
            "field": "objetoCurso",
            "description": "<p>objeto del curso a eliminar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "hayError",
            "description": "<p>confirmacion devuelve true o false si se realizo.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_curso",
            "description": "<p>id del curso eliminado.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_comision",
            "description": "<p>id comision del curso eiminado.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_usuario",
            "description": "<p>id usuario del curso eliminado.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>descripcion del curso eliminado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Cursos"
  },
  {
    "type": "get",
    "url": "/cursos/modificar",
    "title": "modificar un curso especifico",
    "name": "modificacion_de_curso",
    "group": "Cursos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "objeto",
            "optional": false,
            "field": "objetoCurso",
            "description": "<p>objeto del curso a modificar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "hayError",
            "description": "<p>confirmacion devuelve true o false si se realizo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Cursos"
  },
  {
    "type": "get",
    "url": "/cursos",
    "title": "trae todos los cursos",
    "name": "traer_cursos",
    "group": "Cursos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "ArrayDeCursos",
            "description": "<p>devuelve los curso.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Cursos"
  },
  {
    "type": "get",
    "url": "/cursos",
    "title": "traer todos los cursos",
    "name": "traer_todos_los_cursos",
    "group": "Cursos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "ArrayDeCursos",
            "description": "<p>Todos los cursos.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Cursos"
  },
  {
    "type": "post",
    "url": "/encuestas/alta",
    "title": "alta de encuestas",
    "name": "alta_encuestas",
    "group": "Encuestas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "array",
            "description": "<p>con los datos de la encuesta.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id_encuesta",
            "description": "<p>devuelve el ultimo id insertado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Encuestas"
  },
  {
    "type": "get",
    "url": "/encuestas/{id_encuesta}/alumnos",
    "title": "alumnos que tienen asignada una encuestas segun el id_encuesta.",
    "name": "alumnos_por_encuesta",
    "group": "Encuestas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "arrayAlumnosPorEncuesta",
            "description": "<p>devuelve array de alumnos segun encuensta.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/ws_alejo.php",
    "groupTitle": "Encuestas"
  },
  {
    "type": "post",
    "url": "/encuestas/borrar",
    "title": "elimina la encuesta segun id",
    "name": "eliminar_encuesta",
    "group": "Encuestas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "objeto",
            "description": "<p>de la encuesta a eliminar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "Confirmacion",
            "description": "<p>devuelve true o false si se elimino o no.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Encuestas"
  },
  {
    "type": "post",
    "url": "/encuestas/enviar",
    "title": "asigna una encuesta a un curso",
    "name": "enviar_encuesta",
    "group": "Encuestas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "objeto",
            "optional": false,
            "field": "Encuesta",
            "description": "<p>objeto encuesta asignar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "devuelve",
            "description": "<p>true o false si se realizo o no.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Encuestas"
  },
  {
    "type": "get",
    "url": "/encuestas/{id_encuesta}",
    "title": "encuesta por  por parametro id_encuesta",
    "name": "traer_encuesta",
    "group": "Encuestas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_encuesta",
            "description": "<p>id de la encuesta especifica.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>descripcion de la encuesta especifica.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_curso",
            "description": "<p>id_curso de la  encuesta especifica.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "fecha_inicio",
            "description": "<p>fecha inicio de la encuesta especifica.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "fecha_fin",
            "description": "<p>fecha fin de la encuesta especifica.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/ws_alejo.php",
    "groupTitle": "Encuestas"
  },
  {
    "type": "get",
    "url": "/encuestas/{id_encuesta}/preguntas",
    "title": "preguntas de la encuesta pasada por parametro id_encuesta",
    "name": "traer_preguntas_de_encuestas",
    "group": "Encuestas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "arrayPreguntas",
            "description": "<p>array con las preguntas de las encuestas.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/ws_alejo.php",
    "groupTitle": "Encuestas"
  },
  {
    "type": "get",
    "url": "/encuestas",
    "title": "traer todas las encuestas",
    "name": "traer_todas_las_encuestas",
    "group": "Encuestas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "ArrayDeEncuestas",
            "description": "<p>Todos las encuestas.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Encuestas"
  },
  {
    "type": "get",
    "url": "/GrafAlumnosPorCurso",
    "title": "trae los alumnos por curso",
    "name": "alumnos_por_curso",
    "group": "Graficos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "AlumnosXCurso",
            "description": "<p>devuelve los alumnos por curso.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Graficos"
  },
  {
    "type": "get",
    "url": "/GrafEncuestasPorCurso",
    "title": "trae las encuenstas por curso",
    "name": "encuestas_por_curso",
    "group": "Graficos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "EncuestasxCurso",
            "description": "<p>las encuestas por curso asignado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Graficos"
  },
  {
    "type": "get",
    "url": "/GrafRespuestasDePreguntas",
    "title": "trae las respuestas por pregunta de las encuestas",
    "name": "respuestas_de_preguntas_para_grafico",
    "group": "Graficos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "RespuestasDePreguntas",
            "description": "<p>array de las respuestas por pregunta.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Graficos"
  },
  {
    "type": "post",
    "url": "/pregunta/alta",
    "title": "alta de preguntas",
    "name": "alta_preguntas",
    "group": "Preguntas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "Array",
            "description": "<p>datos de la pregunta.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>el ultimo id insertado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Preguntas"
  },
  {
    "type": "delete",
    "url": "/pregunta/{id_pregunta}",
    "title": "Eliminar una pregunta segun su id_pregunta",
    "name": "eliminar_pregunta",
    "group": "Preguntas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "Confirmacion",
            "description": "<p>devuelve true o false si funciono o no.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/ws_alejo.php",
    "groupTitle": "Preguntas"
  },
  {
    "type": "post",
    "url": "/usuarios/modificar",
    "title": "Modifica un usuario, segun su ID",
    "name": "Modificar_Usuario",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "el",
            "description": "<p>usuario a modificar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "hayError",
            "description": "<p>el si hay error en la consulta.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_usuario",
            "description": "<p>el id del usuario modificado.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_tipo",
            "description": "<p>tipo usuario modificado.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del usuario modificado.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clave",
            "description": "<p>clave del usuario modificado.</p>"
          },
          {
            "group": "Success 200",
            "type": "text",
            "optional": false,
            "field": "imagen",
            "description": "<p>imagen del usuario modificado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Usuarios"
  },
  {
    "type": "get",
    "url": "/usuarios/{id_usuario}/encuestas/{id_encuesta}/preguntas",
    "title": "preguntas con las respuestas de una encuesta (id_encuesta)",
    "name": "Traer_preguntas_encuestasID",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "arrayPreguntas",
            "description": "<p>array con las preguntas de la una encuesta.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/ws_alejo.php",
    "groupTitle": "Usuarios"
  },
  {
    "type": "post",
    "url": "/usuarios/alta/{usuario}",
    "title": "Da de alta un usuario nuevo",
    "name": "crear_usuario",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "arrayUsuario",
            "description": "<p>array del usuario a crear.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "hayError",
            "description": "<p>el si hay error en la consulta.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_usuario",
            "description": "<p>el id del usuario insertado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Usuarios"
  },
  {
    "type": "post",
    "url": "/usuarios/eliminar/",
    "title": "Elimina un usuario segun su id",
    "name": "eliminar_usuario",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "objetoUsuario",
            "description": "<p>objeto del usuario a borrar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "hayError",
            "description": "<p>el si hay error en la consulta.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_usuario",
            "description": "<p>el id del usuario modificado.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_tipo",
            "description": "<p>tipo usuario modificado.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del usuario modificado.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clave",
            "description": "<p>clave del usuario modificado.</p>"
          },
          {
            "group": "Success 200",
            "type": "text",
            "optional": false,
            "field": "imagen",
            "description": "<p>imagen del usuario modificado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Usuarios"
  },
  {
    "type": "delete",
    "url": "/usuarios/borrar/{objeto}",
    "title": "elimina un usuario segun id",
    "name": "eliminar_usuario",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "Confirmacion",
            "description": "<p>devuelve true o false segun si se elimino o no.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Usuarios"
  },
  {
    "type": "get",
    "url": "/usuarios/{id_usuario}/encuestas/{id_encuestas}",
    "title": "encuestas por id_encuestas del id_usuario",
    "name": "encuesta_usuario_2",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "Encuestas",
            "description": "<p>encuentas del usuario especificado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/ws_alejo.php",
    "groupTitle": "Usuarios"
  },
  {
    "type": "get",
    "url": "/usuarios/{id_usuario}/encuestas/",
    "title": "encuestas por  id_usuario.",
    "name": "encuestas_de_usuarios",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "arrayEncuestas",
            "description": "<p>encuentas del usuario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/ws_alejo.php",
    "groupTitle": "Usuarios"
  },
  {
    "type": "get",
    "url": "/usuarios/",
    "title": "Trae la lista de usuarios",
    "name": "getUsuarios",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "lista",
            "description": "<p>de usuarios en el ws.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Usuarios"
  },
  {
    "type": "post",
    "url": "/usuarios/{id_usuario}/encuestas/respuestas",
    "title": "Insertar una respuesta segun el id_usuario, id_pregunta y opcion.",
    "name": "insertar_respuesta",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id_respuesta",
            "description": "<p>ultimo id insertado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/ws_alejo.php",
    "groupTitle": "Usuarios"
  },
  {
    "type": "get",
    "url": "/usuarios/traer/{objeto}",
    "title": "devuelve un usuario por su id",
    "name": "traer_usuario_especifico",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_usuario",
            "description": "<p>el id del usuario buscado.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id_tipo",
            "description": "<p>tipo usuario buscado.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del usuario buscado.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clave",
            "description": "<p>clave del usuario buscado.</p>"
          },
          {
            "group": "Success 200",
            "type": "text",
            "optional": false,
            "field": "imagen",
            "description": "<p>imagen del usuario buscado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "ws1/index.php",
    "groupTitle": "Usuarios"
  }
] });
