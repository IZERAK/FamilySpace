# Схема Базы Данных (Wishlist MVP)

## 1. Users (Пользователи)

| Поле          | Тип БД       | Ограничения (БД / Бэк / Фронт) | Описание                |
| ------------- | ------------ | ------------------------------ | ----------------------- |
| id            | UUID         | PK, NOT NULL                   | Системный ID            |
| uid           | VARCHAR(30)  | UNIQUE, NOT NULL, [a-z0-9_]    | Публичный ID для поиска |
| login         | VARCHAR(50)  | UNIQUE, NOT NULL               | Логин для входа         |
| email         | VARCHAR(255) | UNIQUE, NOT NULL, Email Format | Почта                   |
| password_hash | VARCHAR(255) | NOT NULL                       | Хэш пароля              |
| first_name    | VARCHAR(50)  | NOT NULL                       | Имя                     |
| last_name     | VARCHAR(50)  | NOT NULL                       | Фамилия                 |
| middle_name   | VARCHAR(50)  | NULL                           | Отчество                |
| age           | INT          | NULL, Range: 1-130             | Возраст                 |
| avatar_url    | VARCHAR(500) | NULL, URL Format               | Ссылка на аватар        |
| is_deleted    | BOOLEAN      | DEFAULT FALSE                  | Флаг архивации          |
| deleted_at    | TIMESTAMP    | NULL                           | Дата удаления           |
| created_at    | TIMESTAMP    | NOT NULL, Default NOW()        | Дата регистрации        |

## 2. Wishlists (Вишлисты)

Связь 1-1 с Users.
| Поле | Тип | Описание |
|------|-----|----------|
| id | UUID | Первичный ключ |
| user_id | UUID | FK -> Users.id |

## 3. Events (События)

| Поле         | Тип     | Описание                    |
| ------------ | ------- | --------------------------- |
| id           | UUID    | Первичный ключ              |
| title        | String  | Название (ДР, НГ)           |
| date         | Date    | Дата события                |
| is_recurring | Boolean | Повторяется ли (ежегодно)   |
| owner_id     | UUID    | FK -> Users.id (кто создал) |

## 4. Groups (Группы)

| Поле     | Тип    | Описание        |
| -------- | ------ | --------------- |
| id       | UUID   | Первичный ключ  |
| name     | String | Название группы |
| owner_id | UUID   | FK -> Users.id  |

## 5. GroupMembers (Участники групп)

| Поле     | Тип  | Описание        |
| -------- | ---- | --------------- |
| group_id | UUID | FK -> Groups.id |
| user_id  | UUID | FK -> Users.id  |

## 6. Items (Подарки)

| Поле             | Тип            | Ограничения                                | Описание                                                    |
| ---------------- | -------------- | ------------------------------------------ | ----------------------------------------------------------- |
| id               | UUID           | PK, NOT NULL                               | Первичный ключ                                              |
| wishlist_id      | UUID           | FK -> Wishlists.id, NOT NULL               | Привязка к вишлисту                                         |
| event_id         | UUID           | FK -> Events.id, NULL                      | Привязка к событию                                          |
| name             | VARCHAR(200)   | NOT NULL                                   | Название подарка                                            |
| description      | TEXT           | NULL                                       | Описание                                                    |
| link             | VARCHAR(500)   | NULL, URL Format                           | Ссылка на магазин                                           |
| price            | DECIMAL(10, 2) | NULL, >= 0                                 | Цена                                                        |
| priority         | INT            | NULL, Range: 1-10                          | Приоритет                                                   |
| status           | ENUM           | NOT NULL, ['ACTIVE', 'GIFTED', 'ARCHIVED'] | Статус жизненного цикла                                     |
| show_when_gifted | BOOLEAN        | DEFAULT TRUE                               | Показывать ли этот конкретный подарок в списке "Подаренные" |
| created_at       | TIMESTAMP      | NOT NULL, Default NOW()                    | Дата создания                                               |
| is_archived      | BOOLEAN        | DEFAULT FALSE                              | Флаг мягкой архивации                                       |

## 7. ItemVisibility (Видимость подарка)

Реализует White/Black листы.
| Поле | Тип | Описание |
|------|-----|----------|
| item_id | UUID | FK -> Items.id |
| user_id | UUID | FK -> Users.id (кому видно/скрыто) |
| type | Enum | 'WHITELIST', 'BLACKLIST' |

## 8. Reservations (Бронь и Очередь)

| Поле           | Тип       | Описание                              |
| -------------- | --------- | ------------------------------------- |
| id             | UUID      | Первичный ключ                        |
| item_id        | UUID      | FK -> Items.id                        |
| user_id        | UUID      | FK -> Users.id (кто бронирует)        |
| queue_position | Int       | Позиция в очереди (1 - текущий бронь) |
| status         | Enum      | 'PENDING', 'CONFIRMED', 'CANCELLED'   |
| created_at     | Timestamp | Дата бронирования                     |

## 9. Splits (Совместная покупка)

| Поле           | Тип     | Описание                |
| -------------- | ------- | ----------------------- |
| id             | UUID    | Первичный ключ          |
| item_id        | UUID    | FK -> Items.id          |
| target_amount  | Decimal | Целевая сумма           |
| current_amount | Decimal | Текущая собранная сумма |

## 10. SplitContributions (Взносы в сплит)

| Поле     | Тип     | Описание             |
| -------- | ------- | -------------------- |
| split_id | UUID    | FK -> Splits.id      |
| user_id  | UUID    | FK -> Users.id       |
| amount   | Decimal | Внесенная сумма      |
| comment  | Text    | Комментарий к взносу |

## 11. ItemMedia (Медиа файлов)

| Поле         | Тип     | Описание                 |
| ------------ | ------- | ------------------------ |
| id           | UUID    | Первичный ключ           |
| item_id      | UUID    | FK -> Items.id           |
| url          | String  | Ссылка на файл           |
| type         | Enum    | 'IMAGE', 'VIDEO'         |
| is_post_gift | Boolean | Это медиа после дарения? |

## 12. CustomFields (Личные поля пользователя)

Для фильтров на фронте.
| Поле | Тип | Описание |
|------|-----|----------|
| id | UUID | Первичный ключ |
| user_id | UUID | FK -> Users.id |
| field_name | String | Название (Размер, Цвет) |
| field_value | String | Значение |
| field_type | Enum | 'TEXT', 'NUMBER', 'SELECT' |
