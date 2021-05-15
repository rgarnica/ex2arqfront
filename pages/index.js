import Head from 'next/head'
import Header from '../components/header'
import Link from 'next/link'
import Layout from '../components/layout';
import { getCharacterList } from '../api/marvel';

export default function Home({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Personagens Marvel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
          <h1>Lista dos primeiros personagens</h1>
      </Header>

      <main>
        <div className="grid">
          {characters && characters.map(character => (
            <Link href="/character/[id]" as={`/character/${character.id}`}>
              <a className="card" key={character.id}>
                <img src={character.thumbnail.path + '.' + character.thumbnail.extension} width='100px' />
                <h3>{character.name}</h3>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
        }

        .card {
          margin: 1rem;
          flex-basis: 25%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const characters = await getCharacterList();
    return {
      props: {
        characters
      },
    }
  } catch {
    return {
      props: {},
    };
  }
};
