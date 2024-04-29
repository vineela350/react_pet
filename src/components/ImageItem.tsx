// src/components/ImageItem.tsx
import React from 'react';
import styled from 'styled-components';
import { Card, Description,
    CardContent,
    CardImage
     } from '../styles/StyledComponents';

export interface ImageItemProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  creationDate: string;
  isSelected: boolean;      // Assuming you have this prop for selection logic
  onSelectToggle: () => void;
  themeMode: 'dark' | 'light';
}

// Styled components
const ItemContainer = styled.div`
  margin-bottom: 20px;
  text-align: left;
  img {
    width: 100%;
    height: 200px; // You can set this to any fixed height you prefer
    object-fit: cover;
  }
`;

const Label = styled.strong`
  font-weight: bold;
`;

const ImageItem: React.FC<ImageItemProps & { isSelected: boolean; onSelectToggle: () => void; }> = ({
    id,
    imageUrl,
    title,
    description,
    creationDate,
    isSelected,
    onSelectToggle,
    // themeMode if you are passing it
  }) => {
    return (
        <ItemContainer>
        <Card>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={onSelectToggle}
            id={`checkbox-${id}`}
            style={{ marginRight: '10px' }} // Inline style for margin, consider moving it to styled-components
          />
          <label htmlFor={`checkbox-${id}`} style={{ display: 'block' }}>Select</label>
          <CardImage src={imageUrl} alt={title} />
          <CardContent>
            <p><Label>Name:</Label> {title}</p>
            <Description><Label>Description:</Label> {description}</Description>
            <p><Label>Creation Date:</Label> {new Date(creationDate).toLocaleDateString()}</p>
          </CardContent>
        </Card>
      </ItemContainer>
    );
  };

export default ImageItem;
