[![Build Status](https://travis-ci.org/cfn-modules/ecs-alb-target.svg?branch=master)](https://travis-ci.org/cfn-modules/ecs-alb-target)
[![NPM version](https://img.shields.io/npm/v/@cfn-modules/ecs-alb-target.svg)](https://www.npmjs.com/package/@cfn-modules/ecs-alb-target)

# cfn-modules: ECS ALB target

ECS ALB target.

## Install

> Install [Node.js and npm](https://nodejs.org/) first!

```
npm i @cfn-modules/ecs-alb-target
```

## Usage

```
---
AWSTemplateFormatVersion: '2010-09-09'
Description: 'cfn-modules example'
Resources:
  Target:
    Type: 'AWS::CloudFormation::Stack'
    Properties:
      Parameters:
        AlbModule: !GetAtt 'Alb.Outputs.StackName' # required
        AlbListenerModule: !GetAtt 'AlbListener.Outputs.StackName' # required
        VpcModule: !GetAtt 'Vpc.Outputs.StackName' # required
        AlertingModule: '' # optional
        CognitoUserPoolModule: '' # optional
        Priority: '1' # optional
        HostPattern: '' # optional
        PathPattern: '/*' # optional
        DeregistrationDelayInSeconds: '60' # optional
        AuthCallbackDomain: 'app.widdix.de' # optional, required when CognitoUserPoolModule is set
        HealthCheckPath: '/' # optional
      TemplateURL: './node_modules/@cfn-modules/ecs-alb-target/module.yml'
```

## Examples

* [fargate-alb-proxy-pattern](https://github.com/cfn-modules/docs/tree/master/examples/fargate-alb-proxy-pattern)
* [fargate-alb-single-container](https://github.com/cfn-modules/docs/tree/master/examples/fargate-alb-single-container)

## Related modules

* [alb](https://github.com/cfn-modules/alb)
* [fargate-service](https://github.com/cfn-modules/fargate-service)
* [cognito-userpool](https://github.com/cfn-modules/cognito-userpool)

## Parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
      <th>Required?</th>
      <th>Allowed values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AlbModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/alb">alb module</a></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tr>
    <tr>
      <td>AlbListenerModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/alb-listener">alb-listener module</a></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tr>
    <tr>
      <td>VpcModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/vpc">vpc module</a></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tr>
    <tr>
      <td>AlertingModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/alerting">alerting module</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>CognitoUserPoolModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/cognito-userpool">cognito-userpool module</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>Priority</td>
      <td>The priority for the rule. Elastic Load Balancing evaluates rules in priority order, from the lowest value to the highest value. If a request satisfies a rule, Elastic Load Balancing ignores all subsequent rules. A target group can have only one rule with a given priority.</td>
      <td>1</td>
      <td>no</td>
      <td>1-99999</td>
    </tr>
    <tr>
      <td>HostPattern</td>
      <td>Host pattern (you can specify HostPattern and/or PathPattern)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>PathPattern</td>
      <td>Path pattern (you can specify HostPattern and/or PathPattern)</td>
      <td>/*</td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>DeregistrationDelayInSeconds</td>
      <td>The amount of time, in seconds, for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused</td>
      <td>60</td>
      <td>no</td>
      <td>0-3600</td>
    </tr>
    <tr>
      <td>AuthCallbackDomain</td>
      <td>The domain name used to access a target which requires authentication via a Cognito User Pool, required when CognitoUserPoolModule is set.</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>HealthCheckPath</td>
      <td>The HTTP GET request is sent to this path. The response status code must be in the range 200-399 for healthy containers</td>
      <td>/</td>
      <td>no</td>
      <td></td>
    </tr>
  </tbody>
</table>
