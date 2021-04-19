import React, { Component } from 'react'
import { Table } from 'antd'
import reqwest from 'reqwest'
import "antd/dist/antd.css";
import "../index.css";
import * as firebase from 'firebase';
import '@firebase/firestore';
import { db } from '../constants/firebase'

const columns = [
  {
    title: 'Username',
    dataIndex: 'userName',
    sorter: true,
  },
  {
    title: 'ชื่อจริง นามสกุล',
    dataIndex: 'realName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'เบอร์โทรศัพท์',
    dataIndex: 'phoneNumber',
  },
];

class DataTable extends Component {
  state = {
    data: [],
    loading: false,
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter) => {
    // console.log('pagination')
    // console.log('filters')
    // console.log('sorter')
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  async fetch(params = {}) {
    this.setState({ loading: true });
    const datasnapshot = await db.collection('userData').orderBy("userName").startAt(1).get()
    const getUserData = datasnapshot.docs.map(doc => ({
      userName: doc.data().userName,
      realName: doc.data().realName,
      sex: doc.data().sex,
      age: doc.data().age,
      education: doc.data().education,
      phoneNumber: doc.data().phoneNumber,
      email: doc.data().email,
    }))
    // console.log('data', getUserData);
    this.setState({
      loading: false,
      data: getUserData
    })
  };

  render() {
    const { data, loading } = this.state;
    return (
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}

      />
    );
  }
}

export default DataTable
