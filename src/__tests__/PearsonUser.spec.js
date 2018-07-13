import React from "react";
import { mount } from "enzyme";
import { PearsonUser } from "../components/PearsonUser";
import configureStore from 'redux-mock-store'
import reducer from '../reducers/PearsonUsersListData';
import { DELETE_USER, ADD_MORE_USERS } from '../constants/Constants';

const initialState = {};
const mockStore = configureStore();

describe('PearsonUser', () => {
    let wrapper, store;

    beforeEach(() => {
        const initialState = {};
        const user = {
                  id: 4,
                  first_name: "Eve",
                  last_name: "Holt",
                  avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
                };
        store = mockStore(initialState);
        wrapper = mount(
            <PearsonUser store={store} user={user} />
        );
    });

    it('should show previous value of store', () => {
        expect(wrapper.props().user.id).toBe(4);
        expect(wrapper.props().user.first_name).toBe("Eve");
        expect(wrapper.props().user.last_name).toBe("Holt");
        expect(wrapper.props().user.avatar).toBe("https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg");
    })
    it('handles DELETE_USER by removing the item', () => {
      expect(
        reducer(
          [
            {
              id: 5,
              first_name: "Charles",
              last_name: "Morris",
              avatar:
                "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
            },
            {
              id: 6,
              first_name: "Tracey",
              last_name: "Ramos",
              avatar:
                "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
            }
          ],
          {
            type: DELETE_USER,
            userId: 5
          }
        )
      ).toEqual([
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ])
    })
})
