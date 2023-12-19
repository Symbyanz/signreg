const MenuItems = [
    {
        title: 'Полезное',
        items: [
            { label: 'Регистрация, ликвидация', href: '/services/registration-and-liquidation' },
            { label: 'Лицензирование', href: '/services/licensing' },
            { label: 'Банкротство', href: '/services/registration-and-liquidation/bankruptcy' },
            { label: 'Выписки, справки', href: '/services/extracts-and-certificates' },
            { label: 'Подготовка документов', href: '/services/preparation-of-documents' },
            { label: 'Судебное представительство', href: '/services/judicial-representation' },
        ]
    },
    {
        title: 'Карта сайта',
        items: [
            { label: 'О компании', href: '/about' },
            { label: 'Услуги', href: '/services' },
            { label: 'Пресс-Центр', href: '/news' },
            { label: 'Контакты', href: '/contacts' },
            { label: 'Конфиденциальность', href: '/policy' },
            { label: 'Условия использования', href: '/terms' },
        ]
    },
    {
        title: 'Информация',
        items: [
            { label: '2118 Thornridge Cir. Syracuse, Connecticut 35624', href: '/' },
            { label: 'Тел.: +7 (704) 555-0127', href: '/' },
            { label: 'E-mail: sanders@example.com', href: '/' },
            { label: 'Обратный звонок', href: '/', icon: 'callback'},
            { label: 'Подписаться на рассылку', href: '/', icon: 'message'},
        ]
    },
];

const SocialItems = {
    vkontakte: 'vk',
    telegram: 'tg',
    whatsapp: 'wp',
    instagram: 'inst',
}

export { MenuItems, SocialItems };