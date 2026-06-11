const issuesData = [
    {
        "issue": "Не работает погрузчик, ричтрак, тележка (рохля, штабелёр)",
        "service": "Механики (СГМ)",
        "contact": "Русин Александр Викторович, \n +7 915-014-12-66 \n Барышев Алексей Викторович, \n +7 968 356 21 01",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@rusin.aleksandr\nhttps:\/\/band.wb.ru\/wb\/messages\/@baryshev.aleksey4"
    },
    {
        "issue": "Не открываются грузовые или доковые ворота, уравнительная площадка",
        "service": "Механики (СГМ)",
        "contact": "Русин Александр Викторович, \n +7 915-014-12-66 \n Барышев Алексей Викторович, \n +7 968 356 21 01",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@rusin.aleksandr\nhttps:\/\/band.wb.ru\/wb\/messages\/@baryshev.aleksey4"
    },
    {
        "issue": "Не заряжается техника, проблема с зарядной станцией или аккумулятором",
        "service": "Механики (СГМ)",
        "contact": "Русин Александр Викторович, \n +7 915-014-12-66 \n Барышев Алексей Викторович, \n +7 968 356 21 01",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@rusin.aleksandr\nhttps:\/\/band.wb.ru\/wb\/messages\/@baryshev.aleksey4"
    },
    {
        "issue": "Не работает пресс, шредер, компактор",
        "service": "Механики (СГМ)",
        "contact": "Русин Александр Викторович, \n +7 915-014-12-66 \n Барышев Алексей Викторович, \n +7 968 356 21 01",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@rusin.aleksandr\nhttps:\/\/band.wb.ru\/wb\/messages\/@baryshev.aleksey4"
    },
    {
        "issue": "Не работает лифт в столовой",
        "service": "Механики (СГМ)",
        "contact": "Русин Александр Викторович, \n +7 915-014-12-66 \n Барышев Алексей Викторович, \n +7 968 356 21 01",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@rusin.aleksandr\nhttps:\/\/band.wb.ru\/wb\/messages\/@baryshev.aleksey4"
    },
    {
        "issue": "Не работает лифт или подъёмник на мезонине, сортер, транспортёр",
        "service": "Конструкт. бюро (КБ)",
        "contact": "Тихонюк Дмитрий Геннадьевич, \n +7 901 747 24 74",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@tihonyuk.dmitriy"
    },
    {
        "issue": "Нет электричества, не работает розетка, обесточено оборудование",
        "service": "Эксплуатация (СЭ)",
        "contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "issue": "Не горит свет (рабочий, аварийный, уличный, на мезонине)",
        "service": "Эксплуатация (СЭ)",
        "contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "issue": "Душно, жарко или холодно — не работает вентиляция или кондиционер",
        "service": "Эксплуатация (СЭ)",
        "contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "issue": "Не греет отопление, не работает тепловая завеса или тепловентилятор",
        "service": "Эксплуатация (СЭ)",
        "contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "issue": "Не работает рукосушилка",
        "service": "Эксплуатация (СЭ)",
        "contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "issue": "Засор или перелив наружной \/ ливневой канализации",
        "service": "Эксплуатация (СЭ)",
        "contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "issue": "Нужно подключить новое оборудование к электричеству",
        "service": "Эксплуатация (СЭ)",
        "contact": "Орлов Илья Александрович, \n +7 919 761 94 70\n Цветков Дмитрий Иосифович, \n +7 903 711 40 21",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@orlov.ilya18\nhttps:\/\/band.wb.ru\/wb\/messages\/@cvetkov.dmitriy40"
    },
    {
        "issue": "Повреждён мезонин, стеллаж, полка, лестница, ограждение мезонина",
        "service": "Мезонин (СЭМ)",
        "contact": "Калинин Егор Александрович, \n +7 925 208 88 29 \n Ростов Вячеслав Сергеевич,\n +7 977 830 24 36",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@kalinin.egor17\nhttps:\/\/band.wb.ru\/wb\/messages\/@rostov.v"
    },
    {
        "issue": "Сбит отбойник, защита стойки или ловушка на мезонине",
        "service": "Мезонин (СЭМ)",
        "contact": "Калинин Егор Александрович, \n +7 925 208 88 29 \n Ростов Вячеслав Сергеевич,\n +7 977 830 24 36",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@kalinin.egor17\nhttps:\/\/band.wb.ru\/wb\/messages\/@rostov.v"
    },
    {
        "issue": "Нужна проверка \/ протяжка конструкций, плановое ТО мезонина",
        "service": "Мезонин (СЭМ)",
        "contact": "Калинин Егор Александрович, \n +7 925 208 88 29 \n Ростов Вячеслав Сергеевич,\n +7 977 830 24 36",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@kalinin.egor17\nhttps:\/\/band.wb.ru\/wb\/messages\/@rostov.v"
    },
    {
        "issue": "Не закрывается дверь, сломан доводчик или магнит на мезонине",
        "service": "Мезонин (СЭМ)",
        "contact": "Калинин Егор Александрович, \n +7 925 208 88 29 \n Ростов Вячеслав Сергеевич,\n +7 977 830 24 36",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@kalinin.egor17\nhttps:\/\/band.wb.ru\/wb\/messages\/@rostov.v"
    },
    {
        "issue": "Протекает труба, засор в санузле, не работает кран, унитаз, водонагреватель",
        "service": "Строит. служба (РСС)",
        "contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "issue": "Повреждён пол, стена, дверь, окно, плитка",
        "service": "Строит. служба (РСС)",
        "contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "issue": "Сломана мебель — стол, стул, шкаф",
        "service": "Строит. служба (РСС)",
        "contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "issue": "Сбит отбойник у колонны, шкафа, ворот или оборудования",
        "service": "Строит. служба (РСС)",
        "contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "issue": "Проблема на территории — яма в асфальте, разметка, знак, ограждение",
        "service": "Строит. служба (РСС)",
        "contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "issue": "Не работает турникет или шлагбаум (механика)",
        "service": "Строит. служба (РСС)",
        "contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "issue": "Нужен косметический ремонт помещения",
        "service": "Строит. служба (РСС)",
        "contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "issue": "Не закрывается дверь в складе, сломан доводчик или магнит",
        "service": "Строит. служба (РСС)",
        "contact": "Сергеев Александр Александрович, \n +7 977 299 68 77\n Графский Александр Юрьевич, \n +7 996 597 01 08",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@sergeev.a29\nhttps:\/\/band.wb.ru\/wb\/messages\/@grafskiy.a"
    },
    {
        "issue": "Грязно, нужна уборка, не вывезли мусор или упаковку",
        "service": "АХО",
        "contact": "Галстян Ашот Иличевич\n +7 901 908 91 17",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@galstyan.ashot"
    },
    {
        "issue": "Грызуны или насекомые — нужна дезинфекция \/ дератизация",
        "service": "АХО",
        "contact": "Галстян Ашот Иличевич\n +7 901 908 91 17",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@galstyan.ashot"
    },
    {
        "issue": "Не работает поломоечная машина",
        "service": "АХО",
        "contact": "Галстян Ашот Иличевич\n +7 901 908 91 17",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@galstyan.ashot"
    },
    {
        "issue": "Сработала или неисправна пожарная сигнализация, оповещение",
        "service": "Служба ПБ",
        "contact": "Лебедев Михаил Викторович, \n +7 962 936 26 36",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@lebedev.mihail34"
    },
    {
        "issue": "Проблема с пожарным краном, огнетушителем, пожарным шкафом",
        "service": "Служба ПБ",
        "contact": "Лебедев Михаил Викторович, \n +7 962 936 26 36",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@lebedev.mihail34"
    },
    {
        "issue": "Не работает проход по карте (СКУД), турникет или шлагбаум по карте",
        "service": "Отдел IT",
        "contact": "Литвинов Виталий Васильевич, \n +7 958 838 80 75",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@litvinov.vitaliy2"
    },
    {
        "issue": "Не работает видеонаблюдение, информационное табло, серверная",
        "service": "Отдел IT",
        "contact": "Литвинов Виталий Васильевич, \n +7 958 838 80 75",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@litvinov.vitaliy2"
    },
    {
        "issue": "Нужно подключить или перепрограммировать СКУД (замки, контроллеры, слаботочка)",
        "service": "Отдел IT",
        "contact": "Литвинов Виталий Васильевич, \n +7 958 838 80 75",
        "url": "https:\/\/band.wb.ru\/wb\/messages\/@litvinov.vitaliy2"
    }
];



