import { IconButton } from "@mui/material";
import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import "./index.scss";

const AdminIndex = () => {
  const [photos, setPhotos] = useState([]);

  async function getPhotos() {
    try {
      const res = await axios.get(
        "https://order-back-44f875a7dfd3.herokuapp.com/gallery"
      );
      setPhotos(res.data);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    getPhotos();
  }, []);
  const renderActions = (image) => (
    <div className="actions">
      <NavLink to={`/056a714003858955/edit/${image.id}`}>
        <IconButton>
          <EditIcon className="edit-icon" />
        </IconButton>
      </NavLink>
    </div>
  );
  let data =
    photos?.map((image, index) => ({
      key: index + 1,
      id: image._id,
      image: image.url,
    })) || [];

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "image",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <div>
          <img
            style={{ width: "100px", height: "100px" }}
            src={text}
            alt="course"
            className="img-fluid"
          />
        </div>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: renderActions,
    },
  ];
  return (
    <div className="table-wrapper">
      <Table columns={columns} dataSource={data} className="table-custom" />
    </div>
  );
};

export default AdminIndex;
