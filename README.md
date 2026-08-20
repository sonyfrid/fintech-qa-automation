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
--- 
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

## 📊 Тестовые сценарии

### 🔐 Авторизация

| # | Тест | Описание | Ожидаемый результат | Статус |
|---|------|----------|-------------------|--------|
| 1 | Login with valid credentials | Вход с корректными данными (john/demo) | Успешная авторизация, переход на страницу Accounts Overview | ✅ |
| 2 | Login with invalid credentials | Вход с неверным паролем | Отображение сообщения об ошибке | ✅ |
| 3 | Login with empty fields | Вход с пустыми полями | Валидация формы, запрос на заполнение полей | 🔄 |

### 💰 Операции со счетами

| # | Тест | Описание | Ожидаемый результат | Статус |
|---|------|----------|-------------------|--------|
| 4 | Check account balance | Просмотр баланса счёта | Отображение актуального баланса ($250.50) | ✅ |
| 5 | Open account details | Открытие деталей счёта | Показ истории операций по счёту | 🔄 |
| 6 | Create new account | Создание нового счёта | Новый счёт появляется в списке | 📝 |

### 💸 Переводы средств

| # | Тест | Описание | Ожидаемый результат | Статус |
|---|------|----------|-------------------|--------|
| 7 | Transfer funds | Перевод $100 между счетами | Успешное завершение, балансы обновлены | ✅ |
| 8 | Transfer with insufficient funds | Перевод суммы больше баланса | Сообщение об ошибке, перевод отклонён | 📝 |
| 9 | Transfer to invalid account | Перевод на несуществующий счёт | Валидация, перевод не выполнен | 📝 |

### 🔌 API тесты

| # | Тест | Описание | Метод | Статус |
|---|------|----------|-------|--------|
| 10 | Get account information | Получение информации о счетах клиента | GET /accounts | ✅ |
| 11 | Create account via API | Создание счёта через REST API | POST /accounts | 📝 |
| 12 | Transfer via API | Перевод средств через API | POST /transfer | 🔄 |

### 🛡️ Безопасность и ошибки

| # | Тест                   | Описание                     | Ожидаемый результат                    | Статус |
|---|------------------------|------------------------------|----------------------------------------|--------|
| 13 | Session timeout       | Проверка завершения сессии   | Автоматический logout после таймаута   | 📝 |
| 14 | SQL injection attempt | Попытка SQL-инъекции в полях | Безопасная обработка, ошибка валидации | 📝 |
| 15 | XSS attempt           | Попытка XSS в полях формы    | Экранирование спецсимволов             | 📝 |

---

### Легенда статусов:
- ✅ **Passed** — тест успешно проходит
- 🔄 **In Progress** — тест в разработке
- 📝 **Planned** — запланирован к реализации
- ❌ **Failed** — тест падает (исправляется)

### Статистика:
- **Всего тестов:** 15
- **Проходят:** 5
- **В разработке:** 4
- **Запланировано:** 6
- **Покрытие:** 33%

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

## 🔧 Технологический стек

### Основные технологии

| Технология                                    |Версия | Назначение |
|-----------------------------------------------|-------|------------|
| [Playwright](https://playwright.dev/)         | 1.40+ | E2E тестирование |
| [TypeScript](https://www.typescriptlang.org/) | 5.0+  | Язык программирования |
| [Node.js](https://nodejs.org/)                | 18+   | Среда выполнения |

### Фреймворки и библиотеки

- **Playwright Test Runner** — запуск и организация тестов
- **Page Object Model** — паттерн проектирования
- **Custom Fixtures** — переиспользуемые компоненты

### Инструменты разработки

- **GitHub Actions** — CI/CD pipeline
- **ESLint** — линтер кода
- **Prettier** — форматирование кода

### Планируется добавить

- [ ] Allure Report
- [ ] Grafana + Prometheus
- [ ] k6 для нагрузочного тестирования
- [ ] TestRail интеграция


## 📊 Пример отчёта

### HTML Report (Playwright)

После каждого запуска тестов автоматически создаётся HTML-отчёт:
```bash
#npm run report

Отчёт включает:

📈 Общая статистика
#Количество пройденных/упавших/пропущенных тестов
#Общее время выполнения
#Процент успешности

🎬 Медиа-материалы
#Видео — запись прохождения каждого теста
#Скриншоты — автоматически при падении
#Трейсы — полная история действий для отладки

🔍 Детализация
#Пошаговое выполнение каждого теста

#Значения селекторов

#Ожидаемые vs фактические результаты

Пример вывода в консоли:
Running 5 tests using 1 worker

  ✓ Login with valid credentials (6.3s)
  ✓ Check account balance (2.9s)
  - Transfer funds (skipped: Not enough accounts)
  - API - Get account information (skipped: API unavailable)
  ✓ Error handling - Login with invalid credentials (2.7s)

  3 passed (17.1s)
  2 skipped

Скриншоты и видео:
При падении теста автоматически сохраняются:

📸 test-results/скриншот.png — момент ошибки

🎥 test-results/видео.webm — полная запись

🔍 test-results/trace.zip — трассировка для отладки

Просмотр трейса:
npx playwright show-trace test-results/trace.zip



## 👨‍💻 Автор

<div align="center">
  
### **Sony Fridmo**

**QA Automation Engineer**

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:alexandrikuskos@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sonyfridmo/)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/fridmo_sony)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sonyfrid)

</div>




