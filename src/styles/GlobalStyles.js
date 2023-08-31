import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


:root {
	--color-blue: #9bfbea;
	--color-orange: #ffaf87;
	--color-green-contact: #90b8a8;
	--color-green-dark: #5f706d;
	--clr--card-text: #648175;
	--bg-header: #8faca7;
	--btn-gradient: linear-gradient(to right, #9bfbea, #ffaf87);
	--bg-gradient: linear-gradient(to bottom, #8faca7, white);

	--fs-hero: 3rem;
	--fs-section: 2rem;
	--fs-section-text: 1em;
	--fs-btn: 1em;

	--fs-hero-media: 4.5rem;
	--fs-section-media: 3rem;
	--fs-section-text-media: 1.2rem;
	--fs-btn-media: 1rem;
}




* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	text-decoration: none;
	list-style-type: none;

	font-family: "Inter", sans-serif;

	/* outline: 1px solid green; */
}


html {
	font-size: 100%;
	scroll-behavior: smooth;
	scroll-padding-top: 4em;
    overflow: -moz-scrollbars-none;
}

::-webkit-scrollbar {
	width: 1em;
}
::-webkit-scrollbar-track {
	background: var(--color-green-dark);
}
::-webkit-scrollbar-thumb {
	background-color: var(--color-blue);
}

@-moz-document url-prefix() { /* Disable scrollbar Firefox */
    html{
              scrollbar-width: none;
            }
}

body {
	min-height: 100vh;
	justify-content: center;
	align-items: center;
	background: linear-gradient(to bottom, #8faca7 60%, white) no-repeat;
}



`;
