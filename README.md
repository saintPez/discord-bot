## Discord-bot

bot de disocrd

## Usage

* Crear `config.json`
```json
{
    "name": "discord-bot",
    "token": "TOKEN",
    "prefix": "!",
    "activity": {
        "name": "Comunity",
        "options": "LISTENING"
    },
    "time_delete": 3000,
    "lenguage": {
        "command": "comando",
        "commands": {
            "help": "ayuda",
            "info": "info",
            "avatar": "avatar",
            "clear": "clear",
            "ban": "ban"
        },
        "command_not_allowed": "No tienes permiso para usar este comando",
        "syntax": "Sintaxis",
        "error": "ERROR",
        "info": "INFO",
        "required": "requerido",
        "optional": "opcional",
        "name": "Nombre",
        "id": "ID",
        "amount": "cantidad",
        "channel": "canal",
        "deleted_messages": "Mensajes eliminados correctamente",
        "invalid_amount": "La cantidad indicada es inavalida",
        "status": {
            "name" : "Estado",
            "online": {
                "name": "Conectado",
                "color": "#40AC7E"
            },
            "offline": {
                "name": "Desconectado",
                "color": "#747F8D"
            },
            "idle": {
                "name": "Ausente",
                "color": "#F7A518"
            },
            "dnd": {
                "name": "No molestar",
                "color": "#EE4747"
            }
        },
        "user_information": "Información de usuario",
        "avatar_info": "El avatar del usuario es"
    }
}
```