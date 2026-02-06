const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt")
const pool = require("./src/components/dbConfig.tsx")

const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    try {
        const { newEmail, newPassword } = req.body;

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const result = await pool.query(
            'INSERT INTO users (email, password, created_at, updated_at) VALUES ($1, $2, NOW(), NOW()) RETURNING *',
            [newEmail, hashedPassword]
        );
        console.log("пользователь успешно добавлен");
        res.status(200).json({
            success: true,
            message: "регистрация успешна"
        });
    }
    catch (error){
    console.error("ошибка при регистрации");
    res.status(500).json({
        error: "ошибка при регистрации"
    });
    }
});


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Получены данные:', { email});

        const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
        );

        if (result.rows.length > 0){
            const user = result.rows[0];
            const isValid = await bcrypt.compare(password, user.password);
            if (isValid) {
                console.log('Вход выполнен успешно для:', email);
                res.status(200).json({
                    success: true,
                    message: 'Вход выполнен',
                    user: {
                        email: user.email
                    }
                });
            }
            else{
            console.log('неверный пароль');
            res.status(401).json({
                success: false,
                message: 'неверный пароль',
                user:{
                    email: user.email
                }
            });
            }
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
        res.status(500).json({
        success: false,
         error: 'Ошибка сервера'
         });
    }
});

app.listen(3000, () => {
    console.log("Сервер запущен на порту 3000");
});