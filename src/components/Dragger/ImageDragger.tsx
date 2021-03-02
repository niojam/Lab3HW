import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import "antd/dist/antd.css";

const { Dragger } = Upload;

interface ImageDraggerProps {
  height?: number;
  action: any;
  onChange: (info: any) => void;
}

const ImageDragger = ({ height, action, onChange }: ImageDraggerProps) => {
  return (
    <Dragger
      name={"file"}
      multiple={false}
      onChange={onChange}
      action={action}
      height={height}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p>
    </Dragger>
  );
};

export default ImageDragger;
