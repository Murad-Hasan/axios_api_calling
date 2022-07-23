import axiosClient from "../apiClient";

export function getApiData(path) {
    return axiosClient.get(`/${path}`);
}