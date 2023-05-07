import { useState } from "react";
import "./styles.css";
import { toppings } from "./utils/toppings"

// 合計値をフォーマットするための関数です
const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export default function App() {

  // useState はフックとして動作。利用するときの引数は、初期値を設定します
  // この場合は配列で、初期値をトッピングの個数に応じた配列で初期化しています
  const [checkedState, setCheckedState] = useState(
    // 初期値を設定
    new Array(toppings.length).fill(false)
  );

  // 合計値を管理するためのフックです。
  const [total, setTotal] = useState(0);

  // チェックボックスの値が変わった時に呼ばれる関数
  // ポジションはインデックスに対応します
  const handleOnChange = (position) => {
    // 配列に対して1つずつチェック
    // インデックスに該当したら、反転させます (false / true の切り替え)
    // map を使うので、新しい配列を返す形になります
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    // 配列を入れ替えします。実際は updatedCheckedState で返された新しい配列で上書きします
    // この処理を実施しないと、チェックボックスの check / uncheck が効かなくなります！
    setCheckedState(updatedCheckedState);

    // 値を計算します
    // reduce で updatedCheckedState の配列から1つ1つ取り出して処理
    // 実際は toppings 側に値が入っているので、それを使って計算します
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  /* HTML 要素も動的に生成します */
  return (
    <div className="App">
      <h3>Select Toppings</h3>
      <ul className="toppings-list">
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{getFormattedPrice(price)}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
