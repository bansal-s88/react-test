import React from "react";
import { shallow } from "enzyme";
import { PearsonUsers } from "../PearsonUsers";
import App from '../App';

describe('Main Component', () => {
  it('should have PearsonUsers Component', () => {
    expect(shallow(<App />).find('Connect(PearsonUsers)')).toHaveLength(1);
  });
})
