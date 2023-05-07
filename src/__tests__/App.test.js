import React from 'react';
import ReactDOM from 'react-dom';
import App, { getFormattedPrice } from '../App';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

/**
Test ドキュメントを参照。
https://create-react-app.dev/docs/running-tests/
**/

// expect は設定せず。ひとまずエラーなく正常にコンポーネントが描画されることを期待。
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

//　チェックボックスのテスト
it('renders select toppings message', () => {
  render(<App />);
  expect(screen.getByText('Select Toppings')).toBeInTheDocument();

  // index: 2 のチェックボックスの状態確認
  const targetCheckBox = screen.getByRole('checkbox', { name: 'Onions' });
  expect(targetCheckBox).not.toBeChecked();

  // クリック
  fireEvent.click(targetCheckBox);

  // 合計値をチェック
  const totalPrice = screen.getByText((content, element) => {
    return element.id == 'totalPrice' && content.startsWith('$3.00');
  })

  // $3.00 の表示を想定
  expect(totalPrice).toBeInTheDocument;
});

it('return text with expected format', () => {
  expect(getFormattedPrice(1.199)).toEqual('$1.20');
});
