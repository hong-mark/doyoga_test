
import style from './content4.module.css'
import Item from "./item";
import t1 from '../../res/teacher-1.png'
import t2 from '../../res/teacher-2.png'
import t3 from '../../res/teacher-3.png'

import leftimag from '../../res/photo-1540206276207-3af25c08abc4.jpeg'
var datas = [
    {
        name: "Mark",
        year: 10,
        content:"瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。",
        image: t1
    },
    {
        name: "Lily",
        year: 7,
        content:"瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。",
        image: t2
    },
    {
        name: "Layar",
        year: 14,
        content:"瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。",
        image: t3
    }
];

function Content4(){
    return(
        <div className={style.main}>
            <img src={leftimag} className={style.contentThreeLeftImag}/>
            <div className={style.right}>
                <p  className={style.p1}>頂尖師資、專業教學</p>
                <p  className={style.p2}>強力師資，經歷豐富，協會認證。運用引導式教學，針對不同需求的人制定專屬課程。</p>
                <div className={style.h24}></div>
                <div className={style.col}>
                    {datas.map((item)=>(
                        <Item 
                            key={item.name}
                            name={item.name}
                            year={item.year}
                            image={item.image}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Content4;