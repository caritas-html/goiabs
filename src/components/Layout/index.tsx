import styles from './Layout.module.css';
import Header from '../Header';
import BodyLayer from '../BodyLayer';

export default function Layout() {
  return (
    <>
      <div
        className={`${styles.glass} w-full bg-cover animate-slide hover:bg-opacity-50`}
        style={{ backgroundImage: 'url(/images/background.png)' }}
      >
        <Header />
        <BodyLayer />
        {/* footer */}
      </div>
    </>
  );
}
