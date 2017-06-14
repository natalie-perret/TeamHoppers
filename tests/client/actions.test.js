import test from 'ava'
import nock from 'nock'

import * as action from '../../client/actions'
import * as orgAction from '../../client/actions/orgs'
import * as itemAction from '../../client/actions/items'
import * as categoriesAction from '../../client/actions/categories'


test.cb('getOrgs', t => {
  const scope = nock('http://localhost:80')
    .get('/api/orgs')
    .reply(200)

    orgAction.getOrgs()((actual) => {
      t.is(actual.type, 'RECEIVE_ORGS')
      t.end()
    })
})


test.cb('getItems', t => {
  const scope = nock('http://localhost:80')
    .get('/api/items')
    .reply(200)

    itemAction.getItems()((actual) => {
      t.is(actual.type, 'RECEIVE_ITEMS')
      t.end()
    })
})

test.cb('getCategories', t => {
  const scope = nock('http://localhost:80')
    .get('/api/categories')
    .reply(200)

    categoriesAction.getCategories()((actual) => {
      t.is(actual.type, 'RECEIVE_CATEGORIES')
      t.end()
    })
})