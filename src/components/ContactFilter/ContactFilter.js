import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '../../utils/motionVar';

import s from './ContactFilter.module.css';

function ContactFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);
  const error = useSelector(contactsSelectors.getError);
  return (
    <>
      {contacts.length > 0 && !error && (
        <AnimatePresence>
          <label className={s.label}>
            <motion.input
              initial="initial"
              animate="animate"
              exit="exit"
              transition="transition"
              variants={variants}
              className={s.input}
              type="text"
              value={filter}
              onChange={evt =>
                dispatch(contactsActions.filterContact(evt.target.value))
              }
            />
          </label>
        </AnimatePresence>
      )}
    </>
  );
}
export default ContactFilter;
