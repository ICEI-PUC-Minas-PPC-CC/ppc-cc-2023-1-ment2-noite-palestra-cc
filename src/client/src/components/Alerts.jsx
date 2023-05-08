import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function AlertComponent(props) {
  const {severity, content} = props;
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000); 
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  return visible ? (
    <div style={{position: 'fixed', top: 0, right: 0, zIndex: 9999}}>
      <Alert variant="filled" severity={severity} onClose={handleClose}>
        {content}
      </Alert>
    </div>
  ) : null;
}
