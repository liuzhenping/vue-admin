import request from "@/utils/request";

export default {
    getAll() {
        return request({
            url: `/api/tags`,
            method: "get"
        });
    }
};
