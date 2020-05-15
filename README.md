## Discord-bot

bot de disocrd

## Usage

* Crear `config.json`
```json
{
    "name": "discord-bot",
    "token": "TOKEN",
    "color": "#40AC7E",
    "prefix": "!",
    "activity": {
        "name": "Comunity",
        "options": "LISTENING"
    },
    "time_delete": 3000,
    "commands": [
        {
            "use": "help",
            "name": "ayuda"
        },
        {
            "use": "info",
            "name": "info"
        },
        {
            "use": "avatar",
            "name": "avatar"
        },
        {
            "use": "clear",
            "name": "clear"
        },
        {
            "use": "ping",
            "name": "ping"
        },
        {
            "use": "status",
            "name": "status"
        },
        {
            "use": "random",
            "name": "random"
        },
        {
            "use": "ban",
            "name": "ban"
        }
    ],
    "lenguage": {
        "command": "comando",
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
        "user": "Usuario",
        "ping": "Ping",
        "random_text": "Random",
        "region": {
            "colombia": "Colombia",
            "brazil": "Brazil",
            "eu-central": "Central Europe",
            "singapore": "Singapore",
            "us-central": "U.S. Central",
            "sydney": "Sydney",
            "us-east": "U.S. East",
            "us-south": "U.S. South",
            "us-west": "U.S. West",
            "eu-west": "Western Europe",
            "vip-us-east": "VIP U.S. East",
            "london": "London",
            "amsterdam": "Amsterdam",
            "hongkong": "Hong Kong"
        },
        "verification_level": {
            "NONE": "Ninguno",
            "LOW": "Bajo",
            "MEDIUM": "Medio",
            "HIGH": "Alto",
            "VERY_HIGH": "Muy alto",
            "name": "Nivel de verificacion"
        },
        "created": "Creado",
        "owner": "Dueño",
        "country": "Pais",
        "users": "Usuarios",
        "members": "Miembros",
        "bots": "Bots",
        "afk_time": "Tiempo AFK",
        "roles": "Roles",
        "channels": "Canales",
        "emojis": "Emojis",
        "welcome_text": "llego la puta",
        "bye_text": "la muy perra se fue, suerte pirobo"
    },
    "random_imgs": [
        "https://a.wattpad.com/cover/153628217-352-k378860.jpg",
        "https://pm1.narvii.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg",
        "https://cdn140.picsart.com/301791105082201.jpg?r1024x1024",
        "https://a.wattpad.com/cover/85992670-352-k248170.jpg",
        "https://pm1.narvii.com/6982/eba90bc792cf918b43450cb33eac1eb8231e1fcfr1-720-540v2_uhq.jpg",
        "https://pm1.narvii.com/6716/2764d75271c37de95c1aebda1ee2c1480e349f82_00.jpg",
        "https://pbs.twimg.com/profile_images/914696109712429056/HrMOKmtU_400x400.jpg",
        "https://boredhq.com/wp-content/uploads/2019/06/1561325565_maxresdefault-277x156.jpg",
        "https://a.wattpad.com/cover/136601520-352-k976369.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB8pO8XmVx6yxpt1o8Ue6Hm2qgF0zyNTDqq2FdWkiW91oLIgXi&usqp=CAU",
        "https://3.bp.blogspot.com/-94bqTNWHWu8/V51imNFbYuI/AAAAAAAACPM/eRwLund7XQg7dEXrUVV0UAIrxude_O15wCLcB/s1600/2016-05-22%2B%252815%2529%2Brandom%2B19%2B11%2B15.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/%C3%81lvaro_Uribe_%28cropped%29.jpg/220px-%C3%81lvaro_Uribe_%28cropped%29.jpg"
    ],
    "random_text": [
        "Puta que rico",
        "Mira esa hermosura",
        "mm, patas :drooling_face:",
        "Maquinitas",
        "Tetrahijueputa",
        "El que pidio esta imagen es gay",
        "jajajaja",
        "random nigga",
        "gracias por el dato socio",
        "peruano",
        "¿ya vieron esto? da asco",
        "agua de mariscos",
        "sopa de ahuyama",
        "uribe paraco"
    ],
    "channels": {
        "welcome": {
            "name": "bienvenidas",
            "id": "710682232733302804"
        },
        "bye": {
            "name": "bienvenidas",
            "id": "710682232733302804"
        }
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