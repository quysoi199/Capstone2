import axios from "axios";
import { url } from "../constain";

export const getNewPaperData = async (page) => {
  try {
    const res = await axios.get(`${url}/posts?page=${page}`);
    return res.data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getNewPaperDataWithId = async (id, token) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get(`${url}/posts/${id}`, config);
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const updateUserID = async (id, data, token) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.patch(`${url}/users/${id}`, data, config);
    console.log(res);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
export const createPost = async (data, token) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.post(`${url}/posts`, data, config);
  } catch (e) {
    console.log(e);
  }
};

export const getPaperType = async (type, token) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get(
      `${url}/postbycate/posts?category=${type}`,
      config
    );
    return res.data.results;
  } catch (e) {
    console.log(e);
  }
};

//admin
export const getUsers = async (page, token) => {
  try {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const res = await axios.get(`${url}/users?page=${page}`, config);
    return res.data.results;
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (id, token) => {
  try {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const res = await axios.delete(`${url}/users/${id}`, config);
    return res.data.results;
  } catch (e) {
    console.log(e);
  }
};
