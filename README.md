# Pokemon-Pokedex Plan

## Components

- Main.js
  - Controls.js
    - Select.js
      - onChange - handleTypeChange
    - Query.js
  - PokeCard.js

## usePokemon hook

-State:

- [pokemon, setPokemon]
- [types, setTypes]
- [selectedType, setSelectedType]
- [query, setQuery]
- useEffect

  - Makes the call to the Pokemon API to then grab Pokemon
  - Makes call to the Pokemon API to grab the Pokemon Types

- Functions
  - handleTypeChange
    - sets the selectedType state
    - selected Type called from the API
    - Pokemon state is updated with API data response

## Planning

- Main component successfully shows the first 20 pokemon return from the API
- Main component successfully shows Pictures of corresponding Pokemon
- Display 3 components to match corresponding Pokemon
- PokeCard CSS to get a general style / idea of displaying Pokemon on the Page
- Type Select Dropdown implemented on page with the different types set as the options from the Types prop
- Type Select Dropdown working to display the Pokemon by their set type
- CSS styling of Type Select Dropdown
- Loading State is implemented so users see the Loading State when the data is being retrieved

- Stretch:
  - User can search by Pokemon name (stretch)
