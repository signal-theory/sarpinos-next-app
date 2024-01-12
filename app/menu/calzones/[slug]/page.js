// app/menu/[cptName]/[slug]/page.js
import Head from 'next/head';
import { fetchCPTMetadataBySlug, fetchCPTBySlug, fetchACFImage } from '../../../lib/utils';
import { METADATABASE_API_URL } from '../../../lib/constants';
import Image from 'next/image';
import OrderBtn from '@/app/components/OrderBtn';
import TabContent from '@/app/components/TabContent';
import TabList from '@/app/components/TabList';
import CalloutMobileApp from '@/app/components/CalloutMobileApp';

export async function generateMetadata({params}) {
  console.log('Post ID:', params.slug); // Log the slug
  const metadata = await fetchCPTMetadataBySlug(params.slug, 'calzones');
  
  const metadataBase = METADATABASE_API_URL;
  
  return {
    metadataBase,
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      images: metadata.ogImage ? [{ url: metadata.ogImage }] : []
    }
  };
}

export default async function Page({ params }) {

  let post;
  let metadata;
  let mainImage;
  let hoverImage;

  try {
    post = await fetchCPTBySlug(params.slug, 'calzones');
    
    mainImage = post?.acf.main_image ? await fetchACFImage(post?.acf.main_image).catch(e => {
      console.error(`Error fetching main image: ${e}`);
      return null;
    }) : null;

    hoverImage = post?.acf.hover_image ? await fetchACFImage(post?.acf.hover_image).catch(e => {
      console.error(`Error fetching hover image: ${e}`);
      return null;
    }) : null;

    post = { ...post, mainImage, hoverImage };

  } catch (error) {
    console.error("Error fetching post data:", error);
    // Handle the error appropriately
  }
  console.log('Post FeaturedImage:', post.featuredImage);

  
  return (
    <>
     <Head>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
        {metadata?.openGraph?.images.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}
      </Head>
      <div className="cream-color">
        <section className="viewport innerhero">
          <div className="page-container">
            <div className="responsive-column-container">
              <div>
               <Image 
                src={mainImage.sourceUrl} 
                alt={mainImage.altText} 
                width={612}
                height={678}
                style={{objectFit: 'cover'}}
              />
              </div>
              <div>
                <h1 dangerouslySetInnerHTML={{ __html: post?.title?.rendered }} />
                <div dangerouslySetInnerHTML={{ __html: post?.content?.rendered }} />
                <OrderBtn />
              </div>
            </div>
          </div>
        </section>
      <CalloutMobileApp />
      </div>
    </>
  );
}