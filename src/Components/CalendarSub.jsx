import {useState, useEffect} from "react"
import { format, subMonths} from "date-fns";
import { type } from "@testing-library/user-event/dist/type";
const CalendarSub = ({subdata, rander}) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [currentmoney, setCurrentMoney] = useState(0);
    const [premoney, setPreMoney] = useState(0) 
    const [test, setTest] = useState([])   

    
    useEffect(()=>{
        fetch("http://localhost:4000/2022/")
        .then( res => {
          return res.json();
        })
        .then( data => {
            
            let current = 0;
            let pre = 0;

            for(let i of data){
                let currentlen = `${i.date.slice(0,4)}${i.month}`.length
                let prelen = `${i.date.slice(0,4)}${i.month - 1}`.length

                if(i.value === "expenses"){
                    
                    if( `${i.date.slice(0,4)}${i.month}` === format(currentMonth,"yM") && Number(i.date.slice(currentlen)) <=  Number(format(currentMonth,"d") )){
                        current += Number(i.price)
                    }
                    if (`${i.date.slice(0,4)}${i.month}` === format(subMonths(currentMonth, 1),"yM") && Number(i.date.slice(prelen)) <=  Number(format(currentMonth,"d") )){
                        pre += Number(i.price)
                        
                    }

                }

                if(i.date === format(currentMonth, 'yMd')){
                    setTest(i)
                }
            }

            setCurrentMoney(current)
            setPreMoney(pre)
            
            })
        },[rander])

        
    return (
    <div className="suball">
        <div className="suball__top">
            <div className="suball__common__title">
                <div className="suball__top__title__ch1">
                    {/* <span>{`${ subdata.md === undefined ? format(currentMonth, "M월dd일") : subdata.md} `}</span> */}
                    <span>{`${ subdata.md === undefined ? "날짜를선택해주세요." : subdata.md} `}</span>
                </div>
                <div className="suball__top__title__ch2">
                    <p>{`수입 ${subdata.total === undefined ? "0" : String(subdata.total[0]).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}`}</p>
                    <p>{`지출 ${subdata.total === undefined ? "0" : String(subdata.total[1]).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}`}</p>
                    
                </div>
            </div>
            <hr/>
            <div className="suball__top__content">
                <h4>내역상세</h4>
                <div>
                    <ul>
                        <li className="sub__list">
                            {subdata.individual === undefined || subdata.individual.length === 0 ? "데이터가 없습니다.\n 수입/지출 내역을 입력해주세요" : subdata.individual?.map( (e, idx) => {
                                return (
                                    <div key={idx}>
                                        <span>{e.title}</span>
                                        <span>{e.content}</span>
                                        <span className="sub__list__color">{String(e.price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}</span>
                                    </div>
                                )
                            })}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="suball__bottom">
            <div className="suball__common__title">
                <span>{format(currentMonth, `M월dd일`)}</span>
            </div>
            <div className="suball__bottom__content">
                <div className="suball__bottom__today">
                    <span>{`오늘까지 ${String(currentmoney).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}원 썻어요`}</span><br/>
                </div>
                <div className="suball__bottom__moneth"><span>
                {premoney === 0 ? "저번달에 쓴내역이 없어요 !" :
                currentmoney < premoney ? `지난달 이맘때보다${String(premoney - currentmoney).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}원 덜썻어요!` :
                                         `지난달 이맘때보다 ${String(currentmoney - premoney).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}원 더썻어요!`}</span></div>
            </div>
        </div>
    </div>
        
    )
}

export default CalendarSub;
