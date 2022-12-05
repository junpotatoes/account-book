import styled from "styled-components";

const Layout = styled.div`
    background-color: gray;
    height: 100%;
    box-sizing: border-box;
    display:flex;
    flex-direction: column;

    & > header{
        flex: 1;
        padding: 2rem 0;
        background-color: rebeccapurple;
    }

    & > main{
        display:flex;
        justify-content: center;
        align-items: center;
        flex: 10;
        background-color: bisque;
    }

    .title{
        margin: 0 auto;
    border-bottom: 1px solid black;
    width: 90%;
    h1 {
        text-align: left;
        }
    }

    .mian__content{
    display: flex;
    border: 1px solid black;
    border-radius: 150px 20px 20px 150px;
    width: 70rem;
    height: 30rem;

        & > div {
            flex:1;
        } 
    }

    .profile{
        text-align:left;
        img{
            margin:0;
            height:100%;
            border-radius: 50%;
            outline: 1px solid black;
        }
    }

    .Information{
        display: flex;
        flex-direction: column;
        justify-content:space-between;

        & > div{
            padding: 3rem;
        }
    }


`


const Account = ()=>{
    return(
        <Layout>
            <header>
                <div className="title">
                    <h1>계정 정보</h1>
                </div>
            </header>
            <main>
                <div className="mian__content">
                    <div className="profile">
                        <img src="data:image/jpeg;base64,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" alt="계정프로필"/>
                    </div>
                    <div className="Information">
                        <div>
                            <p>사용자이름</p>
                            <p>사용자 이메일</p>
                        </div>
                        <div>
                            <button>로그아웃</button>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}


export default Account;