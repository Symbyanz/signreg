const MenuItems = [
    { label: "О компании", href: "/about" },
    {
        label: "Услуги", href: "/services", children: [
            {
                label: "Популярное", href: "/services", children: [ // для хедера оформил в одном блоке
                    { label: "Юридическое сопровождение", href: "/services/legal-support" }, //Базовое, оптимальный, департамент - все на одной
                    { label: "Бухгалтерское сопровождение", href: "/services/accounting-support" },
                    { label: "Выписки, справки", href: "/services/extracts-and-certificates" }, //ЕГРН, ЕГРЮЛ, ЕГРИП ...
                    { label: "Подготовка документов", href: "/services/preparation-of-documents" }, //Много услуг - название + цена
                ]
            },
            {
                label: "Регистрация, ликвидация", href: "/services/registration-and-liquidation", children: [
                    { label: "Некоммерческая организация", href: "/services/registration-and-liquidation/non-profit-organization" },
                    { label: "Общество с ограниченной ответственностью", href: "/services/registration-and-liquidation/limited-liability-company" },
                    { label: "Товарный знак", href: "/services/registration-and-liquidation/trademark" },
                    { label: "Акционерное общество", href: "/services/registration-and-liquidation/joint-stock-company" },
                    { label: "Компания в ОАЭ", href: "/services/registration-and-liquidation/company-in-the-uae" },
                    { label: "Офшор", href: "/services/registration-and-liquidation/offshore" },
                    { label: "Банкротство", href: "/services/registration-and-liquidation/bankruptcy" },
                    { label: "Отдельные услуги", href: "/services/registration-and-liquidation/selected-services" }, //???
                ]
            },
            {
                label: "Лицензирование", href: "/services/licensing", children: [
                    { label: "Образовательная деятельность", href: "/services/licensing/educational-activities" },
                    { label: "Медицинская деятельность", href: "/services/licensing/medical-activities" },
                    { label: "Министерство культуры", href: "/services/licensing/ministry-of-culture" },
                    { label: "Опасные отходы", href: "/services/licensing/hazardous-waste" },
                    { label: "Детективная деятельность", href: "/services/licensing/detective-activity" },
                    { label: "Охранная деятельность", href: "/services/licensing/security-activities" },
                    { label: "Производство и распространение алкоголя", href: "/services/licensing/alcohol-production-and-distribution" },
                    { label: "ФСБ", href: "/services/licensing/fsb" },
                    { label: "МВД", href: "/services/licensing/ministry-of-internal-affairs" },

                ]
            },
            {
                label: "Судебное представительство", href: "/services/judicial-representation", children: [
                    { label: "Арбитражные споры", href: "/services/judicial-representation/arbitration-disputes" },
                    { label: "Банкротство", href: "/services/judicial-representation/bankruptcy" }, //??? Копия или отдельная стр.
                    { label: "Споры в судах общей юрисдикции", href: "/services/judicial-representation/disputes-in-courts-of-general-jurisdiction" },
                ]
            },
        ]
    },
    { label: "Пресс-Центр", href: "/news" },
    { label: "Контакты", href: "/contacts" },
];

export default MenuItems;