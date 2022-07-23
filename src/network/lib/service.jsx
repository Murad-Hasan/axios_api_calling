import axiosClient from "../apiClient";

export function getService() {
    return axiosClient.get('/service');
}