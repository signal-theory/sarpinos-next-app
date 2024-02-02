import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = ({ data, mainImage }) => {


  return (
    <div className="responsive-column-container">
      <div className={`flex-align-center order2 ${styles.textCol}`}>
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: data?.title.rendered || '' }} />
        <div dangerouslySetInnerHTML={{ __html: data?.content.rendered || '' }} />
        <div className='display-flex'>
          <Link href="" className="btn primary-btn"><span>Log In</span></Link>
          <Link href="" className="btn secondary-btn"><span>Sign Up</span></Link>
        </div>
      </div>
      <div className={`order1 ${styles.imageCol}`}>
        {mainImage && (
          <Image
            src={mainImage.sourceUrl}
            alt={mainImage.altText}
            width={650}
            height={412}
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          />
        )}
        <Image src={'/heart-red-fill.svg'} width={55} height={55} className={styles.redFillHeart} alt="red fill heart" />
        <Image src={'/heart-green-outline.svg'} width={57} height={57} className={styles.greenOutlineHeart} alt="green outline heart" />
        <Image src={'/heart-red-outline.svg'} width={60} height={60} className={styles.redOutlineHeart} alt="red outline heart" />
      </div>
    </div>
  );
}

export default Hero;