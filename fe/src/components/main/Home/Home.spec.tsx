import { mount } from 'enzyme';
import * as React from 'react';
import { act } from 'react-dom/test-utils';
import HttpServiceMock from '../../../services/http/http.mock';
import { HelloMessage } from '../../../services/data/data';
import { Home } from './Home';
import { mountComponent } from '../../jestUtil';

describe('Home', () => {
  it('should display all elements.', async () => {
    let home = mount(<></>);
    const expected: Array<HelloMessage> = [{
      id: 0, value: 'Hello', created: '', modified: '',
    }];
    const httpService = new HttpServiceMock(expected);
    await act(async () => {
      home = mountComponent(<Home httpService={httpService} mode="development" />);
    });
    expect(home.find('.container')).toHaveLength(1);
    expect(home.find('section')).toHaveLength(1);
  });

  it('should display all elements when no data.', async () => {
    let home = mount(<></>);
    const httpService = new HttpServiceMock([]);
    await act(async () => {
      home = mountComponent(<Home httpService={httpService} mode="development" />);
    });
    expect(home.find('.container')).toHaveLength(1);
    expect(home.find('section')).toHaveLength(1);
  });
});
