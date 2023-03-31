import { MessageBoxContainer } from './MessageBox.styled';
import PropTypes from 'prop-types';

const MessageBox = ({ children }) => {
  return <MessageBoxContainer>{children}</MessageBoxContainer>;
};

MessageBox.propTypes = { children: PropTypes.string.isRequired };

export default MessageBox;
