
import style from './item.module.css'

function Item(pros){
    return(
        <div className={style.teacherResume}>
            <div className={style.teacherResumeRow}>
                <img src={pros.image}/>
                <div className={style.col}>
                    <p className={style.p1}>{pros.name} 老師</p>
                    <p className={style.p2}>教學經歷 {pros.year} 年</p>
                    <p className={style.summery}>{pros.content}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;