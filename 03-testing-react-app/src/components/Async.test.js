import { render, screen } from '@testing-library/react'
import Async from './Async'
import { enableFetchMocks } from 'jest-fetch-mock' // https://www.npmjs.com/package/jest-fetch-mock
enableFetchMocks()

// fdw
describe('Async component', () => {
  test('renders posts if request suceeds', async () => {

    // jest is globally available 
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post'}],
    });

    render(<Async />)
    // no act here

    // assertion: use All as we potenitally have more than 1 list item elements
    // 
    // using getAll is not suitable as we are loading things async
    //  getAll looks for all instances immediatelly
    //  findQueries return promises, so the react testing lib will reevaluate few times what is rendering
    // add `await` to create a delay for async
    const listItemElements = await screen.findAllByRole('listitem') // fetch after 1s by default check the docs for syntax
    expect(listItemElements).not.toHaveLength(0)
  })
})