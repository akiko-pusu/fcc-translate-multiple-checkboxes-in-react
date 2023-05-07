import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { render, screen } from '@testing-library/react';
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

//
it('renders select toppings message', () => {
  render(<App />);
  expect(screen.getByText('Select Toppings')).toBeInTheDocument();
});
