// NameSearchList.tsx
export interface SearchResultProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  group: string;
  position: string;
}

interface NameSearchListProps {
  searchResults: SearchResultProps[];
  id: string;
}

const NameSearchList = ({ id, searchResults }: NameSearchListProps) => {
  return (
    <datalist id={id}>
      {searchResults?.map((result, index) => (
        <option key={index} value={result.name}></option>
      ))}
    </datalist>
  );
};

export default NameSearchList;
