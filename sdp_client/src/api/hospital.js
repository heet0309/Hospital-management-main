import user from "./user";

export const fetchPendingList = async () => {
  try {
    const { data } = await user(`/hospital/getAllPendingList`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
export const fetchApprovedList = async () => {
  try {
    const { data } = await user(`/hospital/getAllApprovedList`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const updateStatus = async (hospitalId) => {
  try {
    const { data } = await user.put(`/hospital/updateStatus/${hospitalId}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const deleteHospital = async (hospitalId) => {
  try {
    const { data } = await user.delete(
      `/hospital/deleteHospital/${hospitalId}`
    );
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const addBed = async (hospitalId, config, obj) => {
  try {
    const { data } = await user.put(
      `/hospital/addBed/${hospitalId}`,
      obj,
      config
    );
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const addDoctor = async (hospitalId, config, obj) => {
  try {
    const { data } = await user.put(
      `/hospital/addDoctor/${hospitalId}`,
      obj,
      config
    );
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//foeget passweord
export const forgetPassword = async (obj, config) => {
  try {
    const data = await user.post("/hospital/forgetPassword", obj, config);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
