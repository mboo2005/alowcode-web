import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Editor } from "amis-editor";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/v4-shims.css";
import "amis/lib/themes/cxd.css";
import "amis/lib/helper.css";
import "amis/sdk/iconfont.css";
import { store } from "../../redux/index";
import { connect } from "react-redux";
import { customFetcher } from "../../common/comp";
import "amis-editor-core/lib/style.css";
import { AlertComponent, ToastComponent, setDefaultTheme } from "amis";
import amisConfig from "../../config/index";
setDefaultTheme("cxd");

import { fetchPageById } from "../../api/index";

import "./index.less";
import queryString from "query-string";
let arrg;
// const mapStateToProps = (state) => ({
//   changeLang: state.changeLang,
// });
const mapStateToProps = (state) => ({
  changeLange: state.changeLange,
});
const EditorCtn: React.FC = (props) => {
  const [editValue, setEditValue] = useState<any>();
  const [title, setTitle] = useState<string>("");
  const [isF, setIsF] = useState(false);
  const history = useHistory();
  let id: string = "";
  const queries = queryString.parse(history.location.search);
  if (queries && queries.id) {
    id = queries.id as string;
  }
  useEffect(() => {
    initData();
  }, [id]);

  const initData = async () => {
    if (id) {
      const res = await fetchPageById({ id });
      if (res.status === 200 && res.data) {
        let pageData = res.data.pageData;
        if (pageData) {
          setEditValue(JSON.parse(pageData));
        }
        setTitle(res.data.title);
      }
    }
  };

  console.log("rerenderer");
  const handleEditorChange = (v) => {
    setEditValue(v);
  };
  // useEffect(() => {
  //   setIsF(false);
  //   setTimeout(() => {
  //     setIsF(true);
  //   }, 500);
  // }, [props.changeLange]);

  return (
    <div className="viewCtn">
      <ToastComponent key="toast" position={"top-center"} />
      <AlertComponent key="alert" />
        <Editor
          className="editContainer"
          value={editValue}
          preview={true}
          i18nEnabled={false}
          //appLocale={'zh-CN'}
          appLocale={props.changeLange}
          //appLocale={store.getState().changeLang}
          theme={"cxd"}
          amisEnv={{
            fetcher: customFetcher,
            replaceText: { tpl: "./locales/en-US.json" },
          }}
          onChange={handleEditorChange}
        />
      
    </div>
  );
};

export default connect(mapStateToProps)(EditorCtn);
