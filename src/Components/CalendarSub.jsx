import {useState, useEffect} from "react"
import { format} from "date-fns";
const CalendarSub = ({subdata}) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [currentmoney, setCurrentMoney] = useState([]);
    const [premoney, setPreMoney] = useState([])    

    useEffect(()=>{
        fetch("http://localhost:4000/2022/")
        .then( res => {
          return res.json();
        })
        .then( data => {
            let current = [];
            let pre = [];
            
            
            // console.log("??")
            for(let i of data){
                // console.log(i)
                if(i.value === "expenses"){
                    console.log(i.value)
                    console.log(format(currentMonth, "yM"))
                    if(i.data === format(currentMonth, "yM")){
                        
                        console.log("??")
                    }
                }
            }


        })

        })

        /*
        1. 현재의 달에 속하는 지출값을 가지고온다
        2. 이전달의 속하는 지출값을 가지고온다.
        3. 이전달의 데이터가 없다면 
        "데이터가 없습니다. 수입/지출 내역을 입력해주세요"
        */
    
    
    return (
    <div className="suball">
        <div className="suball__top">
            <div className="suball__common__title">
                <div className="suball__top__title__ch1">
                    <span>{`${ subdata.md === undefined ? format(currentMonth, "M월dd일") : subdata.md} `}</span>
                </div>
                <div className="suball__top__title__ch2">
                    <p>{`수입 ${subdata.total === undefined ? "0" : subdata.total[0]}`}</p>
                    <p>{`지출 ${subdata.total === undefined ? "0" : subdata.total[1]}`}</p>
                </div>
            </div>
            <hr/>
            <div className="suball__top__content">
                <h4>내역상세</h4>
                <div>
                    <ul>
                        <li className="sub__list">
                            {subdata.individual === undefined? "데이터가 없습니다.\n 수입/지출 내역을 입력해주세요" : subdata.individual?.map( (e, idx) => {
                                return (
                                    <div key={idx}>
                                        <span>{e.title}</span>
                                        <span>{e.content}</span>
                                        <span className="sub__list__color">{e.price}</span>
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
                {/* <span>{`${ subdata.md === undefined ? "00월00일" : subdata.current} `}</span> */}
                <span>{format(currentMonth, `M월dd일`)}</span>
            </div>
            <div className="suball__bottom__content">
                <div className="suball__bottom__today">
                    <span>{`오늘까지 ${subdata?.minus}원 썻어요`}</span><br/>
                </div>
                <div className="suball__bottom__moneth"><span>지난달 이맘때보다 <br></br>5,000,000 원 덜썻어요</span></div>
            </div>
        </div>
    </div>
        
    )
}

export default CalendarSub;
