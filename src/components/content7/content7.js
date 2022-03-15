
import style from './content7.module.css'
import img1 from '../../res/woman in white tank top and white leggings bending her body.jpg'
import img2 from '../../res/woman performing yoga.jpg'
import img3 from '../../res/woman in blue leggings and black tank top doing yoga.jpg'
import Item from './item'

var datas = [
    {
        title:"首次體驗",
        content:"分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。",
        money:"＄450 / 次",
        image:img1
    },
    {
        title:"短期體驗",
        content:"分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。",
        money:"＄1800 / 月",
        image:img2
    },
    {
        title:"長期體驗",
        content:"分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。",
        money:"＄5600 / 季",
        image:img3
    },
];

function Content7(){
    return(
        <div className={style.main}>
            <div className={style.h40}></div>
            <p className={style.p1}>方案選擇</p>
            <p className={style.p2}>DOYOGA 可以帶給你...</p>
            <div className={style.h32}></div>
            <div className={style.area}>
                {datas.map((item)=>(
                    <Item 
                        key={item.title}
                        title={item.title}
                        content={item.content}
                        image={item.image}
                        money={item.money}
                    />
                ))}
            </div>
        </div>
    );
}

export default Content7;