import axios from 'axios';
import aMock from './data/mock.js';
import tableList from './data/tableData.js';
import Mockadaoter from 'axios-mock-adapter';
export default {
    bootstrap () {
        const mock = new Mockadaoter(axios);
        mock.onPost('/login').reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, aMock]);
            });
        });
        mock.onPost('/orderList').reply((config) => {
            let {pageNum, pageIndex, status} = JSON.parse(config.data);
            let searchObj = tableList;
            if (status !== 3) {
                searchObj = tableList.filter((v) => {
                    if (status === v.status) {
                        return v;
                    }
                });
            }
            let orderData = searchObj.slice((pageIndex - 1) * pageNum, pageNum * (pageIndex - 1) + pageNum);
            return new Promise((resolve, reject) => {
                resolve([200, {code: 0, orderData, total: searchObj.length}]);
            });
        });
    }
};
// export const slideMock = Mock.mock(slide)
