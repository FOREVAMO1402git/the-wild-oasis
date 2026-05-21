import { useSearchParams } from 'react-router-dom';
import Select from './Select';

//eslint-disable-next-line react/prop-types
const SortBy = ({ options, resetParams = [] }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSortBy = searchParams.get('sortBy') || '';

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    resetParams?.forEach(param => searchParams.set(param.field, param.value));
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type='white'
      value={currentSortBy}
      onChange={handleChange}
    />
  );
};

export default SortBy;
