import { METADATABASE_API_URL } from '../lib/constants';
import { fetchMetadata, fetchPageData, fetchACFImage } from '../lib/utils'; // Adjust the path as necessary
import Hero from './company/Hero';
import Ingredients from './company/Ingredients';
import Timeline from './company/Timeline';
import Franchise from './company/Franchise';
import Breadcrumbs from '@/app/components/Breadcrumbs';

const pageId = 49;
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
    jsonld: metadata.yoastMetadata.schema["@graph"]
  };
}


export default async function Page({ params }) {
  let data;
  let franchiseImage;

  try {
    data = await fetchPageData(pageId);
    franchiseImage = data.acf && data.acf.franchise_image ? await fetchACFImage(data.acf.franchise_image) : '/default-menu-image.svg';

    if (data.acf && data.acf.franchise_image) {
      franchiseImage = await fetchACFImage(data.acf.franchise_image);
    } else {
      franchiseImage = '/default-menu-image.svg'; // Set fallback image here
    }
  } catch (error) {
    console.error("Error in Page component:", error);
  }

  return (
    <>
      <div className="cream-color" style={{ overflow: 'hidden' }}>
        <Breadcrumbs style="nonmenu" />
        <Hero data={data} />
        <Ingredients data={data} />
        <Timeline data={data} />
        <Franchise data={data} franchiseImage={franchiseImage} />
      </div>
    </>
  );
}