import { useSelector } from 'react-redux';

export function TotalPitchers() {
  const pitcherList = useSelector(store => store.pitcherList);
  return (
    <div>Total Pitchers: {pitcherList.length}</div>
  );
}