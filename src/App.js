import React from 'react';
import './style.css';
import axios from 'axios';
export default function App(props) {
  const [myData, setMyData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('https://yamoory.com/myapi/clients/get_users_all/false')
      .then(res => {
        setMyData(res.data.data);
        console.log(res.data.data[0]);
      });
  }, [props]);
  return (
    <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
      {myData.map(item => (
        <div
          style={{
            padding: 10,
            textAlign: 'center',
            backgroundColor: '#cecece',
            margin: 10,
            width: 200
            // height: 200
          }}
        >
          {item.images && item.images.length > 0 && (
            <img
              height={150}
              width={150}
              src={'https://yamoory.com/' + item.images[0]}
            />
          )}
          <p>{item.name}</p>
          <p>{item._id}</p>
        </div>
      ))}
    </div>
  );
}
