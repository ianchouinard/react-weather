import React from 'react';
import renderer from 'react-test-renderer';
import { Conditions } from './../../../components/dashboard/Conditions'
import { mockCondition } from './../../Mocks'

describe('Conditions', () => {

  const component = renderer.create(
    <Conditions conditions={mockCondition(800)} />
  )

  it('should create the component', () => {
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
