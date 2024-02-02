import { METADATABASE_API_URL } from '../lib/constants';
import { fetchMetadata, fetchPageData } from '../lib/utils'; // Adjust the path as necessary
import Hero from './Hero';
import How from './How';
import Form from './Form';
import Info from './Info';
import CalloutCatering from '../components/CalloutCatering';
import CalloutWhy from '../components/CalloutWhy';
import FAQs from './FAQs';

const pageId = 109;
export async function generateMetadata() {
  const metadata = await fetchMetadata(pageId);

  const metadataBase = METADATABASE_API_URL;

  return {
    metadataBase,
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      images: metadata.ogImage ? [{ url: metadata.ogImage }] : []
    },
    // Add other metadata properties if needed
  };
}


export default async function Page({ params }) {
  let data;

  try {
    data = await fetchPageData(pageId);

  } catch (error) {
    console.error("Error in Page component:", error);
  }

  return (
    <>
      <div className="cream-color">
        <section className="viewport innerhero">
          <div className="page-container">
            <Hero
              featuredImage={data._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-image.jpg'}
              featuredImageAlt={data._embedded?.['wp:featuredmedia']?.[0]?.alt_text || 'fresh pizza'}
              data={data}
            />
          </div>
        </section>
        <section className="viewport half-darkred-color">
          <div className="page-container green-gradient">
            <How data={data} />
          </div>
        </section>
        <section className="viewport red-gradient">
          <div className="page-container">
            <Form data={data} />
          </div>
        </section>
        <section className="viewport cream-color">
          <div className="page-container">
            <Info data={data} />
          </div>
        </section>
        <CalloutCatering />
        <section className="viewport red-gradient text-align-center">
          <h2 style={{ padding: '3rem 0 0' }}>WHY SARPINO&apos;S?</h2>
          <CalloutWhy
            containerClasses={'page-container cream-outline text-align-center'}
          />
        </section>
        <section className="viewport cream-color">
          <FAQs data={data} />
        </section>
      </div>
    </>
  );
}