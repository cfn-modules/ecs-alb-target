const test = require('ava');
const cfntest = require('@cfn-modules/test');

test.serial('auth-userpool', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/auth-userpool.yml`, stackName, {
      HostedZoneId: 'Z08057981AMLWUWNFCQLS'
    }));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});
