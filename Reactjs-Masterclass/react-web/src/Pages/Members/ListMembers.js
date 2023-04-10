import React, { useState, useEffect} from 'react';
import { Button, Space, Table, Tag } from 'antd';
import { GetAllMembers } from '../../Services/Member';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

function ListMembers() {

  const [ allMembers , setAllMembers ] = useState([])

  useEffect(() => {
    GetAllMembersFunc()
  },[])

  const GetAllMembersFunc = async() => {
    try {
      const {data} = await GetAllMembers()
      console.log("Members => ", data)
      setAllMembers(data?.data)
    } catch (error) {
      console.log(error)
      setAllMembers([])
    }
   
  }

  return (
    <div>
        <Button type='primary' style={{ float: "right"}}>Add Member</Button>
        <Table columns={columns} dataSource={allMembers} />
    </div>
  )
}

export default ListMembers