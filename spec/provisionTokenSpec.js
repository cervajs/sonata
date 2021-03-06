const path = require('path');
const fetch = require('node-fetch');

const device = {
  id: 'sdgjdeu9443908590sfdsf8u984',
  model: 'gxp1620',
  vendor: 'grandstream',
  mac: '001565113af8',
  timezone_offset: 'GMT+03',
  ntp_server: 'pool.ntp.org',
  status: true,
  created_at: '2019-01-18T15:39:15.645Z',
  updated_at: (new Date()).toISOString(),
  accounts: [
    {
      name: 'манго',
      line: 1,
      sip_register: 'sip.mangosip.ru',
      sip_name: 'sip101',
      sip_user: 'sip101',
      sip_password: '1234',
      sip_auth: 'sip101',
    },
    {
      name: 'Мобилон',
      line: 2,
      sip_register: 'sip.mobilonsip.ru',
      sip_name: 'sip102',
      sip_user: 'sip102',
      sip_password: '4321',
      sip_auth: 'sip102',
    },
  ],
};

const Device = {
  findOne: () => {
    return Promise.resolve(device);
  },
};

/**
 *
 */
class RequestLog {
  /**
   *
   */
  constructor() {}
  /**
   *
   */
  save() {}
}

const createApp = require('./../app').createApp;
const app = createApp({
  apiDoc: require('./../provision/api-doc.js'),
  paths: path.resolve(__dirname, './../provision/api-routes'),
  dependencies: {
    Device,
    RequestLog,
  },
});

describe('provision', () => {
  it('get xml config by token', (done) => {
    const server = app.listen(3000);
    fetch('http://localhost:3000/v1/token/1/cfg001565113af8.xml')
        .then((res) => res.text())
        .then((res) => {
          // console.log(' ------------------- ')
          // console.log(res);
          const containXml = res.includes('<config version="1">');
          // console.log('containXml', containXml);
          expect(containXml).toBe(true);
        })
        .then(() => {
          server.close();
          done();
        });
  });

  it('get xml config by token', (done) => {
    const server = app.listen(3000);
    fetch('http://localhost:3000/v1/token/1/001565113af8.xml')
        .then((res) => res.text())
        .then((res) => {
          // console.log(' ------------------- ')
          // console.log(res);
          const containXml = res.includes('<config version="1">');
          // console.log('containXml', containXml);
          expect(containXml).toBe(true);
        })
        .then(() => {
          server.close();
          done();
        });
  });

  it('get xml config by token', (done) => {
    const server = app.listen(3000);
    fetch('http://localhost:3000/v1/token/1/cfg001565113af8')
        .then((res) => res.text())
        .then((res) => {
          // console.log(' ------------------- ')
          // console.log(res);
          const containXml = res.includes('<config version="1">');
          // console.log('containXml', containXml);
          expect(containXml).toBe(true);
        })
        .then(() => {
          server.close();
          done();
        });
  });
});
