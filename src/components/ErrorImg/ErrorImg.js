import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import s from './ErrorImg.module.css';

import errorImg from '../../img/sad.png';

function ErrorImg({ message }) {
  return (
    <AnimatePresence>
      <motion.div
        role="alert"
        className={s.wrapper}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <img src={errorImg} width="500" alt="Network Error" />
        <p text={message} className={s.text}>
          {message}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

ErrorImg.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorImg;
