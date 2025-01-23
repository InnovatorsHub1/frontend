
Day 1: Basic Setup & Variants

Tasks:

Base Structure
# TODO List
- [X] Component setup  
- [X] Props validation - already happening using the tsx
- [X] Basic styling system
- [X] Variant implementation

Size System

- [X] Size definitions
- [X] Padding/margin scales
- [X] Font size scaling
- [X] Icon sizing - 
    /*
          icon={<Delete sx={{ 
            color: 'blue',
            width: '72px',    // Explicitly set width
            height: '72px',   // Explicitly set height
          }}/>}
    */
- [X] CSS Utilities - already happening using sx props and styling

- [X] Theme integration - ????? do we get object for all the things that should be changed?
        /*
            import { styled } from '@mui/material/styles';
            import { createTheme, ThemeProvider } from '@mui/material/styles';

            const customTheme = createTheme({
                palette: {
                    primary: {
                    main: '#1976d2', // צבע ראשי
                    dark: '#115293', // צבע ריחוף
                    contrastText: '#ffffff', // צבע טקסט
                    },
                    secondary: {
                    main: '#ff4081',
                    },
                },
                typography: {
                    fontFamily: '"Roboto", "Arial", sans-serif',
                    body1: {
                    fontSize: '1rem',
                    },
                    button: {
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    },
                },
            });

            import { styled } from '@mui/material/styles';
            import Button from '@mui/material/Button';

            const GenericButton = styled(Button)(({ theme }) => ({
            fontSize: theme.typography.body1.fontSize,
            fontWeight: theme.typography.fontWeightBold,
            padding: '10px 20px',
            textTransform: 'uppercase',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            '&:hover': {
                backgroundColor: theme.palette.primary.dark,
            },
            }));

            <GenericButton>
            כפתור גנרי
            </GenericButton>;

            השימוש יהיה ככה:

            const App = () => {
                return (
                    <ThemeProvider theme={customTheme}>
                    <div style={{ padding: '20px' }}>
                        <GenericButton onClick={() => alert('Clicked!')}>
                        כפתור גנרי
                        </GenericButton>
                    </div>
                    </ThemeProvider>
                );
            };
        */
- [X] Color system - already happening using variant MUI or should we change default?
- [X] Typography helpers - already happening using sx MUI 
- [X] Space utilities - already happening using sx MUI 
 Day 2: States & Features
Tasks:

Interactive States

- [X] Hover effects  - already happening using sx props and styling
- [X] Active states  - 
/*
    for active we can create active object/Type which should hold props like color, isActive, bgColor, Font.. etc..
*/
- [X] Focus styles - built in
    /*
        import React from 'react';
        import Button from '@mui/material/Button';

        export default function FocusButton() {
            return (
                <Button
                onFocus={() => console.log('Button has focus')}
                onBlur={() => console.log('Button lost focus')}
                >
                Focus Me
                </Button>
            );
        }
    */
- [X] Disabled styling - built in

Loading State 

- [X] Spinner component - built in 
- [X] Loading animation - what is the difference between spinner ??
- [X] Text replacement -  we can add in children a prop for skelton
- [X] Disable interaction - built in

Icon Integration

- [X] Icon positioning
- [X] Space management
- [X] Size scaling - 
- [X] Color inheritance

Ripple Effect

- [X] Click animation
- [X] Ripple spreading
- [X] Color adaptation
- [X] Cleanup handling
- Day 3: Documentation & Testing

 Tasks:

 Storybook Setup

- [X] Basic stories
- [X] Variant showcase // primary, secondary, disabled, ועוד.
- [X] Interactive controls //הוספת בקרות אינטראקטיביות מאפשרת למשתמשים לשנות את הפרופסים (props) של הרכיב בזמן אמת ב-Storybook.
- [X] Documentation
 Testing Suite

/*
    we need more info about the test cases and userStory: what is expected to be tested?
    we already created one test but we need to understand what are the requirement per each test.
    for unit test we want to be able to create a generic button and insert it into the git so we don't get errors.
*/
- [ ] Unit tests
- [ ] Integration tests
- [ ] Accessibility tests
- [ ] Visual regression