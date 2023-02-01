var certUrl = 'https://api.cert.hmhco.com/wh-api/graphql/student';
var WORMHOLE_URLS = {
  local: 'https://api.int.br.internal/wh-api/graphql/student',
  dev: 'https://api.int.br.internal/wh-api/graphql/student',
  "int": 'https://api.int.br.internal/wh-api/graphql/student',
  cert: certUrl,
  devCert: certUrl,
  prod: 'https://papi.hmhco.com/wh-api/graphql/student'
};
export default WORMHOLE_URLS;