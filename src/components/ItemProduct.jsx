/* eslint-disable react/prop-types */
import { Avatar, Button, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { PlusOutlined } from '@ant-design/icons';

export default function ItemProduct({ id, name, description, price }) {
  const addProduct = (product) => {
    console.log(product);
  };
  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        />
      }
      actions={[
        <h1 key="price">${price}</h1>,
        <Button
          key="add"
          onClick={() => addProduct({ id, name, description, price })}
        >
          Agregar
          <PlusOutlined />
        </Button>,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        }
        title={name}
      />
    </Card>
  );
}
