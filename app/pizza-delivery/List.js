import styles from './List.module.css';
import Link from 'next/link';
import he from 'he';


const List = ({ posts, locations, openInfoWindowId, setOpenInfoWindowId }) => {
  return (
    <ul>
      {locations.map((location, index) => (
        <li className={styles.listItem} key={location.id}>
          <h5 className={styles.listTitle} onClick={() => setOpenInfoWindowId(location.id)}>{he.decode(location.title.rendered)}</h5>
          <div className={styles.listColumns}>
            <div>
              <p><strong>Open Now &bull; Hours</strong></p>
              <p>{location.acf.address}<br />
                {location.acf.city}, {location.acf.state} {location.acf.zip}
              </p>
              <Link className="text-link" href={`https://www.google.com/maps?saddr=Your+Location&daddr=${he.decode(location.title.rendered)}`} target="_blank">Directions</Link>
            </div>
            <div>
              <p>{location.acf.phone_number || 'phone number'}</p>
              <Link className='btn primary-btn' href={`/pizza-delivery/${location.slug}`}><span>See Store Info</span></Link>
            </div>
          </div>

        </li>
      ))
      }
    </ul >
  );
};

export default List;