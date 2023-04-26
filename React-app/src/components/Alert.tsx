import {ReactNode} from 'react';
interface Props {
  children: ReactNode;
}
const Alert = ({children}) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
