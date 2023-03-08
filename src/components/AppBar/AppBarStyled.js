import styled from 'styled-components';
import dobby from './dobby-ava.jpg';
export const StyledButton = styled.button`
  border: 0;
  outline: 0;
  font-size: 14px;
  border-radius: 50px;
  padding: 10px;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.2px;

  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
`;

export const WrapBar = styled.div``;

export const AwatarImg = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  background-image: url(${dobby});
  background: url(${dobby});
`;

export const StyledInput = styled.input`
  margin-right: $ruler/2;
  box-shadow: inset 2px 2px 5px $color-shadow, inset -5px -5px 10px $color-white;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
`;

// $ruler: 16px;
// $color-red: #AE1100;
// $color-bg: #EBECF0;
// $color-shadow: #BABECC;
// $color-white: #FFF;

// body, html {
//   background-color:$color-bg;
// }

// body, p, input, select, textarea, button {
//     font-family: 'Montserrat', sans-serif;
//     letter-spacing: -0.2px;
//     font-size: $ruler;
// }

// div, p {
//   color: $color-shadow;
//   text-shadow: 1px 1px 1px $color-white;
// }

// form {
//   padding: $ruler;
//   width: $ruler*20;
//   margin: 0 auto;
// }

// .segment {
//   padding: $ruler*2 0;
//   text-align: center;
// }

// button, input {
//   border: 0;
//   outline: 0;
//   font-size: $ruler;
//   border-radius: $ruler*20;
//   padding: $ruler;
//   background-color:$color-bg;
//   text-shadow: 1px 1px 0 $color-white;
// }

// label {
//   display: block;
//   margin-bottom: $ruler*1.5;
//   width: 100%;
// }

// input {
//   margin-right: $ruler/2;
//   box-shadow:  inset 2px 2px 5px $color-shadow, inset -5px -5px 10px $color-white;
//   width: 100%;
//   box-sizing: border-box;
//   transition: all 0.2s ease-in-out;
//   appearance: none;
//   -webkit-appearance: none;

//   &:focus {
//     box-shadow:  inset 1px 1px 2px $color-shadow, inset -1px -1px 2px $color-white;
//   }
// }

// button {
//   color:#61677C;
//   font-weight: bold;
//   box-shadow: -5px -5px 20px $color-white,  5px 5px 20px $color-shadow;
//   transition: all 0.2s ease-in-out;
//   cursor: pointer;
//   font-weight: 600;

//   &:hover {
//     box-shadow: -2px -2px 5px $color-white, 2px 2px 5px $color-shadow;
//   }

//   &:active {
//     box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px $color-white;
//   }

//   .icon {
//     margin-right: $ruler/2;
//   }

//   &.unit {
//     border-radius: $ruler/2;
//     line-height: 0;
//     width: $ruler*3;
//     height: $ruler*3;
//     display:inline-flex;
//     justify-content: center;
//     align-items:center;
//     margin: 0 $ruler/2;
//     font-size: $ruler*1.2;

//     .icon {
//       margin-right: 0;
//     }
//   }

//   &.red {
//     display: block;
//     width: 100%;
//     color:$color-red;
//   }
// }

// .input-group {
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;

//   label {
//     margin: 0;
//     flex: 1;
//   }
// }