import { useState } from 'react'; 

const useModal = () => { 
 const [isShowing, setIsShowing] = useState(false); // Используем состояние для определения, отображается ли модальное окно или нет

 function toggle() { // Функция toggle вызывается для открытия или закрытия модального окна
  setIsShowing(!isShowing); // Инвертируем значение состояния
 } 

 return [ 
  isShowing, // Возвращаем значение состояния, чтобы компонент Catalog мог определить, когда показывать модальное окно
  toggle // Возвращаем функцию toggle, чтобы компоненты могли вызывать ее для открытия или закрытия модального окна
 ]; 
} 

export default useModal;