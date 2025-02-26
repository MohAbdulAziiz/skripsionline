// components/Footer.js

'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background: #222;
  color: white;
  padding: 40px 0;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;
`;

const FooterLogo = styled.div`
  margin-bottom: 20px;

  img {
    width: 120px;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
  }

  a {
    color: #bbb;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #00bcd4;
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: 15px;

  input {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px 0 0 5px;
  }

  button {
    padding: 10px 20px;
    border: none;
    background: #00bcd4;
    color: white;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #ff9800;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    color: white;
    font-size: 20px;
    transition: color 0.3s;

    &:hover {
      color: #ff9800;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #444;
  font-size: 14px;
  color: #bbb;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Column>
            <p>Address: Jl. Jurug Cinulang, Dampit, Cicalengka </p>
            <p>Phone: +62 812-1400-6515</p>
            <p>Email: abdulaziz27042004@gmail.com</p>
          </Column>
          <Column>
            <FooterLinks>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </FooterLinks>
          </Column>
          <Column>
            <h6>Join Our Newsletter Now</h6>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <NewsletterForm>
              <input type="text" placeholder="Enter your mail" />
              <button type="submit">Subscribe</button>
            </NewsletterForm>
            <SocialIcons>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaPinterest /></a>
            </SocialIcons>
          </Column>
        </Row>
        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
}
