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
        Priority: '1' # optional
        HostPattern: '' # optional
        PathPattern: '/*' # optional
        DeregistrationDelayInSeconds: '300' # optional
      TemplateURL: './node_modules/@cfn-modules/ecs-alb-target/module.yml'
```

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
      <td>300</td>
      <td>no</td>
      <td>0-3600</td>
    </tr>
  </tbody>
</table>
