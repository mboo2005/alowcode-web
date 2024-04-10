import React, { useEffect, useState } from "react";
import { Select, message } from "antd";
import { useHistory } from "react-router-dom";
import { Editor } from "amis-editor";
// import {embed} from 'amis/esm/index';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/v4-shims.css";
import "amis/lib/themes/cxd.css";
import "amis/lib/helper.css";
import "amis/sdk/iconfont.css";
import "amis-editor-core/lib/style.css";
import { customFetcher } from "../../common/comp";
import { ToastComponent, AlertComponent } from "amis";

// import 'amis-editor-core/lib/rend'
// import './renderer/InputTextI18n';
// import './renderer/TextareaI18n';
// import './utils/overwriteSchemaTpl';

// import '../../common/style.css';
import { setDefaultTheme } from "amis";
setDefaultTheme("cxd");
// import 'amis-editor/dist/style.css';
// import 'font-awesome/css/font-awesome.css';

import { editorInitValue } from "./config";
import { chartDataTypes } from "../../api/common.request";
import LayoutHeader from "../../components/header";
import { fetchAddPage, fetchUpdatePage, fetchPageById } from "../../api/index";
import { store } from "../../redux/index";

// import './index.less';

const EditorCtn: React.FC = () => {
  const history = useHistory();
  // const [editValue, setEditValue] = useState<any>(editorInitValue);
  const [editValue, setEditValue] = useState<any>();
  const [previewStatus, setPreviewStatus] = useState<boolean>(false);
  const [id, setId] = useState<number>();
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const _historyState: any = history.location.state;
    if (_historyState && _historyState.id) {
      setId(_historyState.id);
      setTitle(_historyState.title);
      const res = await fetchPageById({ id: _historyState.id });
      if (res.status === 200 && res.data) {
        let pageData = res.data.pageData;
        if (pageData) {
          setEditValue(JSON.parse(pageData));
        }
      }
    }
  };

  const handleEditorChange = (v) => {
    setEditValue(v);
  };

  // const changePreviewStatus = () => {
  //   console.log(!previewStatus);
  //   setPreviewStatus(!previewStatus);
  // };

  const handleSave = async () => {
    const editValueStr = JSON.stringify(editValue);
    const username = localStorage.getItem("username") || "";
    const nickname = localStorage.getItem("nickname") || "";
    let req: chartDataTypes = {
      email: username,
      userName: nickname,
      pageData: editValueStr,
      pageStatus: "1", // 已发布的不能编辑 所以编辑的status 比是 1
    };
    if (id) {
      req["id"] = id;
      let result = await fetchUpdatePage(req);
      if (result.msg) {
        message.success("保存成功");
      }
    } else {
      // 下面这个用不到了 id 肯定存在
      let result = await fetchAddPage(req);
      if (result.status === 200 && result.data) {
        message.success("添加成功");
        setTimeout(() => {
          // history.push(`/chartList`);
        }, 800);
      }
    }
  };

  const changeView = (v) => {
    setPreviewStatus(v);
  };
  console.log(store.getState().changeLang);

  return (
    <div className="editorCtn">
      <ToastComponent key="toast" position={"top-center"} />
      <AlertComponent key="alert" />
      <LayoutHeader
        title={title}
        saveEditorData={handleSave}
        handleChangeView={changeView}
      />
      <Editor
        className="editContainer"
        value={editValue}
        preview={previewStatus}
        i18nEnabled={true}
        // appLocale={'en-US'}
        appLocale={store.getState().changeLang}
        // appLocale={'zh-CN'}
        theme={"cxd"}
        // appLocale='en-US'

        amisEnv={{ fetcher: customFetcher }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default EditorCtn;
