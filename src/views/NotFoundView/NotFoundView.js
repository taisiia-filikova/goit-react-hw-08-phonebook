import errorImg from '../../img/break.png';
import s from './NotFoundView.module.css';

export default function NotFoundView() {
  return (
    <main role="alert" className={s.main}>
      <img src={errorImg} width="500" alt="network break" />
      <h1 className={s.title}>404. Page is not found</h1>
    </main>
  );
}
