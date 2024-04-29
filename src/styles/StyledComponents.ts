import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05); // Slightly scale up cards on hover
  }
  justify-content: space-between; // This will push the footer to the bottom
  height: 100%; // Make cards of equal height
  // Add any other styles you need for your card
`;

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1; // This will make the content stretch to fill the space
`;

export const CardImage = styled.img`
  width: 100%; // Ensure the image takes up the full width of the card
  height: auto; // Maintain aspect ratio
  object-fit: cover; // Cover the available space without stretching
`;

export const Container = styled.div<{ themeMode: 'dark' | 'light' }>`
  padding: 20px;
  width: 100%; // Full width
  min-height: 100vh; // Full height
  margin: 0 auto; // Center the container
  background-color: ${({ themeMode }) => (themeMode === 'dark' ? '#333' : '#fff')};
  color: ${({ themeMode }) => (themeMode === 'dark' ? '#fff' : '#000')};
  box-sizing: border-box; // Include padding in the width calculation
`;

export const Footer = styled.div`
  align-self: end;
`;

export const ImageContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledImage = styled.img`
  width: 100%; // Full width of the card
  height: auto;
  object-fit: cover;
`;

export const ToggleButton = styled.button`
  float: right;
`;

export const Title = styled.h3`
  margin: 0;
  color: #333;
  font-size: 1.5em;
`;

export const Description = styled.p`
  font-size: 1em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; // Show ellipsis after 3 lines
  overflow: hidden;
  margin: 0 0 10px; // Adjust margin as needed
  height: 4.5em; // Adjust based on line height to contain 3 lines
`;

export const DateText = styled.p`
  color: #666;
  font-size: 0.8em;
`;

export const SelectCheckbox = styled.input`
  margin-right: 10px;
`;

export const SearchBar = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: calc(100% - 20px);
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #242526;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3A3B3C;
  }
`;
