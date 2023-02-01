import { getEnvironment } from '@hmhco/get-environment/src/getEnvironment';
var learnosityConsumerKeys = {
  local: 'HMHJO4TPry33Ojna',
  "int": 'HMHJO4TPry33Ojna',
  cert: 'HMHLOPnjoBojCdTx',
  prod: 'HMHbO16DROPfDGzr'
};

var getCurrentEnvLearnosityKey = function getCurrentEnvLearnosityKey() {
  return learnosityConsumerKeys[getEnvironment()];
};

export default getCurrentEnvLearnosityKey;