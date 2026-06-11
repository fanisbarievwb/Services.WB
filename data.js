const issuesData = [
    {
        "Issue": "Не работает погрузчик, ричтрак, тележка (рохля, штабелёр)",
        "Service": "Механики (СГМ)",
        "Contact": "Русин Александр Викторович, \n +7 915-014-12-66 \n Барышев Алексей Викторович, \n +7 968 356 21 01",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@rusin.aleksandr\nhttps:\/\/band.wb.ru\/wb\/messages\/@baryshev.aleksey4"
    },
    {
        "Issue": "Не открываются грузовые или доковые ворота, уравнительная площадка",
        "Service": "Механики (СГМ)",
        "Contact": "Русин Александр Викторович, \n +7 915-014-12-66 \n Барышев Алексей Викторович, \n +7 968 356 21 01",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@rusin.aleksandr\nhttps:\/\/band.wb.ru\/wb\/messages\/@baryshev.aleksey4"
    },
    {
        "Issue": "Не заряжается техника, проблема с зарядной станцией или аккумулятором",
        "Service": "Механики (СГМ)",
        "Contact": "Русин Александр Викторович, \n +7 915-014-12-66 \n Барышев Алексей Викторович, \n +7 968 356 21 01",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@rusin.aleksandr\nhttps:\/\/band.wb.ru\/wb\/messages\/@baryshev.aleksey4"
    },
    {
        "Issue": "Не работает пресс, шредер, компактор",
        "Service": "Механики (СГМ)",
        "Contact": "Русин Александр Викторович, \n +7 915-014-12-66 \n Барышев Алексей Викторович, \n +7 968 356 21 01",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@rusin.aleksandr\nhttps:\/\/band.wb.ru\/wb\/messages\/@baryshev.aleksey4"
    },
    {
        "Issue": "Не работает лифт в столовой",
        "Service": "Механики (СГМ)",
        "Contact": "Русин Александр Викторович, \n +7 915-014-12-66 \n Барышев Алексей Викторович, \n +7 968 356 21 01",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@rusin.aleksandr\nhttps:\/\/band.wb.ru\/wb\/messages\/@baryshev.aleksey4"
    },
    {
        "Issue": "Не работает лифт или подъёмник на мезонине, сортер, транспортёр",
        "Service": "Конструкт. бюро (КБ)",
        "Contact": "Тихонюк Дмитрий Геннадьевич, \n +7 901 747 24 74",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@tihonyuk.dmitriy"
    },
    {
        "Issue": "Нет электричества, не работает розетка, обесточено оборудование",
        "Service": "Эксплуатация (СЭ)",
        "Contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "Issue": "Не горит свет (рабочий, аварийный, уличный, на мезонине)",
        "Service": "Эксплуатация (СЭ)",
        "Contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "Issue": "Душно, жарко или холодно — не работает вентиляция или кондиционер",
        "Service": "Эксплуатация (СЭ)",
        "Contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "Issue": "Не греет отопление, не работает тепловая завеса или тепловентилятор",
        "Service": "Эксплуатация (СЭ)",
        "Contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "Issue": "Не работает рукосушилка",
        "Service": "Эксплуатация (СЭ)",
        "Contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "Issue": "Засор или перелив наружной \/ ливневой канализации",
        "Service": "Эксплуатация (СЭ)",
        "Contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "Issue": "Нужно подключить новое оборудование к электричеству",
        "Service": "Эксплуатация (СЭ)",
        "Contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "Issue": "Повреждён мезонин, стеллаж, полка, лестница, ограждение мезонина",
        "Service": "Мезонин (СЭМ)",
        "Contact": "Калинин Егор Александрович, \n +7 925 208 88 29 \n Ростов Вячеслав Сергеевич,\n +7 977 830 24 36",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@kalinin.egor17\nhttps:\/\/band.wb.ru\/wb\/messages\/@rostov.v"
    },
    {
        "Issue": "Сбит отбойник, защита стойки или ловушка на мезонине",
        "Service": "Мезонин (СЭМ)",
        "Contact": "Калинин Егор Александрович, \n +7 925 208 88 29 \n Ростов Вячеслав Сергеевич,\n +7 977 830 24 36",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@kalinin.egor17\nhttps:\/\/band.wb.ru\/wb\/messages\/@rostov.v"
    },
    {
        "Issue": "Нужна проверка \/ протяжка конструкций, плановое ТО мезонина",
        "Service": "Мезонин (СЭМ)",
        "Contact": "Калинин Егор Александрович, \n +7 925 208 88 29 \n Ростов Вячеслав Сергеевич,\n +7 977 830 24 36",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@kalinin.egor17\nhttps:\/\/band.wb.ru\/wb\/messages\/@rostov.v"
    },
    {
        "Issue": "Не закрывается дверь, сломан доводчик или магнит на мезонине",
        "Service": "Мезонин (СЭМ)",
        "Contact": "Калинин Егор Александрович, \n +7 925 208 88 29 \n Ростов Вячеслав Сергеевич,\n +7 977 830 24 36",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@kalinin.egor17\nhttps:\/\/band.wb.ru\/wb\/messages\/@rostov.v"
    },
    {
        "Issue": "Протекает труба, засор в санузле, не работает кран, унитаз, водонагреватель",
        "Service": "Строит. служба (РСС)",
        "Contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "Issue": "Повреждён пол, стена, дверь, окно, плитка",
        "Service": "Строит. служба (РСС)",
        "Contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "Issue": "Сломана мебель — стол, стул, шкаф",
        "Service": "Строит. служба (РСС)",
        "Contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "Issue": "Сбит отбойник у колонны, шкафа, ворот или оборудования",
        "Service": "Строит. служба (РСС)",
        "Contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "Issue": "Проблема на территории — яма в асфальте, разметка, знак, ограждение",
        "Service": "Строит. служба (РСС)",
        "Contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "Issue": "Не работает турникет или шлагбаум (механика)",
        "Service": "Строит. служба (РСС)",
        "Contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "Issue": "Нужен косметический ремонт помещения",
        "Service": "Строит. служба (РСС)",
        "Contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "Issue": "Не закрывается дверь в складе, сломан доводчик или магнит",
        "Service": "Строит. служба (РСС)",
        "Contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "Issue": "Грязно, нужна уборка, не вывезли мусор или упаковку",
        "Service": "АХО",
        "Contact": "Галстян Ашот Иличевич\n +7 901 908 91 17",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@galstyan.ashot"
    },
    {
        "Issue": "Грызуны или насекомые — нужна дезинфекция \/ дератизация",
        "Service": "АХО",
        "Contact": "Галстян Ашот Иличевич\n +7 901 908 91 17",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@galstyan.ashot"
    },
    {
        "Issue": "Не работает поломоечная машина",
        "Service": "АХО",
        "Contact": "Галстян Ашот Иличевич\n +7 901 908 91 17",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@galstyan.ashot"
    },
    {
        "Issue": "Сработала или неисправна пожарная сигнализация, оповещение",
        "Service": "Служба ПБ",
        "Contact": "Лебедев Михаил Викторович, \n +7 962 936 26 36",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@lebedev.mihail34"
    },
    {
        "Issue": "Проблема с пожарным краном, огнетушителем, пожарным шкафом",
        "Service": "Служба ПБ",
        "Contact": "Лебедев Михаил Викторович, \n +7 962 936 26 36",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@lebedev.mihail34"
    },
    {
        "Issue": "Не работает проход по карте (СКУД), турникет или шлагбаум по карте",
        "Service": "Отдел IT",
        "Contact": "Литвинов Виталий Васильевич, \n +7 958 838 80 75",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@litvinov.vitaliy2"
    },
    {
        "Issue": "Не работает видеонаблюдение, информационное табло, серверная",
        "Service": "Отдел IT",
        "Contact": "Литвинов Виталий Васильевич, \n +7 958 838 80 75",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@litvinov.vitaliy2"
    },
    {
        "Issue": "Нужно подключить или перепрограммировать СКУД (замки, контроллеры, слаботочка)",
        "Service": "Отдел IT",
        "Contact": "Литвинов Виталий Васильевич, \n +7 958 838 80 75",
        "Url": "https:\/\/band.wb.ru\/wb\/messages\/@litvinov.vitaliy2"
    }
];



