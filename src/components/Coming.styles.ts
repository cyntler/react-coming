/**
 * @name react-coming
 * @author cyntler <damian@cyntler.com>
 */
import styled from 'styled-components';

export const Container = styled.main`
  position: fixed;
  display: flex;
  font-family: 'Merriweather', serif;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  left: 0;
  top: 0;
  z-index: 999;
  color: #000000;
  visibility: visible;
  opacity: 1;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: inline-block;
  margin: 0 10px;
  width: 100px;

  @media (max-width: 480px) {
    width: 40%;
    margin-bottom: 20px;
  }
`;

export const Value = styled.p`
  border: 2px solid #000000;
  padding: 17px 0;
  font-size: 32px;
  letter-spacing: 2px;
  font-family: 'Times New Roman';
  margin: 0;
  text-align: center;
`;

export const Name = styled.p`
  text-transform: lowercase;
  margin: 8px 0 0 0;
  text-align: center;
  font-size: 16px;
`;
