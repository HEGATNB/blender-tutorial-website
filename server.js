const express = require("express");
const cors = require("cors");
const pool = require("./src/components/dbConfig.tsx")

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Получены данные:', { email, password });

        const result = await pool.query(
        'SELECT * FROM users WHERE email = $1 AND password = $2',
        [email, password]
        );

        if (result.rows.length > 0){
            const user = result.rows[0];
            console.log('пользователь найден');
            res.status(200).json({
                success: true,
                message: 'вход выполнен',
                user:{
                    email: user.email
                }
            });
        }
        else{
            console.log('пользователь не найден');
            res.status(401).json({
                success: false,
                message: 'пользователя не существует, проверьте правильность email и пароля'
            });
        }
    } catch (error) {
        console.error('Ошибка при обработке запроса:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.listen(3000, () => {
    console.log("Сервер запущен на порту 3000");
});