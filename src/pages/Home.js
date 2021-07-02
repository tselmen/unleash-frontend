import { gql, useSubscription } from '@apollo/client';
import { Paper } from '@material-ui/core';

const SENSOR_DATA_SUBSCRIPTION = gql`
  subscription SensorDataSubsciption($topic: String!) {
    subscribe2sensor(topic: $topic) {
      tmp
      hum
      ppm
      wio
      timeStamp
    }
  }
`;

function Home() {
  const { data, error, loading } = useSubscription(SENSOR_DATA_SUBSCRIPTION, { variables: { topic: 'node-broker' } });

  if (loading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Paper>
      <p>TEMP: {data.subscribe2sensor.tmp}</p>
      <p>HUM: {data.subscribe2sensor.hum}</p>
      <p>PPM: {data.subscribe2sensor.ppm}</p>
      <p>Time: {data.subscribe2sensor.timeStamp}</p>
    </Paper>
  );
}

export default Home;
