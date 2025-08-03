# Инструкции по загрузке проекта на GitHub

## 1. Установка Git

### Для Windows:
1. Скачайте Git с официального сайта: https://git-scm.com/download/win
2. Установите Git, следуя инструкциям установщика
3. Перезапустите PowerShell или командную строку

### Проверка установки:
```bash
git --version
```

## 2. Настройка Git (первый раз)

```bash
git config --global user.name "Ваше Имя"
git config --global user.email "ваш.email@example.com"
```

## 3. Создание репозитория на GitHub

1. Перейдите на https://github.com
2. Войдите в свой аккаунт
3. Нажмите кнопку "New" или "+" → "New repository"
4. Заполните форму:
   - **Repository name**: `search-analytics-website`
   - **Description**: `Профессиональный сайт для анализа рынка поисковой строки`
   - **Public** (или Private по вашему выбору)
   - **НЕ** ставьте галочки на "Add a README file", "Add .gitignore", "Choose a license"
5. Нажмите "Create repository"

## 4. Инициализация локального репозитория

Откройте PowerShell в папке проекта и выполните команды:

```bash
# Инициализация Git репозитория
git init

# Добавление всех файлов в индекс
git add .

# Первый коммит
git commit -m "Initial commit: Search Analytics Website"

# Добавление удаленного репозитория (замените YOUR_USERNAME на ваше имя пользователя)
git remote add origin https://github.com/YOUR_USERNAME/search-analytics-website.git

# Переименование основной ветки в main (современный стандарт)
git branch -M main

# Отправка кода на GitHub
git push -u origin main
```

## 5. Структура проекта

```
search-analytics-website/
├── index.html              # Главная страница
├── styles.css              # Стили
├── script.js               # JavaScript функциональность
├── README.md               # Описание проекта
├── seo-keywords.md         # SEO ключевые слова
├── package.json            # Конфигурация проекта
├── .gitignore             # Исключения для Git
└── GITHUB_SETUP.md        # Эти инструкции
```

## 6. Дополнительные команды Git

### Проверка статуса:
```bash
git status
```

### Просмотр изменений:
```bash
git diff
```

### Просмотр истории коммитов:
```bash
git log --oneline
```

### Обновление с GitHub:
```bash
git pull origin main
```

## 7. Запуск проекта

После загрузки на GitHub, другие разработчики могут клонировать проект:

```bash
git clone https://github.com/YOUR_USERNAME/search-analytics-website.git
cd search-analytics-website
npm install
npm start
```

## 8. GitHub Pages (опционально)

Для публикации сайта на GitHub Pages:

1. Перейдите в настройки репозитория на GitHub
2. Найдите раздел "Pages"
3. В "Source" выберите "Deploy from a branch"
4. Выберите ветку "main" и папку "/ (root)"
5. Нажмите "Save"

Сайт будет доступен по адресу: `https://YOUR_USERNAME.github.io/search-analytics-website`

## 9. Полезные ссылки

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf) 