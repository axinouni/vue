import axios from 'axios'
import aMock from './data/mock.js'
import bMock from './data/myself.js'
import cMock from './data/sea.js'
import Mockadaoter from 'axios-mock-adapter'
// const Mock = require('mockjs')
export default {
  bootstrap () {
    const mock = new Mockadaoter(axios)
    mock.onGet('./slideMock').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, aMock])
      })
    })
    mock.onGet('./myselfMock').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, bMock])
      })
    })
    mock.onGet('./seaMock').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, cMock])
      })
    })
  }
}
// export const slideMock = Mock.mock(slide)
