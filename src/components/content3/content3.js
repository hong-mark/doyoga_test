import Item from "./item";
import style from './content3.module.css'
import page1 from '../../res/page1.jpeg'
import page2 from '../../res/page2.jpeg'
import page3 from '../../res/page3.jpeg'
const data = [
    {
        image: page1,
        title:"整體健身",
        content:"每一個動作，都融入運動解剖學的的觀點強調以身體的中心線為出發點。"
    },
    {
        image: page2,
        title:"減壓放鬆",
        content:"調節全身系統、改善血液循環、減壓養心、釋放身心，達到修心養性的目的。"
    }
    ,{
        image: page3,
        title:"局部雕塑",
        content:"幫助強化背部與腹部的核心肌群，增進我們身體穩定度以及保持良好體態。"
    }
];

function Content3(){
    return(
        <div className={style.main}>
            {data.map((item)=>(
                <Item 
                    key={item.title}
                    image={item.image}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    );
}

export default Content3;