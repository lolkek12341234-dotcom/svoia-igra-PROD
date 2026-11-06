// =====================================================
// ИГРА 1: RESOLVER — вопросы
// =====================================================

const resolverQuestions = [
    // Panic
    {
category: "Panic",
question: "Как решается Localization?",
answer: ["Проехать на руках 30 сек.", "Выставить робота через Dynamic homing"],
options: ["Выставить робота через Dynamic homing", "Проехать на руках 30 сек.", "Перезагружу робота", "Сразу передам координатору"],
points: 100
},

{
category: "Panic",
question: "RoverChassis/Wheels: как решается данная ошибка?",
answer: ["Перезагружу робота, если он не 600+", "Сбросить напряжение с шасси, используя Reset current limiter"],
options: ["Перезагружу робота, если он не 600+", "Закрыть крышку через кнопку Close", "Проехать на руках 20–30 сек.", "Сбросить напряжение с шасси, используя Reset current limiter"],
points: 200
},

{
category: "Panic",
question: "/Perception/RiderDetection/Rider: RiderCrit — как решить данную ошибку?",
answer: ["Нажимаем Parking", "Включаем звуковой сигнал Alarm short"],
options: ["Уведомить старшего оператора", "Включаем звуковой сигнал Alarm short", "Перезапускаем робота", "Нажимаем Parking"],
points: 300
},

{
category: "Panic",
question: "/Sensors/Lidars: как решить данную ошибку?",
answer: "Пробуем прокатить робота 20–30 секунд; если не помогает — передаём координатору",
options: ["Пробуем прокатить робота 20–30 секунд; если не помогает — передаём координатору", "Перезагружу робота", "Оставлю робота и закрою реквест как False", "Нужно локализовать робота"],
points: 400
},

{
category: "Panic",
question: "/Endpoints/…: как решить данную ошибку?",
answer: ["Проехать 20–30 сек.", "Передам координатору"],
options: ["Проехать 20–30 сек.", "Передам координатору", "Перезапущу робота", "Проставлю точку через Navigate to"],
points: 500
},

    // Stuck
    {
    category: "Stuck",
    question: "Перед роботом толпа людей, из-за которой он не может проехать. Что делать?",
    answer: "Прожму Give a way",
    options: ["Поставлю полигон Blockage", "Прожму Alarm short", "Прожму Give a way", "Давить"],
    points: 100
},
{
    category: "Stuck",
    question: "Робот не может проехать из-за нависающих веток. Что делать?",
    answer: "Отключу парктроники и аккуратно проеду ветки",
    options: ["Поставлю полигон Blockage", "Развернусь и проеду задом", "Передам координатору", "Отключу парктроники и аккуратно проеду ветки"],
    points: 200
},
{
    category: "Stuck",
    question: "Робот не может заехать на тротуар, так как там припаркован автомобиль. Что делать?",
    answer: "Поставлю полигон Blockage",
    options: ["Поставлю полигон Blockage", "Передам реквест координаторам", "Попытаюсь объехать автомобиль", "Поставлю полигон Static"],
    points: 300
},
{
    category: "Stuck",
    question: "Робот не может проехать из-за недавно установленного столба. Что делать?",
    answer: ["Нанести полигон Static на столб", "Объехать в режиме RCMD"],
    options: ["Нанести полигон Static на столб", "Это ложный реквест: False", "Объехать в режиме RCMD", "Поставлю полигон Blockage"],
    points: 400
},
{
    category: "Stuck",
    question: "Робот на парковке ПВЗ «Точка А». Статус заказа — Returning to. Что делать?",
    answer: "Нажму Finish route",
    options: ["Откачу робота, чтобы он поехал к клиенту", "Это ложный реквест: False", "Передам координатору", "Нажму Finish route"],
    points: 500
},

    // Incident detected
    {
        category: "Incident detected",
        question: "Нужно ли менять статус смены, когда решаешь Incident detected?",
        answer: "ДА",
        options: ["ДА", "НЕТ"],
        points: 100
    },
    {
        category: "Incident detected",
        question: "В робота специально въехал велосипедист. Какой тип инцидента?",
        answer: "Акт насилия над роботом",
        options: ["Проблема с роботом", "Акт насилия над роботом", "Столкновение", "Нарушение ПДД/ЭПР"],
        points: 200
    },
    {
        category: "Incident detected",
        question: "На робота наклеили наклейку. Какой тип инцидента?",
        answer: "Акт насилия над роботом",
        options: ["Нарушение ПДД", "Столкновение", "Проблема с роботом", "Акт насилия над роботом"],
        points: 300
    },
    {
        category: "Incident detected",
        question: "Робот врезался в экскаватор. Какой тип инцидента?",
        answer: "ДТП",
        options: ["ДТП", "Нарушение ПДД/ЭПР", "Проблема с роботом", "Столкновение"],
        points: 400
    },
    {
        category: "Incident detected",
        question: "Робот в режиме «Авто» скатился с тротуара, врезался в стену и разбил камеру. Какой тип инцидента?",
        answer: "Нарушение ПДД/ЭПР",
        options: ["ДТП", "Проблема с роботом", "Столкновение", "Нарушение ПДД/ЭПР"],
        points: 500
    },

    // Передача координатору
{
    category: "Передача координатору",
    question: "Какие условия нужно соблюсти при передаче робота координаторам?",
    answer: ["Передавать в режиме RCMD", "В безопасном месте", "Не мешая проходу/проезду", "С верной резолюцией и комментарием"],
    options: ["Передавать в режиме RCMD", "В безопасном месте", "Не мешая проходу/проезду", "С верной резолюцией и комментарием"],
    points: 100
},
 {
    category: "Передача координатору",
    question: "Выбери, когда нужно передавать робота координатору.",
    answer: ["Не распознаёт кроп светофора", "У робота сломан флажок"],
    options: ["Не распознаёт кроп светофора", "Робот подпрыгнул на тротуаре, и сработал Incident detected", "У робота сломан флажок", "Робот не может объехать припаркованный автомобиль", "Робот едет не в ту сторону"],
    points: 200
},
{
    category: "Передача координатору",
    question: "Робот стоит возле парковки, но на ней нет места. С какой резолюцией передать робота координаторам?",
    answer: "Road blocked",
    options: [ "Incident", "Other","Road blocked", "Didn't put"],
    points: 300
},
{
    category: "Передача координатору",
    question: "Что делать, если пришёл реквест от координатора?",
    answer: ["Обработать реквест", "Передать обратно координаторам"],
    options: ["Обработать реквест", "Передать обратно координаторам", "Обработать реквест и закрыть", "Это ошибочный реквест: закрыть как False"],
    points: 400
},
{
    category: "Передача координатору",
    question: "Что делать, если робота перехватил координатор?",
    answer: "Закрыть реквест как False",
    options: ["Нажимаем Parking", "Написать координаторам, узнать, что происходит", "Забрать обратно, ведь это наш реквест", "Закрыть реквест как False"],
    points: 500
},

    // Светофор
{
    category: "Светофор",
    question: "ПП разделен островком безопасности, длиной больше 5м. Наши действия?",
    answer: "Проехать за два раза остановившись на остравке",
    options: ["Проехать за два раза остановившись на остравке", "проехать за один раз, время позволяет", "Поставить полигон Blockage", "Проехать строго в режиме RCMD"],
    points: 100
},
{
    category: "Светофор",
    question: "На пп авария, не проехать. Наши действия?",
    answer: "Поставить полигон Blockage",
    options: ["Поставить полигон Static на место ДТП", "Поехать когда пойдут люди", "Передать реквест коорду", "Поставить полигон Blockage"],
    points: 200
},
{
    category: "Светофор",
    question: "Что делать если Не работает не один светофор на перекрестке?",
    answer: "Поставить полигон Blockage",
    options: ["Проехать через ПП", "Поставить полигон Blockage", "Отдать реквест коордам", "Ждать пока не включится"],
    points: 300
},
{
    category: "Светофор",
    question: "Что делать, если робот не распознаёт кроп светофора?",
    answer: "Передать координатору",
    options: ["Передать координатору", "Перезагрузить робота", "Поставить полигон Blockage", "Нажать Alarm short"],
    points: 400
},
{
    category: "Светофор",
    question: "На ПП стоит регулировщик наши действия?",
    answer: "Поставить полигон Blockage",
    options: ["Проехать ПП", "Передать реквест коорду", "Поставить полигон Blockage", "Ждать пока палка не посмотрит в лево и ехать как королева"],
    points: 500
},
];


// =====================================================
// ИГРА 2: OUTSOURCE-RESOLVER — вопросы
// ЗАПОЛНИ СВОИМИ ВОПРОСАМИ! (5 категорий × 5 вопросов)
// =====================================================

const outsourceQuestions = [
   

// Категория 1 — Реквесты
{ category: "Реквесты",
  question: "Что делать если нет места на парковке?",
  answer: "Припарковать робота рядом с ней",
  options: ["Передать Coordinator", "Припарковать робота рядом с ней", "Прожать кнопку Park", "Закрыть реквест как False"],
  points: 100
},

{ category: "Реквесты",
  question: "Что делать если крит ошибка то появляется, то сама исчезает?",
  answer: "Передать Coordinator",
  options: ["Перезагрузить робота", "Проехатся 30 сек", "Передать Coordinator", "Передать реквест Resolver"],
  points: 200
},

{ category: "Реквесты",
  question: "Робот застакался перед столбом, отмеченным на карте красным цветом, что делать?",
  answer: "Объехать в ручном режиме",
  options: ["Удалить полигон в карте", "Объехать в ручном режиме", "Закрыть реквест как False", "Передать реквест Resolver"],
  points: 300
},

{ category: "Реквесты",
  question: "Какие криты могут решить младшие операторы?",
  answer: ["Крит по траектории", "Крит по детям"],
  options: ["Крит по детям", "Крит по  локализации", "Крит по Endpoints", "Крит по траектории"],
  points: 400
},

{ category: "Реквесты",
  question: "При каких характеристиках робота можно закрыть реквест?",
  answer: ["AUTO", "зеленый ICP", "Отсутствие критов"],
  options: ["AUTO", "зеленый ICP", "У робота есть критическая ошибка", "Робот в режиме RCMD", "Неправильный 2", "Отсутствие критов"],
  points: 500
},

// Категория 2 — Передача реквеста
{ category: "Передача реквеста",
  question: "Если с роботом потеряна связь более 30 сек, какие наши действия?",
  answer: "Передать Coordinator",
  options: ["Перезагрузить робота", "Передать Coordinator", "Проехатся 30 сек", "Передать реквест Resolver"],
  points: 100
},

{ category: "Передача реквеста",
  question: "Какую резолюцию выбрать при передаче реквеста Coordinator, если у робота сломан флажок?",
  answer: "Mechanical",
  options: ["Didn't put", "Road blocked", "Mechanical", "Incident"],
  points: 200
},

{ category: "Передача реквеста",
  question: "Какие типы стака мы передаем оператору?",
  answer: "Stuck Traffic Lights",
  options: ["Stuck Traffic Lights", "Stuck Common", "Stuck don’t know where", "Stuck For a long time"],
  points: 300
},

{ category: "Передача реквеста",
  question: "Что делать, если робота дергают за флажок?",
  answer: "Передать реквест Resolver",
  options: ["Передать Coordinator", "Заполнить Incident", "Передать реквест Resolver", "Пытатся уехать"],
  points: 400
},

{ category: "Передача реквеста",
  question: "Что делать, если робот стоит на островке безопасности между светло-зелеными пешеходными переходами?",
  answer: "Передать Resolver",
  options: ["Отправить быстрый комментарий в map", "Проехать пешиходный переход", "Передать Coordinator", "Передать Resolver"],
  points: 500
},

// Категория 3 — Случайная категория
{ category: "Случайная категория",
  question: "Пропустил реквест и смена ушла в паузу, что делать?",
  answer: "Сообщить старшему, открыть смену",
  options: ["Закрыть смену ", "Сообщить старшему,", "открыть смену", "Встать в Busy", "Ждать с моря погоды"],
  points: 100
},

{ category: "Случайная категория",
  question: "Если твоего робота перехватил Watcher во время решения реквеста. Что делать?",
  answer: "Закрыть реквест как False",
  options: ["Закрыть реквест как False", "Забрать обратно", "Передать Resolver", "Закрыть реквест как Done"],
  points: 200
},

{ category: "Случайная категория",
  question: "Камеры робота в грязи и ничего не видно, что делать?",
  answer: "Передать Coordinator",
  options: ["Заполнить Incident", "Встать против ветра", "Передать Coordinator", "Передать Resolver"],
  points: 300
},

{ category: "Случайная категория",
  question: "Отметь признаки инцидента",
  answer: ["Робот причинил вред кому-то", "Робот причинил вред чему-то", "Роботу причинён вред", "Нарушение ПДД"],
  options: ["Роботу причинён вред", "Ничего не произашло", "Робот причинил вред кому-то", "Робот причинил вред чему-то", "Робота погладили", "Нарушение ПДД"],
  points: 400
},

{ category: "Случайная категория",
  question: "Пришел стак, а робот уже едет на ПП?",
  answer: "Проследить за роботом, в случае необходимости — оказать помощь. Закрыть реквест, когда робот будет ехать в авто в безопасной зоне",
  options: ["Заполнить Incident", "Проследить за роботом", "в случае необходимости — оказать помощь", "Закрыть реквест, когда робот будет ехать в авто в безопасной зоне", "Закрыть реквест как False", "Передать Resolver"],
  points: 500
},

// Категория 4 — RC
{ category: "RC",
  question: "Какой статус заказа, если робот едет к клиенту?",
  answer: "Heading to",
  options: ["Accepted order", "Arrived to client", "Heading to", "Returning to"],
  points: 100
},

{ category: "RC",
  question: "Какая кнопка включает/отключает отображение на карте всех роботов?",
  answer: "Rovers",
  options: ["Rovers", "Lanes", " Robot routes", "Layers"],
  points: 200
},

{ category: "RC",
  question: "Каким цветом в карте указана велодорожка?",
  answer: "Голубой",
  options: ["Желтый", "Голубой", "Крастный", "Зеленый"],
  points: 300
},

{ category: "RC",
  question: "Можно ли ездить по черным линиям?",
  answer: "Нет",
  options: ["Незнаю", "Наверное", "Нет", "Да"],
  points: 400
},

{ category: "RC",
  question: "Какая кнопка помечает реквест, как ошибочно сформированный?",
  answer: "False",
  options: ["More", "False", "Lanes", "Три точки"],
  points: 500
},

// Категория 5 — Инциденты
{ category: "Инциденты",
  question: "О робота ударился ребенок",
  answer: "Столкновение",
  options: ["Столкновение", "Нарушение ПДД ЭПР", "Акт насилия", "ДТП"],
  points: 100
},

{ category: "Инциденты",
  question: "Робот мешал транспортным средствам на ПП",
  answer: "Нарушение ПДД ЭПР",
  options: ["Акт насилия", "Столкновение", "Нарушение ПДД ЭПР", "Инцидента нет"],
  points: 200
},

{ category: "Инциденты",
  question: "На робота поставили пакеты и убрали",
  answer: "Инцидента нет",
  options: ["Акт насилия", "Инцидента нет", "Столкновение", "Нарушение ПДД ЭПР"],
  points: 300
},

{ category: "Инциденты",
  question: "Робот пересек высокий бордюр, но не упал",
  answer: "Нарушение ПДД ЭПР",
  options: ["Техническая неисправность", "Инцидента нет", "Столкновение", "Нарушение ПДД ЭПР"],
  points: 400
},

{ category: "Инциденты",
  question: "На верхнюю крышку робота приклеили листок",
  answer: "Акт насилия",
  options: ["Инцидента нет", "Акт насилия", "Нарушение ПДД ЭПР", "Столкновение"],
  points: 500
},

    
];

// =====================================================
// ИГРА 3: COORDINATOR — вопросы
// ЗАПОЛНИ СВОИМИ ВОПРОСАМИ! (5 категорий × 5 вопросов)
// =====================================================

const coordinatorQuestions = [


    // Категория 1
    { category: "Категория 1",
     question: "Вопрос 1 (замени меня)", 
     answer: "Правильный ответ", 
     options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
     points: 100 
    },

    { category: "Категория 1",
     question: "Вопрос 1 (замени меня)", 
     answer: "Правильный ответ", 
     options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
     points: 200 
    },

     { category: "Категория 1",
     question: "Вопрос 1 (замени меня)", 
     answer: "Правильный ответ", 
     options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
     points: 300 
    },

     { category: "Категория 1",
     question: "Вопрос 1 (замени меня)", 
     answer: "Правильный ответ", 
     options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
     points: 400 
    },

     { category: "Категория 1",
     question: "Вопрос 1 (замени меня)", 
     answer: "Правильный ответ", 
     options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
     points: 500 
    },


    // Категория 2
    { category: "Категория 2", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 100 
    },

        { category: "Категория 2", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 200 
    },

        { category: "Категория 2", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 300 
    },

        { category: "Категория 2", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 400 
    },

        { category: "Категория 2", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 500 
    },
   
    // Категория 3

    { category: "Категория 3", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 100 
    },
    
        { category: "Категория 3", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 200 
    },

        { category: "Категория 3", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 300 
    },

        { category: "Категория 3", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 400 
    },

        { category: "Категория 3", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 500 
    },

    // Категория 4

    { category: "Категория 4", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 100 
    },

        { category: "Категория 4", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 200 
    },

        { category: "Категория 4", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 300 
    },

        { category: "Категория 4", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 400 
    },

        { category: "Категория 4", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 500 
    },




    // Категория 5

    { category: "Категория 5", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 100 
    },

    { category: "Категория 5", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 200 
    },

    { category: "Категория 5", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 300 
    },

    { category: "Категория 5", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 400 
    },

    { category: "Категория 5", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 500 
    },
    
];

    // =====================================================
// ИГРА 4: WATCHER — вопросы
// ЗАПОЛНИ СВОИМИ ВОПРОСАМИ! (5 категорий × 5 вопросов)
// =====================================================

const watcherQuestions = [


    // Категория 1
    { category: "Категория 1",
     question: "Вопрос 1 (замени меня)", 
     answer: "Правильный ответ", 
     options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
     points: 100 
    },

    { category: "Категория 1",
     question: "Вопрос 1 (замени меня)", 
     answer: "Правильный ответ", 
     options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
     points: 200 
    },

     { category: "Категория 1",
     question: "Вопрос 1 (замени меня)", 
     answer: "Правильный ответ", 
     options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
     points: 300 
    },

     { category: "Категория 1",
     question: "Вопрос 1 (замени меня)", 
     answer: "Правильный ответ", 
     options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
     points: 400 
    },

     { category: "Категория 1",
     question: "Вопрос 1 (замени меня)", 
     answer: "Правильный ответ", 
     options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
     points: 500 
    },


    // Категория 2
    { category: "Категория 2", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 100 
    },

        { category: "Категория 2", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 200 
    },

        { category: "Категория 2", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 300 
    },

        { category: "Категория 2", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 400 
    },

        { category: "Категория 2", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 500 
    },
   
    // Категория 3

    { category: "Категория 3", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 100 
    },
    
        { category: "Категория 3", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 200 
    },

        { category: "Категория 3", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 300 
    },

        { category: "Категория 3", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 400 
    },

        { category: "Категория 3", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 500 
    },

    // Категория 4

    { category: "Категория 4", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 100 
    },

        { category: "Категория 4", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 200 
    },

        { category: "Категория 4", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 300 
    },

        { category: "Категория 4", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 400 
    },

        { category: "Категория 4", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 500 
    },




    // Категория 5

    { category: "Категория 5", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 100 
    },

    { category: "Категория 5", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 200 
    },

    { category: "Категория 5", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 300 
    },

    { category: "Категория 5", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 400 
    },

    { category: "Категория 5", 
    question: "Вопрос 1 (замени меня)", 
    answer: "Правильный ответ", 
    options: ["Правильный ответ", "Неправильный 1", "Неправильный 2", "Неправильный 3"], 
    points: 500 
    },
    
];


// =====================================================
// НАБОРЫ ИГР
// =====================================================

const GAME_SETS = {
    resolver: {
        title: "Resolver",
        questions: resolverQuestions
    },
    outsource: {
        title: "Outsource-Resolver",
        questions: outsourceQuestions
    },
    coordinator: {
        title: "Coordinator",
        questions: coordinatorQuestions
    },
    watcher: {
        title: "Watcher",
        questions: watcherQuestions
    }
};


// Текущая выбранная игра
let currentGameMode = null;

// Активные вопросы текущей игры
let questions = [];


// =====================================================
// СОСТОЯНИЕ ИГРЫ
// =====================================================

let currentPlayer = 1;
let players = [];
let currentQuestion = null;
let questionAnswered = false;
let foundAnswers = [];
let timerInterval = null;
let timeoutInterval = null;

// Коэффициенты снижения стоимости вопроса за каждую ошибку.
const ANSWER_VALUE_MULTIPLIERS = [1, 0.6, 0.4, 0.25, 0.15];
let currentQuestionWrongAttempts = 0;
let gameStartTime = Date.now();
let gameCounted = false;

// Ключи хранилища — зависят от выбранной игры
let STORAGE_KEY = null;
let LEADERBOARD_KEY = null;
let GAMES_COUNT_KEY = null;

function setGameMode(mode) {
    currentGameMode = mode;
    const set = GAME_SETS[mode];
    questions = set.questions;
    STORAGE_KEY = "svoya-igra-state-" + mode;
    LEADERBOARD_KEY = "svoya-igra-leaderboard-" + mode;
    GAMES_COUNT_KEY = "svoya-igra-games-count-" + mode;

    // Обновляем заголовок на стартовом экране
    const setupTitle = document.getElementById("setup-title");
    if (setupTitle) {
        setupTitle.textContent = "Настройка игры: " + set.title;
    }
}


// =====================================================
// ЭЛЕМЕНТЫ СТРАНИЦЫ
// =====================================================

const board = document.getElementById("game-board");
const modal = document.getElementById("question-modal");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const closeButton = document.getElementById("close-btn");
const resetButton = document.getElementById("reset-btn");
const scoresElement = document.querySelector(".scores");
const selectScreen = document.getElementById("select-screen");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const newGameButton = document.getElementById("new-game-btn");
const setupForm = document.getElementById("setup-form");
const addPlayerButton = document.getElementById("add-player-btn");
const playerFields = document.getElementById("player-fields");
const winnerModal = document.getElementById("winner-modal");
const winnerTitle = document.getElementById("winner-title");
const winnerPlayers = document.getElementById("winner-players");
const winnerMenuButton = document.getElementById("winner-menu-btn");
const timerElement = document.getElementById("timer");
const wrongButton = document.getElementById("wrong-btn");
const roverHappy = document.getElementById("rover-happy");
const roverSad = document.getElementById("rover-sad");
const exportCsvButton = document.getElementById("export-csv-btn");
const leaderboardList = document.getElementById("leaderboard-list");
const resetLeaderboardButton = document.getElementById("reset-leaderboard-btn");
const gamesPlayedCount = document.getElementById("games-played-count");
const resetGamesCountButton = document.getElementById("reset-games-count-btn");
const questionValueElement = document.getElementById("question-value");
const rulesButton = document.getElementById("rules-btn");
const rulesModal = document.getElementById("rules-modal");
const rulesCloseButton = document.getElementById("rules-close-btn");
const selectResolverButton = document.getElementById("select-resolver-btn");
const selectOutsourceButton = document.getElementById("select-outsource-btn");
const selectCoordinatorButton = document.getElementById("select-coordinator-btn");
const selectWatcherButton = document.getElementById("select-watcher-btn");
const backToSelectButton = document.getElementById("back-to-select-btn");



// =====================================================
// КАТЕГОРИИ (вычисляются из вопросов текущей игры)
// =====================================================

function getCategories() {
    const cats = [];
    questions.forEach(function (q) {
        if (!cats.includes(q.category)) {
            cats.push(q.category);
        }
    });
    return cats;
}


// =====================================================
// АКТИВНЫЙ ИГРОК
// =====================================================

function updateActivePlayer() {

    document.querySelectorAll(".team-score").forEach(function (player, index) {

        player.classList.toggle(
            "active-team",
            currentPlayer === index + 1
        );

    });

}
// =====================================================
// СТОИМОСТЬ ВОПРОСА
// =====================================================

function getCurrentQuestionValue() {
    if (!currentQuestion) return 0;

    const idx = Math.min(currentQuestionWrongAttempts, ANSWER_VALUE_MULTIPLIERS.length - 1);
    const raw = currentQuestion.points * ANSWER_VALUE_MULTIPLIERS[idx];

    return Math.max(5, Math.round(raw / 5) * 5);
}

function updateQuestionValueDisplay() {
    if (!questionValueElement || !currentQuestion) return;

    const value = getCurrentQuestionValue();
    const base = currentQuestion.points;

    if (value === base) {
        questionValueElement.textContent = "💰 Вопрос стоит: " + value + " баллов";
    } else {
        questionValueElement.textContent =
            "💰 Стоимость снижена: " + value + " баллов (было " + base + ")";
    }
}


// =====================================================
// ТАЙМЕР
// =====================================================

function getTimeForPoints(points) {
    const map = { 100: 60, 200: 50, 300: 40, 400: 30, 500: 20 };
    return map[points] || 60;
}

function startTimer(seconds) {
    stopTimer();

    let timeLeft = seconds;
    timerElement.textContent = timeLeft;
    timerElement.classList.remove("timer-caution", "timer-danger");

    timerInterval = setInterval(function () {

        timeLeft -= 1;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 5) {
            timerElement.classList.remove("timer-caution");
            timerElement.classList.add("timer-danger");
        } else if (timeLeft <= 10) {
            timerElement.classList.add("timer-caution");
        }

        if (timeLeft <= 0) {
            stopTimer();
            onTimeOut();
        }

    }, 1000);
}

function stopTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    if (timeoutInterval !== null) {
        clearInterval(timeoutInterval);
        timeoutInterval = null;
    }
}

function onTimeOut() {
    if (currentQuestion === null) {
        return;
    }

    players[currentPlayer - 1].streak = 0;
    players[currentPlayer - 1].errors += 1;

    const buttons = document.querySelectorAll(".answer-option");
    const previouslyEnabled = [];

    buttons.forEach(function (b) {
        if (!b.disabled) {
            previouslyEnabled.push(b);
            b.disabled = true;
        }
    });

    const nextPlayerNumber =
        currentPlayer === players.length ? 1 : currentPlayer + 1;
    const nextPlayerName = players[nextPlayerNumber - 1].name;

    let countdown = 5;
    resultElement.textContent =
        "⏱ Время вышло! Ход переходит игроку «" + nextPlayerName +
        "» через " + countdown + "…";

    timeoutInterval = setInterval(function () {

        countdown -= 1;

        if (countdown > 0) {
            resultElement.textContent =
                "⏱ Время вышло! Ход переходит игроку «" + nextPlayerName +
                "» через " + countdown + "…";
            return;
        }

        clearInterval(timeoutInterval);
        timeoutInterval = null;

        currentPlayer = nextPlayerNumber;
        updateActivePlayer();

        previouslyEnabled.forEach(function (b) {
            b.disabled = false;
        });

        resultElement.textContent =
            "Отвечает игрок «" + players[currentPlayer - 1].name + "».";

        startTimer(getTimeForPoints(currentQuestion.points));

        saveState();

    }, 1000);
}

// =====================================================
// РОБОТ
// =====================================================

function showHappyRover() {
    if (!roverHappy || !roverSad) return;
    roverHappy.classList.remove("hidden");
    roverSad.classList.add("hidden");
}

function showSadRover() {
    if (!roverHappy || !roverSad) return;
    roverHappy.classList.add("hidden");
    roverSad.classList.remove("hidden");
}
// =====================================================
// ТОП ИГРОКОВ
// =====================================================

function loadLeaderboard() {
    try {
        const raw = localStorage.getItem(LEADERBOARD_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveLeaderboardEntry(name, score) {
    const board = loadLeaderboard();
    board.push({ name: name, score: score, date: new Date().toISOString() });
    board.sort(function (a, b) { return b.score - a.score; });
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(board.slice(0, 20)));
}

function renderLeaderboard() {
    if (!leaderboardList) return;

    const board = loadLeaderboard().slice(0, 5);
    leaderboardList.innerHTML = "";

    if (board.length === 0) {
        const li = document.createElement("li");
        li.className = "empty";
        li.textContent = "Пока нет результатов";
        leaderboardList.appendChild(li);
        return;
    }

    board.forEach(function (entry) {
        const li = document.createElement("li");
        const name = document.createElement("span");
        const score = document.createElement("span");

        name.className = "lb-name";
        name.textContent = entry.name;
        score.className = "lb-score";
        score.textContent = entry.score;

        li.appendChild(name);
        li.appendChild(score);
        leaderboardList.appendChild(li);
    });
}

// =====================================================
// СЧЁТЧИК СЫГРАННЫХ ИГР
// =====================================================

function loadGamesCount() {
    return Number(localStorage.getItem(GAMES_COUNT_KEY) || 0);
}

function renderGamesCount() {
    if (!gamesPlayedCount) return;
    gamesPlayedCount.textContent = loadGamesCount();
}

function incrementGamesCount() {
    const count = loadGamesCount() + 1;
    localStorage.setItem(GAMES_COUNT_KEY, count);
    renderGamesCount();
}

// =====================================================
// ЭКСПОРТ CSV
// =====================================================

function exportCSV() {
    if (!players || players.length === 0) return;

    const rows = [];
    const dateStr = new Date().toLocaleString("ru-RU");

    rows.push(["Партия (" + (GAME_SETS[currentGameMode] ? GAME_SETS[currentGameMode].title : "") + "):", dateStr]);
    rows.push([]);
    rows.push(["Место", "Игрок", "Очки", "Верных ответов", "Ошибок", "Макс. серия", "Время игры"]);

    const duration = Math.max(1, Math.round((Date.now() - gameStartTime) / 1000));
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    const timeStr = minutes + "м " + seconds + "с";

    const sorted = players.map(function (p, i) {
        const scoreEl = document.getElementById("score" + (i + 1));
        return {
            name: p.name,
            score: scoreEl ? Number(scoreEl.textContent) : 0,
            correct: p.correct || 0,
            errors: p.errors || 0,
            maxStreak: p.maxStreak || 0
        };
    }).sort(function (a, b) { return b.score - a.score; });

    sorted.forEach(function (p, i) {
        rows.push([i + 1, p.name, p.score, p.correct, p.errors, p.maxStreak, timeStr]);
    });

    const csv = "\uFEFF" + rows.map(function (r) { return r.join(";"); }).join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    const stamp = new Date().toISOString().slice(0, 16).replace("T", "_").replace(":", "-");
    a.download = currentGameMode + "_igra_" + stamp + ".csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
// =====================================================
// СОХРАНЕНИЕ СОСТОЯНИЯ
// =====================================================

function saveState() {
    if (gameScreen.classList.contains("hidden")) {
        return;
    }

    const usedCells = [];
    document.querySelectorAll(".cell").forEach(function (cell) {
        if (cell.classList.contains("used")) {
            usedCells.push(Number(cell.dataset.index));
        }
    });

    const playersState = players.map(function (player, index) {
        const scoreEl = document.getElementById("score" + (index + 1));
        return {
            name: player.name,
            score: scoreEl ? Number(scoreEl.textContent) : 0,
            correct: player.correct || 0,
            errors: player.errors || 0,
            streak: player.streak || 0,
            maxStreak: player.maxStreak || 0
        };
    });

    const state = {
        gameMode: currentGameMode,
        players: playersState,
        currentPlayer: currentPlayer,
        usedCells: usedCells,
        gameStartTime: gameStartTime,
        gameCounted: gameCounted
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clearState() {
    localStorage.removeItem(STORAGE_KEY);
}

function loadState() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
        return false;
    }

    try {
        const state = JSON.parse(raw);
        if (!state.players || state.players.length < 2) {
            return false;
        }

        players = state.players.map(function (p) {
            return {
                name: p.name,
                score: p.score || 0,
                correct: p.correct || 0,
                errors: p.errors || 0,
                streak: p.streak || 0,
                maxStreak: p.maxStreak || 0
            };
        });
        currentPlayer = state.currentPlayer || 1;
        if (state.gameStartTime) {
            gameStartTime = state.gameStartTime;
        }
        gameCounted = state.gameCounted || false;
        startScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");

        renderScores(players.map(function (p) { return p.name; }));

        players.forEach(function (player, index) {
            const scoreEl = document.getElementById("score" + (index + 1));
            if (scoreEl) {
                scoreEl.textContent = player.score;
            }
        });

        if (state.usedCells && state.usedCells.length) {
            document.querySelectorAll(".cell").forEach(function (cell) {
                if (state.usedCells.includes(Number(cell.dataset.index))) {
                    cell.classList.add("used");
                }
            });
        }

        updateActivePlayer();

        if (isGameFinished()) {
            showWinner();
        }

        return true;
    } catch (e) {
        return false;
    }
}

// =====================================================
// ПОЛЯ ИГРОКОВ
// =====================================================

function createPlayerFieldRow(number) {

    const row = document.createElement("div");
    row.className = "player-field-row";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "single-player-input";
    input.placeholder = `Имя игрока ${number}`;
    input.maxLength = 30;

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "remove-player-btn";
    removeBtn.textContent = "✕";
    removeBtn.title = "Удалить игрока";

    removeBtn.addEventListener("click", function () {
        const rows = playerFields.querySelectorAll(".player-field-row");
        if (rows.length <= 2) {
            return; // минимум 2 игрока
        }
        row.remove();
        updatePlayerFieldControls();
    });

    row.appendChild(input);
    row.appendChild(removeBtn);
    return row;
}

function updatePlayerFieldControls() {
    const rows = playerFields.querySelectorAll(".player-field-row");

    rows.forEach(function (row, index) {
        const input = row.querySelector("input");
        if (input) {
            input.placeholder = `Имя игрока ${index + 1}`;
        }

        const btn = row.querySelector(".remove-player-btn");
        if (btn) {
            btn.disabled = rows.length <= 2;
        }
    });

    if (addPlayerButton) {
        addPlayerButton.disabled = rows.length >= 8;
    }
}

function renderPlayerFields() {
    playerFields.innerHTML = "";

    for (let i = 1; i <= 2; i++) {
        playerFields.appendChild(createPlayerFieldRow(i));
    }

    updatePlayerFieldControls();
}
function addPlayer() {
    const currentRows = playerFields.querySelectorAll(".player-field-row");

    if (currentRows.length >= 8) {
        alert("Максимум 8 игроков");
        return;
    }

    const row = createPlayerFieldRow(currentRows.length + 1);
    playerFields.appendChild(row);

    updatePlayerFieldControls();

    const input = row.querySelector("input");
    if (input) {
        input.focus();
    }
}


// =====================================================
// ОТОБРАЖЕНИЕ СЧЁТА
// =====================================================

function renderScores(playerNames) {

    scoresElement.innerHTML = "";

    playerNames.forEach(function (name, index) {

        const playerScore = document.createElement("div");
        const score = document.createElement("span");

        playerScore.id = "player" + (index + 1);
        playerScore.className = "team-score";

        playerScore.textContent = name + ": ";

        score.id = "score" + (index + 1);
        score.textContent = "0";

        playerScore.appendChild(score);
        scoresElement.appendChild(playerScore);

    });

    updateActivePlayer();

}


// =====================================================
// ОЧИСТКА ПОЛЯ
// =====================================================

function clearBoard() {

    document.querySelectorAll(".cell.used").forEach(function (cell) {

        cell.classList.remove("used");

    });

}


// =====================================================
// ОТКРЫТИЕ НАСТРОЕК
// =====================================================

function openSetup() {

    setupForm.classList.remove("hidden");
    newGameButton.classList.add("hidden");

    renderPlayerFields();

}


// =====================================================
// ВОЗВРАТ В МЕНЮ
// =====================================================

function returnToMenu() {

    stopTimer();

    closeQuestion();

    clearState();

    winnerModal.classList.add("hidden");

    gameScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

    // Сразу открываем форму с вводом игроков
    openSetup();

    renderLeaderboard();
    renderGamesCount();

}



// =====================================================
// ПРОВЕРКА ОКОНЧАНИЯ ИГРЫ
// =====================================================

function isGameFinished() {

    return document.querySelectorAll(".cell:not(.used)").length === 0;

}


// =====================================================
// ПОБЕДИТЕЛЬ
// =====================================================

function showWinner() {

    if (!gameCounted) {
        incrementGamesCount();
        gameCounted = true;
        saveState();
    }

    const highestScore = Math.max.apply(
        null,
        players.map(function (player, index) {

            return Number(
                document.getElementById("score" + (index + 1)).textContent
            );

        })
    );

    const winners = players.filter(function (player, index) {

        return Number(
            document.getElementById("score" + (index + 1)).textContent
        ) === highestScore;

    });

    if (winners.length > 1) {

        winnerTitle.textContent = "Ничья!";

        winnerPlayers.textContent =
            "Игроки набрали по " + highestScore + " очков.";

    } else {

        winnerTitle.textContent =
            "Победил «" + winners[0].name + "»!";

        winnerPlayers.textContent =
            "Победитель набрал " + highestScore + " очков.";

    }

    players.forEach(function (player, index) {
        const scoreEl = document.getElementById("score" + (index + 1));
        const finalScore = scoreEl ? Number(scoreEl.textContent) : 0;
        saveLeaderboardEntry(player.name, finalScore);
    });

    renderLeaderboard();

    winnerModal.classList.remove("hidden");

}


// =====================================================
// СОЗДАНИЕ ИГРОВОГО ПОЛЯ (для текущей игры)
// =====================================================

function buildBoard() {

    board.innerHTML = "";

    const categories = getCategories();

    // Категории
    for (let i = 0; i < categories.length; i++) {

        const category = document.createElement("div");

        category.className = "category";
        category.textContent = categories[i];

        board.appendChild(category);

    }

    // Клетки: 5 рядов по числу категорий
    for (let row = 0; row < 5; row++) {

        for (let category = 0; category < categories.length; category++) {

            const index = category * 5 + row;
            const question = questions[index];

            if (!question) continue;

            const cell = document.createElement("div");

            cell.className = "cell";
            cell.textContent = question.points;
            cell.dataset.index = index;

            cell.addEventListener("click", function () {

                if (cell.classList.contains("used")) {
                    return;
                }

                currentQuestion = question;
                currentQuestion.cell = cell;

                currentQuestionWrongAttempts = Number(cell.dataset.wrongAttempts || 0);

                questionAnswered = false;
                foundAnswers = [];

                questionElement.textContent = question.question;

                updateQuestionValueDisplay();

                resultElement.textContent =
                    "Ход игрока " + players[currentPlayer - 1].name;

                optionsElement.innerHTML = "";

                for (let j = 0; j < question.options.length; j++) {

                    const optionButton = document.createElement("button");

                    optionButton.textContent = question.options[j];
                    optionButton.className = "answer-option";

                    optionButton.addEventListener("click", function () {

                        checkAnswer(question.options[j]);

                    });

                    optionsElement.appendChild(optionButton);

                }

                modal.classList.remove("hidden");

                showHappyRover();

                startTimer(getTimeForPoints(question.points));
            });

            board.appendChild(cell);

        }

    }
}


// =====================================================
// ПРОВЕРКА ОТВЕТА
// =====================================================

function checkAnswer(selectedAnswer) {

    if (currentQuestion === null) {
        return;
    }

    if (questionAnswered) {
        return;
    }

    const correctAnswers = Array.isArray(currentQuestion.answer)
        ? currentQuestion.answer
        : [currentQuestion.answer];

    if (foundAnswers.includes(selectedAnswer)) {
        return;
    }

    const buttons = document.querySelectorAll(".answer-option");


    // -------------------------------------------------
    // ПРАВИЛЬНЫЙ ОТВЕТ
    // -------------------------------------------------

 if (correctAnswers.includes(selectedAnswer)) {

        foundAnswers.push(selectedAnswer);

        const currentValue = getCurrentQuestionValue();
        const pointsPerAnswer = Math.floor(currentValue / correctAnswers.length);

        const scoreElement =
            document.getElementById("score" + currentPlayer);

        const currentScore =
            Number(scoreElement.textContent);

        scoreElement.textContent =
            currentScore + pointsPerAnswer;


        buttons.forEach(function (button) {

            if (button.textContent === selectedAnswer) {

                button.disabled = true;
                button.style.background = "#2e9d4d";
                button.style.color = "white";

            }

        });

        // Все правильные ответы найдены
        if (foundAnswers.length === correctAnswers.length) {

            questionAnswered = true;

            const player = players[currentPlayer - 1];
            player.correct += 1;
            player.streak += 1;
            if (player.streak > player.maxStreak) {
                player.maxStreak = player.streak;
            }

            if (player.streak % 3 === 0) {
                const bonus = 50;
                scoreElement.textContent = Number(scoreElement.textContent) + bonus;
                resultElement.textContent =
                    "🔥 " + player.streak + " правильных подряд! Бонус +" + bonus + " очков!";
            } else {
                resultElement.textContent =
                    "Все правильные ответы найдены!";
            }

            currentQuestion.cell.classList.add("used");

            saveState();

            setTimeout(function () {

                if (isGameFinished()) {

                    showWinner();

                } else {

                    closeQuestion();

                }

            }, 1500);

        } else {

            resultElement.textContent =
                "Правильно! +" +
                pointsPerAnswer +
                " очков. " +
                "Продолжайте искать правильные ответы.";

        }

    }


    // -------------------------------------------------
    // НЕПРАВИЛЬНЫЙ ОТВЕТ
    // -------------------------------------------------

    else {

        buttons.forEach(function (button) {

            if (button.textContent === selectedAnswer) {

                button.disabled = true;
                button.style.background = "#c0392b";
                button.style.color = "white";

            }

        });


        showSadRover();

        currentQuestionWrongAttempts++;
        currentQuestion.cell.dataset.wrongAttempts = currentQuestionWrongAttempts;
        updateQuestionValueDisplay();

        players[currentPlayer - 1].streak = 0;
        players[currentPlayer - 1].errors += 1;

        currentPlayer =
            currentPlayer === players.length
                ? 1
                : currentPlayer + 1;

        updateActivePlayer();

        const nextValue = getCurrentQuestionValue();
        resultElement.textContent =
            "Неправильно! Теперь отвечает игрок «" +
            players[currentPlayer - 1].name +
            "». Вопрос теперь стоит " + nextValue + " баллов.";

        startTimer(getTimeForPoints(currentQuestion.points));

        saveState();

    }

}


// =====================================================
// ЗАКРЫТИЕ ВОПРОСА
// =====================================================

function closeQuestion() {

    stopTimer();

    modal.classList.add("hidden");

    currentQuestion = null;
    questionAnswered = false;
    foundAnswers = [];
    currentQuestionWrongAttempts = 0;

    optionsElement.innerHTML = "";
    resultElement.textContent = "";

    timerElement.classList.remove("timer-caution", "timer-danger");

    if (roverHappy && roverSad) {
        roverHappy.classList.add("hidden");
        roverSad.classList.add("hidden");
    }
}

// =====================================================
// ВЫБОР ИГРЫ
// =====================================================

function openGame(mode) {
    setGameMode(mode);

    selectScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

    buildBoard();

    renderLeaderboard();
    renderGamesCount();

    // Сразу открываем форму с вводом игроков (без кнопки "Новая игра")
    openSetup();

    // Пытаемся восстановить сохранённую партию этой игры
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
        loadState();
    }
}


if (selectResolverButton) {
    selectResolverButton.addEventListener("click", function () {
        openGame("resolver");
    });
}

if (selectOutsourceButton) {
    selectOutsourceButton.addEventListener("click", function () {
        openGame("outsource");
    });
}
if (selectCoordinatorButton) {
    selectCoordinatorButton.addEventListener("click", function () {
        openGame("coordinator");
    });
}

if (selectWatcherButton) {
    selectWatcherButton.addEventListener("click", function () {
        openGame("watcher");
    });
}


// =====================================================
// ОБРАБОТЧИКИ КНОПОК
// =====================================================

closeButton.addEventListener("click", function () {

    closeQuestion();

});

wrongButton.addEventListener("click", function () {

    if (currentQuestion === null) {
        return;
    }

    stopTimer();

    if (currentQuestion.cell) {
        const attempts = Number(currentQuestion.cell.dataset.wrongAttempts || 0) + 1;
        currentQuestion.cell.dataset.wrongAttempts = attempts;
    }

    players[currentPlayer - 1].streak = 0;
    players[currentPlayer - 1].errors += 1;

    currentPlayer =
        currentPlayer === players.length ? 1 : currentPlayer + 1;

    updateActivePlayer();

    closeQuestion();

    saveState();

});

newGameButton.addEventListener("click", function () {

    openSetup();

});

addPlayerButton.addEventListener("click", function () {
    addPlayer();

});

setupForm.addEventListener("submit", startGame);

function startGame(event) {
    event.preventDefault();

    clearState();

    const inputs = playerFields.querySelectorAll("input");

    players = [];

    inputs.forEach((input, index) => {
        const name = input.value.trim();

        players.push({
            name: name || `Игрок ${index + 1}`,
            score: 0,
            correct: 0,
            errors: 0,
            streak: 0,
            maxStreak: 0
        });
    });

    gameStartTime = Date.now();
    gameCounted = false;

    if (players.length < 2) {
        alert("Добавьте минимум 2 игроков");
        return;
    }

    currentPlayer = 1;

    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    renderScores(players.map(function (player) {
        return player.name;
    }));

    updateActivePlayer();
    clearBoard();

    saveState();
}


resetButton.addEventListener("click", function () {

    returnToMenu();

});

winnerMenuButton.addEventListener("click", function () {

    returnToMenu();

});
if (exportCsvButton) {
    exportCsvButton.addEventListener("click", exportCSV);
}

if (resetLeaderboardButton) {
    resetLeaderboardButton.addEventListener("click", function () {
        if (confirm("Сбросить все результаты топа? Это действие нельзя отменить.")) {
            localStorage.removeItem(LEADERBOARD_KEY);
            renderLeaderboard();
        }
    });
}
if (resetGamesCountButton) {
    resetGamesCountButton.addEventListener("click", function () {
        if (confirm("Сбросить счётчик сыгранных игр?")) {
            localStorage.removeItem(GAMES_COUNT_KEY);
            renderGamesCount();
        }
    });
}
// =====================================================
// МОДАЛКА ПРАВИЛ
// =====================================================

if (rulesButton) {
    rulesButton.addEventListener("click", function () {
        rulesModal.classList.remove("hidden");
    });
}

if (rulesCloseButton) {
    rulesCloseButton.addEventListener("click", function () {
        rulesModal.classList.add("hidden");
    });
}

if (rulesModal) {
    rulesModal.addEventListener("click", function (e) {
        if (e.target === rulesModal) {
            rulesModal.classList.add("hidden");
        }
    });
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && rulesModal && !rulesModal.classList.contains("hidden")) {
        rulesModal.classList.add("hidden");
    }
});

// =====================================================
// КНОПКА "НАЗАД К ВЫБОРУ ИГРЫ"
// =====================================================

if (backToSelectButton) {
    backToSelectButton.addEventListener("click", function () {

        stopTimer();
        closeQuestion();

        startScreen.classList.add("hidden");
        gameScreen.classList.add("hidden");
        winnerModal.classList.add("hidden");
        selectScreen.classList.remove("hidden");

        setupForm.classList.add("hidden");
        newGameButton.classList.remove("hidden");

    });
}

// =====================================================
// ТЁМНАЯ ТЕМА
// =====================================================

const THEME_KEY = "svoya-igra-theme";
const themeToggleButton = document.getElementById("theme-toggle-btn");

function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
        if (themeToggleButton) themeToggleButton.textContent = "☀️";
    } else {
        document.body.classList.remove("dark-theme");
        if (themeToggleButton) themeToggleButton.textContent = "🌙";
    }
}

// Восстанавливаем сохранённую тему при загрузке
applyTheme(localStorage.getItem(THEME_KEY) || "light");

if (themeToggleButton) {
    themeToggleButton.addEventListener("click", function () {
        const isDark = document.body.classList.contains("dark-theme");
        const nextTheme = isDark ? "light" : "dark";
        localStorage.setItem(THEME_KEY, nextTheme);
        applyTheme(nextTheme);
    });
}


