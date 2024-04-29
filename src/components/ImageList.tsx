// src/components/ImageList.tsx
import React, { useState, useMemo } from 'react';
import useFetchImages from '../hooks/useFetchImage';
import ImageItem from './ImageItem';
import { useTheme } from '../context/ThemeContext'; // Adjust the path to your ThemeContext
import { GridContainer } from '../styles/StyledComponents';

import {
  Container,
  SearchBar,
  Button
} from '../styles/StyledComponents';

type SelectedPetsState = {
    [key: string]: boolean;
  };
  
  const ImageList = () => {
    const { pets, loading, error } = useFetchImages();
    const { theme, toggleTheme } = useTheme(); // Use the theme context
    const [selectedPets, setSelectedPets] = useState<SelectedPetsState>({});
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    // Create a toggle for the theme
  const handleThemeToggle = () => {
    toggleTheme();
  };


  const handleSelectToggle = (id: string) => {
    setSelectedPets((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
  };

  const handleSelectAll = () => {
    const newSelected: SelectedPetsState = {};
    pets.forEach((pet) => {
      newSelected[pet.id] = true;
    });
    setSelectedPets(newSelected);
  };

  const handleClearSelection = () => {
    setSelectedPets({});
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDownloadSelected = () => {
    Object.entries(selectedPets).forEach(([id, isSelected]) => {
      if (isSelected) {
        const pet = pets.find((pet) => pet.id === id);
        if (pet) {
          const a = document.createElement('a');
          a.href = pet.imageUrl;
          a.download = pet.title.replace(/\s/g, '_') + '.jpg';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      }
    });
  };

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  // Calculate filtered and sorted pets list
  const filteredAndSortedPets = useMemo(() => {
    const filteredPets = pets.filter((pet) =>
      pet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return filteredPets.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  }, [pets, searchTerm, sortOrder]);

  if (loading) return <Container themeMode={theme}>Loading...</Container>;
  if (error) return <Container themeMode={theme}>Error: {error}</Container>;

  return (
    <Container themeMode={theme}>
      <Button onClick={handleThemeToggle} style={{ marginBottom: '1rem' }}>
        Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </Button>
      <SearchBar
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Button onClick={handleSelectAll}>Select All</Button>
      <Button onClick={handleClearSelection}>Clear Selection</Button>
      <Button onClick={toggleSortOrder}>
        Sort by Name {sortOrder.toUpperCase()}
      </Button>
      <Button onClick={handleDownloadSelected}>Download Selected</Button>

      <GridContainer>
        {filteredAndSortedPets.map((pet) => (
          <ImageItem
            key={pet.id}
            id={pet.id}
            imageUrl={pet.imageUrl}
            title={pet.title}
            description={pet.description}
            creationDate={pet.creationDate}
            isSelected={!!selectedPets[pet.id]}
            onSelectToggle={() => handleSelectToggle(pet.id)}
            themeMode={theme} // Pass the theme mode to each ImageItem
          />
        ))}
      </GridContainer>
    </Container>
  );
};

export default ImageList;