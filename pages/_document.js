import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <link href='/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180'/>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin='true'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
