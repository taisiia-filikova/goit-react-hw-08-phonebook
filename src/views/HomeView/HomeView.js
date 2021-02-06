import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { authorizationSelectors } from '../../redux/authorization';
import { variants } from '../../utils/motionVar';
import welcome from '../../img/welcome.png';
import s from './HomeView.module.css';

const HomeView = () => {
  const isLoggedIn = useSelector(authorizationSelectors.getIsAuthenticated);

  return (
    <div className={s.wrapper}>
      <AnimatePresence>
        <img src={welcome} alt="welcome" />
      </AnimatePresence>
      <AnimatePresence>
        <motion.p
          className={s.text}
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
          variants={variants}
        >
          Now you'll definitely not forget the numbers of your friends or
          acquaintances!
        </motion.p>
      </AnimatePresence>
      {!isLoggedIn && (
        <AnimatePresence>
          <motion.p
            className={s.data}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
          >
            Please, <b>Sign up</b> or <b>Log in</b> to have access to this
            Phonebook!
          </motion.p>
        </AnimatePresence>
      )}
    </div>
  );
};

export default HomeView;
