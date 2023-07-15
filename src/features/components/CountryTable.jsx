import React, { useEffect, useState } from "react";
import { Space, Table, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { add, set } from "./countries";
import useFetch from "./../../hooks/useFetch";
import AddForm from "../Form/AddForm";

const columns = [
  {
    title: "Country flag",
    dataIndex: "flags",
    key: "flags",
    render: (flags) => <img src={flags.svg} width={30} />,
  },
  {
    title: "Country name",
    dataIndex: "name",
    key: "name",
    render: (name) => name.common,
  },
  {
    title: "Capital",
    dataIndex: "capital",
    key: "capital",
  },
  {
    title: "Region",
    dataIndex: "region",
    key: "region",
  },
  {
    title: "Population",
    dataIndex: "population",
    key: "population",
  },
  {
    title: "Country Position",
    dataIndex: "latlng",
    key: "latlng",
    render: ([x, y]) => `Lat:${x}  Lng:${y}`,
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <button type="button" style={{ border: "1px solid #ccc" }}>
          Edit
        </button>
      </Space>
    ),
  },
];

function CountryTable() {
  const list = useSelector((state) => state.countries.country);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, usefetch } = useFetch("https://restcountries.com/v3.1/all");

  useEffect(() => {
    usefetch();
  }, []);

  useEffect(() => {
    dispatch(set(data));
  }, [data]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: "50px 50px" }}>
      <div className="head">
        <h2>Countries List</h2>
        <button className="add-btn" type="button" onClick={showModal}>
          Add Country
        </button>
      </div>
      <Table columns={columns} dataSource={list} />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[]}
      >
        <AddForm />
      </Modal>
    </div>
  );
}

export default CountryTable;
