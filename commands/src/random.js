const Discord = require('discord.js');
const client = require('../../index');

const rando_imgs = [
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
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/%C3%81lvaro_Uribe_%28cropped%29.jpg/220px-%C3%81lvaro_Uribe_%28cropped%29.jpg",
]

const rando_text = [
  `Puta que rico`,
  `Mira esa hermosura`,
  `mm, patas :drooling_face:`,
  `Maquinitas`,
  `Tetrahijueputa`,
  `El que pidio esta imagen es gay`,
  `jajajaja`,
  `random nigga`,
  `gracias por el dato socio`,
  `peruano`,
  `¿ya vieron esto? da asco`,
  `agua de mariscos`,
  `sopa de ahuyama`,
  `uribe paraco`,
]

module.exports.use = async (message) => { // Bug undefined in a text
  const embed = new Discord.MessageEmbed();
  embed.addField(rando_text[Math.floor(Math.random())]);
  embed.setThumbnail(rando_imgs[Math.floor(Math.random() * rando_imgs.length)]); // No encontré la forma para enviarlas normal :(
  message.channel.send(embed);
}

