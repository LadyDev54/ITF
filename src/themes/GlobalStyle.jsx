import { createGlobalStyle } from "styled-components";
import { normalize } from "./Normalize";
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
  --bluishPurple: #6639e4;
  --mirage: #131128;
  --white: #ffffff;
  --grey: rgba(255, 255, 255, 0.6);
}
  #root{
    box-sizing: border-box;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  body {
    font-family: 'Kanit', sans-serif;
    background-color: var(--mirage);
  }
  main{
    width: 100%;
    flex-grow: 1;
    min-height: 100%;
  }
  header, footer {
    flex-grow: 0;
    flex-shrink: 0;
  }
  label {
    display: flex;
    gap: 1rem;
  }
  main {
    margin:0 auto;
  }
  p.error {
    color: red;
    margin: 15px 0;
  }
  img.cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container {
    max-width: 1580px;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;
  }
  .fullWidth{
    width: 100%;
    height: auto;
  }
  .title {
			h2 {
				font-weight: 700;
        font-size: 24px;
        line-height: 180%;
        letter-spacing: 0.06em;
        color: var(--white)
			}
		}
`;
