import Head from 'next/head';
import { getCharacterDetails } from '../../api/marvel';
import Header from '../../components/header';
import ErrorPage from 'next/error';
import Link from 'next/link';

const mainStyle = {
    margin: '0 auto',
    maxWidth: '800px'
};

const backStyle = {
    color: 'white',
}

export default function CharacterDetail({details}) {
    if (!details) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <div>
            <Head>
                <title>Detalhes sobre {details.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header>
                <h1>{details.name}</h1>
                <p>{details.description}</p>
                <Link href="/">
                    <a style={backStyle}>Voltar</a>
                </Link>
            </Header>

            <main style={mainStyle}>
                <h3>Séries</h3>
                <ul>
                    {details.series && details.series.items && details.series.items.map(serie => (
                        <li>{serie.name}</li>
                    ))}
                </ul>

                <h3>Histórias</h3>
                <ul>
                    {details.stories && details.stories.items && details.stories.items.map(story => (
                        <li>{story.name}</li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    try {
        const details = await getCharacterDetails(context.params.id);
        return {
            props: {
                details
            },
        }
    } catch {
        return {
            props: {},
        };
    }
}
