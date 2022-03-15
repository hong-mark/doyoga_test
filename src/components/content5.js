
import style from './content5.module.css'
import img1 from '../res/carl-barcelo-nqUHQkuVj3c-unsplash.jpg'
import img2 from '../res/white round table near brown wooden chair.jpg'
import img3 from '../res/woman in black sports bra and blue denim jeans doing yoga.jpg'

function Content5(){
    return(
        <div className={style.main}>
            <div className={style.left}>
                <p className={style.p1}>舒適空間、靜心放鬆</p>
                <p className={style.p2}>我們都渴望平靜安穩的生活，擁有一處能夠靜心的角落，安撫每天繁雜忙碌的心。</p>
                <div className={style.h24}></div>
                <p className={style.p3}>環境介紹 →</p>
            </div>
            <div className={style.gridcontainer} >
                <img className={style.griditem1} src={img1}/>
                <img className={style.griditem2} src={img2}/>
                <img className={style.griditem2} src={img3}/>
            </div>
        </div>
    );
}

export default Content5;