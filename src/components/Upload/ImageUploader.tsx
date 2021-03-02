import React from "react";
import { Upload } from "antd";
import "antd/dist/antd.css";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

interface ImageUploaderProps {
  action: any;
  onChange: (info: any) => void;
  isLoading?: boolean;
  imageUrl?: string | undefined;
  className?: string;
}

const ImageUploader = ({
  action,
  onChange,
  isLoading,
  imageUrl,
  className,
}: ImageUploaderProps) => {
  const uploadButton = (
    <div>
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Upload
      name="file"
      listType="picture-card"
      className={`avatar-uploader ${className}`}
      showUploadList={false}
      multiple={false}
      action={action}
      onChange={onChange}
      style={{ height: "250px" }}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default ImageUploader;
