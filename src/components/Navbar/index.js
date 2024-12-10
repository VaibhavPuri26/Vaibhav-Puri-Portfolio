import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaSun, FaMoon, FaGithub , FaLinkedin } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";
import { useTheme } from "styled-components";
import { Bio } from "../../data/constants";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  overflow-x : hidden;
  overflow-y : hidden;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary}; 
  
  
  svg {
    fill: ${({ theme }) => theme.text_primary}; 
  }

  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 16px;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px; /* Add gap between buttons */
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileButtonContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.6s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const LinkedInButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.6s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary}; 
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = ({ toggleTheme, darkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Vaibhav Puri</Span>
          </a>
        </NavLogo>
        <MobileButtonContainer>
          <IconButton onClick={toggleTheme}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </IconButton>
          <GitHubButton href={Bio.github} target="_blank">
            <FaGithub size="24px" />
          </GitHubButton>
          <LinkedInButton href= {Bio.linkedin} target="_blank">
          <FaLinkedin size="24px" />
          </LinkedInButton>
        </MobileButtonContainer>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <IconButton onClick={toggleTheme}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </IconButton>
          <GitHubButton href={Bio.github} target="_blank">
            <FaGithub size="24px" />
          </GitHubButton>
          <LinkedInButton href= {Bio.linkedin} target="_blank">
          <FaLinkedin size="24px" />
          </LinkedInButton>
        </ButtonContainer>
      </NavbarContainer>
      <MobileMenu isOpen={isOpen}>
        <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
        <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
        <MobileLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileLink>
        <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
        <MobileLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
