import './page.scss'
import '@/components/Slider/Slider.scss'
import Heading from '@/components/Heading/Heading'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import { breadcrumbs, sidebarItems, servicesList, priceList } from './data'
import Sidebar from '@/components/Sidebar/Sidebar'
import SliderSubservices from '@/components/Slider/SliderSubservices'
import Paragraph from '@/components/Paragraph/Paragraph'
import List from '@/components/List/List'
import GetThere from '@/components/GetThere/GetThere'
import Callback from '@/components/Callback/Callback'
import InteractionProcessMini from '@/components/InteractionProcess/InteractionProcessMini'
import Table from '@/components/Table/Table'
import RichWrapper from '@/components/RichWrapper/RichWrapper'

export default function RegistrationPage() {
    return (
        <div id='registration'>
            <section className='section top-section'>
                <div className='top-section__content container'>
                    <Breadcrumbs className='top-section__breadcrumbs' items={breadcrumbs} />
                    <Heading className='top-section__title' tag='h1'>Регистрация</Heading>
                </div>
            </section>
            <section className="section body-section">
                <div className="container body-section__content">
                    <div className="body-section__column body-section__column_left">
                        <Heading className='hidden' size='small'>Направления услуг</Heading>
                        <SliderSubservices className="body-section__card-box" slides={servicesList} />
                        <div className="body-section__text">
                            <RichWrapper>
                                <Heading className='hidden' size='small'>Дополнительный заголовок</Heading>
                                <Paragraph>Наши эксперты предоставляют полный спектр услуг по регистрации и ликвидации различных юридических форм: НКО, ООО, товарные знаки, АО, ИП, компании в ОАЭ, офшоры.</Paragraph>
                                <Paragraph>Мы специализируемся на банкротстве АО и ИП. Предоставляем отдельные услуги, такие как открытие счетов в банках, внесение изменений в учредительные документы, снятие недостоверности, предоставление юридических адресов и получение ЭЦП.</Paragraph>
                                <Paragraph>Наша команда обеспечивает профессиональное и индивидуальное подходы к каждому клиенту, гарантируя юридическую стабильность, эффективное ведение процессов и соблюдение законных требований в создании и прекращении юридических лиц.</Paragraph>
                            </RichWrapper>
                            <RichWrapper>
                                <Callback />
                            </RichWrapper>
                            <RichWrapper>
                                <Heading size='small'>Стоимость услуг юриста</Heading>
                                <Paragraph>Стоимость услуг по ликвидации и регистрации юридических лиц определяется рядом факторов, включая сложность процесса, объем предоставляемых услуг и индивидуальные потребности клиента. В первую очередь, тип услуги – регистрация нового предприятия или ликвидация существующего – оказывает влияние на расценки. Квалификация и опыт юристов, работающих над делом, также важны, поскольку сложные задачи могут требовать дополнительных знаний.</Paragraph>
                                <Paragraph>Кроме того, особенности клиента, например, размер и характер бизнеса, также могут влиять на финансовые аспекты предоставления услуг. Юридическая компания взимает плату за свою экспертизу, индивидуальный подход и успешное завершение процессов ликвидации и регистрации, обеспечивая клиентам высококачественное юридическое сопровождение.</Paragraph>
                                <Paragraph>Объем работы, связанный с подготовкой документации, внесением изменений в учредительные документы, и взаимодействием с государственными органами, также влияет на стоимость. Сроки выполнения и срочность услуги могут повлиять на их стоимость из-за необходимости дополнительных ресурсов.</Paragraph>
                            </RichWrapper>
                            <RichWrapper>
                                <Heading size='small'>Услуги юриста по регистрации и ликвидации</Heading>
                                <Paragraph>Услуги юриста по регистрации и ликвидации могут понадобиться в различных ситуациях, где требуется профессиональная экспертиза и точное соблюдение юридических норм. Это может включать в себя создание нового бизнеса, такого как открытие ООО, АО, или ИП, где необходимо правильно заполнить и подготовить все необходимые документы.</Paragraph>
                                <Paragraph>Также услуги юриста ценны при ликвидации фирмы, что может быть вызвано различными обстоятельствами, такими как изменения в бизнес-стратегии, финансовые трудности или принятие стратегических решений. В случае банкротства, профессиональное сопровождение юриста становится крайне важным для эффективного разрешения сложных правовых вопросов и минимизации потенциальных рисков.</Paragraph>
                                <Paragraph>Опытный юрист также может быть полезен при проведении различных изменений в уставных документах, переносе бизнеса в другую юрисдикцию, открытии филиалов, и в других ситуациях, требующих грамотного и правоверного подхода.</Paragraph>
                            </RichWrapper>
                            <RichWrapper>
                                <Callback />
                            </RichWrapper>
                            <RichWrapper>
                                <Heading size='small'>Перечень документов для ликвидации и регистрации</Heading>
                                <Paragraph>Процедура банкротства требует профессиональных навыков, отличного знания законодательства и искусства ведения переговоров с недовольными кредиторами.</Paragraph>
                                <Paragraph>Порядок действий при объявлении о несостоятельности индивидуального предпринимателя следующий:</Paragraph>
                                <List items={[
                                    'Решение о ликвидации',
                                    'Отчетность',
                                    'Документы о состоянии активов и обязательств',
                                    'Свидетельство о государственной регистрации',
                                    'Справки из налоговых органов',
                                    'Уставные документы',
                                    'Договоры и обязательства'
                                ]} type='decimal' size='small' />
                                <Paragraph><b>Важно:</b> при согласии самого банкрота – ИП с этим планом реструктуризации задолженности мнение кредиторов судьей может не учитываться. Этой позиции придерживается Высший Арбитражный Суд России, отдавая предпочтение ситуациям с восстановлением платежеспособности владельца бизнеса и сохранении его имущества.</Paragraph>
                                <Paragraph>Для выполнения плана реструктуризации несостоятельному индивидуальному предпринимателю арбитражный суд дает 3 года. Чтобы быстрее рассчитаться со своими кредиторами, предпринимателю разрешено вести коммерческую деятельность. Но с одним условием — все сделки должны согласовываться с финансовым управляющим.</Paragraph>
                                <Paragraph>Если график-план погашения банкротом своих долгов никто не разработал или этот документ не утвержден судом, издается решение о признании индивидуального предпринимателя несостоятельным. В этом случае в течение полугода происходит реализация конкурсной массы — личного имущества гражданина, зарегистрированного в качестве ИП.</Paragraph>
                                <Table items={priceList} />
                            </RichWrapper>
                            <RichWrapper>
                                <Heading size='small'>Как мы работаем</Heading>
                                <InteractionProcessMini />
                            </RichWrapper>
                        </div>
                    </div>
                    <div className="body-section__column">
                        <Sidebar type='service' items={sidebarItems} />
                    </div>
                </div>
            </section>
            <GetThere />
        </div>
    )
}