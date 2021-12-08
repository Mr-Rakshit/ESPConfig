import dgram from 'react-native-udp';

const Udptransfer = () => {
  const controller = new AbortController();
  const {signal} = controller;
  const server = dgram.createSocket({type: 'udp4', signal});
  socket.bind(12345);
  socket.once('listening', function () {
    socket.send(
      {Hello, World},
      undefined,
      undefined,
      8080,
      '192.168.1.1',
      function (err) {
        if (err) throw err;

        console.log('Message sent!');
      },
    );
  });

  socket.on('message', function (msg, rinfo) {
    console.log('Message received', msg);
  });
};
export default Udptransfer;
