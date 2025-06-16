import Head from 'next/head';

export default function Home({ spaces, username }) {
  // Handle missing username
  if (!username) {
    return (
      <main>
        <Head>
          <title>Hugging Face Spaces Embed</title>
        </Head>
        <h1>Please configure the HF_USER environment variable.</h1>
      </main>
    );
  }

  // Handle no spaces
  if (!spaces || spaces.length === 0) {
    return (
      <>
        <Head>
          <title>{username}'s Hugging Face Spaces</title>
        </Head>
        <main>
          <h1>{username}'s Hugging Face Spaces</h1>
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            No spaces found for "{username}". Check your username or try again later.
          </p>
        </main>
      </>
    );
  }

  // Render spaces grid
  return (
    <>
      <Head>
        <title>{username}'s Hugging Face Spaces</title>
        <meta name="description" content="All Hugging Face Spaces embedded" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>{username}'s Hugging Face Spaces</h1>
        <div className="spaces-grid">
          {spaces.map((s) => {
            const parts = s.id.split('/');
            const spaceId = parts.length > 1 ? parts[1] : parts[0];
            return (
              <div key={s.id} className="space-item">
                <h2>{spaceId}</h2>
                <iframe
                  src={`https://huggingface.co/spaces/${username}/${spaceId}/embed`}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; clipboard-write; web-share; fullscreen; microphone; camera"
                />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const username = process.env.HF_USER || '';
  if (!username) {
    console.error('HF_USER environment variable is not set.');
    return { props: { spaces: [], username } };
  }

  try {
    const apiUrl = `https://huggingface.co/api/spaces?author=${username}&limit=100`;
    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.error('Failed to fetch spaces:', res.statusText);
      return { props: { spaces: [], username } };
    }
    const spaces = await res.json();
    return {
      props: { spaces, username },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching spaces:', error);
    return { props: { spaces: [], username } };
  }
}