import axiosClient from './axiosClient';

const boardApi = {
  getAll(): Promise<any> {
    return axiosClient.get('boards');
  },
  create(): Promise<any> {
    return axiosClient.post('boards');
  },
  getOne(id: string): Promise<any> {
    return axiosClient.get(`boards/${id}`);
  },
  delete(id: string): Promise<any> {
    return axiosClient.delete(`boards/${id}`);
  },
  update(id: string, params: any): Promise<any> {
    return axiosClient.put(`boards/${id}`, params);
  },
  getFavourties(): Promise<any> {
    return axiosClient.get('boards/favourties');
  },
  updateFavourties(params: any): Promise<any> {
    return axiosClient.put('boards/favourties', params);
  },
};

export default boardApi;
