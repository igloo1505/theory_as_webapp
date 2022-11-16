import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
        <Head>
        <script src="mathjax/tex-chtml.js" id="MathJax-script" async></script>
				</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
