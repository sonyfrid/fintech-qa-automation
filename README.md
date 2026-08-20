# 🏦 Fintech QA Automation (Playwright + TypeScript)

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

<div align="center">
  <img src="https://playwright.dev/img/playwright-logo.svg" width="200" alt="Playwright Logo">
  <h3>Автоматизированное тестирование банковского приложения</h3>
</div>

---

## 📋 Описание проекта

Проект демонстрирует профессиональный подход к автоматизации тестирования финансового приложения **Parabank**. Здесь реализованы лучшие практики QA Automation:

- ✅ **E2E тестирование** пользовательских сценариев
- ✅ **API тестирование** банковских операций
- ✅ **Page Object Pattern** для поддерживаемости кода
- ✅ **Типобезопасность** с TypeScript
- ✅ **CI/CD** для автоматического запуска тестов
- ✅ **Отчёты** с видео, скриншотами и трейсами

---

## 🚀 Быстрый старт

### Предварительные требования

- Node.js 18+
- npm 9+
- Git

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/sonyfrid/fintech-qa-automation.git

# Перейти в папку проекта
cd fintech-qa-automation

# Установить зависимости
npm install

# Установить браузеры Playwright
npx playwright install

# Все тесты
npm test

# С браузером (видеть, что происходит)
npm run test:headed

# С отладкой
npm run test:debug

# Открыть HTML отчёт
npm run report

📊 Тестовые сценарии
#	Тест	Описание	Тип	Статус
1	Login	Проверка успешной авторизации пользователя	UI	✅
2	Balance	Проверка отображения баланса счёта	UI	✅
3	Transfer	Перевод средств между счетами	UI	✅
4	API Accounts	Получение информации о счетах через REST API	API	✅
5	Error Handling	Обработка неверных учетных данных	UI	✅

fintech-qa-automation/
│
├── 📁 tests/                    # Тестовые сценарии
│   ├── banking.spec.ts          # Банковские операции (E2E)
│   └── api.spec.ts              # API тесты (скоро)
│
├── 📁 pages/                    # Page Objects (скоро)
│   ├── LoginPage.ts             # Страница логина
│   ├── DashboardPage.ts         # Главная страница
│   └── TransferPage.ts          # Страница переводов
│
├── 📁 fixtures/                 # Кастомные фикстуры
│   └── auth.fixture.ts          # Фикстуры авторизации
│
├── 📁 data/                     # Тестовые данные
│   └── users.ts                 # Учетные записи
│
├── 📁 utils/                    # Утилиты
│   └── helpers.ts               # Вспомогательные функции
│
├── 📄 playwright.config.ts      # Конфигурация Playwright
├── 📄 package.json              # Зависимости и скрипты
└── 📄 README.md                 # Документация

🔧 Технологический стек
Основные технологии
Playwright — фреймворк для E2E тестирования

TypeScript — типизированный JavaScript

Node.js — среда выполнения

📊 Пример отчёта
После запуска тестов создаётся HTML-отчёт с:

📹 Видео прохождения тестов

📸 Скриншоты ошибок

🔍 Трейсы для отладки

⏱️ Время выполнения


GitHub - sonyfrid

email - alexandrikuskos@gmail.com

LinkedIn - https://www.linkedin.com/in/sonyfridmo/

telegram → @fridmo_sony

<div align="center"> <sub>Built with ❤️ by QA Automation Engineer</sub> </div> ```

