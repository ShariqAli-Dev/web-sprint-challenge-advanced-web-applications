import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = async () => {
  try {
    const promise = await axiosWithAuth().get('/colors');
    return promise.data;
  } catch (error) {
    return [];
  }
};

export default fetchColorService;
