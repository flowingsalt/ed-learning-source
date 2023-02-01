/*
 *
 * This Config is for developing with feature flags
 * Add your district to the value array for use
 *
 * Permanent config goes on s3
 * Please don't commit this file in your PR's
 *
 */
var localCohorts = [{
  key: 'demo-entitlements-by-district',
  flag: 'demoEntitlements',
  filter: {
    type: 'cohort',
    target: 'selectDistrict',
    value: ['91003620', '92004741']
  }
}, {
  key: 'demo-entitlements-by-usertype',
  flag: 'demoFlag',
  filter: {
    type: 'cohort',
    target: 'selectUserType',
    value: ['Learner']
  }
}, {
  key: 'reporting-suite-new-vision',
  flag: 'reportingSuiteNewVision',
  filter: {
    type: 'cohort',
    target: 'selectDistrict',
    value: ['92028086', '92027663', '92027931', '92030621', '92028295', '92028251', '92030621', '92028110', '92028109', '92089200', '92083700', '92092340', '92083718', '92082961', '92082960', '92103100', '92025560', '92024130', '92025806', '92023966']
  }
}];
export default localCohorts;