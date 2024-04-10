import React, { Component, useState, useEffect, useRef } from 'react';
import { Button, message, Table, Modal, Input, Tag, Popconfirm } from 'antd';
// import { history } from 'umi';
import { useHistory } from 'react-router-dom'
import { getFullDateByTime } from '../../common/utils';
// import { listItemTypes } from './type';

import FormChartList from './formChartList'


import { fetchAddPage, fetchUpdatePage, fetchDeletePage, fetchPageList } from '../../api/index'
import { fetchPageListMock } from '../../api/mock'

import './index.less';


const ChartList = (props) => {
  const [dataList, setDataList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false)
  const [title, setTitle] = useState('');
  const history = useHistory()
  const formRef = useRef();

  const [editRecord, setEditRecord] = useState({})

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '页面标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => {
        return getFullDateByTime(+new Date(text));
      },
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (text) => {
        return getFullDateByTime(+new Date(text));
      },
    },
    {
      title: '状态',
      dataIndex: 'pageStatus',
      key: 'pageStatus',
      render: (text) => {
        return <span>{text === 1 ? <Tag color="#87d068">已保存</Tag> : <Tag color="#108ee9">已发布</Tag>}</span>;
      },
    }, {
      title: '关联权限',
      dataIndex: 'permissions',
      key: 'permissions'
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (text, obj) => {
        return (
          <div>
            <Popconfirm
              title="确定删除吗?"
              okText="确定"
              cancelText="取消"
              disabled={obj['pageStatus'] === '2'}
              onConfirm={() => {
                handleDeleteById(obj['id']);
              }}
            >
              <Button type="link" disabled={obj['pageStatus'] === '2'}>
                删除
              </Button>
            </Popconfirm>
            <Button
              type="link"
              disabled={obj['pageStatus'] === '2'}
              onClick={() => {
                goToPage(obj['id'], obj['title']);
              }}
            >
              编辑页面
            </Button>
            <Button
              type="link"
              disabled={obj['pageStatus'] === '2'}
              onClick={() => {
                setVisible(true);
                setEditRecord(obj)
                setIsEditModal(true)
              }}
            >
              编辑
            </Button>
            <Button
              type="link"
              disabled={obj['pageStatus'] === '2'}
              onClick={() => {
                handlefetchUpdatePage(obj, '2');
              }}
            >
              发布
            </Button>
            <Button
              type="link"
              disabled={obj['pageStatus'] === '1'}
              onClick={() => {
                handlefetchUpdatePage(obj, '1');
              }}
            >
              撤回发布
            </Button>
            <Button
              type="link"
              disabled={obj['pageStatus'] === '1'}
              onClick={() => {
                history.push(`/admin/page/view?id=${obj['id']}`);
              }}
            >
              查看
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    initDataList();
  }, []);

  const handleDeleteById = async (id) => {
    const res = await fetchDeletePage({ id });
    if (res.data) {
      message.success('删除成功');
      initDataList();
    } else {
      message.error('请求出错');
    }
  };

  const handlefetchUpdatePage = async (obj, flag) => {
    obj['pageStatus'] = flag;
    const res = await fetchUpdatePage(obj);
    if (res.status === 200 && res.msg) {
      message.success('请求成功');
      initDataList();
    }
  };

  const initDataList = async () => {
    const res = await fetchPageList({
      email: localStorage.getItem('username') || '',
    });

    if (res.status === 200 && res.data.length) {
      let result = res.data;
      result.forEach((item) => {
        item['key'] = item.id;
      });
      setDataList(res.data);
    }
  };

  const goToPage = (id, titleValue) => {
    history.push(`/admin/page/editor`, { id, title: titleValue });
  };

  const addAction = async (resForm) => {
    const res = await fetchAddPage({
      title: resForm.title,
      pageData: '',
      pageStatus: '1',
    });
    if (res.status === 200 && res.data.id) {
      message.success('添加成功');
      setTimeout(() => {
        goToPage(res.data.id, title);
      }, 800);
    }
  }

  const updateAction = async (resForm) => {
    const res = await fetchUpdatePage({
      title: resForm.title,
      id: resForm.id
    });
    if (res.status === 200) {
      message.success('修改成功');
      setVisible(false);
      setEditRecord({})
      initDataList();

    }
  }
  const handleOk = async () => {
    const form = formRef.current.props.form;

    form.validateFields(async (err, values) => {
      if (!err) {
        const result = form.getFieldsValue()
        if (isEditModal) {
          updateAction(result)
        } else {
          addAction(result)
        }
      }
    })

  };

  const handleOnChange = (v) => {
    setTitle(v.target.value);
  };

  return (
    <div className="chartListCtn">
      <div className="title">
        <span className="desc">页面</span>
        <Button
          className="newBtn"
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          新建页面
        </Button>
      </div>
      <Table dataSource={dataList} columns={columns} />
      {visible ? <Modal
        title={isEditModal ? "编辑卡片" : "新增卡片"}
        visible={visible}
        onOk={handleOk}
        onCancel={() => {
          setVisible(false);
          setEditRecord({})
        }}
        okText="确认"
        cancelText="取消"
      >
        <FormChartList wrappedComponentRef={formRef} onConfirm={handleOk} recordData={editRecord} />
      </Modal> : null}
    </div>
  );
};

export default ChartList;
