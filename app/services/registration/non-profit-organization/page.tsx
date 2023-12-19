import './page.scss'
import { breadcrumbs, priceList } from '../data'
import Hero from '@/components/Hero/Hero'
import GetThere from '@/components/GetThere/GetThere'
import InteractionProcess from '@/components/InteractionProcess/InteractionProcess'
import Questions from '@/components/Questions/Questions'
import Heading from '@/components/Heading/Heading'
import Container from '@/components/Container/Container'
import CardOffer from '@/components/CardOffer/CardOffer'
import SubHeading from '@/components/SubHeading/SubHeading'
import Paragraph from '@/components/Paragraph/Paragraph'
import Button from '@/components/Button/Button'
import RichWrapper from '@/components/RichWrapper/RichWrapper'
import List from '@/components/List/List'
import Table from '@/components/Table/Table'
import HeadingBox from '@/components/HeadingBox/HeadingBox'
import Tabs from '@/components/Tabs/Tabs'
import { TabFillerPacket } from '@/components/Tabs/TabFiller/TabFiller'

export default function Page() {
    return (
        <div id='non-profit-organization'>
            <Hero
                breadcrumbs={breadcrumbs}
                title='Некоммерческая организация'
                isFirstComponent={true}
                description={[
                    { _id: 0, content: 'Мы обеспечиваем полный спектр юридических услуг, гарантируя клиентам законное функционирование и защиту в их бизнесе и повседневной жизни.' },
                    { _id: 1, content: 'Наша высококвалифицированная команда гарантирует надежное представительство интересов, обеспечивает юридическую прозрачность и качественное решение всех правовых вопросов, с которыми сталкиваются наши клиенты.' },
                    { _id: 2, content: 'Мы стремимся создать индивидуальные и адаптивные решения, соответствующие уникальным потребностям каждого клиента, и поддерживаем их на каждом этапе, обеспечивая стабильность и долгосрочное юридическое партнерство.' }
                ]}
                imageUrl='/images/advokat.svg' />
            <Container>
                <CardOffer
                    imageUrl='/images/card-offer/docs.png'>
                    <Heading>Юридическое сопровождение бизнеса</Heading>
                    <SubHeading>Профессиональная защита интересов бизнеса</SubHeading>
                    <ul>
                        <li>
                            <Heading size='small'>Защита <br></br>в сфере права</Heading>
                            <Paragraph>Эффективная правовая защита бизнеса в любых ситуациях и конфликтах</Paragraph>
                        </li>
                        <li>
                            <Heading size='small'>Эффективные <br></br> Решения</Heading>
                            <Paragraph>Быстрые и эффективные стратегии для успешного разрешения задач</Paragraph>
                        </li>
                        <li>
                            <Heading size='small'>Специализированные <br></br> Эксперты</Heading>
                            <Paragraph>Специализированные эксперты для ключевых моментов вашего бизнеса</Paragraph>
                        </li>
                    </ul>
                    <div className='button-with-text'>
                        <Button className='button-with-text__button' size='large'>Заказать услугу</Button>
                        <span>От 30 000 ₽</span>
                    </div>
                </CardOffer>
                <CardOffer
                    imageUrl='/images/card-offer/house.png'>
                    <Heading>Юридическое сопровождение сделок</Heading>
                    <SubHeading>Надежная поддержка на всех этапах ваших бизнес-сделок</SubHeading>
                    <ul>
                        <li>
                            <Heading size='small'>Экспертная <br />консультация</Heading>
                            <Paragraph>Разъяснение всех аспектов и юридических вопросов на всех этапах сделки</Paragraph>
                        </li>
                        <li>
                            <Heading size='small'>Безопасность и <br /> надежность</Heading>
                            <Paragraph>Надежное обеспечение безопасности для вашего бизнеса</Paragraph>
                        </li>
                        <li>
                            <Heading size='small'>Профессиональная <br />стратегия</Heading>
                            <Paragraph>Точные и эффективные решения для вашего бизнеса</Paragraph>
                        </li>
                    </ul>
                    <div className='button-with-text'>
                        <Button className='button-with-text__button' size='large'>Заказать услугу</Button>
                        <span>От 17 000 ₽</span>
                    </div>
                </CardOffer>
                <CardOffer
                    imageUrl='/images/card-offer/doc.png'>
                    <Heading>Личное юридическое сопровождение</Heading>
                    <SubHeading>Защитите свои права и интересы с нашей помощью</SubHeading>
                    <ul>
                        <li>
                            <Heading size='small'>Защита <br />в сфере права</Heading>
                            <Paragraph>Эффективная правовая защита бизнеса в любых ситуациях и конфликтах</Paragraph>
                        </li>
                        <li>
                            <Heading size='small'>Эффективные <br />Решения</Heading>
                            <Paragraph>Быстрые и эффективные стратегии для успешного разрешения задач</Paragraph>
                        </li>
                        <li>
                            <Heading size='small'>Специализированные <br></br> Эксперты</Heading>
                            <Paragraph>Специализированные эксперты для ключевых моментов вашего бизнеса</Paragraph>
                        </li>
                    </ul>
                    <div className='button-with-text'>
                        <Button className='button-with-text__button' size='large'>Заказать услугу</Button>
                        <span>От 2 000 ₽</span>
                    </div>
                </CardOffer>
            </Container>
            <Container>
                <RichWrapper>
                    <Heading>Когда необходима помощь юриста</Heading>
                    <Paragraph>Для защиты интеллектуальной собственности применяется авторское, патентное право и ряд смежных правовых норм. В реальной жизни при установлении авторства часто возникают сложности и разногласия. Достаточно трудно провести четкую грань между подражанием и копированием, поэтому нелегко установить факт наличия плагиата, особенно когда он явно не прослеживается. Непросто определить авторство, если открытие сделано двумя или несколькими исследователями из разных стран независимо друг от друга. Уже более ста лет продолжаются споры, кто изобрел радио.</Paragraph>
                    <Paragraph>При возникновении подобных проблем необходима консультация юриста по защите интеллектуальных прав собственности. Мы представляем интересы клиентов при решении целого ряда вопросов. Среди них:</Paragraph>
                    <List items={[
                        'защита прав на изобретения, программное обеспечение, результаты научной, литературной деятельности, произведения искусства, – все продукты умственной деятельности;',
                        'защита прав на товарные знаки, доменные имена, фирменные названия и другие средства индивидуализации;',
                        'разрешение споров в области авторских и смежных прав, в том числе патентные споры;',
                        'защита прав при спорах, связанных с использованием и созданием объектов интеллектуальной собственности, включая франчайзинг, лицензионные соглашения, иное;',
                        'защита интересов в патентных органах, судах, в том числе международных;',
                        'защита прав собственности в телекоммуникационных сетях;',
                        'борьба с распространением контрафактной продукции.',
                    ]} />
                    <Paragraph>Помимо этого, специалисты Центра Юридических Консультаций в Санкт-Петербурге оказывают помощь в оценке возможной степени защиты конкретного объекта, выработке действенной стратегии. Для этого тщательно анализируется вся документация, касающаяся договоров авторского права. Оказывается содействие при отчуждении объектов интеллектуальной собственности, передаче прав.</Paragraph>
                    <Paragraph>Адвокаты по защите интеллектуальных прав собственности помогают зарегистрировать права на конкретные объекты, в том числе при проверке сходств и тождеств, экспертной оценке, необходимых для оформления патента.</Paragraph>
                    <Paragraph>Дела по защите плодов умственной деятельности сложны и многозначны. Обратившись в Центр Юридических Услуг в Санкт-Петербурге, вы можете быть уверены, что наши юристы предпримут все возможные меры по недопущению незаконного использования вашей интеллектуальной собственности, помогут установить права с максимально возможной эффективностью.</Paragraph>
                </RichWrapper>
            </Container>
            <InteractionProcess type='line' />
            <Container>
                <RichWrapper>
                    <Heading>Консультация юриста <br />по интеллектуальной собственности</Heading>
                    <Paragraph>Дела по защите плодов умственной деятельности сложны и многозначны. Обратившись в Центр Юридических Услуг в Санкт-Петербурге, вы можете быть уверены, что наши юристы предпримут все возможные меры по недопущению незаконного использования вашей интеллектуальной собственности, помогут установить права с максимально возможной эффективностью.</Paragraph>
                    <Paragraph>Чтобы получить первичную бесплатную консультацию, позвоните на горячую линию, закажите обратный звонок или отправьте заявку, заполнив форму на сайте. Даже первичная консультация способна сделать возникшую ситуацию более понятной. При необходимости мы окажем помощь на всех этапах решения проблемы, защитим ваши интересы в судах любого уровня.</Paragraph>
                    <Paragraph>Чтобы получить первичную бесплатную консультацию, позвоните на горячую линию, закажите обратный звонок или отправьте заявку, заполнив форму на сайте. Даже первичная консультация способна сделать возникшую ситуацию более понятной. При необходимости мы окажем помощь на всех этапах решения проблемы, защитим ваши интересы в судах любого уровня.</Paragraph>
                    <SubHeading size='large'>Какой-то указатель на прайс:</SubHeading>
                    <Table items={priceList} size='large' />
                </RichWrapper>
            </Container>
            <Container>
                <RichWrapper>
                    <HeadingBox title='Пакеты и стоимость' subtitle='Вы можете воспользоваться каждой услугой по отдельности.' type='align-left' />
                    <Tabs
                        tablist={['БАЗОВЫЙ', 'ОПТИМАЛЬНЫЙ', 'ДЕПАРТАМЕНТ']}
                        tabs={[
                            {
                                content: <TabFillerPacket
                                    title='Базовый пакет юридических услуг и еще что-то'
                                    subtitle='Далее - при выполнении одного из условий:'
                                    description={[
                                        '— Сумма на счетах и вкладах от 2 500 000 ₽',
                                        '— Оплата покупок картой от 125 000 ₽',
                                        '— Поступление зарплаты от 200 000 ₽ на карту от организаций',
                                        '— Сумма на счетах и вкладах от 1 500 000 ₽ и оборот по карте от 100 000 ₽',
                                        '— От 45 000 000 акций ВТБ в портфелеc',
                                    ]}
                                    button='Стать клиентом'
                                    price='25 000 ₽ / месяц'
                                    imageUrl='/images/mail.svg'
                                />
                            },
                            { content: <Paragraph size='small'>Какой-то контент 2</Paragraph> },
                            { content: <Paragraph size='small'>Какой-то контент 3</Paragraph> }
                        ]}
                    />
                    <div>
                        <Paragraph size='small'>*опция возможна тольк о в Москве и Санкт-Петербурге</Paragraph>
                        <Paragraph size='small'>**в зависимости от запроса клиента может быть подготовлен пакет с индивидуальными условиями и стоимостьтю</Paragraph>
                    </div>
                </RichWrapper>
            </Container>

            <Questions />
            <GetThere />
        </div>
    )
}
