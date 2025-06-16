import Head from 'next/head';
import embeds from '../data/embeds';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Hugging Face Spaces</title>
        <meta name="description" content="Embed your Hugging Face Spaces" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>My Hugging Face Spaces Embeds</h1>
        <div className="spaces-grid">
          {embeds.map((embed, idx) => {
            const trimmed = embed.trim();
            if (trimmed.startsWith('<iframe')) {
              return (
                <div key={idx} className="space-item" dangerouslySetInnerHTML={{ __html: embed }} />
              );
            }
            let url = embed;
            if (!url.includes('/embed')) {
              url = url.replace(/\/+$/, '') + '/embed';
            }
            return (
              <div key={idx} className="space-item">
                <iframe
                  src={url}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; clipboard-write; web-share; fullscreen; microphone; camera"
                  style={{ width: '100%', height: '400px', border: 'none' }}
                />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}