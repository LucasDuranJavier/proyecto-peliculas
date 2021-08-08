import "./Footer.sass";
import { Layout } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { Divider } from 'antd';


const Footer = () => {
  const { Footer } = Layout;

  return (

  <Footer className="footer">
    <Divider />
    <p> By Gabriela Duran </p>
    <div className="contact">
    <a href="https://github.com/Mandisa-94" target="_blanck" className= "gitHub">
     
      <GithubOutlined />
    </a>
    <a href="https://www.linkedin.com/in/gabriela-duran94/" target="_blanck" className="linkedIn">
      
      <LinkedinOutlined />
    </a>

    </div>
  </Footer>);
};

export default Footer;