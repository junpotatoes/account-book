import styled from "styled-components";

const Layout = styled.div`
    background-color: darkblue;
    height: 100%;
    box-sizing: border-box;
    display:flex;
    flex-direction: column;

    & > header{
        flex:1;
        padding: 2rem 0;
        background-color: rebeccapurple;
    }

    & > main{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 10;
        background-color: bisque;

        & > div{
            background-color: darkblue;
            width:90%;
            height: 90%;
        }
    }

    .title{
        margin: 0 auto;
        border-bottom: 1px solid black;
        width: 90%;
        h1 {
         text-align: left;
        }
    }

    .main__docs__title{
        display:flex;
        background-color:gray;
        padding:1rem;
        justify-content: center;

        & > li{
            width:17rem;
            outline: 1px solid black;
        }
    }
`

const Management = ()=>{
    return(
        <Layout>
            <header>
                <div className="title">
                    <h1>반복 관리</h1>
                </div>
            </header>
            <main>
                <div>{/* 메인안에서 움직일 전체div */}
                    <article>{/* 제목 and 리스트 */}
                        <div>
                            <ul className="main__docs__title">
                                <li>날짜</li>
                                <li>분류</li>
                                <li>내용</li>
                                <li>금액</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="main__docs__title">
                                <li><button>토글</button><span>반복</span></li>
                                <li>
                                    <p>11.05</p>
                                    <p>매월</p>
                                </li>
                                <li>월급</li>
                                <li>야호</li>
                                <li>2,500,000</li>
                                <li>
                                    <button>수정</button>
                                    <button>삭제</button>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <section>
                            <ul className="main__docs__title">
                               <li>왼쪽</li>
                               <li>1</li>
                               <li>2</li>
                               <li>3</li>
                               <li>4</li>
                               <li>5</li>
                               <li>오른쪽</li>
                            </ul>
                    </section>
                </div>
            </main>
        </Layout>
    );
}

export default Management;