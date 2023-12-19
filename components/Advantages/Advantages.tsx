import { advantagesList } from "@/app/storage"
import HeadingBox from "../HeadingBox/HeadingBox"
import IconBoxContainer from "../IconBox/IconBoxContainer"

const Advantages = () => {
    return (
        <section className='section advantages'>
            <div className='advantages__content container'>
                <HeadingBox className='advantages__heading-box' title='Лучший выбор среди профессионалов' subtitle='Уникальные черты, которые делают нашу работу более сильной и выдающейся' />
                <IconBoxContainer className='advantages__icon-box-container' items={advantagesList} />
            </div>
        </section>
    )
}

export default Advantages