import { useParams } from "react-router-dom";

const DetailBlog = () => {
  let { id } = useParams();
  return <h1>Hello Detail Blog with id: {id}</h1>;
};

export default DetailBlog;
