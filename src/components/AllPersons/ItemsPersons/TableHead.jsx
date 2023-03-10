import { Th } from '../StyledAllPersons';

export const TableHead = () => {
  return (
    <thead>
      <tr>
        <Th className="sort">Name</Th>
        <Th className="sort">Date of birth</Th>
        <Th className="sort">House</Th>
        <Th>Wizard</Th>
        <Th>Ancestry</Th>
        <Th>Is student/staff</Th>
      </tr>
    </thead>
  );
};
