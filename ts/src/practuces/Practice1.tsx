const Practice1 = () =>{
  const calcTotalFee = (num: number): void=> {
    const total = num * 1.1;
    console.log(total);
  }
  const onClickPractice = () => {
    calcTotalFee(1000);
  }
  return (
    <div>
      <p>練習問題 : 引数の指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  )
}

export default Practice1;