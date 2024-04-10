export const fetchLoginMock = {
    "code": 0,
    "msg": "登录成功",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY5NTcwOTQzMCwiZXhwIjoxNjk1NzEzMDMwfQ.zPqoL7oQmpxPaLCgn4q8MCYBX-8dBeZKnixCw13ENcE",
    "userInfo": {
        "userId": 1,
        "role": 0, // todo ,需要判断
        "username": "admin",
        "mobile": null,
        "portrait": "/uploads/portrait_default.png",
        "createdAt": "2023-09-19T09:14:52.000Z",
        "updatedAt": "2023-09-19T09:14:52.000Z"
    }
}

export const fetchPageListMock = {
    "status": 200,
    "msg": "success",
    "data": [
        {
            "id": 8,
            "email": null,
            "userName": null,
            "title": "这是一条测试数据",
            "pageData": "{\"id\":\"u:1c1c8d3a1c44\",\"body\":[{\"type\":\"flex\",\"className\":\"p-1\",\"items\":[{\"type\":\"container\",\"body\":[{\"type\":\"input-text\",\"label\":\"文本\",\"name\":\"text\",\"id\":\"u:74433faba576\"}],\"size\":\"xs\",\"style\":{\"position\":\"static\",\"display\":\"block\",\"flex\":\"1 1 auto\",\"flexGrow\":1,\"flexBasis\":\"auto\"},\"wrapperBody\":false,\"isFixedHeight\":false,\"isFixedWidth\":false,\"id\":\"u:ff6956b1a15f\"},{\"type\":\"container\",\"body\":[{\"type\":\"input-text\",\"label\":\"文本\",\"name\":\"text\",\"id\":\"u:9a5dfa818d23\"}],\"size\":\"xs\",\"style\":{\"position\":\"static\",\"display\":\"block\",\"flex\":\"1 1 auto\",\"flexGrow\":1,\"flexBasis\":\"auto\"},\"wrapperBody\":false,\"isFixedHeight\":false,\"isFixedWidth\":false,\"id\":\"u:194428fdf8a5\"},{\"type\":\"container\",\"body\":[{\"type\":\"input-tag\",\"label\":\"标签\",\"name\":\"tag\",\"options\":[\"红色\",\"绿色\",\"蓝色\"],\"id\":\"u:170890dfb14d\"}],\"size\":\"xs\",\"style\":{\"position\":\"static\",\"display\":\"block\",\"flex\":\"1 1 auto\",\"flexGrow\":1,\"flexBasis\":\"auto\"},\"wrapperBody\":false,\"isFixedHeight\":false,\"isFixedWidth\":false,\"id\":\"u:2fe275e2f77f\"}],\"style\":{\"position\":\"relative\"},\"id\":\"u:4b1b89c01bc3\"},{\"type\":\"flex\",\"className\":\"p-1\",\"items\":[{\"type\":\"container\",\"body\":[{\"type\":\"chained-select\",\"label\":\"链式下拉\",\"name\":\"chainedSelect\",\"joinValues\":true,\"id\":\"u:73027a6e0c72\"}],\"size\":\"xs\",\"style\":{\"position\":\"static\",\"display\":\"block\",\"flex\":\"1 1 auto\",\"flexGrow\":1,\"flexBasis\":\"auto\"},\"wrapperBody\":false,\"isFixedHeight\":false,\"isFixedWidth\":false,\"id\":\"u:ff6956b1a15f\"},{\"type\":\"container\",\"body\":[{\"type\":\"input-date\",\"label\":\"日期\",\"name\":\"date\",\"id\":\"u:081a3de0be70\"}],\"size\":\"xs\",\"style\":{\"position\":\"static\",\"display\":\"block\",\"flex\":\"1 1 auto\",\"flexGrow\":1,\"flexBasis\":\"auto\"},\"wrapperBody\":false,\"isFixedHeight\":false,\"isFixedWidth\":false,\"id\":\"u:194428fdf8a5\"},{\"type\":\"container\",\"body\":[{\"type\":\"input-city\",\"label\":\"城市选择\",\"name\":\"city\",\"allowCity\":true,\"allowDistrict\":true,\"extractValue\":true,\"id\":\"u:b53109db8449\"}],\"size\":\"xs\",\"style\":{\"position\":\"static\",\"display\":\"block\",\"flex\":\"1 1 auto\",\"flexGrow\":1,\"flexBasis\":\"auto\"},\"wrapperBody\":false,\"isFixedHeight\":false,\"isFixedWidth\":false,\"id\":\"u:2fe275e2f77f\"}],\"style\":{\"position\":\"relative\"},\"id\":\"u:5bd53c2c4b00\"},{\"type\":\"flex\",\"className\":\"p-1\",\"items\":[{\"type\":\"container\",\"body\":[{\"type\":\"checkboxes\",\"label\":\"复选框\",\"name\":\"checkboxes\",\"multiple\":true,\"options\":[{\"label\":\"选项A\",\"value\":\"A\"},{\"label\":\"选项B\",\"value\":\"B\"}],\"id\":\"u:78997f058eb5\"}],\"size\":\"xs\",\"style\":{\"position\":\"static\",\"display\":\"block\",\"flex\":\"1 1 auto\",\"flexGrow\":1,\"flexBasis\":\"auto\"},\"wrapperBody\":false,\"isFixedHeight\":false,\"isFixedWidth\":false,\"id\":\"u:c8f3e110d068\"},{\"type\":\"container\",\"body\":[{\"type\":\"radios\",\"label\":\"单选框\",\"name\":\"radios\",\"options\":[{\"label\":\"选项A\",\"value\":\"A\"},{\"label\":\"选项B\",\"value\":\"B\"}],\"id\":\"u:cd619929df7f\"}],\"size\":\"xs\",\"style\":{\"position\":\"static\",\"display\":\"block\",\"flex\":\"1 1 auto\",\"flexGrow\":1,\"flexBasis\":\"auto\"},\"wrapperBody\":false,\"isFixedHeight\":false,\"isFixedWidth\":false,\"id\":\"u:25bcde013541\"}],\"style\":{\"position\":\"relative\"},\"id\":\"u:abfcb37f2b82\"},{\"type\":\"input-text\",\"label\":\"文本\",\"name\":\"text\",\"id\":\"u:5271dba03b6e\"},{\"type\":\"crud\",\"syncLocation\":false,\"api\":{\"method\":\"get\",\"url\":\"\"},\"columns\":[{\"name\":\"id\",\"label\":\"ID\",\"type\":\"text\",\"id\":\"u:67c0f13532ad\"},{\"name\":\"engine\",\"label\":\"渲染引擎\",\"type\":\"text\",\"id\":\"u:da249b7acd84\"}],\"bulkActions\":[],\"itemActions\":[],\"id\":\"u:935d478eb6cd\"}],\"regions\":[\"toolbar\",\"header\",\"body\",\"aside\"],\"asideResizor\":true,\"title\":\"测试数据呀\",\"subTitle\":\"测试数据的副标题\",\"remark\":{\"icon\":\"fa fa-question-circle\",\"trigger\":[\"hover\"],\"className\":\"Remark--warning\",\"placement\":\"right\"}}",
            "pageStatus": 2,
            "permission": "",
            "createdAt": "2023-09-22T08:08:28.000Z",
            "updatedAt": "2023-09-25T08:51:43.000Z"
        },
        {
            "id": 7,
            "email": null,
            "userName": null,
            "title": "直播管理",
            "pageData": "{\"id\":\"u:aa974d659a25\",\"body\":[{\"type\":\"crud\",\"syncLocation\":false,\"api\":{\"method\":\"get\",\"url\":\"\"},\"columns\":[{\"name\":\"id\",\"label\":\"ID\",\"type\":\"text\",\"id\":\"u:0a52e1fd20b3\"},{\"name\":\"engine\",\"label\":\"渲染引擎\",\"type\":\"text\",\"id\":\"u:7958de4d8e7d\"}],\"bulkActions\":[],\"itemActions\":[],\"id\":\"u:76cbedd15a90\"},{\"type\":\"button\",\"label\":\"aaa\",\"onEvent\":{\"click\":{\"actions\":[]}},\"id\":\"u:d64a9843e589\",\"editorState\":\"default\"}],\"asideResizor\":false,\"pullRefresh\":{\"disabled\":true},\"title\":\"zzzz\"}",
            "pageStatus": 1,
            "permission": "",
            "createdAt": "2023-09-21T08:58:31.000Z",
            "updatedAt": "2023-09-21T09:14:56.000Z"
        },
        {
            "id": 5,
            "email": "111",
            "userName": "",
            "title": "ttt2222",
            "pageData": "{\"id\":\"u:cebda312d7ca\",\"body\":[{\"type\":\"textarea\",\"label\":\"多行文本222\",\"name\":\"textarea\",\"id\":\"u:2f6913c0baf8\",\"minRows\":3,\"maxRows\":20,\"value\":\"asdfasdfasdfas\"},{\"type\":\"crud\",\"syncLocation\":false,\"api\":{\"method\":\"get\",\"url\":\"\"},\"columns\":[{\"name\":\"id\",\"label\":\"ID\",\"type\":\"text\",\"id\":\"u:36e8bca50635\"},{\"name\":\"engine\",\"label\":\"渲染引擎\",\"type\":\"text\",\"id\":\"u:a75b14373df4\"}],\"bulkActions\":[],\"itemActions\":[],\"id\":\"u:21c104855699\"}]}",
            "pageStatus": 2,
            "permission": "",
            "createdAt": "2023-09-20T09:25:27.000Z",
            "updatedAt": "2023-09-21T08:56:06.000Z"
        },
        {
            "id": 4,
            "email": "",
            "userName": "",
            "title": "ttt2222",
            "pageData": "",
            "pageStatus": 1,
            "permission": "",
            "createdAt": "2023-09-20T09:23:45.000Z",
            "updatedAt": "2023-09-20T09:23:45.000Z"
        },
        {
            "id": 2,
            "email": "",
            "userName": "",
            "title": "aaaa",
            "pageData": "",
            "pageStatus": 1,
            "permission": "",
            "createdAt": "2023-09-19T09:18:48.000Z",
            "updatedAt": "2023-09-20T09:22:56.000Z"
        },
        {
            "id": 1,
            "email": "",
            "userName": "",
            "title": "tttt",
            "pageData": "",
            "pageStatus": 1,
            "permission": "",
            "createdAt": "2023-09-19T09:15:19.000Z",
            "updatedAt": "2023-09-19T09:15:19.000Z"
        }
    ]
}