import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = async () => {
  try {
    const promise = await axiosWithAuth().get('/colors');
    return promise.data;
  } catch (err) {
    return [];
  }
};

export default fetchColorService;
