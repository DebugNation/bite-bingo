const { SlashCommandBuilder } = require("discord.js");

const foods = [
	"ต้มยำกุ้ง",
	"ผัดไทย",
	"แกงเขียวหวานไก่",
	"ลาบหมู",
	"ส้มตำไทย",
	"ข้าวซอย",
	"ก๋วยเตี๋ยวเรือ",
	"ข้าวมันไก่",
	"ผัดกระเพราไก่ไข่ดาว",
	"ปูผัดผงกะหรี่",
	"ไก่ย่างน้ำจิ้มแจ่ว",
	"หมูกรอบผัดพริกแกง",
	"ข้าวคลุกกะปิ",
	"กุ้งแช่น้ำปลา",
	"ข้าวต้มหมู",
	"น้ำตกหมู",
	"ข้าวผัดปู",
	"หมูสะเต๊ะ",
	"ยำวุ้นเส้น",
	"ข้าวเหนียวมะม่วง",
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName("food")
		.setDescription("Random food"),
	async execute(interaction) {
		const randomFood = foods[Math.floor(Math.random() * foods.length)];
		await interaction.reply(randomFood);
	},
};
