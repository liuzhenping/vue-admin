import request from "@/utils/request";

export default {
    save(data) {
        return request({
            url: "/api/articles",
            method: "post",
            data
        });
    },

    getById(id) {
        return request({
            url: `/api/articles/${id}`,
            method: "get"
        });
    }

};
