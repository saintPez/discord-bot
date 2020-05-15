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
        "commands": [
            {"use": "help", "name": "ayuda"},
            {"use": "info", "name": "info"},
            {"use": "avatar", "name": "avatar"},
            {"use": "clear", "name": "clear"},
            {"use": "ping", "name": "ping"},
            {"use": "status", "name": "status"},
            {"use": "random", "name": "random"},
            {"use": "ban", "name": "ban"}
        ],
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
        "avatar_info": "El avatar del usuario es",
        "user": "Usuario"
    }
}
```

# Update

» Creé los comandos "ping", "random" y "status".
Comando = ping: Registra el ping.
Comando = random: muestra imagenes aleatorias con un mensaje aleatorio (little bug)
Comando = status: muestra las estadisticas del servidor de discord.

» Añadí `guildMemberRemove` y `guildMemberAdd` los cuales muestran un pequeño mensaje al entrar o salir un usuario (fase beta, muy simple)

» Organizé mi codigo