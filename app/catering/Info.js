import ContactBtn from '../components/ContactBtn';
import styles from './Info.module.css';

const Info = ({ data }) => {
  const headline1 = data.acf.catering_headline;
  const content1 = data.acf.catering_content;
  const cCol1 = data.acf.catering_col1;
  const cCol2 = data.acf.catering_col2;
  const cCol3 = data.acf.catering_col3;
  const headline2 = data.acf.servings_headline;
  const content2 = data.acf.servings_content;
  const sCol1 = data.acf.servings_col1;
  const sCol2 = data.acf.servings_col2;
  const sCol3 = data.acf.servings_col3;
  return (
    <>
      <div>
        {headline1 && <h2 className={styles.headline} dangerouslySetInnerHTML={{ __html: headline1 || '' }} />}
        {content1 && <p className={styles.content} dangerouslySetInnerHTML={{ __html: content1 || '' }} />}
      </div>
      <div className={`text-align-center ${styles.colContainer}`}>
        <div className="responsive-unlimited-equal-height-container">
          {cCol1 && <div className={`${styles.col} grid-item green-gradient`}>
            <div className="slide-up-in" dangerouslySetInnerHTML={{ __html: cCol1 || '' }} />
          </div>}
          {cCol2 && <div className={`${styles.col} grid-item green-gradient`}>
            <div className="slide-up-in" dangerouslySetInnerHTML={{ __html: cCol2 || '' }} />
          </div>}
          {cCol3 && <div className={`${styles.col} grid-item green-gradient`}>
            <div className="slide-up-in" dangerouslySetInnerHTML={{ __html: cCol3 || '' }} />
          </div>}
        </div>
      </div>
      <div className={`green-gradient ${styles.container}`}>
        {headline2 && <h2 className={styles.headline} dangerouslySetInnerHTML={{ __html: headline2 || '' }} />}
        {content2 && <p className={styles.headline} dangerouslySetInnerHTML={{ __html: content2 || '' }} />}
        <div className="responsive-unlimited-equal-height-container">
          {sCol1 && <div className={`${styles.col}`}>
            <div dangerouslySetInnerHTML={{ __html: sCol1 || '' }} />
          </div>}
          {sCol2 && <div className={`${styles.col}`}>
            <div dangerouslySetInnerHTML={{ __html: sCol2 || '' }} />
          </div>}
          {sCol3 && <div className={`${styles.col}`}>
            <div dangerouslySetInnerHTML={{ __html: sCol3 || '' }} />
          </div>}
        </div>
        <ContactBtn />
      </div>
    </>
  );
}

export default Info;