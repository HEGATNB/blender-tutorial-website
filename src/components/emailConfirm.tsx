// Подключаем библиотеку Nodemailer
const nodemailer = require('nodemailer');

// Создаём тестовый транспорт (временный почтовый сервер для тестирования)
async function main() {
  // Создаём тестовый аккаунт для проверки
  const testAccount = await nodemailer.createTestAccount();

  // Настраиваем транспорт
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email', // специальный тестовый сервер
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  // Описываем письмо
  const mailOptions = {
    from: '"Ваше имя" &lt;BaseCube@gmail.com&gt;',
    to: {userEmail},
    subject: 'Ваш код',
    text: {verificationCode}
  };

  // Отправляем письмо
  const info = await transporter.sendMail(mailOptions);

  console.log('Письмо отправлено!');
  console.log('Идентификатор письма:', info.messageId);
  
  // Показываем ссылку для просмотра письма в тестовом режиме
  console.log('Посмотреть письмо можно здесь:', nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);

export default main