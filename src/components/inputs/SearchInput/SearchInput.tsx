import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  FormHelperText,
  Box,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popper,
  ClickAwayListener
} from '@mui/material';
import {
  Search as SearchIcon,
  Clear as ClearIcon,
  History as HistoryIcon,
  TrendingUp as TrendingIcon
} from '@mui/icons-material';
import { BaseInputProps } from '../shared/typs';

interface SearchSuggestion {
  text: string;
  type: 'history' | 'trending' | 'suggestion';
}

interface SearchInputProps extends BaseInputProps {
  onSearch?: (value: string) => void;
  clearable?: boolean;
  suggestions?: SearchSuggestion[];
  showSearchHistory?: boolean;
  maxHistoryItems?: number;
  instantSearch?: boolean;
  searchDelay?: number;
  labelPosition?: 'top' | 'left' | 'floating';
}

export const SearchInput: React.FC<SearchInputProps> = ({
  label,
  value,
  onChange,
  onSearch,
  error,
  helperText,
  disabled,
  required,
  clearable = true,
  suggestions = [],
  showSearchHistory = true,
  maxHistoryItems = 5,
  instantSearch = false,
  searchDelay = 300,
  labelPosition = 'floating',
  sx,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load search history from localStorage on mount
  useEffect(() => {
    if (showSearchHistory) {
      const history = localStorage.getItem('searchHistory');
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    }
  }, [showSearchHistory]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  // Handle input change with debounce for instant search
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);

    if (instantSearch && onSearch) {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }

      searchTimeoutRef.current = setTimeout(() => {
        onSearch(newValue);
      }, searchDelay);
    }

    setShowSuggestions(!!newValue);
  };

  // Handle clear button click
  const handleClear = () => {
    onChange('');
    setShowSuggestions(false);
    if (onSearch) {
      onSearch('');
    }
  };

  // Handle search submission
  const handleSubmit = useCallback(() => {
    if (!value.trim()) return;

    if (onSearch) {
      onSearch(value);
    }

    if (showSearchHistory) {
      const newHistory = [value, ...searchHistory]
        .filter((item, index, self) => self.indexOf(item) === index)
        .slice(0, maxHistoryItems);

      setSearchHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    }

    setShowSuggestions(false);
  }, [value, searchHistory, onSearch, showSearchHistory, maxHistoryItems]);

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    if (instantSearch && onSearch) {
      onSearch(suggestion);
    }
    setShowSuggestions(false);
  };

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // Get all suggestions to display
  const getAllSuggestions = (): SearchSuggestion[] => {
    const allSuggestions: SearchSuggestion[] = [];

    // Add history items
    if (showSearchHistory && searchHistory.length > 0) {
      searchHistory.forEach(item => {
        if (item.toLowerCase().includes(value.toLowerCase())) {
          allSuggestions.push({ text: item, type: 'history' });
        }
      });
    }

    // Add provided suggestions
    suggestions.forEach(suggestion => {
      if (suggestion.text.toLowerCase().includes(value.toLowerCase())) {
        allSuggestions.push(suggestion);
      }
    });

    return allSuggestions;
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: labelPosition === 'left' ? 'row' : 'column',
    alignItems: labelPosition === 'left' ? 'center' : 'stretch',
    gap: labelPosition === 'left' ? 2 : 0,
    position: 'relative',
    ...sx
  };

  return (
    <ClickAwayListener onClickAway={() => setShowSuggestions(false)}>
      <Box sx={containerStyles} ref={anchorRef}>
        <FormControl 
          error={!!error}
          disabled={disabled}
          required={required}
          fullWidth
        >
          <TextField
            label={labelPosition !== 'top' ? label : undefined}
            value={value}
            onChange={handleChange}
            onFocus={() => {
              setIsFocused(true);
              setShowSuggestions(!!value);
            }}
            onBlur={() => setIsFocused(false)}
            onKeyPress={handleKeyPress}
            error={!!error}
            disabled={disabled}
            required={required}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color={isFocused ? 'primary' : 'action'} />
                </InputAdornment>
              ),
              endAdornment: clearable && value && (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClear}
                    edge="end"
                    size="small"
                    aria-label="clear search"
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              shrink: labelPosition === 'floating' ? undefined : true,
            }}
            {...props}
          />

          {/* Helper text container */}
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 0.5,
              px: 1
            }}
          >
            <FormHelperText 
              error={!!error}
              sx={{ margin: 0 }}
            >
              {error || helperText}
            </FormHelperText>
          </Box>

          {/* Suggestions popper */}
          <Popper
            open={showSuggestions && (getAllSuggestions().length > 0)}
            anchorEl={anchorRef.current}
            placement="bottom-start"
            style={{ width: anchorRef.current?.clientWidth, zIndex: 1300 }}
          >
            <Paper elevation={3}>
              <List sx={{ py: 0 }}>
                {getAllSuggestions().map((suggestion, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      onClick={() => handleSuggestionClick(suggestion.text)}
                      dense
                    >
                      <InputAdornment position="start" sx={{ mr: 1 }}>
                        {suggestion.type === 'history' && <HistoryIcon fontSize="small" />}
                        {suggestion.type === 'trending' && <TrendingIcon fontSize="small" />}
                        {suggestion.type === 'suggestion' && <SearchIcon fontSize="small" />}
                      </InputAdornment>
                      <ListItemText 
                        primary={suggestion.text}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Popper>
        </FormControl>
      </Box>
    </ClickAwayListener>
  );
};

// Example usage:
/*
const suggestions = [
  { text: 'Popular search 1', type: 'trending' },
  { text: 'Suggestion 1', type: 'suggestion' },
  { text: 'Suggestion 2', type: 'suggestion' },
];

<SearchInput
  label="Search"
  value={searchValue}
  onChange={setSearchValue}
  onSearch={handleSearch}
  suggestions={suggestions}
  showSearchHistory
  instantSearch
  helperText="Search for anything"
/>
*/